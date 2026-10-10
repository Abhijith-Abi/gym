import { WorkoutHistory } from '@/components/history/WorkoutHistory'

/** Workout history + calendar + streaks (FR-16/17, design C.16 step 11). */
export default function HistoryPage() {
  return (
    <div className="w-full min-w-0">
      <WorkoutHistory />
    </div>
  )
}
