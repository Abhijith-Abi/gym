import { getApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
  type Firestore,
} from 'firebase/firestore'
import { getStorage, type FirebaseStorage } from 'firebase/storage'

/**
 * Guarded, lazy Firebase singleton (design C.2 — the central NFR-1 constraint).
 *
 * Rules that keep lint/typecheck/build green with ABSENT creds:
 *   - No module-level initializeApp(); getters lazily init on first browser call.
 *   - firebaseConfigPresent() === false → every getter returns null, never throws.
 *   - Client-only: on the server (no `window`) getters return null, so RSC never
 *     pulls the client SDK into a server render path.
 *   - Singleton via getApps()/getApp() to survive Next.js hot reload.
 */

interface FirebaseConfig {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
}

function readConfig(): FirebaseConfig {
  return {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? '',
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? '',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? '',
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? '',
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? '',
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? '',
  }
}

/** True iff all six NEXT_PUBLIC_FIREBASE_* values are present and non-empty. */
export function firebaseConfigPresent(): boolean {
  const c = readConfig()
  return (
    c.apiKey !== '' &&
    c.authDomain !== '' &&
    c.projectId !== '' &&
    c.storageBucket !== '' &&
    c.messagingSenderId !== '' &&
    c.appId !== ''
  )
}

function isBrowser(): boolean {
  return typeof window !== 'undefined'
}

let appCheckInitialized = false

/**
 * Browser-only, env-gated App Check init (C.2). Skipped entirely when no site
 * key is present so builds/dev work without a reCAPTCHA key. Loaded dynamically
 * so the module is never pulled into a server render path.
 */
function maybeInitAppCheck(app: FirebaseApp): void {
  if (appCheckInitialized) return
  const siteKey = process.env.NEXT_PUBLIC_APPCHECK_SITE_KEY
  if (!isBrowser() || !siteKey) return
  appCheckInitialized = true
  void import('firebase/app-check')
    .then(({ initializeAppCheck, ReCaptchaV3Provider }) => {
      initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider(siteKey),
        isTokenAutoRefreshEnabled: true,
      })
    })
    .catch(() => {
      // App Check is optional; failure must not break the app.
      appCheckInitialized = false
    })
}

/** Lazily create/return the FirebaseApp singleton, or null if unavailable. */
export function getFirebaseApp(): FirebaseApp | null {
  if (!isBrowser() || !firebaseConfigPresent()) return null
  const app = getApps().length > 0 ? getApp() : initializeApp(readConfig())
  maybeInitAppCheck(app)
  return app
}

export function getFirebaseAuth(): Auth | null {
  const app = getFirebaseApp()
  if (!app) return null
  return getAuth(app)
}

let dbSingleton: Firestore | null = null

/**
 * Firestore with durable offline persistence (persistentLocalCache +
 * multi-tab manager) and ignoreUndefinedProperties so a stray undefined is
 * dropped rather than rejected (C.2/C.4). Initialized once in the browser.
 */
export function getDb(): Firestore | null {
  const app = getFirebaseApp()
  if (!app) return null
  if (dbSingleton) return dbSingleton
  dbSingleton = initializeFirestore(app, {
    localCache: persistentLocalCache({
      tabManager: persistentMultipleTabManager(),
    }),
    ignoreUndefinedProperties: true,
  })
  return dbSingleton
}

export function getStorageClient(): FirebaseStorage | null {
  const app = getFirebaseApp()
  if (!app) return null
  return getStorage(app)
}

/**
 * Browser-only, env + isSupported()-gated Firebase Analytics (C.2). Returns a
 * promise resolving to null when unavailable. Never throws.
 */
export async function getAnalyticsClient(): Promise<unknown | null> {
  const app = getFirebaseApp()
  const measurementId = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
  if (!app || !isBrowser() || !measurementId) return null
  try {
    const { getAnalytics, isSupported } = await import('firebase/analytics')
    const supported = await isSupported()
    return supported ? getAnalytics(app) : null
  } catch {
    return null
  }
}
