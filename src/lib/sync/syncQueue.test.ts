import { describe, expect, it } from 'vitest'
import type { SyncOperation } from '@/types'
import {
  backoffMs,
  completeSessionOpId,
  dequeue,
  enqueue,
  isRetryable,
  MAX_ATTEMPTS,
  peek,
  recordFailure,
  summaryOpId,
} from './syncQueue'

function op(id: string, createdAtMs = 0): SyncOperation {
  return {
    id,
    entity: 'completeSession',
    op: 'set',
    path: `p/${id}`,
    payload: {},
    createdAtMs,
    attempts: 0,
  }
}

describe('syncQueue — dedupe + FIFO + backoff (C.7, AC-10)', () => {
  it('enqueue dedupes a replayed op by SyncOperation.id (AC-10)', () => {
    const first = enqueue([], op('complete-session:s1'))
    const replay = enqueue(first, op('complete-session:s1'))
    expect(replay).toHaveLength(1)
  })

  it('enqueue preserves the existing op (and its attempts) on replay', () => {
    const seeded = [{ ...op('complete-session:s1'), attempts: 3 }]
    const after = enqueue(seeded, op('complete-session:s1'))
    expect(after[0].attempts).toBe(3)
  })

  it('dequeue removes by id', () => {
    const q = enqueue(enqueue([], op('a')), op('b'))
    expect(dequeue(q, 'a').map((o) => o.id)).toEqual(['b'])
  })

  it('peek returns the oldest op (FIFO by createdAtMs)', () => {
    const q = [op('b', 20), op('a', 10)]
    expect(peek(q)?.id).toBe('a')
  })

  it('recordFailure bumps attempts and stamps lastError', () => {
    const q = recordFailure([op('a')], 'a', 'boom')
    expect(q[0].attempts).toBe(1)
    expect(q[0].lastError).toBe('boom')
  })

  it('backoff grows exponentially and caps', () => {
    expect(backoffMs(1)).toBe(1_000)
    expect(backoffMs(2)).toBe(2_000)
    expect(backoffMs(3)).toBe(4_000)
    expect(backoffMs(100)).toBe(60_000)
  })

  it('isRetryable until MAX_ATTEMPTS', () => {
    expect(isRetryable({ attempts: MAX_ATTEMPTS - 1 })).toBe(true)
    expect(isRetryable({ attempts: MAX_ATTEMPTS })).toBe(false)
  })

  it('deterministic ids dedupe the component ops (C.7)', () => {
    expect(completeSessionOpId('s1')).toBe('complete-session:s1')
    expect(summaryOpId('s1', 'weekly')).toBe('summary-weekly:s1')
    expect(summaryOpId('s1', 'monthly')).toBe('summary-monthly:s1')
  })
})
