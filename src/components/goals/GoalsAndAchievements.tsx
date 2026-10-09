'use client'

import { useEffect, useMemo, useState } from 'react'
import { Trophy, Flame, Dumbbell, Award, Target, Sparkles, CheckCircle2 } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { useGoalStore } from '@/store/goalStore'
import * as goalService from '@/services/goalService'
import * as sessionService from '@/services/sessionService'
import * as progressService from '@/services/progressService'
import { ACHIEVEMENTS, type AchievementMetric } from '@/data/achievements'
import { computeStreak } from '@/lib/analytics/consistency'
import { useWorkoutStore } from '@/store/workoutStore'
import { GoalProgress } from './GoalProgress'
import { AchievementCard } from '@/components/achievements/AchievementCard'
import { cn } from '@/lib/utils'
import { triggerHaptic } from '@/hooks/useHaptics'
import type { AchievementKey } from '@/types'

/**
 * Goals + achievements page island (FR-25/32, design C.16 step 5). Renders the
 * goal CRUD + progress bars and the 9-achievement trophy room.
 */
export function GoalsAndAchievements() {
  const { uid } = useAuth()
  const plan = useWorkoutStore((s) => s.plan)
  const achievements = useGoalStore((s) => s.achievements)
  const setAchievements = useGoalStore((s) => s.setAchievements)
  const addAchievements = useGoalStore((s) => s.addAchievements)

  const [metricValues, setMetricValues] = useState<Record<AchievementMetric, number>>({
    workouts: 0,
    streakDays: 0,
    prCount: 0,
    totalVolumeKg: 0,
  })

  const [activeTab, setActiveTab] = useState<'all' | 'unlocked' | 'locked'>('all')

  useEffect(() => {
    if (!uid) return
    let active = true

    async function load() {
      const [existing, sessionsRes, prsRes] = await Promise.all([
        goalService.listAchievements(uid as string),
        sessionService.listRecentSessions(uid as string),
        progressService.listPersonalRecords(uid as string),
      ])
      if (!active) return
      const unlockedKeys = existing.ok
        ? existing.data.map((a) => a.key)
        : []
      if (existing.ok) setAchievements(existing.data)

      const sessions = sessionsRes.ok ? sessionsRes.data : []
      const prs = prsRes.ok ? prsRes.data : []
      const metrics = {
        workouts: sessions.filter((s) => s.status === 'COMPLETED').length,
        streakDays: computeStreak(sessions, plan ?? undefined, new Date()),
        prCount: prs.length,
        totalVolumeKg: sessions.reduce((acc, s) => acc + s.totalVolumeKg, 0),
      }
      setMetricValues(metrics)

      const res = await goalService.evaluateAndUnlock(
        uid as string,
        metrics,
        unlockedKeys,
      )
      if (active && res.ok && res.data.length > 0) {
        addAchievements(
          res.data.map((key) => ({
            id: key,
            uid: uid as string,
            key,
            unlockedAt: new Date(),
          })),
        )
      }
    }

    void load()
    return () => {
      active = false
    }
  }, [uid, plan, setAchievements, addAchievements])

  const unlockedSet = useMemo(
    () => new Set<AchievementKey>(achievements.map((a) => a.key)),
    [achievements],
  )

  const unlockedCount = unlockedSet.size
  const totalAchievements = ACHIEVEMENTS.length
  const unlockPercentage = Math.round((unlockedCount / totalAchievements) * 100)

  const filteredAchievements = useMemo(() => {
    return ACHIEVEMENTS.filter((def) => {
      const isUnlocked = unlockedSet.has(def.key)
      if (activeTab === 'unlocked') return isUnlocked
      if (activeTab === 'locked') return !isUnlocked
      return true
    })
  }, [unlockedSet, activeTab])

  return (
    <div className="flex flex-col gap-8">
      {/* Trophy Room Banner */}
      <header className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/20 text-primary shadow-[0_0_20px_rgba(255,107,53,0.3)]">
              <Trophy className="size-6 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Trophy Hall
              </span>
              <h1 className="text-xl font-black tracking-tight text-foreground sm:text-2xl">
                Goals &amp; Badges
              </h1>
            </div>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-primary/15 px-3 py-1 text-xs font-black text-primary border border-primary/30">
            <Sparkles className="size-3.5" />
            {unlockPercentage}% Unlocked
          </span>
        </div>

        {/* Progress Bar */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-xs font-semibold text-muted-foreground">
            <span>{unlockedCount} of {totalAchievements} Badges Unlocked</span>
            <span>{unlockedCount}/{totalAchievements}</span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary shadow-[0_0_12px_rgba(255,107,53,0.5)] transition-all duration-500"
              style={{ width: `${unlockPercentage}%` }}
            />
          </div>
        </div>

        {/* Live Milestone Metric Counters */}
        <div className="grid grid-cols-2 gap-2 pt-2 sm:grid-cols-4">
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2.5">
            <CheckCircle2 className="size-4 text-primary" />
            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold text-foreground">{metricValues.workouts}</span>
              <span className="text-[10px] text-muted-foreground uppercase">Workouts</span>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2.5">
            <Flame className="size-4 text-warning" />
            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold text-foreground">{metricValues.streakDays}d</span>
              <span className="text-[10px] text-muted-foreground uppercase">Streak</span>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2.5">
            <Award className="size-4 text-accent" />
            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold text-foreground">{metricValues.prCount}</span>
              <span className="text-[10px] text-muted-foreground uppercase">PRs</span>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2.5">
            <Dumbbell className="size-4 text-primary" />
            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold text-foreground">
                {metricValues.totalVolumeKg >= 1000 ? `${Math.round(metricValues.totalVolumeKg / 1000)}k` : metricValues.totalVolumeKg}kg
              </span>
              <span className="text-[10px] text-muted-foreground uppercase">Volume</span>
            </div>
          </div>
        </div>
      </header>

      {/* Target Goals Section */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Target className="size-4 text-primary" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Active Targets &amp; Goals
          </h2>
        </div>
        <GoalProgress />
      </section>

      {/* Achievement Badges Section */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="size-4 text-primary" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Milestone Badges
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-1 rounded-xl border border-border bg-card p-1">
            {(['all', 'unlocked', 'locked'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  triggerHaptic('light')
                  setActiveTab(tab)
                }}
                className={cn(
                  'rounded-lg px-2.5 py-1 text-xs font-semibold capitalize transition-all',
                  activeTab === tab
                    ? 'bg-primary text-primary-foreground font-bold'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {filteredAchievements.map((def) => (
            <AchievementCard
              key={def.key}
              def={def}
              unlocked={unlockedSet.has(def.key)}
              currentMetricValue={metricValues[def.metric]}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
