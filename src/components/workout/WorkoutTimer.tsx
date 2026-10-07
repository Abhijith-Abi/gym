'use client'

import { Pause, Play } from 'lucide-react'
import { formatDuration, useWorkoutTimer } from '@/hooks/useWorkoutTimer'
import { useTimerStore } from '@/store/timerStore'
import { triggerHaptic } from '@/hooks/useHaptics'

/** Live workout elapsed clock with pause/resume (FR-18, AC-9). */
export function WorkoutTimer() {
  const { elapsedSeconds, isPaused, isRunning } = useWorkoutTimer()
  const pause = useTimerStore((s) => s.pauseWorkoutClock)
  const resume = useTimerStore((s) => s.resumeWorkoutClock)

  if (!isRunning) return null

  const handleToggle = () => {
    triggerHaptic('light')
    if (isPaused) {
      resume()
    } else {
      pause()
    }
  }

  return (
    <div className="flex items-center gap-2 rounded-xl border border-border bg-card-elevated px-3 py-1.5 shadow-xs">
      <span
        className="font-mono text-base font-bold tabular-nums text-foreground sm:text-lg"
        aria-label="Workout elapsed time"
        role="timer"
      >
        {formatDuration(elapsedSeconds)}
      </span>
      <button
        type="button"
        onClick={handleToggle}
        aria-label={isPaused ? 'Resume workout' : 'Pause workout'}
        className="flex size-8 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-all hover:bg-secondary/80 hover:text-foreground active:scale-95"
      >
        {isPaused ? (
          <Play className="size-3.5 fill-primary text-primary" />
        ) : (
          <Pause className="size-3.5" />
        )}
      </button>
    </div>
  )
}
