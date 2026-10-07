import { create } from 'zustand'
import type { BodyMeasurement, ProgressPhoto } from '@/types'

/**
 * Body-tracking cache (design C.5). Holds the user's measurement trend + photo
 * gallery metadata. NOT persisted — hydrated from bodyService / Firestore
 * (itself offline-persistent).
 */
interface BodyStoreState {
  measurements: BodyMeasurement[]
  photos: ProgressPhoto[]
  loaded: boolean

  setMeasurements: (m: BodyMeasurement[]) => void
  upsertMeasurement: (m: BodyMeasurement) => void
  removeMeasurement: (id: string) => void
  setPhotos: (p: ProgressPhoto[]) => void
  addPhoto: (p: ProgressPhoto) => void
  setLoaded: (v: boolean) => void
  clear: () => void
}

export const useBodyStore = create<BodyStoreState>((set) => ({
  measurements: [],
  photos: [],
  loaded: false,

  setMeasurements: (measurements) => set({ measurements }),
  upsertMeasurement: (m) =>
    set((s) => {
      const rest = s.measurements.filter((x) => x.id !== m.id)
      return {
        measurements: [m, ...rest].sort(
          (a, b) => b.date.getTime() - a.date.getTime(),
        ),
      }
    }),
  removeMeasurement: (id) =>
    set((s) => ({ measurements: s.measurements.filter((x) => x.id !== id) })),
  setPhotos: (photos) => set({ photos }),
  addPhoto: (p) =>
    set((s) => ({
      photos: [p, ...s.photos.filter((x) => x.id !== p.id)].sort(
        (a, b) => b.date.getTime() - a.date.getTime(),
      ),
    })),
  setLoaded: (loaded) => set({ loaded }),
  clear: () => set({ measurements: [], photos: [], loaded: false }),
}))
