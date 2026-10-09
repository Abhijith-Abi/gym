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
    <header className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary shadow-[0_0_8px_rgba(182,255,59,0.8)]" />
            </span>
            <Activity className="size-3.5 animate-pulse" aria-hidden="true" />
            <span>Active Workout</span>
            <span className="text-[#858B85]">·</span>
            <span className="text-[#B4BAB4]">
              {completedExercises}/{totalExercises} Done
            </span>
          </div>
          <h1 className="mt-0.5 text-xl font-black tracking-tight text-white sm:text-2xl truncate">
            {session.workoutName}
          </h1>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <WorkoutTimer />
          <button
            type="button"
            onClick={() => setShowConfirm(true)}
            aria-label="Discard workout"
            title="Discard workout"
            className="flex size-9 items-center justify-center rounded-xl border border-[#2A302A] bg-[#171A17] text-[#858B85] transition-all hover:bg-destructive/20 hover:text-destructive hover:border-destructive/40 active:scale-95"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>

      {showConfirm && (
        <div className="mt-1 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-xs">
          <span className="font-semibold text-destructive">Discard current workout session?</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDiscard}
              className="rounded-lg bg-destructive px-3 py-1.5 text-xs font-bold text-white shadow-sm transition-all active:scale-95"
            >
              Discard
            </button>
            <button
              type="button"
              onClick={() => setShowConfirm(false)}
              className="rounded-lg border border-[#2A302A] bg-[#202420] px-3 py-1.5 text-xs font-semibold text-white transition-all active:scale-95"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
