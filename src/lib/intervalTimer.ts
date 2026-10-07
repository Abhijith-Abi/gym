/**
 * Pure interval / HIIT state machine (design C.8a, FR-7).
 *
 *   IDLE -> WORK(0) -> REST(0) -> WORK(1) -> REST(1) -> ... -> DONE
 *
 * Every phase carries an absolute `endsAtMs` epoch anchor so the timer is
 * background-safe: remaining time is always recomputed as `endsAtMs - now`, and
 * a reopen after backgrounding re-derives the correct phase (resolving to DONE
 * if the whole interval elapsed). Pause stores `remainingMs` and clears
 * `endsAtMs`; resume re-derives `endsAtMs = now + remainingMs`. This module is
 * pure — it never touches the DOM, timers, or Firestore.
 */

export type IntervalPhase = 'IDLE' | 'WORK' | 'REST' | 'DONE'

export interface IntervalConfig {
  workSeconds: number
  restSeconds: number
  totalRounds: number
}

export interface IntervalState {
  phase: IntervalPhase
  /** 0-based current round index (meaningful in WORK/REST). */
  round: number
  /** absolute epoch anchor; undefined when paused or in IDLE/DONE. */
  endsAtMs?: number
  /** frozen remaining ms while paused; undefined when running. */
  remainingMs?: number
  config: IntervalConfig
}

export function createIntervalState(config: IntervalConfig): IntervalState {
  return { phase: 'IDLE', round: 0, config }
}

/** Begin the first WORK round, anchored at `now`. */
export function startInterval(state: IntervalState, now: number): IntervalState {
  if (state.config.totalRounds <= 0) {
    return { ...state, phase: 'DONE', round: 0, endsAtMs: undefined, remainingMs: undefined }
  }
  return {
    ...state,
    phase: 'WORK',
    round: 0,
    endsAtMs: now + state.config.workSeconds * 1000,
    remainingMs: undefined,
  }
}

/** Remaining ms for the current phase (0 when elapsed/paused-at-zero/terminal). */
export function remainingMs(state: IntervalState, now: number): number {
  if (state.remainingMs !== undefined) return Math.max(0, state.remainingMs)
  if (state.endsAtMs === undefined) return 0
  return Math.max(0, state.endsAtMs - now)
}

/**
 * Advance exactly one phase boundary (WORK->REST, REST->next WORK or DONE).
 * No-op in IDLE/DONE. Used by `tick` and by an explicit `skip`.
 */
function advancePhase(state: IntervalState, now: number): IntervalState {
  const { workSeconds, restSeconds, totalRounds } = state.config
  if (state.phase === 'WORK') {
    return {
      ...state,
      phase: 'REST',
      endsAtMs: now + restSeconds * 1000,
      remainingMs: undefined,
    }
  }
  if (state.phase === 'REST') {
    const next = state.round + 1
    if (next >= totalRounds) {
      return { ...state, phase: 'DONE', endsAtMs: undefined, remainingMs: undefined }
    }
    return {
      ...state,
      phase: 'WORK',
      round: next,
      endsAtMs: now + workSeconds * 1000,
      remainingMs: undefined,
    }
  }
  return state
}

/**
 * Recompute state at the current wall clock. Auto-advances across as many phase
 * boundaries as have fully elapsed (so a long background gap resolves correctly,
 * landing on DONE if the whole interval passed). Returns the input unchanged
 * when paused, terminal, or still within the current phase.
 */
export function tick(state: IntervalState, now: number): IntervalState {
  if (state.phase === 'IDLE' || state.phase === 'DONE') return state
  if (state.remainingMs !== undefined) return state // paused

  let current = state
  // Guard the loop: each advance either moves time forward or reaches DONE.
  while (
    current.phase !== 'DONE' &&
    current.endsAtMs !== undefined &&
    now >= current.endsAtMs
  ) {
    const anchor = current.endsAtMs
    const advanced = advancePhase(current, anchor)
    if (advanced === current) break
    current = advanced
  }
  return current
}

/** Freeze the countdown, storing remaining ms and clearing the anchor. */
export function pauseInterval(state: IntervalState, now: number): IntervalState {
  if (state.phase === 'IDLE' || state.phase === 'DONE') return state
  if (state.remainingMs !== undefined) return state
  return { ...state, remainingMs: remainingMs(state, now), endsAtMs: undefined }
}

/** Resume from a paused state, re-anchoring `endsAtMs = now + remainingMs`. */
export function resumeInterval(state: IntervalState, now: number): IntervalState {
  if (state.remainingMs === undefined) return state
  return { ...state, endsAtMs: now + state.remainingMs, remainingMs: undefined }
}

/** Jump immediately to the next phase boundary. */
export function skipInterval(state: IntervalState, now: number): IntervalState {
  if (state.phase === 'IDLE' || state.phase === 'DONE') return state
  // Normalize a paused state back to a running anchor at `now` first.
  const running =
    state.remainingMs !== undefined
      ? { ...state, endsAtMs: now, remainingMs: undefined }
      : state
  return advancePhase(running, now)
}

export function resetInterval(state: IntervalState): IntervalState {
  return createIntervalState(state.config)
}
