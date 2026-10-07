import { FirebaseError } from 'firebase/app'
import { FIREBASE_NOT_CONFIGURED, type ServiceResult } from '@/types'

export function ok<T>(data: T): ServiceResult<T> {
  return { ok: true, data }
}

export function fail(code: string, message: string): ServiceResult<never> {
  return { ok: false, code, message }
}

/** Shared short-circuit when the Firebase client is absent (C.2). */
export function notConfigured(): ServiceResult<never> {
  return fail(
    FIREBASE_NOT_CONFIGURED,
    'ForgeFit is not connected to Firebase yet. Add your credentials to .env.local (see .env.local.example).',
  )
}

/** Map a raw Firebase/unknown error to a friendly ServiceResult (FR-38, C.12). */
export function mapError(error: unknown): ServiceResult<never> {
  if (error instanceof FirebaseError) {
    return fail(error.code, friendlyMessage(error.code))
  }
  if (error instanceof Error) {
    return fail('app/unknown', error.message || 'Something went wrong. Please try again.')
  }
  return fail('app/unknown', 'Something went wrong. Please try again.')
}

const FRIENDLY: Record<string, string> = {
  'auth/invalid-credential': 'That email or password is incorrect.',
  'auth/invalid-email': 'That email address looks invalid.',
  'auth/user-not-found': 'No account found for that email.',
  'auth/wrong-password': 'That email or password is incorrect.',
  'auth/email-already-in-use': 'An account already exists for that email.',
  'auth/weak-password': 'Please choose a stronger password (at least 6 characters).',
  'auth/popup-closed-by-user': 'The sign-in window was closed before finishing.',
  'auth/popup-blocked': 'Sign-in popup was blocked by the browser. Please allow popups or retry.',
  'auth/unauthorized-domain':
    'This domain (gym.abisolutions.online) is not authorized in Firebase. Please add gym.abisolutions.online under Firebase Console > Authentication > Settings > Authorized domains.',
  'auth/too-many-requests': 'Too many attempts. Please wait a moment and try again.',
  'auth/network-request-failed': 'Network error. Check your connection and try again.',
  'permission-denied': 'You do not have permission to perform that action.',
  unavailable: 'The service is temporarily unavailable. Changes will sync when you reconnect.',
  'storage/unauthorized': 'You do not have permission to access that file.',
  'storage/quota-exceeded': 'Storage limit reached.',
}

function friendlyMessage(code: string): string {
  return FRIENDLY[code] ?? 'Something went wrong. Please try again.'
}
