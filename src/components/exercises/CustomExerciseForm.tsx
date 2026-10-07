'use client'

import { useState } from 'react'
import { ChevronLeft } from 'lucide-react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import {
  equipmentSchema,
  exerciseCategorySchema,
  muscleGroupSchema,
} from '@/lib/schemas/enums'
import { useAuth } from '@/hooks/useAuth'
import type { Equipment, Exercise, ExerciseCategory, MuscleGroup } from '@/types'

const customExerciseSchema = z.object({
  name: z.string().min(1, 'Enter a name.').max(80),
  primaryMuscle: muscleGroupSchema,
  equipment: equipmentSchema,
  category: exerciseCategorySchema,
})
type CustomExerciseInput = z.infer<typeof customExerciseSchema>

const MUSCLES: MuscleGroup[] = [
  'chest',
  'back',
  'shoulders',
  'biceps',
  'triceps',
  'quads',
  'hamstrings',
  'glutes',
  'calves',
  'core',
  'forearms',
  'fullbody',
]
const EQUIPMENT: Equipment[] = [
  'barbell',
  'dumbbell',
  'cable',
  'machine',
  'bodyweight',
  'kettlebell',
  'band',
  'other',
]
const CATEGORIES: ExerciseCategory[] = [
  'compound',
  'isolation',
  'cardio',
  'hiit',
  'mobility',
]

function slugify(name: string): string {
  const base = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  return `custom-${base || 'exercise'}-${Date.now().toString(36)}`
}

/** Create a custom library exercise (FR-20). Added to the in-memory catalog. */
export function CustomExerciseForm({
  onCancel,
  onCreate,
}: {
  onCancel: () => void
  onCreate: (exercise: Exercise) => void
}) {
  const { uid } = useAuth()
  const [error, setError] = useState<string | null>(null)
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomExerciseInput>({
    resolver: zodResolver(customExerciseSchema),
    defaultValues: {
      name: '',
      primaryMuscle: 'chest',
      equipment: 'dumbbell',
      category: 'isolation',
    },
  })

  function onSubmit(values: CustomExerciseInput) {
    setError(null)
    const exercise: Exercise = {
      id: slugify(values.name),
      name: values.name,
      primaryMuscles: [values.primaryMuscle],
      secondaryMuscles: [],
      equipment: values.equipment,
      category: values.category,
      difficulty: 'beginner',
      instructions: [],
      tips: [],
      alternatives: [],
      isCustom: true,
      ...(uid ? { uid } : {}),
      createdAt: new Date(),
    }
    onCreate(exercise)
  }

  return (
    <div className="flex flex-col gap-5">
      <button
        type="button"
        onClick={onCancel}
        className="inline-flex items-center gap-1 self-start text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="size-4" aria-hidden="true" />
        Back to library
      </button>

      <h1 className="text-2xl font-bold">New custom exercise</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            aria-invalid={Boolean(errors.name)}
            {...register('name')}
          />
          {errors.name && (
            <p role="alert" className="text-sm text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

        <Controller
          control={control}
          name="primaryMuscle"
          render={({ field }) => (
            <Picker
              legend="Primary muscle"
              options={MUSCLES}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="equipment"
          render={({ field }) => (
            <Picker
              legend="Equipment"
              options={EQUIPMENT}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="category"
          render={({ field }) => (
            <Picker
              legend="Category"
              options={CATEGORIES}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />

        {error && (
          <p role="alert" className="text-sm text-destructive">
            {error}
          </p>
        )}

        <Button type="submit">Create exercise</Button>
      </form>
    </div>
  )
}

function Picker<T extends string>({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string
  options: T[]
  value: T
  onChange: (v: T) => void
}) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="mb-1 text-sm font-medium">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            aria-pressed={value === o}
            onClick={() => onChange(o)}
            className={cn(
              'rounded-md border px-3 py-1.5 text-sm capitalize',
              value === o
                ? 'border-primary bg-primary/10'
                : 'border-input text-muted-foreground hover:bg-secondary/60',
            )}
          >
            {o}
          </button>
        ))}
      </div>
    </fieldset>
  )
}
