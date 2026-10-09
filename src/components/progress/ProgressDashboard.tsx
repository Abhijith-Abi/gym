'use client'

import { useEffect, useMemo, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useAnalyticsStore } from '@/store/analyticsStore'
import { useExerciseStore } from '@/store/exerciseStore'
import * as analyticsService from '@/services/analyticsService'
import * as bodyService from '@/services/bodyService'
import { useBodyStore } from '@/store/bodyStore'
import {
  ANALYTICS_RANGES,
  RANGE_LABEL,
  type AnalyticsRange,
} from '@/lib/analytics/range'
import { weeklyVolumeSeries } from '@/lib/analytics/volume'
import { aggregateMuscleVolume, muscleVolumePoints } from '@/lib/analytics/muscleVolume'
import { e1rmSeries } from '@/lib/analytics/strength'
import {
  bodyWeightSeries,
  monthlyReport,
  weeklyReport,
} from '@/lib/analytics/trends'
import { weekIdOf, monthIdOf } from '@/lib/sync/summaryKeys'
import { toDisplay } from '@/lib/units'
import { VolumeChart } from '@/components/charts/VolumeChart'
import { MuscleVolumeChart } from '@/components/charts/MuscleVolumeChart'
import { StrengthChart } from '@/components/charts/StrengthChart'
import { ProgressChart } from '@/components/charts/ProgressChart'
import { TrendingUp, Dumbbell, Calendar, Trophy, Activity, Scale } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Unit } from '@/types'

/**
 * Progress & Analytics Dashboard (FR-15/22/28).
 * Pure analytics transforms + lazy Recharts views + summary cards.
 */
