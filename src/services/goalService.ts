import { deleteDoc, getDocs, setDoc } from 'firebase/firestore'
import { getDb } from '@/lib/firebase/config'
import {
  achievementConverter,
  goalConverter,
} from '@/lib/firebase/converters'
import {
  achievementDocRef,
  achievementsCollection,
  goalDocRef,
  goalsCollection,
} from '@/lib/firebase/firestore'
import { buildAchievementUnlocks, type AchievementMetrics } from '@/lib/achievements'
import { newlyUnlockedKeys } from '@/lib/achievements'
import type {
  Achievement,
  AchievementKey,
  GoalRecord,
  ServiceResult,
} from '@/types'
import { mapError, notConfigured, ok } from './serviceResult'

/**
 * Goals + achievements (FR-25/32, design C.16 step 5). Goals are single-doc
 * idempotent writes. Achievements unlock at achievements/{key} — the key is the
 * doc id, so re-unlocking is a harmless overwrite, never a duplicate (C.7
 * idempotency). Guards on a non-null client; empty env short-circuits (C.2).
 */

/* ------------------------------------------------------------------ */
/* Goals                                                               */
/* ------------------------------------------------------------------ */

export async function listGoals(
  uid: string,
): Promise<ServiceResult<GoalRecord[]>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const col = goalsCollection(db, uid).withConverter(goalConverter)
    const snap = await getDocs(col)
    return ok(snap.docs.map((d) => d.data()))
  } catch (e) {
    return mapError(e)
  }
}

export async function upsertGoal(
  goal: GoalRecord,
): Promise<ServiceResult<void>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const ref = goalDocRef(db, goal.uid, goal.id).withConverter(goalConverter)
    await setDoc(ref, goal, { merge: true })
    return ok(undefined)
  } catch (e) {
    return mapError(e)
  }
}

export async function deleteGoal(
  uid: string,
  id: string,
): Promise<ServiceResult<void>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    await deleteDoc(goalDocRef(db, uid, id))
    return ok(undefined)
  } catch (e) {
    return mapError(e)
  }
}

/* ------------------------------------------------------------------ */
/* Achievements                                                        */
/* ------------------------------------------------------------------ */

export async function listAchievements(
  uid: string,
): Promise<ServiceResult<Achievement[]>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const col = achievementsCollection(db, uid).withConverter(
      achievementConverter,
    )
    const snap = await getDocs(col)
    return ok(snap.docs.map((d) => d.data()))
  } catch (e) {
    return mapError(e)
  }
}

/** Idempotent unlock write (id = achievement key). */
export async function unlockAchievement(
  achievement: Achievement,
): Promise<ServiceResult<void>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const ref = achievementDocRef(
      db,
      achievement.uid,
      achievement.key,
    ).withConverter(achievementConverter)
    await setDoc(ref, achievement, { merge: true })
    return ok(undefined)
  } catch (e) {
    return mapError(e)
  }
}

/**
 * Evaluate metrics against the already-unlocked keys and persist any newly
 * qualifying achievements (idempotent, key-keyed). Returns the keys unlocked
 * this call.
 */
export async function evaluateAndUnlock(
  uid: string,
  metrics: AchievementMetrics,
  alreadyUnlocked: ReadonlyArray<AchievementKey>,
  now: Date = new Date(),
): Promise<ServiceResult<AchievementKey[]>> {
  const db = getDb()
  if (!db) return notConfigured()
  const keys = newlyUnlockedKeys(metrics, new Set(alreadyUnlocked))
  if (keys.length === 0) return ok([])
  try {
    const unlocks = buildAchievementUnlocks(uid, keys, now)
    for (const a of unlocks) {
      const ref = achievementDocRef(db, uid, a.key).withConverter(
        achievementConverter,
      )
      await setDoc(ref, a, { merge: true })
    }
    return ok(keys)
  } catch (e) {
    return mapError(e)
  }
}
