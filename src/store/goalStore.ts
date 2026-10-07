import { create } from 'zustand'
import type { Achievement, GoalRecord } from '@/types'

/**
 * Goals + achievements cache (design C.5). NOT persisted — hydrated from
 * goalService / Firestore. `newlyUnlocked` queues achievement keys awaiting the
 * unlock animation.
 */
interface GoalStoreState {
  goals: GoalRecord[]
  achievements: Achievement[]
  loaded: boolean

  setGoals: (g: GoalRecord[]) => void
  upsertGoal: (g: GoalRecord) => void
  removeGoal: (id: string) => void
  setAchievements: (a: Achievement[]) => void
  addAchievements: (a: Achievement[]) => void
  setLoaded: (v: boolean) => void
  clear: () => void
}

export const useGoalStore = create<GoalStoreState>((set) => ({
  goals: [],
  achievements: [],
  loaded: false,

  setGoals: (goals) => set({ goals }),
  upsertGoal: (g) =>
    set((s) => ({
      goals: [g, ...s.goals.filter((x) => x.id !== g.id)],
    })),
  removeGoal: (id) =>
    set((s) => ({ goals: s.goals.filter((x) => x.id !== id) })),
  setAchievements: (achievements) => set({ achievements }),
  addAchievements: (a) =>
    set((s) => {
      const keys = new Set(s.achievements.map((x) => x.key))
      const merged = [...s.achievements, ...a.filter((x) => !keys.has(x.key))]
      return { achievements: merged }
    }),
  setLoaded: (loaded) => set({ loaded }),
  clear: () => set({ goals: [], achievements: [], loaded: false }),
}))
