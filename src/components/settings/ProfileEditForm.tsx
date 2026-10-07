'use client'

import { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { experienceSchema, goalSchema, unitSchema } from '@/lib/schemas/enums'
import { useAuth } from '@/hooks/useAuth'
import { useAuthStore } from '@/store/authStore'
import { updateProfile } from '@/services/profileService'
import { Target, Dumbbell, Scale } from 'lucide-react'
import type { Experience, Goal, Unit } from '@/types'

const profileEditSchema = z.object({
  displayName: z.string().min(1, 'Enter your name.').max(120),
  goal: goalSchema,
  experience: experienceSchema,
  preferredUnit: unitSchema,
})
type ProfileEditInput = z.infer<typeof profileEditSchema>

const GOALS: { value: Goal; label: string }[] = [
  { value: 'muscle_gain', label: 'Build Muscle' },
  { value: 'strength', label: 'Strength' },
  { value: 'fat_loss', label: 'Lose Fat' },
  { value: 'fitness', label: 'Fitness' },
  { value: 'custom', label: 'Custom' },
]
const EXPERIENCE: { value: Experience; label: string }[] = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
]
const UNITS: { value: Unit; label: string }[] = [
  { value: 'kg', label: 'Kilograms (kg)' },
  { value: 'lb', label: 'Pounds (lb)' },
]

function Pills<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { value: T; label: string }[]
  value: T
  onChange: (v: T) => void
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={value === o.value}
          onClick={() => onChange(o.value)}
          className={cn(
            'min-h-[40px] rounded-xl border px-3.5 py-2 text-xs font-bold transition-all active:scale-95',
            value === o.value
              ? 'border-primary bg-primary text-primary-foreground shadow-[0_0_12px_rgba(34,197,94,0.3)]'
              : 'border-border bg-card-elevated text-muted-foreground hover:bg-secondary hover:text-foreground',
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

/** Editable profile (FR-3): name, goal, experience, unit. */
export function ProfileEditForm() {
  const { profile, uid } = useAuth()
  const refreshProfile = useAuthStore((s) => s.refreshProfile)
  const [status, setStatus] = useState<'idle' | 'saved' | string>('idle')

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProfileEditInput>({
    resolver: zodResolver(profileEditSchema),
    defaultValues: {
      displayName: profile?.displayName ?? '',
      goal: profile?.goal ?? 'muscle_gain',
      experience: profile?.experience ?? 'beginner',
      preferredUnit: profile?.preferredUnit ?? 'kg',
    },
  })

  useEffect(() => {
    if (profile) {
      reset({
        displayName: profile.displayName,
        goal: profile.goal,
        experience: profile.experience,
        preferredUnit: profile.preferredUnit,
      })
    }
  }, [profile, reset])

  async function onSubmit(values: ProfileEditInput) {
    if (!uid) return
    setStatus('idle')
    const res = await updateProfile(uid, values)
    if (!res.ok) {
      setStatus(res.message)
      return
    }
    await refreshProfile()
    setStatus('saved')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-5 shadow-sm"
      noValidate
    >
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="displayName" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Display Name
        </Label>
        <Input
          id="displayName"
          aria-invalid={Boolean(errors.displayName)}
          className="rounded-xl border-border bg-card-elevated text-foreground"
          placeholder="Your Athlete Name"
          {...register('displayName')}
        />
        {errors.displayName && (
          <p role="alert" className="text-xs font-semibold text-destructive">
            {errors.displayName.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          <Target className="size-3.5 text-primary" />
          <span>Primary Training Goal</span>
        </div>
        <Controller
          control={control}
          name="goal"
          render={({ field }) => (
            <Pills options={GOALS} value={field.value} onChange={field.onChange} />
          )}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          <Dumbbell className="size-3.5 text-accent" />
          <span>Lifting Experience</span>
        </div>
        <Controller
          control={control}
          name="experience"
          render={({ field }) => (
            <Pills
              options={EXPERIENCE}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          <Scale className="size-3.5 text-warning" />
          <span>Preferred Units</span>
        </div>
        <Controller
          control={control}
          name="preferredUnit"
          render={({ field }) => (
            <Pills options={UNITS} value={field.value} onChange={field.onChange} />
          )}
        />
      </div>

      {status !== 'idle' && status !== 'saved' && (
        <p role="alert" className="text-sm font-semibold text-destructive">
          {status}
        </p>
      )}
      {status === 'saved' && (
        <p role="status" className="text-sm font-semibold text-primary">
          ✓ Profile updated successfully.
        </p>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="min-h-[48px] rounded-2xl bg-primary font-bold text-primary-foreground shadow-[0_0_20px_rgba(34,197,94,0.35)] hover:bg-primary/90 active:scale-95"
      >
        {isSubmitting ? 'Saving…' : 'Save Profile Changes'}
      </Button>
    </form>
  )
}
