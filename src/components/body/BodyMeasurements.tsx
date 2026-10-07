'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { format } from 'date-fns'
import { Trash2 } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { useBodyStore } from '@/store/bodyStore'
import * as bodyService from '@/services/bodyService'
import { fromDisplay, toDisplay } from '@/lib/units'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { EmptyState } from '@/components/ui/empty-state'
import type { BodyMeasurement, Unit } from '@/types'

/**
 * Body-measurement CRUD (FR-22, design C.16 step 3). RHF + Zod validated entry
 * (weight / body-fat % / waist / chest), stored in kg canonically via
 * fromDisplay; list with delete. Reads/writes through bodyService (single-doc
 * idempotent writes); empty env short-circuits so it never throws.
 */

const formSchema = z.object({
  weight: z.coerce.number().gt(0).max(2000).optional(),
  bodyFatPct: z.coerce.number().min(0).max(100).optional(),
  chest: z.coerce.number().gt(0).max(500).optional(),
  waist: z.coerce.number().gt(0).max(500).optional(),
})
type FormValues = z.infer<typeof formSchema>

export function BodyMeasurements() {
  const { uid, profile } = useAuth()
  const unit: Unit = profile?.preferredUnit ?? 'kg'
  const measurements = useBodyStore((s) => s.measurements)
  const setMeasurements = useBodyStore((s) => s.setMeasurements)
  const upsertLocal = useBodyStore((s) => s.upsertMeasurement)
  const removeLocal = useBodyStore((s) => s.removeMeasurement)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) })

  useEffect(() => {
    if (!uid) return
    let active = true
    void bodyService.listBodyMeasurements(uid).then((r) => {
      if (active && r.ok) setMeasurements(r.data)
    })
    return () => {
      active = false
    }
  }, [uid, setMeasurements])

  async function onSubmit(values: FormValues) {
    if (!uid) return
    setError(null)
    const measurementsMap: Record<string, number> = {}
    if (values.chest !== undefined) measurementsMap.chest = values.chest
    if (values.waist !== undefined) measurementsMap.waist = values.waist

    const entry: BodyMeasurement = {
      id: `bm_${crypto.randomUUID()}`,
      uid,
      date: new Date(),
      ...(values.weight !== undefined
        ? { weightKg: fromDisplay(values.weight, unit) }
        : {}),
      ...(values.bodyFatPct !== undefined
        ? { bodyFatPct: values.bodyFatPct }
        : {}),
      measurements: measurementsMap,
    }
    upsertLocal(entry)
    reset()
    const res = await bodyService.upsertBodyMeasurement(entry)
    if (!res.ok) setError(res.message)
  }

  async function onDelete(id: string) {
    if (!uid) return
    removeLocal(id)
    await bodyService.deleteBodyMeasurement(uid, id)
  }

  return (
    <div className="flex flex-col gap-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-3 rounded-xl border border-border bg-card p-4"
      >
        <div className="flex flex-col gap-1">
          <Label htmlFor="weight">Weight ({unit})</Label>
          <Input id="weight" type="number" step="0.1" {...register('weight')} />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="bodyFatPct">Body fat %</Label>
          <Input id="bodyFatPct" type="number" step="0.1" {...register('bodyFatPct')} />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="chest">Chest (cm)</Label>
          <Input id="chest" type="number" step="0.1" {...register('chest')} />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="waist">Waist (cm)</Label>
          <Input id="waist" type="number" step="0.1" {...register('waist')} />
        </div>
        {error ? (
          <p className="col-span-2 text-sm text-destructive">{error}</p>
        ) : null}
        <Button type="submit" disabled={isSubmitting} className="col-span-2">
          Add measurement
        </Button>
      </form>

      {measurements.length === 0 ? (
        <EmptyState title="No measurements yet" description="Log one above." />
      ) : (
        <ul className="flex flex-col gap-2">
          {measurements.map((m) => (
            <li
              key={m.id}
              className="flex items-center justify-between rounded-xl border border-border bg-card p-3 text-sm"
            >
              <div>
                <p className="font-medium">{format(m.date, 'MMM d, yyyy')}</p>
                <p className="text-xs text-muted-foreground">
                  {m.weightKg !== undefined
                    ? `${toDisplay(m.weightKg, unit)} ${unit}`
                    : '—'}
                  {m.bodyFatPct !== undefined ? ` · ${m.bodyFatPct}% bf` : ''}
                </p>
              </div>
              <button
                type="button"
                aria-label="Delete measurement"
                onClick={() => void onDelete(m.id)}
                className="rounded-md p-2 text-muted-foreground hover:bg-accent"
              >
                <Trash2 className="size-4" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
