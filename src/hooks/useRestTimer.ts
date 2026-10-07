'use client'

import { useEffect, useState } from 'react'
import { smartRestSeconds } from '@/lib/progression'
import { useTimerStore } from '@/store/timerStore'
import type { RpeMode } from '@/types'

/** Preset rest durations (seconds) offered as one-tap overrides (C.8a). */
export const REST_PRESETS = [30, 60, 90, 120, 180] as const

/** Fallback base rest when a prescription omits restSeconds (C.8a). */
export const DEFAULT_REST_SECONDS = 30

export interface SmartRestArgs {
  /** base rest from the PlanEntry/ExerciseSet; preset fallback 90s. */
  prescriptionRestSeconds?: number
  smartRestEnabled: boolean
  rpeMode: RpeMode
  lastSet: { rpe?: number; rir?: number; isWarmup: boolean }
}

/**
 * Compute the rest duration for a just-completed set (C.8a smart-rest rule).
 * Pure wrapper over smartRestSeconds; warmups cap at 45s, hard sets add 30s.
 */
export function computeRestSeconds(args: SmartRestArgs): number {
  return smartRestSeconds({
    baseRestSeconds: args.prescriptionRestSeconds ?? DEFAULT_REST_SECONDS,
    smartRestEnabled: args.smartRestEnabled,
    rpeMode: args.rpeMode,
    lastSet: args.lastSet,
  })
}

/**
 * Rest-countdown tick. Remaining time is recomputed from the absolute
 * `rest.endsAtMs` anchor in timerStore; this hook only drives the visible tick
 * and exposes start/stop + preset controls. Background-safe (C.8a).
 */
export function useRestTimer(): {
  remainingSeconds: number
  isRunning: boolean
  isPaused: boolean
  durationS: number
  preset: number
  start: (durationS: number) => void
  startWithPreset: (preset: number) => void
  pause: () => void
  resume: () => void
  stop: () => void
  setPreset: (preset: number) => void
} {
  const restRemainingSeconds = useTimerStore((s) => s.restRemainingSeconds)
  const rest = useTimerStore((s) => s.rest)
  const startRest = useTimerStore((s) => s.startRest)
  const pauseRest = useTimerStore((s) => s.pauseRest)
  const resumeRest = useTimerStore((s) => s.resumeRest)
  const stopRest = useTimerStore((s) => s.stopRest)
  const setRestPreset = useTimerStore((s) => s.setRestPreset)
  const [, forceTick] = useState(0)

  useEffect(() => {
    if (!rest.isRunning || rest.isPaused) return
    const id = window.setInterval(() => forceTick((n) => n + 1), 250)
    return () => window.clearInterval(id)
  }, [rest.isRunning, rest.isPaused])

  const remaining = restRemainingSeconds()

  // Auto-stop once the countdown reaches zero so stale "running" state clears.
  useEffect(() => {
    if (rest.isRunning && !rest.isPaused && remaining <= 0 && rest.endsAtMs !== undefined) {
      stopRest()
    }
  }, [rest.isRunning, rest.isPaused, rest.endsAtMs, remaining, stopRest])

  return {
    remainingSeconds: remaining,
    isRunning: rest.isRunning,
    isPaused: rest.isPaused ?? false,
    durationS: rest.durationS,
    preset: rest.preset,
    start: (durationS) => startRest(durationS),
    startWithPreset: (preset) => startRest(preset),
    pause: () => pauseRest(),
    resume: () => resumeRest(),
    stop: stopRest,
    setPreset: setRestPreset,
  }
}
