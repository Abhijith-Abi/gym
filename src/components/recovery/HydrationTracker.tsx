'use client'

import { useEffect, useState } from 'react'
import { Droplet } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { useRecoveryStore } from '@/store/recoveryStore'
import * as recoveryService from '@/services/recoveryService'
import {
  addHydration,
  HYDRATION_QUICK_ADDS_ML,
  hydrationProgress,
} from '@/lib/recovery'
import { Button } from '@/components/ui/button'

/**
 * Hydration tracker (FR-26, design C.16 step 4). Configurable target with
 * +250/500/750 ml quick-adds, stored on the date-keyed recovery log (idempotent
 * upsert). Progress bar reflects the day's total against the target.
 */

const DEFAULT_TARGET_ML = 3000

function todayKey(now: Date = new Date()): string {
  const y = now.getFullYear()
  const m = String(now.getMonth() + 1).padStart(2, '0')
  const d = String(now.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function HydrationTracker() {
  const { uid } = useAuth()
  const today = useRecoveryStore((s) => s.today)
  const upsertLocal = useRecoveryStore((s) => s.upsert)

  const [currentMl, setCurrentMl] = useState(0)
  const [targetMl, setTargetMl] = useState(DEFAULT_TARGET_ML)

  useEffect(() => {
    if (today) {
      setCurrentMl(today.hydrationMl)
      setTargetMl(today.hydrationTargetMl || DEFAULT_TARGET_ML)
    }
  }, [today])

  async function persist(nextMl: number, nextTarget: number) {
    if (!uid) return
    const base =
      today ??
      ({
        uid,
        date: todayKey(),
        energy: 3,
        stress: 3,
        soreness: 3,
        motivation: 3,
        recoveryScore: 0,
        hydrationMl: 0,
        hydrationTargetMl: nextTarget,
      } as const)
    const log = {
      ...base,
      uid,
      date: todayKey(),
      hydrationMl: nextMl,
      hydrationTargetMl: nextTarget,
    }
    upsertLocal(log)
    await recoveryService.upsertRecoveryLog(log)
  }

  function onQuickAdd(ml: number) {
    const next = addHydration(currentMl, ml)
    setCurrentMl(next)
    void persist(next, targetMl)
  }

  const progress = hydrationProgress(currentMl, targetMl)

  return (
    <section className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <Droplet className="size-5 text-sky-400" aria-hidden="true" />
          Hydration
        </h2>
        <span className="text-sm tabular-nums text-muted-foreground">
          {currentMl} / {targetMl} ml
        </span>
      </div>

      <div
        role="progressbar"
        aria-valuenow={Math.round(progress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-3 w-full overflow-hidden rounded-full bg-muted"
      >
        <div
          className="h-full rounded-full bg-sky-400 transition-all"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <div className="flex gap-2">
        {HYDRATION_QUICK_ADDS_ML.map((ml) => (
          <Button
            key={ml}
            variant="outline"
            size="sm"
            onClick={() => onQuickAdd(ml)}
          >
            +{ml} ml
          </Button>
        ))}
      </div>

      <label className="flex items-center gap-2 text-xs text-muted-foreground">
        Daily target (ml)
        <input
          type="number"
          min={0}
          step={250}
          value={targetMl}
          onChange={(e) => {
            const next = Math.max(0, Number(e.target.value))
            setTargetMl(next)
            void persist(currentMl, next)
          }}
          className="w-24 rounded-md border border-input bg-transparent px-2 py-1"
        />
      </label>
    </section>
  )
}
