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
    <header className="flex flex-col gap-2.5">
      {/* Top Status & Controls Row */}
      <div className="flex items-center justify-between gap-2">
        {/* Live Status Pill */}
        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-primary backdrop-blur-xl">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary shadow-[0_0_10px_rgba(255,107,53,0.8)]" />
          </span>
          <Activity className="size-3 animate-pulse" aria-hidden="true" />
          <span>Active Workout</span>
          <span className="text-white/20">·</span>
          <span className="font-mono text-[11px] font-bold text-[#A8A8A8]">
            {completedExercises}/{totalExercises} Done
          </span>
        </div>

        {/* Discard Action */}
        <button
          type="button"
          onClick={() => setShowConfirm(true)}
          aria-label="Discard workout"
          title="Discard workout"
          className="flex size-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#A8A8A8] backdrop-blur-xl transition-all hover:border-destructive/50 hover:bg-destructive/15 hover:text-destructive active:scale-95"
        >
          <X className="size-4" />
        </button>
      </div>

      {/* Workout Title & Live Timer Row */}
      <div className="flex items-center justify-between gap-3 min-w-0">
        <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white truncate flex-1 min-w-0">
          {session.workoutName}
        </h1>
        <WorkoutTimer />
      </div>

      {showConfirm && (
        <div className="mt-1 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-destructive/30 bg-destructive/10 p-4 text-xs backdrop-blur-xl">
          <span className="font-semibold text-destructive">Discard current workout session?</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDiscard}
              className="rounded-xl bg-destructive px-3.5 py-2 text-xs font-bold text-white shadow-sm transition-all active:scale-95"
            >
              Discard
            </button>
            <button
              type="button"
              onClick={() => setShowConfirm(false)}
              className="rounded-xl border border-white/10 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white transition-all active:scale-95"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
