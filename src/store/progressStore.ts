import { create } from 'zustand'
import type { ExerciseHistory, PersonalRecord } from '@/types'

/**
 * Progress cache (design C.5). Holds bounded exerciseHistory per exercise (the
 * source for Previous Performance + PR detection) and freshly-detected PRs
 * awaiting celebration. NOT persisted — hydrated from progressService /
 * Firestore (which is itself offline-persistent).
 */
interface ProgressStoreState {
  /** exerciseId -> bounded history (recentSessions ring + bests). */
  history: Record<string, ExerciseHistory>
  /** PRs detected this session, pending the celebration animation. */
  pendingCelebration: PersonalRecord[]

  setHistory: (exerciseId: string, history: ExerciseHistory) => void
  getHistory: (exerciseId: string) => ExerciseHistory | undefined
  mergeHistories: (histories: ExerciseHistory[]) => void
  queueCelebration: (prs: PersonalRecord[]) => void
  clearCelebration: () => void
  clear: () => void
}

export const useProgressStore = create<ProgressStoreState>((set, get) => ({
  history: {},
  pendingCelebration: [],

  setHistory: (exerciseId, history) =>
    set((s) => ({ history: { ...s.history, [exerciseId]: history } })),

  getHistory: (exerciseId) => get().history[exerciseId],

  mergeHistories: (histories) =>
    set((s) => {
      const next = { ...s.history }
      for (const h of histories) next[h.exerciseId] = h
      return { history: next }
    }),

  queueCelebration: (prs) =>
    set((s) => ({ pendingCelebration: [...s.pendingCelebration, ...prs] })),

  clearCelebration: () => set({ pendingCelebration: [] }),

  clear: () => set({ history: {}, pendingCelebration: [] }),
}))
