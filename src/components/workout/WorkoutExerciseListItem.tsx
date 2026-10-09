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
      className={`group relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-300 ${
        isCompleted
          ? 'border-emerald-500/40 bg-emerald-950/20 shadow-[0_0_25px_rgba(16,185,129,0.15)]'
          : 'border-white/10 bg-slate-900/65 hover:border-emerald-500/30 shadow-lg'
      }`}
    >
      <div className="p-4 sm:p-5">
        {/* Header: Number, Title, Target info */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-1 items-start gap-3 min-w-0">
            {/* Number / Check circle */}
            <div
              className={`flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-2xl text-sm sm:text-base font-black transition-all ${
                isCompleted
                  ? 'bg-gradient-to-tr from-emerald-500 to-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                  : 'border border-white/10 bg-white/5 text-slate-200'
              }`}
            >
              {isCompleted ? <Check className="size-5 sm:size-6 stroke-[3]" /> : index + 1}
            </div>

            {/* Title and Badges */}
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                  Exercise {index + 1}
                </span>
                {meta?.primaryMuscles && meta.primaryMuscles.length > 0 && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                    <Target className="size-2.5" />
                    {meta.primaryMuscles.join(', ')}
                  </span>
                )}
                {meta?.equipment && (
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-300 capitalize">
                    {meta.equipment}
                  </span>
                )}
              </div>

              <div className="mt-1 flex items-center gap-2">
                <h3
                  className={`text-base font-extrabold tracking-tight sm:text-lg transition-colors truncate ${
                    isCompleted
                      ? 'text-emerald-400/80 line-through decoration-emerald-500/50'
                      : 'text-white'
                  }`}
                >
                  {meta?.name ?? exercise.exerciseId}
                </h3>
                <button
                  type="button"
                  onClick={handleSpeakGuide}
                  aria-label="Listen to exercise tips"
                  className="flex size-6 items-center justify-center rounded-full text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <Volume2 className="size-3.5" />
                </button>
              </div>

              {/* Target Prescription Info */}
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {isInterval ? (
                  <div className="flex items-center gap-1.5 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 text-xs font-bold text-cyan-300">
                    <Dumbbell className="size-3 text-cyan-400" />
                    <span>
                      {targetSetsCount} Rnds · {exercise.intervalWorkSeconds}s Work / {exercise.intervalRestSeconds}s Rest
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-semibold text-slate-200">
                    <Dumbbell className="size-3 text-emerald-400" />
                    <span>
                      {targetSetsCount} Sets ×{' '}
                      {exercise.prescription.targetRepMin === exercise.prescription.targetRepMax
                        ? `${exercise.prescription.targetRepMax} reps`
                        : `${exercise.prescription.targetRepMin}–${exercise.prescription.targetRepMax} reps`}
                    </span>
                  </div>
                )}

                {isCompleted && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/20 px-2 py-0.5 text-[11px] font-extrabold text-emerald-300">
                    <Sparkles className="size-3" />
                    Completed
                  </span>
                )}
              </div>
            </div>

            {/* Desktop Quick Video Demo Toggle */}
            <button
              type="button"
              onClick={() => {
                triggerHaptic('light')
                setShowDemo(!showDemo)
              }}
              aria-label="View demonstration video"
              className="hidden sm:block w-20 shrink-0 overflow-hidden rounded-xl border border-white/10 transition-transform hover:scale-105"
            >
              <ExerciseMedia
                exerciseId={exercise.exerciseId}
                name={meta?.name ?? exercise.exerciseId}
                mode="card"
              />
            </button>
          </div>
        </div>

        {/* Demo view toggle button & status */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-2.5">
          <button
            type="button"
            aria-label={showDemo ? 'Hide video demo' : 'View form & demo'}
            onClick={() => {
              triggerHaptic('light')
              setShowDemo(!showDemo)
            }}
            className={`flex items-center gap-1.5 rounded-xl px-2.5 py-1 text-xs font-bold transition-all active:scale-95 ${
              showDemo
                ? 'border border-cyan-500/40 bg-cyan-500/20 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                : 'border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <span>{showDemo ? '✕ Close Video' : '▶ 1080p Video'}</span>
            {showDemo ? (
              <ChevronUp className="size-3" />
            ) : (
              <ChevronDown className="size-3" />
            )}
          </button>

          <span className="text-[10px] font-medium text-slate-400">
            {isCompleted ? '✓ Completed' : 'Tap below when finished'}
          </span>
        </div>

        {/* Expandable 1080p Video Player Only (Clean & Fast) */}
        <AnimatePresence>
          {showDemo && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 p-2.5 shadow-2xl"
            >
              <ExerciseMedia
                exerciseId={exercise.exerciseId}
                name={meta?.name ?? exercise.exerciseId}
                mode="player"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modern Glass Complete / Incomplete Button */}
        <div className="mt-3.5">
          <button
            type="button"
            onClick={handleToggleCompleted}
            aria-label={isCompleted ? 'Mark exercise incomplete' : 'Mark exercise complete'}
            className={`flex min-h-[46px] w-full items-center justify-center gap-2 rounded-2xl text-sm font-bold transition-all active:scale-[0.98] ${
              isCompleted
                ? 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20'
                : 'border border-emerald-400/40 bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:opacity-95'
            }`}
          >
            {isCompleted ? (
              <>
                <RotateCcw className="size-4 opacity-80" />
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
