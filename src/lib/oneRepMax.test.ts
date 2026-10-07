import { describe, expect, it } from 'vitest'
import { epley1RM } from './oneRepMax'

describe('epley1RM', () => {
  it('returns the weight unchanged at 1 rep', () => {
    expect(epley1RM(100, 1)).toBeCloseTo(100, 10)
  })

  it('equals weightKg * (1 + reps/30) within floating-point tolerance for reps>1 (AC-8)', () => {
    const cases: Array<[number, number]> = [
      [100, 5],
      [60, 8],
      [142.5, 3],
      [0, 10],
      [20, 20],
    ]
    for (const [w, r] of cases) {
      expect(epley1RM(w, r)).toBeCloseTo(w * (1 + r / 30), 10)
    }
  })

  it('is monotonic in reps for a fixed load', () => {
    expect(epley1RM(100, 10)).toBeGreaterThan(epley1RM(100, 5))
  })
})
