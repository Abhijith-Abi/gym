'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Trophy,
  History,
  HeartPulse,
  Calendar,
  CheckCircle2,
  Flame,
} from 'lucide-react'
import { triggerHaptic } from '@/hooks/useHaptics'
import type { PlanDay } from '@/types'

interface WorkoutCompletedCardProps {
  completedWorkoutName?: string
  tomorrowPlanDay?: PlanDay
  completedSets?: number
  streakDays?: number
  onStartAnother?: () => void
}

/**
 * High-energy Gym Athlete Celebration & Rest Mode Card.
 * Shown when today's workout has been completed, encouraging proper rest
 * and giving a sneak-peek of tomorrow's upcoming workout.
 */
export function WorkoutCompletedCard({
  completedWorkoutName = 'Daily Workout',
  tomorrowPlanDay,
  completedSets = 16,
  streakDays = 1,
  onStartAnother,
}: WorkoutCompletedCardProps) {
  return (
    <div className="relative w-full min-w-0 overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-b from-card via-card to-card-elevated p-5 sm:p-6 shadow-2xl">
      {/* Background celebration glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 size-56 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 -bottom-10 size-48 rounded-full bg-accent/10 blur-3xl" />

      {/* Top Badge: Today Complete */}
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-primary shadow-[0_0_15px_rgba(34,197,94,0.3)]">
          <CheckCircle2 className="size-3.5 stroke-[2.5]" />
          <span>Today&apos;s Workout Complete!</span>
        </span>

        <span className="flex items-center gap-1 rounded-full border border-warning/40 bg-warning/15 px-2.5 py-0.5 text-xs font-bold text-warning">
          <Flame className="size-3.5 fill-warning text-warning" />
          <span>{streakDays}d Streak</span>
        </span>
      </div>

      {/* Main Animated Gym Working / Resting Athlete Graphic */}
      <div className="my-5 flex flex-col items-center justify-center text-center">
        <div className="relative flex size-28 items-center justify-center rounded-3xl bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent border border-primary/30 shadow-[0_0_35px_rgba(34,197,94,0.25)]">
          {/* Animated pulsing rings */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-3xl border border-primary/40"
          />

          {/* Animated Athlete & Trophy Character SVG */}
          <svg viewBox="0 0 100 100" className="size-20 select-none" fill="none">
            {/* Athlete Torso & Head */}
            <circle cx="50" cy="24" r="9" fill="#22c55e" />
            <path d="M 50 33 L 50 60" stroke="#e2e8f0" strokeWidth="5" strokeLinecap="round" />
            {/* Strong Arms in Victory Flex Pose */}
            <path d="M 50 40 L 32 32 L 28 18" stroke="#22c55e" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 50 40 L 68 32 L 72 18" stroke="#22c55e" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="28" cy="18" r="3.5" fill="#e2e8f0" />
            <circle cx="72" cy="18" r="3.5" fill="#e2e8f0" />
            {/* Athletic Stance Legs */}
            <path d="M 50 60 L 36 86" stroke="#e2e8f0" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M 50 60 L 64 86" stroke="#e2e8f0" strokeWidth="4.5" strokeLinecap="round" />
            {/* Sparkles around fists */}
            <circle cx="22" cy="14" r="1.5" fill="#f59e0b" />
            <circle cx="78" cy="14" r="1.5" fill="#f59e0b" />
          </svg>

          {/* Mini Gold Trophy Pin */}
          <div className="absolute -bottom-2 -right-2 flex size-8 items-center justify-center rounded-xl bg-warning text-warning-foreground shadow-md">
            <Trophy className="size-4 fill-current" />
          </div>
        </div>

        <h3 className="mt-4 text-xl font-black tracking-tight text-foreground sm:text-2xl">
          You Crushed {completedWorkoutName}!
        </h3>
        <p className="mt-1.5 max-w-sm text-xs leading-relaxed text-muted-foreground">
          Great job! All {completedSets} sets logged. Muscles grow while resting — stay hydrated, get quality sleep, and recover for tomorrow.
        </p>
      </div>

      {/* Recovery Highlights Row */}
      <div className="grid grid-cols-3 gap-2 rounded-2xl border border-border/80 bg-card-elevated p-3 text-center text-xs">
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Hydration</span>
          <span className="font-mono font-extrabold text-foreground">3.0 Liters</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 border-x border-border/60">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Protein</span>
          <span className="font-mono font-extrabold text-primary">High Target</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Sleep</span>
          <span className="font-mono font-extrabold text-accent">8+ Hours</span>
        </div>
      </div>

      {/* Tomorrow's Workout Sneak Peek */}
      {tomorrowPlanDay && (
        <div className="mt-3.5 flex items-center justify-between rounded-2xl border border-border/80 bg-background/60 p-3.5 backdrop-blur-xs">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-secondary text-primary">
              <Calendar className="size-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                Up Next Tomorrow
              </span>
              <span className="text-sm font-extrabold text-foreground">
                {tomorrowPlanDay.workoutName}
              </span>
            </div>
          </div>
          <span className="rounded-lg bg-secondary px-2 py-0.5 text-xs font-semibold text-muted-foreground">
            {tomorrowPlanDay.isRest ? 'Rest & Recharge' : `${tomorrowPlanDay.entries.length} Exercises`}
          </span>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
        <Link
          href="/history"
          onClick={() => triggerHaptic('light')}
          className="flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 text-xs font-bold text-foreground transition-all hover:bg-secondary active:scale-95 sm:text-sm"
        >
          <History className="size-4 text-primary" />
          <span>View in History</span>
        </Link>

        <Link
          href="/recovery"
          onClick={() => triggerHaptic('light')}
          className="flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 text-xs font-bold text-foreground transition-all hover:bg-secondary active:scale-95 sm:text-sm"
        >
          <HeartPulse className="size-4 text-accent" />
          <span>Log Sleep &amp; Soreness</span>
        </Link>
      </div>

      {onStartAnother && (
        <div className="mt-3 text-center">
          <button
            type="button"
            onClick={onStartAnother}
            className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors underline"
          >
            Want to train more? Start another workout session
          </button>
        </div>
      )}
    </div>
  )
}
