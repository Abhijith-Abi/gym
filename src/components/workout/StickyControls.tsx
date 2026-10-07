'use client'

import { ChevronLeft, ChevronRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSessionStore } from '@/store/sessionStore'
import { useExerciseStore } from '@/store/exerciseStore'
import { useWorkoutSounds } from '@/hooks/useWorkoutSounds'
import { triggerHaptic } from '@/hooks/useHaptics'

/**
 * Mobile-first sticky bottom controls: prev/next exercise navigation + finish.
 * Includes safe area padding and large touch targets (>= 48px).
 */
export function StickyControls({
  onFinish,
  nextExerciseName,
}: {
  onFinish: () => void
  nextExerciseName?: string
}) {
  const session = useSessionStore((s) => s.session)
  const setCurrent = useSessionStore((s) => s.setCurrentExercise)
  const exerciseById = useExerciseStore((s) => s.byId)
  const { playSound, speak } = useWorkoutSounds()

  if (!session) return null

  const idx = session.currentExerciseIndex
  const last = idx >= session.exercises.length - 1

  const handlePrev = () => {
    triggerHaptic('light')
    playSound('button-click')
    const prevIdx = idx - 1
    setCurrent(prevIdx)
    const prevEx = session.exercises[prevIdx]
    if (prevEx) {
      const name = exerciseById(prevEx.exerciseId)?.name ?? prevEx.exerciseId
      speak(`Previous exercise: ${name}`)
    }
  }

  const handleNext = () => {
    triggerHaptic('light')
    playSound('button-click')
    const nextIdx = idx + 1
    setCurrent(nextIdx)
    const nextEx = session.exercises[nextIdx]
    if (nextEx) {
      const name = exerciseById(nextEx.exerciseId)?.name ?? nextEx.exerciseId
      speak(`Next exercise: ${name}. ${nextEx.prescription.targetSets} sets.`)
    }
  }

  const handleFinish = () => {
    triggerHaptic('success')
    onFinish()
  }

  return (
    <div className="sticky bottom-0 z-20 flex items-center gap-3 border-t border-border/80 bg-background/95 p-4 pb-safe backdrop-blur-md">
      <Button
        variant="outline"
        size="icon"
        aria-label="Previous exercise"
        disabled={idx === 0}
        onClick={handlePrev}
        className="size-12 rounded-2xl border-border bg-card-elevated"
      >
        <ChevronLeft className="size-5" />
      </Button>

      {last ? (
        <button
          type="button"
          onClick={handleFinish}
          className="flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-2xl bg-primary px-5 text-sm font-bold text-primary-foreground shadow-[0_0_20px_rgba(34,197,94,0.35)] transition-all hover:bg-primary/90 active:scale-95"
        >
          <Check className="size-5 stroke-[2.5]" />
          Finish Workout
        </button>
      ) : (
        <button
          type="button"
          onClick={handleNext}
          className="flex min-h-[48px] flex-1 items-center justify-between rounded-2xl border border-border bg-card-elevated px-4 text-sm font-semibold text-foreground transition-all hover:bg-secondary active:scale-95"
        >
          <span className="truncate">
            Next{nextExerciseName ? `: ${nextExerciseName}` : ''}
          </span>
          <ChevronRight className="size-5 text-primary" />
        </button>
      )}
    </div>
  )
}
