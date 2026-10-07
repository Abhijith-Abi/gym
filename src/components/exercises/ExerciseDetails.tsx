'use client'

import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useExerciseStore } from '@/store/exerciseStore'
import type { Exercise } from '@/types'

/**
 * Exercise detail view (FR-20): instructions, tips, muscles, and substitution
 * suggestions. Picking a substitution references its id, so swapping an
 * exercise never rewrites previously logged history.
 */
export function ExerciseDetails({
  exercise,
  onBack,
  onSelect,
}: {
  exercise: Exercise
  onBack: () => void
  onSelect: (e: Exercise) => void
}) {
  const byId = useExerciseStore((s) => s.byId)
  const substitutions = exercise.alternatives
    .map((id) => byId(id))
    .filter((e): e is Exercise => Boolean(e))

  return (
    <div className="flex flex-col gap-5">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1 self-start text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="size-4" aria-hidden="true" />
        Back to library
      </button>

      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{exercise.name}</h1>
        <p className="text-sm capitalize text-muted-foreground">
          {exercise.category} · {exercise.difficulty} · {exercise.equipment}
        </p>
      </header>

      <section className="flex flex-col gap-2">
        <h2 className="text-sm font-semibold uppercase text-muted-foreground">
          Muscles
        </h2>
        <p className="text-sm capitalize">
          Primary: {exercise.primaryMuscles.join(', ')}
          {exercise.secondaryMuscles.length > 0 && (
            <>
              {' · '}Secondary: {exercise.secondaryMuscles.join(', ')}
            </>
          )}
        </p>
      </section>

      {exercise.instructions.length > 0 && (
        <section className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold uppercase text-muted-foreground">
            How to perform
          </h2>
          <ol className="list-decimal space-y-1 pl-5 text-sm">
            {exercise.instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>
      )}

      {exercise.tips.length > 0 && (
        <section className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold uppercase text-muted-foreground">
            Tips
          </h2>
          <ul className="list-disc space-y-1 pl-5 text-sm">
            {exercise.tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </section>
      )}

      {substitutions.length > 0 && (
        <section className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold uppercase text-muted-foreground">
            Substitutions
          </h2>
          <div className="flex flex-wrap gap-2">
            {substitutions.map((sub) => (
              <Button
                key={sub.id}
                variant="outline"
                size="sm"
                onClick={() => onSelect(sub)}
              >
                {sub.name}
              </Button>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
