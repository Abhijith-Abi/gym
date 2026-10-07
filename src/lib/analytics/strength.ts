import type { ExerciseHistory, RolledSet } from '@/types'
import { epley1RM } from '@/lib/oneRepMax'
import { withinRange, type AnalyticsRange } from './range'

/**
 * Strength-progression transforms (FR-9/13/15, design C.16 step 12). PURE over
 * the bounded `exerciseHistory` ring (recentSessions) — estimated-1RM trend per
 * exercise over time, used by the StrengthChart. Fixed inputs → deterministic
 * tests.
 */

export interface StrengthPoint {
  /** yyyy-mm-dd of the session. */
  label: string
  e1rmKg: number
  weightKg: number
  reps: number
}

/** Estimated-1RM for a rolled set (uses stored e1rm if present else Epley). */
export function rolledSetE1rm(set: RolledSet): number {
  if (set.e1rmKg !== undefined) return set.e1rmKg
  if (set.reps === undefined) return 0
  return epley1RM(set.weightKg, set.reps)
}

/** e1RM series for one exercise over its history ring, filtered + oldest first. */
export function e1rmSeries(
  history: ExerciseHistory | undefined,
  range: AnalyticsRange,
  now: Date,
): StrengthPoint[] {
  if (!history) return []
  const sets = history.recentSessions.filter((s) => s.reps !== undefined)
  const inRange = withinRange(sets, (s) => s.performedAt, range, now)
  return [...inRange]
    .sort((a, b) => a.performedAt.getTime() - b.performedAt.getTime())
    .map((s) => ({
      label: isoDay(s.performedAt),
      e1rmKg: round2(rolledSetE1rm(s)),
      weightKg: s.weightKg,
      reps: s.reps as number,
    }))
}

/**
 * Whether the e1RM trend is flat or negative across the series — the gate that
 * feeds the DELOAD progression branch (design C.8). Compares the mean of the
 * first half against the mean of the second half.
 */
export function isE1rmTrendFlat(points: ReadonlyArray<StrengthPoint>): boolean {
  if (points.length < 2) return false
  const mid = Math.floor(points.length / 2)
  const first = mean(points.slice(0, mid).map((p) => p.e1rmKg))
  const second = mean(points.slice(mid).map((p) => p.e1rmKg))
  return second <= first
}

function mean(xs: ReadonlyArray<number>): number {
  if (xs.length === 0) return 0
  return xs.reduce((a, b) => a + b, 0) / xs.length
}

function round2(n: number): number {
  return Math.round(n * 100) / 100
}

function isoDay(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}
