'use client'

import { useEffect, useRef } from 'react'
import { Pause, Play, SkipForward } from 'lucide-react'
import { formatDuration } from '@/hooks/useWorkoutTimer'
import { remainingMs } from '@/lib/intervalTimer'
import { useTimerStore } from '@/store/timerStore'

/**
 * HIIT interval timer UI (FR-7, C.8a). Drives the pure state machine in
 * timerStore: an interval re-renders the countdown and ticks the machine so it
 * auto-advances WORK->REST->...->DONE. The machine's anchors are persisted, so
 * backgrounding/reopening resolves to the correct phase (or DONE).
 */
export function IntervalTimer({
  workSeconds,
  restSeconds,
  totalRounds,
  onRoundComplete,
}: {
  workSeconds: number
  restSeconds: number
  totalRounds: number
  /** fired once per completed WORK phase (logs a duration-based SetLog). */
  onRoundComplete?: (round: number) => void
}) {
  const interval = useTimerStore((s) => s.interval)
  const initInterval = useTimerStore((s) => s.initInterval)
  const startIntervalTimer = useTimerStore((s) => s.startIntervalTimer)
  const tickInterval = useTimerStore((s) => s.tickInterval)
  const pauseIntervalTimer = useTimerStore((s) => s.pauseIntervalTimer)
  const resumeIntervalTimer = useTimerStore((s) => s.resumeIntervalTimer)
  const skipIntervalPhase = useTimerStore((s) => s.skipIntervalPhase)

  // Initialize the machine for this exercise once.
  useEffect(() => {
    initInterval({ workSeconds, restSeconds, totalRounds })
  }, [initInterval, workSeconds, restSeconds, totalRounds])

  // Drive the visible tick + auto-advance.
  const running =
    interval !== null &&
    interval.phase !== 'IDLE' &&
    interval.phase !== 'DONE' &&
    interval.remainingMs === undefined
  useEffect(() => {
    if (!running) return
    const id = window.setInterval(() => tickInterval(), 200)
    return () => window.clearInterval(id)
  }, [running, tickInterval])

  // Log one duration-based round each time a WORK phase completes. A WORK phase
  // is "done" when the machine leaves WORK (into REST, or into DONE on the final
  // round). We track the previously-seen WORK round to fire exactly once.
  const lastLoggedRound = useRef(-1)
  useEffect(() => {
    if (!interval || !onRoundComplete) return
    const leftWork = interval.phase === 'REST' || interval.phase === 'DONE'
    if (!leftWork) return
    // The round that just finished: REST(r) follows WORK(r); DONE follows the
    // final WORK whose index is totalRounds-1.
    const finished = interval.phase === 'DONE' ? totalRounds - 1 : interval.round
    if (finished > lastLoggedRound.current) {
      lastLoggedRound.current = finished
      onRoundComplete(finished)
    }
  }, [interval, onRoundComplete, totalRounds])

  if (!interval) return null

  const remaining = Math.ceil(remainingMs(interval, Date.now()) / 1000)
  const isPaused = interval.remainingMs !== undefined
  const phaseLabel =
    interval.phase === 'IDLE'
      ? 'Ready'
      : interval.phase === 'DONE'
        ? 'Done'
        : `${interval.phase} · Round ${interval.round + 1}/${totalRounds}`

  return (
    <div className="rounded-lg border border-border p-4 text-center">
      <p className="text-sm font-medium text-muted-foreground">{phaseLabel}</p>
      {interval.phase !== 'IDLE' && interval.phase !== 'DONE' && (
        <p className="mt-1 font-mono text-4xl tabular-nums" role="timer">
          {formatDuration(remaining)}
        </p>
      )}
      <div className="mt-3 flex items-center justify-center gap-2">
        {interval.phase === 'IDLE' ? (
          <button
            type="button"
            onClick={() => startIntervalTimer()}
            className="flex items-center gap-1 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
          >
            <Play className="size-4" /> Start
          </button>
        ) : interval.phase === 'DONE' ? (
          <span className="text-sm text-primary">Interval complete</span>
        ) : (
          <>
            <button
              type="button"
              onClick={() => (isPaused ? resumeIntervalTimer() : pauseIntervalTimer())}
              aria-label={isPaused ? 'Resume interval' : 'Pause interval'}
              className="flex size-10 items-center justify-center rounded-md border border-border"
            >
              {isPaused ? <Play className="size-4" /> : <Pause className="size-4" />}
            </button>
            <button
              type="button"
              onClick={() => skipIntervalPhase()}
              aria-label="Skip phase"
              className="flex size-10 items-center justify-center rounded-md border border-border"
            >
              <SkipForward className="size-4" />
            </button>
          </>
        )}
      </div>
    </div>
  )
}
