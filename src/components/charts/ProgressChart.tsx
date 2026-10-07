'use client'

import dynamic from 'next/dynamic'
import type { TrendPoint } from '@/lib/analytics/trends'
import { ChartSkeleton } from './ChartSkeleton'

/** Lazy, ssr:false line chart for body/weight trends (FR-22/28, C.6). */
const View = dynamic(
  () => import('./ChartViews').then((m) => m.ProgressChartView),
  { ssr: false, loading: () => <ChartSkeleton label="trend" /> },
)

export function ProgressChart({ points }: { points: TrendPoint[] }) {
  return <View points={points} />
}
