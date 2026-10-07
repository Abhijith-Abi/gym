import type { GoalRecord } from '@/types'

/**
 * Pure goal-progress helpers (FR-25, design C.16 step 13). A goal tracks
 * startValue → currentValue → targetValue; progress is clamped 0-1 and handles
 * both increasing goals (e.g. squat 1RM up) and decreasing goals (e.g. body-
 * weight down) by comparing against the start.
 */

/** Progress ratio 0-1 for a goal (direction-aware). */
export function goalProgress(goal: Pick<GoalRecord,
  'startValue' | 'currentValue' | 'targetValue'
>): number {
  const span = goal.targetValue - goal.startValue
  if (span === 0) return goal.currentValue >= goal.targetValue ? 1 : 0
  const done = goal.currentValue - goal.startValue
  return clamp01(done / span)
}

/** Whether the current value has reached the target (direction-aware). */
export function isGoalAchieved(goal: Pick<GoalRecord,
  'startValue' | 'currentValue' | 'targetValue'
>): boolean {
  if (goal.targetValue >= goal.startValue) {
    return goal.currentValue >= goal.targetValue
  }
  return goal.currentValue <= goal.targetValue
}

function clamp01(n: number): number {
  if (Number.isNaN(n)) return 0
  return Math.min(1, Math.max(0, n))
}
