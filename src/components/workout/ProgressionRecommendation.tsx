'use client'

import { TrendingUp } from 'lucide-react'
import { recommendProgression, type SessionTopSet } from '@/lib/progression'
import { toDisplay } from '@/lib/units'
import { useProgressStore } from '@/store/progressStore'
import type { Equipment, ExerciseSet, RpeMode, Unit } from '@/types'

/**
 * Recommended target for the next set, computed by the pure progression lib
 * (FR-9) from the bounded exerciseHistory ring. Confidence is surfaced so a
 * low-history suggestion reads as tentative.
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

  const confidencePct = Math.round(rec.confidence * 100)

  return (
    <div className="rounded-lg border border-border bg-card/50 p-3">
      <div className="flex items-center gap-2 text-sm font-medium text-primary">
        <TrendingUp className="size-4" aria-hidden="true" />
        Recommended
      </div>
      <p className="mt-1 text-sm">
        {toDisplay(rec.recommendedWeightKg, unit)}
        {unit} × {rec.targetRepMin}-{rec.targetRepMax} reps
      </p>
      <p className="mt-1 text-xs text-muted-foreground">{rec.reason}</p>
      <p className="mt-1 text-xs text-muted-foreground">
        Confidence: {confidencePct}%
      </p>
    </div>
  )
}
