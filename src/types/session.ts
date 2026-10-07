import type { DayOfWeek, SessionStatus } from './enums'
import type { ExerciseSet } from './exercise'

/** Which 1RM/volume dimensions a given SetLog set a new PR on. */
export interface PrFlags {
  weight?: boolean
  reps?: boolean
  volume?: boolean
  e1rm?: boolean
}

/** workoutSessions/{sessionId} (C.3). */
export interface WorkoutSession {
  id: string
  uid: string
  dayId: DayOfWeek
  workoutName: string
  status: SessionStatus
  startedAt?: Date
  completedAt?: Date
  durationSeconds: number
  totalSets: number
  completedSets: number
  totalVolumeKg: number
  notes?: string
  mood?: number
  energy?: number
  soreness?: number
  createdAt: Date
  updatedAt: Date
  planId: string
  /** conflict attribution only. */
  deviceId: string
  /** APP_SCHEMA_VERSION stamped at creation. */
  schemaVersion: number
  /** durable analytics idempotency marker; false→true once in Step 3 (C.7). */
  summaryApplied: boolean
}

/**
 * workoutSessions/{id}/exercises/{id} (C.3).
 * sessionCompleted mirrors parent COMPLETED state; REQUIRED (non-optional) at
 * create time so the rules' create-gate can read it (C.9).
 */
export interface ExerciseSession {
  id: string
  sessionId: string
  exerciseId: string
  order: number
  supersetGroup?: string
  circuitGroup?: string
  targetPrescription: ExerciseSet
  notes?: string
  sessionCompleted: boolean
}

/**
 * .../exercises/{id}/sets/{id} (C.3).
 * Exactly one of actualReps / durationSeconds is present (Zod XOR refinement).
 * sessionCompleted is REQUIRED at create time (same mirror as ExerciseSession).
 */
export interface SetLog {
  id: string
  exerciseSessionId: string
  setIndex: number
  targetReps?: number
  /** omitted for duration-based interval/hold sets. */
  actualReps?: number
  /** for interval rounds and timed holds. */
  durationSeconds?: number
  weightKg: number
  rpe?: number
  rir?: number
  tempo?: string
  restSeconds?: number
  isWarmup: boolean
  isCompleted: boolean
  completedAt: Date
  isPr?: PrFlags
  sessionCompleted: boolean
}
