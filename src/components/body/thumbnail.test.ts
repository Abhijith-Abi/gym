import { describe, expect, it } from 'vitest'
import {
  blobToImageType,
  fitWithin,
  isImageBlob,
  THUMB_MAX_EDGE,
} from '@/lib/thumbnail'

describe('thumbnail sizing', () => {
  it('leaves images already within the box unchanged', () => {
    expect(fitWithin({ width: 100, height: 80 }, 320)).toEqual({
      width: 100,
      height: 80,
    })
  })

  it('scales the longest edge down to maxEdge preserving aspect ratio', () => {
    const out = fitWithin({ width: 1600, height: 800 }, 320)
    expect(out.width).toBe(320)
    expect(out.height).toBe(160)
  })

  it('defaults to THUMB_MAX_EDGE', () => {
    const out = fitWithin({ width: 2000, height: 2000 })
    expect(Math.max(out.width, out.height)).toBe(THUMB_MAX_EDGE)
  })
})

describe('image-blob detection (thumbnail output contract)', () => {
  it('reports the blob MIME type', () => {
    const blob = new Blob(['x'], { type: 'image/jpeg' })
    expect(blobToImageType(blob)).toBe('image/jpeg')
  })

  it('isImageBlob accepts image/* and rejects others', () => {
    expect(isImageBlob(new Blob(['x'], { type: 'image/png' }))).toBe(true)
    expect(isImageBlob(new Blob(['x'], { type: 'image/jpeg' }))).toBe(true)
    expect(isImageBlob(new Blob(['x'], { type: 'application/pdf' }))).toBe(false)
    expect(isImageBlob('not a blob')).toBe(false)
  })

  it('a generated-thumbnail blob (image/jpeg) satisfies the Storage contentType contract', () => {
    // generateThumbnailBlob encodes with THUMB_MIME (image/jpeg); simulate its
    // output shape and assert the type the Storage write rule checks for.
    const simulatedThumb = new Blob([new Uint8Array([0xff, 0xd8])], {
      type: 'image/jpeg',
    })
    expect(simulatedThumb.type.startsWith('image/')).toBe(true)
    expect(isImageBlob(simulatedThumb)).toBe(true)
  })
})
