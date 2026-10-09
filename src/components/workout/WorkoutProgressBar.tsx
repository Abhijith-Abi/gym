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
    <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-slate-900/50 p-3.5 shadow-lg backdrop-blur-xl">
      <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
        <div className="flex items-center gap-2">
          <span className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-400">
            {completedExercises}/{totalExercises} Exercises
          </span>
          <span className="hidden text-slate-600 sm:inline">·</span>
          <span className="hidden sm:inline text-slate-300">
            <strong className="text-white font-bold">{completedSets}</strong>/{plannedSets} Sets
          </span>
        </div>
        <span className="font-mono font-black text-emerald-400">{pct}% Done</span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-white/10"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-500 ease-out shadow-[0_0_12px_rgba(16,185,129,0.5)]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
