import type { RecoveryLog } from '@/types'

/**
 * Recovery scoring + hydration helpers (FR-24/26, design C.16 step 13). PURE
 * and deterministic. `recoveryScore` is framed strictly as a TRAINING insight
 * (readiness to train), NOT medical advice.
 */

export interface RecoveryInputs {
  /** 0-24 hours; undefined when not logged. */
  sleepHours?: number
  /** 1-5 (higher = more energetic). */
  energy: number
  /** 1-5 (higher = more stressed → worse). */
  stress: number
  /** 1-5 (higher = more sore → worse). */
  soreness: number
  /** 1-5 (higher = more motivated). */
  motivation: number
}

/**
 * Weighted 0-100 recovery score (higher = better recovered). Blends sleep,
 * energy, soreness (inverted), stress (inverted), and motivation. Each 1-5
 * input is normalised to 0-1; sleep is normalised against an 8h target.
 *
 * Weights (sum to 1): sleep .30, energy .25, soreness .20, stress .15,
 * motivation .10.
 */
export function computeRecoveryScore(inputs: RecoveryInputs): number {
  const energy = clamp01((inputs.energy - 1) / 4)
  const motivation = clamp01((inputs.motivation - 1) / 4)
  // stress/soreness: 1 (none) is best → invert.
  const soreness = clamp01((5 - inputs.soreness) / 4)
  const stress = clamp01((5 - inputs.stress) / 4)
  const sleep =
    inputs.sleepHours === undefined
      ? energy // fall back to energy when sleep not logged
      : clamp01(inputs.sleepHours / 8)

  const score =
    sleep * 0.3 +
    energy * 0.25 +
    soreness * 0.2 +
    stress * 0.15 +
    motivation * 0.1

  return Math.round(clamp01(score) * 100)
}

export type RecoveryBand = 'low' | 'moderate' | 'high'

/** Band for UI framing (training insight only). */
export function recoveryBand(score: number): RecoveryBand {
  if (score < 40) return 'low'
  if (score < 70) return 'moderate'
  return 'high'
}

/** Non-medical, training-only insight copy for a score. */
export function recoveryInsight(score: number): string {
  switch (recoveryBand(score)) {
    case 'low':
      return 'Recovery is low. Consider a lighter session or a deload today.'
    case 'moderate':
      return 'Recovery is moderate. Train as planned and listen to your body.'
    case 'high':
      return 'Recovery is high. A good day to push for progression.'
  }
}

export const HYDRATION_QUICK_ADDS_ML = [250, 500, 750] as const

/** Add a hydration quick-add, clamped at 0 (idempotent-safe for upserts). */
export function addHydration(currentMl: number, addMl: number): number {
  return Math.max(0, Math.round(currentMl + addMl))
}

/** Hydration progress ratio 0-1 against a target (0 target → 0). */
export function hydrationProgress(currentMl: number, targetMl: number): number {
  if (targetMl <= 0) return 0
  return clamp01(currentMl / targetMl)
}

/** Build a validated RecoveryLog payload with the computed score. */
export function buildRecoveryLog(args: {
  uid: string
  date: string
  inputs: RecoveryInputs
  note?: string
  hydrationMl: number
  hydrationTargetMl: number
}): RecoveryLog {
  return {
    uid: args.uid,
    date: args.date,
    ...(args.inputs.sleepHours !== undefined
      ? { sleepHours: args.inputs.sleepHours }
      : {}),
    energy: args.inputs.energy,
    stress: args.inputs.stress,
    soreness: args.inputs.soreness,
    motivation: args.inputs.motivation,
    recoveryScore: computeRecoveryScore(args.inputs),
    ...(args.note !== undefined ? { note: args.note } : {}),
    hydrationMl: args.hydrationMl,
    hydrationTargetMl: args.hydrationTargetMl,
  }
}

function clamp01(n: number): number {
  if (Number.isNaN(n)) return 0
  return Math.min(1, Math.max(0, n))
}
