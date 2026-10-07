import type { DayOfWeek, PlanDay, PlanEntry, WorkoutPlan } from '@/types'

/**
 * The canonical MON–SUN split (design C.3, FR-4). This is the seed template a
 * new user adopts at onboarding. Prescriptions, rep windows, and the
 * perSide / toFailure / durationSeconds / interval flags are encoded exactly as
 * the C.3 table dictates. Every exerciseId resolves to src/data/exercises.ts
 * (asserted by the seed-integrity Vitest).
 */

interface EntrySpec {
  exerciseId: string
  sets: number
  repMin: number
  repMax: number
  restSeconds: number
  perSide?: boolean
  toFailure?: boolean
  durationSeconds?: number
  intervalWorkSeconds?: number
  intervalRestSeconds?: number
  supersetGroup?: string
}

function entry(spec: EntrySpec, order: number): PlanEntry {
  return {
    exerciseId: spec.exerciseId,
    prescription: {
      targetSets: spec.sets,
      targetRepMin: spec.repMin,
      targetRepMax: spec.repMax,
      restSeconds: spec.restSeconds,
    },
    ...(spec.supersetGroup ? { supersetGroup: spec.supersetGroup } : {}),
    ...(spec.intervalWorkSeconds !== undefined
      ? { intervalWorkSeconds: spec.intervalWorkSeconds }
      : {}),
    ...(spec.intervalRestSeconds !== undefined
      ? { intervalRestSeconds: spec.intervalRestSeconds }
      : {}),
    ...(spec.perSide ? { perSide: true } : {}),
    ...(spec.toFailure ? { toFailure: true } : {}),
    ...(spec.durationSeconds !== undefined
      ? { durationSeconds: spec.durationSeconds }
      : {}),
    order,
  }
}

function day(
  dayId: DayOfWeek,
  workoutName: string,
  specs: EntrySpec[],
): PlanDay {
  return {
    dayId,
    workoutName,
    isRest: false,
    entries: specs.map((s, i) => entry(s, i)),
  }
}

// MON — Chest & Triceps
const monday = day('mon', 'Chest & Triceps', [
  { exerciseId: 'flat-barbell-bench', sets: 4, repMin: 8, repMax: 10, restSeconds: 150 },
  { exerciseId: 'incline-db-press', sets: 3, repMin: 10, repMax: 12, restSeconds: 120 },
  { exerciseId: 'cable-flyes', sets: 3, repMin: 12, repMax: 15, restSeconds: 90 },
  { exerciseId: 'dips', sets: 3, repMin: 0, repMax: 0, restSeconds: 90, toFailure: true },
  { exerciseId: 'tricep-rope-pushdowns', sets: 3, repMin: 12, repMax: 15, restSeconds: 75 },
  { exerciseId: 'skull-crushers', sets: 3, repMin: 10, repMax: 12, restSeconds: 90 },
])

// TUE — Back & Biceps
const tuesday = day('tue', 'Back & Biceps', [
  { exerciseId: 'deadlift', sets: 4, repMin: 6, repMax: 8, restSeconds: 180 },
  { exerciseId: 'lat-pulldown', sets: 4, repMin: 8, repMax: 10, restSeconds: 120 },
  { exerciseId: 'bent-over-row', sets: 3, repMin: 10, repMax: 12, restSeconds: 120 },
  { exerciseId: 'seated-cable-row', sets: 3, repMin: 12, repMax: 12, restSeconds: 90 },
  { exerciseId: 'barbell-curl', sets: 3, repMin: 10, repMax: 12, restSeconds: 75 },
  { exerciseId: 'hammer-curl', sets: 4, repMin: 12, repMax: 12, restSeconds: 60 },
])

