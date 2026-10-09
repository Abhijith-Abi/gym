'use client'

import { useMemo, useState } from 'react'
import { Search, Plus, Dumbbell, Target, Sparkles, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useExerciseStore } from '@/store/exerciseStore'
import { triggerHaptic } from '@/hooks/useHaptics'
import type { Exercise, MuscleGroup } from '@/types'
import { ExerciseDetails } from './ExerciseDetails'
import { CustomExerciseForm } from './CustomExerciseForm'
import { ExerciseMedia } from '@/components/media/ExerciseMedia'

const MUSCLE_FILTERS = [
  { value: 'all', label: 'All Muscles' },
  { value: 'chest', label: 'Chest' },
  { value: 'back', label: 'Back' },
  { value: 'quads', label: 'Quads & Legs' },
  { value: 'hamstrings', label: 'Hamstrings' },
  { value: 'glutes', label: 'Glutes' },
  { value: 'shoulders', label: 'Shoulders' },
  { value: 'biceps', label: 'Biceps' },
  { value: 'triceps', label: 'Triceps' },
  { value: 'core', label: 'Abs & Core' },
  { value: 'calves', label: 'Calves' },
  { value: 'forearms', label: 'Forearms' },
  { value: 'fullbody', label: 'Full Body' },
]

const EQUIPMENT_FILTERS = [
  { value: 'all', label: 'All Equipment' },
  { value: 'barbell', label: 'Barbell' },
  { value: 'dumbbell', label: 'Dumbbell' },
  { value: 'cable', label: 'Cable' },
  { value: 'machine', label: 'Machine' },
  { value: 'bodyweight', label: 'Bodyweight' },
  { value: 'kettlebell', label: 'Kettlebell' },
]

/**
 * Ultra-Responsive Glassmorphic Exercise Library (FR-20).
 * Displays 370+ movements with verified 1080p male/female videos,
 * muscle target filtering, equipment filters, and instant responsive grid.
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
        (muscleFilter === 'core' && e.primaryMuscles.includes('core')) ||
        (muscleFilter === 'quads' &&
          (e.primaryMuscles.includes('quads') ||
            e.primaryMuscles.includes('glutes') ||
            e.primaryMuscles.includes('calves')))

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
    <div className="flex flex-col gap-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-lg bg-primary/15 text-primary border border-primary/30">
              <Sparkles className="size-3.5" />
            </span>
            <span className="text-xs font-black uppercase tracking-widest text-primary">
              Movement Catalog
            </span>
          </div>
          <h1 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
            Exercise Library
          </h1>
          <p className="text-xs text-[#858B85]">
            Explore 370+ exercises with verified 1080p male &amp; female video demonstrations.
          </p>
        </div>

        <Button
          size="sm"
          onClick={() => {
            triggerHaptic('light')
            setAdding(true)
          }}
          className="self-start sm:self-auto rounded-xl bg-primary font-black text-[#0A0A0A] shadow-[0_0_20px_rgba(182,255,59,0.3)] hover:bg-[#A3ED2E] border-none active:scale-95"
        >
          <Plus className="size-4" />
          Add Custom
        </Button>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#858B85]"
          aria-hidden="true"
        />
        <Input
          type="search"
          placeholder="Search 370+ exercises (e.g. Bench Press, Squat, Lat Pulldown, Core)..."
          aria-label="Search exercises"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-12 rounded-xl border-[#2A302A] bg-[#171A17] pl-11 text-white placeholder:text-[#858B85] transition-all focus:border-primary focus:bg-[#202420]"
        />
      </div>

      {/* Muscle Group Filter Chips */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#858B85] flex items-center gap-1.5">
            <Filter className="size-3 text-primary" />
            Target Muscle Group
          </span>
          <span className="text-[10px] font-bold text-primary">
            {list.length} Movements Available
          </span>
        </div>
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
                'rounded-lg px-3 py-1.5 text-xs font-bold transition-all active:scale-95',
                muscleFilter === m.value
                  ? 'bg-primary text-[#0A0A0A] font-black shadow-[0_0_12px_rgba(182,255,59,0.3)]'
                  : 'border border-[#2A302A] bg-[#202420] text-[#B4BAB4] hover:bg-[#2A302A] hover:text-white',
              )}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Equipment Filter Chips */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#858B85]">
          Equipment
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
                'rounded-lg px-3 py-1 text-xs font-semibold transition-all active:scale-95',
                equipmentFilter === eq.value
                  ? 'bg-primary text-[#0A0A0A] font-bold'
                  : 'border border-[#2A302A] bg-[#202420] text-[#858B85] hover:bg-[#2A302A] hover:text-white',
              )}
            >
              {eq.label}
            </button>
          ))}
        </div>
      </div>

      {/* Exercise Grid */}
      {list.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-[#2A302A] bg-[#171A17] p-12 text-center">
          <div className="flex size-14 items-center justify-center rounded-xl bg-[#202420] text-[#858B85]">
            <Dumbbell className="size-7" />
          </div>
          <p className="mt-3 text-base font-bold text-white">
            No exercises match your filters
          </p>
          <p className="mt-1 text-xs text-[#858B85] max-w-sm">
            Try resetting your muscle group or equipment filters, or check your search spelling.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold text-[#858B85]">
            Showing <strong className="text-white">{list.length}</strong> movements
          </span>

          {/* Fully Responsive Black & Neon Green Grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
            {list.map((e) => (
              <li key={e.id}>
                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic('light')
                    setSelected(e)
                  }}
                  className="group flex flex-col w-full overflow-hidden rounded-xl border border-[#2A302A] bg-[#171A17] p-3 text-left transition-all duration-200 hover:border-primary/50 hover:bg-[#202420] hover:shadow-[0_4px_20px_rgba(0,0,0,0.5)] active:scale-[0.98]"
                >
                  {/* 16:9 Thumbnail Preview */}
                  <div className="relative w-full overflow-hidden rounded-lg border border-[#2A302A] bg-[#0A0A0A]">
                    <ExerciseMedia exerciseId={e.id} name={e.name} mode="card" />
                  </div>

                  {/* Metadata */}
                  <div className="mt-3 flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex w-full items-start justify-between gap-1.5">
                        <h3 className="font-extrabold text-white text-sm line-clamp-1 group-hover:text-primary transition-colors">
                          {e.name}
                        </h3>
                        {e.isCustom && (
                          <span className="shrink-0 rounded-md bg-primary/20 px-1.5 py-0.5 text-[9px] font-black text-primary uppercase tracking-wider">
                            Custom
                          </span>
                        )}
                      </div>

                      <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-xs text-[#858B85]">
                        <Target className="size-3 text-primary shrink-0" />
                        <span className="font-bold text-primary capitalize text-[11px] truncate">
                          {e.primaryMuscles.join(', ')}
                        </span>
                        <span>·</span>
                        <span className="capitalize text-[11px] text-[#B4BAB4]">{e.equipment}</span>
                        <span>·</span>
                        <span className="capitalize text-[11px] text-[#858B85]">{e.category}</span>
                      </div>
                    </div>

                    <div className="mt-2.5 flex items-center justify-between border-t border-[#2A302A] pt-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#858B85]">
                        {e.difficulty}
                      </span>
                      <span className="text-[10px] font-bold text-primary group-hover:underline">
                        View Demo →
                      </span>
                    </div>
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
