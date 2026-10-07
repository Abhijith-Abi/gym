import { z } from 'zod'
import { dayOfWeekSchema, sessionStatusSchema } from './enums'

/** SetLog Zod schema with the exactly-one-of XOR refinement (C.3/C.13). */
export const setLogSchema = z
  .object({
    id: z.string().min(1),
    exerciseSessionId: z.string().min(1),
    setIndex: z.number().int().min(0),
    targetReps: z.number().int().min(0).max(1000).optional(),
    actualReps: z.number().int().min(0).max(1000).optional(),
    durationSeconds: z.number().int().min(0).max(86400).optional(),
    weightKg: z.number().min(0).max(2000),
    rpe: z.number().min(1).max(10).optional(),
    rir: z.number().min(0).max(10).optional(),
    tempo: z.string().max(20).optional(),
    restSeconds: z.number().int().min(0).max(86400).optional(),
    isWarmup: z.boolean(),
    isCompleted: z.boolean(),
    completedAt: z.date(),
    isPr: z
      .object({
        weight: z.boolean().optional(),
        reps: z.boolean().optional(),
        volume: z.boolean().optional(),
        e1rm: z.boolean().optional(),
      })
      .optional(),
    sessionCompleted: z.boolean(),
  })
  .refine(
    (d) => (d.actualReps !== undefined) !== (d.durationSeconds !== undefined),
    {
      message: 'Exactly one of actualReps or durationSeconds must be present.',
      path: ['actualReps'],
    },
  )

export const exerciseSetSchema = z.object({
  targetSets: z.number().int().min(1),
  targetRepMin: z.number().int().min(0),
  targetRepMax: z.number().int().min(0),
  targetRpe: z.number().min(1).max(10).optional(),
  restSeconds: z.number().int().min(0).max(86400),
  tempo: z.string().max(20).optional(),
  note: z.string().max(500).optional(),
})

export const exerciseSessionSchema = z.object({
  id: z.string().min(1),
  sessionId: z.string().min(1),
  exerciseId: z.string().min(1),
  order: z.number().int().min(0),
  supersetGroup: z.string().optional(),
  circuitGroup: z.string().optional(),
  targetPrescription: exerciseSetSchema,
  notes: z.string().max(1000).optional(),
  sessionCompleted: z.boolean(),
})

export const workoutSessionSchema = z.object({
  id: z.string().min(1),
  uid: z.string().min(1),
  dayId: dayOfWeekSchema,
  workoutName: z.string().min(1).max(120),
  status: sessionStatusSchema,
  startedAt: z.date().optional(),
  completedAt: z.date().optional(),
  durationSeconds: z.number().int().min(0),
  totalSets: z.number().int().min(0),
  completedSets: z.number().int().min(0),
  totalVolumeKg: z.number().min(0),
  notes: z.string().max(2000).optional(),
  mood: z.number().int().min(1).max(5).optional(),
  energy: z.number().int().min(1).max(5).optional(),
  soreness: z.number().int().min(1).max(5).optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  planId: z.string().min(1),
  deviceId: z.string().min(1),
  schemaVersion: z.number().int().min(0),
  summaryApplied: z.boolean(),
})
