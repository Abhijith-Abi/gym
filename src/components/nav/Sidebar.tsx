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
  { href: '/exercises', label: 'Exercises', icon: Dumbbell },
  { href: '/workout', label: 'Workouts', icon: Dumbbell, isWorkout: true },
  { href: '/progress', label: 'Progress', icon: TrendingUp },
  { href: '/history', label: 'History', icon: History },
]

const SECONDARY_ITEMS: SidebarItem[] = [
  { href: '/recovery', label: 'Recovery', icon: HeartPulse },
  { href: '/goals', label: 'Goals & Badges', icon: Award },
  { href: '/settings', label: 'Profile & Settings', icon: Settings },
]

/** Desktop sidebar (FR-35). Sleek glassmorphic athletic chrome pinned on desktop. */
export function Sidebar() {
  const pathname = usePathname()
  const session = useSessionStore((s) => s.session)
  const isWorkoutActive = session?.status === 'IN_PROGRESS'

  return (
    <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col justify-between border-r border-white/10 bg-[#141414]/90 backdrop-blur-xl p-5 md:flex">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3 px-2 pt-1">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-primary text-white font-black shadow-[0_0_20px_rgba(255,107,53,0.4)]">
            <Dumbbell className="size-5 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-white flex items-center gap-1">
              FORGE<span className="text-primary">FIT</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#A8A8A8]">
              Track · Train · Transform
            </span>
          </div>
        </div>

        <nav aria-label="Primary" className="flex flex-col gap-1">
          <span className="mb-2 px-3 text-[10px] font-extrabold uppercase tracking-widest text-[#8C8C8C]">
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
                  'group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all duration-150',
                  active
                    ? 'border border-primary/40 bg-primary/15 text-primary font-bold shadow-[0_0_15px_rgba(255,107,53,0.2)]'
                    : 'text-[#A8A8A8] hover:bg-white/5 hover:text-white',
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={cn(
                      'size-4 transition-transform group-hover:scale-110',
                      active ? 'text-primary' : 'text-[#8C8C8C] group-hover:text-white',
                    )}
                    aria-hidden="true"
                  />
                  <span>{label}</span>
                </div>
                {isWorkout && isWorkoutActive && (
                  <span className="flex items-center gap-1 rounded-full border border-primary/40 bg-primary/20 px-2 py-0.5 text-[10px] font-extrabold text-primary shadow-[0_0_10px_rgba(255,107,53,0.35)]">
                    <Activity className="size-3 animate-pulse" />
                    LIVE
                  </span>
                )}
              </Link>
            )
          })}

          <div className="my-3 border-t border-white/10" />

          <span className="mb-2 px-3 text-[10px] font-extrabold uppercase tracking-widest text-[#8C8C8C]">
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
                  'group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all duration-150',
                  active
                    ? 'border border-primary/40 bg-primary/15 text-primary font-bold'
                    : 'text-[#A8A8A8] hover:bg-white/5 hover:text-white',
                )}
              >
                <Icon
                  className={cn(
                    'size-4 transition-transform group-hover:scale-110',
                    active ? 'text-primary' : 'text-[#8C8C8C] group-hover:text-white',
                  )}
                  aria-hidden="true"
                />
                <span>{label}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur-md">
        <span className="text-[11px] font-medium text-[#A8A8A8]">
          ForgeFit · Glass Edition
        </span>
      </div>
    </aside>
  )
}
