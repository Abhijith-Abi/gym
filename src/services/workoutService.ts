import {
  getDocs,
  type QueryDocumentSnapshot,
} from 'firebase/firestore'
import { getDb } from '@/lib/firebase/config'
import {
  workoutPlanConverter,
  workoutSessionConverter,
} from '@/lib/firebase/converters'
import {
  sessionsCollection,
  workoutPlansCollection,
} from '@/lib/firebase/firestore'
import {
  completedSessionsQuery,
  sessionsInRangeQuery,
} from '@/lib/firebase/queries'
import type { ServiceResult, WorkoutPlan, WorkoutSession } from '@/types'
import { mapError, notConfigured, ok } from './serviceResult'

/**
 * Workout plans + paginated history reads (FR-16/19, design C.16 step 11).
 * History uses the composite (status, completedAt) index with limit +
 * startAfter cursor pagination (C.4). Calendar reads use the startedAt-range
 * query. Guards on a non-null client; empty env short-circuits (C.2).
 */

export async function listWorkoutPlans(
  uid: string,
): Promise<ServiceResult<WorkoutPlan[]>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const col = workoutPlansCollection(db, uid).withConverter(
      workoutPlanConverter,
    )
    const snap = await getDocs(col)
    return ok(snap.docs.map((d) => d.data()))
  } catch (e) {
    return mapError(e)
  }
}

export interface SessionPage {
  sessions: WorkoutSession[]
  /** Cursor for the next page; undefined when the last page was returned. */
  cursor?: QueryDocumentSnapshot
  hasMore: boolean
}

/**
 * One page of completed sessions (newest first). Pass the previous page's
 * `cursor` to fetch the next page.
 */
export async function listCompletedSessionsPage(
  uid: string,
  pageSize = 25,
  cursor?: QueryDocumentSnapshot,
): Promise<ServiceResult<SessionPage>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const col = sessionsCollection(db, uid).withConverter(
      workoutSessionConverter,
    )
    const snap = await getDocs(completedSessionsQuery(col, pageSize, cursor))
    const docs = snap.docs
    return ok({
      sessions: docs.map((d) => d.data()),
      cursor: docs.length > 0 ? docs[docs.length - 1] : undefined,
      hasMore: docs.length === pageSize,
    })
  } catch (e) {
    return mapError(e)
  }
}

/** Sessions started within [start, end) for the monthly calendar (C.4). */
export async function listSessionsInRange(
  uid: string,
  startInclusive: Date,
  endExclusive: Date,
): Promise<ServiceResult<WorkoutSession[]>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const col = sessionsCollection(db, uid).withConverter(
      workoutSessionConverter,
    )
    const snap = await getDocs(
      sessionsInRangeQuery(col, startInclusive, endExclusive),
    )
    return ok(snap.docs.map((d) => d.data()))
  } catch (e) {
    return mapError(e)
  }
}
