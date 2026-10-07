/**
 * Estimated 1-rep-max via the Epley formula (FR-13, AC-8).
 *
 *   e1RM = weightKg * (1 + reps / 30)
 *
 * reps === 1 returns weightKg exactly. Pure.
 */
export function epley1RM(weightKg: number, reps: number): number {
  // At a single rep the lift IS the 1RM; the Epley multiplier is only applied
  // for reps > 1 (design C.8: "reps 1 -> returns weight").
  if (reps <= 1) return weightKg
  return weightKg * (1 + reps / 30)
}
