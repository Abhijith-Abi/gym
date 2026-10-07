import type { ReactNode } from 'react'

/** Shared empty state (FR-38) — never render a blank surface. */
export function EmptyState({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children?: ReactNode
}) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-border bg-card/40 p-8 text-center">
      <p className="font-medium">{title}</p>
      {description ? (
        <p className="text-sm text-muted-foreground">{description}</p>
      ) : null}
      {children}
    </div>
  )
}
