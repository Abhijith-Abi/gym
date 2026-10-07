import { create } from 'zustand'
import { EXERCISES_BY_ID, SEED_EXERCISES } from '@/data/exercises'
import type { Exercise } from '@/types'

/**
 * In-memory exercise catalog = seed library + user custom exercises (FR-20).
 * This store is NOT persisted to localStorage (C.5 — data stores hold ephemeral
 * caches). Custom-exercise persistence to Firestore is out of this feature's
 * scope (there is no library collection in the C.4 schema); custom exercises
 * live here for the session and are re-derived from Firestore when that service
 * lands. Substitutions preserve history because they reference exercise ids
 * (never rewrite logged sets).
 */
interface ExerciseState {
  custom: Exercise[]
  addCustom: (exercise: Exercise) => void
  all: () => Exercise[]
  byId: (id: string) => Exercise | undefined
}

export const useExerciseStore = create<ExerciseState>((set, get) => ({
  custom: [],
  addCustom: (exercise) =>
    set((s) => ({ custom: [...s.custom, exercise] })),
  all: () => [...SEED_EXERCISES, ...get().custom],
  byId: (id) =>
    EXERCISES_BY_ID[id] ?? get().custom.find((e) => e.id === id),
}))
