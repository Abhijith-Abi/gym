import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { safeJSONStorage } from './safeStorage'
import { dequeue, enqueue, recordFailure } from '@/lib/sync/syncQueue'
import type { SyncOperation } from '@/types'

/**
 * Durable sync queue + user-visible sync status (design C.5/C.7).
 *
 * This is one of the only three persisted stores (timer/settings/sync). It
 * holds ONLY the composite "complete session" ops (and their per-session
 * summary ops) — single-doc idempotent writes are never placed here; the
 * Firestore SDK's own offline cache owns those (queue-authority boundary, C.7).
 */

export type SyncPhase = 'idle' | 'syncing' | 'offline' | 'error'

interface SyncStoreState {
  queue: SyncOperation[]
  phase: SyncPhase
  online: boolean
  lastSyncedAtMs?: number
  lastError?: string

  enqueueOp: (op: SyncOperation) => void
  removeOp: (id: string) => void
  markFailure: (id: string, error: string) => void
  setPhase: (phase: SyncPhase) => void
  setOnline: (online: boolean) => void
  markSynced: (atMs?: number) => void
  pendingCount: () => number
}

export const useSyncStore = create<SyncStoreState>()(
  persist(
    (set, get) => ({
      queue: [],
      phase: 'idle',
      online: true,

      enqueueOp: (op) => set((s) => ({ queue: enqueue(s.queue, op) })),
      removeOp: (id) => set((s) => ({ queue: dequeue(s.queue, id) })),
      markFailure: (id, error) =>
        set((s) => ({ queue: recordFailure(s.queue, id, error), lastError: error })),
      setPhase: (phase) => set({ phase }),
      setOnline: (online) =>
        set((s) => ({
          online,
          // reflect connectivity in the visible phase unless mid-sync/error
          phase: online
            ? s.phase === 'offline'
              ? 'idle'
              : s.phase
            : 'offline',
        })),
      markSynced: (atMs) =>
        set({ lastSyncedAtMs: atMs ?? Date.now(), lastError: undefined, phase: 'idle' }),
      pendingCount: () => get().queue.length,
    }),
    {
      name: 'forgefit-sync',
      storage: safeJSONStorage(),
      // Only the durable queue survives reloads; transient status is recomputed.
      partialize: (s) => ({ queue: s.queue, lastSyncedAtMs: s.lastSyncedAtMs }),
    },
  ),
)
