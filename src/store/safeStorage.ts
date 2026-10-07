import { createJSONStorage, type PersistStorage } from 'zustand/middleware'

/**
 * SSR/test-safe persist storage. zustand's default `createJSONStorage` reads
 * `localStorage` eagerly, which throws where it is absent (server render, the
 * jsdom test runner without a localStorage file). This wrapper returns a no-op
 * in-memory storage in those environments so persisted stores never crash at
 * import/use time, and uses real localStorage in the browser.
 */
function hasLocalStorage(): boolean {
  try {
    return typeof window !== 'undefined' && !!window.localStorage
  } catch {
    return false
  }
}

export function safeJSONStorage<T>(): PersistStorage<T> | undefined {
  if (hasLocalStorage()) {
    return createJSONStorage<T>(() => window.localStorage)
  }
  const mem = new Map<string, string>()
  return createJSONStorage<T>(() => ({
    getItem: (name) => mem.get(name) ?? null,
    setItem: (name, value) => {
      mem.set(name, value)
    },
    removeItem: (name) => {
      mem.delete(name)
    },
  }))
}
