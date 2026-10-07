import { create } from 'zustand'
import type { RecoveryLog } from '@/types'

/**
 * Recovery + hydration cache (design C.5). Holds today's log + recent logs.
 * NOT persisted — hydrated from recoveryService / Firestore. The manual-deload
 * flag is a transient UI intent fed into the progression lib.
 */
interface RecoveryStoreState {
  today: RecoveryLog | null
  recent: RecoveryLog[]
  manualDeload: boolean
  loaded: boolean

  setToday: (log: RecoveryLog | null) => void
  setRecent: (logs: RecoveryLog[]) => void
  upsert: (log: RecoveryLog) => void
  setManualDeload: (v: boolean) => void
  setLoaded: (v: boolean) => void
  clear: () => void
}

export const useRecoveryStore = create<RecoveryStoreState>((set) => ({
  today: null,
  recent: [],
  manualDeload: false,
  loaded: false,

  setToday: (today) => set({ today }),
  setRecent: (recent) => set({ recent }),
  upsert: (log) =>
    set((s) => {
      const rest = s.recent.filter((x) => x.date !== log.date)
      return {
        today: log,
        recent: [log, ...rest].sort((a, b) => b.date.localeCompare(a.date)),
      }
    }),
  setManualDeload: (manualDeload) => set({ manualDeload }),
  setLoaded: (loaded) => set({ loaded }),
  clear: () =>
    set({ today: null, recent: [], manualDeload: false, loaded: false }),
}))
