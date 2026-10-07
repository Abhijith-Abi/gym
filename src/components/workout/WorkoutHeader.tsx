'use client'

import { useState } from 'react'
import { WorkoutTimer } from './WorkoutTimer'
import { useSessionStore } from '@/store/sessionStore'
import { useTimerStore } from '@/store/timerStore'
import { Activity, X } from 'lucide-react'
import { triggerHaptic } from '@/hooks/useHaptics'

/** Active-workout header: workout name + live status + elapsed clock + discard. */
export function WorkoutHeader() {
  const session = useSessionStore((s) => s.session)
  const clearSession = useSessionStore((s) => s.clear)
  const resetWorkoutClock = useTimerStore((s) => s.resetWorkoutClock)
  const completedExercises = useSessionStore((s) => s.completedExerciseCount())
  const totalExercises = useSessionStore((s) => s.totalExerciseCount())
  const [showConfirm, setShowConfirm] = useState(false)

  if (!session) return null

  const handleDiscard = () => {
    triggerHaptic('warning')
    clearSession()
    resetWorkoutClock()
    setShowConfirm(false)
  }

  return (
    <header className="flex flex-col gap-2 rounded-2xl border border-border/80 bg-card p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            <Activity className="size-3.5" aria-hidden="true" />
            <span>Active Workout</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">
              {completedExercises}/{totalExercises} Done
            </span>
          </div>
          <h1 className="mt-0.5 text-lg font-extrabold tracking-tight text-foreground sm:text-xl">
            {session.workoutName}
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <WorkoutTimer />
          <button
            type="button"
            onClick={() => setShowConfirm(true)}
            aria-label="Discard workout"
            title="Discard workout"
            className="flex size-8 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:bg-destructive/20 hover:text-destructive active:scale-95"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>

      {showConfirm && (
        <div className="flex items-center justify-between gap-2 rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-xs">
          <span className="font-semibold text-destructive">Discard current workout session?</span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleDiscard}
              className="rounded-lg bg-destructive px-2.5 py-1 text-xs font-bold text-destructive-foreground transition-all active:scale-95"
            >
              Discard
            </button>
            <button
              type="button"
              onClick={() => setShowConfirm(false)}
              className="rounded-lg border border-border bg-card px-2.5 py-1 text-xs font-semibold text-foreground transition-all active:scale-95"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
