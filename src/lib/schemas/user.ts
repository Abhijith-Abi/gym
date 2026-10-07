import { z } from 'zod'
import { equipmentSchema, experienceSchema, goalSchema, rpeModeSchema, unitSchema } from './enums'

export const userProfileSchema = z.object({
  uid: z.string().min(1),
  email: z.string().email(),
  displayName: z.string().min(1).max(120),
  photoURL: z.string().url().optional(),
  goal: goalSchema,
  experience: experienceSchema,
  preferredUnit: unitSchema,
  onboardingCompleted: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

const weightStepKgSchema = z.object({
  barbell: z.number().min(0),
  dumbbell: z.number().min(0),
  cable: z.number().min(0),
  machine: z.number().min(0),
  bodyweight: z.number().min(0),
  kettlebell: z.number().min(0),
  band: z.number().min(0),
  other: z.number().min(0),
})

export const progressionConfigSchema = z.object({
  weightStepKg: weightStepKgSchema,
  reduceWeightPct: z.number().min(0).max(1),
  missSessionsBeforeReduce: z.number().int().min(1),
  deloadWeeksFlatE1rm: z.number().int().min(1),
  deloadRecoveryScoreBelow: z.number().min(0).max(100),
  targetRpeDefault: z.number().min(1).max(10),
  targetRirDefault: z.number().min(0).max(10),
})

export const userSettingsSchema = z.object({
  rpeMode: rpeModeSchema,
  restDefaultsSeconds: z.number().int().min(0).max(86400),
  autoStartRest: z.boolean(),
  smartRestEnabled: z.boolean(),
  soundEnabled: z.boolean(),
  hapticsEnabled: z.boolean(),
  hydrationTargetMl: z.number().min(0),
  hydrationEnabled: z.boolean(),
  progressionConfig: progressionConfigSchema,
  reducedMotionOverride: z.boolean().optional(),
  notificationsEnabled: z.boolean(),
  deviceId: z.string().min(1),
})

// equipmentSchema is re-exported for callers composing settings forms.
export { equipmentSchema }
