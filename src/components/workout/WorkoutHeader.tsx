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
    <header className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-900/60 p-4 sm:p-5 shadow-xl backdrop-blur-xl">
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            </span>
            <Activity className="size-3.5 animate-pulse" aria-hidden="true" />
            <span>Active Workout</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400">
              {completedExercises}/{totalExercises} Done
            </span>
          </div>
          <h1 className="mt-0.5 text-lg font-black tracking-tight text-white sm:text-2xl truncate">
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
            className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:bg-destructive/20 hover:text-destructive hover:border-destructive/30 active:scale-95"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>

      {showConfirm && (
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-destructive/30 bg-destructive/10 p-3 text-xs">
          <span className="font-semibold text-destructive">Discard current workout session?</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDiscard}
              className="rounded-xl bg-destructive px-3 py-1.5 text-xs font-bold text-white shadow-sm transition-all active:scale-95"
            >
              Discard
            </button>
            <button
              type="button"
              onClick={() => setShowConfirm(false)}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white transition-all active:scale-95"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
