import type { AchievementKey } from '@/types'

/**
 * Achievement definitions (FR-32). The `metric`/`threshold` pair drives the
 * unlock check; `achievements/{key}` docs are created idempotently on unlock.
 *
 * NOTE: FR-32 lists First Workout; 10/50/100 Workouts; 10/30-Day Streak; First
 * PR; 10 PRs; 100,000 kg Total Volume — nine milestones. The design prose says
 * "the 8 achievement keys" while the AchievementKey union (src/types/goal.ts)
 * enumerates all nine; we encode all nine here to match the type and FR-32.
 */
export type AchievementMetric =
  | 'workouts'
  | 'streakDays'
  | 'prCount'
  | 'totalVolumeKg'

export interface AchievementDef {
  key: AchievementKey
  title: string
  description: string
  metric: AchievementMetric
  threshold: number
}

export const ACHIEVEMENTS: AchievementDef[] = [
  {
    key: 'first_workout',
    title: 'First Workout',
    description: 'Complete your very first workout.',
    metric: 'workouts',
    threshold: 1,
  },
  {
    key: 'workouts_10',
    title: '10 Workouts',
    description: 'Complete 10 workouts.',
    metric: 'workouts',
    threshold: 10,
  },
  {
    key: 'workouts_50',
    title: '50 Workouts',
    description: 'Complete 50 workouts.',
    metric: 'workouts',
    threshold: 50,
  },
  {
    key: 'workouts_100',
    title: '100 Workouts',
    description: 'Complete 100 workouts.',
    metric: 'workouts',
    threshold: 100,
  },
  {
    key: 'streak_10',
    title: '10-Day Streak',
    description: 'Keep a 10-day training streak.',
    metric: 'streakDays',
    threshold: 10,
  },
  {
    key: 'streak_30',
    title: '30-Day Streak',
    description: 'Keep a 30-day training streak.',
    metric: 'streakDays',
    threshold: 30,
  },
  {
    key: 'first_pr',
    title: 'First PR',
    description: 'Set your first personal record.',
    metric: 'prCount',
    threshold: 1,
  },
  {
    key: 'prs_10',
    title: '10 PRs',
    description: 'Set 10 personal records.',
    metric: 'prCount',
    threshold: 10,
  },
  {
    key: 'volume_100000kg',
    title: '100,000 kg Lifted',
    description: 'Accumulate 100,000 kg of total volume.',
    metric: 'totalVolumeKg',
    threshold: 100_000,
  },
]

export const ACHIEVEMENTS_BY_KEY: Readonly<Record<AchievementKey, AchievementDef>> =
  Object.fromEntries(ACHIEVEMENTS.map((a) => [a.key, a])) as Record<
    AchievementKey,
    AchievementDef
  >
