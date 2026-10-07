import { describe, expect, it } from 'vitest'
import {
  latestVolumeChangePct,
  sessionVolumeSeries,
  totalSeriesVolumeKg,
  weeklyVolumeSeries,
} from './volume'
import { e1rmSeries, isE1rmTrendFlat, rolledSetE1rm } from './strength'
import {
  aggregateMuscleVolume,
  dominantMuscle,
  muscleVolumePoints,
} from './muscleVolume'
import {
  bodyFatSeries,
  bodyWeightSeries,
  monthlyReport,
  trendChangePct,
  weeklyReport,
} from './trends'
import { rangeStart, withinRange } from './range'
import { emptyMuscleVolume } from '@/lib/volume'
import type {
  BodyMeasurement,
  ExerciseHistory,
  MonthlySummary,
  WeeklySummary,
} from '@/types'

const NOW = new Date('2024-06-15T12:00:00Z')

function weekly(partial: Partial<WeeklySummary>): WeeklySummary {
  return {
    uid: 'u1',
    weekId: '2024-W24',
    workouts: 0,
    totalVolumeKg: 0,
    volumeByMuscle: emptyMuscleVolume(),
    prCount: 0,
    streakDays: 0,
    updatedAt: NOW,
    ...partial,
  }
}

describe('range', () => {
  it('rangeStart ALL returns null', () => {
    expect(rangeStart('ALL', NOW)).toBeNull()
  })
  it('withinRange filters out items older than the window', () => {
    const items = [
      { d: new Date('2024-06-14T00:00:00Z') },
      { d: new Date('2024-01-01T00:00:00Z') },
    ]
    const kept = withinRange(items, (x) => x.d, '7D', NOW)
    expect(kept).toHaveLength(1)
  })
})

describe('volume transforms', () => {
  it('weeklyVolumeSeries sorts by weekId and maps totalVolume', () => {
    const data = [
      weekly({ weekId: '2024-W24', totalVolumeKg: 100, updatedAt: NOW }),
      weekly({ weekId: '2024-W23', totalVolumeKg: 80, updatedAt: new Date('2024-06-10T00:00:00Z') }),
    ]
    const series = weeklyVolumeSeries(data, 'ALL', NOW)
    expect(series.map((p) => p.label)).toEqual(['2024-W23', '2024-W24'])
    expect(series.map((p) => p.volumeKg)).toEqual([80, 100])
  })

  it('totalSeriesVolumeKg sums points', () => {
    expect(
      totalSeriesVolumeKg([
        { label: 'a', volumeKg: 10 },
        { label: 'b', volumeKg: 15 },
      ]),
    ).toBe(25)
  })

  it('latestVolumeChangePct compares last two points', () => {
    expect(
      latestVolumeChangePct([
        { label: 'a', volumeKg: 100 },
        { label: 'b', volumeKg: 110 },
      ]),
    ).toBeCloseTo(10, 5)
  })

  it('sessionVolumeSeries keeps completed sessions oldest-first', () => {
    const series = sessionVolumeSeries(
      [
        {
          id: 's1',
          uid: 'u1',
          dayId: 'mon',
          workoutName: 'A',
          status: 'COMPLETED',
          completedAt: new Date('2024-06-14T00:00:00Z'),
          durationSeconds: 0,
          totalSets: 0,
          completedSets: 0,
          totalVolumeKg: 200,
          createdAt: NOW,
          updatedAt: NOW,
          planId: 'p',
          deviceId: 'd',
          schemaVersion: 1,
          summaryApplied: false,
        },
      ],
      '30D',
      NOW,
    )
    expect(series).toHaveLength(1)
    expect(series[0].volumeKg).toBe(200)
  })
})

