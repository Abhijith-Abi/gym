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
    <div className="flex flex-col gap-2 rounded-2xl border border-border/70 bg-card/60 p-3 shadow-sm backdrop-blur-sm">
      <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-bold text-primary">
            {completedExercises}/{totalExercises} Exercises
          </span>
          <span className="hidden text-muted-foreground sm:inline">·</span>
          <span className="hidden sm:inline">
            <strong className="text-foreground">{completedSets}</strong>/{plannedSets} Sets
          </span>
        </div>
        <span className="font-mono font-bold text-primary">{pct}% Done</span>
      </div>
      <div
        className="h-2.5 w-full overflow-hidden rounded-full bg-secondary/80"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out shadow-[0_0_12px_rgba(34,197,94,0.4)]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
