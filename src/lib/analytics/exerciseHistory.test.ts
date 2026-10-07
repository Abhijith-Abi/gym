import { describe, expect, it } from 'vitest'
import { HISTORY_RING_SIZE, rollupExerciseHistory } from './exerciseHistory'

describe('exerciseHistory rollup (C.8 / C.16 step 8)', () => {
  const base = {
    exerciseId: 'bench',
    uid: 'u1',
    sessionId: 's1',
    performedAt: new Date('2024-01-01'),
  }

  it('creates fresh history from a first session, picking the top e1RM set', () => {
    const h = rollupExerciseHistory(undefined, {
      ...base,
      sets: [
        { weightKg: 60, actualReps: 10, isWarmup: false },
        { weightKg: 80, actualReps: 5, isWarmup: false }, // higher e1RM
        { weightKg: 100, actualReps: 1, isWarmup: true }, // warmup ignored
      ],
    })
    expect(h).toBeDefined()
    expect(h?.recentSessions).toHaveLength(1)
    expect(h?.recentSessions[0].weightKg).toBe(80)
    expect(h?.bestWeightKg).toBe(80)
  })

  it('prepends newest-first and bounds the ring at HISTORY_RING_SIZE', () => {
    let h = rollupExerciseHistory(undefined, {
      ...base,
      sessionId: 's0',
      performedAt: new Date('2024-01-01'),
      sets: [{ weightKg: 50, actualReps: 5, isWarmup: false }],
    })
    for (let i = 1; i <= HISTORY_RING_SIZE + 3; i += 1) {
      h = rollupExerciseHistory(h, {
        ...base,
        sessionId: `s${i}`,
        performedAt: new Date(2024, 0, 1 + i),
        sets: [{ weightKg: 50 + i, actualReps: 5, isWarmup: false }],
      })
    }
    expect(h?.recentSessions.length).toBe(HISTORY_RING_SIZE)
    // newest first
    expect(h?.recentSessions[0].sessionId).toBe(`s${HISTORY_RING_SIZE + 3}`)
  })

  it('returns prior history unchanged when a session had no working set', () => {
    const prev = rollupExerciseHistory(undefined, {
      ...base,
      sets: [{ weightKg: 60, actualReps: 8, isWarmup: false }],
    })
    const after = rollupExerciseHistory(prev, {
      ...base,
      sessionId: 's2',
      sets: [{ weightKg: 0, durationSeconds: 30, isWarmup: false }],
    })
    expect(after).toBe(prev)
  })

  it('de-duplicates a re-rolled session by sessionId', () => {
    const first = rollupExerciseHistory(undefined, {
      ...base,
      sets: [{ weightKg: 60, actualReps: 8, isWarmup: false }],
    })
    const again = rollupExerciseHistory(first, {
      ...base,
      sets: [{ weightKg: 65, actualReps: 8, isWarmup: false }],
    })
    expect(again?.recentSessions).toHaveLength(1)
    expect(again?.recentSessions[0].weightKg).toBe(65)
  })
})
