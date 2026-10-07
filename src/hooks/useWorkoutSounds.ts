'use client'

import { useCallback, useEffect } from 'react'
import { soundManager, type WorkoutSoundType } from '@/lib/soundManager'
import { useSettingsStore } from '@/store/settingsStore'

/**
 * React hook bridging the centralized sound & speech engine with the user's
 * persisted sound settings in settingsStore.
 */
export function useWorkoutSounds() {
  const soundEnabled = useSettingsStore((s) => s.soundEnabled)
  const soundVolume = useSettingsStore((s) => s.soundVolume)
  const voiceEnabled = useSettingsStore((s) => s.voiceEncouragementEnabled)
  const countdownSoundsEnabled = useSettingsStore((s) => s.countdownSoundsEnabled)

  useEffect(() => {
    soundManager.setMuted(!soundEnabled)
    soundManager.setVolume(soundVolume)
    soundManager.setVoiceEnabled(voiceEnabled)
  }, [soundEnabled, soundVolume, voiceEnabled])

  const playSound = useCallback(
    (type: WorkoutSoundType, customVolume?: number) => {
      if (!soundEnabled) return
      if (type === 'countdown-beep' && !countdownSoundsEnabled) return
      soundManager.play(type, customVolume)
    },
    [soundEnabled, countdownSoundsEnabled],
  )

  const speak = useCallback(
    (text: string) => {
      if (!soundEnabled || !voiceEnabled) return
      soundManager.speak(text)
    },
    [soundEnabled, voiceEnabled],
  )

  return {
    playSound,
    speak,
    soundEnabled,
    soundVolume,
    voiceEnabled,
    countdownSoundsEnabled,
  }
}
