'use client'

import { Check, CloudOff, Loader2, RefreshCw, TriangleAlert } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useNetworkStatus } from '@/hooks/useNetworkStatus'
import { useSyncStore } from '@/store/syncStore'

/**
 * User-visible sync status pill (design C.7/C.15). Reflects the custom queue's
 * state: offline (held), syncing, pending count, synced, or error. Reads only
 * from the syncStore + network hook — it issues no writes itself.
 */
export function SyncStatus({ className }: { className?: string }) {
  const online = useNetworkStatus()
  const phase = useSyncStore((s) => s.phase)
  const pending = useSyncStore((s) => s.queue.length)
  const lastError = useSyncStore((s) => s.lastError)

  const view = resolveView({ online, phase, pending, lastError })

  return (
    <span
      role="status"
      aria-live="polite"
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium',
        view.tone,
        className,
      )}
    >
      <view.icon
        className={cn('size-3.5', view.spin && 'animate-spin')}
        aria-hidden="true"
      />
      {view.label}
    </span>
  )
}

interface ViewInput {
  online: boolean
  phase: string
  pending: number
  lastError?: string
}

function resolveView(input: ViewInput) {
  if (!input.online) {
    return {
      label: 'Offline',
      icon: CloudOff,
      tone: 'bg-muted text-muted-foreground',
      spin: false,
    }
  }
  if (input.phase === 'error' || input.lastError) {
    return {
      label: 'Sync error',
      icon: TriangleAlert,
      tone: 'bg-destructive/10 text-destructive',
      spin: false,
    }
  }
  if (input.phase === 'syncing') {
    return {
      label: 'Syncing…',
      icon: Loader2,
      tone: 'bg-primary/10 text-primary',
      spin: true,
    }
  }
  if (input.pending > 0) {
    return {
      label: `${input.pending} pending`,
      icon: RefreshCw,
      tone: 'bg-primary/10 text-primary',
      spin: false,
    }
  }
  return {
    label: 'Synced',
    icon: Check,
    tone: 'bg-primary/10 text-primary',
    spin: false,
  }
}
