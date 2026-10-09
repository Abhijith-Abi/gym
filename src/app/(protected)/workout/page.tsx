'use client'

import dynamic from 'next/dynamic'

const ActiveWorkout = dynamic(
  () => import('@/components/workout/ActiveWorkout').then((m) => m.ActiveWorkout),
  {
    ssr: false,
    loading: () => (
      <div className="mx-auto flex min-h-[70vh] w-full max-w-xl items-center justify-center p-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="size-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          <span className="text-xs font-semibold text-[#A8A8A8]">Loading workout...</span>
        </div>
      </div>
    ),
  },
)

/**
 * Active Workout route (design C.16 step 7). Client-only island
 * owning timers, set logging, live audio cues, and PR detection.
 */
export default function WorkoutPage() {
  return <ActiveWorkout />
}
