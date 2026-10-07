import { cn } from '@/lib/utils'

/**
 * Generic loading skeleton primitive (FR-38, design C.15). Never render a blank
 * surface while data loads — compose these into page-level skeletons. Honors
 * reduced motion via the `motion-reduce:animate-none` utility so the pulse is
 * suppressed for users who ask for reduced motion.
 */
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'animate-pulse rounded-md bg-muted/60 motion-reduce:animate-none',
        className,
      )}
    />
  )
}

/** A labelled block of skeleton lines with an accessible status role. */
export function SkeletonBlock({
  lines = 3,
  label = 'Loading',
  className,
}: {
  lines?: number
  label?: string
  className?: string
}) {
  return (
    <div
      role="status"
      aria-label={label}
      className={cn('flex flex-col gap-2', className)}
    >
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className={cn('h-4 w-full', i === lines - 1 && 'w-2/3')} />
      ))}
      <span className="sr-only">{label}…</span>
    </div>
  )
}
