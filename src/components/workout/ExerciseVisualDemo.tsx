'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Volume2,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  CheckCircle2,
  Shield,
  Activity,
  Sparkles,
  Wind,
} from 'lucide-react'
import { getExerciseFormGuide } from '@/lib/exerciseDefaults'
import { useExerciseStore } from '@/store/exerciseStore'
import { useWorkoutSounds } from '@/hooks/useWorkoutSounds'
import { triggerHaptic } from '@/hooks/useHaptics'
import { ExerciseMedia } from '@/components/media/ExerciseMedia'
import { getExerciseMedia } from '@/data/exerciseMedia'
import type { Equipment, MuscleGroup } from '@/types'

/**
 * Glassmorphic Exercise Visual Demo & Form Coaching System (FR-4, FR-20).
 * Displays verified 1080p male & female HD demonstrations, motion paths,
 * step-by-step coaching cues, breathing notes, and synthesized audio coaching.
 */
export function ExerciseVisualDemo({
  exerciseId,
  equipment = 'other',
}: {
  exerciseId: string
  equipment?: Equipment
}) {
  const meta = useExerciseStore((s) => s.byId(exerciseId))
  const media = getExerciseMedia(exerciseId, meta?.name)
  const { speak } = useWorkoutSounds()
  const [isOpen, setIsOpen] = useState(true)

  const name = meta?.name ?? exerciseId
  const guide = getExerciseFormGuide(exerciseId, name, equipment)
  const primary = meta?.primaryMuscles ?? []
  const secondary = meta?.secondaryMuscles ?? []

  const handleReadGuide = () => {
    triggerHaptic('light')
    const speechText = `${name}. Setup: ${guide.setup.join('. ')}. Execution: ${guide.execution.join('. ')}.`
    speak(speechText)
  }

  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] backdrop-blur-2xl transition-all">
      {/* Header bar */}
      <div className="flex items-center justify-between p-3.5 sm:p-4">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <div className="relative flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-primary shadow-[0_0_20px_rgba(255,107,53,0.3)] border border-primary/30">
            <Sparkles className="size-5" />
          </div>

          <div className="flex min-w-0 flex-col">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-black uppercase tracking-wider text-foreground">
                Movement Demo &amp; Form Guide
              </span>
              <span className="rounded-full bg-white/10 border border-white/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                {equipment}
              </span>
            </div>
            <div className="mt-1 flex flex-wrap gap-1">
              {primary.map((m: MuscleGroup) => (
                <span
                  key={m}
                  className="rounded-lg px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-primary bg-primary/10 border border-primary/30 shadow-[0_0_10px_rgba(255,107,53,0.15)]"
                >
                  {m}
                </span>
              ))}
              {secondary.map((m: MuscleGroup) => (
                <span
                  key={m}
                  className="rounded-lg px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-accent bg-accent/10 border border-accent/30"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={handleReadGuide}
            aria-label="Listen to exercise form cues"
            title="Listen to form guide"
            className="flex size-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-muted-foreground transition-all hover:bg-white/10 hover:text-primary active:scale-95 shadow-sm"
          >
            <Volume2 className="size-4" />
          </button>

          <button
            type="button"
            onClick={() => {
              triggerHaptic('light')
              setIsOpen(!isOpen)
            }}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Collapse form guide' : 'Expand form guide'}
            className="flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold text-foreground backdrop-blur-md transition-all hover:bg-white/20 active:scale-95 shadow-sm"
          >
            <span>{isOpen ? 'Hide' : 'Show Demo'}</span>
            {isOpen ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
          </button>
        </div>
      </div>

      {/* Expandable Glass Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="flex flex-col gap-4 border-t border-white/10 bg-black/40 p-4 sm:p-5"
          >
            {/* 1080p HD Video & Demonstration Canvas */}
            <ExerciseMedia exerciseId={exerciseId} name={name} mode="player" />

            {/* Motion Bar Path & Breathing Cadence Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="flex items-center justify-between rounded-2xl border border-primary/25 bg-primary/10 p-3 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <Activity className="size-4 text-primary animate-pulse" />
                  <span className="text-xs font-bold text-foreground">
                    Bar Path:{' '}
                    <span className="text-primary font-mono capitalize">{guide.barPath}</span>
                  </span>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                  Optimal Recruitment
                </span>
              </div>

              {media.breathing && (
                <div className="flex items-center gap-2.5 rounded-2xl border border-accent/25 bg-accent/10 p-3 backdrop-blur-md">
                  <Wind className="size-4 text-accent shrink-0" />
                  <span className="text-xs text-foreground/90 leading-tight">
                    <strong className="text-accent uppercase text-[10px] tracking-wider block">Breathing Cadence</strong>
                    {media.breathing}
                  </span>
                </div>
              )}
            </div>

            {/* Setup & Execution Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Setup instructions */}
              <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary">
                  <Shield className="size-4" />
                  <span>1. Setup &amp; Posture</span>
                </div>
                <ul className="ml-5 list-disc space-y-1 text-xs leading-relaxed text-muted-foreground">
                  {guide.setup.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>

              {/* Execution instructions */}
              <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-accent">
                  <CheckCircle2 className="size-4" />
                  <span>2. Movement Execution</span>
                </div>
                <ul className="ml-5 list-disc space-y-1 text-xs leading-relaxed text-muted-foreground">
                  {guide.execution.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Common Mistakes to Avoid */}
            {(media.commonMistakes?.length ?? 0) > 0 ? (
              <div className="flex flex-col gap-2 rounded-2xl border border-destructive/30 bg-destructive/10 p-3.5 backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-destructive">
                  <AlertTriangle className="size-4" />
                  <span>Form Mistakes to Avoid</span>
                </div>
                <ul className="ml-5 list-disc space-y-0.5 text-xs text-muted-foreground">
                  {media.commonMistakes!.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
            ) : guide.mistakes.length > 0 ? (
              <div className="flex flex-col gap-2 rounded-2xl border border-destructive/30 bg-destructive/10 p-3.5 backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-destructive">
                  <AlertTriangle className="size-4" />
                  <span>Form Mistakes to Avoid</span>
                </div>
                <ul className="ml-5 list-disc space-y-0.5 text-xs text-muted-foreground">
                  {guide.mistakes.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
