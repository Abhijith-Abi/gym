'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useWorkoutSounds } from '@/hooks/useWorkoutSounds'
import { triggerHaptic } from '@/hooks/useHaptics'

interface CountdownOverlayProps {
  remainingSeconds: number
  isRunning: boolean
  onFinish?: () => void
}

/**
 * 10-Second High-Energy Countdown Experience (10, 9, 8... 1, GO!).
 * Plays sync beeps, haptics, voice cues, and energetic spring scaling numbers.
 */
export function CountdownOverlay({
  remainingSeconds,
  isRunning,
}: CountdownOverlayProps) {
  const { playSound, speak } = useWorkoutSounds()
  const lastSecRef = useRef<number | null>(null)

  const isCountdownActive = isRunning && remainingSeconds <= 10 && remainingSeconds >= 0

  useEffect(() => {
    if (!isCountdownActive) {
      lastSecRef.current = null
      return
    }

    if (lastSecRef.current !== remainingSeconds) {
      lastSecRef.current = remainingSeconds

      if (remainingSeconds > 0) {
        // Countdown beep + haptic pulse
        playSound('countdown-beep')
        triggerHaptic('countdown')

        if (remainingSeconds === 10) {
          speak('Ten seconds')
        } else if (remainingSeconds === 5) {
          speak('Five')
        } else if (remainingSeconds === 3) {
          speak('Three')
        }
      } else if (remainingSeconds === 0) {
        // GO! Chime + celebratory haptic + voice
        playSound('countdown-go')
        triggerHaptic('success')
        speak("Let's go!")
      }
    }
  }, [isCountdownActive, remainingSeconds, playSound, speak])

  if (!isCountdownActive) return null

  const isGo = remainingSeconds === 0

  return (
    <AnimatePresence mode="popLayout">
      <div
        className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs"
        aria-live="assertive"
      >
        <motion.div
          key={remainingSeconds}
          initial={{ scale: 0.4, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 1.4, opacity: 0 }}
          transition={{ type: 'spring', damping: 14, stiffness: 220 }}
          className="flex flex-col items-center justify-center"
        >
          {isGo ? (
            <div className="flex flex-col items-center">
              <span className="text-7xl font-black tracking-wider text-primary drop-shadow-[0_0_35px_rgba(255,107,53,0.8)] sm:text-8xl">
                GO!
              </span>
              <span className="mt-2 text-xl font-bold text-foreground">
                Next set starts now! 🔥
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <span className="font-mono text-8xl font-black text-foreground drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] sm:text-9xl">
                {remainingSeconds}
              </span>
              <span className="mt-2 text-sm font-semibold uppercase tracking-widest text-primary">
                Get Ready
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
