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
import { useExerciseStore } from '@/store/exerciseStore'
import { useSessionStore, type ActiveExercise } from '@/store/sessionStore'
import { useWorkoutSounds } from '@/hooks/useWorkoutSounds'
import { triggerHaptic } from '@/hooks/useHaptics'
import { ExerciseMedia } from '@/components/media/ExerciseMedia'

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
    speak(`${exerciseName}. Target is ${targetText}.`)
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-200 backdrop-blur-xl ${
        isCompleted
          ? 'border-primary/40 bg-primary/[0.06] shadow-[0_0_15px_rgba(255,107,53,0.15)]'
          : 'border-white/10 bg-white/5 hover:border-white/20'
      }`}
    >
      <div className="p-3.5 sm:p-4">
        {/* Main Info Row */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            {/* Number / Check Circle */}
            <div
              className={`flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-xl text-xs sm:text-sm font-black transition-all ${
                isCompleted
                  ? 'bg-primary text-white shadow-[0_0_12px_rgba(255,107,53,0.35)]'
                  : 'border border-white/10 bg-white/10 text-white'
              }`}
            >
              {isCompleted ? <Check className="size-4 sm:size-5 stroke-[3]" /> : index + 1}
            </div>

            {/* Exercise Details */}
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5">
                {meta?.primaryMuscles && meta.primaryMuscles.length > 0 && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/15 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-primary">
                    <Target className="size-2.5" />
                    {meta.primaryMuscles.join(', ')}
                  </span>
                )}
                {meta?.equipment && (
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] sm:text-[10px] font-medium text-[#A8A8A8] capitalize">
                    {meta.equipment}
                  </span>
                )}
              </div>

              <div className="mt-0.5 flex items-center gap-1.5">
                <h3
                  className={`text-sm sm:text-base font-black tracking-tight transition-colors truncate ${
                    isCompleted
                      ? 'text-primary/80 line-through decoration-primary/50'
                      : 'text-white'
                  }`}
                >
                  {meta?.name ?? exercise.exerciseId}
                </h3>
                <button
                  type="button"
                  onClick={handleSpeakGuide}
                  aria-label="Listen to exercise tips"
                  className="flex size-5 shrink-0 items-center justify-center rounded-full text-[#8C8C8C] hover:text-white transition-colors"
                >
                  <Volume2 className="size-3" />
                </button>
              </div>

              {/* Prescription Target */}
              <div className="mt-1 flex items-center gap-2 text-xs font-semibold text-[#8C8C8C]">
                {isInterval ? (
                  <span>
                    {targetSetsCount} Rnds · {exercise.intervalWorkSeconds}s Work / {exercise.intervalRestSeconds}s Rest
                  </span>
                ) : (
                  <span>
                    {targetSetsCount} Sets ×{' '}
                    {exercise.prescription.targetRepMin === exercise.prescription.targetRepMax
                      ? `${exercise.prescription.targetRepMax} reps`
                      : `${exercise.prescription.targetRepMin}–${exercise.prescription.targetRepMax} reps`}
                  </span>
                )}
                {isCompleted && (
                  <span className="text-[10px] font-bold text-primary">✓ Done</span>
                )}
              </div>
            </div>
          </div>

          {/* Clean Video Thumbnail / Demo Toggle Button */}
          <button
            type="button"
            aria-label={showDemo ? 'Close video' : 'View form & demo'}
            onClick={() => {
              triggerHaptic('light')
              setShowDemo(!showDemo)
            }}
            className={`relative flex h-14 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border transition-all active:scale-95 ${
              showDemo
                ? 'border-primary shadow-[0_0_12px_rgba(255,107,53,0.3)]'
                : 'border-white/10 hover:border-primary/50'
            }`}
          >
            <ExerciseMedia
              exerciseId={exercise.exerciseId}
              name={meta?.name ?? exercise.exerciseId}
              mode="card"
              className="h-full w-full object-cover"
            />
            {/* Minimalist expand indicator */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
              <span className="rounded-md bg-black/80 px-1.5 py-0.5 text-[9px] font-bold text-primary">
                {showDemo ? 'Close' : 'Watch'}
              </span>
            </div>
          </button>
        </div>

        {/* Expandable 1080p Video Player */}
        <AnimatePresence>
          {showDemo && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] p-2 shadow-xl"
            >
              <div className="flex items-center justify-between pb-1.5 px-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                  1080p Video Demonstration
                </span>
                <button
                  type="button"
                  onClick={() => setShowDemo(false)}
                  className="text-[10px] font-bold text-[#8C8C8C] hover:text-white"
                >
                  Close Video ✕
                </button>
              </div>
              <ExerciseMedia
                exerciseId={exercise.exerciseId}
                name={meta?.name ?? exercise.exerciseId}
                mode="player"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Complete / Undo Action Button */}
        <div className="mt-3">
          <button
            type="button"
            onClick={handleToggleCompleted}
            aria-label={isCompleted ? 'Mark exercise incomplete' : 'Mark exercise complete'}
            className={`flex min-h-[42px] sm:min-h-[44px] w-full items-center justify-center gap-2 rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-[0.98] ${
              isCompleted
                ? 'border border-white/10 bg-white/5 text-[#A8A8A8] hover:text-white hover:bg-white/10'
                : 'bg-primary text-white shadow-[0_0_20px_rgba(255,107,53,0.35)] hover:bg-primary-hover'
            }`}
          >
            {isCompleted ? (
              <>
                <RotateCcw className="size-3.5 opacity-75" />
                <span>Marked Done (Tap to Undo)</span>
              </>
            ) : (
              <>
                <Check className="size-4 stroke-[3]" />
                <span>Mark as Completed</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
