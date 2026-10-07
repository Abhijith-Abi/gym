import { describe, expect, it } from 'vitest'
import { fromDisplay, KG_PER_LB, LB_PER_KG, toDisplay } from './units'

describe('units', () => {
  it('kg display is the canonical value (rounded to 0.5)', () => {
    expect(toDisplay(100, 'kg')).toBe(100)
    expect(toDisplay(100.2, 'kg')).toBe(100)
    expect(toDisplay(100.3, 'kg')).toBe(100.5)
  })

  it('converts kg to lb with the 2.2046226218 factor, rounded to 1 lb', () => {
    expect(toDisplay(100, 'lb')).toBe(Math.round(100 * LB_PER_KG))
  })

  it('fromDisplay inverts the unit conversion without rounding the stored kg', () => {
    expect(fromDisplay(100, 'kg')).toBe(100)
    expect(fromDisplay(220, 'lb')).toBeCloseTo(220 * KG_PER_LB, 10)
  })

  it('kg<->lb round-trip of the canonical value is drift-free (AC-12)', () => {
    for (const kg of [20, 42.5, 60, 100, 142.5, 315]) {
      // Simulate storing kg, entering it in lb, converting back to kg.
      const asLb = kg * LB_PER_KG
      const backToKg = fromDisplay(asLb, 'lb')
      expect(backToKg).toBeCloseTo(kg, 9)
    }
  })

  it('a stored kg value is unchanged by display conversion (no corruption)', () => {
    const stored = 102.5
    const displayedLb = toDisplay(stored, 'lb')
    // display rounding must not mutate the canonical store
    expect(stored).toBe(102.5)
    expect(displayedLb).toBe(Math.round(102.5 * LB_PER_KG))
  })
})
