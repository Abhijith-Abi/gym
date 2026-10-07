import { HydrationTracker } from '@/components/recovery/HydrationTracker'
import { RecoveryCard } from '@/components/recovery/RecoveryCard'

/** Recovery + hydration + manual deload (FR-24/26, design C.16 step 4). */
export default function RecoveryPage() {
  return (
    <main className="mx-auto flex w-full max-w-2xl min-w-0 flex-col gap-6 p-3.5 sm:p-6">
      <RecoveryCard />
      <HydrationTracker />
    </main>
  )
}
