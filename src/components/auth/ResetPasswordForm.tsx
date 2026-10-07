'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  resetPasswordSchema,
  type ResetPasswordInput,
} from '@/lib/schemas/auth'
import { resetPassword } from '@/services/authService'

/**
 * Completes a password reset using the oobCode Firebase appends to the reset
 * email link (?oobCode=...). RHF + zodResolver (C.13).
 */
export function ResetPasswordForm() {
  const params = useSearchParams()
  const oobCode = params.get('oobCode') ?? ''
  const [formError, setFormError] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordInput>({
    resolver: zodResolver(resetPasswordSchema),
  })

  async function onSubmit(values: ResetPasswordInput) {
    setFormError(null)
    if (!oobCode) {
      setFormError('This reset link is invalid or has expired. Request a new one.')
      return
    }
    const res = await resetPassword(oobCode, values.password)
    if (!res.ok) {
      setFormError(res.message)
      return
    }
    setDone(true)
  }

  if (done) {
    return (
      <div className="flex flex-col gap-4 text-center">
        <p className="text-sm text-muted-foreground">
          Your password has been reset. You can sign in with your new password.
        </p>
        <Link
          href="/login"
          className="text-primary underline-offset-4 hover:underline"
        >
          Go to sign in
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="password">New password</Label>
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
        <Label htmlFor="confirmPassword">Confirm new password</Label>
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
        {isSubmitting ? 'Resetting…' : 'Reset password'}
      </Button>
    </form>
  )
}
