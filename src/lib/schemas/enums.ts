import { z } from 'zod'

export const dayOfWeekSchema = z.enum(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'])
export const goalSchema = z.enum([
  'muscle_gain',
  'strength',
  'fat_loss',
  'six_pack',
  'hardcore',
  'arms_focus',
  'legs_glutes',
  'fitness',
  'mobility',
  'custom',
])
export const experienceSchema = z.enum(['beginner', 'intermediate', 'advanced'])
export const unitSchema = z.enum(['kg', 'lb'])
export const sessionStatusSchema = z.enum([
  'NOT_STARTED',
  'IN_PROGRESS',
  'COMPLETED',
  'ABANDONED',
])
export const rpeModeSchema = z.enum(['RPE', 'RIR', 'Both', 'None'])
export const muscleGroupSchema = z.enum([
  'chest',
  'back',
  'shoulders',
  'biceps',
  'triceps',
  'quads',
  'hamstrings',
  'glutes',
  'calves',
  'core',
  'forearms',
  'fullbody',
])
export const exerciseCategorySchema = z.enum([
  'compound',
  'isolation',
  'cardio',
  'hiit',
  'mobility',
])
export const equipmentSchema = z.enum([
  'barbell',
  'dumbbell',
  'cable',
  'machine',
  'bodyweight',
  'kettlebell',
  'band',
  'other',
])
export const progressionTypeSchema = z.enum([
  'INCREASE_WEIGHT',
  'INCREASE_REPS',
  'MAINTAIN',
  'REDUCE_WEIGHT',
  'REDUCE_VOLUME',
  'DELOAD',
])
