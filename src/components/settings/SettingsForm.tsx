'use client'

import { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { useAuth } from '@/hooks/useAuth'
import { useSettingsStore, type AppTheme } from '@/store/settingsStore'
import { useNotifications } from '@/hooks/useNotifications'
import { SkeletonBlock } from '@/components/ui/skeleton'
import {
  defaultSettings,
  getSettings,
  updateSettings,
} from '@/services/profileService'
import { Volume2, Moon, Sun, Monitor } from 'lucide-react'
import type { RpeMode } from '@/types'

interface SettingsFormValues {
  rpeMode: RpeMode
  restDefaultsSeconds: number
  autoStartRest: boolean
  smartRestEnabled: boolean
  soundEnabled: boolean
  hapticsEnabled: boolean
  hydrationEnabled: boolean
  hydrationTargetMl: number
  notificationsEnabled: boolean
}

const RPE_MODES: RpeMode[] = ['None', 'RPE', 'RIR', 'Both']
const THEMES: { id: AppTheme; label: string; icon: typeof Moon }[] = [
  { id: 'dark', label: 'Dark', icon: Moon },
  { id: 'light', label: 'Light', icon: Sun },
  { id: 'system', label: 'System', icon: Monitor },
]

function Toggle({
  label,
  sublabel,
  checked,
  onChange,
}: {
  label: string
  sublabel?: string
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-foreground">{label}</span>
        {sublabel && (
          <span className="text-xs text-muted-foreground">{sublabel}</span>
        )}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={cn(
          'relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full p-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95',
          checked
            ? 'bg-primary shadow-[0_0_12px_rgba(255,107,53,0.35)]'
            : 'bg-secondary border border-border/80',
        )}
      >
        <span
          className={cn(
            'pointer-events-none block size-5 rounded-full bg-white shadow-md transition-transform',
            checked ? 'translate-x-5' : 'translate-x-0',
          )}
        />
      </button>
    </div>
  )
}

/** Editable training/UI preferences (FR-10/18/26). */
export function SettingsForm() {
  const { uid } = useAuth()
  const deviceId = useSettingsStore((s) => s.deviceId)
  const theme = useSettingsStore((s) => s.theme)
  const setTheme = useSettingsStore((s) => s.setTheme)
  const soundVolume = useSettingsStore((s) => s.soundVolume)
  const setSoundVolume = useSettingsStore((s) => s.setSoundVolume)
  const voiceEncouragementEnabled = useSettingsStore((s) => s.voiceEncouragementEnabled)
  const setVoiceEncouragementEnabled = useSettingsStore(
    (s) => s.setVoiceEncouragementEnabled,
  )
  const countdownSoundsEnabled = useSettingsStore(
    (s) => s.countdownSoundsEnabled,
  )
  const setCountdownSoundsEnabled = useSettingsStore(
    (s) => s.setCountdownSoundsEnabled,
  )
  const setStoreSoundEnabled = useSettingsStore((s) => s.setSoundEnabled)
  const setStoreHapticsEnabled = useSettingsStore((s) => s.setHapticsEnabled)
  const setStoreDefaultRest = useSettingsStore((s) => s.setDefaultRestSeconds)
  const setStoreSmartRest = useSettingsStore((s) => s.setSmartRestEnabled)
  const setStoreAutoStartRest = useSettingsStore((s) => s.setAutoStartRest)

  const { request: requestNotifications } = useNotifications()
  const [loaded, setLoaded] = useState(false)
  const [status, setStatus] = useState<'idle' | 'saved' | string>('idle')

  const { control, register, handleSubmit, reset } = useForm<SettingsFormValues>({
    defaultValues: {
      rpeMode: 'None',
      restDefaultsSeconds: 90,
      autoStartRest: true,
      smartRestEnabled: true,
      soundEnabled: true,
      hapticsEnabled: true,
      hydrationEnabled: false,
      hydrationTargetMl: 3000,
      notificationsEnabled: false,
    },
  })

  useEffect(() => {
    let cancelled = false
    async function load() {
      if (!uid) return
      const res = await getSettings(uid)
      if (cancelled) return
      if (res.ok && res.data) {
        const s = res.data
        reset({
          rpeMode: s.rpeMode,
          restDefaultsSeconds: s.restDefaultsSeconds,
          autoStartRest: s.autoStartRest,
          smartRestEnabled: s.smartRestEnabled,
          soundEnabled: s.soundEnabled,
          hapticsEnabled: s.hapticsEnabled,
          hydrationEnabled: s.hydrationEnabled,
          hydrationTargetMl: s.hydrationTargetMl,
          notificationsEnabled: s.notificationsEnabled,
        })
        setStoreSoundEnabled(s.soundEnabled)
        setStoreHapticsEnabled(s.hapticsEnabled)
        setStoreDefaultRest(s.restDefaultsSeconds)
        setStoreSmartRest(s.smartRestEnabled)
        setStoreAutoStartRest(s.autoStartRest)
      }
      setLoaded(true)
    }
    void load()
    return () => {
      cancelled = true
    }
  }, [
    uid,
    reset,
    setStoreSoundEnabled,
    setStoreHapticsEnabled,
    setStoreDefaultRest,
    setStoreSmartRest,
    setStoreAutoStartRest,
  ])

  async function onSubmit(values: SettingsFormValues) {
    if (!uid) return
    setStatus('idle')
    setStoreSoundEnabled(values.soundEnabled)
    setStoreHapticsEnabled(values.hapticsEnabled)
    setStoreDefaultRest(Number(values.restDefaultsSeconds))
    setStoreSmartRest(values.smartRestEnabled)
    setStoreAutoStartRest(values.autoStartRest)

    const base = defaultSettings(deviceId)
    const res = await updateSettings(uid, {
      ...values,
      progressionConfig: base.progressionConfig,
      restDefaultsSeconds: Number(values.restDefaultsSeconds),
      hydrationTargetMl: Number(values.hydrationTargetMl),
    })
    if (!res.ok) {
      setStatus(res.message)
      return
    }
    setStatus('saved')
  }

  if (!loaded) {
    return <SkeletonBlock lines={5} label="Loading preferences" />
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      {/* Theme selector */}
      <div className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-4">
        <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Application Theme
        </Label>
        <div className="grid grid-cols-3 gap-2">
          {THEMES.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setTheme(id)}
              className={cn(
                'flex min-h-[44px] items-center justify-center gap-2 rounded-xl border p-2 text-xs font-bold transition-all active:scale-95',
                theme === id
                  ? 'border-primary bg-primary/15 text-primary shadow-[0_0_12px_rgba(255,107,53,0.2)]'
                  : 'border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground',
              )}
            >
              <Icon className="size-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Training & Tracking settings */}
      <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
        <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Workout Tracking &amp; RPE
        </Label>
        <div className="flex flex-col gap-2">
          <Label className="text-xs text-muted-foreground">RPE / RIR Tracking Mode</Label>
          <Controller
            control={control}
            name="rpeMode"
            render={({ field }) => (
              <div className="grid grid-cols-4 gap-2">
                {RPE_MODES.map((m) => (
                  <button
                    key={m}
                    type="button"
                    aria-pressed={field.value === m}
                    onClick={() => field.onChange(m)}
                    className={cn(
                      'min-h-[40px] rounded-xl border px-2 py-1.5 text-xs font-bold transition-all',
                      field.value === m
                        ? 'border-primary bg-primary text-primary-foreground shadow-[0_0_12px_rgba(255,107,53,0.3)]'
                        : 'border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground',
                    )}
                  >
                    {m}
                  </button>
                ))}
              </div>
            )}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="restDefaultsSeconds" className="text-xs text-muted-foreground">
            Default Rest Interval (seconds)
          </Label>
          <Input
            id="restDefaultsSeconds"
            type="number"
            min={0}
            max={86400}
            className="rounded-xl border-border bg-card-elevated text-foreground"
            {...register('restDefaultsSeconds', { valueAsNumber: true })}
          />
        </div>
      </div>

      {/* Sound & Audio Experience */}
      <div className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-4">
        <div className="flex items-center gap-2">
          <Volume2 className="size-4 text-primary" />
          <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Audio &amp; Encouragement
          </Label>
        </div>

        <div className="flex flex-col divide-y divide-border/60">
          <Controller
            control={control}
            name="soundEnabled"
            render={({ field }) => (
              <Toggle
                label="Master Sound Effects"
                sublabel="Chimes, set complete pings, and PR fanfares"
                checked={field.value}
                onChange={field.onChange}
              />
            )}
          />

          <Toggle
            label="Voice Motivation"
            sublabel="Spoken cues and countdown calls"
            checked={voiceEncouragementEnabled}
            onChange={setVoiceEncouragementEnabled}
          />

          <Toggle
            label="Countdown Beeps"
            sublabel="10-second sync audio beeps"
            checked={countdownSoundsEnabled}
            onChange={setCountdownSoundsEnabled}
          />

          <div className="flex flex-col gap-2 py-3">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-foreground">Audio Volume</span>
              <span className="font-mono text-primary">{Math.round(soundVolume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={soundVolume}
              onChange={(e) => setSoundVolume(Number(e.target.value))}
              aria-label="Sound Volume Slider"
              className="h-2 w-full accent-primary bg-secondary rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Haptics & Toggles */}
      <div className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-4">
        <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          System &amp; Intervals
        </Label>
        <div className="flex flex-col divide-y divide-border/60">
          <Controller
            control={control}
            name="autoStartRest"
            render={({ field }) => (
              <Toggle
                label="Auto-Start Rest Timer"
                sublabel="Automatically start timer after logging set"
                checked={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="smartRestEnabled"
            render={({ field }) => (
              <Toggle
                label="Smart Rest Adjustments"
                sublabel="Adapts rest time based on RPE and warmup sets"
                checked={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="hapticsEnabled"
            render={({ field }) => (
              <Toggle
                label="Haptic Feedback"
                sublabel="Vibrations on set complete, rest, and PRs"
                checked={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="notificationsEnabled"
            render={({ field }) => (
              <Toggle
                label="Workout Notifications"
                sublabel="Rest timer alerts when backgrounded"
                checked={field.value}
                onChange={(v) => {
                  field.onChange(v)
                  if (v) void requestNotifications()
                }}
              />
            )}
          />
          <Controller
            control={control}
            name="hydrationEnabled"
            render={({ field }) => (
              <Toggle
                label="Hydration Tracking"
                checked={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>

        <div className="mt-2 flex flex-col gap-1.5">
          <Label htmlFor="hydrationTargetMl" className="text-xs text-muted-foreground">
            Daily Hydration Target (ml)
          </Label>
          <Input
            id="hydrationTargetMl"
            type="number"
            min={0}
            className="rounded-xl border-border bg-card-elevated text-foreground"
            {...register('hydrationTargetMl', { valueAsNumber: true })}
          />
        </div>
      </div>

      {status !== 'idle' && status !== 'saved' && (
        <p role="alert" className="text-sm font-semibold text-destructive">
          {status}
        </p>
      )}
      {status === 'saved' && (
        <p role="status" className="text-sm font-semibold text-primary">
          ✓ Preferences saved successfully.
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="min-h-[50px] rounded-2xl bg-primary text-base font-bold text-primary-foreground shadow-[0_0_20px_rgba(255,107,53,0.35)] hover:bg-primary/90 active:scale-95"
      >
        Save Preferences
      </Button>
    </form>
  )
}
