import { describe, expect, it, vi } from 'vitest'
import type { Firestore } from 'firebase/firestore'
import type {
  ExerciseSession,
  PersonalRecord,
  ServiceResult,
  SetLog,
  SyncOperation,
  WorkoutSession,
} from '@/types'
import type { CompleteSessionInput } from '@/services/sessionService'
import { emptyMuscleVolume } from '@/lib/volume'
import {
  completeSessionOpId,
  completionWithinBatchLimit,
  completionWriteCount,
  flushCompleteSession,
  MAX_SETS_PER_SESSION,
  type CompleteSessionPayload,
  type SyncManagerDeps,
} from './syncManager'

// A stubbed Firestore handle — the manager never touches it directly when the
// barrier + step runners are injected, so an opaque cast is safe for unit tests.
const stubDb = {} as Firestore

function session(status: WorkoutSession['status'] = 'IN_PROGRESS'): WorkoutSession {
  return {
    id: 's1',
    uid: 'u1',
    dayId: 'mon',
    workoutName: 'Chest',
    status,
    durationSeconds: 60,
    totalSets: 1,
    completedSets: 1,
    totalVolumeKg: 100,
    createdAt: new Date(0),
    updatedAt: new Date(0),
    planId: 'p1',
    deviceId: 'dev1',
    schemaVersion: 1,
    summaryApplied: false,
  }
}

function makeInput(setCount: number): CompleteSessionInput {
  const exercises: ExerciseSession[] = [
    {
      id: 's1__ex1__0',
      sessionId: 's1',
      exerciseId: 'ex1',
      order: 0,
      targetPrescription: { targetSets: 3, targetRepMin: 8, targetRepMax: 10, restSeconds: 90 },
      sessionCompleted: false,
    },
  ]
  const sets: SetLog[] = Array.from({ length: setCount }, (_, i) => ({
    id: `set${i}`,
    exerciseSessionId: 's1__ex1__0',
    setIndex: i,
    actualReps: 10,
    weightKg: 50,
    isWarmup: false,
    isCompleted: true,
    completedAt: new Date(0),
    sessionCompleted: false,
  }))
  const prs: PersonalRecord[] = []
  return { session: session(), exercises, sets, personalRecords: prs, historyRollups: [] }
}

function payload(status: WorkoutSession['status'] = 'IN_PROGRESS'): CompleteSessionPayload {
  return {
    completion: { ...makeInput(1), session: session(status) },
    summary: {
      uid: 'u1',
      sessionId: 's1',
      weekId: '2024-W01',
      monthId: '2024-01',
      delta: { workouts: 1, totalVolumeKg: 100, volumeByMuscle: emptyMuscleVolume(), prCount: 0 },
    },
    sessionState: { status, summaryApplied: false },
  }
}

function op(): SyncOperation {
  return {
    id: completeSessionOpId('s1'),
    entity: 'completeSession',
    op: 'set',
    path: 'users/u1/workoutSessions/s1',
    payload: { summaryApplied: false },
    createdAtMs: 0,
    attempts: 0,
  }
}

const okVoid: ServiceResult<void> = { ok: true, data: undefined }
const okApplied: ServiceResult<'applied' | 'noop'> = { ok: true, data: 'applied' }

