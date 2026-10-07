'use client'

import Link from 'next/link'
import { Dumbbell, Clock, ListChecks, Play, Sparkles } from 'lucide-react'
import { useExerciseStore } from '@/store/exerciseStore'
import { useWorkoutStore } from '@/store/workoutStore'
import { triggerHaptic } from '@/hooks/useHaptics'

/**
 * Hero Workout Card on the Home screen.
 * Displays today's workout, muscle tags, estimated duration, exercise previews,
 * and high-energy Start Workout button.
 */
export function TodayCard() {
  const planDay = useWorkoutStore((s) => s.selectedPlanDay())
  const byId = useExerciseStore((s) => s.byId)

  if (!planDay) {
    return (
      <div className="rounded-3xl border border-border bg-card p-6 text-center text-sm text-muted-foreground">
        No workout plan loaded yet.
      </div>
    )
  }

  if (planDay.isRest) {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-border/80 bg-gradient-to-b from-card to-card-elevated p-8 text-center shadow-lg">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-primary">
          <Sparkles className="size-7" />
        </div>
        <span className="mt-4 text-xs font-bold uppercase tracking-widest text-primary">
          Rest Day
        </span>
        <h2 className="mt-1 text-2xl font-black text-foreground">{planDay.workoutName}</h2>
        <p className="mt-2 max-w-xs text-xs leading-relaxed text-muted-foreground">
          Rest, hydrate, and nourish your body. Active recovery prepares you to lift heavier tomorrow.
        </p>
      </div>
    )
  }

  const exerciseCount = planDay.entries.length
  const totalSets = planDay.entries.reduce(
    (acc, e) => acc + e.prescription.targetSets,
    0,
  )
  const estMinutes = Math.round(
    planDay.entries.reduce(
      (acc, e) =>
        acc + e.prescription.targetSets * (45 + e.prescription.restSeconds),
      0,
    ) / 60,
  )

  const preview = planDay.entries.slice(0, 4).map((e) => ({
    name: byId(e.exerciseId)?.name ?? e.exerciseId,
    muscles: byId(e.exerciseId)?.primaryMuscles ?? [],
  }))

  return (
    <div className="relative w-full min-w-0 overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-b from-card to-card-elevated p-4 shadow-xl sm:p-6">
      {/* Background Accent Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-3xl" />

      {/* Header Info */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="text-[11px] font-bold uppercase tracking-widest text-primary sm:text-xs">
            Today&apos;s Workout
          </span>
          <h2 className="mt-1 truncate text-xl font-black tracking-tight text-foreground sm:text-2xl md:text-3xl">
            {planDay.workoutName}
          </h2>
        </div>
        <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary shadow-[0_0_20px_rgba(34,197,94,0.2)] sm:size-11">
          <Dumbbell className="size-5 sm:size-6" aria-hidden="true" />
        </div>
      </div>

      {/* Meta Stats Badges */}
      <div className="mt-3.5 flex flex-wrap gap-2 text-xs font-semibold text-muted-foreground sm:mt-4 sm:gap-2.5">
        <span className="flex items-center gap-1.5 rounded-xl border border-border bg-secondary/50 px-2.5 py-1 text-foreground sm:px-3 sm:py-1.5">
          <ListChecks className="size-3.5 text-primary sm:size-4" aria-hidden="true" />
          {exerciseCount} Exercises · {totalSets} Sets
        </span>
        <span className="flex items-center gap-1.5 rounded-xl border border-border bg-secondary/50 px-2.5 py-1 text-foreground sm:px-3 sm:py-1.5">
          <Clock className="size-3.5 text-accent sm:size-4" aria-hidden="true" />
          ~{estMinutes} min
        </span>
      </div>

      {/* Exercise Preview List */}
      <div className="mt-3.5 flex flex-col gap-1.5 sm:mt-4">
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          Exercise Lineup
        </span>
        <div className="flex flex-wrap gap-1.5">
          {preview.map(({ name }) => (
            <span
              key={name}
              className="rounded-lg border border-border/60 bg-card-elevated px-2 py-0.5 text-[11px] font-medium text-foreground sm:px-2.5 sm:py-1 sm:text-xs"
            >
              {name}
            </span>
          ))}
          {exerciseCount > 4 && (
            <span className="rounded-lg border border-border/60 bg-card-elevated px-2 py-0.5 text-[11px] font-medium text-muted-foreground sm:px-2 sm:py-1 sm:text-xs">
              +{exerciseCount - 4} more
            </span>
          )}
        </div>
      </div>

      {/* CTA Button */}
      <Link
        href="/workout"
        onClick={() => triggerHaptic('medium')}
        className="mt-5 flex min-h-[50px] w-full items-center justify-center gap-2 rounded-2xl bg-primary text-sm font-bold text-primary-foreground shadow-[0_0_25px_rgba(34,197,94,0.35)] transition-all hover:bg-primary/90 active:scale-95 sm:mt-6 sm:min-h-[52px] sm:text-base"
      >
        <Play className="size-4 fill-primary-foreground" />
        Start Workout
      </Link>
    </div>
  )
}
