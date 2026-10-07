import type { Equipment, ExerciseCategory, MuscleGroup } from '@/types'

/**
 * Curated smart starting weights (kg) for seed exercises.
 * Used when a user has no prior logged history for the exercise.
 */
export const DEFAULT_EXERCISE_WEIGHTS_KG: Record<string, number> = {
  // Chest & Triceps
  'flat-barbell-bench': 50,
  'incline-db-press': 20,
  'cable-flyes': 20,
  'dips': 0,
  'tricep-rope-pushdowns': 22.5,
  'skull-crushers': 20,
  'tricep-dips': 0,
  'overhead-tricep-ext': 16,

  // Back & Biceps
  'deadlift': 70,
  'lat-pulldown': 45,
  'bent-over-row': 45,
  'seated-cable-row': 40,
  'barbell-curl': 25,
  'hammer-curl': 12,
  'preacher-curl': 20,
  'incline-db-curl': 10,

  // Legs & Calves
  'back-squat': 60,
  'leg-press': 90,
  'romanian-deadlift': 50,
  'walking-lunge': 14,
  'standing-calf-raise': 40,
  'leg-extension': 35,
  'hamstring-curl': 35,

  // Shoulders & Abs
  'overhead-press': 35,
  'lateral-raise': 8,
  'face-pull': 25,
  'hanging-leg-raise': 0,
  'woodchopper': 15,
  'plank': 0,
  'russian-twist': 10,
  'ab-wheel-rollout': 0,

  // HIIT / Full-Body
  'burpees': 0,
  'kb-swing': 16,
  'box-jump': 0,
  'battle-ropes': 0,
  'mountain-climbers': 0,
}

/**
 * Fallback starting weight heuristic based on equipment and category.
 */
export function getDefaultStartingWeight(
  exerciseId: string,
  category?: ExerciseCategory,
  equipment?: Equipment,
  primaryMuscles?: MuscleGroup[],
): number {
  if (DEFAULT_EXERCISE_WEIGHTS_KG[exerciseId] !== undefined) {
    return DEFAULT_EXERCISE_WEIGHTS_KG[exerciseId]
  }

  if (equipment === 'bodyweight') return 0

  const isLegs = primaryMuscles?.some((m) =>
    ['quads', 'hamstrings', 'glutes', 'calves'].includes(m),
  )

  if (equipment === 'machine') {
    return isLegs ? 60 : 35
  }
  if (equipment === 'barbell') {
    if (isLegs) return 50
    return category === 'compound' ? 40 : 20
  }
  if (equipment === 'dumbbell') {
    if (isLegs) return 14
    return category === 'compound' ? 16 : 8
  }
  if (equipment === 'cable') {
    return 20
  }
  if (equipment === 'kettlebell') {
    return 16
  }

  return 20
}

export interface ExerciseFormGuide {
  setup: string[]
  execution: string[]
  tips: string[]
  mistakes: string[]
  barPath: 'vertical' | 'arc' | 'horizontal' | 'diagonal' | 'static'
}

/**
 * Detailed form cues & movement guides for exercises.
 */
