import { GoalsAndAchievements } from '@/components/goals/GoalsAndAchievements'

/** Goals + achievements (FR-25/32, design C.16 step 5). */
export default function GoalsPage() {
  return (
    <main className="mx-auto flex w-full max-w-2xl min-w-0 flex-col gap-4 p-3.5 sm:p-6">
      <GoalsAndAchievements />
    </main>
  )
}
