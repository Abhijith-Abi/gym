'use client'

import { useEffect, useState } from 'react'
import { Flame, Trophy, Dumbbell, CalendarCheck } from 'lucide-react'
import { toDisplay } from '@/lib/units'
import { useAuth } from '@/hooks/useAuth'
import * as sessionService from '@/services/sessionService'
import * as progressService from '@/services/progressService'
import type { Unit, WorkoutSession } from '@/types'

import { computeStreak } from '@/lib/analytics/consistency'
import { useWorkoutStore } from '@/store/workoutStore'

interface Stats {
  streakDays: number
  weeklyVolumeKg: number
  newPrs: number
  workoutsThisWeek: number
}

/**
 * Dynamic dashboard stat tiles (FR-27, FR-28). Reads the user's completed
 * sessions through sessionService and derives streak / weekly volume / workout
 * count and PR count. Features athletic color badges and bold display metrics.
 */
export function StatTiles() {
  const { uid, profile } = useAuth()
  const plan = useWorkoutStore((s) => s.plan)
  const unit: Unit = profile?.preferredUnit ?? 'kg'
  const [stats, setStats] = useState<Stats>({
    streakDays: 0,
    weeklyVolumeKg: 0,
    newPrs: 0,
    workoutsThisWeek: 0,
  })

  useEffect(() => {
    if (!uid) return
    let active = true
    Promise.all([
      sessionService.listRecentSessions(uid),
      progressService.listPersonalRecords(uid),
    ]).then(([sessionsRes, prsRes]) => {
      if (!active) return
      const sessions = sessionsRes.ok ? sessionsRes.data : []
      const prCount = prsRes.ok ? prsRes.data.length : 0
      const derived = deriveStats(sessions, plan ?? undefined)
      setStats({ ...derived, newPrs: prCount })
    })
    return () => {
      active = false
    }
  }, [uid, plan])

  const tiles = [
    {
      label: 'Day Streak',
      value: String(stats.streakDays),
      unitLabel: 'days',
      icon: Flame,
      color: 'text-warning',
      bg: 'bg-warning/15',
    },
    {
      label: 'Weekly Volume',
      value: `${toDisplay(stats.weeklyVolumeKg, unit)}`,
      unitLabel: unit,
      icon: Dumbbell,
      color: 'text-accent',
      bg: 'bg-accent/15',
    },
    {
      label: 'Personal Records',
      value: String(stats.newPrs),
      unitLabel: 'records',
      icon: Trophy,
      color: 'text-yellow-400',
      bg: 'bg-yellow-400/15',
    },
    {
      label: 'This Week',
      value: String(stats.workoutsThisWeek),
      unitLabel: 'workouts',
      icon: CalendarCheck,
      color: 'text-primary',
      bg: 'bg-primary/15',
    },
  ]

  return (
    <div className="grid w-full min-w-0 grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
      {tiles.map(({ label, value, unitLabel, icon: Icon, color, bg }) => (
        <div
          key={label}
          className="flex min-w-0 flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-3.5 shadow-md backdrop-blur-xl transition-all hover:border-primary/40 hover:bg-white/[0.08] sm:rounded-3xl sm:p-4"
        >
          <div className="flex items-center justify-between gap-1">
            <span className="truncate text-[10px] font-bold uppercase tracking-wider text-[#8C8C8C] sm:text-[11px]">
              {label}
            </span>
            <div className={`flex size-7 shrink-0 items-center justify-center rounded-xl sm:size-8 ${bg} ${color}`}>
              <Icon className="size-3.5 sm:size-4" aria-hidden="true" />
            </div>
          </div>

          <div className="mt-2.5 flex flex-wrap items-baseline gap-1 sm:mt-3">
            <span className="font-mono text-xl font-black tracking-tight text-white tabular-nums sm:text-2xl md:text-3xl">
              {value}
            </span>
            <span className="truncate text-[10px] font-semibold text-[#8C8C8C] sm:text-xs">
              {unitLabel}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

/** Pure derivation of dashboard stats from completed sessions. */
export function deriveStats(
  sessions: ReadonlyArray<WorkoutSession>,
  plan?: import('@/types').WorkoutPlan,
): Stats {
  const now = new Date()
  const weekStart = startOfWeek(now)

  // Normalize completed sessions and dates
  const completedSessions = sessions
    .filter((s) => s.status === 'COMPLETED' && s.completedAt)
    .map((s) => ({
      ...s,
      completedAt: new Date(s.completedAt as Date | string | number),
    }))

  const thisWeek = completedSessions.filter(
    (s) => s.completedAt && s.completedAt >= weekStart && s.completedAt <= now,
  )
  const weeklyVolumeKg = thisWeek.reduce((acc, s) => acc + (s.totalVolumeKg || 0), 0)

  return {
    streakDays: computeStreak(completedSessions, plan, now),
    weeklyVolumeKg,
    newPrs: 0,
    workoutsThisWeek: thisWeek.length,
  }
}

function startOfWeek(d: Date): Date {
  const copy = new Date(d)
  const day = (copy.getDay() + 6) % 7 // Monday = 0
  copy.setHours(0, 0, 0, 0)
  copy.setDate(copy.getDate() - day)
  return copy
}
