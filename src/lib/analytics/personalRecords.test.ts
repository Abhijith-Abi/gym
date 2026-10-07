import { describe, expect, it } from 'vitest'
import type { ExerciseHistory } from '@/types'
import {
  buildPersonalRecords,
  detectPersonalRecords,
  personalRecordId,
} from './personalRecords'

const history: ExerciseHistory = {
  exerciseId: 'back-squat',
  uid: 'u1',
  lastPerformedAt: new Date('2024-01-01'),
  bestWeightKg: 100,
  bestE1rmKg: 120, // ~100kg x 6
  bestRepsAtWeight: 6,
  recentSessions: [
    {
      sessionId: 's0',
      performedAt: new Date('2024-01-01'),
      weightKg: 100,
      reps: 6,
      e1rmKg: 120,
    },
  ],
}

describe('PR detection (AC-7)', () => {
  it('detects a weight + e1RM PR when a set beats history', () => {
    const prs = detectPersonalRecords(history, [
      { weightKg: 105, actualReps: 5, isWarmup: false },
    ])
    const types = prs.map((p) => p.type).sort()
    expect(types).toContain('weight')
    expect(types).toContain('e1rm')
    const weightPr = prs.find((p) => p.type === 'weight')
    expect(weightPr?.valueKg).toBe(105)
  })

  it('detects a reps PR at a lighter weight without a weight PR', () => {
    const prs = detectPersonalRecords(history, [
      { weightKg: 80, actualReps: 12, isWarmup: false },
    ])
    const types = prs.map((p) => p.type)
    expect(types).toContain('reps')
    expect(types).not.toContain('weight')
  })

  it('returns no PRs when nothing beats history', () => {
    const prs = detectPersonalRecords(history, [
      { weightKg: 90, actualReps: 5, isWarmup: false },
    ])
    expect(prs).toEqual([])
  })

  it('ignores warmup and duration-only sets', () => {
    const prs = detectPersonalRecords(history, [
      { weightKg: 200, actualReps: 10, isWarmup: true },
      { weightKg: 0, durationSeconds: 30, isWarmup: false },
    ])
    expect(prs).toEqual([])
  })

  it('treats the first-ever session (no history) as all PRs', () => {
    const prs = detectPersonalRecords(undefined, [
      { weightKg: 60, actualReps: 8, isWarmup: false },
    ])
    expect(prs.map((p) => p.type).sort()).toEqual(['e1rm', 'reps', 'volume', 'weight'])
  })

  it('builds PersonalRecord docs with deterministic ids', () => {
    const detected = detectPersonalRecords(history, [
      { weightKg: 105, actualReps: 5, isWarmup: false },
    ])
    const docs = buildPersonalRecords(detected, {
      uid: 'u1',
      exerciseId: 'back-squat',
      sessionId: 'sess42',
      achievedAt: new Date('2024-02-01'),
    })
    const weight = docs.find((d) => d.type === 'weight')
    expect(weight?.id).toBe(personalRecordId('sess42', 'back-squat', 'weight'))
    expect(weight?.id).toBe('sess42_back-squat_weight')
    expect(weight?.uid).toBe('u1')
  })
})
