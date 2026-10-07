'use client'

import { ExerciseDetails } from './ExerciseDetails'
import { ExerciseVisualDemo } from './ExerciseVisualDemo'
import { IntervalTimer } from './IntervalTimer'
import { PreviousPerformance } from './PreviousPerformance'
import { ProgressionRecommendation } from './ProgressionRecommendation'
import { SetTracker } from './SetTracker'
import { useExerciseStore } from '@/store/exerciseStore'
import {
  useSessionStore,
  type ActiveExercise,
} from '@/store/sessionStore'
import { Dumbbell, Target } from 'lucide-react'
import type { RpeMode, Unit } from '@/types'

/**
 * The focused exercise card: name, muscle tags, prescription, previous performance,
 * recommended target, and the set tracker. For interval entries it swaps the
 * set tracker for the HIIT timer, logging one duration-based SetLog per round.
 */
export function ExerciseCard({
  exercise,
  unit,
  rpeMode,
  smartRestEnabled,
  autoStartRest,
}: {
  exercise: ActiveExercise
  unit: Unit
  rpeMode: RpeMode
  smartRestEnabled: boolean
  autoStartRest: boolean
}) {
  const meta = useExerciseStore((s) => s.byId(exercise.exerciseId))
  const addSet = useSessionStore((s) => s.addSet)
  const updateSet = useSessionStore((s) => s.updateSet)
  const completeSet = useSessionStore((s) => s.completeSet)

  const isInterval = exercise.intervalWorkSeconds !== undefined

  const logRound = (round: number) => {
    // Each completed WORK round persists as one duration-based set.
    addSet(exercise.exerciseSessionId)
    const sets = useSessionStore.getState().session?.exercises.find(
      (e) => e.exerciseSessionId === exercise.exerciseSessionId,
    )?.sets
    const latest = sets?.[sets.length - 1]
    if (latest) {
      updateSet(exercise.exerciseSessionId, latest.id, {
        setIndex: round,
        durationSeconds: exercise.intervalWorkSeconds,
        actualReps: undefined,
      })
      completeSet(exercise.exerciseSessionId, latest.id)
    }
  }

  return (
    <section className="flex flex-col gap-4 rounded-3xl border border-border/80 bg-card p-5 shadow-lg">
      <header className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <Dumbbell className="size-3.5" aria-hidden="true" />
              <span>Exercise {exercise.order + 1}</span>
            </div>
            <h2 className="mt-1 text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
              {meta?.name ?? exercise.exerciseId}
            </h2>
          </div>

          {meta?.primaryMuscles && meta.primaryMuscles.length > 0 && (
            <span className="flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
              <Target className="size-3" />
              {meta.primaryMuscles.join(', ')}
            </span>
          )}
        </div>

        <ExerciseDetails
          exerciseId={exercise.exerciseId}
          prescription={exercise.prescription}
        />

        <ExerciseVisualDemo
          exerciseId={exercise.exerciseId}
          equipment={meta?.equipment ?? 'other'}
        />
      </header>

      <div className="flex flex-col gap-2.5">
        <PreviousPerformance exerciseId={exercise.exerciseId} unit={unit} />

        {!isInterval && (
          <ProgressionRecommendation
            exerciseId={exercise.exerciseId}
            prescription={exercise.prescription}
            equipment={meta?.equipment ?? 'other'}
            rpeMode={rpeMode}
            unit={unit}
          />
        )}
      </div>

      {isInterval ? (
        <IntervalTimer
          workSeconds={exercise.intervalWorkSeconds ?? 30}
          restSeconds={exercise.intervalRestSeconds ?? 30}
          totalRounds={exercise.prescription.targetSets}
          onRoundComplete={logRound}
        />
      ) : (
        <SetTracker
          exercise={exercise}
          unit={unit}
          rpeMode={rpeMode}
          smartRestEnabled={smartRestEnabled}
          autoStartRest={autoStartRest}
        />
      )}
    </section>
  )
}
