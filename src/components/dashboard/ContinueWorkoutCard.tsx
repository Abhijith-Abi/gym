'use client'

import Link from 'next/link'
import { Play, Clock, ListChecks } from 'lucide-react'
import { useSessionStore } from '@/store/sessionStore'
import { useExerciseStore } from '@/store/exerciseStore'
import { useWorkoutTimer, formatDuration } from '@/hooks/useWorkoutTimer'

/**
 * Prominent alert/card shown on Dashboard if a workout is in-progress.
 * Lets the user resume immediately with zero friction.
 */
export function ContinueWorkoutCard() {
  const session = useSessionStore((s) => s.session)
  const byId = useExerciseStore((s) => s.byId)
  const { elapsedSeconds, isRunning } = useWorkoutTimer()

  if (!session || session.status !== 'IN_PROGRESS') return null

  const currentExercise = session.exercises[session.currentExerciseIndex]
  const exerciseName = currentExercise ? (byId(currentExercise.exerciseId)?.name ?? currentExercise.exerciseId) : ''
  const completedSets = session.exercises.reduce(
    (acc, ex) => acc + ex.sets.filter((s) => s.isCompleted).length,
    0,
  )
  const totalSets = session.exercises.reduce(
    (acc, ex) => acc + ex.prescription.targetSets,
    0,
  )

  return (
    <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-primary/15 p-5 shadow-[0_0_30px_rgba(255,107,53,0.2)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-3 rounded-full bg-primary" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Workout In Progress
          </span>
        </div>

        {isRunning && (
          <div className="flex items-center gap-1 font-mono text-xs font-bold text-white">
            <Clock className="size-3.5 text-primary" />
            {formatDuration(elapsedSeconds)}
          </div>
        )}
      </div>

      <div className="mt-3 flex flex-col">
        <h2 className="text-xl font-extrabold tracking-tight text-white">
          {session.workoutName}
        </h2>
        {exerciseName && (
          <p className="mt-0.5 text-xs text-[#A8A8A8]">
            Current: <span className="font-semibold text-white">{exerciseName}</span>
          </p>
        )}
      </div>

      <div className="mt-3 flex items-center gap-3 text-xs text-[#A8A8A8]">
        <span className="flex items-center gap-1">
          <ListChecks className="size-3.5 text-primary" />
          {completedSets} of {totalSets} sets done
        </span>
      </div>

      <Link
        href="/workout"
        className="mt-4 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-primary text-sm font-bold text-white shadow-[0_0_25px_rgba(255,107,53,0.4)] transition-all hover:bg-primary-hover active:scale-95"
      >
        <Play className="size-4 fill-white" />
        Resume Workout
      </Link>
    </div>
  )
}
