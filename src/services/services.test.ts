import { describe, expect, it } from 'vitest'
import { FIREBASE_NOT_CONFIGURED } from '@/types'
import { getCurrentUserId } from './authService'
import { listWorkoutPlans } from './workoutService'
import { listRecentSessions } from './sessionService'
import { listCustomExercises } from './exerciseService'
import { listPersonalRecords } from './progressService'
import { getWeeklySummary } from './analyticsService'
import { listBodyMeasurements } from './bodyService'
import { getRecoveryLog } from './recoveryService'
import { listGoals } from './goalService'
import { exportBackup } from './backupService'
import { buildCompleteSessionOp, runCompleteSession } from './syncService'
import { emptyMuscleVolume } from '@/lib/volume'
import type { WorkoutSession } from '@/types'

const stubSession: WorkoutSession = {
  id: 's1',
  uid: 'u1',
  dayId: 'mon',
  workoutName: 'Chest',
  status: 'IN_PROGRESS',
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

const stubPayload = {
  completion: {
    session: stubSession,
    exercises: [],
    sets: [],
    personalRecords: [],
    historyRollups: [],
  },
  summary: {
    uid: 'u1',
    sessionId: 's1',
    weekId: '2024-W01',
    monthId: '2024-01',
    delta: {
      workouts: 1,
      totalVolumeKg: 100,
      volumeByMuscle: emptyMuscleVolume(),
      prCount: 0,
    },
  },
}

/**
 * With empty NEXT_PUBLIC_FIREBASE_* env (the test default), every service must
 * short-circuit to firebase/not-configured without throwing (AC-1, C.2).
 */
describe('services short-circuit under absent Firebase config', () => {
  const calls: Array<[string, () => Promise<{ ok: boolean; code?: string }>]> = [
    ['authService', () => getCurrentUserId()],
    ['workoutService', () => listWorkoutPlans('u1')],
    ['sessionService', () => listRecentSessions('u1')],
    ['exerciseService', () => listCustomExercises('u1')],
    ['progressService', () => listPersonalRecords('u1')],
    ['analyticsService', () => getWeeklySummary('u1', '2024-W01')],
    ['bodyService', () => listBodyMeasurements('u1')],
    ['recoveryService', () => getRecoveryLog('u1', '2024-01-01')],
    ['goalService', () => listGoals('u1')],
    ['backupService', () => exportBackup('u1')],
    [
      'syncService',
      () =>
        runCompleteSession(
          buildCompleteSessionOp('s1', stubPayload),
          stubPayload,
        ),
    ],
  ]

  it.each(calls)('%s returns firebase/not-configured', async (_name, fn) => {
    const res = await fn()
    expect(res.ok).toBe(false)
    expect(res.code).toBe(FIREBASE_NOT_CONFIGURED)
  })
})
