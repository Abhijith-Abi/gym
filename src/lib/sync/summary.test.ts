import { describe, expect, it } from 'vitest'
import { shouldApplySummary } from '@/services/analyticsService'
import { monthIdOf, weekIdOf } from './summaryKeys'

describe('Step 3 summary idempotency (C.7)', () => {
  it('is a no-op when summaryApplied === true (late replay cannot double-count)', () => {
    expect(shouldApplySummary(true, true)).toBe('noop')
  })

  it('applies when the session has not had its summary applied', () => {
    expect(shouldApplySummary(true, false)).toBe('applied')
    expect(shouldApplySummary(true, undefined)).toBe('applied')
  })

  it('is a no-op when the session doc is missing', () => {
    expect(shouldApplySummary(false, false)).toBe('noop')
  })
})

describe('summary period keys (C.4)', () => {
  it('monthId is yyyy-MM', () => {
    expect(monthIdOf(new Date('2024-03-15T12:00:00Z'))).toBe('2024-03')
  })

  it('weekId is yyyy-\'W\'II (ISO week)', () => {
    // 2024-01-04 is in ISO week 01 of 2024.
    expect(weekIdOf(new Date('2024-01-04T12:00:00Z'))).toBe('2024-W01')
  })
})
