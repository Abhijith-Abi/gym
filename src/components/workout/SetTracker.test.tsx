import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { SEED_PLAN_DAYS } from '@/data/workoutPlan'
import { useProgressStore } from '@/store/progressStore'
import { useSessionStore } from '@/store/sessionStore'
import { useTimerStore } from '@/store/timerStore'
import { SetTracker } from './SetTracker'

/**
 * AC: the quick-log flow logs a set in a few interactions, and a logged set
 * that beats history flags a PR + queues the celebration.
 */
function startMonday() {
  useSessionStore.getState().clear()
  useSessionStore.getState().start({
    uid: 'u1',
    planId: 'p1',
    day: SEED_PLAN_DAYS.mon,
    deviceId: 'dev',
    now: 0,
  })
}

function firstExercise() {
  const ex = useSessionStore.getState().session?.exercises[0]
  if (!ex) throw new Error('no exercise')
  return ex
}

describe('SetTracker quick-log flow', () => {
  beforeEach(() => {
    useProgressStore.getState().clear()
    useTimerStore.getState().resetWorkoutClock()
    startMonday()
  })

  afterEach(() => {
    cleanup()
  })

  it('adds a set and logs it in a couple of taps', () => {
    const ex = firstExercise()
    render(
      <SetTracker
        exercise={ex}
        unit="kg"
        rpeMode="RPE"
        smartRestEnabled
        autoStartRest
      />,
    )

    // Tap "Add set" → one set row appears.
    act(() => {
      fireEvent.click(screen.getByRole('button', { name: /add set/i }))
    })
    const refreshed = () =>
      useSessionStore
        .getState()
        .session!.exercises.find((e) => e.exerciseSessionId === ex.exerciseSessionId)!
    expect(refreshed().sets).toHaveLength(1)

    // Fill a weight+reps, then tap the log (check) button.
    const weight = screen.getByLabelText(/weight in kg/i)
    const reps = screen.getByLabelText(/reps/i)
    act(() => {
      fireEvent.change(weight, { target: { value: '100' } })
      fireEvent.change(reps, { target: { value: '8' } })
    })
    act(() => {
      fireEvent.click(screen.getByRole('button', { name: /^log set$/i }))
    })

    const logged = refreshed().sets[0]
    expect(logged.isCompleted).toBe(true)
    expect(logged.weightKg).toBe(100)
    expect(logged.actualReps).toBe(8)
  })

  it('flags a PR and queues the celebration when a set beats history', () => {
    const ex = firstExercise()
    // Seed a modest prior best so 100kg x 8 beats it.
    useProgressStore.getState().setHistory(ex.exerciseId, {
      exerciseId: ex.exerciseId,
      uid: 'u1',
      lastPerformedAt: new Date('2024-01-01'),
      bestWeightKg: 60,
      bestE1rmKg: 72,
      bestRepsAtWeight: 8,
      recentSessions: [],
    })

    render(
      <SetTracker
        exercise={ex}
        unit="kg"
        rpeMode="RPE"
        smartRestEnabled
        autoStartRest
      />,
    )
    act(() => {
      fireEvent.click(screen.getByRole('button', { name: /add set/i }))
    })
    act(() => {
      fireEvent.change(screen.getByLabelText(/weight in kg/i), {
        target: { value: '100' },
      })
      fireEvent.change(screen.getByLabelText(/reps/i), { target: { value: '8' } })
    })
    act(() => {
      fireEvent.click(screen.getByRole('button', { name: /^log set$/i }))
    })

    expect(useProgressStore.getState().pendingCelebration.length).toBeGreaterThan(0)
    const logged = useSessionStore
      .getState()
      .session!.exercises.find((e) => e.exerciseSessionId === ex.exerciseSessionId)!
      .sets[0]
    expect(logged.isPr?.weight).toBe(true)
  })
})
