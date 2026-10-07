/** bodyMeasurements/{id} (C.3). */
export interface BodyMeasurement {
  id: string
  uid: string
  date: Date
  weightKg?: number
  bodyFatPct?: number
  /** chest, waist, hips, armL, armR, thighL, thighR, … (cm). */
  measurements: Record<string, number>
  note?: string
}

/** progressPhotos/{id} (C.3). */
export interface ProgressPhoto {
  id: string
  uid: string
  date: Date
  storagePath: string
  thumbPath?: string
  pose?: string
  note?: string
  createdAt: Date
}

/**
 * recoveryLogs/{date} (date = yyyy-MM-dd) (C.3).
 * recoveryScore: 0-100, higher = better recovered (training insight, not medical).
 */
export interface RecoveryLog {
  uid: string
  date: string
  sleepHours?: number
  energy: number
  stress: number
  soreness: number
  motivation: number
  recoveryScore: number
  note?: string
  hydrationMl: number
  hydrationTargetMl: number
}
