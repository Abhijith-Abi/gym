'use client'

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { VolumePoint } from '@/lib/analytics/volume'
import type { StrengthPoint } from '@/lib/analytics/strength'
import type { MuscleVolumePoint } from '@/lib/analytics/muscleVolume'
import type { TrendPoint } from '@/lib/analytics/trends'

/**
 * Recharts view components (design C.6).
 * Premium dark theme formatting with custom tooltips, gradients, and subtle grids.
 */

const AXIS = { stroke: '#94a3b8', fontSize: 11 }
const GRID = 'rgba(255, 255, 255, 0.06)'
const PRIMARY = '#22c55e'
const ACCENT = '#06b6d4'

interface EmptyProps {
  message?: string
}

function Empty({ message = 'No data available for this range' }: EmptyProps) {
  return (
    <div className="flex h-64 w-full flex-col items-center justify-center rounded-2xl border border-border/80 bg-card p-6 text-center text-xs text-muted-foreground">
      <p>{message}</p>
      <p className="mt-1 text-[10px] text-muted-foreground/60">
        Log workouts to see your progression trend.
      </p>
    </div>
  )
}

const customTooltipStyle = {
  backgroundColor: '#10141e',
  borderColor: 'rgba(255, 255, 255, 0.12)',
  borderRadius: '0.75rem',
  color: '#f8fafc',
  fontSize: '0.75rem',
  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
}

export function ProgressChartView({ points }: { points: TrendPoint[] }) {
  if (points.length === 0) return <Empty />
  return (
    <div className="rounded-2xl border border-border/80 bg-card p-3 shadow-sm">
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={points} margin={{ top: 12, right: 12, left: -10, bottom: 0 }}>
          <CartesianGrid stroke={GRID} strokeDasharray="3 3" />
          <XAxis dataKey="label" tick={AXIS} stroke="#475569" />
          <YAxis tick={AXIS} width={40} stroke="#475569" domain={['auto', 'auto']} />
          <Tooltip contentStyle={customTooltipStyle} />
          <Line
            type="monotone"
            dataKey="value"
            stroke={PRIMARY}
            strokeWidth={3}
            dot={{ r: 4, fill: PRIMARY, stroke: '#10141e', strokeWidth: 2 }}
            activeDot={{ r: 6, fill: ACCENT }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function VolumeChartView({ points }: { points: VolumePoint[] }) {
  if (points.length === 0) return <Empty />
  return (
    <div className="rounded-2xl border border-border/80 bg-card p-3 shadow-sm">
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={points} margin={{ top: 12, right: 12, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="volumeArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={PRIMARY} stopOpacity={0.4} />
              <stop offset="95%" stopColor={PRIMARY} stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={GRID} strokeDasharray="3 3" />
          <XAxis dataKey="label" tick={AXIS} stroke="#475569" />
          <YAxis tick={AXIS} width={48} stroke="#475569" />
          <Tooltip contentStyle={customTooltipStyle} />
          <Area
            type="monotone"
            dataKey="volumeKg"
            stroke={PRIMARY}
            fill="url(#volumeArea)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export function StrengthChartView({ points }: { points: StrengthPoint[] }) {
  if (points.length === 0) return <Empty />
  return (
    <div className="rounded-2xl border border-border/80 bg-card p-3 shadow-sm">
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={points} margin={{ top: 12, right: 12, left: -10, bottom: 0 }}>
          <CartesianGrid stroke={GRID} strokeDasharray="3 3" />
          <XAxis dataKey="label" tick={AXIS} stroke="#475569" />
          <YAxis tick={AXIS} width={44} stroke="#475569" domain={['auto', 'auto']} />
          <Tooltip contentStyle={customTooltipStyle} />
          <Line
            type="monotone"
            dataKey="e1rmKg"
            stroke={ACCENT}
            strokeWidth={3}
            dot={{ r: 4, fill: ACCENT, stroke: '#10141e', strokeWidth: 2 }}
            activeDot={{ r: 6, fill: PRIMARY }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function MuscleVolumeChartView({
  points,
}: {
  points: MuscleVolumePoint[]
}) {
  if (points.length === 0) return <Empty />
  return (
    <div className="rounded-2xl border border-border/80 bg-card p-3 shadow-sm">
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={points} margin={{ top: 12, right: 12, left: -10, bottom: 0 }}>
          <CartesianGrid stroke={GRID} strokeDasharray="3 3" />
          <XAxis dataKey="muscle" tick={AXIS} stroke="#475569" />
          <YAxis tick={AXIS} width={48} stroke="#475569" />
          <Tooltip contentStyle={customTooltipStyle} />
          <Bar dataKey="volumeKg" fill={PRIMARY} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
