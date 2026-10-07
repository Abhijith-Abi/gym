import { BodyMeasurements } from '@/components/body/BodyMeasurements'
import { BodyWeightChart } from '@/components/body/BodyWeightChart'
import { ProgressPhotoGallery } from '@/components/body/ProgressPhotoGallery'

/** Body tracking + progress photos (FR-22/23, design C.16 step 3). */
export default function BodyPage() {
  return (
    <main className="mx-auto flex w-full max-w-2xl min-w-0 flex-col gap-6 p-3.5 sm:gap-8 sm:p-6">
      <header>
        <h1 className="text-2xl font-bold">Body</h1>
      </header>
      <BodyWeightChart />
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Measurements</h2>
        <BodyMeasurements />
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Progress photos</h2>
        <ProgressPhotoGallery />
      </section>
    </main>
  )
}
