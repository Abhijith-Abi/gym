'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useRecoveryStore } from '@/store/recoveryStore'
import * as recoveryService from '@/services/recoveryService'
import {
  buildRecoveryLog,
  computeRecoveryScore,
  recoveryBand,
  recoveryInsight,
  type RecoveryInputs,
} from '@/lib/recovery'
import { triggerHaptic } from '@/hooks/useHaptics'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

/**
 * Recovery log + fatigue insight + manual deload (FR-24, design C.16 step 4).
 * Logs upsert idempotently at recoveryLogs/{yyyy-MM-dd}. recoveryScore is
 * computed live (pure lib) and framed strictly as a TRAINING insight, never
 * medical advice. The manual-deload toggle feeds the progression engine.
 */

const BAND_CLASS = {
  low: 'text-amber-400',
  moderate: 'text-sky-400',
  high: 'text-primary',
} as const

const SCALES: Array<{ key: keyof RecoveryInputs; label: string }> = [
  { key: 'energy', label: 'Energy' },
  { key: 'stress', label: 'Stress' },
  { key: 'soreness', label: 'Soreness' },
  { key: 'motivation', label: 'Motivation' },
]

function todayKey(now: Date = new Date()): string {
  const y = now.getFullYear()
  const m = String(now.getMonth() + 1).padStart(2, '0')
  const d = String(now.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function RecoveryCard() {
  const { uid } = useAuth()
  const today = useRecoveryStore((s) => s.today)
  const setToday = useRecoveryStore((s) => s.setToday)
  const upsertLocal = useRecoveryStore((s) => s.upsert)
  const manualDeload = useRecoveryStore((s) => s.manualDeload)
  const setManualDeload = useRecoveryStore((s) => s.setManualDeload)

  const [inputs, setInputs] = useState<RecoveryInputs>({
    sleepHours: 8,
    energy: 3,
    stress: 3,
    soreness: 3,
    motivation: 3,
  })
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (!uid) return
    let active = true
    void recoveryService.getRecoveryLog(uid, todayKey()).then((r) => {
      if (!active || !r.ok || !r.data) return
      setToday(r.data)
      setInputs({
        sleepHours: r.data.sleepHours,
        energy: r.data.energy,
        stress: r.data.stress,
        soreness: r.data.soreness,
        motivation: r.data.motivation,
      })
    })
    return () => {
      active = false
    }
  }, [uid, setToday])

  const score = computeRecoveryScore(inputs)
  const band = recoveryBand(score)

  async function onSave() {
    if (!uid) return
    const log = buildRecoveryLog({
      uid,
      date: todayKey(),
      inputs,
      hydrationMl: today?.hydrationMl ?? 0,
      hydrationTargetMl: today?.hydrationTargetMl ?? 3000,
    })
    upsertLocal(log)
    setSaved(true)
    await recoveryService.upsertRecoveryLog(log)
  }

  return (
    <section className="flex flex-col gap-4 rounded-3xl border border-border/80 bg-card p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Fatigue & Readiness Index
          </span>
          <h2 className="text-base font-extrabold text-foreground sm:text-lg">Recovery Score</h2>
        </div>
        <div className="flex items-baseline gap-1 rounded-2xl border border-border bg-card-elevated px-3 py-1">
          <span className={`font-mono text-2xl font-black tabular-nums ${BAND_CLASS[band]}`}>
            {score}
          </span>
          <span className="text-[10px] font-bold uppercase text-muted-foreground">/ 100</span>
        </div>
      </div>
      
      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-3 text-xs leading-relaxed text-muted-foreground">
        💡 {recoveryInsight(score)}
      </div>

      <div className="flex flex-col gap-3.5 border-t border-border/60 pt-3">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs font-bold">
            <Label htmlFor="sleep" className="text-foreground">Sleep Duration</Label>
            <span className="font-mono text-primary font-black">{inputs.sleepHours} hrs</span>
          </div>
          <input
            id="sleep"
            type="range"
            min={0}
            max={12}
            step={0.5}
            value={inputs.sleepHours ?? 0}
            onChange={(e) =>
              setInputs((p) => ({ ...p, sleepHours: Number(e.target.value) }))
            }
            className="h-2 w-full cursor-pointer accent-primary rounded-lg bg-secondary"
          />
        </div>

        {SCALES.map(({ key, label }) => (
          <div key={key} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs font-bold">
              <Label htmlFor={key} className="text-foreground">{label}</Label>
              <span className="font-mono text-accent font-black">{inputs[key]} / 5</span>
            </div>
            <input
              id={key}
              type="range"
              min={1}
              max={5}
              step={1}
              value={inputs[key] as number}
              onChange={(e) =>
                setInputs((p) => ({ ...p, [key]: Number(e.target.value) }))
              }
              className="h-2 w-full cursor-pointer accent-accent rounded-lg bg-secondary"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-card-elevated p-3">
        <label htmlFor="deloadToggle" className="text-xs font-semibold text-muted-foreground flex-1 pr-2">
          Trigger Manual Deload Mode (Lighter Sessions)
        </label>
        <input
          id="deloadToggle"
          type="checkbox"
          checked={manualDeload}
          onChange={(e) => setManualDeload(e.target.checked)}
          className="size-5 accent-primary rounded cursor-pointer"
        />
      </div>

      <Button
        onClick={() => {
          triggerHaptic('success')
          void onSave()
        }}
        className="min-h-[48px] w-full rounded-2xl font-bold bg-primary text-primary-foreground shadow-[0_0_20px_rgba(34,197,94,0.35)] active:scale-95"
      >
        {saved ? '✓ Recovery Log Saved' : 'Save Recovery Log'}
      </Button>
    </section>
  )
}
