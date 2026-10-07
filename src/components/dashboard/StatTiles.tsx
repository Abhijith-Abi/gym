'use client'

import { useEffect, useState } from 'react'
import { Flame, Trophy, Dumbbell, CalendarCheck } from 'lucide-react'
import { toDisplay } from '@/lib/units'
import { useAuth } from '@/hooks/useAuth'
import * as sessionService from '@/services/sessionService'
import type { Unit, WorkoutSession } from '@/types'

interface Stats {
  streakDays: number
  weeklyVolumeKg: number
  newPrs: number
  workoutsThisWeek: number
}

/**
 * Dynamic dashboard stat tiles (FR-27, FR-28). Reads the user's completed
 * sessions through sessionService and derives streak / weekly volume / workout
 * count. Features athletic color badges and bold display metrics.
 */
export function StatTiles() {
  const { uid, profile } = useAuth()
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
    void sessionService.listRecentSessions(uid).then((res) => {
      if (!active || !res.ok) return
      setStats(deriveStats(res.data))
    })
    return () => {
      active = false
    }
  }, [uid])

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
      label: 'New PRs',
      value: String(stats.newPrs),
      unitLabel: 'records',
      icon: Trophy,
      color: 'text-yellow-400',
      bg: 'bg-yellow-400/15',
    },
    {
      label: 'This Week',
      value: String(stats.workoutsThisWeek),
      unitLabel: 'sessions',
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
          className="flex min-w-0 flex-col justify-between rounded-2xl border border-border/80 bg-card p-3 shadow-sm transition-all hover:border-border sm:rounded-3xl sm:p-4"
        >
          <div className="flex items-center justify-between gap-1">
            <span className="truncate text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:text-[11px]">
              {label}
            </span>
            <div className={`flex size-7 shrink-0 items-center justify-center rounded-xl sm:size-8 ${bg} ${color}`}>
              <Icon className="size-3.5 sm:size-4" aria-hidden="true" />
            </div>
          </div>

          <div className="mt-2 flex flex-wrap items-baseline gap-1 sm:mt-3">
            <span className="font-mono text-xl font-black tracking-tight text-foreground tabular-nums sm:text-2xl md:text-3xl">
              {value}
            </span>
            <span className="truncate text-[10px] font-semibold text-muted-foreground sm:text-xs">
              {unitLabel}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

/** Pure derivation of dashboard stats from completed sessions. */
export function deriveStats(sessions: ReadonlyArray<WorkoutSession>): Stats {
  const now = new Date()
  const weekStart = startOfWeek(now)

  const thisWeek = sessions.filter(
    (s) => s.completedAt && s.completedAt >= weekStart,
  )
  const weeklyVolumeKg = thisWeek.reduce((acc, s) => acc + s.totalVolumeKg, 0)

  return {
    streakDays: computeStreak(sessions, now),
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

/** Consecutive-day training streak counting back from today. */
function computeStreak(
  sessions: ReadonlyArray<WorkoutSession>,
  now: Date,
): number {
  const days = new Set(
    sessions
      .filter((s) => s.completedAt)
      .map((s) => dayKey(s.completedAt as Date)),
  )
  let streak = 0
  const cursor = new Date(now)
  cursor.setHours(0, 0, 0, 0)
  // Allow today to be missing (streak continues if yesterday trained).
  if (!days.has(dayKey(cursor))) cursor.setDate(cursor.getDate() - 1)
  while (days.has(dayKey(cursor))) {
    streak += 1
    cursor.setDate(cursor.getDate() - 1)
  }
  return streak
}

function dayKey(d: Date): string {
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
}
