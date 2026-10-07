import {
  collection,
  doc,
  type CollectionReference,
  type DocumentReference,
  type Firestore,
} from 'firebase/firestore'
import { getDb } from './config'

/** Re-export the guarded Firestore getter for service callers. */
export { getDb }

/** users/{uid} root ownership doc path. */
export function userRootRef(db: Firestore, uid: string): DocumentReference {
  return doc(db, 'users', uid)
}

/** A collection under users/{uid}. */
export function userCollection(
  db: Firestore,
  uid: string,
  name: string,
): CollectionReference {
  return collection(db, 'users', uid, name)
}

/** A specific doc under a users/{uid} collection. */
export function userDoc(
  db: Firestore,
  uid: string,
  name: string,
  docId: string,
): DocumentReference {
  return doc(db, 'users', uid, name, docId)
}

/** users/{uid}/profile/data — the single authoritative profile (C.2). */
export function profileDataRef(db: Firestore, uid: string): DocumentReference {
  return doc(db, 'users', uid, 'profile', 'data')
}

/** users/{uid}/settings/preferences. */
export function settingsRef(db: Firestore, uid: string): DocumentReference {
  return doc(db, 'users', uid, 'settings', 'preferences')
}

/** users/{uid}/workoutSessions collection. */
export function sessionsCollection(
  db: Firestore,
  uid: string,
): CollectionReference {
  return collection(db, 'users', uid, 'workoutSessions')
}

/** users/{uid}/workoutSessions/{sessionId}. */
export function sessionDocRef(
  db: Firestore,
  uid: string,
  sessionId: string,
): DocumentReference {
  return doc(db, 'users', uid, 'workoutSessions', sessionId)
}

/** .../workoutSessions/{sessionId}/exercises collection. */
export function exerciseSessionsCollection(
  db: Firestore,
  uid: string,
  sessionId: string,
): CollectionReference {
  return collection(db, 'users', uid, 'workoutSessions', sessionId, 'exercises')
}

/** .../exercises/{exerciseSessionId}. */
export function exerciseSessionDocRef(
  db: Firestore,
  uid: string,
  sessionId: string,
  exerciseSessionId: string,
): DocumentReference {
  return doc(
    db,
    'users',
    uid,
    'workoutSessions',
    sessionId,
    'exercises',
    exerciseSessionId,
  )
}

/** .../exercises/{exerciseSessionId}/sets collection. */
export function setsCollection(
  db: Firestore,
  uid: string,
  sessionId: string,
  exerciseSessionId: string,
): CollectionReference {
  return collection(
    db,
    'users',
    uid,
    'workoutSessions',
    sessionId,
    'exercises',
    exerciseSessionId,
    'sets',
  )
}

/** .../exercises/{exerciseSessionId}/sets/{setId}. */
export function setLogDocRef(
  db: Firestore,
  uid: string,
  sessionId: string,
  exerciseSessionId: string,
  setId: string,
): DocumentReference {
  return doc(
    db,
    'users',
    uid,
    'workoutSessions',
    sessionId,
    'exercises',
    exerciseSessionId,
    'sets',
    setId,
  )
}

/** users/{uid}/exerciseHistory/{exerciseId}. */
export function exerciseHistoryDocRef(
  db: Firestore,
  uid: string,
  exerciseId: string,
): DocumentReference {
  return doc(db, 'users', uid, 'exerciseHistory', exerciseId)
}

/** users/{uid}/personalRecords collection. */
export function personalRecordsCollection(
  db: Firestore,
  uid: string,
): CollectionReference {
  return collection(db, 'users', uid, 'personalRecords')
}

/** users/{uid}/personalRecords/{recordId}. */
export function personalRecordDocRef(
  db: Firestore,
  uid: string,
  recordId: string,
): DocumentReference {
  return doc(db, 'users', uid, 'personalRecords', recordId)
}

/** users/{uid}/workoutPlans/{planId}. */
export function workoutPlanDocRef(
  db: Firestore,
  uid: string,
  planId: string,
): DocumentReference {
  return doc(db, 'users', uid, 'workoutPlans', planId)
}

