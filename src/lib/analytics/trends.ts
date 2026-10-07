import type { BodyMeasurement, MonthlySummary, WeeklySummary } from '@/types'
import { changePct } from '@/lib/volume'
import { withinRange, type AnalyticsRange } from './range'

/**
 * Generic trend transforms (FR-22/28, design C.16 step 12) used by the body-
 * weight chart and the weekly/monthly report cards. PURE; fed already-fetched
 * summary/body data.
 */

export interface TrendPoint {
  label: string
  value: number
}

/** Body-weight trend from measurements (kg), filtered + oldest first. */
export function bodyWeightSeries(
  measurements: ReadonlyArray<BodyMeasurement>,
  range: AnalyticsRange,
  now: Date,
): TrendPoint[] {
  const withWeight = measurements.filter((m) => m.weightKg !== undefined)
  const inRange = withinRange(withWeight, (m) => m.date, range, now)
  return [...inRange]
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .map((m) => ({ label: isoDay(m.date), value: m.weightKg as number }))
}

/** Body-fat % trend, filtered + oldest first. */
export function bodyFatSeries(
  measurements: ReadonlyArray<BodyMeasurement>,
  range: AnalyticsRange,
  now: Date,
): TrendPoint[] {
  const withBf = measurements.filter((m) => m.bodyFatPct !== undefined)
  const inRange = withinRange(withBf, (m) => m.date, range, now)
  return [...inRange]
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .map((m) => ({ label: isoDay(m.date), value: m.bodyFatPct as number }))
}

export interface ReportSummary {
  workouts: number
  totalVolumeKg: number
  prCount: number
}

/** Collapse a weekly summary doc into a report card payload (FR-28). */
export function weeklyReport(summary: WeeklySummary | null): ReportSummary {
  return {
    workouts: summary?.workouts ?? 0,
    totalVolumeKg: summary?.totalVolumeKg ?? 0,
    prCount: summary?.prCount ?? 0,
  }
}

/** Collapse a monthly summary doc into a report card payload (FR-28). */
export function monthlyReport(summary: MonthlySummary | null): ReportSummary {
  return {
    workouts: summary?.workouts ?? 0,
    totalVolumeKg: summary?.totalVolumeKg ?? 0,
    prCount: summary?.prCount ?? 0,
  }
}

/** First→last percent change of a trend series (0 with <2 points/no baseline). */
export function trendChangePct(points: ReadonlyArray<TrendPoint>): number {
  if (points.length < 2) return 0
  return changePct(points[0].value, points[points.length - 1].value)
}

function isoDay(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}
