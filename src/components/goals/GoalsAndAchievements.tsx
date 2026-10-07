'use client'

import { useEffect, useMemo } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useGoalStore } from '@/store/goalStore'
import * as goalService from '@/services/goalService'
import * as sessionService from '@/services/sessionService'
import * as progressService from '@/services/progressService'
import { ACHIEVEMENTS } from '@/data/achievements'
import { computeStreak } from '@/lib/analytics/consistency'
import { useWorkoutStore } from '@/store/workoutStore'
import { GoalProgress } from './GoalProgress'
import { AchievementCard } from '@/components/achievements/AchievementCard'
import type { AchievementKey } from '@/types'

/**
 * Goals + achievements page island (FR-25/32, design C.16 step 5). Renders the
 * goal CRUD + progress bars and the 9-achievement grid. Metrics (workouts /
 * streak / PRs / total volume) are derived from completed sessions + PR docs
 * and evaluated against the already-unlocked keys; newly-qualifying keys are
 * persisted idempotently (key-keyed) and animate in. Empty env → everything
 * renders locked, nothing throws.
 */
export function GoalsAndAchievements() {
  const { uid } = useAuth()
  const plan = useWorkoutStore((s) => s.plan)
  const achievements = useGoalStore((s) => s.achievements)
  const setAchievements = useGoalStore((s) => s.setAchievements)
  const addAchievements = useGoalStore((s) => s.addAchievements)

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

  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Goals</h1>
        <GoalProgress />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Achievements</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {ACHIEVEMENTS.map((def) => (
            <AchievementCard
              key={def.key}
              def={def}
              unlocked={unlockedSet.has(def.key)}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
