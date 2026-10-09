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
    <div className="relative w-full min-w-0 overflow-hidden rounded-2xl border border-[#2A302A] bg-[#171A17] p-4 shadow-xl sm:p-6">
      {/* Background Accent Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-3xl" />

      {/* Header Info */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="text-[11px] font-black uppercase tracking-widest text-primary sm:text-xs">
            Today&apos;s Workout
          </span>
          <h2 className="mt-1 truncate text-xl font-black tracking-tight text-white sm:text-2xl md:text-3xl">
            {planDay.workoutName}
          </h2>
        </div>
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-[#0A0A0A] shadow-[0_0_15px_rgba(182,255,59,0.3)] sm:size-11">
          <Dumbbell className="size-5 sm:size-6 stroke-[2.5]" aria-hidden="true" />
        </div>
      </div>

      {/* Meta Stats Badges */}
      <div className="mt-3.5 flex flex-wrap gap-2 text-xs font-semibold text-[#B4BAB4] sm:mt-4 sm:gap-2.5">
        <span className="flex items-center gap-1.5 rounded-lg border border-[#2A302A] bg-[#202420] px-2.5 py-1 text-white sm:px-3 sm:py-1.5">
          <ListChecks className="size-3.5 text-primary sm:size-4" aria-hidden="true" />
          {exerciseCount} Exercises · {totalSets} Sets
        </span>
        <span className="flex items-center gap-1.5 rounded-lg border border-[#2A302A] bg-[#202420] px-2.5 py-1 text-white sm:px-3 sm:py-1.5">
          <Clock className="size-3.5 text-primary sm:size-4" aria-hidden="true" />
          ~{estMinutes} min
        </span>
      </div>

      {/* Exercise Preview List */}
      <div className="mt-3.5 flex flex-col gap-1.5 sm:mt-4">
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#858B85]">
          Exercise Lineup
        </span>
        <div className="flex flex-wrap gap-1.5">
          {preview.map(({ name }) => (
            <span
              key={name}
              className="rounded-md border border-[#2A302A] bg-[#202420] px-2 py-0.5 text-[11px] font-medium text-[#B4BAB4] sm:px-2.5 sm:py-1 sm:text-xs"
            >
              {name}
            </span>
          ))}
          {exerciseCount > 4 && (
            <span className="rounded-md border border-[#2A302A] bg-[#202420] px-2 py-0.5 text-[11px] font-medium text-[#858B85] sm:px-2 sm:py-1 sm:text-xs">
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
          className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-black text-[#0A0A0A] shadow-[0_0_20px_rgba(182,255,59,0.35)] transition-all hover:bg-primary-hover active:scale-95 sm:min-h-[52px] sm:text-base"
        >
          <Play className="size-4 fill-current" />
          Start Workout
        </Link>
      </div>
    </div>
  )
}
