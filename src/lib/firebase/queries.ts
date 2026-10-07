import {
  limit as fbLimit,
  orderBy,
  query,
  startAfter,
  where,
  type DocumentData,
  type DocumentSnapshot,
  type Query,
  type QueryConstraint,
} from 'firebase/firestore'
import type { CollectionReference } from 'firebase/firestore'
import type { SessionStatus } from '@/types'

const DEFAULT_PAGE = 25

/**
 * Completed-session history: status==COMPLETED, newest first, paginated (C.4).
 * Generic in the collection's converted type so the converter propagates to the
 * returned Query (and thus to getDocs).
 */
export function completedSessionsQuery<T = DocumentData>(
  col: CollectionReference<T>,
  pageSize = DEFAULT_PAGE,
  after?: DocumentSnapshot,
): Query<T> {
  const constraints: QueryConstraint[] = [
    where('status', '==', 'COMPLETED' satisfies SessionStatus),
    orderBy('completedAt', 'desc'),
    fbLimit(pageSize),
  ]
  if (after) constraints.push(startAfter(after))
  return query(col, ...constraints)
}

/** Calendar month window on startedAt (C.4). */
export function sessionsInRangeQuery<T = DocumentData>(
  col: CollectionReference<T>,
  startInclusive: Date,
  endExclusive: Date,
): Query<T> {
  return query(
    col,
    where('startedAt', '>=', startInclusive),
    where('startedAt', '<', endExclusive),
    orderBy('startedAt', 'asc'),
  )
}

/** PRs for one exercise, newest first (C.4). */
export function personalRecordsForExerciseQuery<T = DocumentData>(
  col: CollectionReference<T>,
  exerciseId: string,
  pageSize = DEFAULT_PAGE,
): Query<T> {
  return query(
    col,
    where('exerciseId', '==', exerciseId),
    orderBy('achievedAt', 'desc'),
    fbLimit(pageSize),
  )
}

/** Body-weight/measurement trend, newest first, bounded (C.4). */
export function bodyMeasurementsTrendQuery<T = DocumentData>(
  col: CollectionReference<T>,
  pageSize = DEFAULT_PAGE,
): Query<T> {
  return query(col, orderBy('date', 'desc'), fbLimit(pageSize))
}
