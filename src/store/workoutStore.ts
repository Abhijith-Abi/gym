import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { safeJSONStorage } from './safeStorage'
import { createDefaultPlan } from '@/data/workoutPlan'
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

      setPlan: (plan) => set({ plan }),

      ensureSeedPlan: (uid, goal, experience) =>
        set((s) => {
          if (s.plan) {
            // If the plan is already for this user, keep it
            if (s.plan.uid === uid) return {}
          }
          if (goal) {
            const preset = getPresetForGoal(goal, experience)
            const now = new Date()
            return {
              plan: {
                id: `plan_${preset.id}`,
                uid,
                name: preset.title,
                isTemplate: false,
                days: preset.days,
                createdAt: now,
                updatedAt: now,
              },
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
        set({ plan: newPlan })
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
    },
  ),
)


