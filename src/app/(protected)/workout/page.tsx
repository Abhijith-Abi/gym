import { ActiveWorkout } from '@/components/workout/ActiveWorkout'

/**
 * Active Workout route (design C.16 step 7). RSC shell mounting the client
 * ActiveWorkout island, which owns timers, set logging, and PR detection.
 */
export default function WorkoutPage() {
  return <ActiveWorkout />
}
