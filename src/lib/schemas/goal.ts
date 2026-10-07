import { z } from 'zod'

export const goalSchemaZ = z.object({
  id: z.string().min(1),
  uid: z.string().min(1),
  kind: z.enum(['strength', 'bodyweight', 'custom']),
  title: z.string().min(1).max(120),
  exerciseId: z.string().optional(),
  targetValue: z.number(),
  currentValue: z.number(),
  unit: z.string().max(10),
  startValue: z.number(),
  dueDate: z.date().optional(),
  status: z.enum(['active', 'achieved', 'archived']),
  createdAt: z.date(),
})

export const achievementKeySchema = z.enum([
  'first_workout',
  'workouts_10',
  'workouts_50',
  'workouts_100',
  'streak_10',
  'streak_30',
  'first_pr',
  'prs_10',
  'volume_100000kg',
])

export const achievementSchema = z.object({
  id: z.string().min(1),
  uid: z.string().min(1),
  key: achievementKeySchema,
  unlockedAt: z.date(),
  meta: z.record(z.string(), z.union([z.number(), z.string(), z.boolean()])).optional(),
})

export const workoutNoteSchema = z.object({
  id: z.string().min(1),
  uid: z.string().min(1),
  scope: z.enum(['session', 'exercise', 'general']),
  refId: z.string().optional(),
  body: z.string().min(1).max(5000),
  createdAt: z.date(),
})
