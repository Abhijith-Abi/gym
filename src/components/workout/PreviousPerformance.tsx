'use client'

import { History } from 'lucide-react'
import { format } from 'date-fns'
import { toDisplay } from '@/lib/units'
import { useProgressStore } from '@/store/progressStore'
import type { Unit } from '@/types'

/**
 * "What you did last time" panel sourced from the bounded exerciseHistory ring
 * (FR-11). No deep reads — the most recent rolled top set is enough.
 */
export function PreviousPerformance({
  exerciseId,
  unit,
}: {
  exerciseId: string
  unit: Unit
}) {
  const history = useProgressStore((s) => s.history[exerciseId])
  const last = history?.recentSessions[0]

  if (!last) {
    return (
      <p className="text-xs text-muted-foreground">
        No previous data for this exercise yet.
      </p>
    )
  }

  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <History className="size-3.5" aria-hidden="true" />
      <span>
        Last time: {toDisplay(last.weightKg, unit)}
        {unit} × {last.reps ?? '-'} reps
        {last.e1rmKg ? ` · e1RM ${toDisplay(last.e1rmKg, unit)}${unit}` : ''}
        {' · '}
        {format(last.performedAt, 'MMM d')}
      </span>
    </div>
  )
}
