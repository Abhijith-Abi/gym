import { getDoc, getDocs, runTransaction, serverTimestamp } from 'firebase/firestore'
import { getDb } from '@/lib/firebase/config'
import {
  exerciseHistoryConverter,
  monthlySummaryConverter,
  weeklySummaryConverter,
} from '@/lib/firebase/converters'
import {
  exerciseHistoryCollection,
  monthlySummariesCollection,
  monthlySummaryDocRef,
  sessionDocRef,
  weeklySummariesCollection,
  weeklySummaryDocRef,
} from '@/lib/firebase/firestore'
import { emptyMuscleVolume } from '@/lib/volume'
import type { SessionSummaryDelta } from '@/lib/sync/summaryKeys'
import type {
  ExerciseHistory,
  MonthlySummary,
  MuscleGroup,
  MuscleVolume,
  ServiceResult,
  WeeklySummary,
} from '@/types'
import { mapError, notConfigured, ok } from './serviceResult'

/**
 * Analytics summaries + the composite completion's Step 3 (design C.7).
 *
 * Step 3 is a SEPARATE `runTransaction` from the Step-2 completion batch (so
 * summary contention never blocks session persistence, and a summary retry can
 * never re-run the session write). It spans the session doc + both period docs
 * (weekly + monthly) and:
 *   1. reads the session doc FIRST;
 *   2. if `summaryApplied === true`, returns a no-op (durable, per-session
 *      idempotency marker — a late replay can never double-count);
 *   3. else adds the session deltas to the weekly AND monthly summaries AND
 *      flips `summaryApplied = true` on the session via a MERGE update in the
 *      SAME transaction (preserving every training field so `validSession`
 *      passes post-merge, HIGH-2). The toggle carries NO baseUpdatedAt
 *      precondition — the `summaryApplied` pre-image IS its concurrency guard.
 *
 * Because the idempotency marker is a single per-session flag, the weekly and
 * monthly increments share one transaction so the flag flips exactly once after
 * BOTH periods are applied — a second-device replay then reads
 * `summaryApplied === true` and short-circuits to a no-op before any write
 * (MEDIUM-3; the rules-level `== false` guard is only a backstop).
 */

export async function getWeeklySummary(
  uid: string,
  weekId: string,
): Promise<ServiceResult<WeeklySummary | null>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const ref = weeklySummaryDocRef(db, uid, weekId).withConverter(
      weeklySummaryConverter,
    )
    const snap = await getDoc(ref)
    return ok(snap.exists() ? snap.data() : null)
  } catch (e) {
    return mapError(e)
  }
}

export async function getMonthlySummary(
  uid: string,
  monthId: string,
): Promise<ServiceResult<MonthlySummary | null>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const ref = monthlySummaryDocRef(db, uid, monthId).withConverter(
      monthlySummaryConverter,
    )
    const snap = await getDoc(ref)
    return ok(snap.exists() ? snap.data() : null)
  } catch (e) {
    return mapError(e)
  }
}

/**
 * Pure Step-3 idempotency decision (design C.7). Given the session's current
 * `summaryApplied` pre-image, decide whether the summary transaction should
 * apply the deltas or short-circuit to a no-op. A late replay — even after
 * thousands of newer sessions — reads `summaryApplied === true` and is a no-op,
 * so it can never double-count.
 */
export function shouldApplySummary(
  sessionExists: boolean,
  summaryApplied: boolean | undefined,
): 'applied' | 'noop' {
  if (!sessionExists) return 'noop'
  return summaryApplied === true ? 'noop' : 'applied'
}

function addMuscleVolume(base: MuscleVolume, delta: MuscleVolume): MuscleVolume {
  const out = { ...base }
  for (const key of Object.keys(delta) as MuscleGroup[]) {
    out[key] = (out[key] ?? 0) + (delta[key] ?? 0)
  }
  return out
}

export interface ApplySummaryInput {
  uid: string
  sessionId: string
  weekId: string
  monthId: string
  delta: SessionSummaryDelta
}

/**
 * Step 3 summary transaction (C.7). Idempotent via the session's
 * `summaryApplied` flag. Returns `'noop'` when the session is missing or the
 * summary was already applied (another device won the race) — the caller treats
 * both as SUCCESS, never a retryable error.
 */
