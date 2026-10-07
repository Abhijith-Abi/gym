'use client'

import { WorkoutTimer } from './WorkoutTimer'
import { useSessionStore } from '@/store/sessionStore'
import { Activity } from 'lucide-react'

/** Active-workout header: workout name + live status + elapsed clock. */
export function WorkoutHeader() {
  const session = useSessionStore((s) => s.session)
  if (!session) return null

  const currentIdx = session.currentExerciseIndex + 1
  const totalExercises = session.exercises.length

  return (
    <header className="flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-sm">
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          <Activity className="size-3.5" aria-hidden="true" />
          <span>Active Workout</span>
          <span className="text-muted-foreground">·</span>
          <span className="text-muted-foreground">{currentIdx}/{totalExercises}</span>
        </div>
        <h1 className="mt-0.5 text-lg font-extrabold tracking-tight text-foreground sm:text-xl">
          {session.workoutName}
        </h1>
      </div>
      <WorkoutTimer />
    </header>
  )
}