// WED — Legs & Calves
const wednesday = day('wed', 'Legs & Calves', [
  { exerciseId: 'back-squat', sets: 4, repMin: 8, repMax: 10, restSeconds: 180 },
  { exerciseId: 'leg-press', sets: 3, repMin: 10, repMax: 12, restSeconds: 150 },
  { exerciseId: 'romanian-deadlift', sets: 3, repMin: 10, repMax: 12, restSeconds: 120 },
  { exerciseId: 'walking-lunge', sets: 3, repMin: 12, repMax: 12, restSeconds: 90, perSide: true },
  { exerciseId: 'standing-calf-raise', sets: 4, repMin: 15, repMax: 20, restSeconds: 60 },
])

// THU — Shoulders & Abs
const thursday = day('thu', 'Shoulders & Abs', [
  { exerciseId: 'overhead-press', sets: 4, repMin: 8, repMax: 10, restSeconds: 150 },
  { exerciseId: 'lateral-raise', sets: 4, repMin: 12, repMax: 15, restSeconds: 60 },
  { exerciseId: 'face-pull', sets: 3, repMin: 15, repMax: 15, restSeconds: 60 },
  { exerciseId: 'hanging-leg-raise', sets: 3, repMin: 12, repMax: 15, restSeconds: 60 },
  { exerciseId: 'woodchopper', sets: 3, repMin: 12, repMax: 12, restSeconds: 60, perSide: true },
  { exerciseId: 'plank', sets: 3, repMin: 0, repMax: 0, restSeconds: 60, durationSeconds: 60 },
])

// FRI — Arms & Core HIIT (two supersets + core finishers)
const friday = day('fri', 'Arms & Core HIIT', [
  { exerciseId: 'preacher-curl', sets: 3, repMin: 10, repMax: 10, restSeconds: 60, supersetGroup: 'A' },
  { exerciseId: 'overhead-tricep-ext', sets: 3, repMin: 10, repMax: 10, restSeconds: 60, supersetGroup: 'A' },
  { exerciseId: 'incline-db-curl', sets: 3, repMin: 12, repMax: 12, restSeconds: 60, supersetGroup: 'B' },
  { exerciseId: 'tricep-dips', sets: 3, repMin: 12, repMax: 12, restSeconds: 60, supersetGroup: 'B' },
  { exerciseId: 'russian-twist', sets: 3, repMin: 20, repMax: 20, restSeconds: 45 },
  { exerciseId: 'ab-wheel-rollout', sets: 3, repMin: 10, repMax: 12, restSeconds: 45 },
  { exerciseId: 'mountain-climbers', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 45 },
])

// SAT — Full-Body HIIT (interval rounds)
const saturday = day('sat', 'Full-Body HIIT', [
  { exerciseId: 'burpees', sets: 4, repMin: 15, repMax: 15, restSeconds: 60 },
  { exerciseId: 'kb-swing', sets: 4, repMin: 20, repMax: 20, restSeconds: 60 },
  { exerciseId: 'box-jump', sets: 4, repMin: 12, repMax: 12, restSeconds: 60 },
  {
    exerciseId: 'battle-ropes',
    sets: 4,
    repMin: 0,
    repMax: 0,
    restSeconds: 30,
    intervalWorkSeconds: 30,
    intervalRestSeconds: 30,
  },
])

// SUN — Rest / active recovery
const sunday: PlanDay = {
  dayId: 'sun',
  workoutName: 'Rest / Active Recovery',
  isRest: true,
  entries: [],
}

const days: Record<DayOfWeek, PlanDay> = {
  mon: monday,
  tue: tuesday,
  wed: wednesday,
  thu: thursday,
  fri: friday,
  sat: saturday,
  sun: sunday,
}

export const DEFAULT_PLAN_ID = 'default-split'

/**
 * Build the seed plan for a specific user (used at onboarding / plan reset).
 * The plan is a template; progression never mutates it (FR-9).
 */
export function createDefaultPlan(uid: string): WorkoutPlan {
  const now = new Date()
  return {
    id: DEFAULT_PLAN_ID,
    uid,
    name: 'ForgeFit Weekly Split',
    isTemplate: true,
    days,
    createdAt: now,
    updatedAt: now,
  }
}

/** The raw day map, for non-interactive seed rendering (RSC). */
export const SEED_PLAN_DAYS = days
