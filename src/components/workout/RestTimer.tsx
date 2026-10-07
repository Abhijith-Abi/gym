'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Timer, X, Plus, Minus, FastForward, Sparkles } from 'lucide-react'
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
 * motivational messages, and 10s countdown experience.
 */
export function RestTimer() {
  const { remainingSeconds, isRunning, durationS, start, startWithPreset, stop } =
    useRestTimer()
  const { playSound } = useWorkoutSounds()
  const [motivationText, setMotivationText] = useState('')

  useEffect(() => {
    if (isRunning) {
      setMotivationText(getContextMotivation({ isRestFinished: false }))
    }
  }, [isRunning])

  if (!isRunning) return null

  const progress = durationS > 0 ? (durationS - remainingSeconds) / durationS : 0

  const handleAdjustTime = (deltaSeconds: number) => {
    triggerHaptic('light')
    playSound('button-click')
    const newRemaining = Math.max(5, remainingSeconds + deltaSeconds)
    start(newRemaining)
  }

  const handleSkip = () => {
    triggerHaptic('medium')
    playSound('button-click')
    stop()
  }

  return (
    <>
      <CountdownOverlay remainingSeconds={remainingSeconds} isRunning={isRunning} />

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card p-5 shadow-lg"
        >
          {/* Top header */}
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <Timer className="size-4 animate-pulse" aria-hidden="true" />
              Rest Interval
            </span>
            <button
              type="button"
              onClick={handleSkip}
              aria-label="Skip rest"
              className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X className="size-4" />
            </button>
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
                  className="font-mono text-4xl font-extrabold tracking-tight text-foreground tabular-nums"
                  role="timer"
                  aria-label="Rest time remaining"
                >
                  {formatDuration(remainingSeconds)}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  Remaining
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

          {/* Time adjustment controls (-15s, Skip, +15s) */}
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => handleAdjustTime(-15)}
              aria-label="Subtract 15 seconds"
              className="flex min-h-[44px] items-center gap-1 rounded-xl border border-border bg-secondary/60 px-3.5 py-2 text-xs font-semibold text-foreground transition-all hover:bg-secondary active:scale-95"
            >
              <Minus className="size-3.5" />
              15s
            </button>

            <button
              type="button"
              onClick={handleSkip}
              aria-label="Skip rest"
              className="flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-bold text-primary transition-all hover:bg-primary/20 active:scale-95"
            >
              <FastForward className="size-4" />
              Skip Rest
            </button>

            <button
              type="button"
              onClick={() => handleAdjustTime(15)}
              aria-label="Add 15 seconds"
              className="flex min-h-[44px] items-center gap-1 rounded-xl border border-border bg-secondary/60 px-3.5 py-2 text-xs font-semibold text-foreground transition-all hover:bg-secondary active:scale-95"
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
    </>
  )
}
