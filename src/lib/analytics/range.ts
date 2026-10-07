/** Analytics range filters (FR-28): 7D / 30D / 90D / 6M / 1Y / ALL. */
export type AnalyticsRange = '7D' | '30D' | '90D' | '6M' | '1Y' | 'ALL'

export const ANALYTICS_RANGES: AnalyticsRange[] = [
  '7D',
  '30D',
  '90D',
  '6M',
  '1Y',
  'ALL',
]

export const RANGE_LABEL: Record<AnalyticsRange, string> = {
  '7D': '7 days',
  '30D': '30 days',
  '90D': '90 days',
  '6M': '6 months',
  '1Y': '1 year',
  ALL: 'All time',
}

/** Days covered by a range; `ALL` returns null (no lower bound). */
export function rangeDays(range: AnalyticsRange): number | null {
  switch (range) {
    case '7D':
      return 7
    case '30D':
      return 30
    case '90D':
      return 90
    case '6M':
      return 182
    case '1Y':
      return 365
    case 'ALL':
      return null
  }
}

/** Inclusive lower-bound date for a range relative to `now` (null for ALL). */
export function rangeStart(range: AnalyticsRange, now: Date): Date | null {
  const days = rangeDays(range)
  if (days === null) return null
  const start = new Date(now)
  start.setHours(0, 0, 0, 0)
  start.setDate(start.getDate() - (days - 1))
  return start
}

/** Keep only items whose date falls within the range window. */
export function withinRange<T>(
  items: ReadonlyArray<T>,
  dateOf: (item: T) => Date,
  range: AnalyticsRange,
  now: Date,
): T[] {
  const start = rangeStart(range, now)
  if (start === null) return [...items]
  return items.filter((it) => dateOf(it) >= start)
}
