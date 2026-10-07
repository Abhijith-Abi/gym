'use client'

import dynamic from 'next/dynamic'
import type { StrengthPoint } from '@/lib/analytics/strength'
import { ChartSkeleton } from './ChartSkeleton'

/** Lazy, ssr:false line chart for estimated-1RM strength trend (FR-13/15, C.6). */
const View = dynamic(
  () => import('./ChartViews').then((m) => m.StrengthChartView),
  { ssr: false, loading: () => <ChartSkeleton label="strength" /> },
)

export function StrengthChart({ points }: { points: StrengthPoint[] }) {
  return <View points={points} />
}
