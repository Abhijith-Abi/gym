'use client'

import { useEffect } from 'react'
import { Greeting } from './Greeting'
import { ContinueWorkoutCard } from './ContinueWorkoutCard'
import { DaySelector } from './DaySelector'
import { TodayCard } from './TodayCard'
import { StatTiles } from './StatTiles'
import { useAuth } from '@/hooks/useAuth'
import { useWorkoutStore } from '@/store/workoutStore'

/**
 * Dynamic dashboard client island (design C.16 step 9). Composes the greeting,
 * resume-workout banner, swipeable DaySelector, the selected day's TodayCard,
 * and dynamic stat tiles. Ensures seed plan is available offline.
 */
export function Dashboard() {
  const { uid } = useAuth()
  const ensureSeedPlan = useWorkoutStore((s) => s.ensureSeedPlan)

  useEffect(() => {
    if (uid) ensureSeedPlan(uid)
  }, [uid, ensureSeedPlan])

  return (
    <main className="mx-auto flex w-full max-w-2xl min-w-0 flex-col gap-5 p-3.5 sm:gap-6 sm:p-6">
      <Greeting />
      <ContinueWorkoutCard />
      <div className="flex w-full min-w-0 flex-col gap-2.5">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Weekly Schedule
        </span>
        <DaySelector />
      </div>
      <TodayCard />
      <div className="flex w-full min-w-0 flex-col gap-2.5">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Training Performance
        </span>
        <StatTiles />
      </div>
    </main>
  )
}
