'use client'

import { useMemo, useState } from 'react'
import { Search, Plus, Dumbbell, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useExerciseStore } from '@/store/exerciseStore'
import { triggerHaptic } from '@/hooks/useHaptics'
import type { Exercise, MuscleGroup } from '@/types'
import { ExerciseDetails } from './ExerciseDetails'
import { CustomExerciseForm } from './CustomExerciseForm'

const MUSCLE_FILTERS = [
  { value: 'all', label: 'All Muscles' },
  { value: 'chest', label: 'Chest' },
  { value: 'back', label: 'Back' },
  { value: 'quads', label: 'Legs / Quads' },
  { value: 'hamstrings', label: 'Hamstrings' },
  { value: 'shoulders', label: 'Shoulders' },
  { value: 'biceps', label: 'Biceps' },
  { value: 'triceps', label: 'Triceps' },
  { value: 'abs', label: 'Core / Abs' },
  { value: 'cardio', label: 'Cardio' },
]

const EQUIPMENT_FILTERS = [
  { value: 'all', label: 'All Equipment' },
  { value: 'barbell', label: 'Barbell' },
  { value: 'dumbbell', label: 'Dumbbell' },
  { value: 'cable', label: 'Cable' },
  { value: 'machine', label: 'Machine' },
  { value: 'bodyweight', label: 'Bodyweight' },
]

/**
 * Exercise Library (FR-20): search, muscle filter, equipment filter,
 * details, substitutions, and custom exercises.
 */
export function ExerciseLibrary() {
  const all = useExerciseStore((s) => s.all)
  const custom = useExerciseStore((s) => s.custom)
  const addCustom = useExerciseStore((s) => s.addCustom)

  const [query, setQuery] = useState('')
  const [muscleFilter, setMuscleFilter] = useState('all')
  const [equipmentFilter, setEquipmentFilter] = useState('all')
  const [selected, setSelected] = useState<Exercise | null>(null)
  const [adding, setAdding] = useState(false)

  const list = useMemo(() => {
    void custom
    const q = query.trim().toLowerCase()
    return all().filter((e) => {
      const matchesQuery =
        q === '' ||
        e.name.toLowerCase().includes(q) ||
        e.primaryMuscles.some((m) => m.toLowerCase().includes(q)) ||
        e.secondaryMuscles?.some((m) => m.toLowerCase().includes(q))

      const matchesMuscle =
        muscleFilter === 'all' ||
        e.primaryMuscles.includes(muscleFilter as MuscleGroup) ||
        (muscleFilter === 'quads' &&
          (e.primaryMuscles.includes('glutes') ||
            e.primaryMuscles.includes('calves'))) ||
        (muscleFilter === 'cardio' && e.category === 'cardio')

      const matchesEquipment =
        equipmentFilter === 'all' || e.equipment === equipmentFilter

      return matchesQuery && matchesMuscle && matchesEquipment
    })
  }, [all, custom, query, muscleFilter, equipmentFilter])

  if (selected) {
    return (
      <ExerciseDetails
        exercise={selected}
        onBack={() => setSelected(null)}
        onSelect={(e) => setSelected(e)}
      />
    )
  }

  if (adding) {
    return (
      <CustomExerciseForm
        onCancel={() => setAdding(false)}
        onCreate={(exercise) => {
          addCustom(exercise)
          setAdding(false)
          setSelected(exercise)
        }}
      />
    )
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Movement Catalog
          </span>
          <h1 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            Exercise Library
          </h1>
        </div>
        <Button
          size="sm"
          onClick={() => {
            triggerHaptic('light')
            setAdding(true)
          }}
          className="rounded-xl bg-primary font-bold text-primary-foreground shadow-[0_0_15px_rgba(34,197,94,0.3)]"
        >
          <Plus className="size-4" />
          Add Custom
        </Button>
      </div>

      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <Input
          type="search"
          placeholder="Search exercises, chest, squats..."
          aria-label="Search exercises"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-12 rounded-2xl border-border bg-card pl-10 text-foreground"
        />
      </div>

      {/* Muscle Group Chips */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          Target Muscle
        </span>
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by target muscle">
          {MUSCLE_FILTERS.map((m) => (
            <button
              key={m.value}
              type="button"
              aria-pressed={muscleFilter === m.value}
              onClick={() => {
                triggerHaptic('light')
                setMuscleFilter(m.value)
              }}
              className={cn(
                'min-h-[36px] rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all active:scale-95',
                muscleFilter === m.value
                  ? 'bg-primary text-primary-foreground shadow-[0_0_12px_rgba(34,197,94,0.3)]'
                  : 'border border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground',
              )}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Equipment Chips */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          Equipment Type
        </span>
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by equipment">
          {EQUIPMENT_FILTERS.map((eq) => (
            <button
              key={eq.value}
              type="button"
              aria-pressed={equipmentFilter === eq.value}
              onClick={() => {
                triggerHaptic('light')
                setEquipmentFilter(eq.value)
              }}
              className={cn(
                'min-h-[32px] rounded-lg px-3 py-1 text-xs font-medium transition-all active:scale-95',
                equipmentFilter === eq.value
                  ? 'bg-secondary text-foreground font-bold border border-primary/40'
                  : 'border border-border/60 bg-card text-muted-foreground hover:bg-secondary/60',
              )}
            >
              {eq.label}
            </button>
          ))}
        </div>
      </div>

      {list.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-10 text-center">
          <Dumbbell className="size-10 text-muted-foreground/50" />
          <p className="mt-3 text-sm font-semibold text-foreground">
            No exercises match your filters
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Try resetting your muscle or equipment filters.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold text-muted-foreground">
            Showing {list.length} movements
          </span>
          <ul className="flex flex-col gap-2.5">
            {list.map((e) => (
              <li key={e.id}>
                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic('light')
                    setSelected(e)
                  }}
                  className="flex w-full flex-col items-start gap-1.5 rounded-2xl border border-border/80 bg-card p-4 text-left transition-all hover:border-border hover:bg-card-elevated active:scale-[0.99]"
                >
                  <div className="flex w-full items-center justify-between">
                    <span className="font-bold text-foreground sm:text-base">
                      {e.name}
                    </span>
                    {e.isCustom && (
                      <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-bold text-accent">
                        Custom
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                    <Target className="size-3.5 text-primary" />
                    <span className="font-semibold text-primary capitalize">
                      {e.primaryMuscles.join(', ')}
                    </span>
                    <span>·</span>
                    <span className="capitalize">{e.equipment}</span>
                    <span>·</span>
                    <span className="capitalize">{e.category}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
