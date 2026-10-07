'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Dumbbell,
  History,
  Home,
  Settings,
  TrendingUp,
  Activity,
  Award,
  HeartPulse,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSessionStore } from '@/store/sessionStore'

interface SidebarItem {
  href: string
  label: string
  icon: LucideIcon
  isWorkout?: boolean
}

const MAIN_ITEMS: SidebarItem[] = [
  { href: '/dashboard', label: 'Home', icon: Home },
  { href: '/workout', label: 'Workout', icon: Dumbbell, isWorkout: true },
  { href: '/progress', label: 'Progress', icon: TrendingUp },
  { href: '/history', label: 'History', icon: History },
  { href: '/exercises', label: 'Exercises', icon: Dumbbell },
]

const SECONDARY_ITEMS: SidebarItem[] = [
  { href: '/recovery', label: 'Recovery', icon: HeartPulse },
  { href: '/goals', label: 'Goals & Badges', icon: Award },
  { href: '/settings', label: 'Settings', icon: Settings },
]

/** Desktop sidebar (FR-35). Sleek athletic chrome pinned on desktop. */
export function Sidebar() {
  const pathname = usePathname()
  const session = useSessionStore((s) => s.session)
  const isWorkoutActive = session?.status === 'IN_PROGRESS'

  return (
    <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col overflow-y-auto border-r border-border bg-card/60 p-5 backdrop-blur-xl md:flex">
      <div className="mb-8 flex items-center gap-2.5 px-2">
        <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_0_15px_rgba(34,197,94,0.4)]">
          <Dumbbell className="size-5" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-black tracking-wider text-foreground">
            FORGE<span className="text-primary">FIT</span>
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Elite Training
          </span>
        </div>
      </div>

      <nav aria-label="Primary" className="flex flex-1 flex-col justify-between">
        <div className="flex flex-col gap-1">
          <span className="mb-2 px-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Menu
          </span>
          {MAIN_ITEMS.map(({ href, label, icon: Icon, isWorkout }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`)
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all',
                  active
                    ? 'bg-primary text-primary-foreground shadow-[0_0_15px_rgba(34,197,94,0.3)]'
                    : 'text-muted-foreground hover:bg-secondary/70 hover:text-foreground',
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className="size-4" aria-hidden="true" />
                  <span>{label}</span>
                </div>
                {isWorkout && isWorkoutActive && (
                  <span className="flex items-center gap-1 rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary">
                    <Activity className="size-3 animate-pulse" />
                    LIVE
                  </span>
                )}
              </Link>
            )
          })}

          <div className="my-3 border-t border-border/60" />

          <span className="mb-2 px-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Tracking &amp; More
          </span>
          {SECONDARY_ITEMS.map(({ href, label, icon: Icon }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`)
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all',
                  active
                    ? 'bg-secondary text-foreground'
                    : 'text-muted-foreground hover:bg-secondary/70 hover:text-foreground',
                )}
              >
                <Icon className="size-4" aria-hidden="true" />
                <span>{label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </aside>
  )
}
