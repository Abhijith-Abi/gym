import { describe, expect, it } from 'vitest'
import {
  DEFAULT_PROGRESSION_CONFIG,
  progressionConfidence,
  recommendProgression,
  smartRestSeconds,
  type ProgressionInput,
} from './progression'
import type { ExerciseSet } from '@/types'

const prescription: ExerciseSet = {
  targetSets: 3,
  targetRepMin: 8,
  targetRepMax: 10,
  targetRpe: 8,
  restSeconds: 90,
}

function base(overrides: Partial<ProgressionInput>): ProgressionInput {
  return {
    prescription,
    equipment: 'barbell',
    rpeMode: 'RPE',
    recentSessions: [],
    comparableSessions: 3,
    recoveryScore: 80,
    e1rmTrendFlat: false,
    ...overrides,
  }
}

describe('progressionConfidence', () => {
  it('is min(1, comparableSessions / 3)', () => {
    expect(progressionConfidence(0)).toBeCloseTo(0)
    expect(progressionConfidence(1)).toBeCloseTo(1 / 3)
    expect(progressionConfidence(3)).toBe(1)
    expect(progressionConfidence(10)).toBe(1)
  })
})

describe('recommendProgression branches', () => {
  it('MAINTAIN with no history', () => {
    const r = recommendProgression(base({ recentSessions: [] }))
    expect(r.type).toBe('MAINTAIN')
  })

  it('INCREASE_WEIGHT when hitting rep max within effort', () => {
    const r = recommendProgression(
      base({ recentSessions: [{ topReps: 10, weightKg: 100, rpe: 7 }] }),
    )
    expect(r.type).toBe('INCREASE_WEIGHT')
    expect(r.recommendedWeightKg).toBe(102.5)
  })

  it('MAINTAIN when reps hit but effort above target', () => {
    const r = recommendProgression(
      base({ recentSessions: [{ topReps: 10, weightKg: 100, rpe: 10 }] }),
    )
    expect(r.type).toBe('MAINTAIN')
  })

  it('INCREASE_REPS when climbing inside the window', () => {
    const r = recommendProgression(
      base({ recentSessions: [{ topReps: 9, weightKg: 100, rpe: 8 }] }),
    )
    expect(r.type).toBe('INCREASE_REPS')
    expect(r.recommendedWeightKg).toBe(100)
  })

  it('MAINTAIN on the first sub-min session', () => {
    const r = recommendProgression(
      base({ recentSessions: [{ topReps: 6, weightKg: 100, rpe: 9 }] }),
    )
    expect(r.type).toBe('MAINTAIN')
  })

  it('REDUCE_WEIGHT after consecutive misses with good recovery', () => {
    const r = recommendProgression(
      base({
        recentSessions: [
          { topReps: 6, weightKg: 100, rpe: 9 },
          { topReps: 7, weightKg: 100, rpe: 9 },
        ],
        recoveryScore: 80,
      }),
    )
    expect(r.type).toBe('REDUCE_WEIGHT')
    expect(r.recommendedWeightKg).toBe(90)
  })

  it('REDUCE_VOLUME when misses coincide with low recovery', () => {
    const r = recommendProgression(
      base({
        recentSessions: [
          { topReps: 6, weightKg: 100, rpe: 9 },
          { topReps: 7, weightKg: 100, rpe: 9 },
        ],
        recoveryScore: 30,
      }),
    )
    expect(r.type).toBe('REDUCE_VOLUME')
    expect(r.recommendedWeightKg).toBe(100)
  })

  it('DELOAD on a flat e1RM trend', () => {
    const r = recommendProgression(
      base({ recentSessions: [{ topReps: 9, weightKg: 100 }], e1rmTrendFlat: true }),
    )
    expect(r.type).toBe('DELOAD')
    expect(r.recommendedWeightKg).toBe(90)
  })

  it('DELOAD on a manual trigger', () => {
    const r = recommendProgression(
      base({ recentSessions: [{ topReps: 9, weightKg: 100 }], manualDeload: true }),
    )
    expect(r.type).toBe('DELOAD')
  })

  it('never mutates the plan prescription', () => {
    const snapshot = JSON.stringify(prescription)
    recommendProgression(base({ recentSessions: [{ topReps: 10, weightKg: 100, rpe: 7 }] }))
    expect(JSON.stringify(prescription)).toBe(snapshot)
  })

  it('skips the RPE gate when rpeMode is None', () => {
    const r = recommendProgression(
      base({ rpeMode: 'None', recentSessions: [{ topReps: 10, weightKg: 100 }] }),
    )
    expect(r.type).toBe('INCREASE_WEIGHT')
  })
})

describe('smartRestSeconds', () => {
  const lastHard = { rpe: 9, rir: 0, isWarmup: false }

  it('returns base verbatim when disabled', () => {
    expect(
      smartRestSeconds({
        baseRestSeconds: 90,
        smartRestEnabled: false,
        rpeMode: 'RPE',
        lastSet: lastHard,
      }),
    ).toBe(90)
  })

  it('adds 30s after a hard RPE>=9 set', () => {
    expect(
      smartRestSeconds({
        baseRestSeconds: 90,
        smartRestEnabled: true,
        rpeMode: 'RPE',
        lastSet: { rpe: 9, isWarmup: false },
      }),
    ).toBe(120)
  })

  it('adds 30s after a RIR<=0 set in RIR mode', () => {
    expect(
      smartRestSeconds({
        baseRestSeconds: 90,
        smartRestEnabled: true,
        rpeMode: 'RIR',
        lastSet: { rir: 0, isWarmup: false },
      }),
    ).toBe(120)
  })

  it('caps warmup rest at 45s', () => {
    expect(
      smartRestSeconds({
        baseRestSeconds: 120,
        smartRestEnabled: true,
        rpeMode: 'RPE',
        lastSet: { rpe: 6, isWarmup: true },
      }),
    ).toBe(45)
  })

  it('leaves a normal set at base rest', () => {
    expect(
      smartRestSeconds({
        baseRestSeconds: 90,
        smartRestEnabled: true,
        rpeMode: 'RPE',
        lastSet: { rpe: 7, isWarmup: false },
      }),
    ).toBe(90)
  })
})

describe('DEFAULT_PROGRESSION_CONFIG', () => {
  it('uses a 2.5kg barbell step and 10% reduce', () => {
    expect(DEFAULT_PROGRESSION_CONFIG.weightStepKg.barbell).toBe(2.5)
    expect(DEFAULT_PROGRESSION_CONFIG.reduceWeightPct).toBe(0.1)
  })
})
