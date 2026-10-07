import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { safeJSONStorage } from './safeStorage'

/**
 * Persisted UI/session state (C.5). This store owns the install-stable
 * `deviceId`, minted ONCE on first launch and reused thereafter; it is used
 * only for conflict attribution (C.3), never as an identity/security signal.
 * A reinstall/cache-clear mints a new id, which is acceptable.
 * Also persists sound, voice, haptic, theme, and timer defaults.
 */

function mintDeviceId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }
  return `dev-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
}

export type AppTheme = 'dark' | 'light' | 'system'

interface SettingsState {
  deviceId: string
  /** Install-prompt dismissal flag (FR-34; consumed by useInstallPrompt later). */
  installPromptDismissed: boolean
  setInstallPromptDismissed: (dismissed: boolean) => void

  // Sound & Voice Preferences
  soundEnabled: boolean
  setSoundEnabled: (enabled: boolean) => void
  soundVolume: number // 0.0 - 1.0
  setSoundVolume: (volume: number) => void
  voiceEncouragementEnabled: boolean
  setVoiceEncouragementEnabled: (enabled: boolean) => void
  countdownSoundsEnabled: boolean
  setCountdownSoundsEnabled: (enabled: boolean) => void

  // Haptic Feedback Preference
  hapticsEnabled: boolean
  setHapticsEnabled: (enabled: boolean) => void

  // Theme & Display
  theme: AppTheme
  setTheme: (theme: AppTheme) => void

  // Timer Preferences
  defaultRestSeconds: number
  setDefaultRestSeconds: (seconds: number) => void
  smartRestEnabled: boolean
  setSmartRestEnabled: (enabled: boolean) => void
  autoStartRest: boolean
  setAutoStartRest: (autoStart: boolean) => void
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      deviceId: mintDeviceId(),
      installPromptDismissed: false,
      setInstallPromptDismissed: (dismissed) =>
        set({ installPromptDismissed: dismissed }),

      soundEnabled: true,
      setSoundEnabled: (soundEnabled) => set({ soundEnabled }),
      soundVolume: 0.8,
      setSoundVolume: (soundVolume) => set({ soundVolume: Math.max(0, Math.min(1, soundVolume)) }),
      voiceEncouragementEnabled: true,
      setVoiceEncouragementEnabled: (voiceEncouragementEnabled) =>
        set({ voiceEncouragementEnabled }),
      countdownSoundsEnabled: true,
      setCountdownSoundsEnabled: (countdownSoundsEnabled) =>
        set({ countdownSoundsEnabled }),

      hapticsEnabled: true,
      setHapticsEnabled: (hapticsEnabled) => set({ hapticsEnabled }),

      theme: 'dark',
      setTheme: (theme) => set({ theme }),

      defaultRestSeconds: 30,
      setDefaultRestSeconds: (defaultRestSeconds) =>
        set({ defaultRestSeconds }),
      smartRestEnabled: true,
      setSmartRestEnabled: (smartRestEnabled) => set({ smartRestEnabled }),
      autoStartRest: true,
      setAutoStartRest: (autoStartRest) => set({ autoStartRest }),
    }),
    {
      name: 'forgefit-settings',
      storage: safeJSONStorage(),
      partialize: (s) => ({
        deviceId: s.deviceId,
        installPromptDismissed: s.installPromptDismissed,
        soundEnabled: s.soundEnabled,
        soundVolume: s.soundVolume,
        voiceEncouragementEnabled: s.voiceEncouragementEnabled,
        countdownSoundsEnabled: s.countdownSoundsEnabled,
        hapticsEnabled: s.hapticsEnabled,
        theme: s.theme,
        defaultRestSeconds: s.defaultRestSeconds,
        smartRestEnabled: s.smartRestEnabled,
        autoStartRest: s.autoStartRest,
      }),
    },
  ),
)
