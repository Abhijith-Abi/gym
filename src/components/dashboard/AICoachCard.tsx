'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bot,
  Sparkles,
  Send,
  Play,
  Clock,
  Dumbbell,
  RefreshCw,
} from 'lucide-react'
import {
  generateAIWorkout,
  convertGeneratedToPlanDay,
  type GeneratedWorkout,
} from '@/services/aiWorkoutService'
import { useWorkoutStore } from '@/store/workoutStore'
import { useExerciseStore } from '@/store/exerciseStore'
import { useAuth } from '@/hooks/useAuth'
import { useWorkoutSounds } from '@/hooks/useWorkoutSounds'
import { triggerHaptic } from '@/hooks/useHaptics'
import type { WorkoutPlan } from '@/types'

const PRESET_PROMPTS = [
  '🔥 30-min full body fat loss',
  '💪 Dumbbells only upper body',
  '⚡ Quick 15-min core & HIIT',
  '🦵 Lower body without barbell',
]

export function AICoachCard() {
  const router = useRouter()
  const { uid } = useAuth()
  const setPlan = useWorkoutStore((s) => s.setPlan)
  const currentPlan = useWorkoutStore((s) => s.plan)
  const selectedDay = useWorkoutStore((s) => s.selectedDay)
  const byId = useExerciseStore((s) => s.byId)
  const { playSound, speak } = useWorkoutSounds()

  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [generated, setGenerated] = useState<GeneratedWorkout | null>(null)

  const handleGenerate = async (queryText?: string) => {
    const q = queryText || prompt
    if (!q.trim()) return

    setLoading(true)
    triggerHaptic('medium')
    playSound('button-click')

    try {
      let duration = 45
      if (q.includes('15-min') || q.includes('15 min')) duration = 15
      else if (q.includes('30-min') || q.includes('30 min')) duration = 30
      else if (q.includes('20-min') || q.includes('20 min')) duration = 20

      let focus = 'fullbody'
      if (q.toLowerCase().includes('chest')) focus = 'chest'
      else if (q.toLowerCase().includes('leg')) focus = 'legs'
      else if (q.toLowerCase().includes('core') || q.toLowerCase().includes('abs')) focus = 'core'
      else if (q.toLowerCase().includes('fat loss') || q.toLowerCase().includes('hiit')) focus = 'hiit'

      let equipment = 'all'
      if (q.toLowerCase().includes('dumbbell')) equipment = 'dumbbell'
      if (q.toLowerCase().includes('no equipment') || q.toLowerCase().includes('bodyweight')) equipment = 'bodyweight'

      const result = await generateAIWorkout({
        durationMinutes: duration,
        focusArea: focus,
        equipment,
        customPrompt: q,
      })

      setGenerated(result)
      playSound('achievement')
      speak(`AI generated ${result.workoutName} for you! Ready to start.`)
    } catch {
      // safe fallback handled inside service
    } finally {
      setLoading(false)
    }
  }

  const handleStartAIWorkout = () => {
    if (!generated || !uid) return
    triggerHaptic('success')
    playSound('workout-complete')

    const newPlanDay = convertGeneratedToPlanDay(generated, selectedDay)
    const basePlan: WorkoutPlan = currentPlan ?? {
      id: `plan_ai_${Date.now()}`,
      uid,
      name: 'AI Personalized Routine',
      isTemplate: false,
      days: {
        mon: newPlanDay,
        tue: newPlanDay,
        wed: newPlanDay,
        thu: newPlanDay,
        fri: newPlanDay,
        sat: newPlanDay,
        sun: { dayId: 'sun', workoutName: 'Rest', isRest: true, entries: [] },
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const updatedPlan: WorkoutPlan = {
      ...basePlan,
      days: {
        ...basePlan.days,
        [selectedDay]: newPlanDay,
      },
    }

    setPlan(updatedPlan)
    router.push('/workout')
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card via-card to-primary/[0.04] p-5 shadow-lg">
      <div className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-primary/10 blur-2xl" />

      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-2xl bg-primary/20 text-primary shadow-[0_0_15px_rgba(34,197,94,0.3)]">
            <Bot className="size-5" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-primary">
              <Sparkles className="size-3" />
              <span>Gemini AI Coach</span>
            </div>
            <h3 className="text-base font-extrabold text-foreground sm:text-lg">
              Smart Workout Generator
            </h3>
          </div>
        </div>
      </div>

      {/* Quick Prompt Chips */}
      <div className="mt-3.5 flex flex-wrap gap-1.5">
        {PRESET_PROMPTS.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => {
              setPrompt(chip)
              void handleGenerate(chip)
            }}
            className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-[#A8A8A8] backdrop-blur-md transition-colors hover:border-primary/40 hover:text-white active:scale-95"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Prompt Input */}
      <div className="mt-3 flex items-center gap-2">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') void handleGenerate()
          }}
          placeholder="Ask AI: e.g. Give me 20-min chest & triceps..."
          className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder:text-[#8C8C8C] backdrop-blur-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
        />
        <button
          type="button"
          onClick={() => void handleGenerate()}
          disabled={loading || !prompt.trim()}
          className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-[0_0_20px_rgba(255,107,53,0.35)] transition-all hover:bg-primary-hover disabled:opacity-40 active:scale-95"
        >
          {loading ? (
            <RefreshCw className="size-4 animate-spin" />
          ) : (
            <Send className="size-4" />
          )}
        </button>
      </div>

      {/* Generated Result Preview */}
      <AnimatePresence>
        {generated && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-4 overflow-hidden rounded-2xl border border-primary/40 bg-white/5 p-4 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                    AI Recommended Routine
                  </span>
                  <h4 className="text-base font-black text-white">
                    {generated.workoutName}
                  </h4>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-semibold text-[#A8A8A8]">
                  <Clock className="size-3 text-primary" />
                  ~{generated.durationMinutes} min
                </span>
              </div>

              {/* Advice */}
              <p className="rounded-xl border border-primary/20 bg-primary/10 p-2.5 text-xs text-[#A8A8A8] leading-relaxed">
                💡 {generated.advice}
              </p>

              {/* Exercise Lineup */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C8C8C]">
                  Prescribed Exercises ({generated.entries.length})
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {generated.entries.map((entry) => {
                    const ex = byId(entry.exerciseId)
                    return (
                      <span
                        key={entry.exerciseId}
                        className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-white"
                      >
                        <Dumbbell className="size-3 text-primary" />
                        <span>{ex?.name ?? entry.exerciseId}</span>
                        <span className="text-[10px] text-[#8C8C8C]">
                          ({entry.prescription.targetSets}s)
                        </span>
                      </span>
                    )
                  })}
                </div>
              </div>

              {/* Action */}
              <button
                type="button"
                onClick={handleStartAIWorkout}
                className="mt-2 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-primary text-xs font-bold text-white shadow-[0_0_20px_rgba(255,107,53,0.4)] transition-all hover:bg-primary-hover active:scale-95 sm:text-sm"
              >
                <Play className="size-4 fill-white" />
                <span>Start This AI Workout Now</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
