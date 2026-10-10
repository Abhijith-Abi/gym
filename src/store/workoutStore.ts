import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { safeJSONStorage } from './safeStorage'
import { createDefaultPlan, SEED_PLAN_DAYS } from '@/data/workoutPlan'
import { getPresetForGoal, type WorkoutPreset } from '@/data/workoutPresets'
import type { DayOfWeek, Goal, Experience, PlanDay, WorkoutPlan } from '@/types'

/**
 * Plan + day-selection store for the dashboard/DaySelector (design C.5, C.16 step 9).
 * Persisted in local storage so selected routines remain active across page reloads.
 */

const DAY_ORDER: DayOfWeek[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

/** JS Date.getDay() (0=Sun) -> our DayOfWeek. */
export function todayDayId(now: Date = new Date()): DayOfWeek {
  const map: DayOfWeek[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  return map[now.getDay()]
}

/**
 * Ensures Monday through Saturday are training days with populated exercises,
 * and Sunday is strictly the only rest day.
 */
export function normalizePlanDays(
  plan: WorkoutPlan,
  goal?: Goal,
  experience?: Experience,
): WorkoutPlan {
  const trainDays: DayOfWeek[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  const fallbackDays = goal ? getPresetForGoal(goal, experience).days : SEED_PLAN_DAYS
  let modified = false
  const updatedDays = { ...plan.days }

  for (const day of trainDays) {
    const current = updatedDays[day]
    if (!current || current.isRest || !current.entries || current.entries.length === 0) {
      const fallback = fallbackDays[day] || SEED_PLAN_DAYS[day]
      updatedDays[day] = {
        ...fallback,
        dayId: day,
        isRest: false,
      }
      modified = true
    }
  }

  // Ensure Sunday is strictly a rest day
  if (!updatedDays.sun || !updatedDays.sun.isRest) {
    updatedDays.sun = {
      dayId: 'sun',
      workoutName: 'Rest / Active Recovery',
      isRest: true,
      entries: [],
    }
    modified = true
  }

  if (modified) {
    return {
      ...plan,
      days: updatedDays,
      updatedAt: new Date(),
    }
  }
  return plan
}

interface WorkoutStoreState {
  plan: WorkoutPlan | null
  selectedDay: DayOfWeek
  setPlan: (plan: WorkoutPlan) => void
  /** Load or sync the plan for a user based on their goal & experience */
  ensureSeedPlan: (uid: string, goal?: Goal, experience?: Experience) => void
  /** Load a full preset plan into active state */
  loadPresetPlan: (uid: string, preset: WorkoutPreset) => void
  selectDay: (day: DayOfWeek) => void
  /** Auto-select today's day of week. */
  selectToday: (now?: Date) => void
  dayOrder: () => DayOfWeek[]
  dayFor: (day: DayOfWeek) => PlanDay | undefined
  selectedPlanDay: () => PlanDay | undefined
}

export const useWorkoutStore = create<WorkoutStoreState>()(
  persist(
    (set, get) => ({
      plan: null,
      selectedDay: todayDayId(),

      setPlan: (plan) => set({ plan: normalizePlanDays(plan) }),

      ensureSeedPlan: (uid, goal, experience) =>
        set((s) => {
          if (s.plan && s.plan.uid === uid) {
            const normalized = normalizePlanDays(s.plan, goal, experience)
            if (normalized !== s.plan) {
              return { plan: normalized }
            }
            return {}
          }
          if (goal) {
            const preset = getPresetForGoal(goal, experience)
            const now = new Date()
            return {
              plan: normalizePlanDays(
                {
                  id: `plan_${preset.id}`,
                  uid,
                  name: preset.title,
                  isTemplate: false,
                  days: preset.days,
                  createdAt: now,
                  updatedAt: now,
                },
                goal,
                experience,
              ),
            }
          }
          return { plan: createDefaultPlan(uid) }
        }),

      loadPresetPlan: (uid, preset) => {
        const now = new Date()
        const newPlan: WorkoutPlan = {
          id: `plan_${preset.id}`,
          uid,
          name: preset.title,
          isTemplate: false,
          days: preset.days,
          createdAt: now,
          updatedAt: now,
        }
        set({ plan: normalizePlanDays(newPlan) })
      },

      selectDay: (day) => set({ selectedDay: day }),

      selectToday: (now) => set({ selectedDay: todayDayId(now ?? new Date()) }),

      dayOrder: () => DAY_ORDER,

      dayFor: (day) => get().plan?.days[day],

      selectedPlanDay: () => {
        const s = get()
        return s.plan?.days[s.selectedDay]
      },
    }),
    {
      name: 'forgefit-workout-plan',
      storage: safeJSONStorage(),
      partialize: (s) => ({
        plan: s.plan,
        selectedDay: s.selectedDay,
      }),
      onRehydrateStorage: () => (state) => {
        if (state?.plan) {
          state.plan = normalizePlanDays(state.plan)
        }
      },
    },
  ),
)


