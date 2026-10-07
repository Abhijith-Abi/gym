/** Rest-timer sub-state (absolute epoch anchoring, C.5/C.8a). */
export interface RestTimerState {
  endsAtMs?: number
  durationS: number
  preset: number
  isRunning: boolean
}

/**
 * TimerState — Zustand/persist, NOT Firestore (C.3).
 * Elapsed is always recomputed as now - startedAt - pausedAccum.
 */
export interface TimerState {
  workoutStartedAtMs?: number
  pausedAccumMs: number
  isPaused: boolean
  rest: RestTimerState
}
