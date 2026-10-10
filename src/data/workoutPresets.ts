import type { Goal, PlanDay, PlanEntry } from '@/types'

export interface WorkoutPreset {
  id: string
  title: string
  subtitle: string
  goal: Goal
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  durationMinutes: number
  category: 'strength' | 'fat_loss' | 'core' | 'fitness' | 'mobility' | 'hiit'
  equipment: string
  daysCount: number
  description: string
  tags: string[]
  days: Record<string, PlanDay>
}

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

function makeDay(
  dayId: 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun',
  workoutName: string,
  specs: EntrySpec[],
): PlanDay {
  return {
    dayId,
    workoutName,
    isRest: specs.length === 0,
    entries: specs.map((s, i) => entry(s, i)),
  }
}

export const WORKOUT_PRESETS: WorkoutPreset[] = [
  {
    id: 'ppl-hypertrophy',
    title: 'Push Pull Legs Pro',
    subtitle: 'Classic 6-Day Hypertrophy Split',
    goal: 'muscle_gain',
    difficulty: 'intermediate',
    durationMinutes: 50,
    category: 'strength',
    equipment: 'Full Gym',
    daysCount: 6,
    description:
      'High-yield muscle building split targeting chest, back, shoulders, arms, and legs with optimal weekly frequency.',
    tags: ['Muscle Gain', 'Hypertrophy', '6 Days/Week', 'PPL Split'],
    days: {
      mon: makeDay('mon', 'Push Day (Chest & Triceps)', [
        { exerciseId: 'flat-barbell-bench', sets: 4, repMin: 8, repMax: 10, restSeconds: 120 },
        { exerciseId: 'incline-db-press', sets: 3, repMin: 10, repMax: 12, restSeconds: 90 },
        { exerciseId: 'cable-flyes', sets: 3, repMin: 12, repMax: 15, restSeconds: 75 },
        { exerciseId: 'overhead-press', sets: 3, repMin: 8, repMax: 10, restSeconds: 90 },
        { exerciseId: 'tricep-rope-pushdowns', sets: 3, repMin: 12, repMax: 15, restSeconds: 60 },
      ]),
      tue: makeDay('tue', 'Pull Day (Back & Biceps)', [
        { exerciseId: 'deadlift', sets: 4, repMin: 6, repMax: 8, restSeconds: 150 },
        { exerciseId: 'lat-pulldown', sets: 4, repMin: 8, repMax: 10, restSeconds: 90 },
        { exerciseId: 'bent-over-row', sets: 3, repMin: 10, repMax: 12, restSeconds: 90 },
        { exerciseId: 'face-pull', sets: 3, repMin: 15, repMax: 15, restSeconds: 60 },
        { exerciseId: 'barbell-curl', sets: 3, repMin: 10, repMax: 12, restSeconds: 60 },
        { exerciseId: 'hammer-curl', sets: 3, repMin: 12, repMax: 12, restSeconds: 60 },
      ]),
      wed: makeDay('wed', 'Legs & Calves (Quad Focus)', [
        { exerciseId: 'back-squat', sets: 4, repMin: 8, repMax: 10, restSeconds: 150 },
        { exerciseId: 'leg-press', sets: 3, repMin: 10, repMax: 12, restSeconds: 90 },
        { exerciseId: 'romanian-deadlift', sets: 3, repMin: 10, repMax: 12, restSeconds: 90 },
        { exerciseId: 'standing-calf-raise', sets: 4, repMin: 15, repMax: 20, restSeconds: 60 },
      ]),
      thu: makeDay('thu', 'Upper Body Power', [
        { exerciseId: 'incline-barbell-bench', sets: 4, repMin: 8, repMax: 10, restSeconds: 120 },
        { exerciseId: 'pull-ups', sets: 3, repMin: 6, repMax: 10, restSeconds: 90 },
        { exerciseId: 'dumbbell-row', sets: 3, repMin: 10, repMax: 12, restSeconds: 90 },
        { exerciseId: 'lateral-raise', sets: 4, repMin: 12, repMax: 15, restSeconds: 60 },
        { exerciseId: 'skull-crushers', sets: 3, repMin: 10, repMax: 12, restSeconds: 60 },
      ]),
      fri: makeDay('fri', 'Lower Body & Core', [
        { exerciseId: 'hip-thrust', sets: 4, repMin: 10, repMax: 12, restSeconds: 120 },
        { exerciseId: 'bulgarian-split-squat', sets: 3, repMin: 10, repMax: 12, restSeconds: 90, perSide: true },
        { exerciseId: 'hanging-leg-raise', sets: 3, repMin: 12, repMax: 15, restSeconds: 60 },
        { exerciseId: 'plank', sets: 3, repMin: 0, repMax: 0, restSeconds: 60, durationSeconds: 60 },
      ]),
      sat: makeDay('sat', 'Arms & Core Finisher', [
        { exerciseId: 'barbell-curl', sets: 4, repMin: 10, repMax: 12, restSeconds: 60 },
        { exerciseId: 'skull-crushers', sets: 4, repMin: 10, repMax: 12, restSeconds: 60 },
        { exerciseId: 'hammer-curl', sets: 3, repMin: 12, repMax: 15, restSeconds: 45 },
        { exerciseId: 'tricep-rope-pushdowns', sets: 3, repMin: 12, repMax: 15, restSeconds: 45 },
        { exerciseId: 'cable-crunch', sets: 3, repMin: 15, repMax: 20, restSeconds: 45 },
        { exerciseId: 'plank', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 60 },
      ]),
      sun: makeDay('sun', 'Rest Day', []),
    },
  },
  {
    id: 'fat-loss-conditioning',
    title: 'Fat Loss + Core Conditioning',
    subtitle: 'High Caloric Burn & Total Body Tone',
    goal: 'fat_loss',
    difficulty: 'beginner',
    durationMinutes: 40,
    category: 'fat_loss',
    equipment: 'Dumbbells & Bodyweight',
    daysCount: 6,
    description:
      'Full-body resistance movements paired with core exercises and cardio conditioning to accelerate overall body fat loss safely.',
    tags: ['Fat Loss', 'Metabolic', 'Full Body', '6 Days/Week'],
    days: {
      mon: makeDay('mon', 'Full Body Fat Burn A', [
        { exerciseId: 'goblet-squat', sets: 3, repMin: 12, repMax: 15, restSeconds: 60 },
        { exerciseId: 'push-ups', sets: 3, repMin: 10, repMax: 15, restSeconds: 60 },
        { exerciseId: 'dumbbell-row', sets: 3, repMin: 12, repMax: 12, restSeconds: 60 },
        { exerciseId: 'mountain-climbers', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 45 },
        { exerciseId: 'plank', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 45 },
      ]),
      tue: makeDay('tue', 'Core & Cardio Shred', [
        { exerciseId: 'jumping-jacks', sets: 3, repMin: 25, repMax: 30, restSeconds: 45 },
        { exerciseId: 'bicycle-crunches', sets: 3, repMin: 20, repMax: 20, restSeconds: 45 },
        { exerciseId: 'hanging-leg-raise', sets: 3, repMin: 12, repMax: 15, restSeconds: 45 },
        { exerciseId: 'russian-twist', sets: 3, repMin: 20, repMax: 20, restSeconds: 45 },
        { exerciseId: 'high-knees', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 45 },
      ]),
      wed: makeDay('wed', 'Lower Body Burn & Glutes', [
        { exerciseId: 'goblet-squat', sets: 3, repMin: 12, repMax: 15, restSeconds: 60 },
        { exerciseId: 'walking-lunge', sets: 3, repMin: 12, repMax: 15, restSeconds: 60, perSide: true },
        { exerciseId: 'romanian-deadlift', sets: 3, repMin: 12, repMax: 15, restSeconds: 60 },
        { exerciseId: 'mountain-climbers', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 45 },
        { exerciseId: 'side-plank', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 30 },
      ]),
      thu: makeDay('thu', 'Full Body Fat Burn B', [
        { exerciseId: 'walking-lunge', sets: 3, repMin: 12, repMax: 15, restSeconds: 60, perSide: true },
        { exerciseId: 'incline-db-press', sets: 3, repMin: 12, repMax: 15, restSeconds: 60 },
        { exerciseId: 'lat-pulldown', sets: 3, repMin: 12, repMax: 15, restSeconds: 60 },
        { exerciseId: 'kb-swing', sets: 3, repMin: 20, repMax: 20, restSeconds: 45 },
        { exerciseId: 'side-plank', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 30 },
      ]),
      fri: makeDay('fri', 'Metabolic Finisher & Abs', [
        { exerciseId: 'burpees', sets: 3, repMin: 12, repMax: 15, restSeconds: 60 },
        { exerciseId: 'box-jump', sets: 3, repMin: 12, repMax: 12, restSeconds: 60 },
        { exerciseId: 'cable-crunch', sets: 3, repMin: 15, repMax: 15, restSeconds: 45 },
        { exerciseId: 'plank', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 60 },
      ]),
      sat: makeDay('sat', 'Full-Body HIIT Shred', [
        { exerciseId: 'burpees', sets: 4, repMin: 12, repMax: 15, restSeconds: 60 },
        { exerciseId: 'box-jump', sets: 4, repMin: 12, repMax: 12, restSeconds: 60 },
        { exerciseId: 'kb-swing', sets: 4, repMin: 20, repMax: 20, restSeconds: 45 },
        { exerciseId: 'jumping-jacks', sets: 3, repMin: 30, repMax: 30, restSeconds: 30 },
        { exerciseId: 'bicycle-crunches', sets: 3, repMin: 20, repMax: 20, restSeconds: 45 },
      ]),
      sun: makeDay('sun', 'Rest Day', []),
    },
  },
  {
    id: 'strength-power-3day',
    title: 'Strength & Power (Big 3)',
    subtitle: 'Squat, Bench & Deadlift Focus',
    goal: 'strength',
    difficulty: 'intermediate',
    durationMinutes: 55,
    category: 'strength',
    equipment: 'Barbell & Rack',
    daysCount: 6,
    description:
      'Heavy compound focus engineered around progressive overload on the squat, bench press, overhead press, and deadlift.',
    tags: ['Strength', 'Powerlifting', 'Big 3', '6 Days/Week'],
    days: {
      mon: makeDay('mon', 'Heavy Squat & Bench', [
        { exerciseId: 'back-squat', sets: 5, repMin: 5, repMax: 5, restSeconds: 180 },
        { exerciseId: 'flat-barbell-bench', sets: 5, repMin: 5, repMax: 5, restSeconds: 180 },
        { exerciseId: 'bent-over-row', sets: 4, repMin: 8, repMax: 8, restSeconds: 120 },
        { exerciseId: 'plank', sets: 3, repMin: 0, repMax: 0, restSeconds: 60, durationSeconds: 60 },
      ]),
      tue: makeDay('tue', 'Heavy Back & Pull Strength', [
        { exerciseId: 'deadlift', sets: 4, repMin: 5, repMax: 5, restSeconds: 180 },
        { exerciseId: 'bent-over-row', sets: 4, repMin: 8, repMax: 8, restSeconds: 120 },
        { exerciseId: 'pull-ups', sets: 3, repMin: 6, repMax: 8, restSeconds: 120 },
        { exerciseId: 'barbell-curl', sets: 3, repMin: 10, repMax: 12, restSeconds: 60 },
      ]),
      wed: makeDay('wed', 'Deadlift & Overhead Press', [
        { exerciseId: 'deadlift', sets: 4, repMin: 5, repMax: 5, restSeconds: 180 },
        { exerciseId: 'overhead-press', sets: 4, repMin: 6, repMax: 6, restSeconds: 150 },
        { exerciseId: 'pull-ups', sets: 4, repMin: 6, repMax: 8, restSeconds: 120 },
        { exerciseId: 'farmers-walk', sets: 3, repMin: 0, repMax: 0, restSeconds: 90, durationSeconds: 45 },
      ]),
      thu: makeDay('thu', 'Leg Power & Accessory', [
        { exerciseId: 'leg-press', sets: 4, repMin: 8, repMax: 10, restSeconds: 120 },
        { exerciseId: 'romanian-deadlift', sets: 4, repMin: 8, repMax: 8, restSeconds: 120 },
        { exerciseId: 'walking-lunge', sets: 3, repMin: 10, repMax: 10, restSeconds: 90, perSide: true },
        { exerciseId: 'standing-calf-raise', sets: 4, repMin: 15, repMax: 15, restSeconds: 60 },
      ]),
      fri: makeDay('fri', 'Volume Squat & Hypertrophy', [
        { exerciseId: 'back-squat', sets: 4, repMin: 8, repMax: 8, restSeconds: 150 },
        { exerciseId: 'incline-db-press', sets: 4, repMin: 8, repMax: 10, restSeconds: 120 },
        { exerciseId: 'romanian-deadlift', sets: 3, repMin: 8, repMax: 10, restSeconds: 120 },
        { exerciseId: 'dips', sets: 3, repMin: 8, repMax: 12, restSeconds: 90 },
      ]),
      sat: makeDay('sat', 'Upper Body Power & Grip', [
        { exerciseId: 'incline-barbell-bench', sets: 4, repMin: 8, repMax: 8, restSeconds: 120 },
        { exerciseId: 'dips', sets: 3, repMin: 8, repMax: 12, restSeconds: 90 },
        { exerciseId: 'farmers-walk', sets: 3, repMin: 0, repMax: 0, restSeconds: 90, durationSeconds: 45 },
        { exerciseId: 'hanging-leg-raise', sets: 3, repMin: 12, repMax: 15, restSeconds: 60 },
        { exerciseId: 'plank', sets: 3, repMin: 0, repMax: 0, restSeconds: 60, durationSeconds: 60 },
      ]),
      sun: makeDay('sun', 'Rest Day', []),
    },
  },
  {
    id: 'beginner-fitness-3day',
    title: 'Beginner Full Body Starter',
    subtitle: 'Zero Intimidation Foundation Plan',
    goal: 'fitness',
    difficulty: 'beginner',
    durationMinutes: 35,
    category: 'fitness',
    equipment: 'Dumbbells & Machines',
    daysCount: 6,
    description:
      'Simple, balanced routine with forgiving rep ranges, straightforward movements, and clear form demonstrations.',
    tags: ['Beginner Friendly', 'Full Body', 'Foundation', '6 Days/Week'],
    days: {
      mon: makeDay('mon', 'Full Body Starter A', [
        { exerciseId: 'goblet-squat', sets: 3, repMin: 10, repMax: 12, restSeconds: 90 },
        { exerciseId: 'push-ups', sets: 3, repMin: 8, repMax: 12, restSeconds: 90 },
        { exerciseId: 'lat-pulldown', sets: 3, repMin: 10, repMax: 12, restSeconds: 90 },
        { exerciseId: 'plank', sets: 3, repMin: 0, repMax: 0, restSeconds: 60, durationSeconds: 30 },
      ]),
      tue: makeDay('tue', 'Core & Conditioning Starter', [
        { exerciseId: 'bicycle-crunches', sets: 3, repMin: 15, repMax: 15, restSeconds: 60 },
        { exerciseId: 'mountain-climbers', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 30 },
        { exerciseId: 'jumping-jacks', sets: 3, repMin: 25, repMax: 30, restSeconds: 45 },
        { exerciseId: 'plank', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 30 },
      ]),
      wed: makeDay('wed', 'Full Body Starter B', [
        { exerciseId: 'leg-press', sets: 3, repMin: 10, repMax: 12, restSeconds: 90 },
        { exerciseId: 'incline-db-press', sets: 3, repMin: 10, repMax: 12, restSeconds: 90 },
        { exerciseId: 'seated-cable-row', sets: 3, repMin: 10, repMax: 12, restSeconds: 90 },
        { exerciseId: 'bicycle-crunches', sets: 3, repMin: 15, repMax: 15, restSeconds: 60 },
      ]),
      thu: makeDay('thu', 'Upper Body Fundamentals', [
        { exerciseId: 'push-ups', sets: 3, repMin: 8, repMax: 12, restSeconds: 90 },
        { exerciseId: 'seated-cable-row', sets: 3, repMin: 10, repMax: 12, restSeconds: 90 },
        { exerciseId: 'overhead-press', sets: 3, repMin: 10, repMax: 10, restSeconds: 90 },
        { exerciseId: 'barbell-curl', sets: 3, repMin: 10, repMax: 12, restSeconds: 60 },
      ]),
      fri: makeDay('fri', 'Full Body Starter C', [
        { exerciseId: 'walking-lunge', sets: 3, repMin: 10, repMax: 10, restSeconds: 90, perSide: true },
        { exerciseId: 'overhead-press', sets: 3, repMin: 10, repMax: 10, restSeconds: 90 },
        { exerciseId: 'cable-flyes', sets: 3, repMin: 12, repMax: 12, restSeconds: 90 },
        { exerciseId: 'standing-calf-raise', sets: 3, repMin: 15, repMax: 15, restSeconds: 60 },
      ]),
      sat: makeDay('sat', 'Lower Body & Conditioning', [
        { exerciseId: 'goblet-squat', sets: 3, repMin: 10, repMax: 12, restSeconds: 90 },
        { exerciseId: 'leg-press', sets: 3, repMin: 10, repMax: 12, restSeconds: 90 },
        { exerciseId: 'standing-calf-raise', sets: 3, repMin: 15, repMax: 15, restSeconds: 60 },
        { exerciseId: 'side-plank', sets: 2, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 30 },
      ]),
      sun: makeDay('sun', 'Rest Day', []),
    },
  },
  {
    id: 'mobility-recovery',
    title: 'Mobility, Joint Health & Flexibility',
    subtitle: 'Active Recovery & Injury Prevention',
    goal: 'fitness',
    difficulty: 'beginner',
    durationMinutes: 25,
    category: 'mobility',
    equipment: 'Bodyweight & Mat',
    daysCount: 6,
    description:
      'Restore joint range of motion, open hips and thoracic spine, release lower back tension, and promote muscular recovery.',
    tags: ['Mobility', 'Stretching', 'Recovery', '6 Days/Week'],
    days: {
      mon: makeDay('mon', 'Spine & Hip Flow', [
        { exerciseId: 'cat-cow', sets: 3, repMin: 10, repMax: 10, restSeconds: 45 },
        { exerciseId: 'worlds-greatest-stretch', sets: 3, repMin: 6, repMax: 6, restSeconds: 45, perSide: true },
        { exerciseId: 'cobra-stretch', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 45 },
      ]),
      tue: makeDay('tue', 'Upper Body & Shoulder Mobility', [
        { exerciseId: 'cat-cow', sets: 3, repMin: 10, repMax: 10, restSeconds: 45 },
        { exerciseId: 'push-ups', sets: 2, repMin: 8, repMax: 10, restSeconds: 60 },
        { exerciseId: 'cobra-stretch', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 45 },
        { exerciseId: 'plank', sets: 2, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 30 },
      ]),
      wed: makeDay('wed', 'Lower Body Mobility & Glutes', [
        { exerciseId: 'cat-cow', sets: 3, repMin: 10, repMax: 10, restSeconds: 45 },
        { exerciseId: 'goblet-squat', sets: 3, repMin: 8, repMax: 10, restSeconds: 60 },
        { exerciseId: 'side-plank', sets: 2, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 30 },
      ]),
      thu: makeDay('thu', 'Thoracic Spine & Core Mobility', [
        { exerciseId: 'worlds-greatest-stretch', sets: 3, repMin: 6, repMax: 6, restSeconds: 45, perSide: true },
        { exerciseId: 'side-plank', sets: 2, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 30 },
        { exerciseId: 'cat-cow', sets: 3, repMin: 10, repMax: 10, restSeconds: 45 },
        { exerciseId: 'bicycle-crunches', sets: 2, repMin: 15, repMax: 15, restSeconds: 45 },
      ]),
      fri: makeDay('fri', 'Full Body Stretch & Decompress', [
        { exerciseId: 'worlds-greatest-stretch', sets: 3, repMin: 6, repMax: 6, restSeconds: 45, perSide: true },
        { exerciseId: 'cobra-stretch', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 45 },
        { exerciseId: 'cat-cow', sets: 3, repMin: 10, repMax: 10, restSeconds: 45 },
      ]),
      sat: makeDay('sat', 'Total Body Dynamic Flow', [
        { exerciseId: 'goblet-squat', sets: 3, repMin: 8, repMax: 10, restSeconds: 60 },
        { exerciseId: 'walking-lunge', sets: 3, repMin: 8, repMax: 8, restSeconds: 60, perSide: true },
        { exerciseId: 'worlds-greatest-stretch', sets: 3, repMin: 6, repMax: 6, restSeconds: 45, perSide: true },
        { exerciseId: 'cobra-stretch', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 45 },
      ]),
      sun: makeDay('sun', 'Rest Day', []),
    },
  },
  {
    id: 'six-pack-abs-core',
    title: 'Six Pack Abs & Core Sculpt',
    subtitle: 'Targeted Core Definition & Obliques',
    goal: 'six_pack',
    difficulty: 'intermediate',
    durationMinutes: 40,
    category: 'core',
    equipment: 'Full Gym & Cables',
    daysCount: 6,
    description:
      'Laser-focused abdominal program targeting upper abs, lower abs, obliques, and rotational core stability paired with conditioning.',
    tags: ['Six Pack', 'Abs & Core', 'Obliques', '6 Days/Week'],
    days: {
      mon: makeDay('mon', 'Upper Abs & Core Compression', [
        { exerciseId: 'cable-crunch', sets: 4, repMin: 15, repMax: 20, restSeconds: 45 },
        { exerciseId: 'hanging-leg-raise', sets: 4, repMin: 12, repMax: 15, restSeconds: 45 },
        { exerciseId: 'push-ups', sets: 3, repMin: 12, repMax: 15, restSeconds: 60 },
        { exerciseId: 'plank', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 60 },
      ]),
      tue: makeDay('tue', 'Obliques & Rotational Power', [
        { exerciseId: 'woodchopper', sets: 4, repMin: 15, repMax: 15, restSeconds: 45, perSide: true },
        { exerciseId: 'russian-twist', sets: 4, repMin: 20, repMax: 20, restSeconds: 45 },
        { exerciseId: 'bicycle-crunches', sets: 3, repMin: 20, repMax: 20, restSeconds: 45 },
        { exerciseId: 'side-plank', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 45 },
      ]),
      wed: makeDay('wed', 'Lower Body & Core Stabilization', [
        { exerciseId: 'deadlift', sets: 3, repMin: 8, repMax: 8, restSeconds: 120 },
        { exerciseId: 'goblet-squat', sets: 3, repMin: 12, repMax: 12, restSeconds: 90 },
        { exerciseId: 'hanging-leg-raise', sets: 3, repMin: 12, repMax: 12, restSeconds: 45 },
        { exerciseId: 'side-plank', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 45 },
      ]),
      thu: makeDay('thu', 'Lower Abs & Deep Core Stabilizers', [
        { exerciseId: 'hanging-leg-raise', sets: 4, repMin: 12, repMax: 15, restSeconds: 45 },
        { exerciseId: 'ab-wheel-rollout', sets: 3, repMin: 10, repMax: 12, restSeconds: 60 },
        { exerciseId: 'mountain-climbers', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 45 },
        { exerciseId: 'deadlift', sets: 3, repMin: 8, repMax: 8, restSeconds: 120 },
      ]),
      fri: makeDay('fri', 'High-Calorie Core & HIIT Circuit', [
        { exerciseId: 'burpees', sets: 4, repMin: 12, repMax: 15, restSeconds: 45 },
        { exerciseId: 'jumping-jacks', sets: 3, repMin: 30, repMax: 30, restSeconds: 30 },
        { exerciseId: 'cable-crunch', sets: 3, repMin: 15, repMax: 20, restSeconds: 45 },
        { exerciseId: 'plank', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 60 },
      ]),
      sat: makeDay('sat', 'Total Core Sculpt & V-Taper', [
        { exerciseId: 'cable-crunch', sets: 4, repMin: 15, repMax: 20, restSeconds: 45 },
        { exerciseId: 'ab-wheel-rollout', sets: 3, repMin: 10, repMax: 12, restSeconds: 45 },
        { exerciseId: 'woodchopper', sets: 3, repMin: 12, repMax: 12, restSeconds: 45, perSide: true },
        { exerciseId: 'mountain-climbers', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 45 },
        { exerciseId: 'plank', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 60 },
      ]),
      sun: makeDay('sun', 'Rest Day', []),
    },
  },
  {
    id: 'hardcore-extreme',
    title: 'Hardcore Extreme Intensity',
    subtitle: 'Heavy Volume & Advanced Conditioning',
    goal: 'hardcore',
    difficulty: 'advanced',
    durationMinutes: 60,
    category: 'strength',
    equipment: 'Full Gym',
    daysCount: 6,
    description:
      'Maximum intensity program combining heavy barbell compounds, high volume dropsets, and grueling athletic conditioning.',
    tags: ['Hardcore', 'Advanced', 'High Intensity', '6 Days/Week'],
    days: {
      mon: makeDay('mon', 'Hardcore Chest & Triceps Brutal', [
        { exerciseId: 'flat-barbell-bench', sets: 5, repMin: 6, repMax: 8, restSeconds: 150 },
        { exerciseId: 'incline-barbell-bench', sets: 4, repMin: 8, repMax: 10, restSeconds: 120 },
        { exerciseId: 'dips', sets: 4, repMin: 10, repMax: 12, restSeconds: 90 },
        { exerciseId: 'cable-flyes', sets: 4, repMin: 12, repMax: 15, restSeconds: 60 },
        { exerciseId: 'skull-crushers', sets: 4, repMin: 10, repMax: 12, restSeconds: 60 },
        { exerciseId: 'tricep-rope-pushdowns', sets: 4, repMin: 12, repMax: 15, restSeconds: 45 },
      ]),
      tue: makeDay('tue', 'Hardcore Heavy Back & Biceps', [
        { exerciseId: 'deadlift', sets: 5, repMin: 5, repMax: 5, restSeconds: 180 },
        { exerciseId: 't-bar-row', sets: 4, repMin: 8, repMax: 10, restSeconds: 120 },
        { exerciseId: 'pull-ups', sets: 4, repMin: 8, repMax: 10, restSeconds: 90 },
        { exerciseId: 'seated-cable-row', sets: 4, repMin: 10, repMax: 12, restSeconds: 75 },
        { exerciseId: 'barbell-curl', sets: 4, repMin: 8, repMax: 10, restSeconds: 60 },
        { exerciseId: 'farmers-walk', sets: 3, repMin: 0, repMax: 0, restSeconds: 60, durationSeconds: 60 },
      ]),
      wed: makeDay('wed', 'Hardcore Leg Day Destroyer', [
        { exerciseId: 'back-squat', sets: 5, repMin: 6, repMax: 8, restSeconds: 180 },
        { exerciseId: 'leg-press', sets: 4, repMin: 10, repMax: 12, restSeconds: 120 },
        { exerciseId: 'romanian-deadlift', sets: 4, repMin: 8, repMax: 10, restSeconds: 120 },
        { exerciseId: 'bulgarian-split-squat', sets: 3, repMin: 10, repMax: 10, restSeconds: 90, perSide: true },
        { exerciseId: 'standing-calf-raise', sets: 4, repMin: 15, repMax: 20, restSeconds: 60 },
      ]),
      thu: makeDay('thu', 'Hardcore Shoulders & Arms', [
        { exerciseId: 'overhead-press', sets: 5, repMin: 6, repMax: 8, restSeconds: 150 },
        { exerciseId: 'arnold-press', sets: 4, repMin: 10, repMax: 10, restSeconds: 90 },
        { exerciseId: 'lateral-raise', sets: 5, repMin: 12, repMax: 15, restSeconds: 45 },
        { exerciseId: 'face-pull', sets: 4, repMin: 15, repMax: 15, restSeconds: 45 },
        { exerciseId: 'preacher-curl', sets: 4, repMin: 10, repMax: 10, restSeconds: 60 },
        { exerciseId: 'overhead-tricep-ext', sets: 4, repMin: 10, repMax: 10, restSeconds: 60 },
      ]),
      fri: makeDay('fri', 'Hardcore Athletic Conditioning & Thrusters', [
        { exerciseId: 'thrusters', sets: 4, repMin: 10, repMax: 12, restSeconds: 90 },
        { exerciseId: 'burpees', sets: 4, repMin: 15, repMax: 15, restSeconds: 60 },
        { exerciseId: 'kb-swing', sets: 4, repMin: 20, repMax: 20, restSeconds: 45 },
        { exerciseId: 'box-jump', sets: 4, repMin: 12, repMax: 12, restSeconds: 60 },
        { exerciseId: 'battle-ropes', sets: 4, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 45 },
      ]),
      sat: makeDay('sat', 'Hardcore Beast HIIT & Grip', [
        { exerciseId: 'burpees', sets: 4, repMin: 15, repMax: 15, restSeconds: 60 },
        { exerciseId: 'kb-swing', sets: 4, repMin: 20, repMax: 20, restSeconds: 45 },
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
        { exerciseId: 'farmers-walk', sets: 3, repMin: 0, repMax: 0, restSeconds: 60, durationSeconds: 60 },
      ]),
      sun: makeDay('sun', 'Rest Day', []),
    },
  },
  {
    id: 'arms-focus-blast',
    title: 'Biceps & Triceps Arm Blast',
    subtitle: 'Maximum Arm Hypertrophy & Peak Grip',
    goal: 'arms_focus',
    difficulty: 'intermediate',
    durationMinutes: 45,
    category: 'strength',
    equipment: 'Dumbbells, Barbells & Cables',
    daysCount: 6,
    description:
      'Specialized arm hypertrophy routine designed for explosive bicep peaks, thick tricep horseshoes, and dense forearms.',
    tags: ['Biceps', 'Triceps', 'Forearms', '6 Days/Week'],
    days: {
      mon: makeDay('mon', 'Biceps & Triceps Superset Blast', [
        { exerciseId: 'barbell-curl', sets: 4, repMin: 8, repMax: 10, restSeconds: 60 },
        { exerciseId: 'skull-crushers', sets: 4, repMin: 8, repMax: 10, restSeconds: 60 },
        { exerciseId: 'hammer-curl', sets: 4, repMin: 10, repMax: 12, restSeconds: 45 },
        { exerciseId: 'tricep-rope-pushdowns', sets: 4, repMin: 12, repMax: 15, restSeconds: 45 },
        { exerciseId: 'farmers-walk', sets: 3, repMin: 0, repMax: 0, restSeconds: 60, durationSeconds: 45 },
      ]),
      tue: makeDay('tue', 'Upper Body & Arms Synergist', [
        { exerciseId: 'chin-ups', sets: 4, repMin: 8, repMax: 10, restSeconds: 90 },
        { exerciseId: 'dips', sets: 4, repMin: 10, repMax: 12, restSeconds: 90 },
        { exerciseId: 'incline-db-press', sets: 3, repMin: 10, repMax: 12, restSeconds: 75 },
        { exerciseId: 'dumbbell-row', sets: 3, repMin: 10, repMax: 12, restSeconds: 75 },
      ]),
      wed: makeDay('wed', 'Forearms, Grip & Shoulders', [
        { exerciseId: 'overhead-press', sets: 4, repMin: 8, repMax: 10, restSeconds: 90 },
        { exerciseId: 'lateral-raise', sets: 4, repMin: 12, repMax: 15, restSeconds: 45 },
        { exerciseId: 'face-pull', sets: 4, repMin: 15, repMax: 15, restSeconds: 45 },
        { exerciseId: 'wrist-curls', sets: 4, repMin: 15, repMax: 20, restSeconds: 45 },
        { exerciseId: 'farmers-walk', sets: 3, repMin: 0, repMax: 0, restSeconds: 60, durationSeconds: 45 },
      ]),
      thu: makeDay('thu', 'Arm Peak & Forearm Isolation', [
        { exerciseId: 'preacher-curl', sets: 4, repMin: 10, repMax: 12, restSeconds: 60 },
        { exerciseId: 'overhead-tricep-ext', sets: 4, repMin: 10, repMax: 12, restSeconds: 60 },
        { exerciseId: 'incline-db-curl', sets: 3, repMin: 12, repMax: 12, restSeconds: 45 },
        { exerciseId: 'wrist-curls', sets: 4, repMin: 15, repMax: 20, restSeconds: 45 },
      ]),
      fri: makeDay('fri', 'Total Upper Compound & Finishers', [
        { exerciseId: 'flat-barbell-bench', sets: 4, repMin: 8, repMax: 10, restSeconds: 90 },
        { exerciseId: 'lat-pulldown', sets: 4, repMin: 8, repMax: 10, restSeconds: 90 },
        { exerciseId: 'lateral-raise', sets: 4, repMin: 12, repMax: 15, restSeconds: 45 },
        { exerciseId: 'plank', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 60 },
      ]),
      sat: makeDay('sat', 'High-Rep Arm Pump & Core Finisher', [
        { exerciseId: 'barbell-curl', sets: 4, repMin: 10, repMax: 12, restSeconds: 60 },
        { exerciseId: 'skull-crushers', sets: 4, repMin: 10, repMax: 12, restSeconds: 60 },
        { exerciseId: 'hammer-curl', sets: 3, repMin: 12, repMax: 15, restSeconds: 45 },
        { exerciseId: 'tricep-rope-pushdowns', sets: 3, repMin: 12, repMax: 15, restSeconds: 45 },
        { exerciseId: 'plank', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 60 },
      ]),
      sun: makeDay('sun', 'Rest Day', []),
    },
  },
  {
    id: 'legs-glutes-sculpt',
    title: 'Glutes & Lower Body Sculpt',
    subtitle: 'Booty, Quads & Hamstring Shaping',
    goal: 'legs_glutes',
    difficulty: 'intermediate',
    durationMinutes: 45,
    category: 'strength',
    equipment: 'Barbell & Machines',
    daysCount: 6,
    description:
      'High-impact lower body routine focusing on barbell hip thrusts, deep squats, lunges, and glute shaping.',
    tags: ['Glutes', 'Legs', 'Booty Sculpt', '6 Days/Week'],
    days: {
      mon: makeDay('mon', 'Glutes & Hamstrings Heavy', [
        { exerciseId: 'hip-thrust', sets: 4, repMin: 10, repMax: 12, restSeconds: 120 },
        { exerciseId: 'romanian-deadlift', sets: 4, repMin: 8, repMax: 10, restSeconds: 90 },
        { exerciseId: 'hamstring-curl', sets: 3, repMin: 12, repMax: 15, restSeconds: 60 },
        { exerciseId: 'standing-calf-raise', sets: 4, repMin: 15, repMax: 20, restSeconds: 45 },
      ]),
      tue: makeDay('tue', 'Quads & Glute Power', [
        { exerciseId: 'back-squat', sets: 4, repMin: 8, repMax: 10, restSeconds: 120 },
        { exerciseId: 'bulgarian-split-squat', sets: 3, repMin: 10, repMax: 12, restSeconds: 90, perSide: true },
        { exerciseId: 'leg-press', sets: 3, repMin: 12, repMax: 12, restSeconds: 90 },
        { exerciseId: 'leg-extension', sets: 3, repMin: 12, repMax: 15, restSeconds: 60 },
      ]),
      wed: makeDay('wed', 'Glute Isolation & Calves', [
        { exerciseId: 'hip-thrust', sets: 4, repMin: 12, repMax: 15, restSeconds: 90 },
        { exerciseId: 'goblet-squat', sets: 3, repMin: 12, repMax: 12, restSeconds: 60 },
        { exerciseId: 'walking-lunge', sets: 3, repMin: 12, repMax: 12, restSeconds: 60, perSide: true },
        { exerciseId: 'standing-calf-raise', sets: 4, repMin: 15, repMax: 20, restSeconds: 45 },
      ]),
      thu: makeDay('thu', 'Full Lower & Booty Pump', [
        { exerciseId: 'hip-thrust', sets: 4, repMin: 12, repMax: 15, restSeconds: 90 },
        { exerciseId: 'goblet-squat', sets: 3, repMin: 12, repMax: 15, restSeconds: 60 },
        { exerciseId: 'walking-lunge', sets: 3, repMin: 12, repMax: 12, restSeconds: 60, perSide: true },
        { exerciseId: 'side-plank', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 45 },
      ]),
      fri: makeDay('fri', 'Upper Body & Core Support', [
        { exerciseId: 'incline-db-press', sets: 3, repMin: 10, repMax: 12, restSeconds: 75 },
        { exerciseId: 'lat-pulldown', sets: 3, repMin: 10, repMax: 12, restSeconds: 75 },
        { exerciseId: 'overhead-press', sets: 3, repMin: 10, repMax: 10, restSeconds: 75 },
        { exerciseId: 'plank', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 60 },
      ]),
      sat: makeDay('sat', 'Explosive Lower Body & HIIT', [
        { exerciseId: 'box-jump', sets: 4, repMin: 12, repMax: 12, restSeconds: 60 },
        { exerciseId: 'kb-swing', sets: 4, repMin: 20, repMax: 20, restSeconds: 45 },
        { exerciseId: 'bulgarian-split-squat', sets: 3, repMin: 10, repMax: 10, restSeconds: 90, perSide: true },
        { exerciseId: 'side-plank', sets: 3, repMin: 0, repMax: 0, restSeconds: 45, durationSeconds: 45 },
      ]),
      sun: makeDay('sun', 'Rest Day', []),
    },
  },
]

/** Find preset matching goal and experience level */
export function getPresetForGoal(goal: Goal, experience?: string): WorkoutPreset {
  if (experience === 'advanced' || goal === 'hardcore') {
    const hard = WORKOUT_PRESETS.find((p) => p.goal === 'hardcore')
    if (hard) return hard
  }

  const found = WORKOUT_PRESETS.find((p) => p.goal === goal)
  if (found) return found

  if (goal === 'fat_loss') {
    return WORKOUT_PRESETS.find((p) => p.id === 'fat-loss-conditioning') || WORKOUT_PRESETS[0]
  }

  return WORKOUT_PRESETS[0]
}

