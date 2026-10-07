import { getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { getDb } from '@/lib/firebase/config'
import {
  userProfileConverter,
  userRootConverter,
  userSettingsConverter,
} from '@/lib/firebase/converters'
import {
  profileDataRef,
  settingsRef,
  userRootRef,
} from '@/lib/firebase/firestore'
import type {
  ServiceResult,
  UserProfile,
  UserSettings,
} from '@/types'
import { DEFAULT_PROGRESSION_CONFIG } from '@/lib/progression'
import { mapError, notConfigured, ok } from './serviceResult'

/**
 * Reads/writes the single authoritative profile at users/{uid}/profile/data,
 * the root ownership doc users/{uid}, and users/{uid}/settings/preferences.
 * All Firestore access funnels through here (C.1); UI never touches the SDK.
 */

/**
 * Read the profile (C.2 — AuthGuard routing reads this directly). Returns
 * data:null when the profile doc does not exist yet (new account → onboarding).
 */
export async function getProfile(
  uid: string,
): Promise<ServiceResult<UserProfile | null>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const snap = await getDoc(profileDataRef(db, uid).withConverter(userProfileConverter))
    return ok(snap.exists() ? snap.data() : null)
  } catch (error) {
    return mapError(error)
  }
}

export interface OnboardingWrite {
  uid: string
  email: string
  displayName: string
  photoURL?: string
  goal: UserProfile['goal']
  experience: UserProfile['experience']
  preferredUnit: UserProfile['preferredUnit']
  /** deviceId minted once by settingsStore (C.3). */
  deviceId: string
}

/** Default UserSettings for a brand-new account (C.3). */
export function defaultSettings(deviceId: string): UserSettings {
  return {
    rpeMode: 'None',
    restDefaultsSeconds: 90,
    autoStartRest: true,
    smartRestEnabled: true,
    soundEnabled: true,
    hapticsEnabled: true,
    hydrationTargetMl: 3000,
    hydrationEnabled: false,
    progressionConfig: DEFAULT_PROGRESSION_CONFIG,
    notificationsEnabled: false,
    deviceId,
  }
}

/**
 * Complete onboarding: write the root ownership doc, the single-copy profile
 * (onboardingCompleted:true, preferredUnit lives ONLY here), and settings
 * preferences (NO preferredUnit). Three single-doc idempotent writes keyed by
 * uid, never email (AC-6, C.2).
 */
export async function completeOnboarding(
  input: OnboardingWrite,
): Promise<ServiceResult<UserProfile>> {
  const db = getDb()
  if (!db) return notConfigured()
  const now = new Date()
  const profile: UserProfile = {
    uid: input.uid,
    email: input.email,
    displayName: input.displayName,
    ...(input.photoURL ? { photoURL: input.photoURL } : {}),
    goal: input.goal,
    experience: input.experience,
    preferredUnit: input.preferredUnit,
    onboardingCompleted: true,
    createdAt: now,
    updatedAt: now,
  }
  try {
    await setDoc(userRootRef(db, input.uid).withConverter(userRootConverter), {
      uid: input.uid,
      createdAt: now,
      updatedAt: now,
    })
    await setDoc(
      profileDataRef(db, input.uid).withConverter(userProfileConverter),
      profile,
    )
    await setDoc(
      settingsRef(db, input.uid).withConverter(userSettingsConverter),
      defaultSettings(input.deviceId),
    )
    return ok(profile)
  } catch (error) {
    return mapError(error)
  }
}

/** Editable profile fields (display name, photo, goal, experience, unit; FR-3). */
export type ProfileUpdate = Partial<
  Pick<
    UserProfile,
    'displayName' | 'photoURL' | 'goal' | 'experience' | 'preferredUnit'
  >
>

/** Patch the profile doc (merge update; keyed by uid). */
export async function updateProfile(
  uid: string,
  patch: ProfileUpdate,
): Promise<ServiceResult<null>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    await updateDoc(profileDataRef(db, uid), {
      ...patch,
      updatedAt: new Date(),
    })
    return ok(null)
  } catch (error) {
    return mapError(error)
  }
}

/** Read settings preferences (null if not written yet). */
export async function getSettings(
  uid: string,
): Promise<ServiceResult<UserSettings | null>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const snap = await getDoc(settingsRef(db, uid).withConverter(userSettingsConverter))
    return ok(snap.exists() ? snap.data() : null)
  } catch (error) {
    return mapError(error)
  }
}

/** Patch settings preferences (merge update). */
export async function updateSettings(
  uid: string,
  patch: Partial<UserSettings>,
): Promise<ServiceResult<null>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    await updateDoc(settingsRef(db, uid), { ...patch })
    return ok(null)
  } catch (error) {
    return mapError(error)
  }
}
