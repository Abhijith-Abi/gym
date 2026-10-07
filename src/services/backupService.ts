import {
  collection,
  deleteDoc,
  doc as docRef,
  getDocs,
  Timestamp,
  writeBatch,
  type DocumentData,
  type Firestore,
} from 'firebase/firestore'
import {
  deleteObject,
  listAll,
  type FirebaseStorage,
} from 'firebase/storage'
import { getDb } from '@/lib/firebase/config'
import { getStorageClient, storagePathRef } from '@/lib/firebase/storage'
import {
  BACKUP_COLLECTIONS,
  buildEnvelope,
  parseImportJson,
  type BackupCollection,
  type BackupCollections,
  type BackupEnvelope,
  type ImportDecision,
} from '@/lib/backup'
import type { ServiceResult } from '@/types'
import { fail, mapError, notConfigured, ok } from './serviceResult'

/**
 * Backup export / import + delete account (FR-33, design C.11). The versioning
 * POLICY and validation live in the pure `src/lib/backup.ts` (unit-tested per
 * the AC-14 matrix); this service does the Firestore gathering/writing and the
 * Storage/Auth cleanup. Guards on a non-null client; empty env short-circuits
 * (C.2) so the Settings path never crashes without creds.
 *
 * Date handling: Firestore raw docs carry Timestamps. For a portable JSON
 * backup, Timestamps are serialised to ISO strings on export and re-hydrated to
 * Timestamps on import. Validation is STRUCTURAL (shape + version), independent
 * of the date representation (C.11).
 */

/* ------------------------------------------------------------------ */
/* Export                                                              */
/* ------------------------------------------------------------------ */

/**
 * Gather every user collection into a versioned envelope. Reads raw docs (no
 * converter) and serialises Timestamps to ISO strings so the JSON is portable.
 */
export async function exportBackup(
  uid: string,
): Promise<ServiceResult<BackupEnvelope>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const collections: BackupCollections = {}
    for (const name of BACKUP_COLLECTIONS) {
      collections[name] = await gatherCollection(db, uid, name)
    }
    return ok(buildEnvelope(uid, collections))
  } catch (e) {
    return mapError(e)
  }
}

/** Serialise an envelope to the download JSON string. */
export function serializeBackup(envelope: BackupEnvelope): string {
  return JSON.stringify(envelope, null, 2)
}

async function gatherCollection(
  db: Firestore,
  uid: string,
  name: BackupCollection,
): Promise<Record<string, unknown>[]> {
  // profile/settings are single docs under a nested collection; the rest are
  // flat collections directly under the user doc. All resolve to a collection
  // path we can enumerate.
  return gatherDocs(db, uid, name)
}

async function gatherDocs(
  db: Firestore,
  uid: string,
  name: string,
): Promise<Record<string, unknown>[]> {
  const snap = await getDocs(collection(db, 'users', uid, name))
  return snap.docs.map((d) => ({ id: d.id, ...serializeDoc(d.data()) }))
}

/** Shallow-serialise a doc: Timestamp → ISO string, recurse into plain objects. */
function serializeDoc(data: DocumentData): DocumentData {
  const out: DocumentData = {}
  for (const [k, v] of Object.entries(data)) {
    out[k] = serializeValue(v)
  }
  return out
}

function serializeValue(v: unknown): unknown {
  if (v === null || v === undefined) return v
  if (typeof v === 'object') {
    // Firestore Timestamp has toDate()/seconds; serialise to ISO.
    const maybeTs = v as { toDate?: () => Date }
    if (typeof maybeTs.toDate === 'function') {
      return maybeTs.toDate().toISOString()
    }
    if (Array.isArray(v)) return v.map(serializeValue)
    return serializeDoc(v as DocumentData)
  }
  return v
}

/* ------------------------------------------------------------------ */
/* Import                                                              */
/* ------------------------------------------------------------------ */

export interface ImportResult {
  importedCollections: number
  importedDocs: number
}

/**
 * Validate + import a backup JSON string (C.11). The caller ALWAYS takes a
 * local safety backup first (see `importBackupWithSafety`). This function:
 *   1. parses + validates + applies the version policy (pure `parseImportJson`);
 *   2. on `proceed`, writes each collection via a batched upsert, NEVER
 *      overwriting a COMPLETED session (data-integrity, FR-39).
 */
export async function importBackup(
  uid: string,
  json: string,
): Promise<ServiceResult<ImportResult>> {
  const db = getDb()
  if (!db) return notConfigured()

  const decision: ImportDecision = parseImportJson(json)
  if (decision.kind === 'reject') {
    return fail('backup/rejected', decision.reason)
  }

  try {
    const result = await writeEnvelope(db, uid, decision.envelope)
    return ok(result)
  } catch (e) {
    return mapError(e)
  }
}

