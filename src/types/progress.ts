import type { MuscleGroup, ProgressionType } from './enums'

/** A compacted top-set record kept in ExerciseHistory's bounded ring. */
export interface RolledSet {
  sessionId: string
  performedAt: Date
  weightKg: number
  reps?: number
  durationSeconds?: number
  e1rmKg?: number
  rpe?: number
  rir?: number
}

/** exerciseHistory/{exerciseId} (C.3). */
export interface ExerciseHistory {
  exerciseId: string
  uid: string
  lastPerformedAt: Date
  bestE1rmKg: number
  bestWeightKg: number
  bestRepsAtWeight?: number
  /** bounded ring (e.g. last 10 sessions' top sets). */
  recentSessions: RolledSet[]
}

export type PersonalRecordType = 'weight' | 'reps' | 'volume' | 'e1rm'

/** personalRecords/{recordId} (C.3). */
export interface PersonalRecord {
  id: string
  uid: string
  exerciseId: string
  type: PersonalRecordType
  /** canonical kg for weight/volume/e1rm; raw count for reps. */
  valueKg?: number
  value?: number
  reps?: number
  sessionId: string
  achievedAt: Date
}

/** Pure-lib output; never persisted directly (C.8). */
export interface ProgressionRecommendation {
  type: ProgressionType
  currentWeightKg: number
  recommendedWeightKg: number
  targetRepMin: number
  targetRepMax: number
  /** 0-1. */
  confidence: number
  reason: string
}

export type MuscleVolume = Record<MuscleGroup, number>

/** analyticsWeekly/{weekId} where weekId = yyyy-'W'II (C.4). */
export interface WeeklySummary {
  uid: string
  weekId: string
  workouts: number
  totalVolumeKg: number
  volumeByMuscle: MuscleVolume
  prCount: number
  streakDays: number
  updatedAt: Date
}

/** analyticsMonthly/{monthId} where monthId = yyyy-MM (C.4). */
export interface MonthlySummary {
  uid: string
  monthId: string
  workouts: number
  totalVolumeKg: number
  volumeByMuscle: MuscleVolume
  prCount: number
  bodyWeightStartKg?: number
  bodyWeightEndKg?: number
  updatedAt: Date
}
