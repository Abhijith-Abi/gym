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
    <div className="w-full min-w-0 flex flex-col gap-6">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 self-start rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-[#A8A8A8] backdrop-blur-md transition-all hover:bg-white/10 hover:text-white active:scale-95 shadow-sm"
      >
        <ChevronLeft className="size-4" aria-hidden="true" />
        Back to library
      </button>

      <header className="flex flex-col gap-1.5 w-full min-w-0">
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white break-words">{exercise.name}</h1>
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
          <span className="rounded-xl border border-primary/30 bg-primary/15 px-2.5 py-1 text-primary capitalize">
            {exercise.category}
          </span>
          <span className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-1 text-[#A8A8A8] capitalize">
            {exercise.difficulty}
          </span>
          <span className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-1 text-[#8C8C8C] capitalize">
            {exercise.equipment}
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Media & Target Muscles */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col gap-5 lg:sticky lg:top-4">
          {/* Verified 1080p Video Demonstration */}
          <ExerciseMedia exerciseId={exercise.id} name={exercise.name} mode="detail" />

          {/* Muscles Card */}
          <section className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5 shadow-md backdrop-blur-xl w-full min-w-0">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#8C8C8C]">
              Target Muscle Groups
            </h2>
            <div className="flex flex-wrap gap-2">
              {exercise.primaryMuscles.map((m) => (
                <span
                  key={m}
                  className="rounded-xl border border-primary/30 bg-primary/15 px-3 py-1 text-xs font-black text-primary capitalize shadow-sm"
                >
                  Primary: {m}
                </span>
              ))}
              {exercise.secondaryMuscles.map((m) => (
                <span
                  key={m}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[#A8A8A8] capitalize"
                >
                  Secondary: {m}
                </span>
              ))}
            </div>
          </section>

          {/* Substitutions */}
          {substitutions.length > 0 && (
            <section className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5 shadow-md backdrop-blur-xl w-full min-w-0">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#8C8C8C]">
                Recommended Substitutions
              </h2>
              <div className="flex flex-wrap gap-2">
                {substitutions.map((sub) => (
                  <Button
                    key={sub.id}
                    variant="outline"
                    size="sm"
                    onClick={() => onSelect(sub)}
                    className="rounded-xl border-white/10 bg-white/5 text-xs font-semibold text-[#A8A8A8] hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all max-w-full truncate"
                  >
                    <span className="truncate">{sub.name}</span>
                  </Button>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column: Instructions & Tips */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col gap-5">
          {/* How to Perform */}
          {exercise.instructions.length > 0 && (
            <section className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5 shadow-md backdrop-blur-xl w-full min-w-0">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#8C8C8C]">
                Instructions &amp; Movement Steps
              </h2>
              <ol className="space-y-2.5 text-sm">
                {exercise.instructions.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 min-w-0">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs font-black shadow-[0_0_10px_rgba(255,107,53,0.3)]">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed text-white break-words min-w-0 flex-1">{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Tips */}
          {exercise.tips.length > 0 && (
            <section className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5 shadow-md backdrop-blur-xl w-full min-w-0">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#8C8C8C]">
                Pro Coaching Tips
              </h2>
              <ul className="space-y-2 text-sm">
                {exercise.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2.5 min-w-0">
                    <span className="text-primary font-bold shrink-0">✓</span>
                    <span className="leading-relaxed text-[#A8A8A8] break-words min-w-0 flex-1">{tip}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      {/* Action CTA */}
      <div className="sticky bottom-4 z-20 w-full min-w-0">
        <Button
          onClick={onBack}
          className="w-full min-h-[50px] rounded-2xl bg-primary text-sm font-black text-white shadow-[0_0_25px_rgba(255,107,53,0.4)] hover:bg-primary-hover active:scale-95 border-none"
        >
          Add to Workout Routine
        </Button>
      </div>
    </div>
  )
}
