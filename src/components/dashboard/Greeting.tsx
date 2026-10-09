'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'
import { useSyncStore } from '@/store/syncStore'
import { Wifi, WifiOff, User } from 'lucide-react'

/** Time-of-day greeting with avatar and live sync status (FR-27). */
export function Greeting() {
  const { profile } = useAuth()
  const online = useSyncStore((s) => s.online)
  const name = profile?.displayName?.split(' ')[0] ?? 'Athlete'
  const hour = new Date().getHours()
  const part = hour < 12 ? 'Morning' : hour < 18 ? 'Afternoon' : 'Evening'

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#A8A8A8]">
          <span>Good {part}</span>
          <span>👋</span>
        </div>
        <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
          {name}
        </h1>
        <p className="text-xs text-[#8C8C8C]">
          Keep going, you&apos;re doing great!
        </p>
      </div>

      <div className="flex items-center gap-2.5">
        {/* Network / Sync status badge */}
        <span
          className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-[#A8A8A8] backdrop-blur-md"
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

        {/* Profile Avatar Button */}
        <Link
          href="/settings"
          className="flex size-10 items-center justify-center rounded-full border border-primary/40 bg-gradient-to-tr from-primary/20 to-white/10 text-white transition-transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,107,53,0.25)]"
        >
          <User className="size-5 text-primary" />
        </Link>
      </div>
    </div>
  )
}
