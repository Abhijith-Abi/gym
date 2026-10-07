import type { Experience, Goal, RpeMode, Unit } from './enums'
import type { Equipment } from './enums'

/**
 * Single authoritative profile stored at users/{uid}/profile/data (C.2).
 * preferredUnit lives ONLY here, never duplicated into UserSettings.
 */
export interface UserProfile {
  uid: string
  email: string
  displayName: string
  photoURL?: string
  goal: Goal
  experience: Experience
  preferredUnit: Unit
  onboardingCompleted: boolean
  createdAt: Date
  updatedAt: Date
}

/** Per-equipment weight increment steps (kg). */
export type WeightStepKg = Record<Equipment, number>

/** Double-progression tuning (C.8). All overridable in settings/preferences. */
export interface ProgressionConfig {
  weightStepKg: WeightStepKg
  reduceWeightPct: number
  missSessionsBeforeReduce: number
  deloadWeeksFlatE1rm: number
  deloadRecoveryScoreBelow: number
  targetRpeDefault: number
  targetRirDefault: number
}

/**
 * Training/UI preferences stored at users/{uid}/settings/preferences (C.3).
 * NOTE: preferredUnit is intentionally NOT here (it lives on UserProfile).
 */
export interface UserSettings {
  rpeMode: RpeMode
  restDefaultsSeconds: number
  autoStartRest: boolean
  smartRestEnabled: boolean
  soundEnabled: boolean
  hapticsEnabled: boolean
  hydrationTargetMl: number
  hydrationEnabled: boolean
  progressionConfig: ProgressionConfig
  reducedMotionOverride?: boolean
  notificationsEnabled: boolean
  /** Minted once per install, stored in settingsStore (persist); conflict attribution only. */
  deviceId: string
}

/** Root ownership doc users/{uid} — NOT a profile copy (C.2). */
export interface UserRootDoc {
  uid: string
  createdAt: Date
  updatedAt: Date
}
