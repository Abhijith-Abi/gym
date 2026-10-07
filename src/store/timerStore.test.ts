import { beforeEach, describe, expect, it } from 'vitest'
import { useTimerStore } from './timerStore'

/**
 * AC-9: the workout timer resumes with the correct elapsed value after a
 * simulated app close/reopen mid-session. The store keeps only absolute
 * anchors, so "reopen" is modeled by reading elapsedSeconds at a later `now`
 * without any interval having run in between.
 */
describe('timerStore workout clock (AC-9)', () => {
  beforeEach(() => {
    useTimerStore.getState().resetWorkoutClock()
  })

  it('recomputes elapsed from the absolute anchor after a simulated reopen', () => {
    const t0 = 1_000_000
    useTimerStore.getState().startWorkoutClock(t0)

    // No interval ran; the app was "closed". Reopen 125s later.
    const elapsed = useTimerStore.getState().elapsedSeconds(t0 + 125_000)
    expect(elapsed).toBe(125)
  })

  it('excludes paused time from elapsed and resumes correctly', () => {
    const t0 = 0
    const store = useTimerStore.getState()
    store.startWorkoutClock(t0)

    // Run 60s, then pause.
    store.pauseWorkoutClock(60_000)
    // While paused, elapsed is frozen at the pause instant.
    expect(useTimerStore.getState().elapsedSeconds(200_000)).toBe(60)

    // Resume after a 100s pause.
    useTimerStore.getState().resumeWorkoutClock(160_000)
    // 30s more of active time.
    expect(useTimerStore.getState().elapsedSeconds(190_000)).toBe(90)
  })

  it('rest countdown remaining is derived from the endsAt anchor', () => {
    const store = useTimerStore.getState()
    store.startRest(90, 0)
    expect(useTimerStore.getState().restRemainingSeconds(0)).toBe(90)
    expect(useTimerStore.getState().restRemainingSeconds(30_000)).toBe(60)
    // After it elapses, remaining clamps at 0.
    expect(useTimerStore.getState().restRemainingSeconds(200_000)).toBe(0)
  })

  it('interval machine advances WORK -> REST -> DONE via the store', () => {
    const store = useTimerStore.getState()
    store.initInterval({ workSeconds: 30, restSeconds: 30, totalRounds: 1 })
    store.startIntervalTimer(0)
    expect(useTimerStore.getState().interval?.phase).toBe('WORK')

    useTimerStore.getState().tickInterval(30_000)
    expect(useTimerStore.getState().interval?.phase).toBe('REST')

    useTimerStore.getState().tickInterval(60_000)
    expect(useTimerStore.getState().interval?.phase).toBe('DONE')
  })
})
