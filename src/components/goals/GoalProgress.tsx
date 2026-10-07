'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Trash2 } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { useGoalStore } from '@/store/goalStore'
import * as goalService from '@/services/goalService'
import { goalProgress, isGoalAchieved } from '@/lib/goals'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { EmptyState } from '@/components/ui/empty-state'
import type { GoalKind, GoalRecord } from '@/types'

/**
 * Goals with progress bars (FR-25, design C.16 step 5). strength / bodyweight /
 * custom goals; progress is direction-aware (pure lib). Create/update/delete
 * through goalService (single-doc idempotent writes). Empty env short-circuits.
 */

const formSchema = z.object({
  title: z.string().min(1).max(120),
  kind: z.enum(['strength', 'bodyweight', 'custom']),
  startValue: z.coerce.number(),
  currentValue: z.coerce.number(),
  targetValue: z.coerce.number(),
  unit: z.string().max(10),
})
type FormValues = z.infer<typeof formSchema>

export function GoalProgress() {
  const { uid } = useAuth()
  const goals = useGoalStore((s) => s.goals)
  const setGoals = useGoalStore((s) => s.setGoals)
  const upsertLocal = useGoalStore((s) => s.upsertGoal)
  const removeLocal = useGoalStore((s) => s.removeGoal)

  const { register, handleSubmit, reset, formState } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { kind: 'strength', unit: 'kg' },
  })

  useEffect(() => {
    if (!uid) return
    let active = true
    void goalService.listGoals(uid).then((r) => {
      if (active && r.ok) setGoals(r.data)
    })
    return () => {
      active = false
    }
  }, [uid, setGoals])

  async function onSubmit(values: FormValues) {
    if (!uid) return
    const achieved = isGoalAchieved(values)
    const goal: GoalRecord = {
      id: `goal_${crypto.randomUUID()}`,
      uid,
      kind: values.kind as GoalKind,
      title: values.title,
      targetValue: values.targetValue,
      currentValue: values.currentValue,
      unit: values.unit,
      startValue: values.startValue,
      status: achieved ? 'achieved' : 'active',
      createdAt: new Date(),
    }
    upsertLocal(goal)
    reset({ kind: 'strength', unit: 'kg' })
    await goalService.upsertGoal(goal)
  }

  async function onDelete(id: string) {
    if (!uid) return
    removeLocal(id)
    await goalService.deleteGoal(uid, id)
  }

  return (
    <div className="flex flex-col gap-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-3 rounded-xl border border-border bg-card p-4"
      >
        <div className="col-span-2 flex flex-col gap-1">
          <Label htmlFor="title">Goal</Label>
          <Input id="title" placeholder="Squat 140kg" {...register('title')} />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="kind">Type</Label>
          <select
            id="kind"
            {...register('kind')}
            className="h-11 rounded-md border border-input bg-transparent px-2"
          >
            <option value="strength">Strength</option>
            <option value="bodyweight">Body weight</option>
            <option value="custom">Custom</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="unit">Unit</Label>
          <Input id="unit" {...register('unit')} />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="startValue">Start</Label>
          <Input id="startValue" type="number" step="0.1" {...register('startValue')} />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="currentValue">Current</Label>
          <Input id="currentValue" type="number" step="0.1" {...register('currentValue')} />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="targetValue">Target</Label>
          <Input id="targetValue" type="number" step="0.1" {...register('targetValue')} />
        </div>
        <Button
          type="submit"
          disabled={formState.isSubmitting}
          className="col-span-2"
        >
          Add goal
        </Button>
      </form>

      {goals.length === 0 ? (
        <EmptyState title="No goals yet" description="Set one to track progress." />
      ) : (
        <ul className="flex flex-col gap-3">
          {goals.map((g) => {
            const pct = Math.round(goalProgress(g) * 100)
            return (
              <li
                key={g.id}
                className="rounded-xl border border-border bg-card p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium">{g.title}</p>
                  <button
                    type="button"
                    aria-label="Delete goal"
                    onClick={() => void onDelete(g.id)}
                    className="rounded-md p-1 text-muted-foreground hover:bg-accent"
                  >
                    <Trash2 className="size-4" aria-hidden="true" />
                  </button>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted"
                >
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {g.currentValue} / {g.targetValue} {g.unit} · {pct}%
                  {g.status === 'achieved' ? ' · 🏆 achieved' : ''}
                </p>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
