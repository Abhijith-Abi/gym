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
    <main className="w-full min-w-0 flex flex-col gap-6">
      {/* Top Banner: Greeting & Quick Live Status */}
      <Greeting />
      <ContinueWorkoutCard />

      {/* 4 Stat Tiles across the full width */}
      <div className="flex w-full min-w-0 flex-col gap-2.5">
        <span className="text-xs font-bold uppercase tracking-wider text-[#A8A8A8]">
          Training Performance Overview
        </span>
        <StatTiles />
      </div>

      {/* Main Responsive Grid: 2 Columns on Desktop, Single Stack on Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (Hero Today Workout & Schedule) */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
          <div className="flex w-full min-w-0 flex-col gap-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A8A8A8]">
              Weekly Training Schedule
            </span>
            <DaySelector />
          </div>

          <TodayCard />

          {/* Explore More Workouts & Preset Programs */}
          <div className="flex w-full min-w-0 flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Dumbbell className="size-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-white">
                    Workout Programs &amp; Splits
                  </span>
                  <span className="text-[11px] font-semibold text-[#A8A8A8]">
                    Push/Pull/Legs, Fat Loss, Strength, HIIT, Mobility
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowAllPrograms(!showAllPrograms)}
                className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary/10 transition-colors"
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
              <div className="mt-2 border-t border-white/10 pt-4">
                <WorkoutRoutineExplorer />
              </div>
            )}
          </div>
        </div>

        {/* Right Column (AI Coach & Smart Workouts) */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
          <AICoachCard />
        </div>
      </div>
    </main>
  )
}
