import { Timestamp } from 'firebase/firestore'
import { describe, expect, it } from 'vitest'
import { setLogConverter, workoutSessionConverter } from './converters'
import { APP_SCHEMA_VERSION } from '@/lib/constants'
import type { SetLog, WorkoutSession } from '@/types'

function durationSet(): SetLog {
  return {
    id: 's1',
    exerciseSessionId: 'es1',
    setIndex: 0,
    durationSeconds: 30,
    weightKg: 0,
    isWarmup: false,
    isCompleted: true,
    completedAt: new Date('2024-01-01T00:00:00Z'),
    sessionCompleted: false,
  }
}

function repSet(): SetLog {
  return {
    id: 's2',
    exerciseSessionId: 'es1',
    setIndex: 1,
    actualReps: 8,
    weightKg: 100,
    isWarmup: false,
    isCompleted: true,
    completedAt: new Date('2024-01-01T00:00:00Z'),
    sessionCompleted: false,
  }
}

describe('setLogConverter', () => {
  it('serializes a duration set with durationSeconds and NO actualReps key (AC-5)', () => {
    const out = setLogConverter.toFirestore(durationSet())
    expect(out).toHaveProperty('durationSeconds', 30)
    expect('actualReps' in out).toBe(false)
    // critically, it must not emit actualReps: null
    expect(out.actualReps).toBeUndefined()
  })

  it('serializes a rep set with actualReps and NO durationSeconds key', () => {
    const out = setLogConverter.toFirestore(repSet())
    expect(out).toHaveProperty('actualReps', 8)
    expect('durationSeconds' in out).toBe(false)
  })
})

describe('workoutSessionConverter', () => {
  it('stamps APP_SCHEMA_VERSION and converts dates to Timestamps', () => {
    const session: WorkoutSession = {
      id: 'w1',
      uid: 'u1',
      dayId: 'mon',
      workoutName: 'Chest & Triceps',
      status: 'IN_PROGRESS',
      startedAt: new Date('2024-01-01T10:00:00Z'),
      durationSeconds: 0,
      totalSets: 0,
      completedSets: 0,
      totalVolumeKg: 0,
      createdAt: new Date('2024-01-01T10:00:00Z'),
      updatedAt: new Date('2024-01-01T10:00:00Z'),
      planId: 'p1',
      deviceId: 'dev1',
      schemaVersion: APP_SCHEMA_VERSION,
      summaryApplied: false,
    }
    const out = workoutSessionConverter.toFirestore(session)
    expect(out.schemaVersion).toBe(APP_SCHEMA_VERSION)
    expect(out.startedAt).toBeInstanceOf(Timestamp)
    expect('completedAt' in out).toBe(false)
  })
})
