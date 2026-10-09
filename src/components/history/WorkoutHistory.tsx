'use client'

import { useEffect, useState } from 'react'
import type { QueryDocumentSnapshot } from 'firebase/firestore'
import { format } from 'date-fns'
import { useAuth } from '@/hooks/useAuth'
import { useWorkoutStore } from '@/store/workoutStore'
import * as workoutService from '@/services/workoutService'
import { toDisplay } from '@/lib/units'
import { computeStreak } from '@/lib/analytics/consistency'
import { Button } from '@/components/ui/button'
import { EmptyState } from '@/components/ui/empty-state'
import { SkeletonBlock } from '@/components/ui/skeleton'
import { Dumbbell, Clock, Calendar, Flame, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { triggerHaptic } from '@/hooks/useHaptics'
import type { DayOfWeek, Unit, WorkoutSession } from '@/types'
import { LazyWorkoutCalendar } from './LazyWorkoutCalendar'

const DAY_LABEL: Record<DayOfWeek, string> = {
  mon: 'Mon',
  tue: 'Tue',
  wed: 'Wed',
  thu: 'Thu',
  fri: 'Fri',
  sat: 'Sat',
  sun: 'Sun',
}

/**
 * Workout history (FR-16/17, design C.16 step 11): timeline-style completed-session list
 * with day filter pills, streak badge, and monthly calendar view.
 */
export function WorkoutHistory() {
  const { uid, profile } = useAuth()
  const plan = useWorkoutStore((s) => s.plan)
  const ensureSeedPlan = useWorkoutStore((s) => s.ensureSeedPlan)
  const unit: Unit = profile?.preferredUnit ?? 'kg'

  const [sessions, setSessions] = useState<WorkoutSession[]>([])
  const [cursor, setCursor] = useState<QueryDocumentSnapshot | undefined>()
  const [hasMore, setHasMore] = useState(false)
  const [loading, setLoading] = useState(true)
  const [dayFilter, setDayFilter] = useState<DayOfWeek | 'all'>('all')

  useEffect(() => {
    if (uid) ensureSeedPlan(uid)
  }, [uid, ensureSeedPlan])

  useEffect(() => {
    if (!uid) return
    let active = true
    setLoading(true)
    void workoutService.listCompletedSessionsPage(uid).then((res) => {
      if (!active) return
      setLoading(false)
      if (!res.ok) return
      setSessions(res.data.sessions)
      setCursor(res.data.cursor)
      setHasMore(res.data.hasMore)
    })
    return () => {
      active = false
    }
  }, [uid])

  async function loadMore() {
    if (!uid || !cursor) return
    const res = await workoutService.listCompletedSessionsPage(uid, 25, cursor)
    if (!res.ok) return
    setSessions((prev) => [...prev, ...res.data.sessions])
    setCursor(res.data.cursor)
    setHasMore(res.data.hasMore)
  }

  const filtered =
    dayFilter === 'all'
      ? sessions
      : sessions.filter((s) => s.dayId === dayFilter)

  const streak = computeStreak(sessions, plan ?? undefined, new Date())

  return (
    <div className="flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Activity Log
          </span>
          <h1 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            Workout History
          </h1>
        </div>
        <span className="flex items-center gap-1.5 rounded-full border border-warning/40 bg-warning/15 px-3 py-1.5 text-xs font-bold text-warning shadow-[0_0_15px_rgba(245,158,11,0.2)]">
          <Flame className="size-3.5 fill-warning text-warning" />
          <span>{streak}-Day Streak</span>
        </span>
      </header>

      {/* Calendar heat overview */}
      <LazyWorkoutCalendar sessions={sessions} plan={plan ?? undefined} />

      {/* Day filter pills */}
      <div className="flex flex-wrap gap-1.5">
        {(['all', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const).map(
          (d) => (
            <button
              key={d}
              type="button"
              onClick={() => {
                triggerHaptic('light')
                setDayFilter(d)
              }}
              aria-pressed={dayFilter === d}
              className={cn(
                'min-h-[36px] rounded-xl px-3 py-1.5 text-xs font-bold transition-all active:scale-95',
                dayFilter === d
                  ? 'bg-primary text-primary-foreground shadow-[0_0_12px_rgba(255,107,53,0.35)]'
                  : 'border border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground',
              )}
            >
              {d === 'all' ? 'All Days' : DAY_LABEL[d]}
            </button>
          ),
        )}
      </div>

      {loading ? (
        <SkeletonBlock lines={4} label="Loading history" className="gap-3" />
      ) : filtered.length === 0 ? (
        <EmptyState
          title="No completed workouts yet"
          description="Finish your first workout and your training logs will appear here."
        />
      ) : (
        <ul className="flex flex-col gap-3">
          {filtered.map((s) => {
            const isFullyCompleted = s.totalSets > 0 ? s.completedSets >= s.totalSets : s.completedSets > 0
            const skippedSets = s.totalSets > 0 ? Math.max(0, s.totalSets - s.completedSets) : 0
            const pct = s.totalSets > 0 ? Math.min(100, Math.round((s.completedSets / s.totalSets) * 100)) : 100

            return (
              <li
                key={s.id}
                className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-sm transition-all hover:border-white/20 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                        {s.dayId ? DAY_LABEL[s.dayId as DayOfWeek] : 'Workout'}
                      </span>
                      {isFullyCompleted ? (
                        <span className="rounded-full border border-primary/30 bg-primary/15 px-2 py-0.5 text-[9px] font-black uppercase text-primary">
                          ✓ Fully Completed
                        </span>
                      ) : (
                        <span className="rounded-full border border-amber-500/30 bg-amber-500/15 px-2 py-0.5 text-[9px] font-black uppercase text-amber-400">
                          ⚡ Partial ({pct}%)
                        </span>
                      )}
                    </div>
                    <h3 className="mt-0.5 text-lg font-bold tracking-tight text-foreground">
                      {s.workoutName}
                    </h3>
                  </div>
                  <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                    <Calendar className="size-3.5" />
                    {s.completedAt ? format(s.completedAt, 'MMM d, yyyy') : '—'}
                  </span>
                </div>

                <div className="mt-1 flex flex-wrap gap-2 text-xs font-semibold text-muted-foreground">
                  <span className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-foreground">
                    <CheckCircle2 className="size-3.5 text-primary" />
                    <span>
                      <strong>{s.completedSets}</strong>
                      {s.totalSets > 0 ? `/${s.totalSets}` : ''} sets logged
                    </span>
                  </span>
                  {skippedSets > 0 && (
                    <span className="flex items-center gap-1 rounded-lg border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-amber-400">
                      {skippedSets} sets skipped
                    </span>
                  )}
                  <span className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-foreground">
                    <Dumbbell className="size-3.5 text-accent" />
                    {toDisplay(s.totalVolumeKg, unit)} {unit}
                  </span>
                  <span className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-foreground">
                    <Clock className="size-3.5 text-warning" />
                    {Math.round(s.durationSeconds / 60)} min
                  </span>
                </div>
              </li>
            )
          })}
        </ul>
      )}

      {hasMore && !loading ? (
        <Button
          variant="outline"
          onClick={() => void loadMore()}
          className="min-h-[48px] rounded-2xl border-border bg-card"
        >
          Load More History
        </Button>
      ) : null}
    </div>
  )
}
