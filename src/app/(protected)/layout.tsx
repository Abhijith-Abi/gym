import { AuthGuard } from '@/components/auth/AuthGuard'
import { BottomNav } from '@/components/nav/BottomNav'
import { Sidebar } from '@/components/nav/Sidebar'
import { InstallPrompt } from '@/components/pwa/InstallPrompt'

/**
 * Protected route group: mounts the AuthGuard (C.2 6-phase machine) and the
 * nav shells. Children render only once phase === 'ready'. The nav shells sit
 * inside the guard so they never show during a loading/unauth phase (no flash).
 */
export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthGuard>
      <div className="flex min-h-dvh w-full overflow-x-hidden">
        <Sidebar />
        <div className="flex-1 w-full min-w-0 max-w-full overflow-x-hidden pb-24 md:pb-6">{children}</div>
      </div>
      <BottomNav />
      <InstallPrompt />
    </AuthGuard>
  )
}
