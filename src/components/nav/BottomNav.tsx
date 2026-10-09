'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Dumbbell, History, Home, TrendingUp, User, type LucideIcon } from 'lucide-react'
import { triggerHaptic } from '@/hooks/useHaptics'
import { useWorkoutSounds } from '@/hooks/useWorkoutSounds'
import { useSessionStore } from '@/store/sessionStore'
import { cn } from '@/lib/utils'

interface NavItem {
  href: string
  label: string
  icon: LucideIcon
  isWorkout?: boolean
}

const ITEMS: NavItem[] = [
  { href: '/dashboard', label: 'Home', icon: Home },
  { href: '/exercises', label: 'Exercises', icon: Dumbbell },
  { href: '/workout', label: 'Workouts', icon: Dumbbell, isWorkout: true },
  { href: '/progress', label: 'Progress', icon: TrendingUp },
  { href: '/settings', label: 'Profile', icon: User },
]

/**
 * Mobile Bottom Navigation Bar (FR-35).
 * Native mobile app look & feel with animated burnt-orange indicator,
 * glassmorphism surface, and safe-area padding.
 */
export function BottomNav() {
  const pathname = usePathname()
  const { playSound } = useWorkoutSounds()
  const session = useSessionStore((s) => s.session)
  const isWorkoutActive = session?.status === 'IN_PROGRESS'

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-40 w-full border-t border-white/10 bg-[#121212]/90 pb-safe backdrop-blur-xl md:hidden shadow-[0_-8px_30px_rgba(0,0,0,0.6)]"
    >
      <ul className="mx-auto flex w-full max-w-md items-center justify-around px-2 py-1.5">
        {ITEMS.map(({ href, label, icon: Icon, isWorkout }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`)
          return (
            <li key={href} className="relative flex-1 min-w-0">
              <Link
                href={href}
                aria-current={active ? 'page' : undefined}
                onClick={() => {
                  triggerHaptic('light')
                  playSound('button-click')
                }}
                className={cn(
                  'relative flex min-h-[50px] w-full flex-col items-center justify-center gap-1 px-1 py-1 text-[10px] font-bold transition-all',
                  active ? 'text-primary' : 'text-[#8C8C8C] hover:text-white',
                )}
              >
                {/* Active Indicator Pill */}
                {active && (
                  <motion.div
                    layoutId="bottom-nav-active-pill"
                    className="absolute inset-x-1.5 inset-y-1 -z-10 rounded-xl bg-primary/15 border border-primary/35 shadow-[0_0_12px_rgba(255,107,53,0.2)]"
                    transition={{ type: 'spring', damping: 24, stiffness: 320 }}
                  />
                )}

                <div className="relative">
                  <Icon
                    className={cn(
                      'size-5 transition-transform',
                      active ? 'scale-110 text-primary stroke-[2.5]' : 'stroke-[1.8]',
                    )}
                    aria-hidden="true"
                  />
                  {isWorkout && isWorkoutActive && (
                    <span className="absolute -right-1.5 -top-1 flex size-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex size-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,107,53,0.8)]" />
                    </span>
                  )}
                </div>

                <span className="truncate tracking-tight">{label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
