'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Dumbbell } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'

/**
 * Root entry point and brand launch screen.
 */
export default function Home() {
  const { phase } = useAuth()
  const router = useRouter()

  useEffect(() => {
    switch (phase) {
      case 'ready':
        router.replace('/dashboard')
        break
      case 'onboarding':
        router.replace('/onboarding')
        break
      case 'unauthenticated':
      case 'not-configured':
        router.replace('/login')
        break
    }
  }, [phase, router])

  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="relative flex size-20 items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-[0_0_40px_rgba(255,107,53,0.45)]">
        <Dumbbell className="size-10 animate-pulse" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl font-black tracking-wider text-foreground">
          FORGE<span className="text-primary">FIT</span>
        </h1>
        <p className="text-sm font-medium text-muted-foreground">
          Build Strength · Track Progress · Train Smarter
        </p>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className="size-2 rounded-full bg-primary animate-ping" />
        <span className="text-xs font-semibold text-muted-foreground">Loading workspace…</span>
      </div>
      <p className="sr-only" role="status" aria-live="polite">
        Loading ForgeFit…
      </p>
    </main>
  )
}
