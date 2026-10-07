import {
  deleteDoc,
  getDocs,
  setDoc,
} from 'firebase/firestore'
import { getDownloadURL, uploadBytes } from 'firebase/storage'
import { getDb } from '@/lib/firebase/config'
import { getStorageClient } from '@/lib/firebase/storage'
import {
  bodyMeasurementConverter,
  progressPhotoConverter,
} from '@/lib/firebase/converters'
import {
  bodyMeasurementDocRef,
  bodyMeasurementsCollection,
  progressPhotoDocRef,
  progressPhotosCollection,
} from '@/lib/firebase/firestore'
import {
  progressPhotoRef,
  progressPhotoThumbRef,
  storagePathRef,
} from '@/lib/firebase/storage'
import { bodyMeasurementsTrendQuery } from '@/lib/firebase/queries'
import { generateThumbnailBlob, isImageBlob } from '@/lib/thumbnail'
import type {
  BodyMeasurement,
  ProgressPhoto,
  ServiceResult,
} from '@/types'
import { fail, mapError, notConfigured, ok } from './serviceResult'

/**
 * Body tracking + progress photos (FR-22/23, design C.16 step 3). Measurement
 * CRUD is single-doc idempotent SDK writes (C.7 queue-authority boundary).
 * Progress-photo upload generates a CLIENT-SIDE thumbnail and uploads both the
 * full image and the thumbnail to Storage, then writes the Firestore metadata
 * doc. Every call guards on a non-null client; under empty env (or absent
 * Storage creds) it short-circuits to firebase/not-configured — nothing throws
 * at import/build and the body/photos path never crashes without creds.
 */

/* ------------------------------------------------------------------ */
/* Body measurements                                                   */
/* ------------------------------------------------------------------ */

/** Bounded, newest-first body-measurement trend (C.4). */
export async function listBodyMeasurements(
  uid: string,
): Promise<ServiceResult<BodyMeasurement[]>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const col = bodyMeasurementsCollection(db, uid).withConverter(
      bodyMeasurementConverter,
    )
    const snap = await getDocs(bodyMeasurementsTrendQuery(col))
    return ok(snap.docs.map((d) => d.data()))
  } catch (e) {
    return mapError(e)
  }
}

/** Create or merge a body-measurement doc (single-doc idempotent write). */
export async function upsertBodyMeasurement(
  measurement: BodyMeasurement,
): Promise<ServiceResult<void>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const ref = bodyMeasurementDocRef(
      db,
      measurement.uid,
      measurement.id,
    ).withConverter(bodyMeasurementConverter)
    await setDoc(ref, measurement, { merge: true })
    return ok(undefined)
  } catch (e) {
    return mapError(e)
  }
}

export async function deleteBodyMeasurement(
  uid: string,
  id: string,
): Promise<ServiceResult<void>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    await deleteDoc(bodyMeasurementDocRef(db, uid, id))
    return ok(undefined)
  } catch (e) {
    return mapError(e)
  }
}

/* ------------------------------------------------------------------ */
/* Progress photos                                                     */
/* ------------------------------------------------------------------ */

/** Bounded, newest-first progress-photo gallery metadata. */
export async function listProgressPhotos(
  uid: string,
): Promise<ServiceResult<ProgressPhoto[]>> {
  const db = getDb()
  if (!db) return notConfigured()
  try {
    const col = progressPhotosCollection(db, uid).withConverter(
      progressPhotoConverter,
    )
    const snap = await getDocs(bodyMeasurementsTrendQuery(col))
    return ok(snap.docs.map((d) => d.data()))
  } catch (e) {
    return mapError(e)
  }
}

export interface UploadProgressPhotoInput {
  uid: string
  id: string
  date: Date
  file: Blob
  pose?: string
  note?: string
}

/**
 * Upload a progress photo + its client-generated thumbnail to Storage, then
 * persist the metadata doc. Short-circuits to firebase/not-configured when
 * Firestore OR Storage is absent (no creds) so the body/photos path never
 * crashes at build/dev. Rejects non-image source blobs before any upload.
 */
export async function uploadProgressPhoto(
  input: UploadProgressPhotoInput,
): Promise<ServiceResult<ProgressPhoto>> {
  const db = getDb()
  const storage = getStorageClient()
  if (!db || !storage) return notConfigured()

  if (!isImageBlob(input.file)) {
    return fail('storage/invalid-type', 'Please choose an image file.')
  }

  try {
    const fullName = `${input.id}.jpg`
    const thumbName = `${input.id}.jpg`

    const fullRef = progressPhotoRef(storage, input.uid, fullName)
    const thumbRef = progressPhotoThumbRef(storage, input.uid, thumbName)

    const thumbBlob = await generateThumbnailBlob(input.file)

    await uploadBytes(fullRef, input.file, { contentType: input.file.type })
    await uploadBytes(thumbRef, thumbBlob, { contentType: thumbBlob.type })

    const photo: ProgressPhoto = {
      id: input.id,
      uid: input.uid,
      date: input.date,
      storagePath: fullRef.fullPath,
      thumbPath: thumbRef.fullPath,
      ...(input.pose !== undefined ? { pose: input.pose } : {}),
      ...(input.note !== undefined ? { note: input.note } : {}),
      createdAt: new Date(),
    }

    const docRef = progressPhotoDocRef(db, input.uid, input.id).withConverter(
      progressPhotoConverter,
    )
    await setDoc(docRef, photo, { merge: true })
    return ok(photo)
  } catch (e) {
    return mapError(e)
  }
}

/** Resolve a Storage path to a download URL (gallery render). */
export async function getPhotoUrl(
  path: string,
): Promise<ServiceResult<string>> {
  const storage = getStorageClient()
  if (!storage) return notConfigured()
  try {
    const url = await getDownloadURL(storagePathRef(storage, path))
    return ok(url)
  } catch (e) {
    return mapError(e)
  }
}
