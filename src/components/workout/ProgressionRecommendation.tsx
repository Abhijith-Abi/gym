'use client'

import { Target, Sparkles } from 'lucide-react'
import { recommendProgression, type SessionTopSet } from '@/lib/progression'
import { getDefaultStartingWeight } from '@/lib/exerciseDefaults'
import { toDisplay } from '@/lib/units'
import { useProgressStore } from '@/store/progressStore'
import type { Equipment, ExerciseSet, RpeMode, Unit } from '@/types'

/**
 * Clean & modern progression target badge for the active exercise.
 * Eliminates awkward 0% confidence and ensures smart default targets.
 */
export function ProgressionRecommendation({
  exerciseId,
  prescription,
  equipment,
  rpeMode,
  unit,
}: {
  exerciseId: string
  prescription: ExerciseSet
  equipment: Equipment
  rpeMode: RpeMode
  unit: Unit
}) {
  const history = useProgressStore((s) => s.history[exerciseId])

  const recentSessions: SessionTopSet[] = (history?.recentSessions ?? [])
    .filter((s) => s.reps !== undefined)
    .map((s) => ({
      topReps: s.reps as number,
      weightKg: s.weightKg,
      ...(s.rpe !== undefined ? { rpe: s.rpe } : {}),
      ...(s.rir !== undefined ? { rir: s.rir } : {}),
    }))

  const rec = recommendProgression({
    prescription,
    equipment,
    rpeMode,
    recentSessions,
    comparableSessions: recentSessions.length,
    recoveryScore: 70,
    e1rmTrendFlat: false,
  })

  // Smart fallback if recommendedWeightKg is 0 and exercise is not bodyweight
  const defaultStarting = getDefaultStartingWeight(exerciseId, undefined, equipment)
  const displayWeightKg =
    rec.recommendedWeightKg > 0
      ? rec.recommendedWeightKg
      : (history?.bestWeightKg ?? defaultStarting)

  const isBodyweight = equipment === 'bodyweight' || displayWeightKg === 0

  return (
    <div className="flex items-center justify-between rounded-2xl border border-primary/20 bg-primary/5 p-3.5 shadow-sm">
      <div className="flex items-center gap-2.5">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
          <Target className="size-4" aria-hidden="true" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
            Target Recommendation
          </span>
          <span className="font-mono text-sm font-black tracking-tight text-foreground sm:text-base">
            {isBodyweight
              ? `${rec.targetRepMin}–${rec.targetRepMax} reps (Bodyweight)`
              : `${toDisplay(displayWeightKg, unit)} ${unit} × ${rec.targetRepMin}–${rec.targetRepMax} reps`}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
        <Sparkles className="size-3.5 text-primary" />
        <span className="hidden sm:inline">Smart Target</span>
      </div>
    </div>
  )
}
