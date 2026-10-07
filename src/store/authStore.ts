import { create } from 'zustand'
import type { User } from 'firebase/auth'
import { firebaseConfigPresent } from '@/lib/firebase/config'
import { subscribeToAuth } from '@/services/authService'
import { getProfile } from '@/services/profileService'
import type { UserProfile } from '@/types'

/**
 * AuthGuard 6-phase state machine (design C.2). phase is the single source of
 * truth for routing/rendering; only 'unauthenticated' redirects. Both loading
 * phases render the full-screen loader with NO route change, so an
 * authenticated user never flashes the dashboard or bounces to /login while the
 * profile read is in flight (FR-1, AC-16).
 */
export type AuthPhase =
  | 'not-configured'
  | 'initializing'
  | 'authed-loading-profile'
  | 'unauthenticated'
  | 'onboarding'
  | 'ready'

interface AuthState {
  phase: AuthPhase
  user: User | null
  uid: string | null
  profile: UserProfile | null
  /** idempotent subscription guard. */
  initialized: boolean
  init: () => void
  /** re-read the profile after onboarding/profile edits and recompute phase. */
  refreshProfile: () => Promise<void>
  reset: () => void
}

let unsubscribe: (() => void) | null = null

export const useAuthStore = create<AuthState>((set, get) => ({
  phase: 'initializing',
  user: null,
  uid: null,
  profile: null,
  initialized: false,

  init: () => {
    if (get().initialized) return
    set({ initialized: true })

    // Config check runs FIRST — not-configured short-circuits everything (C.2).
    if (!firebaseConfigPresent()) {
      set({ phase: 'not-configured' })
      return
    }

    set({ phase: 'initializing' })

    unsubscribe = subscribeToAuth(async (user) => {
      if (!user) {
        set({
          phase: 'unauthenticated',
          user: null,
          uid: null,
          profile: null,
        })
        return
      }

      // User resolved non-null; profile read is now in flight.
      set({ phase: 'authed-loading-profile', user, uid: user.uid })

      const res = await getProfile(user.uid)
      // If the auth user changed while the read was in flight, ignore the result.
      if (get().uid !== user.uid) return

      if (!res.ok) {
        // Offline/permission read failure: treat an unresolved profile like a
        // fresh account routed to onboarding rather than crashing the guard.
        set({ phase: 'onboarding', profile: null })
        return
      }

      const profile = res.data
      if (!profile || !profile.onboardingCompleted) {
        set({ phase: 'onboarding', profile: profile ?? null })
      } else {
        set({ phase: 'ready', profile })
      }
    })
  },

  refreshProfile: async () => {
    const uid = get().uid
    if (!uid) return
    const res = await getProfile(uid)
    if (get().uid !== uid) return
    if (!res.ok) return
    const profile = res.data
    if (!profile || !profile.onboardingCompleted) {
      set({ phase: 'onboarding', profile: profile ?? null })
    } else {
      set({ phase: 'ready', profile })
    }
  },

  reset: () => {
    if (unsubscribe) {
      unsubscribe()
      unsubscribe = null
    }
    set({
      phase: firebaseConfigPresent() ? 'initializing' : 'not-configured',
      user: null,
      uid: null,
      profile: null,
      initialized: false,
    })
  },
}))
