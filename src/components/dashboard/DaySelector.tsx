'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { todayDayId, useWorkoutStore } from '@/store/workoutStore'
import { triggerHaptic } from '@/hooks/useHaptics'
import type { DayOfWeek } from '@/types'

const DAY_LABEL: Record<DayOfWeek, string> = {
  mon: 'Mon',
  tue: 'Tue',
  wed: 'Wed',
  thu: 'Thu',
  fri: 'Fri',
  sat: 'Sat',
  sun: 'Sun',
}

/**
 * Swipeable MON-SUN day selector (FR-3). Auto-selects today on mount and marks
 * the current day. Each pill shows the day's workout status (rest vs training).
 * Horizontally scrollable on mobile with spring animations and haptic feedback.
 */
export function DaySelector() {
  const order = useWorkoutStore((s) => s.dayOrder())
  const selectedDay = useWorkoutStore((s) => s.selectedDay)
  const selectDay = useWorkoutStore((s) => s.selectDay)
  const selectToday = useWorkoutStore((s) => s.selectToday)
  const plan = useWorkoutStore((s) => s.plan)
  const today = todayDayId()

  // Auto-select today on first mount (AC-13).
  useEffect(() => {
    selectToday()
  }, [selectToday])

  return (
    <div
      className="flex w-full min-w-0 gap-1.5 overflow-x-auto pb-2 scrollbar-none sm:gap-2"
      role="tablist"
      aria-label="Day of week"
    >
      {order.map((day) => {
        const planDay = plan?.days[day]
        const isToday = day === today
        const active = day === selectedDay

        return (
          <button
            key={day}
            role="tab"
            aria-selected={active}
            aria-current={isToday ? 'date' : undefined}
            onClick={() => {
              triggerHaptic('light')
              selectDay(day)
            }}
            className={cn(
              'relative flex min-w-[58px] flex-1 shrink-0 flex-col items-center gap-1 rounded-2xl border p-2 text-xs font-bold transition-all active:scale-95 sm:min-w-[70px] sm:p-2.5 sm:text-sm',
              active
                ? 'border-primary bg-primary/15 text-primary shadow-[0_0_15px_rgba(34,197,94,0.15)]'
                : 'border-border/80 bg-card text-muted-foreground hover:border-border hover:text-foreground',
            )}
          >
            {active && (
              <motion.div
                layoutId="day-selector-active-glow"
                className="absolute inset-0 -z-10 rounded-2xl bg-primary/10"
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              />
            )}

            <div className="flex items-center gap-1">
              <span>{DAY_LABEL[day]}</span>
              {isToday && (
                <span className="size-1.5 rounded-full bg-primary" />
              )}
            </div>

            <span
              className={cn(
                'rounded-md px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider',
                planDay?.isRest
                  ? 'bg-secondary text-muted-foreground'
                  : active
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary/60 text-muted-foreground',
              )}
            >
              {planDay?.isRest ? 'Rest' : isToday ? 'Today' : 'Train'}
            </span>
          </button>
        )
      })}
    </div>
  )
}
