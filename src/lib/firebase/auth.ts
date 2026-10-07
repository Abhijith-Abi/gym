import {
  GoogleAuthProvider,
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  getRedirectResult,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  type Auth,
  type UserCredential,
} from 'firebase/auth'
import { getFirebaseAuth } from './config'

/** Thin wrappers over the guarded Auth getter (C.2). Each returns null-safely. */
export { getFirebaseAuth }

export function emailSignIn(
  auth: Auth,
  email: string,
  password: string,
): Promise<UserCredential> {
  return signInWithEmailAndPassword(auth, email, password)
}

export function emailRegister(
  auth: Auth,
  email: string,
  password: string,
): Promise<UserCredential> {
  return createUserWithEmailAndPassword(auth, email, password)
}

export async function googleSignIn(auth: Auth): Promise<UserCredential> {
  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  try {
    return await signInWithPopup(auth, provider)
  } catch (error: unknown) {
    const err = error as { code?: string }
    // If popup blocked or mobile device where popups fail/hang, fallback to redirect
    if (
      err?.code === 'auth/popup-blocked' ||
      err?.code === 'auth/cancelled-popup-request' ||
      (typeof navigator !== 'undefined' &&
        /iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
    ) {
      await signInWithRedirect(auth, provider)
      return new Promise<UserCredential>(() => {})
    }
    throw error
  }
}

export async function checkRedirectResult(auth: Auth): Promise<UserCredential | null> {
  try {
    return await getRedirectResult(auth)
  } catch {
    return null
  }
}

export function sendReset(auth: Auth, email: string): Promise<void> {
  return sendPasswordResetEmail(auth, email)
}

export function logout(auth: Auth): Promise<void> {
  return signOut(auth)
}

export function confirmReset(
  auth: Auth,
  oobCode: string,
  newPassword: string,
): Promise<void> {
  return confirmPasswordReset(auth, oobCode, newPassword)
}
