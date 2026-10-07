import { create } from 'zustand'
import { createDefaultPlan } from '@/data/workoutPlan'
import type { DayOfWeek, PlanDay, WorkoutPlan } from '@/types'

/**
 * Plan + day-selection cache for the dashboard/DaySelector (design C.5, C.16
 * step 9). The active plan is hydrated from workoutService/Firestore when creds
 * exist; absent that, the seed template is used so the dashboard still renders
 * a real weekly split offline. NOT persisted (ephemeral cache).
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
  /** Load the seed template for a user when no cloud plan is available. */
  ensureSeedPlan: (uid: string) => void
  selectDay: (day: DayOfWeek) => void
  /** Auto-select today's day of week. */
  selectToday: (now?: Date) => void
  dayOrder: () => DayOfWeek[]
  dayFor: (day: DayOfWeek) => PlanDay | undefined
  selectedPlanDay: () => PlanDay | undefined
}

export const useWorkoutStore = create<WorkoutStoreState>((set, get) => ({
  plan: null,
  selectedDay: todayDayId(),

  setPlan: (plan) => set({ plan }),

  ensureSeedPlan: (uid) =>
    set((s) => (s.plan ? {} : { plan: createDefaultPlan(uid) })),

  selectDay: (day) => set({ selectedDay: day }),

  selectToday: (now) => set({ selectedDay: todayDayId(now ?? new Date()) }),

  dayOrder: () => DAY_ORDER,

  dayFor: (day) => get().plan?.days[day],

  selectedPlanDay: () => {
    const s = get()
    return s.plan?.days[s.selectedDay]
  },
}))
