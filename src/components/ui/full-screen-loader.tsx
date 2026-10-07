import { Loader2 } from 'lucide-react'

/**
 * The single full-screen loader rendered during BOTH auth loading phases
 * (initializing, authed-loading-profile) so there is no visual seam and no
 * dashboard flash (design C.2). No route change happens while this is shown.
 */
export function FullScreenLoader({ label = 'Loading ForgeFit…' }: { label?: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-dvh flex-col items-center justify-center gap-4"
    >
      <Loader2 className="size-8 animate-spin text-primary" aria-hidden="true" />
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  )
}
