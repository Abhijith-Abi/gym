'use client'

import dynamic from 'next/dynamic'
import type { MuscleVolumePoint } from '@/lib/analytics/muscleVolume'
import { ChartSkeleton } from './ChartSkeleton'

/** Lazy, ssr:false bar chart for muscle-group volume split (FR-12/28, C.6). */
const View = dynamic(
  () => import('./ChartViews').then((m) => m.MuscleVolumeChartView),
  { ssr: false, loading: () => <ChartSkeleton label="muscle volume" /> },
)

export function MuscleVolumeChart({ points }: { points: MuscleVolumePoint[] }) {
  return <View points={points} />
}
