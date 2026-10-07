'use client'

import { useAuth } from '@/hooks/useAuth'
import { Shield } from 'lucide-react'

/** Profile header banner with user avatar, display name, and goal */
export function ProfileHeader() {
  const { profile } = useAuth()
  const name = profile?.displayName ?? 'Athlete'
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || 'FF'

  return (
    <div className="relative flex items-center gap-4 overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-r from-card to-card-elevated p-5 shadow-lg">
      <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-xl font-black text-primary-foreground shadow-[0_0_20px_rgba(34,197,94,0.35)]">
        {initials}
      </div>

      <div className="flex flex-col">
        <h1 className="text-xl font-black tracking-tight text-foreground sm:text-2xl">
          {name}
        </h1>
        <p className="text-xs text-muted-foreground">{profile?.email}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <span className="flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
            <Shield className="size-3" />
            {profile?.goal?.replace('_', ' ') ?? 'Strength'}
          </span>
          <span className="flex items-center gap-1 rounded-full border border-border bg-secondary/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            {profile?.experience ?? 'Intermediate'}
          </span>
        </div>
      </div>
    </div>
  )
}
