import type { DayOfWeek, PlanDay, WorkoutPlan, WorkoutSession } from '@/types'

/**
 * Consistency + streak transforms (FR-16/17, design C.16 step 11). Pure — fed
 * completed sessions + the plan so rest days (plan `isRest` days) do NOT break
 * the streak. All date math is local-day based (midnight boundaries).
 */

/** Local yyyy-mm-dd key for a date (streak/calendar grouping). */
export function dayKey(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

const DOW_INDEX: Record<DayOfWeek, number> = {
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
  sun: 0,
}

/** The DayOfWeek id for a JS Date (Sunday = 'sun'). */
export function dayOfWeekId(d: Date): DayOfWeek {
  const js = d.getDay()
  return (Object.keys(DOW_INDEX) as DayOfWeek[]).find(
    (k) => DOW_INDEX[k] === js,
  ) as DayOfWeek
}

/** Whether the plan marks a given weekday as a rest day. */
export function isRestDay(plan: WorkoutPlan | undefined, d: Date): boolean {
  if (!plan) return false
  const day: PlanDay | undefined = plan.days[dayOfWeekId(d)]
  return Boolean(day?.isRest)
}

/**
 * Consecutive-day training streak counting back from `now`.
 *
 * Rest days (plan `isRest`) are **transparent**: encountering a rest day with
 * no workout neither increments nor breaks the streak — the walk-back skips it
 * and continues. A non-rest day with no completed workout breaks the streak.
 * Today being empty is tolerated (an in-progress day): the walk starts from the
 * most recent trained day.
 */
export function computeStreak(
  sessions: ReadonlyArray<WorkoutSession>,
  plan: WorkoutPlan | undefined,
  now: Date,
): number {
  const trained = new Set(
    sessions
      .filter((s) => s.status === 'COMPLETED' && s.completedAt)
      .map((s) => dayKey(s.completedAt as Date)),
  )

  const cursor = new Date(now)
  cursor.setHours(0, 0, 0, 0)

  // Allow today (and leading rest days) to be empty without breaking: walk back
  // to the first trained day, skipping rest days.
  while (!trained.has(dayKey(cursor))) {
    if (isRestDay(plan, cursor)) {
      cursor.setDate(cursor.getDate() - 1)
      continue
    }
    // A non-rest day with no workout. Allow exactly "today missing" to be
    // tolerated; any earlier non-rest gap ends the search with 0.
    if (dayKey(cursor) === dayKey(startOfDay(now))) {
      cursor.setDate(cursor.getDate() - 1)
      continue
    }
    return 0
  }

  let streak = 0
  while (true) {
    const key = dayKey(cursor)
    if (trained.has(key)) {
      streak += 1
      cursor.setDate(cursor.getDate() - 1)
      continue
    }
    if (isRestDay(plan, cursor)) {
      // Rest day keeps the streak alive but does not add to the count.
      cursor.setDate(cursor.getDate() - 1)
      continue
    }
    break
  }
  return streak
}

function startOfDay(d: Date): Date {
  const copy = new Date(d)
  copy.setHours(0, 0, 0, 0)
  return copy
}

/** Count of distinct completed-workout days within [start, end). */
export function workoutDaysInRange(
  sessions: ReadonlyArray<WorkoutSession>,
  start: Date,
  end: Date,
): number {
  const days = new Set<string>()
  for (const s of sessions) {
    if (s.status !== 'COMPLETED' || !s.completedAt) continue
    if (s.completedAt >= start && s.completedAt < end) {
      days.add(dayKey(s.completedAt))
    }
  }
  return days.size
}

export type CalendarStatus = 'Completed' | 'Partial' | 'Planned' | 'Rest'

export interface CalendarDay {
  date: Date
  dayKey: string
  status: CalendarStatus
}

/**
 * Classify a single calendar day (FR-16). Completed = a fully-completed session;
 * Partial = a session with some but not all planned sets logged (or ABANDONED
 * with progress); Rest = plan rest day with no session; Planned = a training
 * day (past-or-today with no session, or a future training day).
 */
export function classifyCalendarDay(
  date: Date,
  sessions: ReadonlyArray<WorkoutSession>,
  plan: WorkoutPlan | undefined,
): CalendarStatus {
  const key = dayKey(date)
  const daySessions = sessions.filter(
    (s) => (s.completedAt && dayKey(s.completedAt) === key) ||
      (s.startedAt && dayKey(s.startedAt) === key),
  )

  const completed = daySessions.find((s) => s.status === 'COMPLETED')
  if (completed) {
    if (
      completed.totalSets > 0 &&
      completed.completedSets < completed.totalSets
    ) {
      return 'Partial'
    }
    return 'Completed'
  }

  const partial = daySessions.find(
    (s) =>
      (s.status === 'IN_PROGRESS' || s.status === 'ABANDONED') &&
      s.completedSets > 0,
  )
  if (partial) return 'Partial'

  if (isRestDay(plan, date)) return 'Rest'
  return 'Planned'
}

/** Build the classified grid for a given month (FR-16). */
export function buildMonthCalendar(
  year: number,
  month: number,
  sessions: ReadonlyArray<WorkoutSession>,
  plan: WorkoutPlan | undefined,
): CalendarDay[] {
  const days: CalendarDay[] = []
  const cursor = new Date(year, month, 1)
  while (cursor.getMonth() === month) {
    const date = new Date(cursor)
    days.push({
      date,
      dayKey: dayKey(date),
      status: classifyCalendarDay(date, sessions, plan),
    })
    cursor.setDate(cursor.getDate() + 1)
  }
  return days
}
