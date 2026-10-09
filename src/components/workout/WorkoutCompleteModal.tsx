'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Trophy, Clock, Dumbbell, Flame, CheckCircle2 } from 'lucide-react'
import { toDisplay } from '@/lib/units'
import { useWorkoutSounds } from '@/hooks/useWorkoutSounds'
import { triggerHaptic } from '@/hooks/useHaptics'
import { getContextMotivation } from '@/lib/motivation'
import type { Unit } from '@/types'

interface WorkoutCompleteModalProps {
  isOpen: boolean
  workoutName: string
  durationSeconds: number
  totalVolumeKg: number
  completedSets: number
  prCount: number
  unit: Unit
  onConfirmFinish: () => void
}

/**
 * Celebration modal presented upon completing a workout session (FR-12, FR-36).
 * Shows key summary stats with animated counters, triumph sounds, haptic pulses,
 * and confetti bursts.
 */
export function WorkoutCompleteModal({
  isOpen,
  workoutName,
  durationSeconds,
  totalVolumeKg,
  completedSets,
  prCount,
  unit,
  onConfirmFinish,
}: WorkoutCompleteModalProps) {
  const { playSound, speak } = useWorkoutSounds()
  const hasTriggeredRef = useRef(false)

  const minutes = Math.floor(durationSeconds / 60)
  const caloriesBurned = Math.round((durationSeconds / 60) * 7.5) // ~7.5 kcal/min estimation
  const motivationMessage = getContextMotivation({ isWorkoutComplete: true })

  useEffect(() => {
    if (!isOpen || hasTriggeredRef.current) return
    hasTriggeredRef.current = true

    playSound('workout-complete')
    triggerHaptic('complete')
    speak('Workout complete! Great job!')

    // Confetti celebration burst
    const count = 200
    const defaults = { origin: { y: 0.6 } }

    const fire = (particleRatio: number, opts: confetti.Options) => {
      try {
        void confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
        })
      } catch {
        // Confetti failure is safely ignored
      }
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#22c55e', '#10b981', '#06b6d4'],
    })
    fire(0.2, {
      spread: 60,
      colors: ['#22c55e', '#ffffff', '#f59e0b'],
    })
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    })
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    })
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    })
  }, [isOpen, playSound, speak])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Workout Complete Celebration"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 260 }}
          className="relative flex w-full max-w-md flex-col items-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 text-center shadow-2xl"
        >
          {/* Glowing Header Icon */}
          <div className="relative mb-3 flex size-20 items-center justify-center rounded-full bg-primary/20 text-primary shadow-[0_0_35px_rgba(255,107,53,0.5)]">
            <Trophy className="size-10 text-primary" aria-hidden="true" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Victory Achieved
          </span>
          <h2 className="mt-1 text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            WORKOUT COMPLETE!
          </h2>
          <p className="mt-1 text-sm font-semibold text-muted-foreground">
            {workoutName}
          </p>

          <p className="mt-2 text-xs italic text-primary">
            {motivationMessage}
          </p>

          {/* Stats Summary Grid */}
          <div className="mt-6 grid w-full grid-cols-2 gap-3">
            <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-3.5">
              <Clock className="size-5 text-primary" />
              <span className="mt-1 font-mono text-xl font-bold text-foreground">
                {minutes} <span className="text-xs font-normal text-muted-foreground">min</span>
              </span>
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Duration
              </span>
            </div>

            <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-3.5">
              <Dumbbell className="size-5 text-accent" />
              <span className="mt-1 font-mono text-xl font-bold text-foreground">
                {toDisplay(totalVolumeKg, unit)}{' '}
                <span className="text-xs font-normal text-muted-foreground">{unit}</span>
              </span>
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Total Volume
              </span>
            </div>

            <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-3.5">
              <CheckCircle2 className="size-5 text-primary" />
              <span className="mt-1 font-mono text-xl font-bold text-foreground">
                {completedSets}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Completed Sets
              </span>
            </div>

            <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-3.5">
              <Flame className="size-5 text-warning" />
              <span className="mt-1 font-mono text-xl font-bold text-foreground">
                {caloriesBurned} <span className="text-xs font-normal text-muted-foreground">kcal</span>
              </span>
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Est. Burned
              </span>
            </div>
          </div>

          {prCount > 0 && (
            <div className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-warning/40 bg-warning/10 py-2 text-xs font-bold text-warning">
              <Trophy className="size-4" />
              <span>{prCount} New Personal Record{prCount > 1 ? 's' : ''} Set!</span>
            </div>
          )}

          {/* Action Button */}
          <button
            type="button"
            onClick={() => {
              triggerHaptic('tap')
              playSound('button-click')
              onConfirmFinish()
            }}
            className="mt-6 flex min-h-[52px] w-full items-center justify-center rounded-2xl bg-primary text-base font-bold text-primary-foreground shadow-[0_0_25px_rgba(255,107,53,0.4)] transition-all hover:bg-primary/90 active:scale-95"
          >
            Save &amp; View Summary
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
