'use client'

import { useCallback, useEffect, useState } from 'react'
import { useSettingsStore } from '@/store/settingsStore'

/**
 * Custom install-prompt controller (FR-34, design C.10).
 *
 * - Captures the `beforeinstallprompt` event (Chromium) and defers it so the
 *   app can present its own bottom-sheet UI instead of the browser mini-infobar.
 * - On iOS Safari (which has no `beforeinstallprompt`) it surfaces manual
 *   add-to-home-screen instructions instead.
 * - Persists a "dismissed" flag in settingsStore so the prompt NEVER nags again
 *   after the user dismisses it, and hides itself once the app is already
 *   installed/running standalone.
 */

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  prompt: () => Promise<void>
  readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

function isStandalone(): boolean {
  if (typeof window === 'undefined') return false
  const mq = window.matchMedia?.('(display-mode: standalone)').matches ?? false
  // iOS Safari exposes navigator.standalone when launched from the home screen.
  const iosStandalone =
    (navigator as unknown as { standalone?: boolean }).standalone === true
  return mq || iosStandalone
}

function isIos(): boolean {
  if (typeof navigator === 'undefined') return false
  const ua = navigator.userAgent
  const iDevice = /iphone|ipad|ipod/i.test(ua)
  // iPadOS 13+ reports as Mac; detect by touch support.
  const iPadOs =
    /macintosh/i.test(ua) &&
    typeof document !== 'undefined' &&
    'ontouchend' in document
  return iDevice || iPadOs
}

export interface InstallPromptState {
  /** Whether the custom prompt should be shown at all. */
  canShow: boolean
  /** True when running on iOS (no beforeinstallprompt → manual instructions). */
  isIosDevice: boolean
  /** True when a native beforeinstallprompt was captured and can be fired. */
  canInstall: boolean
  /** Fire the deferred native prompt (no-op on iOS). */
  promptInstall: () => Promise<void>
  /** Dismiss and persist the flag so it never reappears. */
  dismiss: () => void
}

export function useInstallPrompt(): InstallPromptState {
  const dismissed = useSettingsStore((s) => s.installPromptDismissed)
  const setDismissed = useSettingsStore((s) => s.setInstallPromptDismissed)

  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null)
  const [installed, setInstalled] = useState(false)
  const [ios, setIos] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setInstalled(isStandalone())
    setIos(isIos())

    const onBeforeInstall = (e: Event) => {
      e.preventDefault()
      setDeferred(e as BeforeInstallPromptEvent)
    }
    const onInstalled = () => {
      setInstalled(true)
      setDeferred(null)
    }

    window.addEventListener('beforeinstallprompt', onBeforeInstall)
    window.addEventListener('appinstalled', onInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  const promptInstall = useCallback(async () => {
    if (!deferred) return
    try {
      await deferred.prompt()
      const choice = await deferred.userChoice
      // Either outcome ends this prompt cycle; don't nag again.
      setDismissed(true)
      if (choice.outcome === 'accepted') setInstalled(true)
    } catch {
      // best-effort — a failed prompt simply leaves the UI untouched.
    } finally {
      setDeferred(null)
    }
  }, [deferred, setDismissed])

  const dismiss = useCallback(() => {
    setDismissed(true)
    setDeferred(null)
  }, [setDismissed])

  // Only ever show after mount (avoids SSR/hydration mismatch), when not already
  // installed, not previously dismissed, and either a native prompt is available
  // or we're on iOS (where we show manual instructions).
  const canShow =
    mounted && !installed && !dismissed && (deferred !== null || ios)

  return {
    canShow,
    isIosDevice: ios,
    canInstall: deferred !== null,
    promptInstall,
    dismiss,
  }
}
