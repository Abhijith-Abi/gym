'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FullScreenLoader } from '@/components/ui/full-screen-loader'
import { NotConfiguredState } from '@/components/ui/not-configured-state'
import { useAuth } from '@/hooks/useAuth'

/**
 * Guards the (protected) route group via the C.2 6-phase state machine.
 *
 *   not-configured         → inline NotConfiguredState, NO navigation
 *   initializing           → full-screen loader, NO route change
 *   authed-loading-profile → full-screen loader, NO route change
 *   unauthenticated        → the ONLY phase that redirects, to /login
 *   onboarding             → redirect to /onboarding
 *   ready                  → render protected children
 *
 * The two loading phases share the same loader, so an authenticated user never
 * flashes the dashboard shell or bounces to /login during the profile read
 * (FR-1, AC-16).
 */
export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { phase } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (phase === 'unauthenticated') {
      router.replace('/login')
    } else if (phase === 'onboarding') {
      router.replace('/onboarding')
    }
  }, [phase, router])

  if (phase === 'not-configured') {
    return <NotConfiguredState />
  }

  if (phase === 'ready') {
    return <>{children}</>
  }

  // initializing | authed-loading-profile | unauthenticated | onboarding:
  // render the loader with no dashboard flash while the redirect (if any) runs.
  return <FullScreenLoader />
}
