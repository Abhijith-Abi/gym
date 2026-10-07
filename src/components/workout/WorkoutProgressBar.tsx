'use client'

import { useSessionStore } from '@/store/sessionStore'

/** Visual progress of logged vs planned sets for the active session. */
export function WorkoutProgressBar() {
  const completed = useSessionStore((s) => s.completedSetCount())
  const planned = useSessionStore((s) => s.totalPlannedSets())
  const pct = planned === 0 ? 0 : Math.min(100, Math.round((completed / planned) * 100))

  return (
    <div className="flex flex-col gap-1.5 px-1">
      <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
        <span className="flex items-center gap-1">
          <span className="font-bold text-foreground">{completed}</span> of {planned} sets completed
        </span>
        <span className="font-mono font-bold text-primary">{pct}%</span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-secondary/80"
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
