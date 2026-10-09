'use client'

import { useSessionStore } from '@/store/sessionStore'

/** Visual progress of logged vs planned sets for the active session. */
export function WorkoutProgressBar() {
  const completedSets = useSessionStore((s) => s.completedSetCount())
  const plannedSets = useSessionStore((s) => s.totalPlannedSets())
  const completedExercises = useSessionStore((s) => s.completedExerciseCount())
  const totalExercises = useSessionStore((s) => s.totalExerciseCount())

  const pct =
    plannedSets === 0
      ? 0
      : Math.min(100, Math.round((completedSets / plannedSets) * 100))

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between text-xs font-semibold text-[#858B85]">
        <div className="flex items-center gap-2">
          <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-black text-primary">
            {completedExercises}/{totalExercises} Exercises
          </span>
          <span className="text-[#858B85]">·</span>
          <span className="text-[#B4BAB4]">
            <strong className="text-white font-bold">{completedSets}</strong>/{plannedSets} Sets
          </span>
        </div>
        <span className="font-mono text-xs font-black text-primary">{pct}%</span>
      </div>
      <div
        className="h-1.5 w-full overflow-hidden rounded-full bg-[#202420]"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-primary transition-all duration-300 ease-out shadow-[0_0_8px_rgba(182,255,59,0.5)]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
