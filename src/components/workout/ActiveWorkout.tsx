'use client'

import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Dumbbell, Clock, ListChecks, Play, Sparkles, Flame } from 'lucide-react'
import { WorkoutExerciseListItem } from './WorkoutExerciseListItem'
import { RestTimer } from './RestTimer'
import { StickyControls } from './StickyControls'
import { WorkoutHeader } from './WorkoutHeader'
import { WorkoutProgressBar } from './WorkoutProgressBar'
import { PRCelebration } from '@/components/pr/PRCelebration'
import { useAuth } from '@/hooks/useAuth'
import { rollupExerciseHistory } from '@/lib/analytics/exerciseHistory'
import { useExerciseStore } from '@/store/exerciseStore'
import { useProgressStore } from '@/store/progressStore'
import { useSessionStore } from '@/store/sessionStore'
import { useSettingsStore } from '@/store/settingsStore'
import { useSyncStore } from '@/store/syncStore'
import { useTimerStore } from '@/store/timerStore'
import { useWorkoutStore } from '@/store/workoutStore'
import { useWorkoutSounds } from '@/hooks/useWorkoutSounds'
import { triggerHaptic } from '@/hooks/useHaptics'
import { activeSetToSetLog } from './SetTracker'
import { monthIdOf, weekIdOf } from '@/lib/sync/summaryKeys'
import { emptyMuscleVolume, setVolumeKg } from '@/lib/volume'
import * as goalService from '@/services/goalService'
import * as progressService from '@/services/progressService'
import * as sessionService from '@/services/sessionService'
import * as syncService from '@/services/syncService'
import type { CompleteSessionPayload } from '@/lib/sync/syncManager'
import type { SessionSummaryDelta } from '@/lib/sync/summaryKeys'
import type {
  ExerciseHistory,
  ExerciseSession,
  PersonalRecord,
  SetLog,
  WorkoutSession,
} from '@/types'

import { WorkoutCompletedCard } from '@/components/dashboard/WorkoutCompletedCard'
import * as workoutService from '@/services/workoutService'
import { todayDayId } from '@/store/workoutStore'
import type { DayOfWeek } from '@/types'

/**
 * Active Workout Mode orchestrator (design C.16 step 7). Renders the full
 * workout routine list with one-tap exercise completion in any order. All
 * timers, completion state, and PR detection run offline-first.
 */
