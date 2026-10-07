import type {
  Equipment,
  ExerciseSet,
  ProgressionConfig,
  ProgressionRecommendation,
  RpeMode,
} from '@/types'

/** Concrete defaults (C.8); all overridable in settings/preferences. */
export const DEFAULT_PROGRESSION_CONFIG: ProgressionConfig = {
  weightStepKg: {
    barbell: 2.5,
    dumbbell: 2.0,
    machine: 2.5,
    cable: 2.5,
    bodyweight: 0,
    kettlebell: 2.0,
    band: 0,
    other: 2.5,
  },
  reduceWeightPct: 0.1,
  missSessionsBeforeReduce: 2,
  deloadWeeksFlatE1rm: 3,
  deloadRecoveryScoreBelow: 40,
  targetRpeDefault: 8,
  targetRirDefault: 2,
}

/** A compacted working-set summary for one past session of an exercise. */
export interface SessionTopSet {
  topReps: number
  weightKg: number
  rpe?: number
  rir?: number
}

export interface ProgressionInput {
  prescription: ExerciseSet
  equipment: Equipment
  rpeMode: RpeMode
  /** most-recent-first; index 0 is the last completed session. */
  recentSessions: SessionTopSet[]
  /** count of prior comparable sessions (same exercise, overlapping rep window). */
  comparableSessions: number
  /** 0-100; lower = more fatigued. */
  recoveryScore: number
  /** flat/negative e1RM trend over config.deloadWeeksFlatE1rm weeks. */
  e1rmTrendFlat: boolean
  /** user manually requested a deload (FR-24). */
  manualDeload?: boolean
  config?: ProgressionConfig
}

function weightStep(equipment: Equipment, config: ProgressionConfig): number {
  return config.weightStepKg[equipment] ?? config.weightStepKg.other
}

/** confidence = min(1, comparableSessions / 3) (C.8). */
export function progressionConfidence(comparableSessions: number): number {
  return Math.min(1, comparableSessions / 3)
}

/** True when the session's effort was AT or BELOW target (room to add load). */
function effortAtOrBelowTarget(
  set: SessionTopSet,
  rpeMode: RpeMode,
  targetRpe: number,
  targetRir: number,
): boolean {
  if (rpeMode === 'None') return true
  if (rpeMode === 'RIR') {
    return set.rir === undefined ? true : set.rir >= targetRir
  }
  // 'RPE' or 'Both' lead with RPE
  return set.rpe === undefined ? true : set.rpe <= targetRpe
}

function effortAboveTarget(
  set: SessionTopSet,
  rpeMode: RpeMode,
  targetRpe: number,
  targetRir: number,
): boolean {
  if (rpeMode === 'None') return false
  if (rpeMode === 'RIR') {
    return set.rir === undefined ? false : set.rir < targetRir
  }
  return set.rpe === undefined ? false : set.rpe > targetRpe
}

/**
 * Pure double-progression recommendation (C.8, FR-9). Never mutates the plan.
 * Evaluates the last completed session's top working set against the window.
 */
