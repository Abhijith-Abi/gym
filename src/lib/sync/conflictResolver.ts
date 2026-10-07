import type { SessionStatus, SyncOperation } from '@/types'

/**
 * Deterministic conflict/immutability rules for the sync layer (design C.7).
 *
 * Pure — reads nothing, writes nothing (the highest-value Vitest target). It is
 * the service-layer defense-in-depth that mirrors the Firestore rules of §C.9:
 *   - a COMPLETED session is immutable: any op that writes to it, appends a
 *     child under it, or deletes it is DROPPED (FR-39, AC-11);
 *   - the one exception is the permitted `summaryApplied` false→true bookkeeping
 *     toggle, which is allowed through;
 *   - for mutable docs, server `updatedAt` wins, and last-writer-wins per field
 *     is only honored inside a `baseUpdatedAt`-guarded transaction.
 *
 * This layer is advisory/defensive; the authoritative guarantee is the rules.
 */

/** Minimal view of the server-side session state the resolver needs. */
export interface SessionImmutabilityState {
  status: SessionStatus
  /** stored pre-image of the toggle; the toggle is permitted only false→true. */
  summaryApplied: boolean
}

export type ResolveDecision =
  | { action: 'apply' }
  | { action: 'drop'; reason: string }

/**
 * True iff a composite op's payload is nothing but the permitted post-completion
 * bookkeeping toggle (summaryApplied, with updatedAt). Mirrors
 * `onlySummaryAppliedChanged()` in the rules.
 */
export function isSummaryToggleOnly(payload: Record<string, unknown>): boolean {
  const keys = Object.keys(payload).filter((k) => k !== 'updatedAt')
  return keys.length === 1 && keys[0] === 'summaryApplied' && payload.summaryApplied === true
}

/**
 * Decide whether an op that targets a workout session (or a child under it) may
 * be applied, given the session's current server state.
 *
 * A COMPLETED session is frozen. The only mutation allowed through is the
 * summaryApplied false→true toggle on the session doc itself; every other
 * write/append/delete is dropped.
 */
export function resolveSessionOp(
  op: Pick<SyncOperation, 'op' | 'payload'>,
  session: SessionImmutabilityState,
  target: 'session' | 'child' = 'session',
): ResolveDecision {
  if (session.status !== 'COMPLETED') return { action: 'apply' }

  // Appending/creating a child under a completed session is never allowed.
  if (target === 'child') {
    return { action: 'drop', reason: 'append-to-completed-session' }
  }

  if (op.op === 'delete') {
    return { action: 'drop', reason: 'delete-completed-session' }
  }

  // The single permitted post-completion mutation.
  if (isSummaryToggleOnly(op.payload)) {
    if (session.summaryApplied === true) {
      // Already applied by another device — the goal is met, so dropping the
      // replay is correct (not an error). See syncManager MEDIUM-3 handling.
      return { action: 'drop', reason: 'summary-already-applied' }
    }
    return { action: 'apply' }
  }

  return { action: 'drop', reason: 'mutate-completed-session' }
}

/**
 * Last-writer-wins for a mutable doc: the write whose `updatedAt` is strictly
 * newer wins. `serverUpdatedAt`/`incomingUpdatedAt` are epoch ms. Ties keep the
 * server copy (server authority), matching "server updatedAt wins" in C.7.
 */
export function resolveLastWriterWins(
  serverUpdatedAt: number | undefined,
  incomingUpdatedAt: number | undefined,
): 'server' | 'incoming' {
  if (incomingUpdatedAt === undefined) return 'server'
  if (serverUpdatedAt === undefined) return 'incoming'
  return incomingUpdatedAt > serverUpdatedAt ? 'incoming' : 'server'
}

/**
 * A `baseUpdatedAt`-guarded field merge is only safe when the op's recorded
 * base matches the current server `updatedAt` (optimistic concurrency). When
 * the base is stale the op must be re-derived against the fresh server doc
 * rather than blindly applied.
 */
export function baseGuardSatisfied(
  baseUpdatedAt: number | undefined,
  serverUpdatedAt: number | undefined,
): boolean {
  if (baseUpdatedAt === undefined) return true
  return baseUpdatedAt === serverUpdatedAt
}
