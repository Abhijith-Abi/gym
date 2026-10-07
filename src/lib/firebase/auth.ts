import {
  GoogleAuthProvider,
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
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

export function googleSignIn(auth: Auth): Promise<UserCredential> {
  return signInWithPopup(auth, new GoogleAuthProvider())
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
