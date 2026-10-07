import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { safeJSONStorage } from './safeStorage'
import { APP_SCHEMA_VERSION } from '@/lib/constants'
import { setVolumeKg } from '@/lib/volume'
import type {
  DayOfWeek,
  ExerciseSet,
  PlanDay,
  PlanEntry,
  SessionStatus,
  SetLog,
} from '@/types'

/**
 * Active-workout session engine (design C.5, C.16 step 7). This is the local,
 * optimistic source of truth for the in-gym loop: it holds the current session,
 * its exercises (derived from the plan), and every in-flight set. It is a
 * Zustand store with `persist` so a mid-session app close/reopen RESUMES the
 * exact same session (the Firestore mirror is written by the services on
 * meaningful events; here we keep the fast UI copy).
 *
 * Session states: NOT_STARTED -> IN_PROGRESS -> COMPLETED | ABANDONED.
 *
 * NOTE: this store never imports firebase/firestore directly (C.5). Persisting
 * live sets to Firestore is the service layer's job (setService); the store is
 * the optimistic cache + resume anchor.
 */

/** A live set row kept in the store (superset of the Firestore SetLog fields we edit live). */
export interface ActiveSet {
  id: string
  exerciseSessionId: string
  setIndex: number
  targetReps?: number
  actualReps?: number
  durationSeconds?: number
  weightKg: number
  rpe?: number
  rir?: number
  isWarmup: boolean
  isCompleted: boolean
  completedAtMs?: number
  isPr?: SetLog['isPr']
}

/** A live exercise within the active session (one plan entry). */
export interface ActiveExercise {
  exerciseSessionId: string
  exerciseId: string
  order: number
  supersetGroup?: string
  intervalWorkSeconds?: number
  intervalRestSeconds?: number
  prescription: ExerciseSet
  sets: ActiveSet[]
}

export interface ActiveSession {
  id: string
  uid: string
  planId: string
  dayId: DayOfWeek
  workoutName: string
  status: SessionStatus
  startedAtMs?: number
  completedAtMs?: number
  deviceId: string
  schemaVersion: number
  exercises: ActiveExercise[]
  /** index of the exercise currently in focus. */
  currentExerciseIndex: number
}

export interface StartSessionArgs {
  uid: string
  planId: string
  day: PlanDay
  deviceId: string
  now?: number
}

interface SessionStoreState {
  session: ActiveSession | null

  start: (args: StartSessionArgs) => void
  setCurrentExercise: (index: number) => void
  /** Add a fresh (uncompleted) set row to an exercise, autofilled from the last set/prescription. */
  addSet: (exerciseSessionId: string) => void
  updateSet: (
    exerciseSessionId: string,
    setId: string,
    patch: Partial<Omit<ActiveSet, 'id' | 'exerciseSessionId'>>,
  ) => void
  /** Mark a set complete (stamps completedAtMs). Returns the completed set, if any. */
  completeSet: (
    exerciseSessionId: string,
    setId: string,
    now?: number,
  ) => ActiveSet | null
  removeSet: (exerciseSessionId: string, setId: string) => void
  /** Flag PRs on an already-logged set (progressStore detects, this records). */
  flagPr: (
    exerciseSessionId: string,
    setId: string,
    flags: NonNullable<SetLog['isPr']>,
  ) => void
  finish: (now?: number) => void
  abandon: (now?: number) => void
  clear: () => void

  // selectors
  totalPlannedSets: () => number
  completedSetCount: () => number
  totalVolumeKg: () => number
}

import { getDefaultStartingWeight } from '@/lib/exerciseDefaults'

let idCounter = 0
function genId(prefix: string): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return `${prefix}_${crypto.randomUUID()}`
  }
  idCounter += 1
  return `${prefix}_${Date.now()}_${idCounter}`
}

function entryToExercise(entry: PlanEntry, sessionId: string): ActiveExercise {
  return {
    exerciseSessionId: `${sessionId}__${entry.exerciseId}__${entry.order}`,
    exerciseId: entry.exerciseId,
    order: entry.order,
    ...(entry.supersetGroup ? { supersetGroup: entry.supersetGroup } : {}),
    ...(entry.intervalWorkSeconds !== undefined
      ? { intervalWorkSeconds: entry.intervalWorkSeconds }
      : {}),
    ...(entry.intervalRestSeconds !== undefined
      ? { intervalRestSeconds: entry.intervalRestSeconds }
      : {}),
    prescription: entry.prescription,
    sets: [],
  }
}

