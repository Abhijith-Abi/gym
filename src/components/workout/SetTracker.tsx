'use client'

import { useCallback } from 'react'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SetRow } from './SetRow'
import { computeRestSeconds } from '@/hooks/useRestTimer'
import {
  buildPersonalRecords,
  detectPersonalRecords,
} from '@/lib/analytics/personalRecords'
import { useExerciseStore } from '@/store/exerciseStore'
import { useProgressStore } from '@/store/progressStore'
import {
  useSessionStore,
  type ActiveExercise,
  type ActiveSet,
} from '@/store/sessionStore'
import { useTimerStore } from '@/store/timerStore'
import type { RpeMode, SetLog, Unit } from '@/types'

/**
 * Per-exercise set tracker: the 2-3-tap quick-log flow (FR-6). "Add set"
 * autofills from the previous set; the check button logs the set, which:
 *   1. marks it complete in the optimistic sessionStore,
 *   2. runs client-side PR detection against the cached exerciseHistory,
 *   3. flags PRs + queues the celebration,
 *   4. starts the smart-rest countdown.
 * Persisting each SetLog to Firestore is the service layer's job (sessionService
 * .logSet) and is wired by the parent surface; this component is UI + local
 * state + pure PR detection so it works fully offline.
 */
export function SetTracker({
  exercise,
  unit,
  rpeMode,
  smartRestEnabled,
  autoStartRest,
}: {
  exercise: ActiveExercise
  unit: Unit
  rpeMode: RpeMode
  smartRestEnabled: boolean
  autoStartRest: boolean
}) {
  const addSet = useSessionStore((s) => s.addSet)
  const updateSet = useSessionStore((s) => s.updateSet)
  const completeSet = useSessionStore((s) => s.completeSet)
  const removeSet = useSessionStore((s) => s.removeSet)
  const flagPr = useSessionStore((s) => s.flagPr)
  const session = useSessionStore((s) => s.session)
  // Render from the LIVE store exercise (the prop is only a stable identity);
  // this keeps set rows reactive as sets are added/logged.
  const liveExercise =
    session?.exercises.find(
      (e) => e.exerciseSessionId === exercise.exerciseSessionId,
    ) ?? exercise

  const exerciseMeta = useExerciseStore((s) => s.byId(exercise.exerciseId))
  const historyFor = useProgressStore((s) => s.history[exercise.exerciseId])
  const setHistory = useProgressStore((s) => s.setHistory)
  const queueCelebration = useProgressStore((s) => s.queueCelebration)
  const startRest = useTimerStore((s) => s.startRest)

  const isDuration =
    exercise.intervalWorkSeconds !== undefined ||
    exercise.prescription.targetRepMax === 0

  const onComplete = useCallback(
    (set: ActiveSet) => {
      const done = completeSet(exercise.exerciseSessionId, set.id)
      if (!done || !session) return

      // PR detection against the cached history (reads-before-writes, C.7).
      if (!done.isWarmup && done.actualReps !== undefined) {
        const detected = detectPersonalRecords(historyFor, [
          {
            weightKg: done.weightKg,
            actualReps: done.actualReps,
            isWarmup: done.isWarmup,
          },
        ])
        if (detected.length > 0) {
          flagPr(exercise.exerciseSessionId, done.id, {
            weight: detected.some((d) => d.type === 'weight'),
            reps: detected.some((d) => d.type === 'reps'),
            volume: detected.some((d) => d.type === 'volume'),
            e1rm: detected.some((d) => d.type === 'e1rm'),
          })
          const prs = buildPersonalRecords(detected, {
            uid: session.uid,
            exerciseId: exercise.exerciseId,
            sessionId: session.id,
            achievedAt: new Date(),
          })
          queueCelebration(prs)
          // Reflect the new bests locally so a second PR this session compares
          // against the just-set record (optimistic cache update).
          const bestWeight = Math.max(historyFor?.bestWeightKg ?? 0, done.weightKg)
          setHistory(exercise.exerciseId, {
            exerciseId: exercise.exerciseId,
            uid: session.uid,
            lastPerformedAt: new Date(),
            bestWeightKg: bestWeight,
            bestE1rmKg: Math.max(
              historyFor?.bestE1rmKg ?? 0,
              done.weightKg * (1 + done.actualReps / 30),
            ),
            bestRepsAtWeight: Math.max(
              historyFor?.bestRepsAtWeight ?? 0,
              done.actualReps,
            ),
            recentSessions: historyFor?.recentSessions ?? [],
          })
        }
      }

      // Smart-rest countdown.
      if (autoStartRest) {
        const rest = computeRestSeconds({
          prescriptionRestSeconds: exercise.prescription.restSeconds,
          smartRestEnabled,
          rpeMode,
          lastSet: { rpe: done.rpe, rir: done.rir, isWarmup: done.isWarmup },
        })
        startRest(rest)
      }
    },
    [
      completeSet,
      exercise,
      session,
      historyFor,
      flagPr,
      queueCelebration,
      setHistory,
      autoStartRest,
      smartRestEnabled,
      rpeMode,
      startRest,
    ],
  )

  return (
    <div className="flex flex-col gap-2">
      {liveExercise.sets.map((st) => (
        <SetRow
          key={st.id}
          set={st}
          unit={unit}
          rpeMode={rpeMode}
          isDuration={isDuration}
          onChange={(patch) => updateSet(exercise.exerciseSessionId, st.id, patch)}
          onComplete={() => onComplete(st)}
          onRemove={() => removeSet(exercise.exerciseSessionId, st.id)}
        />
      ))}
      <Button
        variant="outline"
        onClick={() => addSet(exercise.exerciseSessionId)}
        className="w-full"
      >
        <Plus className="size-4" />
        Add set
        {exerciseMeta ? ` · ${exerciseMeta.name}` : ''}
      </Button>
    </div>
  )
}

/** Build a Firestore SetLog from a live ActiveSet (used by the persist layer). */
export function activeSetToSetLog(set: ActiveSet): SetLog {
  return {
    id: set.id,
    exerciseSessionId: set.exerciseSessionId,
    setIndex: set.setIndex,
    ...(set.targetReps !== undefined ? { targetReps: set.targetReps } : {}),
    ...(set.actualReps !== undefined ? { actualReps: set.actualReps } : {}),
    ...(set.durationSeconds !== undefined
      ? { durationSeconds: set.durationSeconds }
      : {}),
    weightKg: set.weightKg,
    ...(set.rpe !== undefined ? { rpe: set.rpe } : {}),
    ...(set.rir !== undefined ? { rir: set.rir } : {}),
    isWarmup: set.isWarmup,
    isCompleted: set.isCompleted,
    completedAt: set.completedAtMs ? new Date(set.completedAtMs) : new Date(),
    ...(set.isPr !== undefined ? { isPr: set.isPr } : {}),
    sessionCompleted: false,
  }
}
