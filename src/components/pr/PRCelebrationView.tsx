'use client'

import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { gsap } from 'gsap'
import confetti from 'canvas-confetti'
import { Trophy, X } from 'lucide-react'
import { PRBadge } from './PRBadge'
import type { PersonalRecord } from '@/types'

/**
 * Heavy animation island (FR-12, FR-36). framer-motion + gsap + canvas-confetti.
 * Loaded ONLY via next/dynamic ssr:false (see PRCelebration.tsx) so these
 * browser-only libs never enter an SSR/build path. Honors
 * prefers-reduced-motion: when the user prefers reduced motion we skip confetti
 * and the gsap flourish and render a static card. Optional vibration/sound are
 * best-effort enhancements.
 */
export function PRCelebrationView({
  prs,
  onDismiss,
  soundEnabled = false,
  hapticsEnabled = true,
}: {
  prs: PersonalRecord[]
  onDismiss: () => void
  soundEnabled?: boolean
  hapticsEnabled?: boolean
}) {
  const trophyRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  // A11y (FR-37): move focus into the dialog and allow Escape to dismiss.
  useEffect(() => {
    if (prs.length === 0) return
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onDismiss()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [prs.length, onDismiss])

  useEffect(() => {
    if (prs.length === 0) return
    if (hapticsEnabled && typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([30, 40, 60])
    }
    if (soundEnabled) {
      try {
        const Ctx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext?: typeof AudioContext })
            .webkitAudioContext
        if (Ctx) {
          const ctx = new Ctx()
          const osc = ctx.createOscillator()
          const gain = ctx.createGain()
          osc.frequency.value = 880
          osc.connect(gain)
          gain.connect(ctx.destination)
          gain.gain.setValueAtTime(0.08, ctx.currentTime)
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4)
          osc.start()
          osc.stop(ctx.currentTime + 0.4)
        }
      } catch {
        // sound is a best-effort enhancement only.
      }
    }

    if (reducedMotion) return

    const burst = () =>
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.4 },
        colors: ['#22c55e', '#4ade80', '#facc15'],
      })
    burst()
    const t = window.setTimeout(burst, 250)

    let tween: gsap.core.Tween | undefined
    if (trophyRef.current) {
      tween = gsap.fromTo(
        trophyRef.current,
        { scale: 0.4, rotate: -12 },
        { scale: 1, rotate: 0, duration: 0.6, ease: 'back.out(2)' },
      )
    }
    return () => {
      window.clearTimeout(t)
      tween?.kill()
    }
  }, [prs.length, reducedMotion, soundEnabled, hapticsEnabled])

  if (prs.length === 0) return null

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="New personal record"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onDismiss}
      >
        <motion.div
          className="relative w-full max-w-sm rounded-2xl border border-primary/40 bg-card p-6 text-center shadow-xl"
          initial={{ scale: reducedMotion ? 1 : 0.9, y: reducedMotion ? 0 : 20 }}
          animate={{ scale: 1, y: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onDismiss}
            aria-label="Dismiss"
            className="absolute right-3 top-3 flex size-11 items-center justify-center text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
          <div ref={trophyRef} className="mx-auto mb-3 w-fit text-primary">
            <Trophy className="size-12" aria-hidden="true" />
          </div>
          <h2 className="text-xl font-bold">New Personal Record!</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            You just set {prs.length} new {prs.length === 1 ? 'record' : 'records'}.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {prs.map((pr) => (
              <PRBadge key={pr.id} type={pr.type} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default PRCelebrationView
