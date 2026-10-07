import type { WeeklySummary, WorkoutSession } from '@/types'
import { changePct } from '@/lib/volume'
import { withinRange, type AnalyticsRange } from './range'

/**
 * Volume analytics transforms (FR-11/28, design C.8/C.16 step 12). These are
 * PURE and read the small weekly SUMMARY docs (not full history), falling back
 * to bounded completed-session reads for recent granularity. All functions take
 * already-fetched data so they are trivially unit-testable with fixed inputs.
 */

export interface VolumePoint {
  /** series key (weekId or yyyy-mm-dd). */
  label: string
  volumeKg: number
}

/** Weekly-volume series from summary docs, filtered to a range, oldest first. */
export function weeklyVolumeSeries(
  summaries: ReadonlyArray<WeeklySummary>,
  range: AnalyticsRange,
  now: Date,
): VolumePoint[] {
  // Summary docs are keyed by ISO week; use updatedAt as the range anchor.
  const inRange = withinRange(summaries, (s) => s.updatedAt, range, now)
  return [...inRange]
    .sort((a, b) => a.weekId.localeCompare(b.weekId))
    .map((s) => ({ label: s.weekId, volumeKg: s.totalVolumeKg }))
}

/** Per-session volume series (bounded raw reads) within a range, oldest first. */
export function sessionVolumeSeries(
  sessions: ReadonlyArray<WorkoutSession>,
  range: AnalyticsRange,
  now: Date,
): VolumePoint[] {
  const completed = sessions.filter(
    (s) => s.status === 'COMPLETED' && s.completedAt,
  )
  const inRange = withinRange(completed, (s) => s.completedAt as Date, range, now)
  return [...inRange]
    .sort(
      (a, b) =>
        (a.completedAt as Date).getTime() - (b.completedAt as Date).getTime(),
    )
    .map((s) => ({
      label: isoDay(s.completedAt as Date),
      volumeKg: s.totalVolumeKg,
    }))
}

/** Total volume across a volume series. */
export function totalSeriesVolumeKg(points: ReadonlyArray<VolumePoint>): number {
  return points.reduce((acc, p) => acc + p.volumeKg, 0)
}

/**
 * Percent change between the latest and the prior point in a series. Returns 0
 * with fewer than two points or when the prior point is zero (no baseline).
 */
export function latestVolumeChangePct(points: ReadonlyArray<VolumePoint>): number {
  if (points.length < 2) return 0
  const prev = points[points.length - 2].volumeKg
  const curr = points[points.length - 1].volumeKg
  return changePct(prev, curr)
}

function isoDay(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}
