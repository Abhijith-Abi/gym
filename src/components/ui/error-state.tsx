import type { ReactNode } from 'react'
import { AlertTriangle, WifiOff } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * Shared error/offline state (FR-38) — the UI never shows a raw Firebase error.
 * Services map errors to friendly `message` strings (design C.12); this renders
 * that friendly text with an optional retry. Use `variant="offline"` for the
 * dedicated offline affordance.
 */
export function ErrorState({
  title = 'Something went wrong',
  message,
  onRetry,
  retryLabel = 'Try again',
  variant = 'error',
  children,
}: {
  title?: string
  message?: string
  onRetry?: () => void
  retryLabel?: string
  variant?: 'error' | 'offline'
  children?: ReactNode
}) {
  const Icon = variant === 'offline' ? WifiOff : AlertTriangle
  return (
    <div
      role="alert"
      className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card/50 p-8 text-center"
    >
      <Icon
        className={
          variant === 'offline'
            ? 'size-8 text-muted-foreground'
            : 'size-8 text-destructive'
        }
        aria-hidden="true"
      />
      <p className="font-medium">{title}</p>
      {message ? (
        <p className="text-sm text-muted-foreground">{message}</p>
      ) : null}
      {children}
      {onRetry ? (
        <Button type="button" variant="secondary" size="sm" onClick={onRetry}>
          {retryLabel}
        </Button>
      ) : null}
    </div>
  )
}
