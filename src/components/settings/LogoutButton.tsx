'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/store/authStore'
import { logout } from '@/services/authService'
import { triggerHaptic } from '@/hooks/useHaptics'

/** Signs the user out and resets the auth store (FR-1). */
export function LogoutButton() {
  const router = useRouter()
  const reset = useAuthStore((s) => s.reset)
  const [pending, setPending] = useState(false)

  async function onLogout() {
    triggerHaptic('warning')
    setPending(true)
    await logout()
    reset()
    router.replace('/login')
  }

  return (
    <Button
      variant="outline"
      onClick={onLogout}
      disabled={pending}
      className="min-h-[48px] w-full rounded-2xl border-destructive/40 bg-card text-destructive hover:bg-destructive/10 active:scale-95"
    >
      <LogOut className="size-4" />
      {pending ? 'Signing out…' : 'Sign Out of ForgeFit'}
    </Button>
  )
}
