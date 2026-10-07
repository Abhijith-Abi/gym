import { Dumbbell } from 'lucide-react'

/** Centered card chrome for the auth routes (FR-35 mobile-first). RSC-safe. */
export function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col justify-center gap-6 px-6 py-10">
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_0_25px_rgba(34,197,94,0.4)]">
          <Dumbbell className="size-7" />
        </div>
        <span className="mt-2 text-3xl font-black tracking-wider text-foreground">
          FORGE<span className="text-primary">FIT</span>
        </span>
        <h1 className="text-xl font-bold text-foreground">{title}</h1>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-xl">
        {children}
      </div>
    </main>
  )
}
