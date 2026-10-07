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
  Dumbbell,
} from 'lucide-react'
import { getExerciseFormGuide } from '@/lib/exerciseDefaults'
import { useExerciseStore } from '@/store/exerciseStore'
import { useWorkoutSounds } from '@/hooks/useWorkoutSounds'
import { triggerHaptic } from '@/hooks/useHaptics'
import type { Equipment, MuscleGroup } from '@/types'

/**
 * Interactive Exercise Visual Demo & Form Guide (FR-4, FR-20).
 * Displays anatomical muscle target map, movement path diagram,
 * step-by-step coaching cues, and voice audio explanation.
 */
export function ExerciseVisualDemo({
  exerciseId,
  equipment = 'other',
}: {
  exerciseId: string
  equipment?: Equipment
}) {
  const meta = useExerciseStore((s) => s.byId(exerciseId))
  const { speak } = useWorkoutSounds()
  const [isOpen, setIsOpen] = useState(false)

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
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card-elevated/70 shadow-sm transition-all">
      {/* Visual Header / Muscle highlights & Expand button */}
      <div className="flex items-center justify-between p-3 sm:p-3.5">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          {/* Animated Barbell/Dumbbell Visual Icon */}
          <div className="relative flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary shadow-[0_0_15px_rgba(34,197,94,0.2)]">
            <motion.div
              animate={{ y: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <Dumbbell className="size-5" />
            </motion.div>
          </div>

          <div className="flex min-w-0 flex-col">
            <div className="flex items-center gap-1.5">
              <span className="truncate text-xs font-extrabold uppercase tracking-wide text-foreground">
                Movement &amp; Form Guide
              </span>
              <span className="rounded-md bg-secondary/80 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                {equipment}
              </span>
            </div>
            <div className="mt-0.5 flex flex-wrap gap-1">
              {primary.map((m: MuscleGroup) => (
                <span
                  key={m}
                  className="rounded px-1.5 py-0.2 text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20"
                >
                  {m}
                </span>
              ))}
              {secondary.map((m: MuscleGroup) => (
                <span
                  key={m}
                  className="rounded px-1.5 py-0.2 text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleReadGuide}
            aria-label="Listen to exercise form cues"
            title="Listen to form guide"
            className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-primary active:scale-95"
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
            className="flex items-center gap-1 rounded-lg border border-border bg-card px-2.5 py-1 text-xs font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground active:scale-95"
          >
            <span>{isOpen ? 'Hide' : 'Demo'}</span>
            {isOpen ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
          </button>
        </div>
      </div>

      {/* Expandable Form Guide & Animated Motion Path */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="border-t border-border/60 bg-card/60 p-3.5 sm:p-4"
          >
            {/* Motion Path Visualization */}
            <div className="mb-3.5 flex items-center justify-between rounded-xl border border-primary/20 bg-primary/5 p-3">
              <div className="flex items-center gap-2">
                <Activity className="size-4 text-primary animate-pulse" />
                <span className="text-xs font-bold text-foreground">
                  Motion Bar Path:{' '}
                  <span className="text-primary font-mono capitalize">{guide.barPath}</span>
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Optimal Muscle Recruitment
              </span>
            </div>

            {/* Setup instructions */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                <Shield className="size-3.5" />
                <span>1. Setup &amp; Posture</span>
              </div>
              <ul className="ml-5 list-disc space-y-1 text-xs leading-relaxed text-muted-foreground">
                {guide.setup.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>

            {/* Execution instructions */}
            <div className="mt-3 flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent">
                <CheckCircle2 className="size-3.5" />
                <span>2. Movement Execution</span>
              </div>
              <ul className="ml-5 list-disc space-y-1 text-xs leading-relaxed text-muted-foreground">
                {guide.execution.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>

            {/* Common Mistakes to Avoid */}
            {guide.mistakes.length > 0 && (
              <div className="mt-3 flex flex-col gap-1.5 rounded-xl border border-destructive/20 bg-destructive/5 p-2.5">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-destructive">
                  <AlertTriangle className="size-3.5" />
                  <span>Mistakes to Avoid</span>
                </div>
                <ul className="ml-4 list-disc space-y-0.5 text-xs text-muted-foreground">
                  {guide.mistakes.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
