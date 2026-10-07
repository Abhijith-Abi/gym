import { z } from 'zod'
import { experienceSchema, goalSchema, unitSchema } from './enums'

/** Login form (C.13). */
export const loginSchema = z.object({
  email: z.string().email('Enter a valid email address.'),
  password: z.string().min(1, 'Enter your password.'),
})
export type LoginInput = z.infer<typeof loginSchema>

/** Register form (C.13). Firebase requires >= 6 character passwords. */
export const registerSchema = z
  .object({
    displayName: z.string().min(1, 'Enter your name.').max(120),
    email: z.string().email('Enter a valid email address.'),
    password: z.string().min(6, 'Use at least 6 characters.').max(256),
    confirmPassword: z.string().min(1, 'Confirm your password.'),
  })
  .refine((d) => d.password === d.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match.',
  })
export type RegisterInput = z.infer<typeof registerSchema>

/** Forgot-password form (C.13). */
export const forgotPasswordSchema = z.object({
  email: z.string().email('Enter a valid email address.'),
})
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>

/** Reset-password form (C.13). */
export const resetPasswordSchema = z
  .object({
    password: z.string().min(6, 'Use at least 6 characters.').max(256),
    confirmPassword: z.string().min(1, 'Confirm your password.'),
  })
  .refine((d) => d.password === d.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match.',
  })
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>

/** Onboarding choices (C.13 — enum membership). */
export const onboardingSchema = z.object({
  displayName: z.string().min(1, 'Enter your name.').max(120),
  goal: goalSchema,
  experience: experienceSchema,
  preferredUnit: unitSchema,
})
export type OnboardingInput = z.infer<typeof onboardingSchema>
