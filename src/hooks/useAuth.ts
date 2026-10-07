'use client'

import { useEffect } from 'react'
import { useAuthStore } from '@/store/authStore'

/**
 * Mounts the auth subscription once and exposes the current phase/user/profile
 * (design C.2). Safe to call from any client component; init() is idempotent.
 */
export function useAuth() {
  const phase = useAuthStore((s) => s.phase)
  const user = useAuthStore((s) => s.user)
  const uid = useAuthStore((s) => s.uid)
  const profile = useAuthStore((s) => s.profile)
  const init = useAuthStore((s) => s.init)
  const refreshProfile = useAuthStore((s) => s.refreshProfile)

  useEffect(() => {
    init()
  }, [init])

  return { phase, user, uid, profile, refreshProfile }
}
