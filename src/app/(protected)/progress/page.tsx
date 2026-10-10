import { ProgressDashboard } from '@/components/progress/ProgressDashboard'

/** Analytics + weekly/monthly reports over summary docs (FR-28, step 12). */
export default function ProgressPage() {
  return (
    <div className="w-full min-w-0">
      <ProgressDashboard />
    </div>
  )
}
