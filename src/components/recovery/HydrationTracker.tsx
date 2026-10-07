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
import { triggerHaptic } from '@/hooks/useHaptics'
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
    <section className="flex flex-col gap-4 rounded-3xl border border-border/80 bg-card p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.25)]">
            <Droplet className="size-5 fill-current" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">Recovery Factor</span>
            <h2 className="text-base font-extrabold text-foreground sm:text-lg">Daily Hydration</h2>
          </div>
        </div>
        <span className="font-mono text-sm font-black tabular-nums text-sky-400">
          {currentMl} <span className="text-xs font-semibold text-muted-foreground">/ {targetMl} ml</span>
        </span>
      </div>

      <div
        role="progressbar"
        aria-valuenow={Math.round(progress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-3 w-full overflow-hidden rounded-full bg-secondary p-0.5"
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 shadow-[0_0_12px_rgba(56,189,248,0.5)] transition-all duration-500"
          style={{ width: `${Math.min(100, progress * 100)}%` }}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {HYDRATION_QUICK_ADDS_ML.map((ml) => (
          <Button
            key={ml}
            variant="outline"
            size="sm"
            onClick={() => {
              triggerHaptic('light')
              onQuickAdd(ml)
            }}
            className="min-h-[44px] flex-1 rounded-2xl border-sky-500/20 bg-sky-500/10 font-bold text-sky-400 hover:bg-sky-500/20 active:scale-95"
          >
            +{ml} ml
          </Button>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-border/60 pt-3">
        <label htmlFor="hydrationTarget" className="text-xs font-semibold text-muted-foreground">
          Daily Target Goal:
        </label>
        <div className="flex items-center gap-1.5">
          <input
            id="hydrationTarget"
            type="number"
            min={500}
            max={10000}
            step={250}
            value={targetMl}
            onChange={(e) => {
              const next = Math.max(0, Number(e.target.value))
              setTargetMl(next)
              void persist(currentMl, next)
            }}
            className="h-9 w-24 rounded-xl border border-input bg-card px-2.5 text-center font-mono text-xs font-bold text-foreground focus:border-primary focus:outline-none"
          />
          <span className="text-xs font-bold text-muted-foreground">ml</span>
        </div>
      </div>
    </section>
  )
}