export const useSessionStore = create<SessionStoreState>()(
  persist(
    (set, get) => ({
      session: null,

      start: ({ uid, planId, day, deviceId, now }) => {
        const startedAtMs = now ?? Date.now()
        const sessionId = genId('sess')
        const exercises = [...day.entries]
          .sort((a, b) => a.order - b.order)
          .map((e) => entryToExercise(e, sessionId))
        set({
          session: {
            id: sessionId,
            uid,
            planId,
            dayId: day.dayId,
            workoutName: day.workoutName,
            status: 'IN_PROGRESS',
            startedAtMs,
            deviceId,
            schemaVersion: APP_SCHEMA_VERSION,
            exercises,
            currentExerciseIndex: 0,
          },
        })
      },

      setCurrentExercise: (index) =>
        set((s) =>
          s.session
            ? {
                session: {
                  ...s.session,
                  currentExerciseIndex: Math.max(
                    0,
                    Math.min(index, s.session.exercises.length - 1),
                  ),
                },
              }
            : {},
        ),

      addSet: (exerciseSessionId) =>
        set((s) => {
          if (!s.session) return {}
          return {
            session: {
              ...s.session,
              exercises: s.session.exercises.map((ex) => {
                if (ex.exerciseSessionId !== exerciseSessionId) return ex
                const prev = ex.sets[ex.sets.length - 1]
                const isDuration =
                  ex.intervalWorkSeconds !== undefined ||
                  ex.prescription.targetRepMax === 0
                const defaultWeight = getDefaultStartingWeight(ex.exerciseId)
                const newSet: ActiveSet = {
                  id: genId('set'),
                  exerciseSessionId,
                  setIndex: ex.sets.length,
                  targetReps: isDuration ? undefined : ex.prescription.targetRepMax,
                  // autofill from the previous set or default starting weight
                  weightKg: prev !== undefined ? prev.weightKg : defaultWeight,
                  ...(isDuration
                    ? {
                        durationSeconds:
                          ex.intervalWorkSeconds ?? prev?.durationSeconds ?? 0,
                      }
                    : {
                        actualReps:
                          prev?.actualReps ?? (ex.prescription.targetRepMax || 10),
                      }),
                  isWarmup: false,
                  isCompleted: false,
                }
                return { ...ex, sets: [...ex.sets, newSet] }
              }),
            },
          }
        }),

      updateSet: (exerciseSessionId, setId, patch) =>
        set((s) => {
          if (!s.session) return {}
          return {
            session: {
              ...s.session,
              exercises: s.session.exercises.map((ex) =>
                ex.exerciseSessionId === exerciseSessionId
                  ? {
                      ...ex,
                      sets: ex.sets.map((st) =>
                        st.id === setId ? { ...st, ...patch } : st,
                      ),
                    }
                  : ex,
              ),
            },
          }
        }),

      completeSet: (exerciseSessionId, setId, now) => {
        let done: ActiveSet | null = null
        set((s) => {
          if (!s.session) return {}
          return {
            session: {
              ...s.session,
              exercises: s.session.exercises.map((ex) =>
                ex.exerciseSessionId === exerciseSessionId
                  ? {
                      ...ex,
                      sets: ex.sets.map((st) => {
                        if (st.id !== setId) return st
                        done = { ...st, isCompleted: true, completedAtMs: now ?? Date.now() }
                        return done
                      }),
                    }
                  : ex,
              ),
            },
          }
        })
        return done
      },

      removeSet: (exerciseSessionId, setId) =>
        set((s) => {
          if (!s.session) return {}
          return {
            session: {
              ...s.session,
              exercises: s.session.exercises.map((ex) =>
                ex.exerciseSessionId === exerciseSessionId
                  ? { ...ex, sets: ex.sets.filter((st) => st.id !== setId) }
                  : ex,
              ),
            },
          }
        }),

      flagPr: (exerciseSessionId, setId, flags) =>
        set((s) => {
          if (!s.session) return {}
          return {
            session: {
              ...s.session,
              exercises: s.session.exercises.map((ex) =>
                ex.exerciseSessionId === exerciseSessionId
                  ? {
                      ...ex,
                      sets: ex.sets.map((st) =>
                        st.id === setId ? { ...st, isPr: flags } : st,
                      ),
                    }
                  : ex,
              ),
            },
          }
        }),

      finish: (now) =>
        set((s) =>
          s.session
            ? {
                session: {
                  ...s.session,
                  status: 'COMPLETED',
                  completedAtMs: now ?? Date.now(),
                },
              }
            : {},
        ),

      abandon: (now) =>
        set((s) =>
          s.session
            ? {
                session: {
                  ...s.session,
                  status: 'ABANDONED',
                  completedAtMs: now ?? Date.now(),
                },
              }
            : {},
        ),

      clear: () => set({ session: null }),

      totalPlannedSets: () => {
        const s = get().session
        if (!s) return 0
        return s.exercises.reduce(
          (acc, ex) => acc + Math.max(ex.prescription.targetSets, ex.sets.length),
          0,
        )
      },

      completedSetCount: () => {
        const s = get().session
        if (!s) return 0
        return s.exercises.reduce(
          (acc, ex) => acc + ex.sets.filter((st) => st.isCompleted).length,
          0,
        )
      },

      totalVolumeKg: () => {
        const s = get().session
        if (!s) return 0
        return s.exercises.reduce(
          (acc, ex) =>
            acc +
            ex.sets
              .filter((st) => st.isCompleted)
              .reduce((a, st) => a + setVolumeKg(st), 0),
          0,
        )
      },
    }),
    {
      name: 'forgefit-active-session',
      storage: safeJSONStorage(),
      // The active session is persisted so a mid-workout reload resumes exactly
      // where the user left off (C.5). Firestore remains the durable store for
      // COMPLETED sessions; this is the live optimistic copy only.
      partialize: (s) => ({ session: s.session }),
    },
  ),
)
