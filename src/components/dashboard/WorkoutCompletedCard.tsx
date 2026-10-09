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
    <div className="relative w-full min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-primary/10 p-6 shadow-2xl backdrop-blur-2xl text-center">
      {/* Background celebration glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 size-60 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 -bottom-10 size-52 rounded-full bg-primary/15 blur-3xl" />

      {/* Main Glowing Trophy Icon */}
      <div className="my-3 flex flex-col items-center justify-center">
        <div className="relative flex size-24 items-center justify-center rounded-3xl bg-gradient-to-tr from-primary/30 to-white/10 border border-primary/40 shadow-[0_0_40px_rgba(255,107,53,0.4)]">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-3xl border border-primary/50"
          />
          <Trophy className="size-12 text-primary stroke-[2]" />
        </div>

        <h3 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl">
          Workout Completed!
        </h3>
        <p className="mt-1.5 max-w-sm text-xs leading-relaxed text-[#A8A8A8]">
          Great job! You crushed <strong className="text-white">{completedWorkoutName}</strong>. You&apos;re one step closer to your goals.
        </p>
      </div>

      {/* 4 Stat Tiles Grid */}
      <div className="my-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
          <div className="flex items-center gap-1 text-primary">
            <Calendar className="size-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C8C8C]">Streak</span>
          </div>
          <span className="mt-1 font-mono text-lg font-black text-white">{streakDays} Days</span>
        </div>

        <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
          <div className="flex items-center gap-1 text-primary">
            <Flame className="size-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C8C8C]">Calories</span>
          </div>
          <span className="mt-1 font-mono text-lg font-black text-white">~320 kcal</span>
        </div>

        <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
          <div className="flex items-center gap-1 text-primary">
            <CheckCircle2 className="size-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C8C8C]">Total Sets</span>
          </div>
          <span className="mt-1 font-mono text-lg font-black text-white">{completedSets} Sets</span>
        </div>

        <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
          <div className="flex items-center gap-1 text-primary">
            <HeartPulse className="size-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C8C8C]">Recovery</span>
          </div>
          <span className="mt-1 font-mono text-lg font-black text-white">8+ hrs</span>
        </div>
      </div>

      {/* Tomorrow's Workout Sneak Peek */}
      {tomorrowPlanDay && (
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3.5 text-left backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/30">
              <Calendar className="size-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                Up Next Tomorrow
              </span>
              <span className="text-sm font-extrabold text-white">
                {tomorrowPlanDay.workoutName}
              </span>
            </div>
          </div>
          <span className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-[#A8A8A8]">
            {tomorrowPlanDay.isRest ? 'Rest Day' : `${tomorrowPlanDay.entries.length} Exercises`}
          </span>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-5 flex flex-col gap-2.5">
        <Link
          href="/history"
          onClick={() => triggerHaptic('light')}
          className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-primary text-sm font-black text-white shadow-[0_0_25px_rgba(255,107,53,0.4)] transition-all hover:bg-primary-hover active:scale-95"
        >
          <span>View Summary in History</span>
          <span className="text-base font-bold">→</span>
        </Link>

        <Link
          href="/dashboard"
          onClick={() => triggerHaptic('light')}
          className="flex min-h-[46px] w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 text-xs font-bold text-[#A8A8A8] transition-all hover:text-white hover:bg-white/10 active:scale-95 sm:text-sm"
        >
          <span>Back to Home</span>
        </Link>
      </div>

      {onStartAnother && (
        <div className="mt-3 text-center">
          <button
            type="button"
            onClick={onStartAnother}
            className="text-xs font-semibold text-[#8C8C8C] hover:text-primary transition-colors underline"
          >
            Want to train more? Start another workout session
          </button>
        </div>
      )}
    </div>
  )
}
