'use client'

import { ChevronLeft, ChevronRight, Check, CheckCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSessionStore } from '@/store/sessionStore'
import { useExerciseStore } from '@/store/exerciseStore'
import { useWorkoutSounds } from '@/hooks/useWorkoutSounds'
import { triggerHaptic } from '@/hooks/useHaptics'

/**
 * Mobile-first sticky bottom controls:
 * - List mode: One-tap "Complete All" and "Finish Workout".
 * - Focus mode: prev/next exercise navigation + finish.
 * Includes safe area padding and large touch targets (>= 48px).
 */
export function StickyControls({
  onFinish,
  nextExerciseName,
  mode = 'list',
}: {
  onFinish: () => void
  nextExerciseName?: string
  mode?: 'list' | 'focus'
}) {
  const session = useSessionStore((s) => s.session)
  const setCurrent = useSessionStore((s) => s.setCurrentExercise)
  const completeAll = useSessionStore((s) => s.completeAllExercises)
  const completedCount = useSessionStore((s) => s.completedExerciseCount())
  const totalCount = useSessionStore((s) => s.totalExerciseCount())
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

  const handleCompleteAll = () => {
    triggerHaptic('success')
    playSound('set-complete')
    speak('All exercises completed! Ready to finish.')
    completeAll()
  }

  const handleFinish = () => {
    triggerHaptic('complete')
    onFinish()
  }

  if (mode === 'list') {
    const allDone = completedCount >= totalCount && totalCount > 0

    return (
      <div className="sticky bottom-[60px] md:bottom-0 z-30 flex items-center gap-2.5 sm:gap-3 border-t border-white/10 bg-[#121212]/95 px-3 py-2.5 sm:px-4 sm:py-3 backdrop-blur-2xl shadow-[0_-10px_35px_rgba(0,0,0,0.7)]">
        {!allDone && (
          <button
            type="button"
            onClick={handleCompleteAll}
            className="flex h-12 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-2xl border border-white/10 bg-white/5 px-3.5 sm:px-4 text-xs sm:text-sm font-bold text-[#D4D4D4] backdrop-blur-xl transition-all hover:bg-white/10 hover:text-white hover:border-white/20 active:scale-95"
          >
            <CheckCheck className="size-4 text-primary shrink-0" />
            <span>All Done</span>
          </button>
        )}

        <button
          type="button"
          onClick={handleFinish}
          className="flex h-12 min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-primary px-4 sm:px-5 text-sm sm:text-base font-black text-white shadow-[0_0_30px_rgba(255,107,53,0.45)] transition-all hover:bg-primary-hover active:scale-95"
        >
          <Check className="size-5 shrink-0 stroke-[3]" />
          <span>Finish Workout</span>
          <span className="shrink-0 rounded-full bg-black/25 border border-white/15 px-2 py-0.5 text-xs font-bold text-white">
            {completedCount}/{totalCount}
          </span>
        </button>
      </div>
    )
  }

  return (
    <div className="sticky bottom-[60px] md:bottom-0 z-30 flex items-center gap-2.5 sm:gap-3 border-t border-white/10 bg-[#121212]/95 px-3 py-2.5 sm:px-4 sm:py-3 backdrop-blur-2xl shadow-[0_-10px_35px_rgba(0,0,0,0.7)]">
      <Button
        variant="outline"
        size="icon"
        aria-label="Previous exercise"
        disabled={idx === 0}
        onClick={handlePrev}
        className="size-12 shrink-0 rounded-2xl border-white/10 bg-white/5 text-[#A8A8A8] hover:text-white hover:bg-white/10"
      >
        <ChevronLeft className="size-5" />
      </Button>

      {last ? (
        <button
          type="button"
          onClick={handleFinish}
          className="flex h-12 min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-primary px-5 text-sm sm:text-base font-black text-white shadow-[0_0_30px_rgba(255,107,53,0.45)] transition-all hover:bg-primary-hover active:scale-95"
        >
          <Check className="size-5 shrink-0 stroke-[3]" />
          <span>Finish Workout</span>
          <span className="shrink-0 rounded-full bg-black/25 border border-white/15 px-2 py-0.5 text-xs font-bold text-white">
            {completedCount}/{totalCount}
          </span>
        </button>
      ) : (
        <button
          type="button"
          onClick={handleNext}
          className="flex h-12 min-w-0 flex-1 items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white transition-all hover:bg-white/10 active:scale-95"
        >
          <span className="truncate">
            Next{nextExerciseName ? `: ${nextExerciseName}` : ''}
          </span>
          <ChevronRight className="size-5 text-primary shrink-0" />
        </button>
      )}
    </div>
  )
}
