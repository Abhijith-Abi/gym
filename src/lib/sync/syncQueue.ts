import type { SyncOperation } from '@/types'

/**
 * The custom sync queue (design C.7 — queue-authority boundary).
 *
 * This queue owns ONLY the composite "complete session" domain op — the single
 * unit that spans multiple docs with ordering and needs user-visible status. It
 * is an ORCHESTRATION/STATUS layer, not a transport layer: single-doc,
 * naturally-idempotent writes (SetLog create/update, recoveryLogs/{date},
 * bodyMeasurements, notes, hydration, goals, settings/profile) go DIRECTLY
 * through the Firestore SDK and are NEVER enqueued here.
 *
 * These helpers are PURE operations over the SyncOperation[] the syncStore
 * persists, so dedupe/retry/backoff are deterministically unit-testable.
 */

/** Max attempts before an op is parked (surfaced to the user, not silently lost). */
export const MAX_ATTEMPTS = 8

/** Base backoff in ms; doubles per attempt, capped. */
export const BACKOFF_BASE_MS = 1_000
export const BACKOFF_MAX_MS = 60_000

/**
 * Enqueue an op, deduping by `SyncOperation.id` (C.7 — the id dedupes replays
 * of the composite op). A re-enqueue of an id already present is a no-op: the
 * existing op (with its accumulated attempt count) is kept.
 */
export function enqueue(
  queue: ReadonlyArray<SyncOperation>,
  op: SyncOperation,
): SyncOperation[] {
  if (queue.some((q) => q.id === op.id)) return [...queue]
  return [...queue, op]
}

/** Remove an op by id (called once it has succeeded or been dropped). */
export function dequeue(
  queue: ReadonlyArray<SyncOperation>,
  id: string,
): SyncOperation[] {
  return queue.filter((q) => q.id !== id)
}

/** The next op to attempt (FIFO by insertion / createdAtMs). */
export function peek(
  queue: ReadonlyArray<SyncOperation>,
): SyncOperation | undefined {
  return [...queue].sort((a, b) => a.createdAtMs - b.createdAtMs)[0]
}

/** Record a failed attempt: bump attempts + stamp lastError. */
export function recordFailure(
  queue: ReadonlyArray<SyncOperation>,
  id: string,
  error: string,
): SyncOperation[] {
  return queue.map((q) =>
    q.id === id ? { ...q, attempts: q.attempts + 1, lastError: error } : q,
  )
}

/** Backoff for the Nth attempt (exponential, capped). */
export function backoffMs(attempts: number): number {
  const ms = BACKOFF_BASE_MS * 2 ** Math.max(0, attempts - 1)
  return Math.min(ms, BACKOFF_MAX_MS)
}

/** An op is retryable until it exhausts MAX_ATTEMPTS. */
export function isRetryable(op: Pick<SyncOperation, 'attempts'>): boolean {
  return op.attempts < MAX_ATTEMPTS
}

/** Deterministic id for the composite completion op (dedupes replays, C.7). */
export function completeSessionOpId(sessionId: string): string {
  return `complete-session:${sessionId}`
}

/** Deterministic id for a per-period summary op (Step 3). */
export function summaryOpId(
  sessionId: string,
  period: 'weekly' | 'monthly',
): string {
  return `summary-${period}:${sessionId}`
}
