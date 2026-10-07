import { describe, expect, it } from 'vitest'
import {
  buildAchievementUnlocks,
  isUnlocked,
  newlyUnlockedKeys,
  type AchievementMetrics,
} from '@/lib/achievements'
import { ACHIEVEMENTS_BY_KEY } from '@/data/achievements'
import { goalProgress, isGoalAchieved } from '@/lib/goals'
import type { AchievementKey } from '@/types'

const ZERO: AchievementMetrics = {
  workouts: 0,
  streakDays: 0,
  prCount: 0,
  totalVolumeKg: 0,
}

describe('achievement thresholds', () => {
  it('first_workout unlocks at exactly 1 workout', () => {
    expect(isUnlocked(ACHIEVEMENTS_BY_KEY.first_workout, { ...ZERO, workouts: 0 })).toBe(false)
    expect(isUnlocked(ACHIEVEMENTS_BY_KEY.first_workout, { ...ZERO, workouts: 1 })).toBe(true)
  })

  it('volume_100000kg unlocks at the 100,000 kg threshold', () => {
    expect(isUnlocked(ACHIEVEMENTS_BY_KEY.volume_100000kg, { ...ZERO, totalVolumeKg: 99_999 })).toBe(false)
    expect(isUnlocked(ACHIEVEMENTS_BY_KEY.volume_100000kg, { ...ZERO, totalVolumeKg: 100_000 })).toBe(true)
  })

  it('streak + PR thresholds gate correctly', () => {
    expect(isUnlocked(ACHIEVEMENTS_BY_KEY.streak_10, { ...ZERO, streakDays: 10 })).toBe(true)
    expect(isUnlocked(ACHIEVEMENTS_BY_KEY.streak_30, { ...ZERO, streakDays: 29 })).toBe(false)
    expect(isUnlocked(ACHIEVEMENTS_BY_KEY.prs_10, { ...ZERO, prCount: 10 })).toBe(true)
  })
})

describe('newlyUnlockedKeys', () => {
  it('returns keys meeting thresholds that are not already unlocked', () => {
    const metrics: AchievementMetrics = {
      workouts: 10,
      streakDays: 0,
      prCount: 1,
      totalVolumeKg: 0,
    }
    const keys = newlyUnlockedKeys(metrics, new Set())
    expect(keys).toContain('first_workout')
    expect(keys).toContain('workouts_10')
    expect(keys).toContain('first_pr')
    expect(keys).not.toContain('workouts_50')
  })

  it('idempotent: already-unlocked keys are not returned again', () => {
    const metrics: AchievementMetrics = {
      workouts: 10,
      streakDays: 0,
      prCount: 0,
      totalVolumeKg: 0,
    }
    const already = new Set<AchievementKey>(['first_workout', 'workouts_10'])
    const keys = newlyUnlockedKeys(metrics, already)
    expect(keys).toEqual([]) // nothing new to unlock
  })

  it('buildAchievementUnlocks keys the doc id by the achievement key', () => {
    const unlocks = buildAchievementUnlocks('u1', ['first_pr'], new Date())
    expect(unlocks).toHaveLength(1)
    expect(unlocks[0].id).toBe('first_pr')
    expect(unlocks[0].key).toBe('first_pr')
    expect(unlocks[0].uid).toBe('u1')
  })
})

describe('goal progress', () => {
  it('clamps increasing-goal progress to 0-1', () => {
    expect(goalProgress({ startValue: 100, currentValue: 110, targetValue: 120 })).toBeCloseTo(0.5, 5)
    expect(goalProgress({ startValue: 100, currentValue: 200, targetValue: 120 })).toBe(1)
    expect(goalProgress({ startValue: 100, currentValue: 90, targetValue: 120 })).toBe(0)
  })

  it('handles decreasing goals (e.g. bodyweight down)', () => {
    expect(goalProgress({ startValue: 90, currentValue: 85, targetValue: 80 })).toBeCloseTo(0.5, 5)
    expect(isGoalAchieved({ startValue: 90, currentValue: 79, targetValue: 80 })).toBe(true)
    expect(isGoalAchieved({ startValue: 90, currentValue: 85, targetValue: 80 })).toBe(false)
  })
})
