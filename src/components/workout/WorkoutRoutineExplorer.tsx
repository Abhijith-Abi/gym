'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Dumbbell,
  Flame,
  Zap,
  Heart,
  Sparkles,
  ShieldCheck,
  Clock,
  Target,
  Check,
  Layers,
  Info,
} from 'lucide-react'
import { WORKOUT_PRESETS, type WorkoutPreset } from '@/data/workoutPresets'
import { useWorkoutStore } from '@/store/workoutStore'
import { useAuth } from '@/hooks/useAuth'
import { useWorkoutSounds } from '@/hooks/useWorkoutSounds'
import { triggerHaptic } from '@/hooks/useHaptics'

const CATEGORY_FILTERS = [
  { id: 'all', label: 'All Routines', icon: Layers },
  { id: 'strength', label: 'Build Muscle & Strength', icon: Dumbbell },
  { id: 'fat_loss', label: 'Fat Loss & Shred', icon: Flame },
  { id: 'hiit', label: 'HIIT & Quick Burn', icon: Zap },
  { id: 'fitness', label: 'Beginner & General', icon: Sparkles },
  { id: 'mobility', label: 'Mobility & Recovery', icon: Heart },
] as const

export function WorkoutRoutineExplorer({
  onSelectClose,
}: {
  onSelectClose?: () => void
}) {
  const router = useRouter()
  const { uid } = useAuth()
  const currentPlan = useWorkoutStore((s) => s.plan)
  const loadPresetPlan = useWorkoutStore((s) => s.loadPresetPlan)
  const selectToday = useWorkoutStore((s) => s.selectToday)
  const { playSound, speak } = useWorkoutSounds()

  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [justActivatedId, setJustActivatedId] = useState<string | null>(null)

  const filteredPresets = WORKOUT_PRESETS.filter((preset) => {
    if (activeCategory === 'all') return true
    if (activeCategory === 'strength') return preset.goal === 'muscle_gain' || preset.goal === 'strength'
    if (activeCategory === 'fat_loss') return preset.goal === 'fat_loss' || preset.category === 'fat_loss'
    if (activeCategory === 'hiit') return preset.category === 'hiit'
    if (activeCategory === 'fitness') return preset.difficulty === 'beginner' || preset.goal === 'fitness'
    if (activeCategory === 'mobility') return preset.category === 'mobility'
    return true
  })

  const handleActivatePlan = (preset: WorkoutPreset) => {
    if (!uid) return
    triggerHaptic('success')
    playSound('achievement')
    speak(`Switched to ${preset.title}! Ready to train.`)

    loadPresetPlan(uid, preset)
    selectToday()
    setJustActivatedId(preset.id)

    setTimeout(() => {
      setJustActivatedId(null)
      if (onSelectClose) onSelectClose()
    }, 800)
  }

  const handleStartWorkoutNow = (preset: WorkoutPreset) => {
    if (!uid) return
    handleActivatePlan(preset)
    router.push('/workout')
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Category Pills Header */}
      <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-1">
        {CATEGORY_FILTERS.map((cat) => {
          const Icon = cat.icon
          const isActive = activeCategory === cat.id
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                triggerHaptic('light')
                setActiveCategory(cat.id)
              }}
              className={`flex shrink-0 items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition-all sm:text-sm ${
                isActive
                  ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(34,197,94,0.35)]'
                  : 'border border-border/80 bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground'
              }`}
            >
              <Icon className="size-4" />
              <span>{cat.label}</span>
            </button>
          )
        })}
      </div>

      {/* Educational Notice for Fat Loss category */}
      {activeCategory === 'fat_loss' && (
        <div className="flex items-start gap-3 rounded-2xl border border-primary/30 bg-primary/10 p-4 text-xs text-foreground sm:text-sm">
          <Info className="size-5 shrink-0 text-primary mt-0.5" />
          <div className="flex flex-col gap-1">
            <span className="font-bold text-primary">Science-Backed Fat Loss</span>
            <p className="text-muted-foreground leading-relaxed">
              Ab exercises strengthen your core, but body fat reduction occurs systemically across the entire body.
              These routines combine full-body compound resistance with cardio intervals to maximize energy expenditure.
            </p>
          </div>
        </div>
      )}

      {/* Preset Cards Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filteredPresets.map((preset) => {
          const isCurrentActive =
            currentPlan?.name === preset.title ||
            currentPlan?.id === `plan_${preset.id}`
          const isJustActivated = justActivatedId === preset.id

          return (
            <div
              key={preset.id}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-5 transition-all duration-300 ${
                isCurrentActive
                  ? 'border-primary/60 bg-primary/[0.04] shadow-[0_0_25px_rgba(34,197,94,0.15)]'
                  : 'border-border/80 bg-card hover:border-primary/40 shadow-md'
              }`}
            >
              <div className="flex flex-col gap-3">
                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-primary">
                        {preset.category.toUpperCase()}
                      </span>
                      <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-semibold text-muted-foreground capitalize">
                        {preset.difficulty}
                      </span>
                    </div>
                    <h3 className="mt-1.5 text-lg font-extrabold tracking-tight text-foreground sm:text-xl">
                      {preset.title}
                    </h3>
                    <p className="text-xs font-semibold text-muted-foreground">
                      {preset.subtitle}
                    </p>
                  </div>

                  {isCurrentActive && (
                    <span className="flex items-center gap-1 rounded-full border border-primary/40 bg-primary/20 px-2.5 py-1 text-xs font-black text-primary">
                      <ShieldCheck className="size-3.5" />
                      Active Plan
                    </span>
                  )}
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {preset.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-semibold text-foreground">
                  <span className="flex items-center gap-1.5 rounded-xl border border-border/80 bg-secondary/80 px-2.5 py-1 text-muted-foreground">
                    <Clock className="size-3.5 text-accent" />
                    ~{preset.durationMinutes} min
                  </span>
                  <span className="flex items-center gap-1.5 rounded-xl border border-border/80 bg-secondary/80 px-2.5 py-1 text-muted-foreground">
                    <Target className="size-3.5 text-primary" />
                    {preset.daysCount} Days/Week
                  </span>
                  <span className="rounded-xl border border-border/80 bg-secondary/80 px-2.5 py-1 text-muted-foreground">
                    {preset.equipment}
                  </span>
                </div>

                {/* Workout Days Preview */}
                <div className="mt-2 flex flex-col gap-1.5 border-t border-border/60 pt-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Weekly Routine Breakdown
                  </span>
                  <div className="flex flex-col gap-1">
                    {Object.entries(preset.days).map(([dayKey, dayPlan]) => (
                      <div
                        key={dayKey}
                        className="flex items-center justify-between text-xs"
                      >
                        <span className="font-bold uppercase text-muted-foreground w-10">
                          {dayKey}
                        </span>
                        <span
                          className={`truncate text-right flex-1 ${
                            dayPlan.isRest
                              ? 'text-muted-foreground italic'
                              : 'font-semibold text-foreground'
                          }`}
                        >
                          {dayPlan.workoutName}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => handleStartWorkoutNow(preset)}
                  className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-2xl bg-primary px-4 text-xs font-bold text-primary-foreground shadow-[0_0_20px_rgba(34,197,94,0.35)] transition-all hover:bg-primary/90 active:scale-95 sm:text-sm"
                >
                  <Dumbbell className="size-4" />
                  <span>Start Workout</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleActivatePlan(preset)}
                  disabled={isCurrentActive}
                  className={`flex min-h-[44px] items-center justify-center gap-1.5 rounded-2xl border px-3.5 text-xs font-bold transition-all active:scale-95 ${
                    isCurrentActive
                      ? 'border-primary/40 bg-primary/10 text-primary cursor-default'
                      : 'border-border bg-secondary hover:border-primary/40 text-foreground'
                  }`}
                >
                  {isJustActivated ? (
                    <>
                      <Check className="size-4 text-primary" />
                      <span>Applied!</span>
                    </>
                  ) : isCurrentActive ? (
                    <>
                      <Check className="size-4" />
                      <span>Active</span>
                    </>
                  ) : (
                    <span>Set Active</span>
                  )}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
