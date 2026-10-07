'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Target,
  Sparkles,
} from 'lucide-react'
import { triggerHaptic } from '@/hooks/useHaptics'

export type GraphicType =
  | 'squat'
  | 'bench'
  | 'deadlift'
  | 'press'
  | 'pull'
  | 'curl'
  | 'tricep'
  | 'abs'
  | 'glute'
  | 'lateral'
  | 'leg-machine'
  | 'hiit'
  | 'generic'

export interface FrameStep {
  title: string
  label: string
  description: string
  focusCue: string
  graphicType: GraphicType
  stage: 1 | 2 | 3
}

export function getExerciseVisualSteps(exerciseId: string, name: string): FrameStep[] {
  const id = exerciseId.toLowerCase()
  const n = name.toLowerCase()

  // 1. DEADLIFT / ROMANIAN DEADLIFT / GOOD MORNING
  if (
    id.includes('deadlift') ||
    id.includes('rdl') ||
    id.includes('good-morning') ||
    n.includes('deadlift') ||
    n.includes('rdl')
  ) {
    return [
      {
        title: 'Step 1: Hip Hinge & Lock Grip',
        label: 'Starting Stance',
        description: 'Bar directly over mid-foot, hinge hips back, grip bar with arms straight outside shins, lats locked.',
        focusCue: 'Shins vertical, flat neutral spine',
        graphicType: 'deadlift',
        stage: 1,
      },
      {
        title: 'Step 2: Floor Drive',
        label: 'Mid-Shin Pull',
        description: 'Drive the floor away through heels, dragging the bar in continuous contact with shins past knees.',
        focusCue: 'Keep bar glued to body, chest proud',
        graphicType: 'deadlift',
        stage: 2,
      },
      {
        title: 'Step 3: Upright Lockout',
        label: 'Finish Position',
        description: 'Stand fully tall, squeeze glutes hard and lock hips without hyperextending the lower back.',
        focusCue: 'Lock glutes, stand proud',
        graphicType: 'deadlift',
        stage: 3,
      },
    ]
  }

  // 2. BICEPS / CURLS
  if (
    id.includes('curl') ||
    id.includes('bicep') ||
    n.includes('curl') ||
    n.includes('bicep')
  ) {
    return [
      {
        title: 'Step 1: Pinned Elbow Anchor',
        label: 'Starting Stretch',
        description: 'Stand tall with arms fully extended, elbows pinned motionless against your sides.',
        focusCue: 'Elbows glued to ribs, full stretch',
        graphicType: 'curl',
        stage: 1,
      },
      {
        title: 'Step 2: Concentric Arc Curl',
        label: 'Curling Arc',
        description: 'Contract biceps to curl the weight upward in a smooth arc without swinging shoulders or torso.',
        focusCue: 'Only forearms pivot, strict tempo',
        graphicType: 'curl',
        stage: 2,
      },
      {
        title: 'Step 3: Peak Bicep Squeeze',
        label: 'Peak Contraction',
        description: 'Squeeze biceps maximally at the top for 1 second, then lower under a strict 3-second negative.',
        focusCue: 'Max bicep squeeze, control drop',
        graphicType: 'curl',
        stage: 3,
      },
    ]
  }

  // 3. TRICEPS / PUSHDOWNS / EXTENSIONS
  if (
    id.includes('tricep') ||
    id.includes('pushdown') ||
    id.includes('skull') ||
    id.includes('extension') ||
    n.includes('tricep') ||
    n.includes('pushdown')
  ) {
    return [
      {
        title: 'Step 1: 90-Degree Pre-Stretch',
        label: 'Starting Stance',
        description: 'Elbows tucked tightly by ribs, forearms bent at 90° with constant tension on triceps.',
        focusCue: 'Keep elbows frozen in space',
        graphicType: 'tricep',
        stage: 1,
      },
      {
        title: 'Step 2: Extension Drive',
        label: 'Pressing Down',
        description: 'Drive hands straight down/forward, contracting triceps forcefully until arms are locked.',
        focusCue: 'Drive through heels of hands',
        graphicType: 'tricep',
        stage: 2,
      },
      {
        title: 'Step 3: Horseshoe Lockout Flex',
        label: 'Peak Squeeze',
        description: 'Lock out arms completely with intense triceps flex, then slowly return to 90° under control.',
        focusCue: 'Full triceps lockout, slow reset',
        graphicType: 'tricep',
        stage: 3,
      },
    ]
  }

  // 4. OVERHEAD PRESS / SHOULDERS
  if (
    id.includes('overhead') ||
    id.includes('shoulder') ||
    id.includes('military') ||
    id.includes('arnold') ||
    n.includes('overhead') ||
    n.includes('shoulder') ||
    n.includes('press') && !id.includes('bench') && !id.includes('leg')
  ) {
    return [
      {
        title: 'Step 1: Front Rack Collarbone Setup',
        label: 'Starting Stance',
        description: 'Bar resting at collarbone, elbows slightly in front of bar, core braced like iron, glutes tight.',
        focusCue: 'Rigid vertical pillar, elbows forward',
        graphicType: 'press',
        stage: 1,
      },
      {
        title: 'Step 2: Straight Vertical Press',
        label: 'Clearing Chin',
        description: 'Pull chin back slightly, press bar straight up in a vertical path directly clearing forehead.',
        focusCue: 'Straight bar path, head pulls through',
        graphicType: 'press',
        stage: 2,
      },
      {
        title: 'Step 3: Full Overhead Lockout',
        label: 'Top Lockout',
        description: 'Lock arms overhead with weight stacked directly over ears, spine, and midfoot with active traps.',
        focusCue: 'Shrug traps up, hold 1s at top',
        graphicType: 'press',
        stage: 3,
      },
    ]
  }

  // 5. PULL-UPS / ROWS / LAT PULLDOWN / BACK
  if (
    id.includes('pull') ||
    id.includes('row') ||
    id.includes('lat') ||
    id.includes('chin') ||
    n.includes('pull') ||
    n.includes('row') ||
    n.includes('lat')
  ) {
    return [
      {
        title: 'Step 1: Full Arm Extension Hang',
        label: 'Full Stretch',
        description: 'Arms fully outstretched, feel a wide stretch across lats with core braced and chest proud.',
        focusCue: 'Complete lat stretch, steady grip',
        graphicType: 'pull',
        stage: 1,
      },
      {
        title: 'Step 2: Scapular Retraction & Drive',
        label: 'Elbow Drive',
        description: 'Depress shoulder blades down and back first, then drive elbows down toward your hips.',
        focusCue: 'Lead with elbows, pull chest to bar',
        graphicType: 'pull',
        stage: 2,
      },
      {
        title: 'Step 3: Peak Lat Contraction',
        label: 'Chest-to-Bar Squeeze',
        description: 'Squeeze back musculature hard at peak contraction for 1 second, then lower under 3s tempo.',
        focusCue: 'Squeeze lats tight, 3s negative',
        graphicType: 'pull',
        stage: 3,
      },
    ]
  }

  // 6. ABS / CORE / CRUNCHES / PLANKS / LEG RAISES
  if (
    id.includes('abs') ||
    id.includes('plank') ||
    id.includes('crunch') ||
    id.includes('twist') ||
    id.includes('leg-raise') ||
    id.includes('wheel') ||
    n.includes('abs') ||
    n.includes('core') ||
    n.includes('crunch') ||
    n.includes('plank')
  ) {
    return [
      {
        title: 'Step 1: Core Engagement Alignment',
        label: 'Starting Setup',
        description: 'Tuck pelvis slightly, draw navel toward spine to engage transverse abdominis without arching.',
        focusCue: 'Hollow body hold, eliminate gap',
        graphicType: 'abs',
        stage: 1,
      },
      {
        title: 'Step 2: Spinal Flexion & Knee Drive',
        label: 'Compression Phase',
        description: 'Contract abdominals to curl ribs toward pelvis / lift knees toward chest, expelling all air.',
        focusCue: 'Exhale forcefully, round spine',
        graphicType: 'abs',
        stage: 2,
      },
      {
        title: 'Step 3: Peak Six-Pack Squeeze',
        label: 'Peak Contraction',
        description: 'Hold maximum ab squeeze for 2 seconds, then return under slow control without resting.',
        focusCue: 'Constant tension, never relax',
        graphicType: 'abs',
        stage: 3,
      },
    ]
  }

  // 7. GLUTES / HIP THRUST / BULGARIAN SPLIT SQUAT
  if (
    id.includes('thrust') ||
    id.includes('glute') ||
    id.includes('bridge') ||
    n.includes('thrust') ||
    n.includes('glute')
  ) {
    return [
      {
        title: 'Step 1: Upper Back Pivot Setup',
        label: 'Starting Position',
        description: 'Upper back against bench below shoulder blades, feet flat shoulder-width, barbell padded across hips.',
        focusCue: 'Chin tucked, gaze forward',
        graphicType: 'glute',
        stage: 1,
      },
      {
        title: 'Step 2: Vertical Hip Extension',
        label: 'Driving Up',
        description: 'Drive forcefully through heels, driving hips up until torso and thighs form a flat table.',
        focusCue: 'Shins 90° vertical at top',
        graphicType: 'glute',
        stage: 2,
      },
      {
        title: 'Step 3: Posterior Pelvic Lockout',
        label: 'Peak Glute Squeeze',
        description: 'Squeeze glutes maximally at top with posterior pelvic tilt for 2 full seconds.',
        focusCue: 'Do not arch lower back, squeeze glutes',
        graphicType: 'glute',
        stage: 3,
      },
    ]
  }

  // 8. LATERAL RAISES / REAR DELT / FACE PULL
  if (
    id.includes('lateral') ||
    id.includes('face-pull') ||
    id.includes('delt') ||
    n.includes('lateral') ||
    n.includes('raise')
  ) {
    return [
      {
        title: 'Step 1: Starting Stance & Grip',
        label: 'Bottom Position',
        description: 'Hold dumbbells by sides with slight forward torso lean (~10°) and soft elbow bend.',
        focusCue: 'Slight elbow bend, chest up',
        graphicType: 'lateral',
        stage: 1,
      },
      {
        title: 'Step 2: Scapular Plane Raise',
        label: 'Raising Wide',
        description: 'Raise arms outward in the scapular plane (~30° forward) leading with elbows up to shoulder height.',
        focusCue: 'Lead with elbows, pour the pitchers',
        graphicType: 'lateral',
        stage: 2,
      },
      {
        title: 'Step 3: Parallel Side Delt Hold',
        label: 'Top Peak Flex',
        description: 'Hold parallel at shoulder height for 1 second, then lower under a strict 3-second negative.',
        focusCue: 'Pause at top, no swinging',
        graphicType: 'lateral',
        stage: 3,
      },
    ]
  }

  // 9. LEG EXTENSION / HAMSTRING CURL / CALF RAISE
  if (
    id.includes('leg-ext') ||
    id.includes('hamstring') ||
    id.includes('calf') ||
    n.includes('extension') ||
    n.includes('hamstring') ||
    n.includes('calf')
  ) {
    return [
      {
        title: 'Step 1: Machine Setup & Pre-Stretch',
        label: 'Starting Alignment',
        description: 'Align knee joint directly with machine pivot point, pad resting snugly across ankles.',
        focusCue: 'Knee aligned with axis, back against pad',
        graphicType: 'leg-machine',
        stage: 1,
      },
      {
        title: 'Step 2: Full Leg Extension / Curl',
        label: 'Driving Weight',
        description: 'Contract quad/hamstring muscles to move roller through full range of motion.',
        focusCue: 'Smooth continuous force',
        graphicType: 'leg-machine',
        stage: 2,
      },
      {
        title: 'Step 3: Peak Contraction Flex',
        label: 'Peak Squeeze',
        description: 'Lock out knees/curl heels with intense muscular contraction for 1 second, then lower slowly.',
        focusCue: 'Hold contraction, 3s negative',
        graphicType: 'leg-machine',
        stage: 3,
      },
    ]
  }

  // 10. SQUATS / LEG PRESS / HACK SQUAT / LUNGES
  if (
    id.includes('squat') ||
    id.includes('leg-press') ||
    id.includes('hack') ||
    id.includes('lunge') ||
    n.includes('squat') ||
    n.includes('leg press')
  ) {
    return [
      {
        title: 'Step 1: Setup & Stance',
        label: 'Starting Stance',
        description: 'Set feet shoulder-width with toes flared ~15-30°. Barbell secured on upper traps, core braced.',
        focusCue: 'Tight upper back, neutral spine',
        graphicType: 'squat',
        stage: 1,
      },
      {
        title: 'Step 2: Deep Parallel Descent',
        label: 'Peak Depth',
        description: 'Hinge hips and bend knees simultaneously until hip crease is below knee level. Knees track over toes.',
        focusCue: 'Keep heels flat, chest proud',
        graphicType: 'squat',
        stage: 2,
      },
      {
        title: 'Step 3: Power Drive & Lockout',
        label: 'Ascent Lockout',
        description: 'Drive forcefully through mid-foot back to standing tall. Squeeze glutes and lock hips at top.',
        focusCue: 'Exhale on drive, don’t cave knees',
        graphicType: 'squat',
        stage: 3,
      },
    ]
  }

  // 11. BENCH PRESS / DUMBBELL PRESS / CHEST FLIES / PUSH-UPS
  if (
    id.includes('bench') ||
    id.includes('press') ||
    id.includes('fly') ||
    id.includes('pushup') ||
    id.includes('dip') ||
    n.includes('bench') ||
    n.includes('chest')
  ) {
    return [
      {
        title: 'Step 1: Arch, Scapulae & Grip Setup',
        label: 'Starting Stance',
        description: 'Retract shoulder blades tight into bench, plant feet firmly, grip bar slightly wider than shoulders.',
        focusCue: 'Shoulder blades pinned, wrists straight',
        graphicType: 'bench',
        stage: 1,
      },
      {
        title: 'Step 2: Controlled 45-Degree Lowering',
        label: 'Bottom Chest Stretch',
        description: 'Lower bar smoothly to graze lower/mid-chest with elbows tucked at a 45° angle.',
        focusCue: 'Deep chest stretch, do not bounce',
        graphicType: 'bench',
        stage: 2,
      },
      {
        title: 'Step 3: Explosive Press & Chest Squeeze',
        label: 'Top Lockout Squeeze',
        description: 'Press bar up and slightly back toward eye line, squeezing chest hard at full extension.',
        focusCue: 'Drive feet into floor, exhale on press',
        graphicType: 'bench',
        stage: 3,
      },
    ]
  }

  // 12. HIIT / BURPEES / KETTLEBELL / CARDIO
  if (
    id.includes('burpee') ||
    id.includes('swing') ||
    id.includes('jump') ||
    id.includes('climber') ||
    n.includes('burpee') ||
    n.includes('swing')
  ) {
    return [
      {
        title: 'Step 1: Athletic Stance Setup',
        label: 'Starting Position',
        description: 'Feet shoulder-width, athletic hip hinge ready to absorb and transfer explosive power.',
        focusCue: 'Light on feet, core braced',
        graphicType: 'hiit',
        stage: 1,
      },
      {
        title: 'Step 2: Explosive Drive Movement',
        label: 'Max Power Phase',
        description: 'Drive hips explosively / jump / push floor away with maximum dynamic speed.',
        focusCue: 'Explosive hip snap, rapid breath',
        graphicType: 'hiit',
        stage: 2,
      },
      {
        title: 'Step 3: Soft Landing & Return',
        label: 'Reset Stance',
        description: 'Land softly through mid-foot absorbing force into hips, resetting instantly for next rep.',
        focusCue: 'Absorb through knees, keep tempo',
        graphicType: 'hiit',
        stage: 3,
      },
    ]
  }

  // GENERIC MOVEMENT
  return [
    {
      title: 'Step 1: Position & Setup',
      label: 'Starting Stance',
      description: `Prepare for ${name} with solid athletic posture, core braced, and joints aligned.`,
      focusCue: 'Stable foundation and breathing ready',
      graphicType: 'generic',
      stage: 1,
    },
    {
      title: 'Step 2: Active Movement Flow',
      label: 'Mid Movement',
      description: `Execute ${name} through full range of motion under strict muscular control.`,
      focusCue: 'Control the tempo, keep tension',
      graphicType: 'generic',
      stage: 2,
    },
    {
      title: 'Step 3: Peak Contraction & Return',
      label: 'Finish Position',
      description: 'Flex working muscles at peak point, then return along the same path under 2-3s tempo.',
      focusCue: 'Smooth reset for the next repetition',
      graphicType: 'generic',
      stage: 3,
    },
  ]
}

