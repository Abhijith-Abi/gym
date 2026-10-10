'use client'

import { useMemo, useState } from 'react'
import { Search, Plus, Dumbbell, Sparkles, Filter } from 'lucide-react'
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
    <div className="flex flex-col gap-6 w-full min-w-0">
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
          className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#8C8C8C]"
          aria-hidden="true"
        />
        <Input
          type="search"
          placeholder="Search 370+ exercises (e.g. Bench Press, Squat, Lat Pulldown, Core)..."
          aria-label="Search exercises"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-12 rounded-2xl border-white/10 bg-white/5 pl-11 text-white placeholder:text-[#8C8C8C] backdrop-blur-xl transition-all focus:border-primary focus:bg-white/[0.08]"
        />
      </div>

      {/* Muscle Group Filter Chips */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8C8C8C] flex items-center gap-1.5">
            <Filter className="size-3 text-primary" />
            Target Muscle Group
          </span>
          <span className="text-[10px] font-bold text-primary">
            {list.length} Movements
          </span>
        </div>
        <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto pb-1" role="group" aria-label="Filter by target muscle">
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
                'shrink-0 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all backdrop-blur-md active:scale-95',
                muscleFilter === m.value
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(255,107,53,0.35)]'
                  : 'border border-white/10 bg-white/5 text-[#A8A8A8] hover:border-white/20 hover:text-white',
              )}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Equipment Filter Chips */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8C8C8C]">
          Equipment
        </span>
        <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto pb-1" role="group" aria-label="Filter by equipment">
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
                'shrink-0 rounded-xl px-3 py-1 text-xs font-semibold transition-all backdrop-blur-md active:scale-95',
                equipmentFilter === eq.value
                  ? 'bg-primary text-white font-bold'
                  : 'border border-white/10 bg-white/5 text-[#8C8C8C] hover:border-white/20 hover:text-white',
              )}
            >
              {eq.label}
            </button>
          ))}
        </div>
      </div>

      {/* Exercise Grid */}
      {list.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-primary">
            <Dumbbell className="size-7" />
          </div>
          <p className="mt-3 text-base font-bold text-white">
            No exercises match your filters
          </p>
          <p className="mt-1 text-xs text-[#8C8C8C] max-w-sm">
            Try resetting your muscle group or equipment filters, or check your search spelling.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {/* Responsive 2-col on mobile, up to 5-col on desktop Grid */}
          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4">
            {list.map((e) => (
              <li key={e.id}>
                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic('light')
                    setSelected(e)
                  }}
                  className="group flex flex-col w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2.5 sm:p-3 text-left transition-all duration-200 backdrop-blur-xl hover:border-primary/50 hover:bg-white/[0.08] hover:shadow-[0_4px_25px_rgba(0,0,0,0.5)] active:scale-[0.98]"
                >
                  {/* 16:9 Thumbnail Preview */}
                  <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0A]">
                    <ExerciseMedia exerciseId={e.id} name={e.name} mode="card" />
                  </div>

                  {/* Metadata */}
                  <div className="mt-2.5 flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex w-full items-start justify-between gap-1.5">
                        <h3 className="font-extrabold text-white text-xs sm:text-sm line-clamp-1 group-hover:text-primary transition-colors">
                          {e.name}
                        </h3>
                        {e.isCustom && (
                          <span className="shrink-0 rounded-md bg-primary/20 px-1.5 py-0.5 text-[9px] font-black text-primary uppercase tracking-wider">
                            Custom
                          </span>
                        )}
                      </div>

                      <div className="mt-1 flex flex-wrap items-center gap-1 text-[10px] text-[#8C8C8C]">
                        <span className="font-bold text-primary capitalize truncate">
                          {e.primaryMuscles.join(', ')}
                        </span>
                        <span>·</span>
                        <span className="capitalize text-[#A8A8A8]">{e.equipment}</span>
                      </div>
                    </div>

                    <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-1.5">
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#8C8C8C] capitalize">
                        {e.difficulty}
                      </span>
                      <span className="text-[10px] font-bold text-primary group-hover:underline">
                        Details →
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
