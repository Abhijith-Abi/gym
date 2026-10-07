'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Timer, X, Plus, Minus, FastForward, Sparkles, Pause, Play } from 'lucide-react'
import { REST_PRESETS, useRestTimer } from '@/hooks/useRestTimer'
import { formatDuration } from '@/hooks/useWorkoutTimer'
import { ProgressRing } from './ProgressRing'
import { CountdownOverlay } from './CountdownOverlay'
import { getContextMotivation } from '@/lib/motivation'
import { useWorkoutSounds } from '@/hooks/useWorkoutSounds'
import { triggerHaptic } from '@/hooks/useHaptics'
import { cn } from '@/lib/utils'

/**
 * Rest Timer & Countdown Experience (C.8a).
 * Features circular progress ring, glowing neon theme, +15s / -15s quick adjustments,
 * pause/play control, motivational messages, and 10s countdown experience.
 */
export function RestTimer() {
  const {
    remainingSeconds,
    isRunning,
    isPaused,
    durationS,
    start,
    startWithPreset,
    pause,
    resume,
    stop,
  } = useRestTimer()
  const { playSound } = useWorkoutSounds()
  const [motivationText, setMotivationText] = useState('')

  useEffect(() => {
    if (isRunning && !isPaused) {
      setMotivationText(getContextMotivation({ isRestFinished: false }))
    }
  }, [isRunning, isPaused])

  if (!isRunning) return null

  const progress = durationS > 0 ? (durationS - remainingSeconds) / durationS : 0

  const handleAdjustTime = (deltaSeconds: number) => {
    triggerHaptic('light')
    playSound('button-click')
    const newRemaining = Math.max(5, remainingSeconds + deltaSeconds)
    start(newRemaining)
  }

  const handleTogglePause = () => {
    triggerHaptic('light')
    playSound('button-click')
    if (isPaused) {
      resume()
    } else {
      pause()
    }
  }

  const handleSkip = () => {
    triggerHaptic('medium')
    playSound('button-click')
    stop()
  }

  return (
    <>
      <CountdownOverlay remainingSeconds={remainingSeconds} isRunning={isRunning && !isPaused} />

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card p-5 shadow-lg"
        >
          {/* Top header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                <Timer className={cn('size-4', !isPaused && 'animate-pulse')} aria-hidden="true" />
                Rest Interval
              </span>
              {isPaused && (
                <span className="rounded-md bg-warning/20 px-1.5 py-0.5 text-[10px] font-bold uppercase text-warning">
                  Paused
                </span>
              )}
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleTogglePause}
                aria-label={isPaused ? 'Resume rest timer' : 'Pause rest timer'}
                className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground active:scale-95"
              >
                {isPaused ? <Play className="size-4 fill-primary text-primary" /> : <Pause className="size-4" />}
              </button>
              <button
                type="button"
                onClick={handleSkip}
                aria-label="Skip rest"
                className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground active:scale-95"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>

          {/* Center Circular Progress Ring & Numbers */}
          <div className="my-3 flex flex-col items-center justify-center">
            <ProgressRing
              progress={progress}
              size={170}
              strokeWidth={8}
              className="my-1"
            >
              <div className="flex flex-col items-center">
                <span
                  className={cn(
                    'font-mono text-4xl font-extrabold tracking-tight tabular-nums',
                    isPaused ? 'text-warning' : 'text-foreground',
                  )}
                  role="timer"
                  aria-label="Rest time remaining"
                >
                  {formatDuration(remainingSeconds)}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  {isPaused ? 'Paused' : 'Remaining'}
                </span>
              </div>
            </ProgressRing>
          </div>

          {/* Motivational Encouragement */}
          {motivationText && (
            <div className="mb-4 flex items-center justify-center gap-1.5 text-center text-xs font-medium text-muted-foreground">
              <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
              <span>{motivationText}</span>
            </div>
          )}

          {/* Time adjustment controls (-15s, Pause/Resume, Skip, +15s) */}
          <div className="grid grid-cols-4 gap-2">
            <button
              type="button"
              onClick={() => handleAdjustTime(-15)}
              aria-label="Subtract 15 seconds"
              className="flex min-h-[44px] items-center justify-center gap-1 rounded-xl border border-border bg-secondary/60 px-2 py-2 text-xs font-semibold text-foreground transition-all hover:bg-secondary active:scale-95"
            >
              <Minus className="size-3.5" />
              15s
            </button>

            <button
              type="button"
              onClick={handleTogglePause}
              aria-label={isPaused ? 'Resume rest' : 'Pause rest'}
              className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl border border-border bg-secondary/80 px-2 py-2 text-xs font-semibold text-foreground transition-all hover:bg-secondary active:scale-95"
            >
              {isPaused ? (
                <>
                  <Play className="size-3.5 fill-primary text-primary" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause className="size-3.5 text-muted-foreground" />
                  <span>Pause</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleSkip}
              aria-label="Skip rest"
              className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl border border-primary/40 bg-primary/10 px-2 py-2 text-xs font-bold text-primary transition-all hover:bg-primary/20 active:scale-95"
            >
              <FastForward className="size-3.5" />
              <span>Skip</span>
            </button>

            <button
              type="button"
              onClick={() => handleAdjustTime(15)}
              aria-label="Add 15 seconds"
              className="flex min-h-[44px] items-center justify-center gap-1 rounded-xl border border-border bg-secondary/60 px-2 py-2 text-xs font-semibold text-foreground transition-all hover:bg-secondary active:scale-95"
            >
              <Plus className="size-3.5" />
              15s
            </button>
          </div>

          {/* Quick preset chips */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
            {REST_PRESETS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => {
                  triggerHaptic('light')
                  playSound('button-click')
                  startWithPreset(p)
                }}
                className={cn(
                  'min-h-[36px] rounded-lg border px-3 py-1.5 text-xs font-medium transition-all active:scale-95',
                  durationS === p
                    ? 'border-primary bg-primary text-primary-foreground font-semibold'
                    : 'border-border bg-card-elevated text-muted-foreground hover:bg-secondary hover:text-foreground',
                )}
              >
                {p}s
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Floating Quick-Rest Bar for Mobile when scrolling */}
      <div className="fixed bottom-22 left-4 right-4 z-30 mx-auto max-w-lg md:hidden">
        <div className="flex items-center justify-between gap-2 rounded-2xl border border-primary/50 bg-card/95 p-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary/20 text-primary shadow-[0_0_10px_rgba(34,197,94,0.3)]">
              <Timer className={cn('size-4', !isPaused && 'animate-pulse')} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                {isPaused ? 'Rest Paused' : 'Resting'}
              </span>
              <span className="font-mono text-base font-black tracking-tight text-foreground tabular-nums">
                {formatDuration(remainingSeconds)}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => handleAdjustTime(15)}
              aria-label="Add 15 seconds"
              className="flex size-9 items-center justify-center rounded-xl border border-border bg-secondary/80 text-xs font-bold text-foreground active:scale-95"
            >
              +15s
            </button>
            <button
              type="button"
              onClick={handleTogglePause}
              aria-label={isPaused ? 'Resume rest' : 'Pause rest'}
              className="flex size-9 items-center justify-center rounded-xl border border-border bg-secondary/80 text-foreground active:scale-95"
            >
              {isPaused ? <Play className="size-3.5 fill-primary text-primary" /> : <Pause className="size-3.5" />}
            </button>
            <button
              type="button"
              onClick={handleSkip}
              aria-label="Skip rest interval"
              className="flex min-h-[36px] items-center gap-1 rounded-xl bg-primary px-3 text-xs font-bold text-primary-foreground shadow-[0_0_15px_rgba(34,197,94,0.4)] active:scale-95"
            >
              <FastForward className="size-3.5" />
              Skip
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
