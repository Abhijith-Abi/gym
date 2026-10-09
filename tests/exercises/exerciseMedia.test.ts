import { describe, it, expect } from 'vitest'
import { SEED_EXERCISES, EXERCISES_BY_ID } from '@/data/exercises'
import {
  EXERCISE_MEDIA_MANIFEST,
  getExerciseMedia,
} from '@/data/exerciseMedia'
import {
  normalizeExternalExercise,
  fetchExerciseDataset,
  matchSeedExercise,
  searchExerciseDataset,
} from '@/lib/exercises/exerciseDbApi'
import { SEED_PLAN_DAYS } from '@/data/workoutPlan'

describe('Exercise Media Manifest & Free Exercise DB API Integration', () => {
  it('preserves all 59 canonical seed exercise IDs without alteration', () => {
    expect(SEED_EXERCISES.length).toBe(59)
    const seedIds = SEED_EXERCISES.map((e) => e.id)
    const uniqueIds = new Set(seedIds)
    expect(uniqueIds.size).toBe(59)

    // Verify key canonical IDs specified in prompt
    const requiredCanonicalIds = [
      'flat-barbell-bench',
      'incline-db-press',
      'romanian-deadlift',
      'back-squat',
      'hanging-leg-raise',
      'mountain-climbers',
      'burpees',
      'kb-swing',
      'cat-cow',
      'worlds-greatest-stretch',
    ]

    for (const id of requiredCanonicalIds) {
      expect(EXERCISES_BY_ID[id]).toBeDefined()
      expect(EXERCISES_BY_ID[id].id).toBe(id)
    }
  })

  it('contains verified media or documented fallbacks for 100% of seed exercises', () => {
    for (const seed of SEED_EXERCISES) {
      const media = EXERCISE_MEDIA_MANIFEST[seed.id]
      expect(media, `Missing media manifest for ${seed.id}`).toBeDefined()
      expect(media.exerciseId).toBe(seed.id)
      expect(media.name).toBe(seed.name)

      if (media.mediaVerified) {
        expect(media.confidence).toBe('exact')
        expect(
          media.maleVideoUrl || media.videoUrl || media.femaleVideoUrl,
        ).toMatch(/^https:\/\//)
        expect(
          media.maleThumbnailUrl || media.thumbnailUrl || media.femaleThumbnailUrl,
        ).toMatch(/^https:\/\//)
        expect(media.mediaSource).toContain('Free Exercise DB')
      } else {
        expect(media.confidence).toBe('fallback')
        expect(media.mediaVerified).toBe(false)
        expect(media.steps?.length ?? 0).toBeGreaterThan(0)
      }
    }
  })

  it('provides safe fallback for custom exercises or unverified IDs', () => {
    const customMedia = getExerciseMedia('my-custom-bicep-curl', 'Custom 21s Bicep Curl')
    expect(customMedia).toBeDefined()
    expect(customMedia.exerciseId).toBe('my-custom-bicep-curl')
    expect(customMedia.name).toBe('Custom 21s Bicep Curl')
    expect(customMedia.mediaVerified).toBe(false)
    expect(customMedia.confidence).toBe('fallback')
    expect(customMedia.formCues?.length).toBeGreaterThan(0)
    expect(customMedia.breathing).toBeDefined()
  })

  it('validates external API JSON structures with normalizeExternalExercise', () => {
    const rawValid = {
      id: '0025',
      name: 'Barbell Bench Press',
      aliases: ['bench press'],
      bodyPart: 'chest',
      target: 'pectorals',
      secondaryMuscles: ['triceps', 'shoulders'],
      equipment: 'barbell',
      difficulty: 'intermediate',
      compound: true,
      unilateral: false,
      instructions: 'Lie flat on the bench and press the barbell up.',
      steps: ['Setup on bench', 'Lower to chest', 'Press to lockout'],
      formCues: ['Retract scapulae', 'Keep wrists stacked'],
      commonMistakes: ['Bouncing bar off chest'],
      breathing: 'Inhale down, exhale up.',
      videos: {
        male: 'https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-bench-press.mp4',
        female: 'https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/barbell-bench-press.mp4',
      },
      thumbnails: {
        male: 'https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-bench-press.jpg',
        female: 'https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/barbell-bench-press.jpg',
      },
    }

    const normalized = normalizeExternalExercise(rawValid, 'flat-barbell-bench')
    expect(normalized).not.toBeNull()
    expect(normalized?.exerciseId).toBe('flat-barbell-bench')
    expect(normalized?.matchedExternalId).toBe('0025')
    expect(normalized?.maleVideoUrl).toContain('barbell-bench-press.mp4')
    expect(normalized?.femaleVideoUrl).toContain('barbell-bench-press.mp4')
    expect(normalized?.maleThumbnailUrl).toContain('barbell-bench-press.jpg')
    expect(normalized?.mediaVerified).toBe(true)

    // Malformed data
    const rawInvalid = { name: 123, invalidField: true }
    expect(normalizeExternalExercise(rawInvalid)).toBeNull()
  })

  it('handles API timeout / offline fallbacks gracefully', async () => {
    // Should return manifest dataset without crashing even if external fetch fails
    const dataset = await fetchExerciseDataset({ timeoutMs: 100 })
    expect(dataset.length).toBeGreaterThan(0)
    expect(dataset.some((e) => e.exerciseId === 'flat-barbell-bench')).toBe(true)
  })

  it('searches exercise dataset by query string', async () => {
    const results = await searchExerciseDataset({ query: 'bench' })
    expect(results.length).toBeGreaterThan(0)
    expect(results.some((r) => r.name.toLowerCase().includes('bench'))).toBe(true)
  })

  it('deterministically matches seed exercises', () => {
    const seed = EXERCISES_BY_ID['flat-barbell-bench']
    const matched = matchSeedExercise(seed)
    expect(matched.exerciseId).toBe('flat-barbell-bench')
    expect(matched.mediaVerified).toBe(true)
    expect(matched.videoUrl).toBeDefined()
  })

  it('verifies all MON-SUN workout plan entries resolve to valid exercises with media', () => {
    const days = Object.values(SEED_PLAN_DAYS)
    for (const day of days) {
      if (day.isRest) continue
      for (const entry of day.entries) {
        const exercise = EXERCISES_BY_ID[entry.exerciseId]
        expect(
          exercise,
          `Plan day ${day.workoutName} references missing exercise ${entry.exerciseId}`,
        ).toBeDefined()

        const media = getExerciseMedia(entry.exerciseId)
        expect(media).toBeDefined()
        expect(media.exerciseId).toBe(entry.exerciseId)
      }
    }
  })

  it('verifies exercise substitution integrity', () => {
    for (const seed of SEED_EXERCISES) {
      for (const altId of seed.alternatives) {
        const alt = EXERCISES_BY_ID[altId]
        expect(
          alt,
          `Exercise ${seed.id} has invalid alternative reference ${altId}`,
        ).toBeDefined()

        const altMedia = getExerciseMedia(altId)
        expect(altMedia).toBeDefined()
      }
    }
  })
})
