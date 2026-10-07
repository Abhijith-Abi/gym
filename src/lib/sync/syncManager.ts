import { waitForPendingWrites, type Firestore } from 'firebase/firestore'
import {
  applySessionSummaries,
  type ApplySummaryInput,
} from '@/services/analyticsService'
import {
  completeSession,
  type CompleteSessionInput,
} from '@/services/sessionService'
import type { ServiceResult, SyncOperation } from '@/types'
import { resolveSessionOp, type SessionImmutabilityState } from './conflictResolver'
import { isOnline } from './networkStatus'
import { completeSessionOpId } from './syncQueue'

/**
 * Sync orchestration (design C.7). The custom queue owns ONLY the composite
 * "complete session" op; this manager flushes it with the HIGH-1 flush barrier
 * and drives Steps 2 and 3.
 *
 * Step 2 (completion batch) is gated on `await waitForPendingWrites(db)` so the
 * COMPLETED flip is strictly last — every previously-queued single-doc SetLog
 * create/update has been acknowledged before the parent flips, so no
 * `parentOpen()`-gated create can arrive afterward. As a belt-and-suspenders
 * invariant the op is HELD while `navigator.onLine` is false and the barrier
 * only starts on reconnect.
 *
 * No Firestore is imported by the UI; the manager composes services, which are
 * the only Firestore callers (C.2 boundary).
 */

/** Documented completion guards (design C.7). */
export const MAX_SETS_PER_SESSION = 100
export const FIRESTORE_BATCH_LIMIT = 500

/**
 * Number of writes the Step-2 completion batch will issue for a given session:
 * 1 session doc + N exercise docs + M set docs + P PR docs + H history upserts.
 * Documented worst case ~73 (1 + 8 + 48 + 8 + 8) stays comfortably under the
 * 500-writes-per-batch limit; the <=100-set guard keeps it bounded (C.7).
 */
export function completionWriteCount(input: CompleteSessionInput): number {
  return (
    1 +
    input.exercises.length +
    input.sets.length +
    input.personalRecords.length +
    input.historyRollups.length
  )
}

/** True iff the completion batch stays within the single-batch write limit. */
export function completionWithinBatchLimit(input: CompleteSessionInput): boolean {
  return (
    input.sets.length <= MAX_SETS_PER_SESSION &&
    completionWriteCount(input) < FIRESTORE_BATCH_LIMIT
  )
}

/** Payload carried by a `complete-session` SyncOperation. */
export interface CompleteSessionPayload {
  completion: CompleteSessionInput
  summary: ApplySummaryInput
  /** server-known session state for the conflict/immutability check. */
  sessionState?: SessionImmutabilityState
}

export interface SyncManagerDeps {
  db: Firestore
  /** inject for tests; defaults to the real barrier. */
  waitForPending?: (db: Firestore) => Promise<void>
  /** inject for tests; defaults to navigator.onLine. */
  online?: () => boolean
  /** inject for tests; defaults to the real sessionService.completeSession. */
  runStep2?: (input: CompleteSessionInput) => Promise<ServiceResult<void>>
  /** inject for tests; defaults to the real analyticsService.applySessionSummaries. */
  runStep3?: (
    input: ApplySummaryInput,
  ) => Promise<ServiceResult<'applied' | 'noop'>>
}

export type FlushOutcome =
  | { status: 'done' }
  | { status: 'held-offline' }
  | { status: 'dropped'; reason: string }
  | { status: 'retry'; error: string }

/** True iff the op is the composite completion op (the only kind we own). */
export function isCompleteSessionOp(op: SyncOperation): boolean {
  return op.entity === 'completeSession'
}

/** Deterministic id for the completion op of a session (dedupes replays, C.7). */
export { completeSessionOpId }

/**
 * Flush a single composite "complete session" op (Step 2 then Step 3). Pure of
 * UI; all writes go through the injected services. Idempotent: deterministic
 * doc ids mean a re-issued batch overwrites rather than duplicates (AC-10), and
 * Step 3 no-ops when `summaryApplied` is already true.
 */
export async function flushCompleteSession(
  op: SyncOperation,
  payload: CompleteSessionPayload,
  deps: SyncManagerDeps,
): Promise<FlushOutcome> {
  const online = deps.online ?? isOnline
  const barrier = deps.waitForPending ?? waitForPendingWrites
  const runStep2 = deps.runStep2 ?? completeSession
  const runStep3 = deps.runStep3 ?? applySessionSummaries

  // Immutability / conflict guard (defense in depth over the rules). If the
  // server session is already COMPLETED and this is not the permitted summary
  // toggle, drop the op rather than overwrite finished history.
  if (payload.sessionState) {
    const decision = resolveSessionOp(
      { op: op.op, payload: op.payload },
      payload.sessionState,
    )
    if (decision.action === 'drop') {
      return { status: 'dropped', reason: decision.reason }
    }
  }

  // Belt-and-suspenders: hold the completion op while offline; the barrier only
  // starts once connectivity returns.
  if (!online()) return { status: 'held-offline' }

  try {
    // HIGH-1 flush barrier: do not flip COMPLETED until every prior single-doc
    // write (incl. this session's SetLog creates) is acknowledged.
    await barrier(deps.db)
  } catch (e) {
    return { status: 'retry', error: errMsg(e) }
  }

  // Step 2 — completion batch (atomic, deterministic ids).
  const step2 = await runStep2(payload.completion)
  if (!step2.ok) return { status: 'retry', error: step2.code }

  // Step 3 — summary transaction. Enqueued only AFTER Step 2 succeeds; retries
  // independently. A second-device denial because summaryApplied is already
  // true is reported by the service as 'noop' (SUCCESS, goal met) — never an
  // error (MEDIUM-3).
  const step3 = await runStep3(payload.summary)
  if (!step3.ok) {
    // Step 3 can retry independently; Step 2 is durably committed and the
    // session is now immutable except for the summaryApplied toggle.
    return { status: 'retry', error: step3.code }
  }

  return { status: 'done' }
}

/**
 * Treat an analytics denial that means "summary already applied by another
 * device" as success, not a retryable error (MEDIUM-3). Firestore surfaces this
 * as a permission-denied on the toggle whose pre-image is already `true`.
 */
export function isBenignSummaryDenial(result: ServiceResult<unknown>): boolean {
  return !result.ok && result.code === 'permission-denied'
}

function errMsg(e: unknown): string {
  return e instanceof Error ? e.message : 'sync/unknown'
}
