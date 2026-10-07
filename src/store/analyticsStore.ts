import { create } from 'zustand'
import type { AnalyticsRange } from '@/lib/analytics/range'
import type {
  ExerciseHistory,
  MonthlySummary,
  WeeklySummary,
} from '@/types'

/**
 * Analytics cache + range filter (design C.5). Holds the small SUMMARY docs and
 * bounded exercise-history reads that back the Progress charts/reports. NOT
 * persisted — hydrated from analyticsService / Firestore. The reports read the
 * summary docs here (FR-28), never full history.
 */
interface AnalyticsStoreState {
  range: AnalyticsRange
  weekly: WeeklySummary[]
  monthly: MonthlySummary[]
  histories: ExerciseHistory[]
  loaded: boolean

  setRange: (r: AnalyticsRange) => void
  setWeekly: (s: WeeklySummary[]) => void
  setMonthly: (s: MonthlySummary[]) => void
  setHistories: (h: ExerciseHistory[]) => void
  setLoaded: (v: boolean) => void
  clear: () => void
}

export const useAnalyticsStore = create<AnalyticsStoreState>((set) => ({
  range: '30D',
  weekly: [],
  monthly: [],
  histories: [],
  loaded: false,

  setRange: (range) => set({ range }),
  setWeekly: (weekly) => set({ weekly }),
  setMonthly: (monthly) => set({ monthly }),
  setHistories: (histories) => set({ histories }),
  setLoaded: (loaded) => set({ loaded }),
  clear: () =>
    set({ weekly: [], monthly: [], histories: [], loaded: false }),
}))
