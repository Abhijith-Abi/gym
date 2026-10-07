'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { loginSchema, type LoginInput } from '@/lib/schemas/auth'
import { login, loginWithGoogle } from '@/services/authService'
import { useAuth } from '@/hooks/useAuth'

/** Email/password + Google login (FR-1). RHF + zodResolver (C.13). */
export function LoginForm() {
  const router = useRouter()
  const { phase } = useAuth()
  const [formError, setFormError] = useState<string | null>(null)
  const [googlePending, setGooglePending] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) })

  // Auto-redirect if session is already active or resolves via redirect
  useEffect(() => {
    if (phase === 'ready') {
      router.replace('/dashboard')
    } else if (phase === 'onboarding') {
      router.replace('/onboarding')
    }
  }, [phase, router])

  async function onSubmit(values: LoginInput) {
    setFormError(null)
    const res = await login(values.email, values.password)
    if (!res.ok) {
      setFormError(res.message)
      return
    }
    router.replace('/dashboard')
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
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <Link
            href="/forgot-password"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            Forgot password?
          </Link>
        </div>
        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          aria-invalid={Boolean(errors.password)}
          {...register('password')}
        />
        {errors.password && (
          <p role="alert" className="text-sm text-destructive">
            {errors.password.message}
          </p>
        )}
      </div>

      {formError && (
        <p role="alert" className="text-sm text-destructive">
          {formError}
        </p>
      )}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Signing in…' : 'Sign in'}
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
        New to ForgeFit?{' '}
        <Link href="/register" className="text-primary underline-offset-4 hover:underline">
          Create an account
        </Link>
      </p>
    </form>
  )
}
