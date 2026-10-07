'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { registerSchema, type RegisterInput } from '@/lib/schemas/auth'
import { loginWithGoogle, register as registerUser } from '@/services/authService'
import { useAuth } from '@/hooks/useAuth'

/** Email/password registration + Google (FR-1). RHF + zodResolver (C.13). */
export function RegisterForm() {
  const router = useRouter()
  const { phase } = useAuth()
  const [formError, setFormError] = useState<string | null>(null)
  const [googlePending, setGooglePending] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({ resolver: zodResolver(registerSchema) })

  // Auto-redirect if session is already active or resolves via redirect
  useEffect(() => {
    if (phase === 'ready') {
      router.replace('/dashboard')
    } else if (phase === 'onboarding') {
      router.replace('/onboarding')
    }
  }, [phase, router])

  async function onSubmit(values: RegisterInput) {
    setFormError(null)
    const res = await registerUser(values.displayName, values.email, values.password)
    if (!res.ok) {
      setFormError(res.message)
      return
    }
    // New account → AuthGuard routes to onboarding once the profile read
    // resolves to "no profile yet".
    router.replace('/onboarding')
  }

  async function onGoogle() {
    setFormError(null)
    setGooglePending(true)
    const res = await loginWithGoogle()
    setGooglePending(false)
    if (!res.ok) {
      setFormError(res.message)
      return
    }
    router.replace('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="displayName">Name</Label>
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

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          {...register('email')}
        />
        {errors.email && (
          <p role="alert" className="text-sm text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          autoComplete="new-password"
          aria-invalid={Boolean(errors.password)}
          {...register('password')}
        />
        {errors.password && (
          <p role="alert" className="text-sm text-destructive">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="confirmPassword">Confirm password</Label>
        <Input
          id="confirmPassword"
          type="password"
          autoComplete="new-password"
          aria-invalid={Boolean(errors.confirmPassword)}
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && (
          <p role="alert" className="text-sm text-destructive">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {formError && (
        <p role="alert" className="text-sm text-destructive">
          {formError}
        </p>
      )}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating account…' : 'Create account'}
      </Button>

      <Button
        type="button"
        variant="outline"
        onClick={onGoogle}
        disabled={googlePending}
      >
        {googlePending ? 'Connecting…' : 'Continue with Google'}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{' '}
        <Link href="/login" className="text-primary underline-offset-4 hover:underline">
          Sign in
        </Link>
      </p>
    </form>
  )
}
