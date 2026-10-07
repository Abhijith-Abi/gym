import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { SEED_PLAN_DAYS } from '@/data/workoutPlan'
import { useAuthStore } from '@/store/authStore'
import { useProgressStore } from '@/store/progressStore'
import { useSessionStore } from '@/store/sessionStore'
import { useSyncStore } from '@/store/syncStore'
import { useTimerStore } from '@/store/timerStore'
import { useWorkoutStore } from '@/store/workoutStore'
import type { CompleteSessionPayload } from '@/lib/sync/syncManager'
import type { SyncOperation } from '@/types'

/**
 * Completion call-site wiring (review findings AC-7 + FR-28). handleFinish must
 * route through the composite "complete session" op (Step 2 + Step 3) and pass
 * the detected PRs for persistence — not call Step 2 directly with an empty PR
 * list. These assertions lock both regressions.
 */

const push = vi.fn()
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push }),
}))

// The PR celebration is a next/dynamic ssr:false island; stub it out so the
// test renders without the async chunk.
vi.mock('@/components/pr/PRCelebration', () => ({
  PRCelebration: () => null,
}))

const runCompleteSession = vi.fn(
  async (_op: SyncOperation, _payload: CompleteSessionPayload) => ({
    ok: true as const,
    data: { status: 'done' as const },
  }),
)
const buildCompleteSessionOp = vi.fn(
  (sessionId: string, _payload: CompleteSessionPayload): SyncOperation => ({
    id: `complete-session:${sessionId}`,
    entity: 'completeSession',
    op: 'set',
    path: `users/u1/workoutSessions/${sessionId}`,
    payload: { summaryApplied: false },
    createdAtMs: 0,
    attempts: 0,
  }),
)
vi.mock('@/services/syncService', () => ({
  runCompleteSession: (op: SyncOperation, payload: CompleteSessionPayload) =>
    runCompleteSession(op, payload),
  buildCompleteSessionOp: (sessionId: string, payload: CompleteSessionPayload) =>
    buildCompleteSessionOp(sessionId, payload),
}))

// Session persistence helpers short-circuit under empty env in real life; here
// they must simply not throw. completeSession must NOT be called directly.
const completeSession = vi.fn(async () => ({ ok: true as const, data: undefined }))
vi.mock('@/services/sessionService', () => ({
  upsertSession: vi.fn(async () => ({ ok: true, data: undefined })),
  upsertExerciseSession: vi.fn(async () => ({ ok: true, data: undefined })),
  completeSession: () => completeSession(),
}))

vi.mock('@/services/progressService', () => ({
  getExerciseHistories: vi.fn(async () => ({ ok: true, data: [] })),
}))

import { ActiveWorkout } from './ActiveWorkout'

function seedAuth() {
  useAuthStore.setState({
    phase: 'ready',
    uid: 'u1',
    user: null,
    profile: {
      uid: 'u1',
      email: 'a@b.c',
      displayName: 'Tester',
      goal: 'muscle_gain',
      experience: 'intermediate',
      preferredUnit: 'kg',
      onboardingCompleted: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    initialized: true,
  })
}

function startMondayWithPr() {
  useSessionStore.getState().clear()
  useSessionStore.getState().start({
    uid: 'u1',
    planId: 'p1',
    day: SEED_PLAN_DAYS.mon,
    deviceId: 'dev',
    now: Date.UTC(2024, 5, 3), // Mon 2024-06-03
  })
  const store = useSessionStore.getState()
  const exercises = store.session!.exercises
  // Log one real completed set on the first exercise so there is volume + a PR.
  const first = exercises[0]
  // Seed a prior best this set will beat (queues a PR via SetTracker path is UI;
  // here we flag + queue directly to simulate the live celebration queue).
  store.addSet(first.exerciseSessionId)
  const setId = useSessionStore.getState().session!.exercises[0].sets[0].id
  store.updateSet(first.exerciseSessionId, setId, { weightKg: 100, actualReps: 8 })
  store.completeSet(first.exerciseSessionId, setId)

  useProgressStore.getState().queueCelebration([
    {
      id: `${useSessionStore.getState().session!.id}_${first.exerciseId}_weight`,
      uid: 'u1',
      exerciseId: first.exerciseId,
      type: 'weight',
      valueKg: 100,
      sessionId: useSessionStore.getState().session!.id,
      achievedAt: new Date('2024-06-03'),
    },
  ])

  // Jump to the last exercise so the "Finish workout" button renders.
  const lastIdx = exercises.length - 1
  useSessionStore.getState().setCurrentExercise(lastIdx)
}

describe('ActiveWorkout.handleFinish composite-op wiring', () => {
  beforeEach(() => {
    push.mockClear()
    runCompleteSession.mockClear()
    buildCompleteSessionOp.mockClear()
    completeSession.mockClear()
    useProgressStore.getState().clear()
    useTimerStore.getState().resetWorkoutClock()
    useSyncStore.setState({ queue: [], phase: 'idle', online: true })
    useWorkoutStore.setState({ plan: null, selectedDay: 'mon' })
    seedAuth()
    startMondayWithPr()
  })

  afterEach(() => {
    cleanup()
    useSessionStore.getState().clear()
  })

  it('routes completion through the composite op (never Step 2 directly) and persists detected PRs', async () => {
    render(<ActiveWorkout />)

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /finish workout/i }))
    })

    // Step 2 is NOT called directly — completion flows through the composite op.
    expect(completeSession).not.toHaveBeenCalled()
    expect(runCompleteSession).toHaveBeenCalledTimes(1)

    const payload = runCompleteSession.mock.calls[0][1]

    // AC-7: the detected PR is passed through for persistence (not []).
    expect(payload.completion.personalRecords).toHaveLength(1)
    expect(payload.completion.personalRecords[0].type).toBe('weight')

    // FR-28: a populated summary delta drives the weekly/monthly summary docs.
    expect(payload.summary.delta.workouts).toBe(1)
    expect(payload.summary.delta.prCount).toBe(1)
    expect(payload.summary.delta.totalVolumeKg).toBeGreaterThan(0)
    const muscleTotal = Object.values(payload.summary.delta.volumeByMuscle).reduce(
      (a, b) => a + b,
      0,
    )
    expect(muscleTotal).toBeGreaterThan(0)
    // Period keys derive from the completion time (now); assert their shape.
    expect(payload.summary.weekId).toMatch(/^\d{4}-W\d{2}$/)
    expect(payload.summary.monthId).toMatch(/^\d{4}-\d{2}$/)

    // The op is dequeued + marked synced on a 'done' outcome.
    expect(useSyncStore.getState().queue).toHaveLength(0)
    expect(push).toHaveBeenCalledWith('/dashboard')
  })
})
