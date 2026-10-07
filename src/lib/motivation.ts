/**
 * Contextual Motivation & Encouragement Engine for ForgeFit.
 *
 * Selects dynamic, non-repetitive motivational quotes and speech triggers
 * based on the user's workout context (first set, mid-workout, last set of exercise,
 * final set of workout, rest completion, new PR).
 */

const FIRST_SET_MESSAGES = [
  'Great start! Let’s build momentum! 🔥',
  'First set in the books! Keep the energy high! 💪',
  'Strong start! Locked in and focused! ⚡',
  'Setting the tone for an epic session! 💥',
]

const MID_WORKOUT_MESSAGES = [
  'Locked in! Keep pushing! 🔥',
  'Form on point, power steady! ⚡',
  'Every single rep is building strength! 💥',
  'Stay hungry, stay focused! 💪',
  'Embrace the burn, that’s where growth happens! 🚀',
  'Unstoppable drive today! ⚡',
  'One set closer to your goal! 🔥',
]

const LAST_SET_OF_EXERCISE_MESSAGES = [
  'LAST SET for this exercise! Empty the tank! 💥',
  'Final set of this movement! Make it count! 💪',
  'Finish this exercise strong! 🔥',
  'Last set! Full focus, pure power! ⚡',
]

const FINAL_SET_OF_WORKOUT_MESSAGES = [
  'FINAL SET OF THE WORKOUT! GIVE IT EVERYTHING! 🏆',
  'LAST SET! FINISH LIKE A CHAMPION! 🔥',
  'FINAL SET! BEAST MODE ACTIVATED! ⚡',
  'EMPTY THE TANK! THIS IS IT! 💥',
]

const REST_COUNTDOWN_MESSAGES = [
  'Time to get after it! 🔥',
  'Let’s go! Next set starts now! ⚡',
  'Ready? Let’s crush this set! 💪',
  'Breathe in, recover, and dominate! 🚀',
]

const WORKOUT_COMPLETE_MESSAGES = [
  'WORKOUT COMPLETE! Incredible effort today! 🏆',
  'You conquered today’s session! Rest up and grow! 🔥',
  'Consistency builds greatness. Outstanding work! ⚡',
  'Another day, another victory! Beast mode! 💪',
]

function getRandom(arr: readonly string[]): string {
  const idx = Math.floor(Math.random() * arr.length)
  return arr[idx]
}

export function getContextMotivation(context: {
  isFirstSet?: boolean
  isLastSetOfExercise?: boolean
  isFinalSetOfWorkout?: boolean
  isWorkoutComplete?: boolean
  isRestFinished?: boolean
}): string {
  if (context.isWorkoutComplete) return getRandom(WORKOUT_COMPLETE_MESSAGES)
  if (context.isFinalSetOfWorkout) return getRandom(FINAL_SET_OF_WORKOUT_MESSAGES)
  if (context.isLastSetOfExercise) return getRandom(LAST_SET_OF_EXERCISE_MESSAGES)
  if (context.isFirstSet) return getRandom(FIRST_SET_MESSAGES)
  if (context.isRestFinished) return getRandom(REST_COUNTDOWN_MESSAGES)
  return getRandom(MID_WORKOUT_MESSAGES)
}
