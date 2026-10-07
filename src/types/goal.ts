export type GoalKind = 'strength' | 'bodyweight' | 'custom'
export type GoalStatus = 'active' | 'achieved' | 'archived'

/**
 * goals/{id} (C.3).
 * Named GoalRecord (not Goal) because the profile-goal union is also called
 * `Goal` in the design; a project can export only one `Goal`.
 */
export interface GoalRecord {
  id: string
  uid: string
  kind: GoalKind
  title: string
  exerciseId?: string
  targetValue: number
  currentValue: number
  unit: string
  startValue: number
  dueDate?: Date
  status: GoalStatus
  createdAt: Date
}

/** The 8 achievement keys (FR-32). */
export type AchievementKey =
  | 'first_workout'
  | 'workouts_10'
  | 'workouts_50'
  | 'workouts_100'
  | 'streak_10'
  | 'streak_30'
  | 'first_pr'
  | 'prs_10'
  | 'volume_100000kg'

/** achievements/{id} where id = achievement key (C.4). */
export interface Achievement {
  id: string
  uid: string
  key: AchievementKey
  unlockedAt: Date
  meta?: Record<string, number | string | boolean>
}

export type NoteScope = 'session' | 'exercise' | 'general'

/** notes/{id} (C.3). */
export interface WorkoutNote {
  id: string
  uid: string
  scope: NoteScope
  refId?: string
  body: string
  createdAt: Date
}
