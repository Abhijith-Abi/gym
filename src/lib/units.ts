import type { Unit } from '@/types'

/** Canonical store is kilograms; display conversion only (FR-21, AC-12). */
export const LB_PER_KG = 2.2046226218

export const KG_PER_LB = 1 / LB_PER_KG

/** Round to a sensible plate increment per unit: 0.5 kg / 1 lb. */
function roundForUnit(value: number, unit: Unit): number {
  const step = unit === 'kg' ? 0.5 : 1
  return Math.round(value / step) * step
}

/**
 * Convert a canonical kilogram value to the user's display unit, rounded to a
 * plate-sensible increment. kg is returned rounded to 0.5, lb to 1.
 */
export function toDisplay(kg: number, unit: Unit): number {
  const raw = unit === 'kg' ? kg : kg * LB_PER_KG
  return roundForUnit(raw, unit)
}

/**
 * Convert a user-entered display value back to canonical kilograms. No rounding
 * is applied to the stored kg value, so a kg round-trip is drift-free (AC-12).
 */
export function fromDisplay(value: number, unit: Unit): number {
  return unit === 'kg' ? value : value * KG_PER_LB
}
