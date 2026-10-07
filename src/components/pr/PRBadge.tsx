'use client'

import { Trophy } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { PersonalRecordType } from '@/types'

const LABEL: Record<PersonalRecordType, string> = {
  weight: 'Weight PR',
  reps: 'Rep PR',
  volume: 'Volume PR',
  e1rm: '1RM PR',
}

/** Small inline PR marker shown on a set row / exercise header (FR-12). */
export function PRBadge({
  type,
  className,
}: {
  type: PersonalRecordType
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-xs font-semibold text-primary',
        className,
      )}
    >
      <Trophy className="size-3" aria-hidden="true" />
      {LABEL[type]}
    </span>
  )
}
