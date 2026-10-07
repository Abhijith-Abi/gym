import { describe, expect, it } from 'vitest'
import type { DayOfWeek } from '@/types'
import { EXERCISES_BY_ID } from './exercises'
import { SEED_PLAN_DAYS, createDefaultPlan } from './workoutPlan'

const ALL_DAYS: DayOfWeek[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

/** Seed-plan integrity (FEAT-002 AC): 7 days, Sunday rest, real exercise ids. */
describe('seed MON–SUN plan integrity', () => {
  it('has all seven days keyed mon..sun', () => {
    for (const day of ALL_DAYS) {
      expect(SEED_PLAN_DAYS[day]).toBeDefined()
      expect(SEED_PLAN_DAYS[day].dayId).toBe(day)
    }
    expect(Object.keys(SEED_PLAN_DAYS).sort()).toEqual([...ALL_DAYS].sort())
  })

  it('marks Sunday as a rest day with no entries', () => {
    expect(SEED_PLAN_DAYS.sun.isRest).toBe(true)
    expect(SEED_PLAN_DAYS.sun.entries).toHaveLength(0)
  })

  it('marks the six training days as non-rest with entries', () => {
    for (const day of ALL_DAYS.filter((d) => d !== 'sun')) {
      expect(SEED_PLAN_DAYS[day].isRest).toBe(false)
      expect(SEED_PLAN_DAYS[day].entries.length).toBeGreaterThan(0)
    }
  })

  it('every PlanEntry references a real exercise id in exercises.ts', () => {
    for (const day of ALL_DAYS) {
      for (const entry of SEED_PLAN_DAYS[day].entries) {
        expect(
          EXERCISES_BY_ID[entry.exerciseId],
          `${day} references unknown exercise "${entry.exerciseId}"`,
        ).toBeDefined()
      }
    }
  })

  it('encodes the C.3 interval / perSide / duration / superset flags', () => {
    const battleRopes = SEED_PLAN_DAYS.sat.entries.find(
      (e) => e.exerciseId === 'battle-ropes',
    )
    expect(battleRopes?.intervalWorkSeconds).toBe(30)
    expect(battleRopes?.intervalRestSeconds).toBe(30)

    const lunge = SEED_PLAN_DAYS.wed.entries.find(
      (e) => e.exerciseId === 'walking-lunge',
    )
    expect(lunge?.perSide).toBe(true)

    const plank = SEED_PLAN_DAYS.thu.entries.find((e) => e.exerciseId === 'plank')
    expect(plank?.durationSeconds).toBe(60)

    const dips = SEED_PLAN_DAYS.mon.entries.find((e) => e.exerciseId === 'dips')
    expect(dips?.toFailure).toBe(true)

    const supersetA = SEED_PLAN_DAYS.fri.entries.filter(
      (e) => e.supersetGroup === 'A',
    )
    expect(supersetA).toHaveLength(2)
  })

  it('createDefaultPlan stamps the uid and keeps all seven days', () => {
    const plan = createDefaultPlan('user-123')
    expect(plan.uid).toBe('user-123')
    expect(plan.isTemplate).toBe(true)
    expect(Object.keys(plan.days).sort()).toEqual([...ALL_DAYS].sort())
  })
})
