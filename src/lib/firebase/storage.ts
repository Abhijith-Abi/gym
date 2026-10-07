import { ref, type FirebaseStorage, type StorageReference } from 'firebase/storage'
import { getStorageClient } from './config'

/** Thin wrappers over the guarded Storage getter (C.2). */
export { getStorageClient }

/** Progress photos live under users/{uid}/progressPhotos/... (C.9). */
export function progressPhotoRef(
  storage: FirebaseStorage,
  uid: string,
  fileName: string,
): StorageReference {
  return ref(storage, `users/${uid}/progressPhotos/${fileName}`)
}

/** Thumbnail sibling path under users/{uid}/progressPhotos/thumbs/... (C.9). */
export function progressPhotoThumbRef(
  storage: FirebaseStorage,
  uid: string,
  fileName: string,
): StorageReference {
  return ref(storage, `users/${uid}/progressPhotos/thumbs/${fileName}`)
}

/** A raw ref under an arbitrary storage path (used for recursive delete). */
export function storagePathRef(
  storage: FirebaseStorage,
  path: string,
): StorageReference {
  return ref(storage, path)
}
