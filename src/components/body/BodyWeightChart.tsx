'use client'

import { useMemo } from 'react'
import { useBodyStore } from '@/store/bodyStore'
import { useAnalyticsStore } from '@/store/analyticsStore'
import { bodyWeightSeries, bodyFatSeries } from '@/lib/analytics/trends'
import { ProgressChart } from '@/components/charts/ProgressChart'

/**
 * Body-weight + body-fat trend charts (FR-22). Pure transforms over the loaded
 * measurements, filtered by the shared analytics range; the chart itself is the
 * lazy ssr:false island.
 */
export function BodyWeightChart() {
  const measurements = useBodyStore((s) => s.measurements)
  const range = useAnalyticsStore((s) => s.range)
  const now = useMemo(() => new Date(), [])

  const weight = useMemo(
    () => bodyWeightSeries(measurements, range, now),
    [measurements, range, now],
  )
  const bodyFat = useMemo(
    () => bodyFatSeries(measurements, range, now),
    [measurements, range, now],
  )

  return (
    <div className="flex flex-col gap-6">
      <section className="flex flex-col gap-2">
        <h2 className="text-sm font-semibold">Body weight</h2>
        <ProgressChart points={weight} />
      </section>
      <section className="flex flex-col gap-2">
        <h2 className="text-sm font-semibold">Body-fat %</h2>
        <ProgressChart points={bodyFat} />
      </section>
    </div>
  )
}
