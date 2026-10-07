export type SyncEntity =
  | 'session'
  | 'exerciseSession'
  | 'setLog'
  | 'personalRecord'
  | 'exerciseHistory'
  | 'summaryWeekly'
  | 'summaryMonthly'
  | 'completeSession'

export type SyncOp = 'set' | 'update' | 'create' | 'delete'

/**
 * SyncOperation — Zustand/persist + IndexedDB queue (C.3).
 * The custom syncQueue owns ONLY the composite "complete session" op (C.7).
 */
export interface SyncOperation {
  id: string
  entity: SyncEntity
  op: SyncOp
  path: string
  payload: Record<string, unknown>
  baseUpdatedAt?: number
  createdAtMs: number
  attempts: number
  lastError?: string
}
