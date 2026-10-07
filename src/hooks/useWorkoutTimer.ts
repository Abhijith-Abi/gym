'use client'

import { useEffect, useState } from 'react'
import { useTimerStore } from '@/store/timerStore'

/**
 * Visible workout-clock tick (design C.5/C.8a, FR-18, AC-9). The elapsed value
 * is ALWAYS recomputed from the absolute anchors in timerStore; this hook only
 * drives a 1s re-render so the display updates. Closing/reopening the app reads
 * the persisted anchor and shows the correct elapsed time without a running
 * interval, so no drift accrues while backgrounded.
 */
export function useWorkoutTimer(): {
  elapsedSeconds: number
  isPaused: boolean
  isRunning: boolean
} {
  const elapsedSeconds = useTimerStore((s) => s.elapsedSeconds)
  const isPaused = useTimerStore((s) => s.isPaused)
  const startedAt = useTimerStore((s) => s.workoutStartedAtMs)
  const [, forceTick] = useState(0)

  const isRunning = startedAt !== undefined

  useEffect(() => {
    if (!isRunning || isPaused) return
    const id = window.setInterval(() => forceTick((n) => n + 1), 1000)
    return () => window.clearInterval(id)
  }, [isRunning, isPaused])

  return { elapsedSeconds: elapsedSeconds(), isPaused, isRunning }
}

/** Format seconds as H:MM:SS (or M:SS under an hour). */
export function formatDuration(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds))
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = s % 60
  const mm = String(m).padStart(h > 0 ? 2 : 1, '0')
  const ss = String(sec).padStart(2, '0')
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`
}
