'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Trash2, Plus, Target, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { useGoalStore } from '@/store/goalStore'
import * as goalService from '@/services/goalService'
import { goalProgress, isGoalAchieved } from '@/lib/goals'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { EmptyState } from '@/components/ui/empty-state'
import { triggerHaptic } from '@/hooks/useHaptics'
import { cn } from '@/lib/utils'
import type { GoalKind, GoalRecord } from '@/types'

const formSchema = z.object({
  title: z.string().min(1).max(120),
  kind: z.enum(['strength', 'bodyweight', 'custom']),
  startValue: z.coerce.number(),
  currentValue: z.coerce.number(),
  targetValue: z.coerce.number(),
  unit: z.string().max(10),
})
type FormValues = z.infer<typeof formSchema>

const QUICK_PRESETS = [
  { title: 'Bench Press 100kg', kind: 'strength', start: 60, current: 80, target: 100, unit: 'kg' },
  { title: 'Squat 140kg', kind: 'strength', start: 80, current: 100, target: 140, unit: 'kg' },
  { title: 'Deadlift 180kg', kind: 'strength', start: 100, current: 140, target: 180, unit: 'kg' },
  { title: 'Target Bodyweight 75kg', kind: 'bodyweight', start: 82, current: 79, target: 75, unit: 'kg' },
] as const

export function GoalProgress() {
  const { uid } = useAuth()
  const goals = useGoalStore((s) => s.goals)
  const setGoals = useGoalStore((s) => s.setGoals)
  const upsertLocal = useGoalStore((s) => s.upsertGoal)
  const removeLocal = useGoalStore((s) => s.removeGoal)
  const [showForm, setShowForm] = useState(false)

  const { register, handleSubmit, reset, setValue, formState } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { kind: 'strength', unit: 'kg', startValue: 60, currentValue: 70, targetValue: 100 },
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
    triggerHaptic('success')
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
    setShowForm(false)
    await goalService.upsertGoal(goal)
  }

  async function onDelete(id: string) {
    if (!uid) return
    triggerHaptic('warning')
    removeLocal(id)
    await goalService.deleteGoal(uid, id)
  }

  const handleApplyPreset = (p: (typeof QUICK_PRESETS)[number]) => {
    triggerHaptic('light')
    setShowForm(true)
    setValue('title', p.title)
    setValue('kind', p.kind as GoalKind)
    setValue('startValue', p.start)
    setValue('currentValue', p.current)
    setValue('targetValue', p.target)
    setValue('unit', p.unit)
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Quick Presets row */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          Quick Goal Presets
        </span>
        <div className="flex flex-wrap gap-1.5">
          {QUICK_PRESETS.map((p) => (
            <button
              key={p.title}
              type="button"
              onClick={() => handleApplyPreset(p)}
              className="flex items-center gap-1 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-all hover:border-primary/40 hover:bg-secondary hover:text-foreground active:scale-95"
            >
              <Plus className="size-3 text-primary" />
              {p.title}
            </button>
          ))}
        </div>
      </div>

      {/* Toggle Form Button */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => {
            triggerHaptic('light')
            setShowForm(!showForm)
          }}
          className="flex items-center gap-1.5 rounded-xl border border-primary/30 bg-primary/10 px-3.5 py-2 text-xs font-bold text-primary transition-all hover:bg-primary/20 active:scale-95"
        >
          <Plus className="size-3.5" />
          <span>{showForm ? 'Hide Form' : 'Add Custom Target'}</span>
          {showForm ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
        </button>
      </div>

      {/* Form Drawer */}
      {showForm && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-3 rounded-2xl border border-border/80 bg-card p-4 shadow-sm"
        >
          <div className="col-span-2 flex flex-col gap-1">
            <Label htmlFor="title" className="text-xs font-bold">Goal Name</Label>
            <Input id="title" placeholder="e.g. Squat 140kg" {...register('title')} className="rounded-xl" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="kind" className="text-xs font-bold">Category</Label>
            <select
              id="kind"
              {...register('kind')}
              className="h-10 rounded-xl border border-input bg-card px-2 text-xs font-semibold text-foreground focus:outline-none"
            >
              <option value="strength">Strength</option>
              <option value="bodyweight">Body Weight</option>
              <option value="custom">Custom</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="unit" className="text-xs font-bold">Unit</Label>
            <Input id="unit" placeholder="kg" {...register('unit')} className="rounded-xl" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="startValue" className="text-xs font-bold">Start Value</Label>
            <Input id="startValue" type="number" step="0.1" {...register('startValue')} className="rounded-xl" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="currentValue" className="text-xs font-bold">Current Value</Label>
            <Input id="currentValue" type="number" step="0.1" {...register('currentValue')} className="rounded-xl" />
          </div>
          <div className="col-span-2 flex flex-col gap-1">
            <Label htmlFor="targetValue" className="text-xs font-bold">Target Value</Label>
            <Input id="targetValue" type="number" step="0.1" {...register('targetValue')} className="rounded-xl" />
          </div>
          <Button
            type="submit"
            disabled={formState.isSubmitting}
            className="col-span-2 min-h-[44px] rounded-xl font-bold bg-primary text-primary-foreground shadow-[0_0_15px_rgba(255,107,53,0.3)]"
          >
            Save Target Goal
          </Button>
        </form>
      )}

      {/* Goal Cards List */}
      {goals.length === 0 ? (
        <EmptyState
          title="No goals set yet"
          description="Pick a preset above or set a custom strength/bodyweight target to track your progress."
        />
      ) : (
        <ul className="flex flex-col gap-3">
          {goals.map((g) => {
            const pct = Math.min(100, Math.max(0, Math.round(goalProgress(g) * 100)))
            const isAchieved = g.status === 'achieved' || pct >= 100

            return (
              <li
                key={g.id}
                className={cn(
                  'flex flex-col gap-3 rounded-2xl border p-4 transition-all',
                  isAchieved
                    ? 'border-primary/50 bg-primary/10 shadow-[0_0_15px_rgba(255,107,53,0.15)]'
                    : 'border-white/10 bg-white/5 hover:border-white/20',
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      'flex size-8 items-center justify-center rounded-lg',
                      isAchieved ? 'bg-primary text-primary-foreground' : 'bg-secondary text-primary'
                    )}>
                      {isAchieved ? <CheckCircle2 className="size-4" /> : <Target className="size-4" />}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-foreground">{g.title}</span>
                      <span className="text-[10px] uppercase font-semibold text-muted-foreground">{g.kind} Target</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {isAchieved && (
                      <span className="flex items-center gap-1 rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary">
                        <Sparkles className="size-3" />
                        Achieved
                      </span>
                    )}
                    <button
                      type="button"
                      aria-label="Delete goal"
                      onClick={() => void onDelete(g.id)}
                      className="flex size-7 items-center justify-center rounded-lg text-muted-foreground/60 transition-colors hover:bg-destructive/20 hover:text-destructive"
                    >
                      <Trash2 className="size-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-muted-foreground font-mono">
                      {g.currentValue} / {g.targetValue} {g.unit}
                    </span>
                    <span className={isAchieved ? 'text-primary' : 'text-foreground'}>
                      {pct}%
                    </span>
                  </div>
                  <div
                    role="progressbar"
                    aria-valuenow={pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="h-2.5 w-full overflow-hidden rounded-full bg-secondary"
                  >
                    <div
                      className={cn(
                        'h-full rounded-full transition-all duration-500',
                        isAchieved ? 'bg-primary shadow-[0_0_10px_rgba(255,107,53,0.6)]' : 'bg-primary',
                      )}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
