'use client'

import { useEffect, useRef, useState } from 'react'
import { format } from 'date-fns'
import { ImagePlus } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { useBodyStore } from '@/store/bodyStore'
import * as bodyService from '@/services/bodyService'
import { Button } from '@/components/ui/button'
import { EmptyState } from '@/components/ui/empty-state'
import type { ProgressPhoto } from '@/types'

/**
 * Progress-photo gallery (FR-23, design C.16 step 3). Selecting an image
 * generates a CLIENT-SIDE thumbnail (bodyService → src/lib/thumbnail) and
 * uploads both to Storage, then records the metadata doc. Must NOT crash
 * without Storage creds — the service short-circuits to firebase/not-configured
 * and the UI shows a friendly message. Thumbnails are resolved to download URLs
 * lazily.
 */
export function ProgressPhotoGallery() {
  const { uid } = useAuth()
  const photos = useBodyStore((s) => s.photos)
  const setPhotos = useBodyStore((s) => s.setPhotos)
  const addPhoto = useBodyStore((s) => s.addPhoto)
  const inputRef = useRef<HTMLInputElement>(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [urls, setUrls] = useState<Record<string, string>>({})

  useEffect(() => {
    if (!uid) return
    let active = true
    void bodyService.listProgressPhotos(uid).then((r) => {
      if (active && r.ok) setPhotos(r.data)
    })
    return () => {
      active = false
    }
  }, [uid, setPhotos])

  useEffect(() => {
    let active = true
    for (const p of photos) {
      const key = p.thumbPath ?? p.storagePath
      if (!key || urls[p.id]) continue
      void bodyService.getPhotoUrl(key).then((r) => {
        if (active && r.ok) setUrls((prev) => ({ ...prev, [p.id]: r.data }))
      })
    }
    return () => {
      active = false
    }
  }, [photos, urls])

  async function onSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file || !uid) return
    setBusy(true)
    setError(null)
    const res = await bodyService.uploadProgressPhoto({
      uid,
      id: `pp_${crypto.randomUUID()}`,
      date: new Date(),
      file,
    })
    setBusy(false)
    if (!res.ok) {
      setError(res.message)
      return
    }
    addPhoto(res.data)
  }

  return (
    <div className="flex flex-col gap-4">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={(e) => void onSelect(e)}
      />
      <Button
        variant="outline"
        disabled={busy}
        onClick={() => inputRef.current?.click()}
      >
        <ImagePlus className="size-4" aria-hidden="true" />
        {busy ? 'Uploading…' : 'Add progress photo'}
      </Button>
      {error ? <p className="text-sm text-destructive">{error}</p> : null}

      {photos.length === 0 ? (
        <EmptyState
          title="No progress photos yet"
          description="Add one to track your visual progress over time."
        />
      ) : (
        <ul className="grid grid-cols-3 gap-2">
          {photos.map((p: ProgressPhoto) => (
            <li
              key={p.id}
              className="overflow-hidden rounded-lg border border-border bg-card"
            >
              {urls[p.id] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={urls[p.id]}
                  alt={`Progress photo from ${format(p.date, 'MMM d, yyyy')}`}
                  className="aspect-square w-full object-cover"
                />
              ) : (
                <div className="aspect-square w-full animate-pulse bg-muted" />
              )}
              <p className="p-1 text-center text-[10px] text-muted-foreground">
                {format(p.date, 'MMM d')}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
