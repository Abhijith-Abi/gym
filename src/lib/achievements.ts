import { ACHIEVEMENTS, type AchievementDef } from '@/data/achievements'
import type { Achievement, AchievementKey } from '@/types'

/**
 * Pure achievement-unlock evaluation (FR-32, design C.16 step 13). Given the
 * user's current metric tallies and the set of already-unlocked keys, decide
 * which achievements newly qualify. Unlock docs are keyed by achievement key
 * (`achievements/{key}`), so persistence is idempotent — re-unlocking a key is
 * a harmless overwrite, never a duplicate.
 */

export interface AchievementMetrics {
  workouts: number
  streakDays: number
  prCount: number
  totalVolumeKg: number
}

/** Whether a single definition's threshold is met by the metrics. */
export function isUnlocked(
  def: AchievementDef,
  metrics: AchievementMetrics,
): boolean {
  return metrics[def.metric] >= def.threshold
}

/**
 * Keys that newly qualify: threshold met AND not already in `unlockedKeys`.
 * Deterministic, order follows the ACHIEVEMENTS definition order.
 */
export function newlyUnlockedKeys(
  metrics: AchievementMetrics,
  unlockedKeys: ReadonlySet<AchievementKey>,
): AchievementKey[] {
  return ACHIEVEMENTS.filter(
    (def) => !unlockedKeys.has(def.key) && isUnlocked(def, metrics),
  ).map((def) => def.key)
}

/** Build idempotent Achievement docs (id = key) for newly-unlocked keys. */
export function buildAchievementUnlocks(
  uid: string,
  keys: ReadonlyArray<AchievementKey>,
  unlockedAt: Date,
): Achievement[] {
  return keys.map((key) => ({
    id: key,
    uid,
    key,
    unlockedAt,
  }))
}
