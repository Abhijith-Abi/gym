import {
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
  waitForPendingWrites,
  writeBatch,
} from 'firebase/firestore'
import { getDb } from '@/lib/firebase/config'
import {
  exerciseHistoryConverter,
  exerciseSessionConverter,
  personalRecordConverter,
  setLogConverter,
  workoutSessionConverter,
} from '@/lib/firebase/converters'
import {
  exerciseHistoryDocRef,
  exerciseSessionDocRef,
  personalRecordDocRef,
  sessionDocRef,
  sessionsCollection,
  setLogDocRef,
  setsCollection,
} from '@/lib/firebase/firestore'
import { completedSessionsQuery } from '@/lib/firebase/queries'
import type {
  ExerciseHistory,
  ExerciseSession,
  PersonalRecord,
  ServiceResult,
  SetLog,
  WorkoutSession,
} from '@/types'
import { mapError, notConfigured, ok } from './serviceResult'

/**
 * Session engine + the composite "complete session" op (design C.7). Guards on
 * a non-null Firestore client; under empty env every call short-circuits to
 * firebase/not-configured (C.2) — nothing throws at import/build.
 *
 * Write ownership (C.7 queue-authority boundary): single-doc, deterministic-id
 * writes (session create, exercise create, per-set log) go DIRECTLY through the
 * SDK (offline-cached). Only the composite completion is orchestrated here as a
 * `writeBatch` gated on `waitForPendingWrites` so the COMPLETED flip is strictly
 * last and no late set create hits a frozen parent (C.7 HIGH-1 barrier).
 */

/** Persist (create/merge) the session doc. */
export async function upsertSession(
  session: WorkoutSession,
): Promise<ServiceResult<void>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const ref = sessionDocRef(db, session.uid, session.id).withConverter(
      workoutSessionConverter,
    )
    await setDoc(ref, session, { merge: true })
    return ok(undefined)
  } catch (e) {
    return mapError(e)
  }
}

/** Persist (create/merge) an exercise-session doc under a session. */
export async function upsertExerciseSession(
  uid: string,
  sessionId: string,
  exercise: ExerciseSession,
): Promise<ServiceResult<void>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const ref = exerciseSessionDocRef(db, uid, sessionId, exercise.id).withConverter(
      exerciseSessionConverter,
    )
    await setDoc(ref, exercise, { merge: true })
    return ok(undefined)
  } catch (e) {
    return mapError(e)
  }
}

/**
 * Log a single set (create or update) directly through the SDK (C.7). The set
 * is stamped sessionCompleted:false so the rules' create-gate/freeze works. A
 * duration-based (HIIT) set omits actualReps entirely via the converter.
 */
export async function logSet(
  uid: string,
  sessionId: string,
  set: SetLog,
): Promise<ServiceResult<void>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const ref = setLogDocRef(
      db,
      uid,
      sessionId,
      set.exerciseSessionId,
      set.id,
    ).withConverter(setLogConverter)
    await setDoc(ref, { ...set, sessionCompleted: false }, { merge: true })
    return ok(undefined)
  } catch (e) {
    return mapError(e)
  }
}

export interface CompleteSessionInput {
  session: WorkoutSession
  exercises: ExerciseSession[]
  sets: SetLog[]
  personalRecords: PersonalRecord[]
  historyRollups: ExerciseHistory[]
}

/**
 * Composite completion (C.7 Step 2). PR detection + history rollups are
 * computed BEFORE this call (reads-before-writes, no in-transaction read). The
 * batch is gated on `waitForPendingWrites` so every queued single-doc set
 * create is acknowledged before the COMPLETED flip — the barrier that stops a
 * late set create from hitting a frozen parent. All ids are deterministic, so a
 * retry overwrites rather than duplicates (idempotent).
 */
export async function completeSession(
  input: CompleteSessionInput,
): Promise<ServiceResult<void>> {
  const db = getDb()
  if (!db) return notConfigured()
  const { session, exercises, sets, personalRecords, historyRollups } = input
  const { uid, id: sessionId } = session
  try {
    // Barrier: do not flip COMPLETED until the SDK has flushed every prior write
    // (including this session's SetLog creates). C.7 HIGH-1.
    await waitForPendingWrites(db)

    const batch = writeBatch(db)

    batch.set(
      sessionDocRef(db, uid, sessionId).withConverter(workoutSessionConverter),
      { ...session, status: 'COMPLETED' },
      { merge: true },
    )

    for (const ex of exercises) {
      batch.set(
        exerciseSessionDocRef(db, uid, sessionId, ex.id).withConverter(
          exerciseSessionConverter,
        ),
        { ...ex, sessionCompleted: true },
        { merge: true },
      )
    }

    for (const st of sets) {
      batch.set(
        setLogDocRef(db, uid, sessionId, st.exerciseSessionId, st.id).withConverter(
          setLogConverter,
        ),
        { ...st, sessionCompleted: true },
        { merge: true },
      )
    }

    for (const pr of personalRecords) {
      batch.set(
        personalRecordDocRef(db, uid, pr.id).withConverter(personalRecordConverter),
        pr,
        { merge: true },
      )
    }

    for (const h of historyRollups) {
      batch.set(
        exerciseHistoryDocRef(db, uid, h.exerciseId).withConverter(
          exerciseHistoryConverter,
        ),
        h,
        { merge: true },
      )
    }

    await batch.commit()
    return ok(undefined)
  } catch (e) {
    return mapError(e)
  }
}

/**
 * Step 3 bookkeeping toggle (C.7). The ONLY permitted post-completion mutation:
 * a merge update flipping summaryApplied false->true. Done with updateDoc/merge
 * so required training fields are preserved (never a replacing set()).
 */
export async function markSummaryApplied(
  uid: string,
  sessionId: string,
): Promise<ServiceResult<void>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    await updateDoc(sessionDocRef(db, uid, sessionId), {
      summaryApplied: true,
      updatedAt: serverTimestamp(),
    })
    return ok(undefined)
  } catch (e) {
    return mapError(e)
  }
}

/** Paginated completed-session history (newest first). */
export async function listRecentSessions(
  uid: string,
): Promise<ServiceResult<WorkoutSession[]>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const col = sessionsCollection(db, uid).withConverter(workoutSessionConverter)
    const snap = await getDocs(completedSessionsQuery(col))
    return ok(snap.docs.map((d) => d.data()))
  } catch (e) {
    return mapError(e)
  }
}

/** Read the logged sets under one exercise-session (bounded by session size). */
export async function listExerciseSets(
  uid: string,
  sessionId: string,
  exerciseSessionId: string,
): Promise<ServiceResult<SetLog[]>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const col = setsCollection(db, uid, sessionId, exerciseSessionId).withConverter(
      setLogConverter,
    )
    const snap = await getDocs(col)
    return ok(snap.docs.map((d) => d.data()))
  } catch (e) {
    return mapError(e)
  }
}
