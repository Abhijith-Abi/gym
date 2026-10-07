import { epley1RM } from '@/lib/oneRepMax'
import type { ExerciseHistory, RolledSet } from '@/types'

/** Max sessions kept in the bounded recentSessions ring (design C.3). */
export const HISTORY_RING_SIZE = 10

export interface RollupSet {
  weightKg: number
  actualReps?: number
  durationSeconds?: number
  rpe?: number
  rir?: number
  isWarmup: boolean
}

/**
 * Pick the single top working set of a session to roll into history: the set
 * with the highest estimated 1RM (duration/warmup sets are ignored). Returns
 * undefined when the session had no qualifying working set.
 */
export function topRolledSet(
  sessionId: string,
  performedAt: Date,
  sets: ReadonlyArray<RollupSet>,
): RolledSet | undefined {
  let best: RolledSet | undefined
  let bestE1rm = -1
  for (const s of sets) {
    if (s.isWarmup || s.actualReps === undefined || s.actualReps <= 0) continue
    const e1rm = epley1RM(s.weightKg, s.actualReps)
    if (e1rm > bestE1rm) {
      bestE1rm = e1rm
      best = {
        sessionId,
        performedAt,
        weightKg: s.weightKg,
        reps: s.actualReps,
        e1rmKg: round2(e1rm),
        ...(s.rpe !== undefined ? { rpe: s.rpe } : {}),
        ...(s.rir !== undefined ? { rir: s.rir } : {}),
      }
    }
  }
  return best
}

/**
 * Pure upsert of an exerciseHistory rollup (design C.8/C.16 step 8). Prepends
 * the session's top set to the bounded ring (newest-first, capped at
 * HISTORY_RING_SIZE, de-duplicated by sessionId) and recomputes the bests.
 * Returns the prior history unchanged when the session had no working set.
 */
export function rollupExerciseHistory(
  prev: ExerciseHistory | undefined,
  args: {
    exerciseId: string
    uid: string
    sessionId: string
    performedAt: Date
    sets: ReadonlyArray<RollupSet>
  },
): ExerciseHistory | undefined {
  const top = topRolledSet(args.sessionId, args.performedAt, args.sets)
  if (!top) return prev

  const existing = (prev?.recentSessions ?? []).filter(
    (s) => s.sessionId !== args.sessionId,
  )
  const recentSessions = [top, ...existing]
    .sort((a, b) => b.performedAt.getTime() - a.performedAt.getTime())
    .slice(0, HISTORY_RING_SIZE)

  const bestWeightKg = Math.max(prev?.bestWeightKg ?? 0, top.weightKg)
  const bestE1rmKg = Math.max(prev?.bestE1rmKg ?? 0, top.e1rmKg ?? 0)
  // Best reps achieved at (or above) the all-time best weight is approximated
  // by the reps of the top set when it ties/sets the weight record.
  const bestRepsAtWeight =
    top.weightKg >= (prev?.bestWeightKg ?? 0)
      ? Math.max(prev?.bestRepsAtWeight ?? 0, top.reps ?? 0)
      : prev?.bestRepsAtWeight

  return {
    exerciseId: args.exerciseId,
    uid: args.uid,
    lastPerformedAt: args.performedAt,
    bestWeightKg,
    bestE1rmKg,
    ...(bestRepsAtWeight !== undefined ? { bestRepsAtWeight } : {}),
    recentSessions,
  }
}

function round2(n: number): number {
  return Math.round(n * 100) / 100
}
