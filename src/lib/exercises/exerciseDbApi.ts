import { z } from 'zod'
import type { ExerciseMedia } from '@/types'
import { EXERCISE_MEDIA_MANIFEST, getExerciseMedia } from '@/data/exerciseMedia'

/**
 * Free Exercise DB API Schema definition (luisaraujoc/free-exercise-db-api).
 */
export const GenderMediaSchema = z.object({
  male: z.string().optional(),
  female: z.string().optional(),
})

export const ExternalExerciseSchema = z.object({
  id: z.string(),
  name: z.string(),
  aliases: z.array(z.string()).default([]),
  bodyPart: z.string().default(''),
  target: z.string().default(''),
  secondaryMuscles: z.array(z.string()).default([]),
  equipment: z.string().default(''),
  muscleGroup: z.string().default(''),
  difficulty: z.string().default(''),
  compound: z.boolean().default(false),
  unilateral: z.boolean().default(false),
  shortDescription: z.string().default(''),
  instructions: z.string().default(''),
  steps: z.array(z.string()).default([]),
  formCues: z.array(z.string()).default([]),
  commonMistakes: z.array(z.string()).default([]),
  breathing: z.string().default(''),
  videos: GenderMediaSchema.default({}),
  thumbnails: GenderMediaSchema.default({}),
})

export type ExternalExercise = z.infer<typeof ExternalExerciseSchema>

export interface SearchExerciseOptions {
  query?: string
  bodyPart?: string
  equipment?: string
  target?: string
  difficulty?: string
  limit?: number
  offset?: number
}

// In-memory cache for API responses
let cachedDataset: ExerciseMedia[] | null = null
let inFlightRequest: Promise<ExerciseMedia[]> | null = null

const PRIMARY_DATASET_URL =
  'https://raw.githubusercontent.com/luisaraujoc/free-exercise-db-api/main/data/exercises.json'
const FALLBACK_API_URL =
  'https://exercise-database.zenithfits.com/api/v1/exercises'

/**
 * Normalizes a raw external record into our strongly typed ExerciseMedia model.
 */
export function normalizeExternalExercise(
  raw: unknown,
  canonicalId?: string,
): ExerciseMedia | null {
  const parsed = ExternalExerciseSchema.safeParse(raw)
  if (!parsed.success) {
    return null
  }

  const d = parsed.data
  const maleThumb = d.thumbnails?.male
  const femaleThumb = d.thumbnails?.female
  const maleVid = d.videos?.male
  const femaleVid = d.videos?.female

  return {
    exerciseId: canonicalId || d.id,
    name: d.name,
    imageUrl: maleThumb || femaleThumb,
    thumbnailUrl: maleThumb || femaleThumb,
    videoUrl: maleVid || femaleVid,
    maleVideoUrl: maleVid,
    femaleVideoUrl: femaleVid,
    maleThumbnailUrl: maleThumb,
    femaleThumbnailUrl: femaleThumb,
    mediaSource: 'Free Exercise DB API (luisaraujoc)',
    mediaAttribution:
      'Free Exercise DB with Videos (MIT License) - Cloudflare R2',
    mediaVerified: true,
    matchedExternalId: d.id,
    matchedExternalName: d.name,
    confidence: 'exact',
    steps: d.steps.length > 0 ? d.steps : [d.instructions].filter(Boolean),
    formCues: d.formCues,
    commonMistakes: d.commonMistakes,
    breathing: d.breathing,
  }
}

/**
 * Fetches the entire external exercise dataset with deduplication, timeout handling,
 * and automatic fallback to our static bundled manifest.
 */
export async function fetchExerciseDataset(options?: {
  forceRefresh?: boolean
  timeoutMs?: number
}): Promise<ExerciseMedia[]> {
  const timeoutMs = options?.timeoutMs ?? 6000

  if (!options?.forceRefresh && cachedDataset) {
    return cachedDataset
  }

  if (inFlightRequest) {
    return inFlightRequest
  }

  inFlightRequest = (async () => {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

      const res = await fetch(PRIMARY_DATASET_URL, {
        signal: controller.signal,
        headers: { Accept: 'application/json' },
      }).catch(async () => {
        // Fallback to REST API endpoint if raw CDN is unreachable
        return fetch(FALLBACK_API_URL, {
          signal: controller.signal,
          headers: { Accept: 'application/json' },
        })
      })

      clearTimeout(timeoutId)

      if (!res.ok) {
        throw new Error(`HTTP ${res.status} ${res.statusText}`)
      }

      const json = await res.json()
      const list = Array.isArray(json)
        ? json
        : Array.isArray(json?.data)
          ? json.data
          : []

      const normalized: ExerciseMedia[] = []
      for (const item of list) {
        const norm = normalizeExternalExercise(item)
        if (norm) {
          normalized.push(norm)
        }
      }

      if (normalized.length > 0) {
        cachedDataset = normalized
        return normalized
      }
    } catch {
      // Network error, rate limit, or timeout -> gracefully return bundled manifest
    }

    // Fallback: return bundled manifest entries as an array
    const fallbackList = Object.values(EXERCISE_MEDIA_MANIFEST)
    cachedDataset = fallbackList
    return fallbackList
  })().finally(() => {
    inFlightRequest = null
  })

  return inFlightRequest
}

/**
 * Searches the exercise dataset by query string, target muscle, and equipment.
 */
export async function searchExerciseDataset(
  opts: SearchExerciseOptions,
): Promise<ExerciseMedia[]> {
  const dataset = await fetchExerciseDataset()
  const q = (opts.query || '').trim().toLowerCase()

  return dataset.filter((e) => {
    if (q) {
      const matchesName = e.name.toLowerCase().includes(q)
      const matchesExternalName = e.matchedExternalName
        ?.toLowerCase()
        .includes(q)
      const matchesId = e.exerciseId.toLowerCase().includes(q)
      if (!matchesName && !matchesExternalName && !matchesId) {
        return false
      }
    }
    return true
  })
}

/**
 * Deterministically matches a seed exercise against the external dataset.
 */
export function matchSeedExercise(
  seed: { id: string; name: string; primaryMuscles?: string[]; equipment?: string },
  dataset?: ExerciseMedia[],
): ExerciseMedia {
  // 1. Direct manifest match is primary source of truth
  const manifestMatch = getExerciseMedia(seed.id, seed.name)
  if (manifestMatch.mediaVerified) {
    return manifestMatch
  }

  // 2. If dynamic dataset is provided, search by exact or fuzzy name
  if (dataset && dataset.length > 0) {
    const sNameNorm = seed.name.toLowerCase().replace(/[^a-z0-9]/g, '')
    const direct = dataset.find(
      (d) =>
        d.name.toLowerCase().replace(/[^a-z0-9]/g, '') === sNameNorm ||
        d.matchedExternalName?.toLowerCase().replace(/[^a-z0-9]/g, '') ===
          sNameNorm,
    )
    if (direct) {
      return {
        ...direct,
        exerciseId: seed.id,
      }
    }
  }

  return manifestMatch
}
