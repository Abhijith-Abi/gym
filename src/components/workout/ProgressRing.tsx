'use client'

import React from 'react'

interface ProgressRingProps {
  progress: number // 0 to 1
  size?: number
  strokeWidth?: number
  className?: string
  trackColor?: string
  children?: React.ReactNode
}

/**
 * Animated SVG circular progress ring with glowing stroke and smooth transitions.
 */
export function ProgressRing({
  progress,
  size = 180,
  strokeWidth = 10,
  className = '',
  trackColor = 'rgba(255, 255, 255, 0.08)',
  children,
}: ProgressRingProps) {
  const center = size / 2
  const radius = center - strokeWidth
  const circumference = 2 * Math.PI * radius
  const clampedProgress = Math.min(Math.max(progress, 0), 1)
  const offset = circumference - clampedProgress * circumference

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        className="-rotate-90 transform transition-all duration-300"
      >
        <defs>
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <filter id="ringGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="glow" />
            <feComposite in="SourceGraphic" in2="glow" operator="over" />
          </filter>
        </defs>

        {/* Background Track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {/* Progress Arc */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="url(#ringGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
          filter="url(#ringGlow)"
          className="transition-all duration-500 ease-out"
        />
      </svg>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  )
}
