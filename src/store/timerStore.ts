import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { safeJSONStorage } from './safeStorage'
import {
  createIntervalState,
  pauseInterval,
  resumeInterval,
  skipInterval,
  startInterval,
  tick as tickInterval,
  type IntervalConfig,
  type IntervalState,
} from '@/lib/intervalTimer'

/**
 * Persisted timer anchors (design C.5 / C.8a, FR-18, AC-9). ALL timers store
 * absolute epoch anchors in localStorage via `persist`; elapsed/remaining are
 * always recomputed as `now - anchor` so closing/reopening/backgrounding the
 * app never drifts the value. A rAF/interval (in the hooks) only drives the
 * visible tick — it is NOT the source of truth.
 *
 * Three independent sub-timers:
 *  - the workout clock (workoutStartedAtMs + pausedAccumMs + isPaused),
 *  - the inter-set rest countdown (rest.endsAtMs),
 *  - the interval/HIIT state machine (interval).
 */

interface RestState {
  endsAtMs?: number
  durationS: number
  preset: number
  isRunning: boolean
  isPaused?: boolean
  remainingPausedS?: number
}

interface TimerStoreState {
  // ---- workout clock ------------------------------------------------
  workoutStartedAtMs?: number
  pausedAccumMs: number
  /** epoch ms the current pause began; undefined while running. */
  pausedAtMs?: number
  isPaused: boolean

  // ---- rest countdown ----------------------------------------------
  rest: RestState

  // ---- interval / HIIT machine -------------------------------------
  interval: IntervalState | null

  // workout clock actions
  startWorkoutClock: (now?: number) => void
  pauseWorkoutClock: (now?: number) => void
  resumeWorkoutClock: (now?: number) => void
  resetWorkoutClock: () => void
  /** Elapsed workout seconds (background-safe, recomputed). */
  elapsedSeconds: (now?: number) => number

  // rest actions
  startRest: (durationS: number, now?: number) => void
  setRestPreset: (preset: number) => void
  pauseRest: (now?: number) => void
  resumeRest: (now?: number) => void
  stopRest: () => void
  restRemainingSeconds: (now?: number) => number

  // interval actions
  initInterval: (config: IntervalConfig) => void
  startIntervalTimer: (now?: number) => void
  tickInterval: (now?: number) => void
  pauseIntervalTimer: (now?: number) => void
  resumeIntervalTimer: (now?: number) => void
  skipIntervalPhase: (now?: number) => void
  clearInterval: () => void
}

function nowMs(now?: number): number {
  return now ?? Date.now()
}

export const useTimerStore = create<TimerStoreState>()(
  persist(
    (set, get) => ({
      workoutStartedAtMs: undefined,
      pausedAccumMs: 0,
      pausedAtMs: undefined,
      isPaused: false,
      rest: { durationS: 0, preset: 30, isRunning: false, isPaused: false },
      interval: null,

      startWorkoutClock: (now) =>
        set({
          workoutStartedAtMs: nowMs(now),
          pausedAccumMs: 0,
          pausedAtMs: undefined,
          isPaused: false,
        }),

      pauseWorkoutClock: (now) => {
        const s = get()
        if (s.isPaused || s.workoutStartedAtMs === undefined) return
        set({ isPaused: true, pausedAtMs: nowMs(now) })
      },

      resumeWorkoutClock: (now) => {
        const s = get()
        if (!s.isPaused || s.pausedAtMs === undefined) return
        const pausedFor = nowMs(now) - s.pausedAtMs
        set({
          isPaused: false,
          pausedAtMs: undefined,
          pausedAccumMs: s.pausedAccumMs + Math.max(0, pausedFor),
        })
      },

      resetWorkoutClock: () =>
        set({
          workoutStartedAtMs: undefined,
          pausedAccumMs: 0,
          pausedAtMs: undefined,
          isPaused: false,
          rest: { durationS: 0, preset: get().rest.preset, isRunning: false, isPaused: false },
          interval: null,
        }),

      elapsedSeconds: (now) => {
        const s = get()
        if (s.workoutStartedAtMs === undefined) return 0
        const current = nowMs(now)
        // While paused, freeze at the pause instant; otherwise use `now`.
        const upTo = s.isPaused && s.pausedAtMs !== undefined ? s.pausedAtMs : current
        const raw = upTo - s.workoutStartedAtMs - s.pausedAccumMs
        return Math.max(0, Math.floor(raw / 1000))
      },

      startRest: (durationS, now) =>
        set((s) => ({
          rest: {
            ...s.rest,
            durationS,
            endsAtMs: nowMs(now) + durationS * 1000,
            isRunning: true,
            isPaused: false,
            remainingPausedS: undefined,
          },
        })),

      setRestPreset: (preset) =>
        set((s) => ({ rest: { ...s.rest, preset } })),

      pauseRest: (now) => {
        const s = get()
        if (!s.rest.isRunning || s.rest.isPaused || s.rest.endsAtMs === undefined) return
        const current = nowMs(now)
        const remaining = Math.max(0, Math.ceil((s.rest.endsAtMs - current) / 1000))
        set({
          rest: {
            ...s.rest,
            isPaused: true,
            remainingPausedS: remaining,
            endsAtMs: undefined,
          },
        })
      },

      resumeRest: (now) => {
        const s = get()
        if (!s.rest.isRunning || !s.rest.isPaused || s.rest.remainingPausedS === undefined) return
        const current = nowMs(now)
        set({
          rest: {
            ...s.rest,
            isPaused: false,
            endsAtMs: current + s.rest.remainingPausedS * 1000,
            remainingPausedS: undefined,
          },
        })
      },

      stopRest: () =>
        set((s) => ({
          rest: {
            ...s.rest,
            endsAtMs: undefined,
            isRunning: false,
            isPaused: false,
            remainingPausedS: undefined,
          },
        })),

      restRemainingSeconds: (now) => {
        const { rest } = get()
        if (!rest.isRunning) return 0
        if (rest.isPaused) return rest.remainingPausedS ?? 0
        if (rest.endsAtMs === undefined) return 0
        return Math.max(0, Math.ceil((rest.endsAtMs - nowMs(now)) / 1000))
      },

      initInterval: (config) => set({ interval: createIntervalState(config) }),

      startIntervalTimer: (now) =>
        set((s) =>
          s.interval ? { interval: startInterval(s.interval, nowMs(now)) } : {},
        ),

      tickInterval: (now) =>
        set((s) =>
          s.interval ? { interval: tickInterval(s.interval, nowMs(now)) } : {},
        ),

      pauseIntervalTimer: (now) =>
        set((s) =>
          s.interval ? { interval: pauseInterval(s.interval, nowMs(now)) } : {},
        ),

      resumeIntervalTimer: (now) =>
        set((s) =>
          s.interval ? { interval: resumeInterval(s.interval, nowMs(now)) } : {},
        ),

      skipIntervalPhase: (now) =>
        set((s) =>
          s.interval ? { interval: skipInterval(s.interval, nowMs(now)) } : {},
        ),

      clearInterval: () => set({ interval: null }),
    }),
    {
      name: 'forgefit-timers',
      storage: safeJSONStorage(),
      // Only the absolute anchors + presets are durable (C.5). The interval
      // machine persists so a reopen mid-HIIT resolves to the correct phase.
      partialize: (s) => ({
        workoutStartedAtMs: s.workoutStartedAtMs,
        pausedAccumMs: s.pausedAccumMs,
        pausedAtMs: s.pausedAtMs,
        isPaused: s.isPaused,
        rest: s.rest,
        interval: s.interval,
      }),
    },
  ),
)
