import { describe, expect, it } from 'vitest'
import {
  firebaseConfigPresent,
  getAnalyticsClient,
  getDb,
  getFirebaseApp,
  getFirebaseAuth,
  getStorageClient,
} from './config'

/**
 * The test env has no NEXT_PUBLIC_FIREBASE_* set, so config must read absent and
 * every getter must return null without throwing (AC-1, AC-2, C.2).
 */
describe('guarded Firebase config under empty env', () => {
  it('firebaseConfigPresent() is false', () => {
    expect(firebaseConfigPresent()).toBe(false)
  })

  it('every getter returns null and never throws', () => {
    expect(getFirebaseApp()).toBeNull()
    expect(getFirebaseAuth()).toBeNull()
    expect(getDb()).toBeNull()
    expect(getStorageClient()).toBeNull()
  })

  it('getAnalyticsClient resolves to null', async () => {
    await expect(getAnalyticsClient()).resolves.toBeNull()
  })
})
