'use client'

import { useExerciseStore } from '@/store/exerciseStore'
import type { ExerciseSet } from '@/types'

/** Prescription + quick cue summary for the current exercise. */
export function ExerciseDetails({
  exerciseId,
  prescription,
  perSide,
  toFailure,
  durationSeconds,
}: {
  exerciseId: string
  prescription: ExerciseSet
  perSide?: boolean
  toFailure?: boolean
  durationSeconds?: number
}) {
  const meta = useExerciseStore((s) => s.byId(exerciseId))

  const target = toFailure
    ? 'to failure'
    : durationSeconds !== undefined
      ? `${durationSeconds}s`
      : `${prescription.targetRepMin}-${prescription.targetRepMax} reps`

  return (
    <div className="text-sm text-muted-foreground">
      <p>
        Target: {prescription.targetSets} × {target}
        {perSide ? ' per side' : ''} · rest {prescription.restSeconds}s
      </p>
      {meta?.tips?.[0] && <p className="mt-1 italic">Tip: {meta.tips[0]}</p>}
    </div>
  )
}
