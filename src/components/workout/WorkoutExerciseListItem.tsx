'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Check,
  ChevronDown,
  ChevronUp,
  Dumbbell,
  Target,
  Sparkles,
  RotateCcw,
  Volume2,
} from 'lucide-react'
import { ExerciseVisualDemo } from './ExerciseVisualDemo'
import { useExerciseStore } from '@/store/exerciseStore'
import { useSessionStore, type ActiveExercise } from '@/store/sessionStore'
import { useWorkoutSounds } from '@/hooks/useWorkoutSounds'
import { triggerHaptic } from '@/hooks/useHaptics'

interface WorkoutExerciseListItemProps {
  exercise: ActiveExercise
  index: number
}

export function WorkoutExerciseListItem({
  exercise,
  index,
}: WorkoutExerciseListItemProps) {
  const [showDemo, setShowDemo] = useState(false)
  const meta = useExerciseStore((s) => s.byId(exercise.exerciseId))
  const toggleComplete = useSessionStore((s) => s.toggleCompleteExercise)
  const { playSound, speak } = useWorkoutSounds()

  const isCompleted =
    exercise.sets.length > 0 && exercise.sets.every((st) => st.isCompleted)

  const targetSetsCount = Math.max(1, exercise.prescription.targetSets || 3)
  const isInterval = exercise.intervalWorkSeconds !== undefined

  const handleToggleCompleted = () => {
    const willBeCompleted = !isCompleted
    triggerHaptic(willBeCompleted ? 'success' : 'light')
    playSound(willBeCompleted ? 'set-complete' : 'button-click')

    if (willBeCompleted) {
      speak(`${meta?.name ?? exercise.exerciseId} completed!`)
    }

    toggleComplete(exercise.exerciseSessionId)
  }

  const handleSpeakGuide = (e: React.MouseEvent) => {
    e.stopPropagation()
    triggerHaptic('light')
    const exerciseName = meta?.name ?? exercise.exerciseId
    const targetText = isInterval
      ? `${targetSetsCount} rounds of ${exercise.intervalWorkSeconds} seconds work`
      : `${targetSetsCount} sets of ${exercise.prescription.targetRepMax || 10} reps`
    speak(`${exerciseName}. Target is ${targetText}. Focus on controlled form and full range of motion.`)
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 ${
        isCompleted
          ? 'border-primary/60 bg-primary/[0.05] shadow-[0_0_25px_rgba(34,197,94,0.15)]'
          : 'border-border/80 bg-card hover:border-primary/40 shadow-md'
      }`}
    >
      <div className="p-4 sm:p-5">
        {/* Header: Number, Title, Target info */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-1 items-start gap-3 min-w-0">
            {/* Number / Check circle */}
            <div
              className={`flex size-11 shrink-0 items-center justify-center rounded-2xl text-base font-black transition-all ${
                isCompleted
                  ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(34,197,94,0.45)]'
                  : 'bg-secondary text-foreground'
              }`}
            >
              {isCompleted ? <Check className="size-6 stroke-[3]" /> : index + 1}
            </div>

            {/* Title and Badges */}
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Exercise {index + 1}
                </span>
                {meta?.primaryMuscles && meta.primaryMuscles.length > 0 && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary">
                    <Target className="size-3" />
                    {meta.primaryMuscles.join(', ')}
                  </span>
                )}
                {meta?.equipment && (
                  <span className="rounded-full bg-secondary/80 px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground capitalize">
                    {meta.equipment}
                  </span>
                )}
              </div>

              <div className="mt-1 flex items-center gap-2">
                <h3
                  className={`text-lg font-extrabold tracking-tight sm:text-xl transition-colors truncate ${
                    isCompleted
                      ? 'text-primary line-through decoration-primary/50'
                      : 'text-foreground'
                  }`}
                >
                  {meta?.name ?? exercise.exerciseId}
                </h3>
                <button
                  type="button"
                  onClick={handleSpeakGuide}
                  aria-label="Listen to exercise tips"
                  className="flex size-7 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  <Volume2 className="size-4" />
                </button>
              </div>

              {/* Target Prescription Info */}
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {isInterval ? (
                  <div className="flex items-center gap-1.5 rounded-xl bg-secondary/80 px-3 py-1 text-xs font-bold text-accent">
                    <Dumbbell className="size-3.5" />
                    <span>
                      {targetSetsCount} Rounds · {exercise.intervalWorkSeconds}s Work / {exercise.intervalRestSeconds}s Rest
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 rounded-xl bg-secondary/80 px-3 py-1 text-xs font-bold text-foreground">
                    <Dumbbell className="size-3.5 text-primary" />
                    <span>
                      {targetSetsCount} Sets ×{' '}
                      {exercise.prescription.targetRepMin === exercise.prescription.targetRepMax
                        ? `${exercise.prescription.targetRepMax} reps`
                        : `${exercise.prescription.targetRepMin}–${exercise.prescription.targetRepMax} reps`}
                    </span>
                  </div>
                )}

                {isCompleted && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/20 px-2.5 py-1 text-xs font-black text-primary">
                    <Sparkles className="size-3.5" />
                    Completed
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Demo view toggle button */}
        <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-2.5">
          <button
            type="button"
            onClick={() => setShowDemo(!showDemo)}
            className="flex items-center gap-1 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            <span>{showDemo ? 'Hide Movement Demo' : 'View Form & Demo'}</span>
            {showDemo ? (
              <ChevronUp className="size-3.5 text-primary" />
            ) : (
              <ChevronDown className="size-3.5 text-primary" />
            )}
          </button>

          <span className="text-[11px] font-medium text-muted-foreground">
            {isCompleted ? 'Done' : 'Tap below to complete'}
          </span>
        </div>

        {/* Expandable Visual Demo Animation */}
        <AnimatePresence>
          {showDemo && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="mt-3 overflow-hidden rounded-2xl border border-border/80 bg-background/50 p-3"
            >
              <ExerciseVisualDemo
                exerciseId={exercise.exerciseId}
                equipment={meta?.equipment ?? 'other'}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Big One-Tap Complete / Incomplete Button */}
        <div className="mt-4">
          <button
            type="button"
            onClick={handleToggleCompleted}
            aria-label={isCompleted ? 'Mark exercise incomplete' : 'Mark exercise complete'}
            className={`flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-2xl text-sm font-bold transition-all active:scale-[0.98] sm:min-h-[52px] sm:text-base ${
              isCompleted
                ? 'border border-primary/40 bg-primary/15 text-primary hover:bg-primary/25 shadow-sm'
                : 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(34,197,94,0.35)] hover:bg-primary/90'
            }`}
          >
            {isCompleted ? (
              <>
                <RotateCcw className="size-4 opacity-80" />
                <span>Completed (Tap to Undo)</span>
              </>
            ) : (
              <>
                <Check className="size-5 stroke-[3]" />
                <span>Mark as Completed</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
