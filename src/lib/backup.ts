import { z } from 'zod'
import { format } from 'date-fns'
import { APP_SCHEMA_VERSION } from '@/lib/constants'

/**
 * Backup export/import core (FR-33, design C.11). PURE and framework-free so it
 * is fully unit-testable (the AC-14 matrix). The Firestore reads/writes live in
 * `backupService`; this module owns the envelope shape, the versioned filename,
 * Zod validation, the local safety-backup gate, and the schema-version policy
 * (reject newer, migrate older, proceed on equal) with a documented migrations
 * map.
 *
 * The envelope stores collections as JSON-serialisable records. Dates are
 * serialised as ISO strings for portability; converters re-hydrate them on
 * write. Validation here is STRUCTURAL (shape + version + per-doc identity), so
 * it stays independent of the Firestore Timestamp representation.
 */

/* ------------------------------------------------------------------ */
/* Envelope schema                                                     */
/* ------------------------------------------------------------------ */

/** A single stored doc: must at least carry a string id or be path-keyed. */
const backupDocSchema = z.record(z.string(), z.unknown())

export const BACKUP_COLLECTIONS = [
  'profile',
  'settings',
  'workoutPlans',
  'workoutSessions',
  'exerciseHistory',
  'personalRecords',
  'bodyMeasurements',
  'progressPhotos',
  'recoveryLogs',
  'goals',
  'achievements',
  'notes',
  'analyticsWeekly',
  'analyticsMonthly',
] as const

export type BackupCollection = (typeof BACKUP_COLLECTIONS)[number]

export const backupEnvelopeSchema = z.object({
  schemaVersion: z.number().int().min(1),
  exportedAt: z.string().min(1),
  uid: z.string().min(1),
  collections: z.record(z.string(), z.array(backupDocSchema)),
})

export type BackupEnvelope = z.infer<typeof backupEnvelopeSchema>
export type BackupCollections = BackupEnvelope['collections']

/* ------------------------------------------------------------------ */
/* Filename                                                            */
/* ------------------------------------------------------------------ */

/** `forgefit-backup-YYYY-MM-DD.json` (FR-33, AC-14). */
export function backupFileName(date: Date = new Date()): string {
  return `forgefit-backup-${format(date, 'yyyy-MM-dd')}.json`
}

/* ------------------------------------------------------------------ */
/* Build an export envelope                                            */
/* ------------------------------------------------------------------ */

export function buildEnvelope(
  uid: string,
  collections: BackupCollections,
  now: Date = new Date(),
): BackupEnvelope {
  return {
    schemaVersion: APP_SCHEMA_VERSION,
    exportedAt: now.toISOString(),
    uid,
    collections,
  }
}

/* ------------------------------------------------------------------ */
/* Migrations map (C.11)                                               */
/* ------------------------------------------------------------------ */

/**
 * `migrations[fromVersion]` upgrades an envelope's `collections` from
 * `fromVersion` to `fromVersion + 1`. Applied in sequence up to
 * APP_SCHEMA_VERSION. A missing step means "no upgrade path" → reject.
 *
 * Empty today because APP_SCHEMA_VERSION === 1 (no prior versions exist). When
 * the model changes, bump APP_SCHEMA_VERSION and register the step here.
 */
export const migrations: Record<
  number,
  (collections: BackupCollections) => BackupCollections
> = {}

/* ------------------------------------------------------------------ */
/* Import validation + version policy                                  */
/* ------------------------------------------------------------------ */

export type ImportDecision =
  | { kind: 'proceed'; envelope: BackupEnvelope }
  | { kind: 'reject'; reason: string }

const MSG_MALFORMED = 'This file is not a valid ForgeFit backup.'
const MSG_NEWER =
  'This backup was made by a newer version of ForgeFit. Update the app, then import again.'
const MSG_NO_MIGRATION =
  "This backup is from an older version that can't be upgraded automatically."

/**
 * Parse + validate raw import JSON and apply the schema-version policy (C.11).
 * Order (the caller takes the local safety backup BEFORE calling this):
 *   1. Zod-validate the envelope shape — malformed → reject, no writes.
 *   2. schemaVersion > APP_SCHEMA_VERSION → reject (newer), no writes.
 *   3. schemaVersion < APP_SCHEMA_VERSION → run the migrations map in sequence;
 *      a missing step → reject (no path), no writes.
 *   4. Re-validate the (possibly migrated) envelope against the current schema.
 *   5. schemaVersion === APP_SCHEMA_VERSION → proceed.
 */
export function validateAndPlanImport(raw: unknown): ImportDecision {
  const parsed = backupEnvelopeSchema.safeParse(raw)
  if (!parsed.success) {
    return { kind: 'reject', reason: MSG_MALFORMED }
  }

  const envelope = parsed.data

  if (envelope.schemaVersion > APP_SCHEMA_VERSION) {
    return { kind: 'reject', reason: MSG_NEWER }
  }

  if (envelope.schemaVersion < APP_SCHEMA_VERSION) {
    let collections = envelope.collections
    for (let v = envelope.schemaVersion; v < APP_SCHEMA_VERSION; v += 1) {
      const step = migrations[v]
      if (!step) return { kind: 'reject', reason: MSG_NO_MIGRATION }
      collections = step(collections)
    }
    const migrated: BackupEnvelope = {
      ...envelope,
      schemaVersion: APP_SCHEMA_VERSION,
      collections,
    }
    // Re-validate post-migration so a buggy migration can't write bad data.
    const revalidated = backupEnvelopeSchema.safeParse(migrated)
    if (!revalidated.success) {
      return { kind: 'reject', reason: MSG_NO_MIGRATION }
    }
    return { kind: 'proceed', envelope: revalidated.data }
  }

  return { kind: 'proceed', envelope }
}

/**
 * Parse a JSON string into an import decision. Non-JSON input is treated as a
 * malformed file (rejected before any write).
 */
export function parseImportJson(text: string): ImportDecision {
  let raw: unknown
  try {
    raw = JSON.parse(text)
  } catch {
    return { kind: 'reject', reason: MSG_MALFORMED }
  }
  return validateAndPlanImport(raw)
}

export const BACKUP_MESSAGES = {
  malformed: MSG_MALFORMED,
  newer: MSG_NEWER,
  noMigration: MSG_NO_MIGRATION,
} as const
