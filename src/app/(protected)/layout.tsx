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
      <div className="flex h-dvh w-full overflow-hidden bg-background">
        <Sidebar />
        <main className="flex-1 h-dvh overflow-y-auto overflow-x-hidden pb-24 md:pb-8">
          <div className="mx-auto w-full max-w-7xl px-3.5 sm:px-6 lg:px-8 py-4 sm:py-6">
            {children}
          </div>
        </main>
      </div>
      <BottomNav />
      <InstallPrompt />
    </AuthGuard>
  )
}
