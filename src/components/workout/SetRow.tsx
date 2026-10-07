'use client'

import { Check, Trash2, Plus, Minus, Flame } from 'lucide-react'
import { cn } from '@/lib/utils'
import { fromDisplay, toDisplay } from '@/lib/units'
import { PRBadge } from '@/components/pr/PRBadge'
import { triggerHaptic } from '@/hooks/useHaptics'
import { useWorkoutSounds } from '@/hooks/useWorkoutSounds'
import type { ActiveSet } from '@/store/sessionStore'
import type { RpeMode, Unit } from '@/types'

/**
 * Mobile-First Set Row with large touch steppers for Weight & Reps.
 * Includes quick +/- buttons, RPE selector, and a prominent Complete button.
 */
export function SetRow({
  set,
  unit,
  rpeMode,
  isDuration,
  onChange,
  onComplete,
  onRemove,
}: {
  set: ActiveSet
  unit: Unit
  rpeMode: RpeMode
  isDuration: boolean
  onChange: (patch: Partial<ActiveSet>) => void
  onComplete: () => void
  onRemove: () => void
}) {
  const { playSound } = useWorkoutSounds()
  const showRpe = rpeMode === 'RPE' || rpeMode === 'Both'
  const showRir = rpeMode === 'RIR' || rpeMode === 'Both'

  const currentDisplayWeight = toDisplay(set.weightKg, unit)
  const currentReps = set.actualReps ?? 0
  const stepWeight = unit === 'kg' ? 2.5 : 5

  const handleAdjustWeight = (delta: number) => {
    triggerHaptic('light')
    playSound('button-click')
    const nextVal = Math.max(0, currentDisplayWeight + delta)
    onChange({ weightKg: fromDisplay(nextVal, unit) })
  }

  const handleAdjustReps = (delta: number) => {
    triggerHaptic('light')
    playSound('button-click')
    const nextReps = Math.max(0, currentReps + delta)
    onChange({ actualReps: nextReps })
  }

  const handleComplete = () => {
    triggerHaptic('success')
    playSound('set-complete')
    onComplete()
  }

  return (
    <div
      className={cn(
        'flex flex-col gap-2 rounded-2xl border p-3.5 transition-all',
        set.isCompleted
          ? 'border-primary/50 bg-primary/10 shadow-[0_0_15px_-3px_rgba(34,197,94,0.15)]'
          : 'border-border bg-card hover:border-border/80',
      )}
    >
      {/* Top bar: Set number, Warmup badge, PR Badges, Remove */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              'flex size-6 items-center justify-center rounded-full text-xs font-bold',
              set.isCompleted
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-muted-foreground',
            )}
          >
            {set.setIndex + 1}
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {set.isWarmup ? 'Warmup Set' : `Set ${set.setIndex + 1}`}
          </span>
        </div>

        <div className="flex items-center gap-1">
          {set.isPr?.weight && <PRBadge type="weight" />}
          {set.isPr?.reps && <PRBadge type="reps" />}
          {set.isPr?.e1rm && <PRBadge type="e1rm" />}

          <button
            type="button"
            onClick={() => {
              triggerHaptic('light')
              onChange({ isWarmup: !set.isWarmup })
            }}
            className={cn(
              'flex h-7 items-center gap-1 rounded-md px-2 text-[10px] font-bold uppercase transition-colors',
              set.isWarmup
                ? 'bg-warning/20 text-warning'
                : 'text-muted-foreground/60 hover:text-muted-foreground',
            )}
            title="Toggle Warmup Set"
          >
            <Flame className="size-3" />
            Warmup
          </button>

          <button
            type="button"
            onClick={() => {
              triggerHaptic('warning')
              onRemove()
            }}
            aria-label={`Remove set ${set.setIndex + 1}`}
            className="flex size-7 items-center justify-center rounded-md text-muted-foreground/60 transition-colors hover:bg-destructive/20 hover:text-destructive"
          >
            <Trash2 className="size-3.5" />
          </button>
        </div>
      </div>

      {/* Main input controls */}
      <div className="grid grid-cols-2 gap-3 pt-1">
        {/* Weight Control with Steppers */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor={`weight-input-${set.id}`}
            className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
          >
            Weight ({unit})
          </label>
          <div className="flex items-center rounded-xl border border-input bg-card-elevated p-1">
            <button
              type="button"
              tabIndex={-1}
              onClick={() => handleAdjustWeight(-stepWeight)}
              className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary active:scale-95"
            >
              <Minus className="size-4" />
            </button>
            <input
              id={`weight-input-${set.id}`}
              type="number"
              inputMode="decimal"
              aria-label={`Set ${set.setIndex + 1} weight in ${unit}`}
              className="w-full bg-transparent text-center font-mono text-base font-bold text-foreground focus:outline-none"
              value={set.weightKg === 0 ? '' : currentDisplayWeight}
              placeholder="0"
              onChange={(e) =>
                onChange({
                  weightKg:
                    e.target.value === ''
                      ? 0
                      : fromDisplay(Number(e.target.value), unit),
                })
              }
            />
            <button
              type="button"
              tabIndex={-1}
              onClick={() => handleAdjustWeight(stepWeight)}
              className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary active:scale-95"
            >
              <Plus className="size-4" />
            </button>
          </div>
        </div>

        {/* Reps or Duration Control with Steppers */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor={`reps-input-${set.id}`}
            className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
          >
            {isDuration ? 'Seconds' : 'Reps'}
          </label>
          <div className="flex items-center rounded-xl border border-input bg-card-elevated p-1">
            <button
              type="button"
              tabIndex={-1}
              onClick={() =>
                isDuration
                  ? onChange({
                      durationSeconds: Math.max(
                        0,
                        (set.durationSeconds ?? 0) - 5,
                      ),
                    })
                  : handleAdjustReps(-1)
              }
              className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary active:scale-95"
            >
              <Minus className="size-4" />
            </button>
            {isDuration ? (
              <input
                id={`reps-input-${set.id}`}
                type="number"
                inputMode="numeric"
                aria-label={`Set ${set.setIndex + 1} duration in seconds`}
                className="w-full bg-transparent text-center font-mono text-base font-bold text-foreground focus:outline-none"
                value={set.durationSeconds ?? ''}
                placeholder="0"
                onChange={(e) =>
                  onChange({
                    durationSeconds:
                      e.target.value === '' ? undefined : Number(e.target.value),
                  })
                }
              />
            ) : (
              <input
                id={`reps-input-${set.id}`}
                type="number"
                inputMode="numeric"
                aria-label={`Set ${set.setIndex + 1} reps`}
                className="w-full bg-transparent text-center font-mono text-base font-bold text-foreground focus:outline-none"
                value={set.actualReps ?? ''}
                placeholder="0"
                onChange={(e) =>
                  onChange({
                    actualReps:
                      e.target.value === '' ? undefined : Number(e.target.value),
                  })
                }
              />
            )}
            <button
              type="button"
              tabIndex={-1}
              onClick={() =>
                isDuration
                  ? onChange({
                      durationSeconds: (set.durationSeconds ?? 0) + 5,
                    })
                  : handleAdjustReps(1)
              }
              className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary active:scale-95"
            >
              <Plus className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Optional RPE / RIR and Complete Button Bar */}
      <div className="mt-1 flex items-center gap-2 pt-1">
        {showRpe && (
          <div className="flex flex-1 items-center gap-1.5 rounded-xl border border-input bg-card-elevated px-2.5 py-1.5">
            <span className="text-[10px] font-bold uppercase text-muted-foreground">RPE</span>
            <input
              type="number"
              inputMode="decimal"
              aria-label={`Set ${set.setIndex + 1} RPE`}
              className="w-full bg-transparent text-center font-mono text-sm font-semibold text-foreground focus:outline-none"
              placeholder="8"
              value={set.rpe ?? ''}
              onChange={(e) =>
                onChange({ rpe: e.target.value === '' ? undefined : Number(e.target.value) })
              }
            />
          </div>
        )}

        {showRir && (
          <div className="flex flex-1 items-center gap-1.5 rounded-xl border border-input bg-card-elevated px-2.5 py-1.5">
            <span className="text-[10px] font-bold uppercase text-muted-foreground">RIR</span>
            <input
              type="number"
              inputMode="numeric"
              aria-label={`Set ${set.setIndex + 1} RIR`}
              className="w-full bg-transparent text-center font-mono text-sm font-semibold text-foreground focus:outline-none"
              placeholder="2"
              value={set.rir ?? ''}
              onChange={(e) =>
                onChange({ rir: e.target.value === '' ? undefined : Number(e.target.value) })
              }
            />
          </div>
        )}

        {/* Complete Set Button (Touch Target >= 44px) */}
        <button
          type="button"
          onClick={handleComplete}
          aria-label={set.isCompleted ? 'Set logged' : 'Log set'}
          aria-pressed={set.isCompleted}
          className={cn(
            'flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all active:scale-95',
            set.isCompleted
              ? 'bg-primary text-primary-foreground shadow-[0_0_15px_rgba(34,197,94,0.4)]'
              : 'border border-primary/50 bg-primary/10 text-primary hover:bg-primary/20',
          )}
        >
          <Check className={cn('size-4', set.isCompleted ? 'stroke-[3]' : 'stroke-[2]')} />
          <span>{set.isCompleted ? 'Completed' : 'Complete Set'}</span>
        </button>
      </div>
    </div>
  )
}
