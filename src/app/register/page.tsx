import { AuthShell } from '@/components/auth/AuthShell'
import { RegisterForm } from '@/components/auth/RegisterForm'

export default function RegisterPage() {
  return (
    <AuthShell
      title="Create your account"
      subtitle="Build Strength. Track Progress. Train Smarter."
    >
      <RegisterForm />
    </AuthShell>
  )
}
