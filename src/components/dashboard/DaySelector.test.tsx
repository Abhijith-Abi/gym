import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { createDefaultPlan } from '@/data/workoutPlan'
import { useWorkoutStore } from '@/store/workoutStore'
import { DaySelector } from './DaySelector'
import { TodayCard } from './TodayCard'

/**
 * AC-13: DaySelector auto-selects today, and the Sunday rest-day variant
 * renders on Sundays. We drive "today" by faking the system clock.
 */
function resetStore() {
  useWorkoutStore.setState({
    plan: createDefaultPlan('u1'),
    selectedDay: 'mon',
  })
}

describe('DaySelector today auto-select + Sunday rest variant (AC-13)', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    resetStore()
  })

  afterEach(() => {
    vi.useRealTimers()
    cleanup()
  })

  it('auto-selects today (a Wednesday) on mount', () => {
    // 2024-01-03 is a Wednesday.
    vi.setSystemTime(new Date('2024-01-03T10:00:00'))
    render(<DaySelector />)
    expect(useWorkoutStore.getState().selectedDay).toBe('wed')
    const wed = screen.getByRole('tab', { name: /wed/i })
    expect(wed).toHaveAttribute('aria-selected', 'true')
  })

  it('selects Sunday and TodayCard shows the rest-day variant on Sundays', () => {
    // 2024-01-07 is a Sunday.
    vi.setSystemTime(new Date('2024-01-07T10:00:00'))
    render(
      <>
        <DaySelector />
        <TodayCard />
      </>,
    )
    expect(useWorkoutStore.getState().selectedDay).toBe('sun')
    expect(screen.getByText(/rest day/i)).toBeInTheDocument()
  })
})
