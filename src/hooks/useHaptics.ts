'use client'

import { useCallback } from 'react'
import { useSettingsStore } from '@/store/settingsStore'

/**
 * Mobile-first Haptics engine for ForgeFit (FR-36).
 * Wraps `navigator.vibrate` with graceful no-ops.
 */

export type HapticPattern =
  | 'light'
  | 'medium'
  | 'heavy'
  | 'tap'
  | 'success'
  | 'warning'
  | 'error'
  | 'pr'
  | 'complete'
  | 'countdown'

const PATTERNS: Record<HapticPattern, number | number[]> = {
  light: 10,
  tap: 15,
  medium: 25,
  heavy: 45,
  countdown: 20,
  success: [20, 30, 40],
  warning: [40, 60],
  error: [60, 40, 60],
  pr: [30, 40, 50, 40, 80],
  complete: [40, 60, 40, 80, 100],
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function triggerHaptic(pattern: HapticPattern = 'tap') {
  if (prefersReducedMotion()) return
  if (typeof navigator === 'undefined' || typeof navigator.vibrate !== 'function') {
    return
  }
  try {
    const isEnabled = useSettingsStore.getState().hapticsEnabled
    if (isEnabled) {
      navigator.vibrate(PATTERNS[pattern])
    }
  } catch {
    // Graceful no-op
  }
}

export function useHaptics(): {
  enabled: boolean
  vibrate: (pattern?: HapticPattern) => void
} {
  const hapticsEnabled = useSettingsStore((s) => s.hapticsEnabled)

  const vibrate = useCallback(
    (pattern: HapticPattern = 'tap') => {
      if (!hapticsEnabled) return
      triggerHaptic(pattern)
    },
    [hapticsEnabled],
  )

  return { enabled: hapticsEnabled, vibrate }
}
