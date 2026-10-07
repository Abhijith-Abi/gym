'use client'

import { Download, Share, SquarePlus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BottomSheet } from '@/components/ui/bottom-sheet'
import { useInstallPrompt } from '@/hooks/useInstallPrompt'

/**
 * Custom install prompt (FR-34, design C.10). Renders a dismissible bottom
 * sheet offering a native install (Chromium, via the captured
 * `beforeinstallprompt`) or manual add-to-home-screen steps on iOS Safari.
 * Dismissal is persisted so it NEVER nags again (useInstallPrompt →
 * settingsStore). Shows nothing when already installed or previously dismissed.
 */
export function InstallPrompt() {
  const { canShow, isIosDevice, canInstall, promptInstall, dismiss } =
    useInstallPrompt()

  if (!canShow) return null

  return (
    <BottomSheet
      open={canShow}
      onClose={dismiss}
      title="Install ForgeFit"
      description="Add ForgeFit to your home screen for a full-screen, offline-ready training app."
    >
      {isIosDevice && !canInstall ? (
        <div className="flex flex-col gap-3">
          <ol className="flex flex-col gap-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <Share className="size-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                Tap the <strong className="text-foreground">Share</strong> button
                in Safari&apos;s toolbar.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <SquarePlus
                className="size-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <span>
                Choose{' '}
                <strong className="text-foreground">Add to Home Screen</strong>.
              </span>
            </li>
          </ol>
          <Button type="button" variant="secondary" onClick={dismiss}>
            Got it
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <Button type="button" onClick={promptInstall} data-autofocus>
            <Download className="size-4" aria-hidden="true" />
            Install app
          </Button>
          <Button type="button" variant="ghost" onClick={dismiss}>
            Not now
          </Button>
        </div>
      )}
    </BottomSheet>
  )
}
