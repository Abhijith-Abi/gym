'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import {
  RotateCcw,
  AlertCircle,
  Dumbbell,
  ShieldCheck,
  Video,
  Image as ImageIcon,
  User,
} from 'lucide-react'
import { getExerciseMedia } from '@/data/exerciseMedia'
import type { ExerciseMedia as ExerciseMediaType } from '@/types'

export interface ExerciseMediaProps {
  exerciseId: string
  name?: string
  mode?: 'card' | 'detail' | 'player'
  className?: string
  autoPlay?: boolean
  showControls?: boolean
  showGenderToggle?: boolean
  onMediaError?: () => void
}

/**
 * Premium ExerciseMedia Component (Free Exercise DB API with 1080p Videos & Posteriors).
 *
 * Features:
 * - Semantic HTML5 video with muted auto-looping playback
 * - Gender demonstration switcher (Male / Female models)
 * - Next.js optimized poster thumbnails with zero layout shift
 * - Reduced-motion compliance & offline graceful fallbacks
 * - Immediate refresh on exerciseId changes (no stale frames)
 */
export function ExerciseMedia({
  exerciseId,
  name: fallbackName,
  mode = 'detail',
  className = '',
  autoPlay = true,
  showControls: _showControls = true,
  showGenderToggle = true,
  onMediaError,
}: ExerciseMediaProps) {
  const media: ExerciseMediaType = getExerciseMedia(exerciseId, fallbackName)
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [mediaType, setMediaType] = useState<'video' | 'poster'>('video')
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)

  const videoRef = useRef<HTMLVideoElement | null>(null)

  // Reset state immediately whenever exerciseId changes to prevent stale media
  useEffect(() => {
    setIsLoaded(false)
    setHasError(false)

    if (videoRef.current) {
      if (typeof videoRef.current.load === 'function') {
        videoRef.current.load()
      }
      if (autoPlay && mediaType === 'video' && typeof videoRef.current.play === 'function') {
        const p = videoRef.current.play()
        if (p && typeof p.catch === 'function') {
          p.catch(() => {
            // Autoplay policy fallback: pause silently without error
          })
        }
      }
    }
  }, [exerciseId, autoPlay, mediaType])

  // Resolve current gender URLs
  const activeVideoUrl =
    gender === 'female'
      ? media.femaleVideoUrl || media.videoUrl || media.maleVideoUrl
      : media.maleVideoUrl || media.videoUrl || media.femaleVideoUrl

  const activePosterUrl =
    gender === 'female'
      ? media.femaleThumbnailUrl || media.thumbnailUrl || media.maleThumbnailUrl
      : media.maleThumbnailUrl || media.thumbnailUrl || media.femaleThumbnailUrl

  const hasVideo = Boolean(activeVideoUrl)
  const hasPoster = Boolean(activePosterUrl)

  const handleVideoError = () => {
    setHasError(true)
    onMediaError?.()
  }

  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!videoRef.current) return

    if (videoRef.current.paused) {
      if (typeof videoRef.current.play === 'function') {
        const p = videoRef.current.play()
        if (p && typeof p.then === 'function') {
          p.then(() => {}).catch(() => {})
        }
      }
    } else {
      if (typeof videoRef.current.pause === 'function') {
        videoRef.current.pause()
      }
    }
  }

  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!videoRef.current) return
    videoRef.current.currentTime = 0
    if (typeof videoRef.current.play === 'function') {
      const p = videoRef.current.play()
      if (p && typeof p.then === 'function') {
        p.then(() => {}).catch(() => {})
      }
    }
  }

  // ---- CARD MODE (Compact thumbnail for catalog & lists) ----
  if (mode === 'card') {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl bg-neutral-900/90 border border-border/60 ${className}`}
        style={{ aspectRatio: '16/9' }}
      >
        {hasPoster && !hasError ? (
          <Image
            src={activePosterUrl!}
            alt={media.name}
            fill
            sizes="(max-width: 768px) 100vw, 360px"
            className={`object-contain transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 p-3 text-muted-foreground bg-gradient-to-br from-card to-secondary/30">
            <Dumbbell className="size-6 text-primary/60" />
            <span className="text-[11px] font-bold text-center line-clamp-1">
              {media.name}
            </span>
          </div>
        )}

        {/* Loading skeleton pulse */}
        {!isLoaded && !hasError && hasPoster && (
          <div className="absolute inset-0 animate-pulse bg-secondary/60" />
        )}
      </div>
    )
  }

  // ---- PLAYER / DETAIL MODE ----
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-2xl border border-border bg-[#171A17] shadow-xl w-full min-w-0 max-w-full ${className}`}
    >
      {/* Top Media Header & Controls */}
      <div className="relative flex flex-wrap items-center justify-between gap-2 border-b border-border bg-[#111311] px-3.5 sm:px-4 py-2.5 min-w-0 w-full">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary border border-primary/30">
            {mediaType === 'video' ? (
              <Video className="size-3.5" />
            ) : (
              <ImageIcon className="size-3.5" />
            )}
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-xs font-black uppercase tracking-wider text-white truncate">
              {media.name}
            </span>
            <span className="text-[10px] font-medium text-muted-foreground truncate">
              {media.mediaVerified ? 'Verified 1080p HD Video' : 'Movement Guide'}
            </span>
          </div>
        </div>

        {/* Right side toggles: Video/Poster switch & Gender switch */}
        <div className="flex items-center gap-1.5 shrink-0 flex-wrap">
          {/* Video / Poster Mode Switch */}
          {hasVideo && hasPoster && (
            <div className="flex rounded-lg bg-[#202420] border border-border p-0.5">
              <button
                type="button"
                onClick={() => setMediaType('video')}
                aria-label="Switch to video demo"
                className={`rounded-md px-2.5 py-0.5 text-[10px] font-bold transition-all ${
                  mediaType === 'video'
                    ? 'bg-primary text-[#0A0A0A] shadow-sm'
                    : 'text-muted-foreground hover:text-white'
                }`}
              >
                Video
              </button>
              <button
                type="button"
                onClick={() => setMediaType('poster')}
                aria-label="Switch to static poster"
                className={`rounded-md px-2.5 py-0.5 text-[10px] font-bold transition-all ${
                  mediaType === 'poster'
                    ? 'bg-primary text-[#0A0A0A] shadow-sm'
                    : 'text-muted-foreground hover:text-white'
                }`}
              >
                Photo
              </button>
            </div>
          )}

          {/* Male / Female Gender Model Switch */}
          {showGenderToggle && (media.maleVideoUrl || media.femaleVideoUrl) && (
            <div className="flex rounded-lg bg-[#202420] border border-border p-0.5">
              <button
                type="button"
                onClick={() => {
                  setGender('male')
                  setIsLoaded(false)
                }}
                aria-label="Demonstration by male model"
                className={`flex items-center gap-1 rounded-md px-2.5 py-0.5 text-[10px] font-bold transition-all ${
                  gender === 'male'
                    ? 'bg-primary text-[#0A0A0A] shadow-sm'
                    : 'text-muted-foreground hover:text-white'
                }`}
              >
                <User className="size-2.5" />
                <span>Male</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setGender('female')
                  setIsLoaded(false)
                }}
                aria-label="Demonstration by female model"
                className={`flex items-center gap-1 rounded-md px-2.5 py-0.5 text-[10px] font-bold transition-all ${
                  gender === 'female'
                    ? 'bg-primary text-[#0A0A0A] shadow-sm'
                    : 'text-muted-foreground hover:text-white'
                }`}
              >
                <User className="size-2.5" />
                <span>Female</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Video/Poster Display Canvas */}
      <div
        className="relative w-full overflow-hidden bg-[#0A0A0A] flex items-center justify-center cursor-pointer select-none"
        style={{ aspectRatio: '16/9', minHeight: '220px' }}
        onClick={togglePlayPause}
      >
        {/* Loading skeleton */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-[#0A0A0A]/90 animate-pulse">
            <Dumbbell className="size-8 text-primary animate-bounce" />
            <span className="text-xs font-bold text-muted-foreground">
              Loading 1080p HD Demonstration...
            </span>
          </div>
        )}

        {/* Video Mode */}
        {mediaType === 'video' && hasVideo && !hasError ? (
          <video
            ref={videoRef}
            key={`vid-${exerciseId}-${gender}`}
            src={activeVideoUrl}
            poster={activePosterUrl}
            playsInline
            muted
            loop
            autoPlay={autoPlay}
            preload="metadata"
            className={`h-full w-full object-contain transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoadedData={() => setIsLoaded(true)}
            onError={handleVideoError}
          />
        ) : hasPoster && !hasError ? (
          /* Poster Mode or Video Fallback */
          <div className="relative h-full w-full">
            <Image
              key={`img-${exerciseId}-${gender}`}
              src={activePosterUrl!}
              alt={media.name}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className={`object-contain transition-opacity duration-300 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
              priority={mode === 'player'}
            />
          </div>
        ) : (
          /* Fallback when media is offline */
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center bg-[#111311]">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/30 text-primary">
              <Dumbbell className="size-7" />
            </div>
            <div className="flex flex-col gap-1 max-w-sm">
              <h4 className="text-sm font-black text-white">
                {media.name}
              </h4>
              <p className="text-xs text-muted-foreground">
                Follow standard biomechanical cues: brace core, control eccentric movement, and maintain proper joint alignment.
              </p>
            </div>
          </div>
        )}

        {/* Bottom Bar Info & Replay Action (Non-blocking) */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-1.5 min-w-0">
            {media.mediaVerified ? (
              <span className="flex items-center gap-1 rounded-lg bg-[#0A0A0A]/90 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-primary border border-primary/30 shadow-md truncate">
                <ShieldCheck className="size-3 shrink-0" />
                <span className="truncate">Verified 1080p</span>
              </span>
            ) : (
              <span className="flex items-center gap-1 rounded-lg bg-[#0A0A0A]/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground border border-border truncate">
                <AlertCircle className="size-3 text-primary shrink-0" />
                <span className="truncate">Cued Demo</span>
              </span>
            )}
          </div>

          {mediaType === 'video' && hasVideo && !hasError && (
            <button
              type="button"
              onClick={handleRestart}
              aria-label="Restart video"
              className="pointer-events-auto flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#0A0A0A]/85 text-white border border-border transition-all hover:bg-black hover:text-primary active:scale-95"
            >
              <RotateCcw className="size-3" />
            </button>
          )}
        </div>
      </div>

      {/* Detail Mode: Key Execution Cues */}
      {mode === 'detail' && media.formCues && media.formCues.length > 0 && (
        <div className="flex flex-col gap-2 border-t border-border bg-[#111311] p-3.5 sm:p-4 min-w-0 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 min-w-0">
            <span className="text-[11px] font-black uppercase tracking-wider text-primary shrink-0">
              ⚡ Key Execution Cues
            </span>
            <span className="text-[10px] font-medium text-muted-foreground break-words sm:truncate sm:max-w-[280px]">
              {media.mediaAttribution}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1 min-w-0">
            {media.formCues.slice(0, 4).map((cue, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 rounded-xl bg-[#202420] p-2.5 border border-border min-w-0"
              >
                <div className="flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/20 text-[10px] font-bold text-primary">
                  {idx + 1}
                </div>
                <span className="text-xs text-secondary-foreground leading-snug break-words min-w-0">
                  {cue}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
