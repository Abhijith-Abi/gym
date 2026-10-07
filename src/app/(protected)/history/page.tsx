import { WorkoutHistory } from '@/components/history/WorkoutHistory'

/** Workout history + calendar + streaks (FR-16/17, design C.16 step 11). */
export default function HistoryPage() {
  return (
    <main className="mx-auto flex w-full max-w-2xl min-w-0 flex-col gap-4 p-3.5 sm:p-6">
      <WorkoutHistory />
    </main>
  )
}
