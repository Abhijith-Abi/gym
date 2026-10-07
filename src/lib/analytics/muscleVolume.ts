import type { MuscleGroup, MuscleVolume, WeeklySummary } from '@/types'
import { emptyMuscleVolume } from '@/lib/volume'
import { withinRange, type AnalyticsRange } from './range'

/**
 * Muscle-group volume analytics (FR-12/28, design C.16 step 12). PURE over the
 * weekly SUMMARY docs' `volumeByMuscle` rollups — aggregates per-muscle volume
 * across a range for the MuscleVolumeChart. No full-history reads.
 */

export interface MuscleVolumePoint {
  muscle: MuscleGroup
  volumeKg: number
}

/** Sum per-muscle volume across the weekly summaries within a range. */
export function aggregateMuscleVolume(
  summaries: ReadonlyArray<WeeklySummary>,
  range: AnalyticsRange,
  now: Date,
): MuscleVolume {
  const inRange = withinRange(summaries, (s) => s.updatedAt, range, now)
  const acc = emptyMuscleVolume()
  for (const s of inRange) {
    for (const key of Object.keys(acc) as MuscleGroup[]) {
      acc[key] += s.volumeByMuscle[key] ?? 0
    }
  }
  return acc
}

/** As a sorted (descending-volume) array for charting; zeros dropped. */
export function muscleVolumePoints(volume: MuscleVolume): MuscleVolumePoint[] {
  return (Object.keys(volume) as MuscleGroup[])
    .map((muscle) => ({ muscle, volumeKg: volume[muscle] }))
    .filter((p) => p.volumeKg > 0)
    .sort((a, b) => b.volumeKg - a.volumeKg)
}

/** The muscle group with the most accumulated volume (or null when all zero). */
export function dominantMuscle(volume: MuscleVolume): MuscleGroup | null {
  const points = muscleVolumePoints(volume)
  return points.length > 0 ? points[0].muscle : null
}