export const EXERCISE_GUIDES: Record<string, ExerciseFormGuide> = {
  'back-squat': {
    setup: [
      'Position bar on upper traps/rear delts with a firm, balanced grip.',
      'Unrack, take two steps back, and set feet shoulder-width with toes flared ~15-30°.',
      'Brace your core tightly by taking a deep diaphragmatic breath into the belt.',
    ],
    execution: [
      'Initiate by unlocking knees and hips simultaneously.',
      'Descend smoothly until hip crease is below parallel with knees.',
      'Drive powerfully through mid-foot and hips while keeping chest proud.',
    ],
    tips: ['Keep knees tracking in line with your second toe.', 'Never let chest collapse.'],
    mistakes: ['Knees caving inwards.', 'Lifting heels off the floor.'],
    barPath: 'vertical',
  },
  'leg-press': {
    setup: [
      'Sit deep into the seat with lower back and hips firmly pressed against the pad.',
      'Place feet shoulder-width on the platform.',
      'Disengage the safety handles with control.',
    ],
    execution: [
      'Lower the weight smoothly until knees are bent to approximately 90 degrees.',
      'Do not let your lower back or pelvis lift off the back pad (butt wink).',
      'Press through full foot back to top without locking knees out aggressively.',
    ],
    tips: ['Keep knees tracking outward over toes.', 'Smooth, controlled 3-second negative.'],
    mistakes: ['Locking knees at the top.', 'Rounding lower back off the pad.'],
    barPath: 'diagonal',
  },
  'flat-barbell-bench': {
    setup: [
      'Lie flat on the bench with eyes directly under the bar.',
      'Plant feet flat on the floor and retract shoulder blades tightly together.',
      'Grip the bar slightly wider than shoulder-width with wrists straight.',
    ],
    execution: [
      'Unrack and bring the bar over mid-chest.',
      'Lower under control to touch lower/mid-chest at 45° elbow tuck.',
      'Press explosively up and slightly back toward eye level.',
    ],
    tips: ['Maintain firm arch in the upper back without lifting hips off bench.'],
    mistakes: ['Flaring elbows out at 90°.', 'Bouncing the barbell off the chest.'],
    barPath: 'arc',
  },
  'deadlift': {
    setup: [
      'Stand with mid-foot directly under the bar, feet hip-width apart.',
      'Hinge at hips, grip the bar just outside legs with double-overhand or mixed grip.',
      'Pull chest up, engage lats, and pull slack out of the bar.',
    ],
    execution: [
      'Drive the floor away through mid-foot while keeping the bar glued to shins.',
      'Extend knees and hips in unison until standing tall with locked glutes.',
      'Return weight by hinging hips back first, then bending knees once past kneecap.',
    ],
    tips: ['Keep bar in continuous contact with legs throughout the lift.'],
    mistakes: ['Rounding the lower back.', 'Jerking the barbell off the floor.'],
    barPath: 'vertical',
  },
  'overhead-press': {
    setup: [
      'Grip the bar just outside shoulders with elbows pointed slightly forward.',
      'Squeeze glutes and brace core tightly to lock a rigid torso.',
    ],
    execution: [
      'Press bar straight up, pulling chin back slightly to clear the face.',
      'Once bar clears forehead, bring head forward and lock out overhead with active traps.',
      'Lower under control back to front delts.',
    ],
    tips: ['Keep core braced like a pillar; avoid excessive lower back arching.'],
    mistakes: ['Over-arching lumbar spine.', 'Elbows flared wide on the press.'],
    barPath: 'vertical',
  },
  'lat-pulldown': {
    setup: [
      'Adjust thigh pad snug against legs so you cannot lift off the seat.',
      'Grip wide bar outside shoulder width, lean back slightly (~10-15°).',
    ],
    execution: [
      'Depress scapulae down first, then pull elbows down and back toward ribs.',
      'Squeeze lats hard as bar touches upper chest.',
      'Control the ascent for full lat stretch at the top.',
    ],
    tips: ['Drive with the elbows, not your biceps or forearms.'],
    mistakes: ['Excessive swinging/momentum.', 'Pulling bar behind the neck.'],
    barPath: 'vertical',
  },
}

/**
 * Get form guide with smart generic defaults for any exercise.
 */
export function getExerciseFormGuide(
  exerciseId: string,
  name: string,
  equipment: Equipment,
): ExerciseFormGuide {
  if (EXERCISE_GUIDES[exerciseId]) {
    return EXERCISE_GUIDES[exerciseId]
  }

  return {
    setup: [
      `Set up ${equipment !== 'bodyweight' ? `the ${equipment}` : 'your position'} with balanced alignment.`,
      'Brace core and stabilize joints before starting movement.',
    ],
    execution: [
      `Execute ${name} with full range of motion under strict control.`,
      'Squeeze target muscles at peak contraction for 1 second.',
      'Lower under controlled 2-3 second eccentric tempo.',
    ],
    tips: ['Prioritize strict form over heavy weight.', 'Maintain steady rhythmic breathing.'],
    mistakes: ['Using momentum or jerking.', 'Shortening the active range of motion.'],
    barPath: equipment === 'barbell' ? 'vertical' : 'arc',
  }
}
