'use client'

import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { format } from 'date-fns'
import {
  buildMonthCalendar,
  type CalendarStatus,
} from '@/lib/analytics/consistency'
import type { WorkoutPlan, WorkoutSession } from '@/types'

/**
 * Monthly workout calendar (FR-16, design C.16 step 11). Each day is coloured by
 * its classification — Completed / Partial / Planned / Rest — computed purely by
 * `buildMonthCalendar`. Month navigation is local state; the parent passes the
 * loaded sessions + plan.
 */

const STATUS_CLASS: Record<CalendarStatus, string> = {
  Completed: 'bg-primary text-primary-foreground',
  Partial: 'bg-amber-500/80 text-black',
  Planned: 'bg-muted text-muted-foreground',
  Rest: 'bg-card text-muted-foreground/60 border border-dashed border-border',
}

const LEGEND: CalendarStatus[] = ['Completed', 'Partial', 'Planned', 'Rest']

export function WorkoutCalendar({
  sessions,
  plan,
}: {
  sessions: ReadonlyArray<WorkoutSession>
  plan: WorkoutPlan | undefined
}) {
  const [cursor, setCursor] = useState(() => {
    const d = new Date()
    return new Date(d.getFullYear(), d.getMonth(), 1)
  })

  const days = useMemo(
    () =>
      buildMonthCalendar(
        cursor.getFullYear(),
        cursor.getMonth(),
        sessions,
        plan,
      ),
    [cursor, sessions, plan],
  )

  const leadingBlanks = days.length > 0 ? mondayIndex(days[0].date) : 0

  return (
    <section className="rounded-xl border border-border bg-card p-4">
      <header className="mb-3 flex items-center justify-between">
        <button
          type="button"
          aria-label="Previous month"
          onClick={() =>
            setCursor(
              new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1),
            )
          }
          className="rounded-md p-1 hover:bg-accent"
        >
          <ChevronLeft className="size-4" aria-hidden="true" />
        </button>
        <h2 className="text-sm font-semibold">
          {format(cursor, 'MMMM yyyy')}
        </h2>
        <button
          type="button"
          aria-label="Next month"
          onClick={() =>
            setCursor(
              new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1),
            )
          }
          className="rounded-md p-1 hover:bg-accent"
        >
          <ChevronRight className="size-4" aria-hidden="true" />
        </button>
      </header>

      <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-muted-foreground">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
          <span key={`${d}-${i}`}>{d}</span>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-1">
        {Array.from({ length: leadingBlanks }).map((_, i) => (
          <span key={`blank-${i}`} />
        ))}
        {days.map((d) => (
          <div
            key={d.dayKey}
            title={`${format(d.date, 'MMM d')} — ${d.status}`}
            className={`flex aspect-square items-center justify-center rounded-md text-xs ${STATUS_CLASS[d.status]}`}
          >
            {d.date.getDate()}
          </div>
        ))}
      </div>

      <ul className="mt-3 flex flex-wrap gap-3 text-[10px] text-muted-foreground">
        {LEGEND.map((status) => (
          <li key={status} className="flex items-center gap-1">
            <span
              className={`inline-block size-3 rounded-sm ${STATUS_CLASS[status]}`}
            />
            {status}
          </li>
        ))}
      </ul>
    </section>
  )
}

/** Monday-first column index for a date (Mon=0 … Sun=6). */
function mondayIndex(d: Date): number {
  return (d.getDay() + 6) % 7
}
