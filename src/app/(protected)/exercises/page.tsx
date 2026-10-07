import { ExerciseLibrary } from '@/components/exercises/ExerciseLibrary'

/** Exercise library route (FR-4, FR-20). RSC shell + client island. */
export default function ExercisesPage() {
  return (
    <main className="mx-auto flex w-full max-w-2xl min-w-0 flex-col gap-4 p-3.5 sm:p-6">
      <ExerciseLibrary />
    </main>
  )
}
