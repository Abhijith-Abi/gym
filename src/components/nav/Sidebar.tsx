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
    <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col justify-between border-r border-white/10 bg-slate-950/70 p-5 backdrop-blur-2xl md:flex shadow-[4px_0_24px_rgba(0,0,0,0.4)]">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3 px-2 pt-1">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-400 text-slate-950 font-black shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            <Dumbbell className="size-5 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-white flex items-center gap-1">
              FORGE<span className="text-emerald-400">FIT</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Elite Training
            </span>
          </div>
        </div>

        <nav aria-label="Primary" className="flex flex-col gap-1">
          <span className="mb-2 px-3 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
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
                  'group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all duration-200',
                  active
                    ? 'border border-emerald-500/30 bg-gradient-to-r from-emerald-500/20 to-cyan-500/10 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)] font-bold'
                    : 'text-slate-400 hover:border-white/5 hover:bg-white/[0.04] hover:text-slate-100',
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={cn(
                      'size-4 transition-transform group-hover:scale-110',
                      active ? 'text-emerald-400' : 'text-slate-400 group-hover:text-slate-200',
                    )}
                    aria-hidden="true"
                  />
                  <span>{label}</span>
                </div>
                {isWorkout && isWorkoutActive && (
                  <span className="flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/20 px-2 py-0.5 text-[10px] font-extrabold text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                    <Activity className="size-3 animate-pulse" />
                    LIVE
                  </span>
                )}
              </Link>
            )
          })}

          <div className="my-3 border-t border-white/10" />

          <span className="mb-2 px-3 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
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
                  'group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all duration-200',
                  active
                    ? 'border border-cyan-500/30 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 text-cyan-300 font-bold shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                    : 'text-slate-400 hover:border-white/5 hover:bg-white/[0.04] hover:text-slate-100',
                )}
              >
                <Icon
                  className={cn(
                    'size-4 transition-transform group-hover:scale-110',
                    active ? 'text-cyan-400' : 'text-slate-400 group-hover:text-slate-200',
                  )}
                  aria-hidden="true"
                />
                <span>{label}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-3 text-center">
        <span className="text-[11px] font-medium text-slate-500">
          ForgeFit PWA · Offline First
        </span>
      </div>
    </aside>
  )
}