describe('syncManager — flush barrier + ordering (C.7 HIGH-1)', () => {
  it('gates Step 2 on the flush barrier, strictly BEFORE the completion batch', async () => {
    const calls: string[] = []
    const deps: SyncManagerDeps = {
      db: stubDb,
      online: () => true,
      waitForPending: async () => {
        calls.push('barrier')
      },
      runStep2: async () => {
        calls.push('step2')
        return okVoid
      },
      runStep3: async () => {
        calls.push('step3')
        return okApplied
      },
    }
    const out = await flushCompleteSession(op(), payload(), deps)
    expect(out).toEqual({ status: 'done' })
    // barrier must resolve before step2 is issued (COMPLETED flip strictly last)
    expect(calls).toEqual(['barrier', 'step2', 'step3'])
  })

  it('HOLDS the op while offline and never starts the barrier (belt-and-suspenders)', async () => {
    const barrier = vi.fn(async () => {})
    const step2 = vi.fn(async () => okVoid)
    const out = await flushCompleteSession(op(), payload(), {
      db: stubDb,
      online: () => false,
      waitForPending: barrier,
      runStep2: step2,
      runStep3: async () => okApplied,
    })
    expect(out).toEqual({ status: 'held-offline' })
    expect(barrier).not.toHaveBeenCalled()
    expect(step2).not.toHaveBeenCalled()
  })

  it('Step 3 runs only AFTER Step 2 succeeds; a Step-2 failure skips Step 3', async () => {
    const step3 = vi.fn(async () => okApplied)
    const out = await flushCompleteSession(op(), payload(), {
      db: stubDb,
      online: () => true,
      waitForPending: async () => {},
      runStep2: async () => ({ ok: false, code: 'unavailable', message: 'x' }),
      runStep3: step3,
    })
    expect(out).toEqual({ status: 'retry', error: 'unavailable' })
    expect(step3).not.toHaveBeenCalled()
  })

  it('treats a Step-3 noop (summary already applied) as DONE, not an error (MEDIUM-3)', async () => {
    const out = await flushCompleteSession(op(), payload(), {
      db: stubDb,
      online: () => true,
      waitForPending: async () => {},
      runStep2: async () => okVoid,
      runStep3: async () => ({ ok: true, data: 'noop' }),
    })
    expect(out).toEqual({ status: 'done' })
  })
})

describe('syncManager — completed-session immutability guard (C.7/FR-39)', () => {
  it('DROPS the op when the server session is already COMPLETED', async () => {
    const step2 = vi.fn(async () => okVoid)
    const out = await flushCompleteSession(op(), payload('COMPLETED'), {
      db: stubDb,
      online: () => true,
      waitForPending: async () => {},
      runStep2: step2,
      runStep3: async () => okApplied,
    })
    expect(out.status).toBe('dropped')
    expect(step2).not.toHaveBeenCalled()
  })
})

describe('syncManager — completion write-set bound (C.7)', () => {
  it('documented worst case stays under the 500-write batch limit', () => {
    // 1 session + 8 exercises + 48 sets + 8 PRs + 8 history ≈ 73
    const input: CompleteSessionInput = {
      session: session(),
      exercises: Array.from({ length: 8 }, (_, i) => ({
        id: `ex${i}`,
        sessionId: 's1',
        exerciseId: `ex${i}`,
        order: i,
        targetPrescription: { targetSets: 6, targetRepMin: 8, targetRepMax: 10, restSeconds: 90 },
        sessionCompleted: false,
      })),
      sets: makeInput(48).sets,
      personalRecords: Array.from({ length: 8 }, (_, i) => ({
        id: `s1_ex${i}_e1rm`,
        uid: 'u1',
        exerciseId: `ex${i}`,
        type: 'e1rm' as const,
        valueKg: 100,
        sessionId: 's1',
        achievedAt: new Date(0),
      })),
      historyRollups: Array.from({ length: 8 }, (_, i) => ({
        exerciseId: `ex${i}`,
        uid: 'u1',
        lastPerformedAt: new Date(0),
        bestE1rmKg: 100,
        bestWeightKg: 80,
        recentSessions: [],
      })),
    }
    expect(completionWriteCount(input)).toBe(73)
    expect(completionWithinBatchLimit(input)).toBe(true)
  })

  it('rejects a session whose set count exceeds the 100-set guard', () => {
    const tooMany = makeInput(MAX_SETS_PER_SESSION + 1)
    expect(completionWithinBatchLimit(tooMany)).toBe(false)
  })
})
