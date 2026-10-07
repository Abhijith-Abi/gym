import { epley1RM } from '@/lib/oneRepMax'
import { setVolumeKg } from '@/lib/volume'
import type { ExerciseHistory, PersonalRecord, PersonalRecordType } from '@/types'

/**
 * Pure PR detection (design C.7 Step 1, FR-12, AC-7). Given the bounded
 * `exerciseHistory` for an exercise (the prior bests) and the sets just logged
 * for it this session, compute which weight / reps / volume / e1RM records were
 * beaten. Pure — reads nothing, writes nothing; the service persists the result
 * at `personalRecords/{sessionId}_{exerciseId}_{type}` (deterministic ids).
 */

export interface DetectableSet {
  weightKg: number
  actualReps?: number
  durationSeconds?: number
  isWarmup: boolean
}

export interface DetectedPr {
  type: PersonalRecordType
  valueKg?: number
  value?: number
  reps?: number
  weightKg: number
}

/** Deterministic PR document id (C.7 Step 2). */
export function personalRecordId(
  sessionId: string,
  exerciseId: string,
  type: PersonalRecordType,
): string {
  return `${sessionId}_${exerciseId}_${type}`
}

/**
 * Detect PRs for one exercise. `history` is the prior rollup (undefined for a
 * first-ever session → every qualifying metric is a PR). Warmup and duration-
 * only sets are excluded from weight/reps/volume/e1RM detection (they carry no
 * mechanical rep data).
 */
export function detectPersonalRecords(
  history: ExerciseHistory | undefined,
  sets: ReadonlyArray<DetectableSet>,
): DetectedPr[] {
  const working = sets.filter(
    (s) => !s.isWarmup && s.actualReps !== undefined && s.actualReps > 0,
  )
  if (working.length === 0) return []

  const prevBestWeight = history?.bestWeightKg ?? 0
  const prevBestE1rm = history?.bestE1rmKg ?? 0
  const prevBestReps = history?.bestRepsAtWeight ?? 0
  const prevBestVolume = bestSetVolume(history)

  // Best values achieved in this session.
  let bestWeight = 0
  let bestE1rm = 0
  let bestReps = 0
  let bestVolume = 0
  let bestWeightReps = 0
  let bestE1rmWeight = 0
  let bestVolumeWeight = 0
  let bestRepsWeight = 0

  for (const s of working) {
    const reps = s.actualReps as number
    const e1rm = epley1RM(s.weightKg, reps)
    const vol = setVolumeKg(s)
    if (s.weightKg > bestWeight) {
      bestWeight = s.weightKg
      bestWeightReps = reps
    }
    if (e1rm > bestE1rm) {
      bestE1rm = e1rm
      bestE1rmWeight = s.weightKg
    }
    if (reps > bestReps) {
      bestReps = reps
      bestRepsWeight = s.weightKg
    }
    if (vol > bestVolume) {
      bestVolume = vol
      bestVolumeWeight = s.weightKg
    }
  }

  const prs: DetectedPr[] = []
  if (bestWeight > prevBestWeight) {
    prs.push({ type: 'weight', valueKg: bestWeight, reps: bestWeightReps, weightKg: bestWeight })
  }
  if (bestE1rm > prevBestE1rm) {
    prs.push({ type: 'e1rm', valueKg: round2(bestE1rm), weightKg: bestE1rmWeight })
  }
  if (bestReps > prevBestReps) {
    prs.push({ type: 'reps', value: bestReps, reps: bestReps, weightKg: bestRepsWeight })
  }
  if (bestVolume > prevBestVolume) {
    prs.push({ type: 'volume', valueKg: round2(bestVolume), weightKg: bestVolumeWeight })
  }
  return prs
}

/** Highest single-set mechanical volume found in the prior rolled sets. */
function bestSetVolume(history: ExerciseHistory | undefined): number {
  if (!history) return 0
  let best = 0
  for (const s of history.recentSessions) {
    if (s.reps === undefined) continue
    const v = s.weightKg * s.reps
    if (v > best) best = v
  }
  return best
}

/**
 * Build PersonalRecord docs (with deterministic ids) from detected PRs. Pure;
 * the service writes these in the completion batch.
 */
export function buildPersonalRecords(
  detected: ReadonlyArray<DetectedPr>,
  args: { uid: string; exerciseId: string; sessionId: string; achievedAt: Date },
): PersonalRecord[] {
  return detected.map((d) => ({
    id: personalRecordId(args.sessionId, args.exerciseId, d.type),
    uid: args.uid,
    exerciseId: args.exerciseId,
    type: d.type,
    ...(d.valueKg !== undefined ? { valueKg: d.valueKg } : {}),
    ...(d.value !== undefined ? { value: d.value } : {}),
    ...(d.reps !== undefined ? { reps: d.reps } : {}),
    sessionId: args.sessionId,
    achievedAt: args.achievedAt,
  }))
}

function round2(n: number): number {
  return Math.round(n * 100) / 100
}