export function ActiveWorkout() {
  const router = useRouter()
  const { uid, profile } = useAuth()
  const deviceId = useSettingsStore((s) => s.deviceId)
  const { playSound, speak } = useWorkoutSounds()

  const plan = useWorkoutStore((s) => s.plan)
  const selectedDay = useWorkoutStore((s) => s.selectedDay)
  const ensureSeedPlan = useWorkoutStore((s) => s.ensureSeedPlan)
  const selectedPlanDay = useWorkoutStore((s) => s.selectedPlanDay())

  const session = useSessionStore((s) => s.session)
  const startSession = useSessionStore((s) => s.start)
  const finish = useSessionStore((s) => s.finish)
  const clearSession = useSessionStore((s) => s.clear)

  const startWorkoutClock = useTimerStore((s) => s.startWorkoutClock)
  const resetWorkoutClock = useTimerStore((s) => s.resetWorkoutClock)
  const elapsedSeconds = useTimerStore((s) => s.elapsedSeconds)

  const mergeHistories = useProgressStore((s) => s.mergeHistories)
  const clearProgress = useProgressStore((s) => s.clear)
  const exerciseById = useExerciseStore((s) => s.byId)
  const [completedTodaySession, setCompletedTodaySession] = useState<WorkoutSession | null>(null)
  const [forceShowStart, setForceShowStart] = useState(false)

  // Make sure a plan exists so a user can always start (seed offline).
  useEffect(() => {
    if (uid) ensureSeedPlan(uid, profile?.goal, profile?.experience)
  }, [uid, profile?.goal, profile?.experience, ensureSeedPlan])

  // Check if today's workout has already been completed
  useEffect(() => {
    if (!uid) return
    let active = true
    void workoutService.listCompletedSessionsPage(uid, 5).then((res) => {
      if (!active || !res.ok) return
      const today = new Date().toDateString()
      const match = res.data.sessions.find((s) => {
        if (!s.completedAt) return false
        return new Date(s.completedAt).toDateString() === today
      })
      if (match) {
        setCompletedTodaySession(match)
      }
    })
    return () => {
      active = false
    }
  }, [uid, selectedDay])

  // Hydrate exerciseHistory for the day's exercises (bounded reads).
  useEffect(() => {
    if (!uid || !session) return
    const ids = session.exercises.map((e) => e.exerciseId)
    void progressService.getExerciseHistories(uid, ids).then((res) => {
      if (res.ok) mergeHistories(res.data)
    })
  }, [uid, session, mergeHistories])

  const handleStart = useCallback(() => {
    if (!uid || !plan || !selectedPlanDay || selectedPlanDay.isRest) return
    triggerHaptic('success')
    playSound('countdown-go')

    const firstEx = selectedPlanDay.entries[0]
    const firstMeta = firstEx ? exerciseById(firstEx.exerciseId) : null
    const firstName = firstMeta?.name ?? firstEx?.exerciseId ?? 'First exercise'
    const firstSets = firstEx?.prescription.targetSets ?? 3
    const firstReps = firstEx?.prescription.targetRepMax ?? 10

    speak(
      `Starting ${selectedPlanDay.workoutName}! ${selectedPlanDay.entries.length} exercises ready. First: ${firstName}, ${firstSets} sets of ${firstReps} reps. Let's crush it!`,
    )

    startSession({
      uid,
      planId: plan.id,
      day: selectedPlanDay,
      deviceId,
    })
    startWorkoutClock()

    // Pre-populate target sets for all exercises
    const live = useSessionStore.getState().session
    if (live) {
      for (const ex of live.exercises) {
        if (ex.intervalWorkSeconds === undefined) {
          const targetCount = Math.max(1, ex.prescription.targetSets || 3)
          for (let i = 0; i < targetCount; i++) {
            useSessionStore.getState().addSet(ex.exerciseSessionId)
          }
        }
      }
    }

    // Persist the session + exercise shells (best-effort; offline-safe).
    const sessionId = useSessionStore.getState().session?.id
    const updatedLive = useSessionStore.getState().session
    if (sessionId && updatedLive) {
      const sessionDoc = buildSessionDoc(updatedLive, elapsedSeconds())
      void sessionService.upsertSession(sessionDoc)
      for (const ex of updatedLive.exercises) {
        void sessionService.upsertExerciseSession(uid, sessionId, buildExerciseDoc(ex))
      }
    }
  }, [
    uid,
    plan,
    selectedPlanDay,
    startSession,
    deviceId,
    startWorkoutClock,
    elapsedSeconds,
    playSound,
    speak,
    exerciseById,
  ])

  const handleFinish = useCallback(async () => {
    const live = useSessionStore.getState().session
    if (!live || !uid) return

    triggerHaptic('complete')
    playSound('workout-complete')

    finish()
    const finished = useSessionStore.getState().session
    if (!finished) return

    const sessionDoc = buildSessionDoc(finished, elapsedSeconds())
    const exerciseDocs = finished.exercises.map(buildExerciseDoc)
    const setDocs: SetLog[] = finished.exercises.flatMap((ex) =>
      ex.sets.filter((s) => s.isCompleted).map(activeSetToSetLog),
    )

    // History rollups computed BEFORE the completion batch (reads-before-writes).
    const rollups: ExerciseHistory[] = []
    for (const ex of finished.exercises) {
      const prev = useProgressStore.getState().history[ex.exerciseId]
      const rolled = rollupExerciseHistory(prev, {
        exerciseId: ex.exerciseId,
        uid,
        sessionId: finished.id,
        performedAt: new Date(),
        sets: ex.sets
          .filter((s) => s.isCompleted)
          .map((s) => ({
            weightKg: s.weightKg,
            actualReps: s.actualReps,
            durationSeconds: s.durationSeconds,
            rpe: s.rpe,
            rir: s.rir,
            isWarmup: s.isWarmup,
          })),
      })
      if (rolled) rollups.push(rolled)
    }

    // PRs flagged live are already in the celebration queue; persist those exact
    // docs (deduped by deterministic id) so AC-7 writes personalRecords/{id}.
    const personalRecords = dedupeById(
      useProgressStore.getState().pendingCelebration,
    )

    // Per-session summary deltas Step 3 adds into analyticsWeekly/{weekId} +
    // analyticsMonthly/{monthId} (FR-28 data source). Volume is attributed to
    // each set's primary muscles from the in-memory catalog.
    const completedAt = finished.completedAtMs
      ? new Date(finished.completedAtMs)
      : new Date()
    const volumeByMuscle = emptyMuscleVolume()
    for (const ex of finished.exercises) {
      const primary = exerciseById(ex.exerciseId)?.primaryMuscles ?? []
      if (primary.length === 0) continue
      for (const st of ex.sets) {
        if (!st.isCompleted) continue
        const v = setVolumeKg({ weightKg: st.weightKg, actualReps: st.actualReps })
        if (v === 0) continue
        for (const m of primary) volumeByMuscle[m] += v
      }
    }
    const delta: SessionSummaryDelta = {
      workouts: 1,
      totalVolumeKg: sessionDoc.totalVolumeKg,
      volumeByMuscle,
      prCount: personalRecords.length,
    }

    // Route the completion through the composite op (design C.7): Step 2
    // (completion batch) + Step 3 (summary transaction) behind the flush
    // barrier, with the custom syncQueue owning this one op.
    const payload: CompleteSessionPayload = {
      completion: {
        session: sessionDoc,
        exercises: exerciseDocs,
        sets: setDocs,
        personalRecords,
        historyRollups: rollups,
      },
      summary: {
        uid,
        sessionId: finished.id,
        weekId: weekIdOf(completedAt),
        monthId: monthIdOf(completedAt),
        delta,
      },
      sessionState: { status: 'IN_PROGRESS', summaryApplied: false },
    }
    const op = syncService.buildCompleteSessionOp(finished.id, payload)
    useSyncStore.getState().enqueueOp(op)
    try {
      const result = await syncService.runCompleteSession(op, payload)
      const sync = useSyncStore.getState()
      if (!result.ok) {
        // Not-configured / offline-safe: keep the op queued for a later flush.
        sync.markFailure(op.id, result.code)
      } else if (result.data.status === 'done' || result.data.status === 'dropped') {
        sync.removeOp(op.id)
        sync.markSynced()
      } else if (result.data.status === 'retry') {
        sync.markFailure(op.id, result.data.error)
      }

      // Proactively evaluate & unlock achievements in the background
      void (async () => {
        try {
          const [existingRes, prsRes] = await Promise.all([
            goalService.listAchievements(uid),
            progressService.listPersonalRecords(uid),
          ])
          const unlockedKeys = existingRes.ok ? existingRes.data.map((a) => a.key) : []
          const prCount = prsRes.ok ? prsRes.data.length : personalRecords.length
          await goalService.evaluateAndUnlock(
            uid,
            {
              workouts: 1,
              streakDays: 1,
              prCount,
              totalVolumeKg: sessionDoc.totalVolumeKg,
            },
            unlockedKeys,
          )
        } catch {
          // non-blocking
        }
      })()
    } catch (err) {
      console.error('Session completion error:', err)
    } finally {
      clearSession()
      clearProgress()
      resetWorkoutClock()
      router.push('/dashboard')
    }
  }, [
    uid,
    finish,
    elapsedSeconds,
    exerciseById,
    clearSession,
    clearProgress,
    resetWorkoutClock,
    router,
    playSound,
  ])

  // Guard against accidental navigation away from an in-progress workout.
  useEffect(() => {
    if (!session || session.status !== 'IN_PROGRESS') return
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault()
      e.returnValue = ''
    }
    window.addEventListener('beforeunload', handler)
    return () => window.removeEventListener('beforeunload', handler)
  }, [session])

  if (!session || session.status !== 'IN_PROGRESS') {
    const DAYS_ORDER: DayOfWeek[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
    const currIdx = DAYS_ORDER.indexOf(selectedDay)
    const tomorrowDayId = DAYS_ORDER[(currIdx + 1) % 7]
    const tomorrowPlanDay = plan?.days[tomorrowDayId]

    if (completedTodaySession && selectedDay === todayDayId() && !forceShowStart) {
      return (
        <main className="mx-auto flex min-h-[80vh] w-full max-w-xl min-w-0 flex-col items-center justify-center p-4 sm:p-6">
          <WorkoutCompletedCard
            completedWorkoutName={completedTodaySession.workoutName}
            tomorrowPlanDay={tomorrowPlanDay}
            completedSets={completedTodaySession.completedSets}
            onStartAnother={() => setForceShowStart(true)}
          />
        </main>
      )
    }

    return (
      <StartPrompt
        canStart={Boolean(selectedPlanDay && !selectedPlanDay.isRest && uid)}
        isRest={Boolean(selectedPlanDay?.isRest)}
        dayName={selectedPlanDay?.workoutName ?? '—'}
        selectedDay={selectedDay}
        entriesCount={selectedPlanDay?.entries.length ?? 0}
        totalSets={
          selectedPlanDay?.entries.reduce(
            (acc, e) => acc + e.prescription.targetSets,
            0,
          ) ?? 0
        }
        onStart={handleStart}
      />
    )
  }

  return (
    <div className="w-full min-w-0 flex flex-col gap-5">
      {/* Desktop 2-Column or Mobile Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
        {/* Left Column: Workout Stats & Sticky Summary on Large Screens */}
        <div className="lg:col-span-4 xl:col-span-4 flex flex-col gap-4 lg:sticky lg:top-4">
          <div className="flex flex-col gap-3.5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-4 sm:p-5 shadow-lg">
            <WorkoutHeader />
            <WorkoutProgressBar />
          </div>
          <RestTimer />
        </div>

        {/* Right Column: Exercises Lineup */}
        <div className="lg:col-span-8 xl:col-span-8 flex flex-col gap-3.5">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-black uppercase tracking-wider text-primary">
              Exercise Routine ({session.exercises.length})
            </span>
            <span className="text-xs font-semibold text-[#A8A8A8]">
              Tap card to watch demo or log sets
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {session.exercises.map((exercise, index) => (
              <WorkoutExerciseListItem
                key={exercise.exerciseSessionId}
                exercise={exercise}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Finish / Complete Controls (Single Source) */}
      <div className="mt-auto">
        <StickyControls onFinish={handleFinish} />
      </div>

      <PRCelebration />
    </div>
  )
}

function StartPrompt({
  canStart,
  isRest,
  dayName,
  selectedDay,
  entriesCount,
  totalSets,
  onStart,
}: {
  canStart: boolean
  isRest: boolean
  dayName: string
  selectedDay: string
  entriesCount?: number
  totalSets?: number
  onStart: () => void
}) {
  return (
    <main className="mx-auto flex min-h-[80vh] w-full max-w-xl min-w-0 flex-col items-center justify-center gap-6 p-4 text-center sm:p-6">
      <div className="flex size-20 items-center justify-center rounded-3xl bg-primary/20 text-primary shadow-[0_0_35px_rgba(255,107,53,0.35)]">
        {isRest ? (
          <Sparkles className="size-10" aria-hidden="true" />
        ) : (
          <Dumbbell className="size-10" aria-hidden="true" />
        )}
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          {selectedDay.toUpperCase()} WORKOUT
        </span>
        <h1 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
          {dayName}
        </h1>
      </div>

      {isRest ? (
        <div className="max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <p className="text-base text-muted-foreground">
            Today is a scheduled recovery day. Rest, refuel, and let your muscles rebuild for tomorrow&apos;s session.
          </p>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-5">
          {entriesCount !== undefined && entriesCount > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-muted-foreground sm:gap-3 sm:text-sm">
              <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 sm:px-3.5">
                <ListChecks className="size-3.5 text-primary sm:size-4" />
                {entriesCount} Exercises
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 sm:px-3.5">
                <Flame className="size-3.5 text-warning sm:size-4" />
                {totalSets} Total Sets
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 sm:px-3.5">
                <Clock className="size-3.5 text-accent sm:size-4" />
                ~45 min
              </span>
            </div>
          )}

          <button
            type="button"
            onClick={onStart}
            disabled={!canStart}
            className="flex min-h-[52px] w-full items-center justify-center gap-3 rounded-2xl bg-primary text-base font-bold text-primary-foreground shadow-[0_0_30px_rgba(255,107,53,0.4)] transition-all hover:bg-primary/90 disabled:opacity-50 active:scale-95 sm:min-h-[56px] sm:text-lg"
          >
            <Play className="size-5 fill-primary-foreground" />
            Start Workout
          </button>
        </div>
      )}
    </main>
  )
}

/** Dedupe PRs by their deterministic id (last write wins). */
function dedupeById(prs: ReadonlyArray<PersonalRecord>): PersonalRecord[] {
  const byId = new Map<string, PersonalRecord>()
  for (const pr of prs) byId.set(pr.id, pr)
  return [...byId.values()]
}

function buildSessionDoc(
  live: NonNullable<ReturnType<typeof useSessionStore.getState>['session']>,
  durationSeconds: number,
): WorkoutSession {
  const now = new Date()
  const completedSets = live.exercises.reduce(
    (acc, ex) => acc + ex.sets.filter((s) => s.isCompleted).length,
    0,
  )
  const totalVolumeKg = live.exercises.reduce(
    (acc, ex) =>
      acc +
      ex.sets
        .filter((s) => s.isCompleted && s.actualReps !== undefined)
        .reduce((a, s) => a + s.weightKg * (s.actualReps as number), 0),
    0,
  )
  return {
    id: live.id,
    uid: live.uid,
    dayId: live.dayId,
    workoutName: live.workoutName,
    status: live.status,
    startedAt: live.startedAtMs ? new Date(live.startedAtMs) : now,
    ...(live.completedAtMs ? { completedAt: new Date(live.completedAtMs) } : {}),
    durationSeconds,
    totalSets: live.exercises.reduce(
      (acc, ex) => acc + Math.max(ex.prescription.targetSets, ex.sets.length),
      0,
    ),
    completedSets,
    totalVolumeKg,
    createdAt: now,
    updatedAt: now,
    planId: live.planId,
    deviceId: live.deviceId,
    schemaVersion: live.schemaVersion,
    summaryApplied: false,
  }
}

function buildExerciseDoc(
  ex: NonNullable<
    ReturnType<typeof useSessionStore.getState>['session']
  >['exercises'][number],
): ExerciseSession {
  return {
    id: ex.exerciseSessionId,
    sessionId: ex.exerciseSessionId.split('__')[0],
    exerciseId: ex.exerciseId,
    order: ex.order,
    ...(ex.supersetGroup ? { supersetGroup: ex.supersetGroup } : {}),
    targetPrescription: ex.prescription,
    sessionCompleted: false,
  }
}
