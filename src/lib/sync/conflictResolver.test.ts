import { describe, expect, it } from 'vitest'
import {
  baseGuardSatisfied,
  isSummaryToggleOnly,
  resolveLastWriterWins,
  resolveSessionOp,
  type SessionImmutabilityState,
} from './conflictResolver'

const open: SessionImmutabilityState = { status: 'IN_PROGRESS', summaryApplied: false }
const completed: SessionImmutabilityState = { status: 'COMPLETED', summaryApplied: false }
const applied: SessionImmutabilityState = { status: 'COMPLETED', summaryApplied: true }

describe('conflictResolver — completed-session immutability (C.7/FR-39/AC-11)', () => {
  it('applies ordinary ops to a non-completed session', () => {
    expect(
      resolveSessionOp({ op: 'update', payload: { durationSeconds: 10 } }, open),
    ).toEqual({ action: 'apply' })
  })

  it('DROPS a training-field update to a COMPLETED session', () => {
    const d = resolveSessionOp(
      { op: 'update', payload: { durationSeconds: 999 } },
      completed,
    )
    expect(d.action).toBe('drop')
  })

  it('DROPS a delete of a COMPLETED session', () => {
    const d = resolveSessionOp({ op: 'delete', payload: {} }, completed)
    expect(d).toEqual({ action: 'drop', reason: 'delete-completed-session' })
  })

  it('DROPS appending a child under a COMPLETED session', () => {
    const d = resolveSessionOp(
      { op: 'create', payload: { sessionCompleted: false } },
      completed,
      'child',
    )
    expect(d).toEqual({ action: 'drop', reason: 'append-to-completed-session' })
  })

  it('ALLOWS the summaryApplied false->true toggle on a COMPLETED session', () => {
    const d = resolveSessionOp(
      { op: 'update', payload: { summaryApplied: true, updatedAt: 1 } },
      completed,
    )
    expect(d).toEqual({ action: 'apply' })
  })

  it('DROPS the toggle as already-applied when stored summaryApplied is true (MEDIUM-3)', () => {
    const d = resolveSessionOp(
      { op: 'update', payload: { summaryApplied: true } },
      applied,
    )
    expect(d).toEqual({ action: 'drop', reason: 'summary-already-applied' })
  })

  it('isSummaryToggleOnly recognizes only the permitted toggle', () => {
    expect(isSummaryToggleOnly({ summaryApplied: true })).toBe(true)
    expect(isSummaryToggleOnly({ summaryApplied: true, updatedAt: 1 })).toBe(true)
    expect(isSummaryToggleOnly({ summaryApplied: false })).toBe(false)
    expect(isSummaryToggleOnly({ summaryApplied: true, durationSeconds: 5 })).toBe(false)
    expect(isSummaryToggleOnly({ durationSeconds: 5 })).toBe(false)
  })
})

describe('conflictResolver — last-writer-wins + base guard (C.7)', () => {
  it('server updatedAt wins on ties and when incoming is older', () => {
    expect(resolveLastWriterWins(10, 10)).toBe('server')
    expect(resolveLastWriterWins(10, 5)).toBe('server')
  })

  it('newer incoming wins', () => {
    expect(resolveLastWriterWins(10, 20)).toBe('incoming')
  })

  it('handles missing timestamps', () => {
    expect(resolveLastWriterWins(undefined, 5)).toBe('incoming')
    expect(resolveLastWriterWins(5, undefined)).toBe('server')
  })

  it('base guard holds only when base matches server', () => {
    expect(baseGuardSatisfied(10, 10)).toBe(true)
    expect(baseGuardSatisfied(10, 11)).toBe(false)
    expect(baseGuardSatisfied(undefined, 11)).toBe(true)
  })
})