describe('strength transforms', () => {
  function history(points: Array<{ d: string; w: number; r: number }>): ExerciseHistory {
    return {
      exerciseId: 'squat',
      uid: 'u1',
      lastPerformedAt: NOW,
      bestE1rmKg: 0,
      bestWeightKg: 0,
      recentSessions: points.map((p) => ({
        sessionId: p.d,
        performedAt: new Date(p.d),
        weightKg: p.w,
        reps: p.r,
      })),
    }
  }

  it('rolledSetE1rm uses Epley when no stored e1rm', () => {
    expect(
      rolledSetE1rm({
        sessionId: 's',
        performedAt: NOW,
        weightKg: 100,
        reps: 5,
      }),
    ).toBeCloseTo(100 * (1 + 5 / 30), 5)
  })

  it('e1rmSeries produces an oldest-first series', () => {
    const series = e1rmSeries(
      history([
        { d: '2024-06-01T00:00:00Z', w: 100, r: 5 },
        { d: '2024-06-10T00:00:00Z', w: 105, r: 5 },
      ]),
      'ALL',
      NOW,
    )
    expect(series).toHaveLength(2)
    expect(series[1].e1rmKg).toBeGreaterThan(series[0].e1rmKg)
  })

  it('isE1rmTrendFlat detects a non-improving trend', () => {
    const flat = e1rmSeries(
      history([
        { d: '2024-06-01T00:00:00Z', w: 100, r: 5 },
        { d: '2024-06-05T00:00:00Z', w: 100, r: 5 },
        { d: '2024-06-10T00:00:00Z', w: 98, r: 5 },
      ]),
      'ALL',
      NOW,
    )
    expect(isE1rmTrendFlat(flat)).toBe(true)
  })

  it('isE1rmTrendFlat is false for a rising trend', () => {
    const rising = e1rmSeries(
      history([
        { d: '2024-06-01T00:00:00Z', w: 90, r: 5 },
        { d: '2024-06-05T00:00:00Z', w: 100, r: 5 },
        { d: '2024-06-10T00:00:00Z', w: 110, r: 5 },
      ]),
      'ALL',
      NOW,
    )
    expect(isE1rmTrendFlat(rising)).toBe(false)
  })
})

describe('muscle-volume transforms', () => {
  it('aggregates per-muscle volume across summaries', () => {
    const v1 = emptyMuscleVolume()
    v1.chest = 100
    v1.back = 50
    const v2 = emptyMuscleVolume()
    v2.chest = 20
    const agg = aggregateMuscleVolume(
      [weekly({ volumeByMuscle: v1 }), weekly({ volumeByMuscle: v2 })],
      'ALL',
      NOW,
    )
    expect(agg.chest).toBe(120)
    expect(agg.back).toBe(50)
  })

  it('muscleVolumePoints drops zeros and sorts desc', () => {
    const v = emptyMuscleVolume()
    v.chest = 100
    v.back = 150
    const points = muscleVolumePoints(v)
    expect(points[0].muscle).toBe('back')
    expect(points.every((p) => p.volumeKg > 0)).toBe(true)
  })

  it('dominantMuscle returns the top muscle or null', () => {
    expect(dominantMuscle(emptyMuscleVolume())).toBeNull()
    const v = emptyMuscleVolume()
    v.quads = 300
    expect(dominantMuscle(v)).toBe('quads')
  })
})

describe('trend transforms', () => {
  function bm(date: string, weightKg?: number, bodyFatPct?: number): BodyMeasurement {
    return {
      id: date,
      uid: 'u1',
      date: new Date(date),
      ...(weightKg !== undefined ? { weightKg } : {}),
      ...(bodyFatPct !== undefined ? { bodyFatPct } : {}),
      measurements: {},
    }
  }

  it('bodyWeightSeries filters to those with weight, oldest-first', () => {
    const series = bodyWeightSeries(
      [bm('2024-06-10T00:00:00Z', 80), bm('2024-06-01T00:00:00Z', 82), bm('2024-06-05T00:00:00Z')],
      'ALL',
      NOW,
    )
    expect(series.map((p) => p.value)).toEqual([82, 80])
  })

  it('bodyFatSeries filters to those with bodyFatPct', () => {
    const series = bodyFatSeries(
      [bm('2024-06-01T00:00:00Z', 80, 20), bm('2024-06-05T00:00:00Z', 80)],
      'ALL',
      NOW,
    )
    expect(series).toHaveLength(1)
  })

  it('weeklyReport / monthlyReport read summary fields with zero fallback', () => {
    expect(weeklyReport(null)).toEqual({ workouts: 0, totalVolumeKg: 0, prCount: 0 })
    const m: MonthlySummary = {
      uid: 'u1',
      monthId: '2024-06',
      workouts: 12,
      totalVolumeKg: 5000,
      volumeByMuscle: emptyMuscleVolume(),
      prCount: 3,
      updatedAt: NOW,
    }
    expect(monthlyReport(m)).toEqual({ workouts: 12, totalVolumeKg: 5000, prCount: 3 })
  })

  it('trendChangePct computes first→last percent change', () => {
    expect(
      trendChangePct([
        { label: 'a', value: 100 },
        { label: 'b', value: 90 },
      ]),
    ).toBeCloseTo(-10, 5)
  })
})
