'use client'

import dynamic from 'next/dynamic'
import type { WorkoutPlan, WorkoutSession } from '@/types'

/**
 * Lazy, ssr:false wrapper for the monthly calendar island (design C.6/C.16 —
 * "lazy-load heavy islands: charts, calendar, PR celebration"). Keeps the
 * calendar out of the initial server render / main bundle and shows a skeleton
 * while it loads.
 */
const Calendar = dynamic(
  () => import('./WorkoutCalendar').then((m) => m.WorkoutCalendar),
  {
    ssr: false,
    loading: () => (
      <div
        role="status"
        aria-label="Loading calendar"
        className="h-72 w-full animate-pulse rounded-xl border border-border bg-card/50 motion-reduce:animate-none"
      />
    ),
  },
)

export function LazyWorkoutCalendar(props: {
  sessions: ReadonlyArray<WorkoutSession>
  plan: WorkoutPlan | undefined
}) {
  return <Calendar {...props} />
}
