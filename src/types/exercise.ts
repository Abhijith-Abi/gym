import type {
  DayOfWeek,
  Equipment,
  ExerciseCategory,
  Experience,
  MuscleGroup,
} from './enums'

/** Library item (src/data/exercises.ts). */
export interface Exercise {
  id: string
  name: string
  primaryMuscles: MuscleGroup[]
  secondaryMuscles: MuscleGroup[]
  equipment: Equipment
  category: ExerciseCategory
  difficulty: Experience
  instructions: string[]
  tips: string[]
  /** exerciseIds of alternatives/substitutions. */
  alternatives: string[]
  isCustom: boolean
  /** present only for custom exercises. */
  uid?: string
  createdAt?: Date
}

/** Plan prescription for an exercise within a PlanEntry. */
export interface ExerciseSet {
  targetSets: number
  targetRepMin: number
  targetRepMax: number
  targetRpe?: number
  restSeconds: number
  tempo?: string
  note?: string
}

/** One prescribed exercise slot within a PlanDay. */
export interface PlanEntry {
  exerciseId: string
  prescription: ExerciseSet
  supersetGroup?: string
  circuitGroup?: string
  /** Battle Ropes-style rounds. */
  intervalWorkSeconds?: number
  intervalRestSeconds?: number
  /** encodes "×/leg" / "×/side". */
  perSide?: boolean
  /** encodes "×failure". */
  toFailure?: boolean
  /** encodes timed holds (e.g. plank 60s). */
  durationSeconds?: number
  order: number
}

export interface PlanDay {
  dayId: DayOfWeek
  workoutName: string
  isRest: boolean
  entries: PlanEntry[]
}

export interface WorkoutPlan {
  id: string
  uid: string
  name: string
  isTemplate: boolean
  days: Record<DayOfWeek, PlanDay>
  createdAt: Date
  updatedAt: Date
}
