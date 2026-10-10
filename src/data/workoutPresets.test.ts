import { describe, expect, it } from 'vitest'
import type { DayOfWeek } from '@/types'
import { EXERCISES_BY_ID } from './exercises'
import { WORKOUT_PRESETS } from './workoutPresets'
import { normalizePlanDays } from '@/store/workoutStore'
import { createDefaultPlan } from './workoutPlan'

const ALL_DAYS: DayOfWeek[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const TRAIN_DAYS: DayOfWeek[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat']

describe('WORKOUT_PRESETS Monday-to-Saturday training split', () => {
  it('every preset has 7 days defined with correct dayIds', () => {
    for (const preset of WORKOUT_PRESETS) {
      for (const day of ALL_DAYS) {
        expect(preset.days[day], `${preset.id} missing ${day}`).toBeDefined()
        expect(preset.days[day].dayId).toBe(day)
      }
    }
  })

  it('every preset has Monday through Saturday as training days (isRest: false, entries > 0)', () => {
    for (const preset of WORKOUT_PRESETS) {
      expect(preset.daysCount).toBe(6)
      for (const day of TRAIN_DAYS) {
        const planDay = preset.days[day]
        expect(
          planDay.isRest,
          `${preset.id} ${day} should be a training day, got isRest=true`,
        ).toBe(false)
        expect(
          planDay.entries.length,
          `${preset.id} ${day} should have exercises`,
        ).toBeGreaterThan(0)
      }
    }
  })

  it('every preset has ONLY Sunday as a rest day (isRest: true, entries === 0)', () => {
    for (const preset of WORKOUT_PRESETS) {
      const sunday = preset.days.sun
      expect(sunday.isRest, `${preset.id} Sunday must be rest`).toBe(true)
      expect(sunday.entries).toHaveLength(0)
    }
  })

  it('every exerciseId in every preset resolves to an existing exercise in EXERCISES_BY_ID', () => {
    for (const preset of WORKOUT_PRESETS) {
      for (const day of TRAIN_DAYS) {
        for (const entry of preset.days[day].entries) {
          expect(
            EXERCISES_BY_ID[entry.exerciseId],
            `${preset.id} ${day} references unknown exerciseId: "${entry.exerciseId}"`,
          ).toBeDefined()
        }
      }
    }
  })
})

describe('normalizePlanDays repair functionality', () => {
  it('converts any weekday or Saturday marked as rest into an active training day', () => {
    const rawPlan = createDefaultPlan('user-test')
    // Simulate legacy cached plan where Saturday was rest
    rawPlan.days.sat = {
      dayId: 'sat',
      workoutName: 'Rest Day',
      isRest: true,
      entries: [],
    }
    expect(rawPlan.days.sat.isRest).toBe(true)

    const normalized = normalizePlanDays(rawPlan)
    expect(normalized.days.sat.isRest).toBe(false)
    expect(normalized.days.sat.entries.length).toBeGreaterThan(0)
    expect(normalized.days.sun.isRest).toBe(true)
  })

  it('guarantees Sunday is always marked as rest even if corrupted', () => {
    const rawPlan = createDefaultPlan('user-test')
    rawPlan.days.sun.isRest = false
    const normalized = normalizePlanDays(rawPlan)
    expect(normalized.days.sun.isRest).toBe(true)
    expect(normalized.days.sun.entries).toHaveLength(0)
  })
})
