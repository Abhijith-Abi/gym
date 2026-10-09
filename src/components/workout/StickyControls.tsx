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
      <div className="sticky bottom-[60px] md:bottom-0 z-30 flex items-center gap-2 sm:gap-3 border-t border-[#2A302A] bg-[#111311]/95 p-3 sm:p-4 pb-3 backdrop-blur-md shadow-[0_-5px_20px_rgba(0,0,0,0.6)]">
        {!allDone && (
          <button
            type="button"
            onClick={handleCompleteAll}
            className="flex min-h-[46px] items-center gap-1.5 rounded-xl border border-[#2A302A] bg-[#202420] px-3 py-2 text-xs font-bold text-[#B4BAB4] transition-all hover:bg-[#2A302A] hover:text-white active:scale-95 sm:px-3.5 sm:text-sm"
          >
            <CheckCheck className="size-4 text-primary" />
            <span className="hidden sm:inline">Mark All Done</span>
            <span className="sm:hidden">All Done</span>
          </button>
        )}

        <button
          type="button"
          onClick={handleFinish}
          className="flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-black text-[#0A0A0A] shadow-[0_0_20px_rgba(182,255,59,0.35)] transition-all hover:bg-primary-hover active:scale-95 sm:px-5 sm:text-base"
        >
          <Check className="size-5 stroke-[3]" />
          <span>Finish Workout</span>
          <span className="rounded-full bg-[#0A0A0A]/20 px-2 py-0.5 text-xs font-black text-[#0A0A0A]">
            {completedCount}/{totalCount} Done
          </span>
        </button>
      </div>
    )
  }

  return (
    <div className="sticky bottom-[60px] md:bottom-0 z-30 flex items-center gap-2 sm:gap-3 border-t border-[#2A302A] bg-[#111311]/95 p-3 sm:p-4 pb-3 backdrop-blur-md shadow-[0_-5px_20px_rgba(0,0,0,0.6)]">
      <Button
        variant="outline"
        size="icon"
        aria-label="Previous exercise"
        disabled={idx === 0}
        onClick={handlePrev}
        className="size-11 rounded-xl border-[#2A302A] bg-[#202420] text-[#B4BAB4] hover:text-white"
      >
        <ChevronLeft className="size-5" />
      </Button>

      {last ? (
        <button
          type="button"
          onClick={handleFinish}
          className="flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-black text-[#0A0A0A] shadow-[0_0_20px_rgba(182,255,59,0.35)] transition-all hover:bg-primary-hover active:scale-95"
        >
          <Check className="size-5 stroke-[3]" />
          Finish Workout
        </button>
      ) : (
        <button
          type="button"
          onClick={handleNext}
          className="flex min-h-[46px] flex-1 items-center justify-between rounded-xl border border-[#2A302A] bg-[#202420] px-4 text-sm font-semibold text-white transition-all hover:bg-[#2A302A] active:scale-95"
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
