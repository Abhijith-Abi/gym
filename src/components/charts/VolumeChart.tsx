'use client'

import dynamic from 'next/dynamic'
import type { VolumePoint } from '@/lib/analytics/volume'
import { ChartSkeleton } from './ChartSkeleton'

/** Lazy, ssr:false area chart for workout volume over time (FR-11/28, C.6). */
const View = dynamic(
  () => import('./ChartViews').then((m) => m.VolumeChartView),
  { ssr: false, loading: () => <ChartSkeleton label="volume" /> },
)

export function VolumeChart({ points }: { points: VolumePoint[] }) {
  return <View points={points} />
}