export function ProgressDashboard() {
  const { uid, profile } = useAuth()
  const unit: Unit = profile?.preferredUnit ?? 'kg'

  const range = useAnalyticsStore((s) => s.range)
  const setRange = useAnalyticsStore((s) => s.setRange)
  const weekly = useAnalyticsStore((s) => s.weekly)
  const monthly = useAnalyticsStore((s) => s.monthly)
  const histories = useAnalyticsStore((s) => s.histories)
  const setWeekly = useAnalyticsStore((s) => s.setWeekly)
  const setMonthly = useAnalyticsStore((s) => s.setMonthly)
  const setHistories = useAnalyticsStore((s) => s.setHistories)

  const measurements = useBodyStore((s) => s.measurements)
  const setMeasurements = useBodyStore((s) => s.setMeasurements)
  const all = useExerciseStore((s) => s.all)
  const custom = useExerciseStore((s) => s.custom)
  const allExercises = useMemo(() => {
    void custom
    return all()
  }, [all, custom])

  const [selectedExerciseId, setSelectedExerciseId] = useState<string>('')

  useEffect(() => {
    if (!uid) return
    let active = true
    void analyticsService.listWeeklySummaries(uid).then((r) => {
      if (active && r.ok) setWeekly(r.data)
    })
    void analyticsService.listMonthlySummaries(uid).then((r) => {
      if (active && r.ok) setMonthly(r.data)
    })
    void analyticsService.listExerciseHistories(uid).then((r) => {
      if (active && r.ok) setHistories(r.data)
    })
    void bodyService.listBodyMeasurements(uid).then((r) => {
      if (active && r.ok) setMeasurements(r.data)
    })
    return () => {
      active = false
    }
  }, [uid, setWeekly, setMonthly, setHistories, setMeasurements])

  const now = useMemo(() => new Date(), [])

  const volumePoints = useMemo(
    () => weeklyVolumeSeries(weekly, range, now),
    [weekly, range, now],
  )
  const musclePoints = useMemo(
    () => muscleVolumePoints(aggregateMuscleVolume(weekly, range, now)),
    [weekly, range, now],
  )

  const activeHistory = useMemo(() => {
    if (selectedExerciseId) {
      return histories.find((h) => h.exerciseId === selectedExerciseId)
    }
    return histories[0]
  }, [histories, selectedExerciseId])

  const strengthPoints = useMemo(
    () => e1rmSeries(activeHistory, range, now),
    [activeHistory, range, now],
  )
  const bodyPoints = useMemo(
    () => bodyWeightSeries(measurements, range, now),
    [measurements, range, now],
  )

  // Reports read exactly the current period summary docs (FR-28).
  const currentWeek = weekly.find((w) => w.weekId === weekIdOf(now)) ?? null
  const currentMonth = monthly.find((m) => m.monthId === monthIdOf(now)) ?? null
  const wr = weeklyReport(currentWeek)
  const mr = monthlyReport(currentMonth)

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-1">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          Performance Analytics
        </span>
        <h1 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
          Progress &amp; Trends
        </h1>
      </header>

      {/* Range filter pill bar */}
      <div className="flex flex-wrap gap-1.5" role="group" aria-label="Range">
        {ANALYTICS_RANGES.map((r: AnalyticsRange) => (
          <button
            key={r}
            type="button"
            onClick={() => setRange(r)}
            aria-pressed={range === r}
            title={RANGE_LABEL[r]}
            className={cn(
              'min-h-[36px] rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all active:scale-95',
              range === r
                ? 'bg-primary text-primary-foreground shadow-[0_0_15px_rgba(255,107,53,0.35)]'
                : 'border border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground',
            )}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Summary report cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <ReportCard
          title="This Week's Activity"
          icon={Calendar}
          report={wr}
          unit={unit}
          color="text-primary"
          bg="bg-primary/15"
        />
        <ReportCard
          title="This Month's Activity"
          icon={Activity}
          report={mr}
          unit={unit}
          color="text-accent"
          bg="bg-accent/15"
        />
      </div>

      {/* Responsive 2-Column Chart Grid for Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartSection title="Weekly Training Volume" icon={Dumbbell}>
          <VolumeChart points={volumePoints} />
        </ChartSection>

        <ChartSection title="Muscle Group Distribution" icon={TrendingUp}>
          <MuscleVolumeChart points={musclePoints} />
        </ChartSection>

        <ChartSection
          title="Estimated 1RM Strength Trend"
          icon={Trophy}
          headerRight={
            <select
              value={selectedExerciseId || histories[0]?.exerciseId || ''}
              onChange={(e) => setSelectedExerciseId(e.target.value)}
              className="max-w-[180px] truncate rounded-xl border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-semibold text-white focus:outline-none"
            >
              {histories.length > 0 ? (
                histories.map((h) => {
                  const ex = allExercises.find((e) => e.id === h.exerciseId)
                  return (
                    <option key={h.exerciseId} value={h.exerciseId} className="bg-[#171A17] text-white">
                      {ex?.name ?? h.exerciseId}
                    </option>
                  )
                })
              ) : (
                allExercises.slice(0, 10).map((e) => (
                  <option key={e.id} value={e.id} className="bg-[#171A17] text-white">
                    {e.name}
                  </option>
                ))
              )}
            </select>
          }
        >
          <StrengthChart points={strengthPoints} />
        </ChartSection>

        <ChartSection title="Body Weight Trend" icon={Scale}>
          <ProgressChart points={bodyPoints} />
        </ChartSection>
      </div>
    </div>
  )
}

function ReportCard({
  title,
  icon: Icon,
  report,
  unit,
  color,
  bg,
}: {
  title: string
  icon: typeof Calendar
  report: { workouts: number; totalVolumeKg: number; prCount: number }
  unit: Unit
  color: string
  bg: string
}) {
  return (
    <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          {title}
        </span>
        <div className={`flex size-8 items-center justify-center rounded-xl ${bg} ${color}`}>
          <Icon className="size-4" />
        </div>
      </div>

      <div className="mt-4 flex items-baseline gap-2">
        <span className="font-mono text-3xl font-black tracking-tight text-foreground tabular-nums">
          {report.workouts}
        </span>
        <span className="text-xs font-semibold uppercase text-muted-foreground">
          Workouts
        </span>
      </div>

      <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
        <span>{toDisplay(report.totalVolumeKg, unit)} {unit} volume</span>
        <span>·</span>
        <span className="text-primary font-semibold">{report.prCount} PRs</span>
      </div>
    </div>
  )
}

function ChartSection({
  title,
  icon: Icon,
  headerRight,
  children,
}: {
  title: string
  icon: typeof Dumbbell
  headerRight?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <section className="flex w-full min-w-0 flex-col gap-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <Icon className="size-4 shrink-0 text-primary" />
          <h2 className="truncate text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground">
            {title}
          </h2>
        </div>
        {headerRight}
      </div>
      {children}
    </section>
  )
}
