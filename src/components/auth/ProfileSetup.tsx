'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FullScreenLoader } from '@/components/ui/full-screen-loader'
import { cn } from '@/lib/utils'
import { onboardingSchema, type OnboardingInput } from '@/lib/schemas/auth'
import { useAuth } from '@/hooks/useAuth'
import { useAuthStore } from '@/store/authStore'
import { useSettingsStore } from '@/store/settingsStore'
import { completeOnboarding } from '@/services/profileService'
import type { Experience, Goal, Unit } from '@/types'

const GOALS: { value: Goal; label: string }[] = [
  { value: 'muscle_gain', label: 'Build Muscle' },
  { value: 'strength', label: 'Increase Strength' },
  { value: 'fat_loss', label: 'Lose Fat' },
  { value: 'fitness', label: 'General Fitness' },
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

function OptionGroup<T extends string>({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string
  options: { value: T; label: string }[]
  value: T | undefined
  onChange: (v: T) => void
}) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="mb-1 text-sm font-medium">{legend}</legend>
      <div className="grid grid-cols-2 gap-2">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            aria-pressed={value === o.value}
            onClick={() => onChange(o.value)}
            className={cn(
              'rounded-md border px-3 py-3 text-sm transition-colors',
              value === o.value
                ? 'border-primary bg-primary/10 text-foreground'
                : 'border-input text-muted-foreground hover:bg-secondary/60',
            )}
          >
            {o.label}
          </button>
        ))}
      </div>
    </fieldset>
  )
}

/**
 * Onboarding form (FR-2). Writes the root ownership doc + single-copy
 * profile/data (onboardingCompleted:true, preferredUnit) + settings/preferences
 * via profileService (AC-6). The uid is the Firebase uid, never email.
 */
export function ProfileSetup() {
  const router = useRouter()
  const { user, uid, phase } = useAuth()
  const refreshProfile = useAuthStore((s) => s.refreshProfile)
  const deviceId = useSettingsStore((s) => s.deviceId)
  const [formError, setFormError] = useState<string | null>(null)

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<OnboardingInput>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      displayName: '',
      goal: 'muscle_gain',
      experience: 'beginner',
      preferredUnit: 'kg',
    },
  })

  // Seed the name field from the auth display name once it's available.
  useEffect(() => {
    if (user?.displayName) {
      reset((prev) => ({ ...prev, displayName: user.displayName ?? '' }))
    }
  }, [user?.displayName, reset])

  // Unauthenticated users should not be here.
  useEffect(() => {
    if (phase === 'unauthenticated' || phase === 'not-configured') {
      router.replace('/login')
    } else if (phase === 'ready') {
      router.replace('/dashboard')
    }
  }, [phase, router])

  if (!uid || !user) {
    return <FullScreenLoader label="Preparing onboarding…" />
  }

  async function onSubmit(values: OnboardingInput) {
    if (!uid || !user) return
    setFormError(null)
    const res = await completeOnboarding({
      uid,
      email: user.email ?? '',
      displayName: values.displayName,
      ...(user.photoURL ? { photoURL: user.photoURL } : {}),
      goal: values.goal,
      experience: values.experience,
      preferredUnit: values.preferredUnit,
      deviceId,
    })
    if (!res.ok) {
      setFormError(res.message)
      return
    }
    await refreshProfile()
    router.replace('/dashboard')
  }

  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col justify-center gap-8 px-6 py-10">
      <div className="flex flex-col gap-2 text-center">
        <span className="text-3xl font-bold tracking-tight text-primary">
          Welcome to ForgeFit
        </span>
        <p className="text-sm text-muted-foreground">
          Build Strength. Track Progress. Train Smarter.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="displayName">Your name</Label>
          <Input
            id="displayName"
            autoComplete="name"
            aria-invalid={Boolean(errors.displayName)}
            {...register('displayName')}
          />
          {errors.displayName && (
            <p role="alert" className="text-sm text-destructive">
              {errors.displayName.message}
            </p>
          )}
        </div>

        <Controller
          control={control}
          name="goal"
          render={({ field }) => (
            <OptionGroup
              legend="Choose your goal"
              options={GOALS}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="experience"
          render={({ field }) => (
            <OptionGroup
              legend="Experience level"
              options={EXPERIENCE}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="preferredUnit"
          render={({ field }) => (
            <OptionGroup
              legend="Preferred units"
              options={UNITS}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />

        {formError && (
          <p role="alert" className="text-sm text-destructive">
            {formError}
          </p>
        )}

        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? 'Setting up…' : 'Start training'}
        </Button>
      </form>
    </main>
  )
}
