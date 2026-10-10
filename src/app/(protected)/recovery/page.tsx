import { HydrationTracker } from '@/components/recovery/HydrationTracker'
import { RecoveryCard } from '@/components/recovery/RecoveryCard'

/** Recovery + hydration + manual deload (FR-24/26, design C.16 step 4). */
export default function RecoveryPage() {
  return (
    <main className="w-full min-w-0 flex flex-col gap-6">
      <header className="flex flex-col gap-1">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          Rest &amp; Readiness
        </span>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
          Recovery &amp; Hydration
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <RecoveryCard />
        <HydrationTracker />
      </div>
    </main>
  )
}
