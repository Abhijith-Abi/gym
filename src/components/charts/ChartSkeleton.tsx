/** Loading skeleton for the lazy chart islands (FR-38, design C.6). */
export function ChartSkeleton({ label }: { label?: string }) {
  return (
    <div
      role="status"
      aria-label={label ? `Loading ${label}` : 'Loading chart'}
      className="flex h-64 w-full animate-pulse items-center justify-center rounded-xl border border-border bg-card/50"
    >
      <span className="text-xs text-muted-foreground">
        {label ? `Loading ${label}…` : 'Loading chart…'}
      </span>
    </div>
  )
}