export async function applySessionSummaries(
  input: ApplySummaryInput,
): Promise<ServiceResult<'applied' | 'noop'>> {
  const db = getDb()
  if (!db) return notConfigured()
  const { uid, sessionId, weekId, monthId, delta } = input
  try {
    const result = await runTransaction(db, async (tx) => {
      const sessionRef = sessionDocRef(db, uid, sessionId)
      const sessionSnap = await tx.get(sessionRef)
      const decision = shouldApplySummary(
        sessionSnap.exists(),
        sessionSnap.exists() ? sessionSnap.data().summaryApplied : undefined,
      )
      if (decision === 'noop') return 'noop' as const

      const weekRef = weeklySummaryDocRef(db, uid, weekId)
      const monthRef = monthlySummaryDocRef(db, uid, monthId)
      const [weekSnap, monthSnap] = [await tx.get(weekRef), await tx.get(monthRef)]
      const prevWeek = weekSnap.exists() ? weekSnap.data() : undefined
      const prevMonth = monthSnap.exists() ? monthSnap.data() : undefined

      tx.set(weekRef, {
        uid,
        weekId,
        workouts: (prevWeek?.workouts ?? 0) + delta.workouts,
        totalVolumeKg: (prevWeek?.totalVolumeKg ?? 0) + delta.totalVolumeKg,
        volumeByMuscle: addMuscleVolume(
          (prevWeek?.volumeByMuscle as MuscleVolume) ?? emptyMuscleVolume(),
          delta.volumeByMuscle,
        ),
        prCount: (prevWeek?.prCount ?? 0) + delta.prCount,
        streakDays: delta.streakDays ?? prevWeek?.streakDays ?? 0,
        updatedAt: serverTimestamp(),
      })

      tx.set(monthRef, {
        uid,
        monthId,
        workouts: (prevMonth?.workouts ?? 0) + delta.workouts,
        totalVolumeKg: (prevMonth?.totalVolumeKg ?? 0) + delta.totalVolumeKg,
        volumeByMuscle: addMuscleVolume(
          (prevMonth?.volumeByMuscle as MuscleVolume) ?? emptyMuscleVolume(),
          delta.volumeByMuscle,
        ),
        prCount: (prevMonth?.prCount ?? 0) + delta.prCount,
        updatedAt: serverTimestamp(),
      })

      // MERGE toggle (HIGH-2): preserve every training field so validSession
      // passes post-merge; only summaryApplied + updatedAt change. Flipped once,
      // after both periods are applied.
      tx.set(
        sessionRef,
        { summaryApplied: true, updatedAt: serverTimestamp() },
        { merge: true },
      )
      return 'applied' as const
    })
    return ok(result)
  } catch (e) {
    return mapError(e)
  }
}

/* ------------------------------------------------------------------ */
/* Report/chart reads over the SUMMARY docs (FR-28, not full history)  */
/* ------------------------------------------------------------------ */

/** All weekly summary docs (small; one per ISO week). */
export async function listWeeklySummaries(
  uid: string,
): Promise<ServiceResult<WeeklySummary[]>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const col = weeklySummariesCollection(db, uid).withConverter(
      weeklySummaryConverter,
    )
    const snap = await getDocs(col)
    return ok(snap.docs.map((d) => d.data()))
  } catch (e) {
    return mapError(e)
  }
}

/** All monthly summary docs (small; one per month). */
export async function listMonthlySummaries(
  uid: string,
): Promise<ServiceResult<MonthlySummary[]>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const col = monthlySummariesCollection(db, uid).withConverter(
      monthlySummaryConverter,
    )
    const snap = await getDocs(col)
    return ok(snap.docs.map((d) => d.data()))
  } catch (e) {
    return mapError(e)
  }
}

/** Bounded per-exercise history docs for the StrengthChart (C.4). */
export async function listExerciseHistories(
  uid: string,
): Promise<ServiceResult<ExerciseHistory[]>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const col = exerciseHistoryCollection(db, uid).withConverter(
      exerciseHistoryConverter,
    )
    const snap = await getDocs(col)
    return ok(snap.docs.map((d) => d.data()))
  } catch (e) {
    return mapError(e)
  }
}
