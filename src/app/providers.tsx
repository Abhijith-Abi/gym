'use client'

import { createContext, useContext, useEffect, useMemo } from 'react'
import { firebaseConfigPresent, getAnalyticsClient } from '@/lib/firebase/config'
import { useAuthStore } from '@/store/authStore'

interface FirebaseConfigContextValue {
  configured: boolean
}

const FirebaseConfigContext = createContext<FirebaseConfigContextValue>({
  configured: false,
})

/** Read the app-wide Firebase-config flag (C.2). */
export function useFirebaseConfig(): FirebaseConfigContextValue {
  return useContext(FirebaseConfigContext)
}

/**
 * Single top-level client Providers (C.6). Mounts the auth subscription once,
 * exposes the firebase-config flag, and lazily inits (optional) Analytics in
 * the browser. All initialization is guarded and safe with absent creds (C.2).
 */
export function Providers({ children }: { children: React.ReactNode }) {
  const init = useAuthStore((s) => s.init)
  const configured = useMemo(() => firebaseConfigPresent(), [])

  useEffect(() => {
    init()
  }, [init])

  useEffect(() => {
    // Fire-and-forget; returns null when unavailable, never throws (C.2).
    void getAnalyticsClient()
  }, [])

  const value = useMemo<FirebaseConfigContextValue>(
    () => ({ configured }),
    [configured],
  )

  return (
    <FirebaseConfigContext.Provider value={value}>
      {children}
    </FirebaseConfigContext.Provider>
  )
}
