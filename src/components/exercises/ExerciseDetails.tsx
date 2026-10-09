'use client'

import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useExerciseStore } from '@/store/exerciseStore'
import { ExerciseMedia } from '@/components/media/ExerciseMedia'
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
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 self-start rounded-xl border border-[#2A302A] bg-[#202420] px-3 py-1.5 text-xs font-bold text-[#B4BAB4] transition-all hover:bg-[#2A302A] hover:text-white active:scale-95 shadow-sm"
      >
        <ChevronLeft className="size-4" aria-hidden="true" />
        Back to library
      </button>

      <header className="flex flex-col gap-1.5">
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">{exercise.name}</h1>
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
          <span className="rounded-lg border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-primary capitalize">
            {exercise.category}
          </span>
          <span className="rounded-lg border border-[#2A302A] bg-[#202420] px-2.5 py-0.5 text-[#B4BAB4] capitalize">
            {exercise.difficulty}
          </span>
          <span className="rounded-lg border border-[#2A302A] bg-[#202420] px-2.5 py-0.5 text-[#858B85] capitalize">
            {exercise.equipment}
          </span>
        </div>
      </header>

      {/* Verified 1080p Video Demonstration */}
      <ExerciseMedia exerciseId={exercise.id} name={exercise.name} mode="detail" />

      {/* Muscles Card */}
      <section className="flex flex-col gap-3 rounded-2xl border border-[#2A302A] bg-[#171A17] p-4 sm:p-5 shadow-md">
        <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#858B85]">
          Target Muscle Groups
        </h2>
        <div className="flex flex-wrap gap-2">
          {exercise.primaryMuscles.map((m) => (
            <span
              key={m}
              className="rounded-xl border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-black text-primary capitalize shadow-sm"
            >
              Primary: {m}
            </span>
          ))}
          {exercise.secondaryMuscles.map((m) => (
            <span
              key={m}
              className="rounded-xl border border-[#2A302A] bg-[#202420] px-3 py-1 text-xs font-semibold text-[#B4BAB4] capitalize"
            >
              Secondary: {m}
            </span>
          ))}
        </div>
      </section>

      {/* How to Perform */}
      {exercise.instructions.length > 0 && (
        <section className="flex flex-col gap-3 rounded-2xl border border-[#2A302A] bg-[#171A17] p-4 sm:p-5 shadow-md">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#858B85]">
            How to Perform
          </h2>
          <ol className="space-y-2 text-sm text-[#B4BAB4]">
            {exercise.instructions.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-[#0A0A0A] text-xs font-black">
                  {i + 1}
                </span>
                <span className="leading-relaxed text-white">{step}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Tips */}
      {exercise.tips.length > 0 && (
        <section className="flex flex-col gap-3 rounded-2xl border border-[#2A302A] bg-[#171A17] p-4 sm:p-5 shadow-md">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#858B85]">
            Pro Coaching Tips
          </h2>
          <ul className="space-y-2 text-sm text-[#B4BAB4]">
            {exercise.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-primary font-bold">✓</span>
                <span className="leading-relaxed text-[#B4BAB4]">{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Substitutions */}
      {substitutions.length > 0 && (
        <section className="flex flex-col gap-3 rounded-2xl border border-[#2A302A] bg-[#171A17] p-4 sm:p-5 shadow-md">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#858B85]">
            Recommended Substitutions
          </h2>
          <div className="flex flex-wrap gap-2">
            {substitutions.map((sub) => (
              <Button
                key={sub.id}
                variant="outline"
                size="sm"
                onClick={() => onSelect(sub)}
                className="rounded-xl border-[#2A302A] bg-[#202420] text-xs font-semibold text-[#B4BAB4] hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all"
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
