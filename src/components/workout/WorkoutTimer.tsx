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
    <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md shadow-sm">
      <span
        className="font-mono text-sm sm:text-base font-extrabold tabular-nums text-white"
        aria-label="Workout elapsed time"
        role="timer"
      >
        {formatDuration(elapsedSeconds)}
      </span>
      <button
        type="button"
        onClick={handleToggle}
        aria-label={isPaused ? 'Resume workout' : 'Pause workout'}
        className="flex size-7 items-center justify-center rounded-lg bg-white/10 text-slate-300 transition-all hover:bg-emerald-500/20 hover:text-emerald-400 active:scale-95"
      >
        {isPaused ? (
          <Play className="size-3 fill-emerald-400 text-emerald-400" />
        ) : (
          <Pause className="size-3 text-slate-300" />
        )}
      </button>
    </div>
  )
}
