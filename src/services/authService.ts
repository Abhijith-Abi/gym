import {
  onAuthStateChanged,
  updateProfile,
  type User,
} from 'firebase/auth'
import {
  confirmReset,
  emailRegister,
  emailSignIn,
  googleSignIn,
  logout as fbLogout,
  sendReset,
} from '@/lib/firebase/auth'
import { getFirebaseAuth } from '@/lib/firebase/config'
import type { ServiceResult } from '@/types'
import { mapError, notConfigured, ok } from './serviceResult'

/**
 * Email/password + Google auth flows (C.5 step, FR-1). Every function guards on
 * a non-null Firebase client and otherwise returns firebase/not-configured
 * (C.2). Raw Firebase errors are mapped to friendly messages (FR-38, C.12).
 */

/** Current signed-in uid (null if signed out). */
export async function getCurrentUserId(): Promise<ServiceResult<string | null>> {
  const auth = getFirebaseAuth()
  if (!auth) return notConfigured()
  return ok(auth.currentUser?.uid ?? null)
}

/**
 * Subscribe to auth-state changes. Returns an unsubscribe fn, or a no-op when
 * Firebase is absent (the caller treats absent config via firebaseConfigPresent).
 */
export function subscribeToAuth(
  onChange: (user: User | null) => void,
): () => void {
  const auth = getFirebaseAuth()
  if (!auth) return () => {}
  return onAuthStateChanged(auth, onChange)
}

export async function login(
  email: string,
  password: string,
): Promise<ServiceResult<string>> {
  const auth = getFirebaseAuth()
  if (!auth) return notConfigured()
  try {
    const cred = await emailSignIn(auth, email, password)
    return ok(cred.user.uid)
  } catch (error) {
    return mapError(error)
  }
}

export async function register(
  displayName: string,
  email: string,
  password: string,
): Promise<ServiceResult<string>> {
  const auth = getFirebaseAuth()
  if (!auth) return notConfigured()
  try {
    const cred = await emailRegister(auth, email, password)
    if (displayName) {
      await updateProfile(cred.user, { displayName })
    }
    return ok(cred.user.uid)
  } catch (error) {
    return mapError(error)
  }
}

export async function loginWithGoogle(): Promise<ServiceResult<string>> {
  const auth = getFirebaseAuth()
  if (!auth) return notConfigured()
  try {
    const cred = await googleSignIn(auth)
    return ok(cred.user.uid)
  } catch (error) {
    return mapError(error)
  }
}

export async function sendPasswordReset(
  email: string,
): Promise<ServiceResult<null>> {
  const auth = getFirebaseAuth()
  if (!auth) return notConfigured()
  try {
    await sendReset(auth, email)
    return ok(null)
  } catch (error) {
    return mapError(error)
  }
}

export async function resetPassword(
  oobCode: string,
  newPassword: string,
): Promise<ServiceResult<null>> {
  const auth = getFirebaseAuth()
  if (!auth) return notConfigured()
  try {
    await confirmReset(auth, oobCode, newPassword)
    return ok(null)
  } catch (error) {
    return mapError(error)
  }
}

export async function logout(): Promise<ServiceResult<null>> {
  const auth = getFirebaseAuth()
  if (!auth) return notConfigured()
  try {
    await fbLogout(auth)
    return ok(null)
  } catch (error) {
    return mapError(error)
  }
}