export function ExerciseVisualFrames({
  exerciseId,
  name,
}: {
  exerciseId: string
  name: string
}) {
  const steps = getExerciseVisualSteps(exerciseId, name)
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(true)

  // Auto-play animation cycle between Frame 1 -> Frame 2 -> Frame 3
  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 1800)
    return () => clearInterval(timer)
  }, [isPlaying, steps.length])

  const step = steps[currentStep] || steps[0]

  const handleSelectStep = (index: number) => {
    triggerHaptic('light')
    setIsPlaying(false)
    setCurrentStep(index)
  }

  const handlePrev = () => {
    triggerHaptic('light')
    setIsPlaying(false)
    setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1))
  }

  const handleNext = () => {
    triggerHaptic('light')
    setIsPlaying(false)
    setCurrentStep((prev) => (prev + 1) % steps.length)
  }

  const togglePlay = () => {
    triggerHaptic('light')
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border/90 bg-card p-3.5 shadow-sm sm:p-4">
      {/* Top Header: Step Selector Pills and Auto-play Toggle */}
      <div className="flex items-center justify-between gap-2">
        {/* Step frame tabs (1, 2, 3) */}
        <div className="flex items-center gap-1.5">
          {steps.map((s, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelectStep(idx)}
              className={`flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs font-bold transition-all active:scale-95 ${
                currentStep === idx
                  ? 'bg-primary text-primary-foreground shadow-[0_0_12px_rgba(34,197,94,0.4)]'
                  : 'border border-border bg-secondary/70 text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              <span className="flex size-4 items-center justify-center rounded-full bg-background/25 text-[10px]">
                {idx + 1}
              </span>
              <span className="hidden xs:inline">{s.label}</span>
            </button>
          ))}
        </div>

        {/* Auto Play / Pause Toggle */}
        <button
          type="button"
          onClick={togglePlay}
          className={`flex items-center gap-1 rounded-xl border px-2.5 py-1.5 text-xs font-semibold transition-all active:scale-95 ${
            isPlaying
              ? 'border-primary/40 bg-primary/10 text-primary'
              : 'border-border bg-secondary text-muted-foreground hover:text-foreground'
          }`}
          title={isPlaying ? 'Pause auto-play animation' : 'Start auto-play animation'}
        >
          {isPlaying ? (
            <>
              <Pause className="size-3.5 fill-primary" />
              <span className="text-[11px] font-bold">Auto</span>
            </>
          ) : (
            <>
              <Play className="size-3.5 fill-current" />
              <span className="text-[11px] font-bold">Play</span>
            </>
          )}
        </button>
      </div>

      {/* Main Visual Display Stage */}
      <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-background/80 p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center gap-3"
          >
            {/* Visual Biomechanical Graphic / Pose Frame */}
            <div className="relative flex h-36 w-full max-w-sm items-center justify-center rounded-xl bg-gradient-to-b from-primary/[0.08] to-transparent border border-primary/20 shadow-inner">
              <BiomechanicGraphic type={step.graphicType} stage={step.stage} />

              {/* Stage Badge in Graphic */}
              <div className="absolute top-2.5 left-2.5 flex items-center gap-1 rounded-md bg-background/90 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-primary border border-border shadow-xs backdrop-blur-xs">
                <Sparkles className="size-3" />
                <span>Frame {currentStep + 1} of 3</span>
              </div>

              {/* Movement Vector Indicator */}
              <div className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded-md bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary border border-primary/30">
                <span>{step.label}</span>
              </div>
            </div>

            {/* Frame Title & Cue */}
            <div className="flex w-full flex-col gap-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h4 className="text-sm font-extrabold text-foreground">
                  {step.title}
                </h4>
                <span className="inline-flex items-center gap-1 self-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary border border-primary/20">
                  <Target className="size-3" />
                  {step.focusCue}
                </span>
              </div>

              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Left & Right Step Arrow Overlays */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous step frame"
          className="absolute left-2 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center rounded-full bg-card/80 border border-border text-foreground shadow-md backdrop-blur-xs transition-all hover:bg-card hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="size-4" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next step frame"
          className="absolute right-2 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center rounded-full bg-card/80 border border-border text-foreground shadow-md backdrop-blur-xs transition-all hover:bg-card hover:scale-105 active:scale-95"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>

      {/* Bottom 3-Frame Step Thumbnails */}
      <div className="grid grid-cols-3 gap-2">
        {steps.map((s, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSelectStep(idx)}
            className={`flex flex-col items-center gap-1 rounded-xl p-2 text-center transition-all ${
              currentStep === idx
                ? 'border-2 border-primary bg-primary/10 shadow-[0_0_12px_rgba(34,197,94,0.2)]'
                : 'border border-border/70 bg-card hover:border-border hover:bg-secondary/50'
            }`}
          >
            <div className="flex size-7 items-center justify-center rounded-lg bg-background font-mono text-xs font-black text-primary shadow-xs">
              {idx + 1}
            </div>
            <span className="text-[11px] font-bold leading-tight text-foreground truncate w-full">
              {s.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

/**
 * Biomechanical high-contrast vector graphics showing clear exercise posture & movement lines
 */
function BiomechanicGraphic({
  type,
  stage,
}: {
  type: GraphicType
  stage: 1 | 2 | 3
}) {
  const primaryColor = '#22c55e'
  const accentColor = '#3b82f6'
  const warningColor = '#f59e0b'
  const bodyColor = '#e2e8f0'

  // 1. SQUAT / LEGS
  if (type === 'squat') {
    return (
      <svg viewBox="0 0 200 120" className="h-full w-auto select-none" fill="none">
        <line x1="20" y1="105" x2="180" y2="105" stroke="#334155" strokeWidth="3" strokeDasharray="4 4" />
        
        {stage === 1 && (
          <g>
            <circle cx="100" cy="22" r="10" fill={bodyColor} />
            <line x1="100" y1="32" x2="100" y2="65" stroke={bodyColor} strokeWidth="6" strokeLinecap="round" />
            <rect x="55" y="28" width="90" height="5" rx="2.5" fill={primaryColor} />
            <circle cx="58" cy="30" r="8" fill={primaryColor} />
            <circle cx="142" cy="30" r="8" fill={primaryColor} />
            <line x1="100" y1="65" x2="88" y2="85" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="88" y1="85" x2="86" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="65" x2="112" y2="85" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="112" y1="85" x2="114" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <path d="M 155 35 L 155 65 M 150 58 L 155 65 L 160 58" stroke={warningColor} strokeWidth="2.5" strokeLinecap="round" />
          </g>
        )}

        {stage === 2 && (
          <g>
            <circle cx="115" cy="45" r="10" fill={bodyColor} />
            <line x1="115" y1="55" x2="90" y2="80" stroke={bodyColor} strokeWidth="6" strokeLinecap="round" />
            <rect x="70" y="50" width="90" height="5" rx="2.5" fill={primaryColor} />
            <circle cx="73" cy="52" r="8" fill={primaryColor} />
            <circle cx="157" cy="52" r="8" fill={primaryColor} />
            <line x1="90" y1="80" x2="120" y2="80" stroke={primaryColor} strokeWidth="7" strokeLinecap="round" />
            <line x1="120" y1="80" x2="116" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <circle cx="120" cy="80" r="12" stroke={accentColor} strokeWidth="2" strokeDasharray="3 3" />
          </g>
        )}

        {stage === 3 && (
          <g>
            <circle cx="100" cy="20" r="10" fill={bodyColor} />
            <line x1="100" y1="30" x2="100" y2="65" stroke={bodyColor} strokeWidth="6" strokeLinecap="round" />
            <rect x="55" y="26" width="90" height="5" rx="2.5" fill={primaryColor} />
            <circle cx="58" cy="28" r="8" fill={primaryColor} />
            <circle cx="142" cy="28" r="8" fill={primaryColor} />
            <line x1="100" y1="65" x2="88" y2="85" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="88" y1="85" x2="86" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="65" x2="112" y2="85" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="112" y1="85" x2="114" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <path d="M 160 70 L 160 30 M 155 38 L 160 30 L 165 38" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" />
          </g>
        )}
      </svg>
    )
  }

  // 2. BENCH PRESS / CHEST
  if (type === 'bench') {
    return (
      <svg viewBox="0 0 200 120" className="h-full w-auto select-none" fill="none">
        <rect x="40" y="75" width="120" height="12" rx="4" fill="#334155" />
        <rect x="60" y="87" width="8" height="20" fill="#1e293b" />
        <rect x="130" y="87" width="8" height="20" fill="#1e293b" />
        
        {stage === 1 && (
          <g>
            <circle cx="60" cy="65" r="9" fill={bodyColor} />
            <line x1="68" y1="69" x2="135" y2="69" stroke={bodyColor} strokeWidth="7" strokeLinecap="round" />
            <line x1="95" y1="69" x2="95" y2="30" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <rect x="60" y="26" width="70" height="5" rx="2.5" fill={primaryColor} />
            <circle cx="63" cy="28" r="8" fill={primaryColor} />
            <circle cx="127" cy="28" r="8" fill={primaryColor} />
            <path d="M 145 30 L 145 55 M 140 48 L 145 55 L 150 48" stroke={warningColor} strokeWidth="2" strokeLinecap="round" />
          </g>
        )}

        {stage === 2 && (
          <g>
            <circle cx="60" cy="65" r="9" fill={bodyColor} />
            <line x1="68" y1="69" x2="135" y2="69" stroke={primaryColor} strokeWidth="7" strokeLinecap="round" />
            <line x1="95" y1="69" x2="80" y2="60" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="80" y1="60" x2="95" y2="52" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <rect x="60" y="49" width="70" height="5" rx="2.5" fill={primaryColor} />
            <circle cx="63" cy="51" r="8" fill={primaryColor} />
            <circle cx="127" cy="51" r="8" fill={primaryColor} />
          </g>
        )}

        {stage === 3 && (
          <g>
            <circle cx="60" cy="65" r="9" fill={bodyColor} />
            <line x1="68" y1="69" x2="135" y2="69" stroke={primaryColor} strokeWidth="7" strokeLinecap="round" />
            <line x1="95" y1="69" x2="95" y2="28" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" />
            <rect x="60" y="24" width="70" height="5" rx="2.5" fill={primaryColor} />
            <circle cx="63" cy="26" r="8" fill={primaryColor} />
            <circle cx="127" cy="26" r="8" fill={primaryColor} />
            <path d="M 145 60 L 145 25 M 140 33 L 145 25 L 150 33" stroke={primaryColor} strokeWidth="2.5" strokeLinecap="round" />
          </g>
        )}
      </svg>
    )
  }

  // 3. DEADLIFT / RDL / POSTERIOR CHAIN
  if (type === 'deadlift') {
    return (
      <svg viewBox="0 0 200 120" className="h-full w-auto select-none" fill="none">
        <line x1="20" y1="105" x2="180" y2="105" stroke="#334155" strokeWidth="3" strokeDasharray="4 4" />

        {stage === 1 && (
          // Hip hinge setup
          <g>
            <circle cx="125" cy="40" r="9" fill={bodyColor} />
            <line x1="125" y1="48" x2="90" y2="70" stroke={bodyColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="90" y1="70" x2="95" y2="90" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="95" y1="90" x2="98" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            {/* Arms hanging to barbell */}
            <line x1="120" y1="52" x2="105" y2="92" stroke={bodyColor} strokeWidth="4" strokeLinecap="round" />
            <circle cx="105" cy="92" r="12" fill={primaryColor} />
            <rect x="70" y="90" width="70" height="5" rx="2.5" fill={primaryColor} />
          </g>
        )}

        {stage === 2 && (
          // Mid-shin drive
          <g>
            <circle cx="115" cy="30" r="9" fill={bodyColor} />
            <line x1="115" y1="38" x2="95" y2="65" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="95" y1="65" x2="98" y2="90" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="98" y1="90" x2="100" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="112" y1="42" x2="105" y2="75" stroke={bodyColor} strokeWidth="4" strokeLinecap="round" />
            <circle cx="105" cy="75" r="12" fill={primaryColor} />
            <rect x="70" y="73" width="70" height="5" rx="2.5" fill={primaryColor} />
            <path d="M 140 85 L 140 55 M 135 62 L 140 55 L 145 62" stroke={warningColor} strokeWidth="2.5" strokeLinecap="round" />
          </g>
        )}

        {stage === 3 && (
          // Standing tall lockout
          <g>
            <circle cx="100" cy="20" r="9" fill={bodyColor} />
            <line x1="100" y1="29" x2="100" y2="65" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="100" y1="65" x2="96" y2="105" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="65" x2="104" y2="105" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            {/* Barbell locked at thighs */}
            <line x1="100" y1="35" x2="100" y2="65" stroke={bodyColor} strokeWidth="4" strokeLinecap="round" />
            <circle cx="100" cy="65" r="12" fill={primaryColor} />
            <rect x="65" y="63" width="70" height="5" rx="2.5" fill={primaryColor} />
            <circle cx="100" cy="65" r="16" stroke={primaryColor} strokeWidth="2" strokeDasharray="3 3" />
          </g>
        )}
      </svg>
    )
  }

  // 4. OVERHEAD PRESS / SHOULDERS
  if (type === 'press') {
    return (
      <svg viewBox="0 0 200 120" className="h-full w-auto select-none" fill="none">
        <line x1="20" y1="105" x2="180" y2="105" stroke="#334155" strokeWidth="3" strokeDasharray="4 4" />

        {stage === 1 && (
          <g>
            <circle cx="100" cy="28" r="9" fill={bodyColor} />
            <line x1="100" y1="37" x2="100" y2="70" stroke={bodyColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="100" y1="70" x2="90" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="70" x2="110" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            {/* Bar at collarbone */}
            <rect x="65" y="38" width="70" height="5" rx="2.5" fill={primaryColor} />
            <circle cx="68" cy="40" r="7" fill={primaryColor} />
            <circle cx="132" cy="40" r="7" fill={primaryColor} />
            <path d="M 148 48 L 148 22 M 144 28 L 148 22 L 152 28" stroke={warningColor} strokeWidth="2" strokeLinecap="round" />
          </g>
        )}

        {stage === 2 && (
          <g>
            <circle cx="97" cy="28" r="9" fill={bodyColor} />
            <line x1="97" y1="37" x2="98" y2="70" stroke={bodyColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="98" y1="70" x2="90" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="98" y1="70" x2="110" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            {/* Bar passing forehead */}
            <line x1="98" y1="42" x2="100" y2="22" stroke={primaryColor} strokeWidth="4" strokeLinecap="round" />
            <rect x="65" y="20" width="70" height="5" rx="2.5" fill={primaryColor} />
            <circle cx="68" cy="22" r="7" fill={primaryColor} />
            <circle cx="132" cy="22" r="7" fill={primaryColor} />
          </g>
        )}

        {stage === 3 && (
          <g>
            <circle cx="100" cy="30" r="9" fill={bodyColor} />
            <line x1="100" y1="39" x2="100" y2="70" stroke={bodyColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="100" y1="70" x2="90" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="70" x2="110" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            {/* Full lockout over spine */}
            <line x1="100" y1="42" x2="100" y2="14" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <rect x="65" y="10" width="70" height="5" rx="2.5" fill={primaryColor} />
            <circle cx="68" cy="12" r="8" fill={primaryColor} />
            <circle cx="132" cy="12" r="8" fill={primaryColor} />
            <circle cx="100" cy="12" r="14" stroke={primaryColor} strokeWidth="2" strokeDasharray="3 3" />
          </g>
        )}
      </svg>
    )
  }

  // 5. PULL-UP / LAT PULLDOWN / ROWS
  if (type === 'pull') {
    return (
      <svg viewBox="0 0 200 120" className="h-full w-auto select-none" fill="none">
        {/* Overhead pull bar */}
        <rect x="45" y="12" width="110" height="5" rx="2.5" fill="#475569" />

        {stage === 1 && (
          // Dead hang / full stretch
          <g>
            <circle cx="100" cy="42" r="9" fill={bodyColor} />
            <line x1="100" y1="51" x2="100" y2="80" stroke={bodyColor} strokeWidth="6" strokeLinecap="round" />
            {/* Arms fully extended to bar */}
            <line x1="100" y1="53" x2="70" y2="14" stroke={bodyColor} strokeWidth="4" strokeLinecap="round" />
            <line x1="100" y1="53" x2="130" y2="14" stroke={bodyColor} strokeWidth="4" strokeLinecap="round" />
            <line x1="100" y1="80" x2="94" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="80" x2="106" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <path d="M 145 40 L 145 65 M 140 58 L 145 65 L 150 58" stroke={warningColor} strokeWidth="2" strokeLinecap="round" />
          </g>
        )}

        {stage === 2 && (
          // Mid pull / elbows driving down
          <g>
            <circle cx="100" cy="30" r="9" fill={bodyColor} />
            <line x1="100" y1="39" x2="100" y2="68" stroke={primaryColor} strokeWidth="7" strokeLinecap="round" />
            {/* Bent arms driving elbows to ribs */}
            <line x1="100" y1="41" x2="75" y2="52" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="75" y1="52" x2="75" y2="14" stroke={primaryColor} strokeWidth="4" strokeLinecap="round" />
            <line x1="100" y1="41" x2="125" y2="52" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="125" y1="52" x2="125" y2="14" stroke={primaryColor} strokeWidth="4" strokeLinecap="round" />
            <line x1="100" y1="68" x2="94" y2="95" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="68" x2="106" y2="95" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
          </g>
        )}

        {stage === 3 && (
          // Chest to bar / peak lat squeeze
          <g>
            <circle cx="100" cy="22" r="9" fill={bodyColor} />
            <line x1="100" y1="31" x2="100" y2="60" stroke={primaryColor} strokeWidth="7" strokeLinecap="round" />
            <line x1="100" y1="34" x2="72" y2="44" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="72" y1="44" x2="75" y2="14" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="34" x2="128" y2="44" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="128" y1="44" x2="125" y2="14" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="60" x2="94" y2="88" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="60" x2="106" y2="88" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <circle cx="100" cy="40" r="14" stroke={primaryColor} strokeWidth="2" strokeDasharray="3 3" />
          </g>
        )}
      </svg>
    )
  }

  // 6. BICEP CURLS
  if (type === 'curl') {
    return (
      <svg viewBox="0 0 200 120" className="h-full w-auto select-none" fill="none">
        <line x1="20" y1="105" x2="180" y2="105" stroke="#334155" strokeWidth="3" strokeDasharray="4 4" />

        {stage === 1 && (
          // Arms extended down
          <g>
            <circle cx="100" cy="25" r="9" fill={bodyColor} />
            <line x1="100" y1="34" x2="100" y2="68" stroke={bodyColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="100" y1="68" x2="92" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="68" x2="108" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            {/* Arms extended down with dumbbells */}
            <line x1="100" y1="38" x2="88" y2="68" stroke={bodyColor} strokeWidth="4" strokeLinecap="round" />
            <line x1="100" y1="38" x2="112" y2="68" stroke={bodyColor} strokeWidth="4" strokeLinecap="round" />
            <circle cx="88" cy="68" r="6" fill={primaryColor} />
            <circle cx="112" cy="68" r="6" fill={primaryColor} />
            <path d="M 72 65 Q 65 45 78 35" stroke={warningColor} strokeWidth="2" strokeDasharray="3 3" />
          </g>
        )}

        {stage === 2 && (
          // Curling 90 degrees
          <g>
            <circle cx="100" cy="25" r="9" fill={bodyColor} />
            <line x1="100" y1="34" x2="100" y2="68" stroke={bodyColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="100" y1="68" x2="92" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="68" x2="108" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            {/* Forearms at 90° */}
            <line x1="100" y1="38" x2="92" y2="52" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="92" y1="52" x2="80" y2="45" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="38" x2="108" y2="52" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="108" y1="52" x2="120" y2="45" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <circle cx="80" cy="45" r="7" fill={primaryColor} />
            <circle cx="120" cy="45" r="7" fill={primaryColor} />
          </g>
        )}

        {stage === 3 && (
          // Peak squeeze flex
          <g>
            <circle cx="100" cy="25" r="9" fill={bodyColor} />
            <line x1="100" y1="34" x2="100" y2="68" stroke={bodyColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="100" y1="68" x2="92" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="68" x2="108" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            {/* Arms fully flexed at top */}
            <line x1="100" y1="38" x2="94" y2="52" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="94" y1="52" x2="90" y2="35" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="100" y1="38" x2="106" y2="52" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="106" y1="52" x2="110" y2="35" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" />
            <circle cx="90" cy="35" r="7" fill={primaryColor} />
            <circle cx="110" cy="35" r="7" fill={primaryColor} />
            <circle cx="92" cy="44" r="8" stroke={primaryColor} strokeWidth="2" strokeDasharray="2 2" />
            <circle cx="108" cy="44" r="8" stroke={primaryColor} strokeWidth="2" strokeDasharray="2 2" />
          </g>
        )}
      </svg>
    )
  }

  // 7. TRICEP PUSHDOWNS / EXTENSIONS
  if (type === 'tricep') {
    return (
      <svg viewBox="0 0 200 120" className="h-full w-auto select-none" fill="none">
        <line x1="20" y1="105" x2="180" y2="105" stroke="#334155" strokeWidth="3" strokeDasharray="4 4" />
        {/* Cable attachment at top */}
        <circle cx="100" cy="8" r="4" fill="#64748b" />
        <line x1="100" y1="8" x2="100" y2="30" stroke="#64748b" strokeWidth="2" />

        {stage === 1 && (
          <g>
            <circle cx="100" cy="26" r="9" fill={bodyColor} />
            <line x1="100" y1="35" x2="100" y2="68" stroke={bodyColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="100" y1="68" x2="92" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="68" x2="108" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            {/* Forearms at 90° */}
            <line x1="100" y1="40" x2="100" y2="52" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="52" x2="100" y2="40" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <circle cx="100" cy="40" r="6" fill={primaryColor} />
          </g>
        )}

        {stage === 2 && (
          <g>
            <circle cx="100" cy="26" r="9" fill={bodyColor} />
            <line x1="100" y1="35" x2="100" y2="68" stroke={bodyColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="100" y1="68" x2="92" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="68" x2="108" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            {/* Extending down */}
            <line x1="100" y1="40" x2="100" y2="52" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="52" x2="100" y2="62" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <circle cx="100" cy="62" r="6" fill={primaryColor} />
            <path d="M 116 48 L 116 70 M 112 64 L 116 70 L 120 64" stroke={warningColor} strokeWidth="2" strokeLinecap="round" />
          </g>
        )}

        {stage === 3 && (
          <g>
            <circle cx="100" cy="26" r="9" fill={bodyColor} />
            <line x1="100" y1="35" x2="100" y2="68" stroke={bodyColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="100" y1="68" x2="92" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="68" x2="108" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            {/* Full straight arm lockout */}
            <line x1="100" y1="40" x2="90" y2="72" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="100" y1="40" x2="110" y2="72" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" />
            <circle cx="90" cy="72" r="6" fill={primaryColor} />
            <circle cx="110" cy="72" r="6" fill={primaryColor} />
            <circle cx="95" cy="50" r="8" stroke={primaryColor} strokeWidth="2" strokeDasharray="2 2" />
            <circle cx="105" cy="50" r="8" stroke={primaryColor} strokeWidth="2" strokeDasharray="2 2" />
          </g>
        )}
      </svg>
    )
  }

  // 8. ABS / CRUNCHES / HANGING LEG RAISES / CORE
  if (type === 'abs') {
    return (
      <svg viewBox="0 0 200 120" className="h-full w-auto select-none" fill="none">
        {/* Floor mat / pullup bar */}
        <line x1="40" y1="18" x2="160" y2="18" stroke="#475569" strokeWidth="4" />

        {stage === 1 && (
          <g>
            <circle cx="100" cy="38" r="9" fill={bodyColor} />
            <line x1="100" y1="47" x2="100" y2="75" stroke={bodyColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="100" y1="48" x2="85" y2="18" stroke={bodyColor} strokeWidth="4" strokeLinecap="round" />
            <line x1="100" y1="48" x2="115" y2="18" stroke={bodyColor} strokeWidth="4" strokeLinecap="round" />
            {/* Legs hanging straight */}
            <line x1="100" y1="75" x2="100" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
          </g>
        )}

        {stage === 2 && (
          <g>
            <circle cx="100" cy="38" r="9" fill={bodyColor} />
            <line x1="100" y1="47" x2="98" y2="75" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="100" y1="48" x2="85" y2="18" stroke={bodyColor} strokeWidth="4" strokeLinecap="round" />
            <line x1="100" y1="48" x2="115" y2="18" stroke={bodyColor} strokeWidth="4" strokeLinecap="round" />
            {/* Knees lifting up to 90° */}
            <line x1="98" y1="75" x2="120" y2="75" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="120" y1="75" x2="122" y2="95" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <path d="M 105 100 Q 130 95 125 75" stroke={warningColor} strokeWidth="2" strokeDasharray="3 3" />
          </g>
        )}

        {stage === 3 && (
          <g>
            <circle cx="100" cy="38" r="9" fill={bodyColor} />
            {/* Rounded spine in full ab crunch */}
            <path d="M 100 47 Q 90 60 98 75" stroke={primaryColor} strokeWidth="7" strokeLinecap="round" fill="none" />
            <line x1="100" y1="48" x2="85" y2="18" stroke={bodyColor} strokeWidth="4" strokeLinecap="round" />
            <line x1="100" y1="48" x2="115" y2="18" stroke={bodyColor} strokeWidth="4" strokeLinecap="round" />
            {/* Knees tucked tight to chest */}
            <line x1="98" y1="75" x2="118" y2="55" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="118" y1="55" x2="110" y2="75" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <circle cx="95" cy="62" r="10" stroke={primaryColor} strokeWidth="2" strokeDasharray="2 2" />
          </g>
        )}
      </svg>
    )
  }

  // 9. GLUTE / HIP THRUST / BRIDGE
  if (type === 'glute') {
    return (
      <svg viewBox="0 0 200 120" className="h-full w-auto select-none" fill="none">
        {/* Bench support */}
        <rect x="35" y="60" width="30" height="35" rx="3" fill="#334155" />
        <line x1="20" y1="105" x2="180" y2="105" stroke="#334155" strokeWidth="3" strokeDasharray="4 4" />

        {stage === 1 && (
          // Hips lowered down
          <g>
            <circle cx="58" cy="50" r="8" fill={bodyColor} />
            <line x1="62" y1="56" x2="90" y2="85" stroke={bodyColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="90" y1="85" x2="120" y2="85" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="120" y1="85" x2="120" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <rect x="75" y="80" width="30" height="6" rx="3" fill={primaryColor} />
            <path d="M 90 92 L 90 62 M 85 70 L 90 62 L 95 70" stroke={warningColor} strokeWidth="2.5" strokeLinecap="round" />
          </g>
        )}

        {stage === 2 && (
          // Hips driving upward
          <g>
            <circle cx="58" cy="50" r="8" fill={bodyColor} />
            <line x1="62" y1="56" x2="95" y2="68" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="95" y1="68" x2="122" y2="75" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="122" y1="75" x2="120" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <rect x="80" y="65" width="30" height="6" rx="3" fill={primaryColor} />
          </g>
        )}

        {stage === 3 && (
          // Full horizontal lockout & glute squeeze
          <g>
            <circle cx="58" cy="50" r="8" fill={bodyColor} />
            {/* Flat horizontal table */}
            <line x1="62" y1="56" x2="115" y2="56" stroke={primaryColor} strokeWidth="7" strokeLinecap="round" />
            <line x1="115" y1="56" x2="118" y2="105" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" />
            <rect x="85" y="52" width="32" height="7" rx="3.5" fill={primaryColor} />
            <circle cx="95" cy="56" r="12" stroke={primaryColor} strokeWidth="2.5" strokeDasharray="3 3" />
          </g>
        )}
      </svg>
    )
  }

  // 10. LATERAL RAISES
  if (type === 'lateral') {
    return (
      <svg viewBox="0 0 200 120" className="h-full w-auto select-none" fill="none">
        <line x1="20" y1="105" x2="180" y2="105" stroke="#334155" strokeWidth="3" strokeDasharray="4 4" />

        {stage === 1 && (
          <g>
            <circle cx="100" cy="24" r="9" fill={bodyColor} />
            <line x1="100" y1="33" x2="100" y2="68" stroke={bodyColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="100" y1="68" x2="90" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="68" x2="110" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            {/* Arms at sides */}
            <line x1="100" y1="38" x2="88" y2="68" stroke={bodyColor} strokeWidth="4" strokeLinecap="round" />
            <line x1="100" y1="38" x2="112" y2="68" stroke={bodyColor} strokeWidth="4" strokeLinecap="round" />
            <circle cx="88" cy="68" r="6" fill={primaryColor} />
            <circle cx="112" cy="68" r="6" fill={primaryColor} />
          </g>
        )}

        {stage === 2 && (
          <g>
            <circle cx="100" cy="24" r="9" fill={bodyColor} />
            <line x1="100" y1="33" x2="100" y2="68" stroke={bodyColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="100" y1="68" x2="90" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="68" x2="110" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            {/* Raising 45° */}
            <line x1="100" y1="38" x2="72" y2="52" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="38" x2="128" y2="52" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <circle cx="72" cy="52" r="6" fill={primaryColor} />
            <circle cx="128" cy="52" r="6" fill={primaryColor} />
          </g>
        )}

        {stage === 3 && (
          <g>
            <circle cx="100" cy="24" r="9" fill={bodyColor} />
            <line x1="100" y1="33" x2="100" y2="68" stroke={bodyColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="100" y1="68" x2="90" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            <line x1="100" y1="68" x2="110" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
            {/* Arms wide at shoulder height */}
            <line x1="100" y1="38" x2="58" y2="38" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" />
            <line x1="100" y1="38" x2="142" y2="38" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" />
            <circle cx="58" cy="38" r="7" fill={primaryColor} />
            <circle cx="142" cy="38" r="7" fill={primaryColor} />
            <circle cx="80" cy="38" r="7" stroke={primaryColor} strokeWidth="2" strokeDasharray="2 2" />
            <circle cx="120" cy="38" r="7" stroke={primaryColor} strokeWidth="2" strokeDasharray="2 2" />
          </g>
        )}
      </svg>
    )
  }

  // DEFAULT / LEG MACHINE / HIIT
  return (
    <svg viewBox="0 0 200 120" className="h-full w-auto select-none" fill="none">
      <line x1="20" y1="105" x2="180" y2="105" stroke="#334155" strokeWidth="3" strokeDasharray="4 4" />
      <circle cx="100" cy="25" r="10" fill={bodyColor} />
      <line x1="100" y1="35" x2="100" y2="70" stroke={bodyColor} strokeWidth="6" strokeLinecap="round" />

      {stage === 1 && (
        <g>
          <line x1="100" y1="40" x2="80" y2="65" stroke={bodyColor} strokeWidth="4" strokeLinecap="round" />
          <line x1="100" y1="40" x2="120" y2="65" stroke={bodyColor} strokeWidth="4" strokeLinecap="round" />
          <line x1="100" y1="70" x2="88" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
          <line x1="100" y1="70" x2="112" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
          <circle cx="80" cy="65" r="5" fill={primaryColor} />
          <circle cx="120" cy="65" r="5" fill={primaryColor} />
        </g>
      )}

      {stage === 2 && (
        <g>
          <line x1="100" y1="40" x2="75" y2="45" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
          <line x1="100" y1="40" x2="125" y2="45" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
          <line x1="100" y1="70" x2="85" y2="105" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
          <line x1="100" y1="70" x2="115" y2="105" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
          <circle cx="75" cy="45" r="6" fill={primaryColor} />
          <circle cx="125" cy="45" r="6" fill={primaryColor} />
        </g>
      )}

      {stage === 3 && (
        <g>
          <line x1="100" y1="40" x2="70" y2="35" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
          <line x1="100" y1="40" x2="130" y2="35" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
          <line x1="100" y1="70" x2="88" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
          <line x1="100" y1="70" x2="112" y2="105" stroke={bodyColor} strokeWidth="5" strokeLinecap="round" />
          <circle cx="70" cy="35" r="7" fill={primaryColor} />
          <circle cx="130" cy="35" r="7" fill={primaryColor} />
          <circle cx="100" cy="50" r="14" stroke={primaryColor} strokeWidth="2" strokeDasharray="3 3" />
        </g>
      )}
    </svg>
  )
}
