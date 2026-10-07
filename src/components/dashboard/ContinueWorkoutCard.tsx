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
    <div className="relative overflow-hidden rounded-3xl border border-primary/50 bg-gradient-to-br from-card via-card-elevated to-primary/10 p-5 shadow-[0_0_30px_rgba(34,197,94,0.15)]">
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
          <div className="flex items-center gap-1 font-mono text-xs font-bold text-foreground">
            <Clock className="size-3.5 text-primary" />
            {formatDuration(elapsedSeconds)}
          </div>
        )}
      </div>

      <div className="mt-3 flex flex-col">
        <h2 className="text-xl font-extrabold tracking-tight text-foreground">
          {session.workoutName}
        </h2>
        {exerciseName && (
          <p className="mt-0.5 text-xs text-muted-foreground">
            Current: <span className="font-semibold text-foreground">{exerciseName}</span>
          </p>
        )}
      </div>

      <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <ListChecks className="size-3.5 text-primary" />
          {completedSets} of {totalSets} sets done
        </span>
      </div>

      <Link
        href="/workout"
        className="mt-4 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-primary text-sm font-bold text-primary-foreground shadow-[0_0_20px_rgba(34,197,94,0.35)] transition-all hover:bg-primary/90 active:scale-95"
      >
        <Play className="size-4 fill-primary-foreground" />
        Resume Workout
      </Link>
    </div>
  )
}
