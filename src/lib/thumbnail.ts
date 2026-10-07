/**
 * Client-side progress-photo thumbnail generation (FR-23, design C.9 / FEAT-005
 * step 3). An offscreen canvas downscales the source image to a bounded box and
 * encodes it as an `image/*` Blob so the Storage write-rule `contentType` check
 * passes — there is NO server-side image processing and NO non-image artifact
 * is written to Storage.
 *
 * These helpers run only in the browser (they need canvas + createImageBitmap).
 * The pure sizing math is extracted so it can be unit-tested without a DOM, and
 * `blobToImageType` lets a test assert a produced blob is image/*.
 */

export const THUMB_MAX_EDGE = 320
export const THUMB_MIME = 'image/jpeg'
export const THUMB_QUALITY = 0.8

export interface Dimensions {
  width: number
  height: number
}

/** Scale (w,h) so the longest edge is <= maxEdge, preserving aspect ratio. */
export function fitWithin(
  source: Dimensions,
  maxEdge: number = THUMB_MAX_EDGE,
): Dimensions {
  const longest = Math.max(source.width, source.height)
  if (longest <= maxEdge || longest === 0) {
    return { width: Math.round(source.width), height: Math.round(source.height) }
  }
  const scale = maxEdge / longest
  return {
    width: Math.max(1, Math.round(source.width * scale)),
    height: Math.max(1, Math.round(source.height * scale)),
  }
}

/** The MIME type reported by a Blob (handy for the image/* assertion). */
export function blobToImageType(blob: Blob): string {
  return blob.type
}

/** Whether a value is a Blob with an image/* MIME type. */
export function isImageBlob(value: unknown): value is Blob {
  return (
    typeof Blob !== 'undefined' &&
    value instanceof Blob &&
    value.type.startsWith('image/')
  )
}

/**
 * Downscale a source image file/blob to a thumbnail Blob via an offscreen
 * canvas. Browser-only. Returns an `image/*` Blob (THUMB_MIME).
 */
export async function generateThumbnailBlob(
  source: Blob,
  maxEdge: number = THUMB_MAX_EDGE,
): Promise<Blob> {
  if (typeof document === 'undefined' || typeof createImageBitmap === 'undefined') {
    throw new Error('Thumbnail generation requires a browser environment.')
  }
  const bitmap = await createImageBitmap(source)
  const target = fitWithin(
    { width: bitmap.width, height: bitmap.height },
    maxEdge,
  )
  const canvas = document.createElement('canvas')
  canvas.width = target.width
  canvas.height = target.height
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    bitmap.close()
    throw new Error('Could not create a 2D drawing context.')
  }
  ctx.drawImage(bitmap, 0, 0, target.width, target.height)
  bitmap.close()

  const blob = await new Promise<Blob | null>((resolve) => {
    canvas.toBlob(resolve, THUMB_MIME, THUMB_QUALITY)
  })
  if (!blob) throw new Error('Could not encode the thumbnail image.')
  return blob
}
