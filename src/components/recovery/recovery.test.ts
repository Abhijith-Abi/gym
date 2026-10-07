import { describe, expect, it } from 'vitest'
import {
  addHydration,
  buildRecoveryLog,
  computeRecoveryScore,
  HYDRATION_QUICK_ADDS_ML,
  hydrationProgress,
  recoveryBand,
} from '@/lib/recovery'

describe('computeRecoveryScore', () => {
  it('is bounded 0-100', () => {
    const worst = computeRecoveryScore({
      sleepHours: 0,
      energy: 1,
      stress: 5,
      soreness: 5,
      motivation: 1,
    })
    const best = computeRecoveryScore({
      sleepHours: 8,
      energy: 5,
      stress: 1,
      soreness: 1,
      motivation: 5,
    })
    expect(worst).toBeGreaterThanOrEqual(0)
    expect(best).toBeLessThanOrEqual(100)
    expect(best).toBe(100)
    expect(worst).toBe(0)
  })

  it('higher inputs give a higher (better-recovered) score', () => {
    const low = computeRecoveryScore({
      sleepHours: 4,
      energy: 2,
      stress: 4,
      soreness: 4,
      motivation: 2,
    })
    const high = computeRecoveryScore({
      sleepHours: 8,
      energy: 4,
      stress: 2,
      soreness: 2,
      motivation: 4,
    })
    expect(high).toBeGreaterThan(low)
  })

  it('clamps out-of-range sleep without exceeding 100', () => {
    const score = computeRecoveryScore({
      sleepHours: 20,
      energy: 5,
      stress: 1,
      soreness: 1,
      motivation: 5,
    })
    expect(score).toBeLessThanOrEqual(100)
  })

  it('falls back to energy when sleep is not logged', () => {
    const score = computeRecoveryScore({
      energy: 5,
      stress: 1,
      soreness: 1,
      motivation: 5,
    })
    expect(score).toBe(100)
  })

  it('recoveryBand maps score to low/moderate/high', () => {
    expect(recoveryBand(10)).toBe('low')
    expect(recoveryBand(50)).toBe('moderate')
    expect(recoveryBand(90)).toBe('high')
  })
})

describe('hydration', () => {
  it('addHydration increments and clamps at 0', () => {
    expect(addHydration(0, 250)).toBe(250)
    expect(addHydration(250, 500)).toBe(750)
    expect(addHydration(100, -500)).toBe(0)
  })

  it('exposes the +250/500/750 quick-adds', () => {
    expect([...HYDRATION_QUICK_ADDS_ML]).toEqual([250, 500, 750])
  })

  it('hydrationProgress is 0-1 and 0 with no target', () => {
    expect(hydrationProgress(1500, 3000)).toBeCloseTo(0.5, 5)
    expect(hydrationProgress(5000, 3000)).toBe(1)
    expect(hydrationProgress(100, 0)).toBe(0)
  })
})

describe('buildRecoveryLog', () => {
  it('stamps the computed score and omits undefined sleep', () => {
    const log = buildRecoveryLog({
      uid: 'u1',
      date: '2024-06-15',
      inputs: { energy: 3, stress: 3, soreness: 3, motivation: 3 },
      hydrationMl: 500,
      hydrationTargetMl: 3000,
    })
    expect(log.recoveryScore).toBe(
      computeRecoveryScore({ energy: 3, stress: 3, soreness: 3, motivation: 3 }),
    )
    expect('sleepHours' in log).toBe(false)
    expect(log.hydrationMl).toBe(500)
  })
})
