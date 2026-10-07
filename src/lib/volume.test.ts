import { describe, expect, it } from 'vitest'
import {
  changePct,
  emptyMuscleVolume,
  rollupMuscleVolume,
  setVolumeKg,
  totalVolumeKg,
} from './volume'

describe('volume', () => {
  it('set volume is weightKg * reps', () => {
    expect(setVolumeKg({ weightKg: 100, actualReps: 5 })).toBe(500)
  })

  it('a duration set with no actualReps contributes zero mechanical volume', () => {
    expect(setVolumeKg({ weightKg: 0, actualReps: undefined })).toBe(0)
    expect(setVolumeKg({ weightKg: 50, actualReps: undefined })).toBe(0)
  })

  it('totals volume across sets, excluding duration sets', () => {
    const sets = [
      { weightKg: 100, actualReps: 5 },
      { weightKg: 60, actualReps: 10 },
      { weightKg: 0, actualReps: undefined },
    ]
    expect(totalVolumeKg(sets)).toBe(500 + 600)
  })

  it('empty muscle volume has every group zeroed', () => {
    const mv = emptyMuscleVolume()
    expect(mv.chest).toBe(0)
    expect(mv.fullbody).toBe(0)
    expect(Object.values(mv).every((v) => v === 0)).toBe(true)
  })

  it('rolls up volume onto each primary muscle', () => {
    const mv = rollupMuscleVolume([
      { set: { weightKg: 100, actualReps: 5 }, primaryMuscles: ['chest', 'triceps'] },
      { set: { weightKg: 0, actualReps: undefined }, primaryMuscles: ['core'] },
    ])
    expect(mv.chest).toBe(500)
    expect(mv.triceps).toBe(500)
    expect(mv.core).toBe(0)
  })

  it('computes percent change and guards a zero baseline', () => {
    expect(changePct(100, 150)).toBeCloseTo(50)
    expect(changePct(200, 100)).toBeCloseTo(-50)
    expect(changePct(0, 100)).toBe(0)
  })
})
