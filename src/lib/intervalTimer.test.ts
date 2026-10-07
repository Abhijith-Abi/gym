import { describe, expect, it } from 'vitest'
import {
  createIntervalState,
  pauseInterval,
  remainingMs,
  resumeInterval,
  skipInterval,
  startInterval,
  tick,
} from './intervalTimer'

const CONFIG = { workSeconds: 30, restSeconds: 30, totalRounds: 2 }

describe('interval/HIIT state machine (C.8a)', () => {
  it('starts IDLE and transitions to WORK round 0 on start', () => {
    const s0 = createIntervalState(CONFIG)
    expect(s0.phase).toBe('IDLE')
    const s1 = startInterval(s0, 1000)
    expect(s1.phase).toBe('WORK')
    expect(s1.round).toBe(0)
    expect(s1.endsAtMs).toBe(1000 + 30_000)
  })

  it('auto-advances WORK -> REST -> WORK -> REST -> DONE across simulated time', () => {
    let s = startInterval(createIntervalState(CONFIG), 0)
    expect(s.phase).toBe('WORK')

    // still inside the WORK window
    s = tick(s, 29_000)
    expect(s.phase).toBe('WORK')

    // WORK(0) elapses -> REST(0)
    s = tick(s, 30_000)
    expect(s.phase).toBe('REST')
    expect(s.round).toBe(0)

    // REST(0) elapses -> WORK(1)
    s = tick(s, 60_000)
    expect(s.phase).toBe('WORK')
    expect(s.round).toBe(1)

    // WORK(1) -> REST(1)
    s = tick(s, 90_000)
    expect(s.phase).toBe('REST')
    expect(s.round).toBe(1)

    // REST(1) ends on the final round -> DONE
    s = tick(s, 120_000)
    expect(s.phase).toBe('DONE')
  })

  it('resolves straight to DONE if the whole interval elapsed while backgrounded', () => {
    let s = startInterval(createIntervalState(CONFIG), 0)
    // Reopen far in the future (all 2 rounds * (30+30)s = 120s have passed).
    s = tick(s, 10_000_000)
    expect(s.phase).toBe('DONE')
  })

  it('pause freezes remaining and resume re-anchors without drift', () => {
    let s = startInterval(createIntervalState(CONFIG), 0)
    s = pauseInterval(s, 10_000) // 20s remaining in WORK
    expect(s.endsAtMs).toBeUndefined()
    expect(remainingMs(s, 999_999)).toBe(20_000) // frozen regardless of clock

    s = resumeInterval(s, 100_000) // re-anchor at a later wall clock
    expect(s.endsAtMs).toBe(100_000 + 20_000)
    expect(remainingMs(s, 100_000)).toBe(20_000)
  })

  it('skip jumps to the next phase boundary', () => {
    let s = startInterval(createIntervalState(CONFIG), 0)
    s = skipInterval(s, 5_000)
    expect(s.phase).toBe('REST')
    expect(s.round).toBe(0)
  })

  it('an empty-round config starts DONE', () => {
    const s = startInterval(createIntervalState({ ...CONFIG, totalRounds: 0 }), 0)
    expect(s.phase).toBe('DONE')
  })
})
