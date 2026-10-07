import { format } from 'date-fns'
import type { MuscleVolume } from '@/types'

/**
 * Deterministic period keys for the analytics summary docs (design C.4).
 * weekId = yyyy-'W'II (ISO week), monthId = yyyy-MM. Pure wrappers over
 * date-fns so the Step-3 transaction and tests agree on the exact doc path.
 */

export function weekIdOf(date: Date): string {
  // ISO week-numbering year + 2-digit ISO week (RR = ISO year, II = ISO week).
  return format(date, "RRRR-'W'II")
}

export function monthIdOf(date: Date): string {
  return format(date, 'yyyy-MM')
}

/**
 * The per-session deltas Step 3 adds into the weekly/monthly summaries. Computed
 * by the caller (completion orchestration) from the already-logged sets so the
 * sync layer stays transport/orchestration-only (no analytics reads here).
 */
export interface SessionSummaryDelta {
  /** +1 per completed session. */
  workouts: number
  totalVolumeKg: number
  volumeByMuscle: MuscleVolume
  prCount: number
  /** streak contribution (weekly only); the summary stores the latest value. */
  streakDays?: number
}
