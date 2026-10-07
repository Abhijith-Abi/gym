'use client'

import { useEffect, useState } from 'react'
import { isOnline, subscribeNetworkStatus } from '@/lib/sync/networkStatus'
import { useSyncStore } from '@/store/syncStore'

/**
 * React binding over `networkStatus` (design C.7). Tracks `navigator.onLine`,
 * mirrors it into the syncStore (which drives the composite-op flush gate), and
 * returns the current connectivity for UI. SSR-safe: starts optimistic and
 * reconciles on mount so there is no hydration mismatch.
 */
export function useNetworkStatus(): boolean {
  const [online, setOnline] = useState(true)
  const setStoreOnline = useSyncStore((s) => s.setOnline)

  useEffect(() => {
    const initial = isOnline()
    setOnline(initial)
    setStoreOnline(initial)
    return subscribeNetworkStatus((next) => {
      setOnline(next)
      setStoreOnline(next)
    })
  }, [setStoreOnline])

  return online
}
