import { describe, expect, it } from 'vitest'
import {
  buildMonthCalendar,
  classifyCalendarDay,
  computeStreak,
  dayKey,
} from './consistency'
import type { PlanDay, WorkoutPlan, WorkoutSession } from '@/types'

function session(partial: Partial<WorkoutSession>): WorkoutSession {
  return {
    id: partial.id ?? 'sess',
    uid: 'u1',
    dayId: 'mon',
    workoutName: 'Test',
    status: partial.status ?? 'COMPLETED',
    startedAt: partial.startedAt,
    completedAt: partial.completedAt,
    durationSeconds: 0,
    totalSets: partial.totalSets ?? 0,
    completedSets: partial.completedSets ?? 0,
    totalVolumeKg: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    planId: 'plan',
    deviceId: 'd1',
    schemaVersion: 1,
    summaryApplied: false,
    ...partial,
  }
}

/** Plan where only Sunday is a rest day (matches the C.3 seed). */
function planSundayRest(): WorkoutPlan {
  const day = (dayId: PlanDay['dayId'], isRest: boolean): PlanDay => ({
    dayId,
    workoutName: isRest ? 'Rest' : 'Train',
    isRest,
    entries: [],
  })
  return {
    id: 'plan',
    uid: 'u1',
    name: 'Seed',
    isTemplate: true,
    days: {
      mon: day('mon', false),
      tue: day('tue', false),
      wed: day('wed', false),
      thu: day('thu', false),
      fri: day('fri', false),
      sat: day('sat', false),
      sun: day('sun', true),
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}

function at(y: number, m: number, d: number): Date {
  return new Date(y, m - 1, d, 12, 0, 0)
}

describe('computeStreak', () => {
  it('counts consecutive trained days back from today', () => {
    const now = at(2024, 6, 5) // Wed
    const sessions = [
      session({ id: 'a', completedAt: at(2024, 6, 5) }),
      session({ id: 'b', completedAt: at(2024, 6, 4) }),
      session({ id: 'c', completedAt: at(2024, 6, 3) }),
    ]
    expect(computeStreak(sessions, planSundayRest(), now)).toBe(3)
  })

  it('rest day does NOT break the streak', () => {
    // Train Fri+Sat, Sun is a rest day (no workout), train Mon. Count from Mon.
    const now = at(2024, 6, 10) // Monday
    const sessions = [
      session({ id: 'mon', completedAt: at(2024, 6, 10) }), // Mon
      session({ id: 'sat', completedAt: at(2024, 6, 8) }), // Sat
      session({ id: 'fri', completedAt: at(2024, 6, 7) }), // Fri
    ]
    // Sun 2024-06-09 is a rest day with no workout — must not break the streak.
    expect(computeStreak(sessions, planSundayRest(), now)).toBe(3)
  })

  it('a non-rest day with no workout breaks the streak', () => {
    const now = at(2024, 6, 5) // Wed
    const sessions = [
      session({ id: 'wed', completedAt: at(2024, 6, 5) }),
      // Tue (2024-06-04) is a training day with NO workout → break.
      session({ id: 'mon', completedAt: at(2024, 6, 3) }),
    ]
    expect(computeStreak(sessions, planSundayRest(), now)).toBe(1)
  })

  it('tolerates today being empty (counts from the last trained day)', () => {
    const now = at(2024, 6, 5) // Wed, no workout today
    const sessions = [
      session({ id: 'tue', completedAt: at(2024, 6, 4) }),
      session({ id: 'mon', completedAt: at(2024, 6, 3) }),
    ]
    expect(computeStreak(sessions, planSundayRest(), now)).toBe(2)
  })

  it('returns 0 with no completed sessions', () => {
    expect(computeStreak([], planSundayRest(), at(2024, 6, 5))).toBe(0)
  })
})

describe('classifyCalendarDay / buildMonthCalendar', () => {
  it('classifies a fully-completed day as Completed', () => {
    const d = at(2024, 6, 3)
    const s = [
      session({
        id: 'x',
        completedAt: d,
        totalSets: 10,
        completedSets: 10,
      }),
    ]
    expect(classifyCalendarDay(d, s, planSundayRest())).toBe('Completed')
  })

  it('classifies a partially-completed session as Partial', () => {
    const d = at(2024, 6, 3)
    const s = [
      session({
        id: 'x',
        completedAt: d,
        totalSets: 10,
        completedSets: 4,
      }),
    ]
    expect(classifyCalendarDay(d, s, planSundayRest())).toBe('Partial')
  })

  it('classifies a plan rest day with no session as Rest', () => {
    const sunday = at(2024, 6, 9)
    expect(classifyCalendarDay(sunday, [], planSundayRest())).toBe('Rest')
  })

  it('classifies a training day with no session as Planned', () => {
    const monday = at(2024, 6, 3)
    expect(classifyCalendarDay(monday, [], planSundayRest())).toBe('Planned')
  })

  it('builds a full month grid', () => {
    const grid = buildMonthCalendar(2024, 5, [], planSundayRest()) // June
    expect(grid).toHaveLength(30)
    expect(grid[0].dayKey).toBe(dayKey(at(2024, 6, 1)))
  })
})
