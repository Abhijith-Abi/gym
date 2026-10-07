import { getDb } from '@/lib/firebase/config'
import type { Exercise, ServiceResult } from '@/types'
import { notConfigured, ok } from './serviceResult'

/**
 * Stub service (FEAT-001). Custom-exercise CRUD + library sync land later; the
 * seeded library is static data (src/data/exercises.ts).
 */
export async function listCustomExercises(
  _uid: string,
): Promise<ServiceResult<Exercise[]>> {
  const db = getDb()
  if (!db) return notConfigured()
  return ok([])
}
