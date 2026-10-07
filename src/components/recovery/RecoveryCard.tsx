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
    <section className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Recovery</h2>
        <span className={`text-2xl font-bold tabular-nums ${BAND_CLASS[band]}`}>
          {score}
        </span>
      </div>
      <p className="text-xs text-muted-foreground">{recoveryInsight(score)}</p>

      <div className="flex flex-col gap-1">
        <Label htmlFor="sleep">Sleep (hours)</Label>
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
        />
        <span className="text-xs text-muted-foreground">
          {inputs.sleepHours} h
        </span>
      </div>

      {SCALES.map(({ key, label }) => (
        <div key={key} className="flex flex-col gap-1">
          <Label htmlFor={key}>{label}</Label>
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
          />
          <span className="text-xs text-muted-foreground">
            {inputs[key]} / 5
          </span>
        </div>
      ))}

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={manualDeload}
          onChange={(e) => setManualDeload(e.target.checked)}
        />
        Trigger a manual deload (training insight — lighter session)
      </label>

      <Button onClick={() => void onSave()}>
        {saved ? 'Saved' : 'Save recovery log'}
      </Button>
    </section>
  )
}
