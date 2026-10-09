'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Dumbbell, Clock, ListChecks, Play, Sparkles } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { useExerciseStore } from '@/store/exerciseStore'
import { useWorkoutStore, todayDayId } from '@/store/workoutStore'
import * as workoutService from '@/services/workoutService'
import { WorkoutCompletedCard } from './WorkoutCompletedCard'
import { triggerHaptic } from '@/hooks/useHaptics'
import type { DayOfWeek, WorkoutSession } from '@/types'

/**
 * Hero Workout Card on the Home screen.
 * Displays today's workout, muscle tags, estimated duration, exercise previews,
 * and high-energy Start Workout button, OR the WorkoutCompletedCard when finished!
 */
export function TodayCard() {
  const { uid } = useAuth()
  const plan = useWorkoutStore((s) => s.plan)
  const selectedDay = useWorkoutStore((s) => s.selectedDay)
  const planDay = useWorkoutStore((s) => s.selectedPlanDay())
  const byId = useExerciseStore((s) => s.byId)
  const [completedTodaySession, setCompletedTodaySession] = useState<WorkoutSession | null>(null)
  const [forceShowStart, setForceShowStart] = useState(false)

  // Check if today's workout has already been completed
  useEffect(() => {
    if (!uid) return
    let active = true
    void workoutService.listCompletedSessionsPage(uid, 5).then((res) => {
      if (!active || !res.ok) return
      const today = new Date().toDateString()
      const match = res.data.sessions.find((s) => {
        if (!s.completedAt) return false
        return new Date(s.completedAt).toDateString() === today
      })
      if (match) {
        setCompletedTodaySession(match)
      }
    })
    return () => {
      active = false
    }
  }, [uid, selectedDay])

  if (!planDay) {
    return (
      <div className="rounded-3xl border border-border bg-card p-6 text-center text-sm text-muted-foreground">
        No workout plan loaded yet.
      </div>
    )
  }

  // Calculate tomorrow's plan day for the recovery sneak peek
  const DAYS_ORDER: DayOfWeek[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
  const currIdx = DAYS_ORDER.indexOf(selectedDay)
  const tomorrowDayId = DAYS_ORDER[(currIdx + 1) % 7]
  const tomorrowPlanDay = plan?.days[tomorrowDayId]

  // If today's workout is completed and user didn't request another session:
  if (completedTodaySession && selectedDay === todayDayId() && !forceShowStart) {
    return (
      <WorkoutCompletedCard
        completedWorkoutName={completedTodaySession.workoutName}
        tomorrowPlanDay={tomorrowPlanDay}
        completedSets={completedTodaySession.completedSets}
        onStartAnother={() => setForceShowStart(true)}
      />
    )
  }

  if (planDay.isRest) {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-border/80 bg-gradient-to-b from-card to-card-elevated p-8 text-center shadow-lg">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-primary">
          <Sparkles className="size-7" />
        </div>
        <span className="mt-4 text-xs font-bold uppercase tracking-widest text-primary">
          Rest Day
        </span>
        <h2 className="mt-1 text-2xl font-black text-foreground">{planDay.workoutName}</h2>
        <p className="mt-2 max-w-xs text-xs leading-relaxed text-muted-foreground">
          Rest, hydrate, and nourish your body. Active recovery prepares you to lift heavier tomorrow.
        </p>
      </div>
    )
  }

  const exerciseCount = planDay.entries.length
  const totalSets = planDay.entries.reduce(
    (acc, e) => acc + e.prescription.targetSets,
    0,
  )
  const estMinutes = Math.round(
    planDay.entries.reduce(
      (acc, e) =>
        acc + e.prescription.targetSets * (45 + e.prescription.restSeconds),
      0,
    ) / 60,
  )

  const preview = planDay.entries.slice(0, 4).map((e) => ({
    name: byId(e.exerciseId)?.name ?? e.exerciseId,
    muscles: byId(e.exerciseId)?.primaryMuscles ?? [],
  }))

  return (
    <div className="relative w-full min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-primary/10 p-5 shadow-2xl backdrop-blur-2xl sm:p-6">
      {/* Background Accent Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 -bottom-10 size-40 rounded-full bg-primary/10 blur-2xl" />

      {/* Header Info */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="text-[11px] font-black uppercase tracking-widest text-primary sm:text-xs">
            Today&apos;s Workout
          </span>
          <h2 className="mt-1 truncate text-xl font-black tracking-tight text-white sm:text-2xl md:text-3xl">
            {planDay.workoutName}
          </h2>
          <div className="mt-1 flex items-center gap-2 text-xs font-semibold text-[#A8A8A8]">
            <span>{exerciseCount} Exercises</span>
            <span>·</span>
            <span>{estMinutes} min</span>
          </div>
        </div>
        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 border border-primary/30 text-primary shadow-[0_0_20px_rgba(255,107,53,0.3)]">
          <Dumbbell className="size-6 stroke-[2.5]" aria-hidden="true" />
        </div>
      </div>

      {/* Exercise Preview List */}
      <div className="mt-4 flex flex-col gap-1.5">
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8C8C8C]">
          Exercise Lineup
        </span>
        <div className="flex flex-wrap gap-1.5">
          {preview.map(({ name }) => (
            <span
              key={name}
              className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-[#A8A8A8] backdrop-blur-md sm:text-xs"
            >
              {name}
            </span>
          ))}
          {exerciseCount > 4 && (
            <span className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-[#8C8C8C] backdrop-blur-md sm:text-xs">
              +{exerciseCount - 4} more
            </span>
          )}
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-5 flex flex-col gap-2.5 sm:mt-6">
        <Link
          href="/workout"
          onClick={() => triggerHaptic('medium')}
          className="flex min-h-[50px] w-full items-center justify-center gap-2 rounded-2xl bg-primary text-sm font-black text-white shadow-[0_0_25px_rgba(255,107,53,0.4)] transition-all hover:bg-primary-hover active:scale-95 sm:min-h-[54px] sm:text-base"
        >
          <span>Start Workout</span>
          <span className="text-base font-bold">→</span>
        </Link>
      </div>
    </div>
  )
}
