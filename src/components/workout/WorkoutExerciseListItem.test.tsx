import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { WorkoutExerciseListItem } from './WorkoutExerciseListItem'
import { useSessionStore, type ActiveExercise } from '@/store/sessionStore'
import { SEED_PLAN_DAYS } from '@/data/workoutPlan'

vi.mock('@/hooks/useWorkoutSounds', () => ({
  useWorkoutSounds: () => ({
    playSound: vi.fn(),
    speak: vi.fn(),
  }),
}))

vi.mock('@/hooks/useHaptics', () => ({
  triggerHaptic: vi.fn(),
}))

describe('WorkoutExerciseListItem', () => {
  beforeEach(() => {
    useSessionStore.getState().clear()
    useSessionStore.getState().start({
      uid: 'u1',
      planId: 'p1',
      day: SEED_PLAN_DAYS.mon,
      deviceId: 'dev',
      now: Date.now(),
    })
  })

  afterEach(() => {
    cleanup()
  })

  it('renders exercise information and marks completed with one tap', () => {
    const session = useSessionStore.getState().session!
    const exercise: ActiveExercise = session.exercises[0]

    render(<WorkoutExerciseListItem exercise={exercise} index={0} />)

    const completeBtn = screen.getByRole('button', { name: /mark exercise complete/i })
    expect(completeBtn).toBeDefined()

    // Tap to complete exercise
    fireEvent.click(completeBtn)

    const updated = useSessionStore
      .getState()
      .session!.exercises.find((e) => e.exerciseSessionId === exercise.exerciseSessionId)

    expect(updated?.sets.length).toBeGreaterThan(0)
    expect(updated?.sets.every((s) => s.isCompleted)).toBe(true)
  })

  it('allows expanding demo guide', () => {
    const session = useSessionStore.getState().session!
    const exercise: ActiveExercise = session.exercises[0]

    render(<WorkoutExerciseListItem exercise={exercise} index={0} />)

    const expandBtn = screen.getByRole('button', { name: /view form & demo/i })
    fireEvent.click(expandBtn)

    expect(screen.getByText(/close video/i)).toBeDefined()
  })
})
