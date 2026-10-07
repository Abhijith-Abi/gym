'use client'

import dynamic from 'next/dynamic'
import { useProgressStore } from '@/store/progressStore'

/**
 * next/dynamic ssr:false wrapper for the heavy PR celebration island (C.6).
 * The browser-only animation libs (framer-motion/gsap/canvas-confetti) are
 * never pulled into SSR/build; a null fallback keeps the main bundle lean.
 * This component watches progressStore for queued PRs and shows the overlay.
 */
const PRCelebrationView = dynamic(() => import('./PRCelebrationView'), {
  ssr: false,
  loading: () => null,
})

export function PRCelebration({
  soundEnabled = false,
  hapticsEnabled = true,
}: {
  soundEnabled?: boolean
  hapticsEnabled?: boolean
}) {
  const prs = useProgressStore((s) => s.pendingCelebration)
  const clear = useProgressStore((s) => s.clearCelebration)

  if (prs.length === 0) return null

  return (
    <PRCelebrationView
      prs={prs}
      onDismiss={clear}
      soundEnabled={soundEnabled}
      hapticsEnabled={hapticsEnabled}
    />
  )
}
