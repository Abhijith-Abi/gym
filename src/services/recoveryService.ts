import { getDoc, getDocs, setDoc } from 'firebase/firestore'
import { getDb } from '@/lib/firebase/config'
import { recoveryLogConverter } from '@/lib/firebase/converters'
import {
  recoveryLogDocRef,
  recoveryLogsCollection,
} from '@/lib/firebase/firestore'
import type { RecoveryLog, ServiceResult } from '@/types'
import { mapError, notConfigured, ok } from './serviceResult'

/**
 * Recovery + hydration (FR-24/26, design C.16 step 4). Logs upsert at
 * recoveryLogs/{yyyy-MM-dd} — DATE-KEYED so a repeat log for the same day is an
 * idempotent single-doc merge, never a duplicate (C.7). recoveryScore is
 * computed client-side (src/lib/recovery.ts) and framed strictly as a TRAINING
 * insight, not medical advice. Guards on a non-null client; empty env
 * short-circuits (C.2).
 */

/** Read one day's recovery log (null when absent). */
export async function getRecoveryLog(
  uid: string,
  date: string,
): Promise<ServiceResult<RecoveryLog | null>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const ref = recoveryLogDocRef(db, uid, date).withConverter(
      recoveryLogConverter,
    )
    const snap = await getDoc(ref)
    return ok(snap.exists() ? snap.data() : null)
  } catch (e) {
    return mapError(e)
  }
}

/** Idempotent upsert of a day's recovery log (date-keyed, C.7). */
export async function upsertRecoveryLog(
  log: RecoveryLog,
): Promise<ServiceResult<void>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const ref = recoveryLogDocRef(db, log.uid, log.date).withConverter(
      recoveryLogConverter,
    )
    await setDoc(ref, log, { merge: true })
    return ok(undefined)
  } catch (e) {
    return mapError(e)
  }
}

/** Recent recovery logs (bounded) for the recovery trend view. */
export async function listRecoveryLogs(
  uid: string,
): Promise<ServiceResult<RecoveryLog[]>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const col = recoveryLogsCollection(db, uid).withConverter(
      recoveryLogConverter,
    )
    const snap = await getDocs(col)
    return ok(snap.docs.map((d) => d.data()))
  } catch (e) {
    return mapError(e)
  }
}
