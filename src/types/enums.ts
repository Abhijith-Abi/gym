/** Shared union types (C.3). */

export type DayOfWeek = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'

export type Goal =
  | 'muscle_gain'
  | 'strength'
  | 'fat_loss'
  | 'six_pack'
  | 'hardcore'
  | 'arms_focus'
  | 'legs_glutes'
  | 'fitness'
  | 'mobility'
  | 'custom'

export type Experience = 'beginner' | 'intermediate' | 'advanced'

export type Unit = 'kg' | 'lb'

export type SessionStatus =
  | 'NOT_STARTED'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'ABANDONED'

export type RpeMode = 'RPE' | 'RIR' | 'Both' | 'None'

export type MuscleGroup =
  | 'chest'
  | 'back'
  | 'shoulders'
  | 'biceps'
  | 'triceps'
  | 'quads'
  | 'hamstrings'
  | 'glutes'
  | 'calves'
  | 'core'
  | 'forearms'
  | 'fullbody'

export type ExerciseCategory =
  | 'compound'
  | 'isolation'
  | 'cardio'
  | 'hiit'
  | 'mobility'

export type Equipment =
  | 'barbell'
  | 'dumbbell'
  | 'cable'
  | 'machine'
  | 'bodyweight'
  | 'kettlebell'
  | 'band'
  | 'other'

export type ProgressionType =
  | 'INCREASE_WEIGHT'
  | 'INCREASE_REPS'
  | 'MAINTAIN'
  | 'REDUCE_WEIGHT'
  | 'REDUCE_VOLUME'
  | 'DELOAD'
