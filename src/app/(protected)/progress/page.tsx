import { ProgressDashboard } from '@/components/progress/ProgressDashboard'

/** Analytics + weekly/monthly reports over summary docs (FR-28, step 12). */
export default function ProgressPage() {
  return (
    <main className="mx-auto flex w-full max-w-2xl min-w-0 flex-col gap-4 p-3.5 sm:p-6">
      <ProgressDashboard />
    </main>
  )
}
