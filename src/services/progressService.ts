import { getDoc, getDocs } from 'firebase/firestore'
import { getDb } from '@/lib/firebase/config'
import {
  exerciseHistoryConverter,
  personalRecordConverter,
} from '@/lib/firebase/converters'
import {
  exerciseHistoryDocRef,
  personalRecordsCollection,
} from '@/lib/firebase/firestore'
import { personalRecordsForExerciseQuery } from '@/lib/firebase/queries'
import type { ExerciseHistory, PersonalRecord, ServiceResult } from '@/types'
import { mapError, notConfigured, ok } from './serviceResult'

/**
 * Progress reads for the PR engine (design C.7 Step 1). The PR DETECTION logic
 * itself is a pure lib (src/lib/analytics/personalRecords.ts) fed by the
 * bounded exerciseHistory read here; nothing is detected inside a transaction.
 * Guards on a non-null client; empty env short-circuits (C.2).
 */

/** Bounded read of one exercise's history (the Previous-Performance source). */
export async function getExerciseHistory(
  uid: string,
  exerciseId: string,
): Promise<ServiceResult<ExerciseHistory | null>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const ref = exerciseHistoryDocRef(db, uid, exerciseId).withConverter(
      exerciseHistoryConverter,
    )
    const snap = await getDoc(ref)
    return ok(snap.exists() ? snap.data() : null)
  } catch (e) {
    return mapError(e)
  }
}

/** Read history for several exercises (one bounded doc read each). */
export async function getExerciseHistories(
  uid: string,
  exerciseIds: ReadonlyArray<string>,
): Promise<ServiceResult<ExerciseHistory[]>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const histories: ExerciseHistory[] = []
    for (const id of exerciseIds) {
      const ref = exerciseHistoryDocRef(db, uid, id).withConverter(
        exerciseHistoryConverter,
      )
      const snap = await getDoc(ref)
      if (snap.exists()) histories.push(snap.data())
    }
    return ok(histories)
  } catch (e) {
    return mapError(e)
  }
}

/** PRs for one exercise, newest first (C.4). */
export async function listPersonalRecordsForExercise(
  uid: string,
  exerciseId: string,
): Promise<ServiceResult<PersonalRecord[]>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const col = personalRecordsCollection(db, uid).withConverter(
      personalRecordConverter,
    )
    const snap = await getDocs(personalRecordsForExerciseQuery(col, exerciseId))
    return ok(snap.docs.map((d) => d.data()))
  } catch (e) {
    return mapError(e)
  }
}

/** All PRs for a user (used by achievements/dashboard counts). */
export async function listPersonalRecords(
  uid: string,
): Promise<ServiceResult<PersonalRecord[]>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const col = personalRecordsCollection(db, uid).withConverter(
      personalRecordConverter,
    )
    const snap = await getDocs(col)
    return ok(snap.docs.map((d) => d.data()))
  } catch (e) {
    return mapError(e)
  }
}
