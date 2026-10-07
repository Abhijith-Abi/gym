import type { MuscleGroup, MuscleVolume, SetLog } from '@/types'

/**
 * Mechanical volume of a single set = weightKg * reps (C.8).
 * Duration-based sets (no actualReps) contribute ZERO mechanical volume; their
 * work surfaces as time-under-tension/round count elsewhere (C.8a).
 */
export function setVolumeKg(set: Pick<SetLog, 'weightKg' | 'actualReps'>): number {
  if (set.actualReps === undefined) return 0
  return set.weightKg * set.actualReps
}

/** Sum of per-set mechanical volume across a list of sets. */
export function totalVolumeKg(
  sets: ReadonlyArray<Pick<SetLog, 'weightKg' | 'actualReps'>>,
): number {
  return sets.reduce((acc, s) => acc + setVolumeKg(s), 0)
}

const MUSCLE_GROUPS: MuscleGroup[] = [
  'chest',
  'back',
  'shoulders',
  'biceps',
  'triceps',
  'quads',
  'hamstrings',
  'glutes',
  'calves',
  'core',
  'forearms',
  'fullbody',
]

/** A zeroed MuscleVolume record (every group present). */
export function emptyMuscleVolume(): MuscleVolume {
  return MUSCLE_GROUPS.reduce((acc, g) => {
    acc[g] = 0
    return acc
  }, {} as MuscleVolume)
}

/**
 * Roll up set volume by muscle group. The caller supplies the primary muscles
 * each set trained; volume is attributed fully to each listed primary muscle.
 */
export function rollupMuscleVolume(
  entries: ReadonlyArray<{
    set: Pick<SetLog, 'weightKg' | 'actualReps'>
    primaryMuscles: MuscleGroup[]
  }>,
): MuscleVolume {
  const acc = emptyMuscleVolume()
  for (const { set, primaryMuscles } of entries) {
    const v = setVolumeKg(set)
    for (const m of primaryMuscles) acc[m] += v
  }
  return acc
}

/**
 * Percent change from a previous value to a current value.
 * Returns 0 when there is no previous baseline (previous === 0) to avoid Infinity.
 */
export function changePct(previous: number, current: number): number {
  if (previous === 0) return 0
  return ((current - previous) / previous) * 100
}
