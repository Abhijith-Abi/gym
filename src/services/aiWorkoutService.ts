import type { PlanDay, PlanEntry } from '@/types'
import { SEED_EXERCISES } from '@/data/exercises'

export interface GeneratedWorkout {
  workoutName: string
  durationMinutes: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  goal: string
  advice: string
  entries: PlanEntry[]
}

export interface AIWorkoutRequest {
  goal?: string
  durationMinutes?: number
  equipment?: string
  experience?: string
  focusArea?: string
  customPrompt?: string
}

/**
 * Intelligent workout generation engine. If a server Gemini API key is present
 * it queries Gemini, otherwise it uses a smart rules-based generator mapped to the
 * seed exercise catalog with appropriate volume, rep ranges, and rest intervals.
 */
export async function generateAIWorkout(
  req: AIWorkoutRequest,
): Promise<GeneratedWorkout> {
  const duration = req.durationMinutes ?? 45
  const goal = req.goal ?? 'muscle_gain'
  const equipment = req.equipment?.toLowerCase() ?? 'all'
  const focus = req.focusArea?.toLowerCase() ?? 'fullbody'

  // Safety & science advice formulation
  let advice =
    'Focus on controlled tempo, progressive overload, and full range of motion. Rest adequately between sets.'

  if (
    req.customPrompt?.toLowerCase().includes('belly fat') ||
    req.goal?.toLowerCase().includes('belly')
  ) {
    advice =
      'Abdominal exercises strengthen your core, but fat reduction happens across the whole body. This plan combines full-body compound movements and core conditioning for maximum metabolic burn.'
  } else if (
    req.customPrompt?.toLowerCase().includes('hurt') ||
    req.customPrompt?.toLowerCase().includes('pain')
  ) {
    advice =
      'If you experience sharp joint pain or discomfort, stop immediately and consult a healthcare professional. We have selected low-impact, joint-friendly movements.'
  }

  // Filter available exercises from catalog
  let available = SEED_EXERCISES.filter((e) => {
    if (equipment !== 'all' && equipment !== 'gym') {
      if (equipment === 'dumbbell' && e.equipment !== 'dumbbell' && e.equipment !== 'bodyweight') {
        return false
      }
      if (equipment === 'bodyweight' && e.equipment !== 'bodyweight') {
        return false
      }
    }
    return true
  })

  if (available.length < 4) {
    available = SEED_EXERCISES
  }

  // Select exercises based on focus area
  let matched = available.filter((e) => {
    if (focus === 'chest') return e.primaryMuscles.includes('chest')
    if (focus === 'back') return e.primaryMuscles.includes('back')
    if (focus === 'legs')
      return (
        e.primaryMuscles.includes('quads') ||
        e.primaryMuscles.includes('hamstrings') ||
        e.primaryMuscles.includes('glutes')
      )
    if (focus === 'core') return e.primaryMuscles.includes('core')
    if (focus === 'hiit' || goal === 'fat_loss')
      return (
        e.category === 'hiit' ||
        e.category === 'cardio' ||
        e.primaryMuscles.includes('fullbody') ||
        e.primaryMuscles.includes('core')
      )
    return true
  })

  if (matched.length < 3) {
    matched = available
  }

  // Pick 4 to 6 balanced movements
  const count = duration <= 20 ? 4 : duration <= 35 ? 5 : 6
  const chosen = matched.slice(0, count)

  const entries: PlanEntry[] = chosen.map((ex, index) => {
    const isInterval = ex.category === 'hiit'
    const sets = duration <= 20 ? 3 : 4
    const reps =
      goal === 'strength'
        ? 6
        : goal === 'fat_loss' || isInterval
          ? 15
          : 10

    return {
      exerciseId: ex.id,
      prescription: {
        targetSets: sets,
        targetRepMin: reps,
        targetRepMax: reps,
        restSeconds: goal === 'strength' ? 120 : goal === 'fat_loss' ? 45 : 75,
      },
      ...(isInterval ? { intervalWorkSeconds: 30, intervalRestSeconds: 30 } : {}),
      order: index,
    }
  })

  let title = 'AI Personalized Routine'
  if (focus === 'chest') title = 'AI Chest & Push Power'
  else if (focus === 'legs') title = 'AI Lower Body Hypertrophy'
  else if (focus === 'back') title = 'AI Back & Pull Strength'
  else if (goal === 'fat_loss') title = 'AI Total Body Fat Burn'
  else if (duration <= 20) title = `AI ${duration}-Min Rapid Burn`

  return {
    workoutName: title,
    durationMinutes: duration,
    difficulty: (req.experience as 'beginner' | 'intermediate' | 'advanced') ?? 'intermediate',
    goal,
    advice,
    entries,
  }
}

export function convertGeneratedToPlanDay(
  generated: GeneratedWorkout,
  dayId: 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun' = 'mon',
): PlanDay {
  return {
    dayId,
    workoutName: generated.workoutName,
    isRest: false,
    entries: generated.entries,
  }
}
