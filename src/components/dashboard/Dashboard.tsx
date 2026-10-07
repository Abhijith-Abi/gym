'use client'

import { useEffect, useState } from 'react'
import { Greeting } from './Greeting'
import { ContinueWorkoutCard } from './ContinueWorkoutCard'
import { DaySelector } from './DaySelector'
import { TodayCard } from './TodayCard'
import { StatTiles } from './StatTiles'
import { AICoachCard } from './AICoachCard'
import { WorkoutRoutineExplorer } from '@/components/workout/WorkoutRoutineExplorer'
import { useAuth } from '@/hooks/useAuth'
import { useWorkoutStore } from '@/store/workoutStore'
import { Dumbbell, ChevronDown, ChevronUp } from 'lucide-react'

/**
 * Dynamic dashboard client island (design C.16 step 9). Composes the greeting,
 * resume-workout banner, swipeable DaySelector, the selected day's TodayCard,
 * preset workout explorer, and dynamic stat tiles.
 */
export function Dashboard() {
  const { uid, profile } = useAuth()
  const ensureSeedPlan = useWorkoutStore((s) => s.ensureSeedPlan)
  const [showAllPrograms, setShowAllPrograms] = useState(false)

  useEffect(() => {
    if (uid) ensureSeedPlan(uid, profile?.goal, profile?.experience)
  }, [uid, profile?.goal, profile?.experience, ensureSeedPlan])

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

      {/* AI Coach & Generator */}
      <AICoachCard />

      {/* Explore More Workouts & Preset Programs */}
      <div className="flex w-full min-w-0 flex-col gap-3 rounded-3xl border border-border/80 bg-card p-4 sm:p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Dumbbell className="size-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-extrabold uppercase tracking-wider text-foreground">
                Workout Programs & Categories
              </span>
              <span className="text-[11px] font-semibold text-muted-foreground">
                Push/Pull/Legs, Fat Loss, Strength, HIIT, Mobility
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowAllPrograms(!showAllPrograms)}
            className="flex items-center gap-1 text-xs font-bold text-primary hover:underline"
          >
            <span>{showAllPrograms ? 'Hide' : 'Browse All'}</span>
            {showAllPrograms ? (
              <ChevronUp className="size-3.5" />
            ) : (
              <ChevronDown className="size-3.5" />
            )}
          </button>
        </div>

        {showAllPrograms && (
          <div className="mt-2 border-t border-border/60 pt-4">
            <WorkoutRoutineExplorer />
          </div>
        )}
      </div>

      <div className="flex w-full min-w-0 flex-col gap-2.5">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Training Performance
        </span>
        <StatTiles />
      </div>
    </main>
  )
}
