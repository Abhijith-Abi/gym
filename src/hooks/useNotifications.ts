'use client'

import { useCallback, useEffect, useState } from 'react'

/**
 * Optional browser notifications (FR-34). Enhancement-only: the app NEVER
 * requests permission on load. Permission is requested lazily, exactly once,
 * and only when the user explicitly opts in (e.g. toggles notifications on in
 * Settings). All calls no-op safely where the Notification API is unavailable.
 */

type Perm = 'default' | 'granted' | 'denied' | 'unsupported'

function currentPermission(): Perm {
  if (typeof window === 'undefined' || typeof Notification === 'undefined') {
    return 'unsupported'
  }
  return Notification.permission
}

export function useNotifications(): {
  permission: Perm
  supported: boolean
  /** Request permission — only call in response to a user gesture/opt-in. */
  request: () => Promise<Perm>
  /** Show a local notification; no-ops unless permission is granted. */
  notify: (title: string, options?: NotificationOptions) => void
} {
  const [permission, setPermission] = useState<Perm>('unsupported')

  useEffect(() => {
    setPermission(currentPermission())
  }, [])

  const request = useCallback(async (): Promise<Perm> => {
    if (currentPermission() === 'unsupported') return 'unsupported'
    try {
      const result = await Notification.requestPermission()
      setPermission(result)
      return result
    } catch {
      return currentPermission()
    }
  }, [])

  const notify = useCallback(
    (title: string, options?: NotificationOptions) => {
      if (currentPermission() !== 'granted') return
      try {
        new Notification(title, options)
      } catch {
        // best-effort enhancement only.
      }
    },
    [],
  )

  return {
    permission,
    supported: permission !== 'unsupported',
    request,
    notify,
  }
}