/** users/{uid}/analyticsWeekly/{weekId} where weekId = yyyy-'W'II (C.4). */
export function weeklySummaryDocRef(
  db: Firestore,
  uid: string,
  weekId: string,
): DocumentReference {
  return doc(db, 'users', uid, 'analyticsWeekly', weekId)
}

/** users/{uid}/analyticsMonthly/{monthId} where monthId = yyyy-MM (C.4). */
export function monthlySummaryDocRef(
  db: Firestore,
  uid: string,
  monthId: string,
): DocumentReference {
  return doc(db, 'users', uid, 'analyticsMonthly', monthId)
}

/** users/{uid}/analyticsWeekly collection (C.4). */
export function weeklySummariesCollection(
  db: Firestore,
  uid: string,
): CollectionReference {
  return collection(db, 'users', uid, 'analyticsWeekly')
}

/** users/{uid}/analyticsMonthly collection (C.4). */
export function monthlySummariesCollection(
  db: Firestore,
  uid: string,
): CollectionReference {
  return collection(db, 'users', uid, 'analyticsMonthly')
}

/** users/{uid}/exerciseHistory collection (C.4). */
export function exerciseHistoryCollection(
  db: Firestore,
  uid: string,
): CollectionReference {
  return collection(db, 'users', uid, 'exerciseHistory')
}

/** users/{uid}/workoutPlans collection (C.4). */
export function workoutPlansCollection(
  db: Firestore,
  uid: string,
): CollectionReference {
  return collection(db, 'users', uid, 'workoutPlans')
}

/** users/{uid}/bodyMeasurements collection (C.4). */
export function bodyMeasurementsCollection(
  db: Firestore,
  uid: string,
): CollectionReference {
  return collection(db, 'users', uid, 'bodyMeasurements')
}

/** users/{uid}/bodyMeasurements/{id}. */
export function bodyMeasurementDocRef(
  db: Firestore,
  uid: string,
  id: string,
): DocumentReference {
  return doc(db, 'users', uid, 'bodyMeasurements', id)
}

/** users/{uid}/progressPhotos collection (C.4). */
export function progressPhotosCollection(
  db: Firestore,
  uid: string,
): CollectionReference {
  return collection(db, 'users', uid, 'progressPhotos')
}

/** users/{uid}/progressPhotos/{id}. */
export function progressPhotoDocRef(
  db: Firestore,
  uid: string,
  id: string,
): DocumentReference {
  return doc(db, 'users', uid, 'progressPhotos', id)
}

/** users/{uid}/recoveryLogs/{date} where date = yyyy-MM-dd (C.4). */
export function recoveryLogDocRef(
  db: Firestore,
  uid: string,
  date: string,
): DocumentReference {
  return doc(db, 'users', uid, 'recoveryLogs', date)
}

/** users/{uid}/recoveryLogs collection (C.4). */
export function recoveryLogsCollection(
  db: Firestore,
  uid: string,
): CollectionReference {
  return collection(db, 'users', uid, 'recoveryLogs')
}

/** users/{uid}/goals collection (C.4). */
export function goalsCollection(
  db: Firestore,
  uid: string,
): CollectionReference {
  return collection(db, 'users', uid, 'goals')
}

/** users/{uid}/goals/{id}. */
export function goalDocRef(
  db: Firestore,
  uid: string,
  id: string,
): DocumentReference {
  return doc(db, 'users', uid, 'goals', id)
}

/** users/{uid}/achievements collection (C.4). */
export function achievementsCollection(
  db: Firestore,
  uid: string,
): CollectionReference {
  return collection(db, 'users', uid, 'achievements')
}

/** users/{uid}/achievements/{key} — idempotent unlock (C.4). */
export function achievementDocRef(
  db: Firestore,
  uid: string,
  key: string,
): DocumentReference {
  return doc(db, 'users', uid, 'achievements', key)
}

/** users/{uid}/notes collection (C.4). */
export function notesCollection(
  db: Firestore,
  uid: string,
): CollectionReference {
  return collection(db, 'users', uid, 'notes')
}

/** users/{uid}/notes/{id}. */
export function noteDocRef(
  db: Firestore,
  uid: string,
  id: string,
): DocumentReference {
  return doc(db, 'users', uid, 'notes', id)
}
