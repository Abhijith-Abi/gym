import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, render, screen } from '@testing-library/react'
import type { User } from 'firebase/auth'
import type { ServiceResult, UserProfile } from '@/types'

/* ------------------------------------------------------------------ */
/* Mocks at the module boundary the authStore depends on (C.2).        */
/* ------------------------------------------------------------------ */

const mockReplace = vi.fn()
vi.mock('next/navigation', () => ({
  useRouter: () => ({ replace: mockReplace, push: mockReplace }),
}))

let configPresent = true
vi.mock('@/lib/firebase/config', () => ({
  firebaseConfigPresent: () => configPresent,
  getAnalyticsClient: async () => null,
}))

// Capture the onAuthStateChanged callback so the test drives phase transitions.
let authCallback: ((user: User | null) => void) | null = null
vi.mock('@/services/authService', () => ({
  checkAuthRedirect: vi.fn(async () => ({ ok: true, data: null })),
  subscribeToAuth: (cb: (user: User | null) => void) => {
    authCallback = cb
    return () => {}
  },
}))

let profileResult: ServiceResult<UserProfile | null> = { ok: true, data: null }
let resolveProfile: (() => void) | null = null
vi.mock('@/services/profileService', () => ({
  getProfile: () =>
    new Promise((resolve) => {
      resolveProfile = () => resolve(profileResult)
    }),
}))

// Import AFTER mocks are registered.
import { AuthGuard } from './AuthGuard'
import { useAuthStore } from '@/store/authStore'

const fakeUser = { uid: 'u1', email: 'a@b.co', displayName: 'A', photoURL: null } as unknown as User

function resetStore() {
  // Fully reset the singleton store between tests.
  useAuthStore.setState({
    phase: 'initializing',
    user: null,
    uid: null,
    profile: null,
    initialized: false,
  })
  authCallback = null
  resolveProfile = null
  mockReplace.mockClear()
}

describe('AuthGuard 6-phase state machine (C.2)', () => {
  beforeEach(() => {
    configPresent = true
    profileResult = { ok: true, data: null }
    resetStore()
  })

  afterEach(() => {
    cleanup()
  })

  it('renders the inline "Firebase not configured" state and does not navigate', () => {
    configPresent = false
    render(
      <AuthGuard>
        <div>protected</div>
      </AuthGuard>,
    )
    expect(screen.getByText(/firebase not configured/i)).toBeInTheDocument()
    expect(screen.queryByText('protected')).not.toBeInTheDocument()
    expect(mockReplace).not.toHaveBeenCalled()
  })

  it('shows the full-screen loader while initializing (no route change)', () => {
    render(
      <AuthGuard>
        <div>protected</div>
      </AuthGuard>,
    )
    // onAuthStateChanged has not fired yet → initializing.
    expect(useAuthStore.getState().phase).toBe('initializing')
    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.queryByText('protected')).not.toBeInTheDocument()
    expect(mockReplace).not.toHaveBeenCalled()
  })

  it('shows the loader during authed-loading-profile with no route change or dashboard flash', async () => {
    render(
      <AuthGuard>
        <div>protected</div>
      </AuthGuard>,
    )
    // Auth resolves to a user; profile read is in flight (promise not resolved).
    await act(async () => {
      authCallback?.(fakeUser)
    })
    expect(useAuthStore.getState().phase).toBe('authed-loading-profile')
    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.queryByText('protected')).not.toBeInTheDocument()
    // The ONLY redirect phase is unauthenticated — not this one.
    expect(mockReplace).not.toHaveBeenCalledWith('/login')
  })

  it('redirects to /login only when unauthenticated', async () => {
    render(
      <AuthGuard>
        <div>protected</div>
      </AuthGuard>,
    )
    await act(async () => {
      authCallback?.(null)
    })
    expect(useAuthStore.getState().phase).toBe('unauthenticated')
    expect(mockReplace).toHaveBeenCalledWith('/login')
  })

  it('renders protected children once ready (profile loaded + onboarded)', async () => {
    profileResult = {
      ok: true,
      data: {
        uid: 'u1',
        email: 'a@b.co',
        displayName: 'A',
        goal: 'strength',
        experience: 'beginner',
        preferredUnit: 'kg',
        onboardingCompleted: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    }
    render(
      <AuthGuard>
        <div>protected</div>
      </AuthGuard>,
    )
    await act(async () => {
      authCallback?.(fakeUser)
    })
    await act(async () => {
      resolveProfile?.()
      await Promise.resolve()
    })
    expect(useAuthStore.getState().phase).toBe('ready')
    expect(screen.getByText('protected')).toBeInTheDocument()
    expect(mockReplace).not.toHaveBeenCalledWith('/login')
  })

  it('routes to onboarding when the profile is incomplete', async () => {
    profileResult = { ok: true, data: null }
    render(
      <AuthGuard>
        <div>protected</div>
      </AuthGuard>,
    )
    await act(async () => {
      authCallback?.(fakeUser)
    })
    await act(async () => {
      resolveProfile?.()
      await Promise.resolve()
    })
    expect(useAuthStore.getState().phase).toBe('onboarding')
    expect(mockReplace).toHaveBeenCalledWith('/onboarding')
    expect(screen.queryByText('protected')).not.toBeInTheDocument()
  })
})
