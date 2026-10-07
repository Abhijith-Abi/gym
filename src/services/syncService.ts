import { getDb } from '@/lib/firebase/config'
import {
  flushCompleteSession,
  type CompleteSessionPayload,
  type FlushOutcome,
} from '@/lib/sync/syncManager'
import { completeSessionOpId } from '@/lib/sync/syncQueue'
import type { ServiceResult, SyncOperation } from '@/types'
import { notConfigured, ok } from './serviceResult'

/**
 * Public sync entry (design C.7). The custom syncQueue owns ONLY the composite
 * "complete session" op; single-doc idempotent writes go directly through the
 * SDK and are never routed here. This service composes the pure syncManager
 * with the guarded Firestore client; under empty env it short-circuits (C.2).
 */

/** Build the composite completion SyncOperation (deterministic, dedupe-able id). */
export function buildCompleteSessionOp(
  sessionId: string,
  payload: CompleteSessionPayload,
  now = Date.now(),
): SyncOperation {
  return {
    id: completeSessionOpId(sessionId),
    entity: 'completeSession',
    op: 'set',
    path: `users/${payload.completion.session.uid}/workoutSessions/${sessionId}`,
    payload: { summaryApplied: false },
    createdAtMs: now,
    attempts: 0,
  }
}

/**
 * Flush one composite completion op. Returns the outcome so the caller
 * (syncStore driver) can dequeue on done/dropped or retry with backoff.
 */
export async function runCompleteSession(
  op: SyncOperation,
  payload: CompleteSessionPayload,
): Promise<ServiceResult<FlushOutcome>> {
  const db = getDb()
  if (!db) return notConfigured()
  const outcome = await flushCompleteSession(op, payload, { db })
  return ok(outcome)
}