export function recommendProgression(
  input: ProgressionInput,
): ProgressionRecommendation {
  const config = input.config ?? DEFAULT_PROGRESSION_CONFIG
  const { targetRepMin, targetRepMax } = input.prescription
  const targetRpe = input.prescription.targetRpe ?? config.targetRpeDefault
  const targetRir = config.targetRirDefault
  const confidence = progressionConfidence(input.comparableSessions)

  const last = input.recentSessions[0]
  const currentWeightKg = last?.weightKg ?? 0
  const base = {
    currentWeightKg,
    targetRepMin,
    targetRepMax,
    confidence,
  }

  // DELOAD — manual trigger or a flat/negative e1RM trend.
  if (input.manualDeload || input.e1rmTrendFlat) {
    return {
      ...base,
      type: 'DELOAD',
      recommendedWeightKg: round(currentWeightKg * (1 - config.reduceWeightPct)),
      reason: input.manualDeload
        ? 'Manual deload requested; backing off to recover.'
        : `Estimated 1RM has been flat for ${config.deloadWeeksFlatE1rm}+ weeks; deload to resensitize.`,
    }
  }

  // No history yet — hold and build a baseline.
  if (!last) {
    return {
      ...base,
      type: 'MAINTAIN',
      recommendedWeightKg: currentWeightKg,
      reason: 'No prior sessions for this exercise yet; establish a baseline.',
    }
  }

  // Count consecutive sub-min sessions from the most recent backwards.
  let consecutiveMisses = 0
  for (const s of input.recentSessions) {
    if (s.topReps < targetRepMin) consecutiveMisses += 1
    else break
  }

  const hitMax = last.topReps >= targetRepMax
  const belowMin = last.topReps < targetRepMin
  const aboveEffort = effortAboveTarget(last, input.rpeMode, targetRpe, targetRir)
  const effortOk = effortAtOrBelowTarget(last, input.rpeMode, targetRpe, targetRir)

  // REDUCE_* after N consecutive misses.
  if (belowMin && consecutiveMisses >= config.missSessionsBeforeReduce) {
    if (input.recoveryScore < config.deloadRecoveryScoreBelow) {
      return {
        ...base,
        type: 'REDUCE_VOLUME',
        recommendedWeightKg: currentWeightKg,
        reason: `Repeated misses with low recovery (score ${input.recoveryScore}); drop a working set, keep the load.`,
      }
    }
    return {
      ...base,
      type: 'REDUCE_WEIGHT',
      recommendedWeightKg: round(currentWeightKg * (1 - config.reduceWeightPct)),
      reason: `${consecutiveMisses} consecutive sessions below ${targetRepMin} reps; reduce load ${Math.round(
        config.reduceWeightPct * 100,
      )}%.`,
    }
  }

  // INCREASE_WEIGHT — hit the top of the window with effort at/below target.
  if (hitMax && effortOk) {
    return {
      ...base,
      type: 'INCREASE_WEIGHT',
      recommendedWeightKg: round(currentWeightKg + weightStep(input.equipment, config)),
      targetRepMin,
      targetRepMax,
      reason: `Hit ${targetRepMax} reps within target effort; add ${weightStep(
        input.equipment,
        config,
      )}kg and reset to ${targetRepMin} reps.`,
    }
  }

  // MAINTAIN — first miss, or hit reps but effort above target.
  if ((belowMin && consecutiveMisses < config.missSessionsBeforeReduce) || aboveEffort) {
    return {
      ...base,
      type: 'MAINTAIN',
      recommendedWeightKg: currentWeightKg,
      reason: belowMin
        ? 'One session below the rep target; hold weight and try again.'
        : 'Reps hit but effort above target; consolidate at this weight.',
    }
  }

  // INCREASE_REPS — climbing within the window.
  if (last.topReps >= targetRepMin && last.topReps < targetRepMax) {
    return {
      ...base,
      type: 'INCREASE_REPS',
      recommendedWeightKg: currentWeightKg,
      reason: `Add a rep toward ${targetRepMax} at the same weight.`,
    }
  }

  // Fallback — hold.
  return {
    ...base,
    type: 'MAINTAIN',
    recommendedWeightKg: currentWeightKg,
    reason: 'Hold current weight.',
  }
}

/** Round to 0.5 kg (plate-sensible), guarding against negatives. */
function round(kg: number): number {
  return Math.max(0, Math.round(kg * 2) / 2)
}

/* ------------------------------------------------------------------ */
/* Smart-rest adjustment (C.8a) — pure, feeds useRestTimer.           */
/* ------------------------------------------------------------------ */

export interface SmartRestInput {
  /** base rest from the PlanEntry/ExerciseSet; preset fallback handled by caller. */
  baseRestSeconds: number
  smartRestEnabled: boolean
  rpeMode: RpeMode
  lastSet: { rpe?: number; rir?: number; isWarmup: boolean }
}

/**
 * Derive the rest duration on set completion (C.8a). When smart rest is off,
 * returns baseRestSeconds verbatim.
 */
export function smartRestSeconds(input: SmartRestInput): number {
  let rest = input.baseRestSeconds
  if (!input.smartRestEnabled) return rest

  if (input.lastSet.isWarmup) {
    return Math.min(rest, 45)
  }
  if (input.rpeMode !== 'RIR' && (input.lastSet.rpe ?? 0) >= 9) {
    rest += 30
  }
  if (input.rpeMode !== 'RPE' && input.lastSet.rir !== undefined && input.lastSet.rir <= 0) {
    rest += 30
  }
  return rest
}
