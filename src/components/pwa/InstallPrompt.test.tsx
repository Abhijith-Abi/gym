import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { InstallPrompt } from './InstallPrompt'
import { EmptyState } from '@/components/ui/empty-state'
import { ErrorState } from '@/components/ui/error-state'
import { useSettingsStore } from '@/store/settingsStore'

/**
 * FEAT-006 robust-states + PWA coverage.
 * - The install prompt must NOT reappear after the user dismisses it (FR-34,
 *   AC-15 "install prompt does not reappear after dismissal").
 * - EmptyState and ErrorState render their friendly content (FR-38, AC-17).
 */

/** Fire a synthetic beforeinstallprompt so the Chromium path is exercised. */
function dispatchBeforeInstallPrompt() {
  const evt = new Event('beforeinstallprompt') as Event & {
    prompt: () => Promise<void>
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
    platforms: string[]
  }
  evt.prompt = async () => {}
  evt.userChoice = Promise.resolve({ outcome: 'dismissed' as const })
  evt.platforms = ['web']
  act(() => {
    window.dispatchEvent(evt)
  })
}

beforeEach(() => {
  // Reset the persisted dismissal flag before each test.
  act(() => {
    useSettingsStore.setState({ installPromptDismissed: false })
  })
})

afterEach(() => {
  cleanup()
})

describe('InstallPrompt', () => {
  it('shows after a captured beforeinstallprompt and hides after dismissal', async () => {
    render(<InstallPrompt />)
    // Nothing shown until the native event is captured (and not on iOS here).
    expect(screen.queryByRole('dialog')).toBeNull()

    dispatchBeforeInstallPrompt()
    expect(await screen.findByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Install ForgeFit')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /not now/i }))

    // Dismissal is persisted…
    expect(useSettingsStore.getState().installPromptDismissed).toBe(true)
    // …and the dialog is gone.
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('never reappears once dismissed, even if beforeinstallprompt fires again', () => {
    act(() => {
      useSettingsStore.setState({ installPromptDismissed: true })
    })
    render(<InstallPrompt />)
    dispatchBeforeInstallPrompt()
    // Still hidden — the persisted flag suppresses the nag.
    expect(screen.queryByRole('dialog')).toBeNull()
  })
})

describe('robust states', () => {
  it('EmptyState renders its title and description', () => {
    render(<EmptyState title="No workouts yet" description="Start your first session." />)
    expect(screen.getByText('No workouts yet')).toBeInTheDocument()
    expect(screen.getByText('Start your first session.')).toBeInTheDocument()
  })

  it('ErrorState renders a friendly message and fires retry', () => {
    let retried = false
    render(
      <ErrorState
        message="Network error. Check your connection and try again."
        onRetry={() => {
          retried = true
        }}
      />,
    )
    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(
      screen.getByText('Network error. Check your connection and try again.'),
    ).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: /try again/i }))
    expect(retried).toBe(true)
  })
})
