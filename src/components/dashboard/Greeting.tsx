'use client'

import { useAuth } from '@/hooks/useAuth'
import { useSyncStore } from '@/store/syncStore'
import { Wifi, WifiOff } from 'lucide-react'

/** Time-of-day greeting using the loaded profile (FR-27). */
export function Greeting() {
  const { profile } = useAuth()
  const online = useSyncStore((s) => s.online)
  const name = profile?.displayName?.split(' ')[0] ?? 'Athlete'
  const hour = new Date().getHours()
  const part = hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening'

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
          <span>Good {part}</span>
          <span>👋</span>
        </div>
        <h1 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
          {name}
        </h1>
        <p className="text-xs text-muted-foreground">
          Ready to crush today&apos;s workout?
        </p>
      </div>

      <div className="flex items-center gap-2">
        {/* Network / Sync status badge */}
        <span
          className="flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-1 text-[11px] font-semibold text-muted-foreground"
          title={online ? 'Online (Synced)' : 'Offline mode'}
        >
          {online ? (
            <>
              <Wifi className="size-3 text-primary" />
              <span className="hidden sm:inline">Synced</span>
            </>
          ) : (
            <>
              <WifiOff className="size-3 text-warning" />
              <span>Offline</span>
            </>
          )}
        </span>
      </div>
    </div>
  )
}
