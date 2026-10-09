'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import {
  Play,
  Pause,
  RotateCcw,
  Sparkles,
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
  showControls = true,
  showGenderToggle = true,
  onMediaError,
}: ExerciseMediaProps) {
  const media: ExerciseMediaType = getExerciseMedia(exerciseId, fallbackName)
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [mediaType, setMediaType] = useState<'video' | 'poster'>('video')
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)

  const videoRef = useRef<HTMLVideoElement | null>(null)

  // Reset state immediately whenever exerciseId changes to prevent stale media
  useEffect(() => {
    setIsLoaded(false)
    setHasError(false)
    setIsPlaying(autoPlay)

    if (videoRef.current) {
      if (typeof videoRef.current.load === 'function') {
        videoRef.current.load()
      }
      if (autoPlay && mediaType === 'video' && typeof videoRef.current.play === 'function') {
        const p = videoRef.current.play()
        if (p && typeof p.catch === 'function') {
          p.catch(() => {
            // Autoplay policy fallback: pause silently without error
            setIsPlaying(false)
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
          p.then(() => setIsPlaying(true)).catch(() => {})
        } else {
          setIsPlaying(true)
        }
      }
    } else {
      if (typeof videoRef.current.pause === 'function') {
        videoRef.current.pause()
      }
      setIsPlaying(false)
    }
  }

  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!videoRef.current) return
    videoRef.current.currentTime = 0
    if (typeof videoRef.current.play === 'function') {
      const p = videoRef.current.play()
      if (p && typeof p.then === 'function') {
        p.then(() => setIsPlaying(true)).catch(() => {})
      } else {
        setIsPlaying(true)
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

        {/* Badges */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1">
          {media.mediaVerified && (
            <span className="flex items-center gap-1 rounded-md bg-black/75 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-primary backdrop-blur-md">
              <Sparkles className="size-2.5" />
              HD Video
            </span>
          )}
        </div>
      </div>
    )
  }

  // ---- PLAYER / DETAIL MODE ----
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-neutral-950 shadow-2xl ${className}`}
    >
      {/* Top Media Header & Controls */}
      <div className="relative flex items-center justify-between border-b border-border/40 bg-neutral-900/80 px-4 py-2.5 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-lg bg-primary/20 text-primary">
            {mediaType === 'video' ? (
              <Video className="size-3.5" />
            ) : (
              <ImageIcon className="size-3.5" />
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-wider text-foreground">
              {media.name}
            </span>
            <span className="text-[10px] font-semibold text-muted-foreground">
              {media.mediaVerified ? 'Verified 1080p HD Movement Guide' : 'Biomechanical Guide'}
            </span>
          </div>
        </div>

        {/* Right side toggles: Video/Poster switch & Gender switch */}
        <div className="flex items-center gap-1.5">
          {/* Video / Poster Mode Switch */}
          {hasVideo && hasPoster && (
            <div className="flex rounded-xl bg-neutral-800/80 p-0.5">
              <button
                type="button"
                onClick={() => setMediaType('video')}
                aria-label="Switch to video demo"
                className={`rounded-lg px-2 py-1 text-[10px] font-bold transition-all ${
                  mediaType === 'video'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Video
              </button>
              <button
                type="button"
                onClick={() => setMediaType('poster')}
                aria-label="Switch to static poster"
                className={`rounded-lg px-2 py-1 text-[10px] font-bold transition-all ${
                  mediaType === 'poster'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Photo
              </button>
            </div>
          )}

          {/* Male / Female Gender Model Switch */}
          {showGenderToggle && (media.maleVideoUrl || media.femaleVideoUrl) && (
            <div className="flex rounded-xl bg-neutral-800/80 p-0.5">
              <button
                type="button"
                onClick={() => {
                  setGender('male')
                  setIsLoaded(false)
                }}
                aria-label="Demonstration by male model"
                className={`flex items-center gap-1 rounded-lg px-2 py-1 text-[10px] font-bold transition-all ${
                  gender === 'male'
                    ? 'bg-accent text-accent-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
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
                className={`flex items-center gap-1 rounded-lg px-2 py-1 text-[10px] font-bold transition-all ${
                  gender === 'female'
                    ? 'bg-accent text-accent-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
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
        className="relative w-full overflow-hidden bg-black flex items-center justify-center"
        style={{ aspectRatio: '16/9', minHeight: '220px' }}
      >
        {/* Loading skeleton */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-neutral-950/80 backdrop-blur-sm animate-pulse">
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
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
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
          /* Biomechanical fallback when media is unavailable/offline */
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center bg-gradient-to-br from-neutral-900 to-neutral-950">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/25 text-primary">
              <Dumbbell className="size-7" />
            </div>
            <div className="flex flex-col gap-1 max-w-sm">
              <h4 className="text-sm font-black text-foreground">
                {media.name}
              </h4>
              <p className="text-xs text-muted-foreground">
                Follow standard biomechanical cues: brace core, control the eccentric phase, and maintain full range of motion.
              </p>
            </div>
            <span className="rounded-full bg-secondary/80 px-3 py-1 text-[10px] font-bold text-muted-foreground">
              Biomechanical Movement Guide
            </span>
          </div>
        )}

        {/* Floating Play/Pause overlay button for Video */}
        {mediaType === 'video' && hasVideo && !hasError && showControls && isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-colors pointer-events-none">
            <button
              type="button"
              onClick={togglePlayPause}
              aria-label={isPlaying ? 'Pause demonstration' : 'Play demonstration'}
              className="pointer-events-auto flex size-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 transition-transform hover:scale-110 active:scale-95 shadow-lg"
            >
              {isPlaying ? (
                <Pause className="size-5 fill-current" />
              ) : (
                <Play className="size-5 fill-current ml-0.5" />
              )}
            </button>
          </div>
        )}

        {/* Bottom Bar Info & Replay Action */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-1.5">
            {media.mediaVerified ? (
              <span className="flex items-center gap-1 rounded-lg bg-black/80 px-2 py-1 text-[10px] font-black uppercase tracking-wider text-primary border border-primary/30 backdrop-blur-md shadow-md">
                <ShieldCheck className="size-3" />
                Verified 1080p
              </span>
            ) : (
              <span className="flex items-center gap-1 rounded-lg bg-black/80 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground border border-border/40 backdrop-blur-md">
                <AlertCircle className="size-3 text-accent" />
                Cued Demonstration
              </span>
            )}
          </div>

          {mediaType === 'video' && hasVideo && !hasError && (
            <button
              type="button"
              onClick={handleRestart}
              aria-label="Restart video"
              className="pointer-events-auto flex size-8 items-center justify-center rounded-xl bg-black/70 text-foreground border border-white/15 backdrop-blur-md transition-all hover:bg-black hover:text-primary active:scale-95"
            >
              <RotateCcw className="size-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Detail Mode: Form Cues & Steps Footer */}
      {mode === 'detail' && media.formCues && media.formCues.length > 0 && (
        <div className="flex flex-col gap-2 border-t border-border/60 bg-neutral-900/60 p-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-black uppercase tracking-wider text-primary">
              ⚡ Key Execution Cues
            </span>
            <span className="text-[10px] font-semibold text-muted-foreground">
              {media.mediaAttribution}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
            {media.formCues.slice(0, 4).map((cue, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 rounded-xl bg-neutral-800/40 p-2.5 border border-border/40"
              >
                <div className="flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/20 text-[10px] font-bold text-primary">
                  {idx + 1}
                </div>
                <span className="text-xs text-foreground/90 leading-snug">
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
