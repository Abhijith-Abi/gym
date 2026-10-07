import { z } from 'zod'

export const bodyMeasurementSchema = z.object({
  id: z.string().min(1),
  uid: z.string().min(1),
  date: z.date(),
  weightKg: z.number().gt(0).max(2000).optional(),
  bodyFatPct: z.number().min(0).max(100).optional(),
  measurements: z.record(z.string(), z.number().gt(0)),
  note: z.string().max(1000).optional(),
})

export const progressPhotoSchema = z.object({
  id: z.string().min(1),
  uid: z.string().min(1),
  date: z.date(),
  storagePath: z.string().min(1),
  thumbPath: z.string().optional(),
  pose: z.string().max(60).optional(),
  note: z.string().max(1000).optional(),
  createdAt: z.date(),
})

export const recoveryLogSchema = z.object({
  uid: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  sleepHours: z.number().min(0).max(24).optional(),
  energy: z.number().int().min(1).max(5),
  stress: z.number().int().min(1).max(5),
  soreness: z.number().int().min(1).max(5),
  motivation: z.number().int().min(1).max(5),
  recoveryScore: z.number().min(0).max(100),
  note: z.string().max(1000).optional(),
  hydrationMl: z.number().int().min(0),
  hydrationTargetMl: z.number().int().min(0),
})
