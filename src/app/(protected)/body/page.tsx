import { BodyMeasurements } from '@/components/body/BodyMeasurements'
import { BodyWeightChart } from '@/components/body/BodyWeightChart'
import { ProgressPhotoGallery } from '@/components/body/ProgressPhotoGallery'

/** Body tracking + progress photos (FR-22/23, design C.16 step 3). */
export default function BodyPage() {
  return (
    <main className="w-full min-w-0 flex flex-col gap-6">
      <header className="flex flex-col gap-1">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          Physique &amp; Biomarkers
        </span>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground">
          Body Tracking &amp; Measurements
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Weight Chart & Photos */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <BodyWeightChart />
          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-bold text-foreground">Progress Photos</h2>
            <ProgressPhotoGallery />
          </section>
        </div>

        {/* Right Column: Measurements Form & History */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-bold text-foreground">Circumference &amp; Body Fat</h2>
            <BodyMeasurements />
          </section>
        </div>
      </div>
    </main>
  )
}
