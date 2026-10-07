/**
 * Network status primitives for the sync layer (design C.7).
 *
 * The custom syncQueue holds the composite "complete session" op while
 * `navigator.onLine` is false and begins the `waitForPendingWrites()` barrier
 * only once connectivity returns (the belt-and-suspenders invariant of the
 * HIGH-1 flush barrier). These helpers are the single, SSR/test-safe source of
 * truth for "are we online" and for subscribing to online/offline transitions.
 */

/** True when the browser reports connectivity (optimistic on the server). */
export function isOnline(): boolean {
  if (typeof navigator === 'undefined') return true
  // `onLine` is `false` only when the browser is certain it is offline.
  return navigator.onLine !== false
}

export type NetworkListener = (online: boolean) => void

/**
 * Subscribe to online/offline transitions. Returns an unsubscribe function.
 * No-op (returns a no-op unsubscribe) outside the browser so callers never
 * crash during SSR or in the test runner.
 */
export function subscribeNetworkStatus(listener: NetworkListener): () => void {
  if (typeof window === 'undefined') return () => {}
  const onOnline = () => listener(true)
  const onOffline = () => listener(false)
  window.addEventListener('online', onOnline)
  window.addEventListener('offline', onOffline)
  return () => {
    window.removeEventListener('online', onOnline)
    window.removeEventListener('offline', onOffline)
  }
}