/**
 * The full import flow (AC-14): take a local safety backup FIRST, then import.
 * Returns both the safety backup (so the UI can offer to download it) and the
 * import result. On a rejected import, the safety backup is still returned and
 * NO write happens.
 */
export async function importBackupWithSafety(
  uid: string,
  json: string,
): Promise<
  ServiceResult<{ safety: BackupEnvelope; result: ImportResult }>
> {
  const db = getDb()
  if (!db) return notConfigured()

  // 1. ALWAYS take the local safety backup before any version check / write.
  const safety = await exportBackup(uid)
  if (!safety.ok) return safety

  // 2. Validate + apply the version policy + write.
  const imported = await importBackup(uid, json)
  if (!imported.ok) return imported

  return ok({ safety: safety.data, result: imported.data })
}

async function writeEnvelope(
  db: Firestore,
  uid: string,
  envelope: BackupEnvelope,
): Promise<ImportResult> {
  let importedDocs = 0
  let importedCollections = 0
  const BATCH_LIMIT = 400

  for (const [name, docs] of Object.entries(envelope.collections)) {
    if (docs.length === 0) continue
    importedCollections += 1

    // Which existing docs are COMPLETED sessions we must not overwrite.
    const frozen =
      name === 'workoutSessions'
        ? await completedSessionIds(db, uid)
        : new Set<string>()

    let batch = writeBatch(db)
    let batched = 0
    for (const raw of docs) {
      const record = raw as Record<string, unknown>
      const id = String(record.id ?? '')
      if (!id || frozen.has(id)) continue // never overwrite a completed session

      const { id: _omit, ...fields } = record
      void _omit
      batch.set(
        docRefFor(db, uid, name, id),
        deserializeValues(fields),
        { merge: true },
      )
      batched += 1
      importedDocs += 1
      if (batched >= BATCH_LIMIT) {
        await batch.commit()
        batch = writeBatch(db)
        batched = 0
      }
    }
    if (batched > 0) await batch.commit()
  }

  return { importedCollections, importedDocs }
}

function docRefFor(db: Firestore, uid: string, name: string, id: string) {
  return docRef(db, 'users', uid, name, id)
}

async function completedSessionIds(
  db: Firestore,
  uid: string,
): Promise<Set<string>> {
  const snap = await getDocs(collection(db, 'users', uid, 'workoutSessions'))
  const ids = new Set<string>()
  for (const d of snap.docs) {
    if (d.data().status === 'COMPLETED') ids.add(d.id)
  }
  return ids
}

/** Re-hydrate ISO date strings into Firestore Timestamps for the write. */
function deserializeValues(fields: Record<string, unknown>): DocumentData {
  const out: DocumentData = {}
  for (const [k, v] of Object.entries(fields)) {
    out[k] = deserializeValue(v)
  }
  return out
}

const ISO_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/

function deserializeValue(v: unknown): unknown {
  if (typeof v === 'string' && ISO_RE.test(v)) {
    // ISO date → Timestamp so Firestore stores a native timestamp on re-import.
    return Timestamp.fromDate(new Date(v))
  }
  if (Array.isArray(v)) return v.map(deserializeValue)
  if (v && typeof v === 'object') {
    return deserializeValues(v as Record<string, unknown>)
  }
  return v
}

/* ------------------------------------------------------------------ */
/* Delete account                                                      */
/* ------------------------------------------------------------------ */

/**
 * Delete the user's reachable Firestore docs + Storage objects (FR-33,
 * Assumption 5). The Auth-user deletion (with its reauth flow) is handled by
 * the caller via authService; the authoritative recursive cleanup is the
 * optional Cloud Function `functions/deleteUserData`. No admin creds ship here.
 */
export async function deleteUserData(
  uid: string,
): Promise<ServiceResult<void>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    for (const name of BACKUP_COLLECTIONS) {
      await deleteCollection(db, uid, name)
    }
    const storage = getStorageClient()
    if (storage) await deleteUserStorage(storage, uid)
    return ok(undefined)
  } catch (e) {
    return mapError(e)
  }
}

async function deleteCollection(
  db: Firestore,
  uid: string,
  name: string,
): Promise<void> {
  const snap = await getDocs(collection(db, 'users', uid, name))
  for (const d of snap.docs) {
    await deleteDoc(d.ref)
  }
}

async function deleteUserStorage(
  storage: FirebaseStorage,
  uid: string,
): Promise<void> {
  const root = storagePathRef(storage, `users/${uid}/progressPhotos`)
  await deleteFolderRecursive(root)
  const thumbs = storagePathRef(storage, `users/${uid}/progressPhotos/thumbs`)
  await deleteFolderRecursive(thumbs)
}

async function deleteFolderRecursive(
  ref: ReturnType<typeof storagePathRef>,
): Promise<void> {
  const listing = await listAll(ref)
  for (const item of listing.items) {
    await deleteObject(item)
  }
  for (const prefix of listing.prefixes) {
    await deleteFolderRecursive(prefix)
  }
}
