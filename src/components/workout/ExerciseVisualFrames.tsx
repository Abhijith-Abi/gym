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
  Layers,
  Image as ImageIcon,
  Activity,
  Maximize2,
} from 'lucide-react'
import Image from 'next/image'
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

export function getExerciseAnatomicalImage(exerciseId: string, name: string): {
  src: string
  alt: string
  muscles: string[]
} {
  const id = exerciseId.toLowerCase()
  const n = name.toLowerCase()

  if (id.includes('bench') || id.includes('chest') || id.includes('pushup') || id.includes('dip') || n.includes('bench')) {
    return {
      src: '/exercises/bench_press.jpg',
      alt: 'Barbell Bench Press Anatomical Muscle Guide',
      muscles: ['Pectoralis Major', 'Anterior Deltoids', 'Triceps Brachii'],
    }
  }

  if (id.includes('squat') || id.includes('leg-press') || id.includes('hack') || id.includes('lunge') || n.includes('squat')) {
    return {
      src: '/exercises/squat.jpg',
      alt: 'Barbell Squat Anatomical Muscle Activation Guide',
      muscles: ['Quadriceps Femoris', 'Gluteus Maximus', 'Erector Spinae'],
    }
  }

  if (id.includes('deadlift') || id.includes('rdl') || n.includes('deadlift')) {
    return {
      src: '/exercises/deadlift.jpg',
      alt: 'Deadlift Anatomical Muscle Guide',
      muscles: ['Erector Spinae (Lower Back)', 'Gluteus Maximus', 'Hamstrings', 'Trapezius'],
    }
  }

  if (id.includes('curl') || id.includes('bicep') || n.includes('curl')) {
    return {
      src: '/exercises/bicep_curl.jpg',
      alt: 'Dumbbell Bicep Curl Anatomical Muscle Guide',
      muscles: ['Biceps Brachii (Short & Long Head)', 'Brachialis', 'Brachioradialis'],
    }
  }

  if (id.includes('pull') || id.includes('row') || id.includes('lat') || id.includes('chin') || n.includes('pull') || n.includes('row')) {
    return {
      src: '/exercises/pullup_back.jpg',
      alt: 'Pull-Up & Lat Pulldown Anatomical Guide',
      muscles: ['Latissimus Dorsi', 'Trapezius', 'Rhomboids', 'Rear Deltoid'],
    }
  }

  if (id.includes('tricep') || id.includes('pushdown') || id.includes('skull') || n.includes('tricep')) {
    return {
      src: '/exercises/tricep_pushdown.jpg',
      alt: 'Cable Triceps Pushdown Anatomical Guide',
      muscles: ['Triceps Brachii (Lateral, Long & Medial Heads)'],
    }
  }

  if (id.includes('lateral') || id.includes('face-pull') || n.includes('lateral')) {
    return {
      src: '/exercises/lateral_raise.jpg',
      alt: 'Dumbbell Lateral Raise Anatomical Guide',
      muscles: ['Lateral Deltoid', 'Trapezius & Supraspinatus'],
    }
  }

  if (id.includes('overhead') || id.includes('shoulder') || id.includes('military') || id.includes('arnold') || n.includes('overhead') || n.includes('shoulder')) {
    return {
      src: '/exercises/overhead_press.jpg',
      alt: 'Overhead Shoulder Press Anatomical Guide',
      muscles: ['Anterior Deltoid', 'Lateral Deltoid', 'Upper Trapezius'],
    }
  }

  // Default to Abdominal Crunches / Core Anatomical Guide
  return {
    src: '/exercises/abs_crunch.jpg',
    alt: 'Abdominal Crunch Core Anatomical Guide',
    muscles: ['Rectus Abdominis', 'External Obliques'],
  }
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
  const photo = getExerciseAnatomicalImage(exerciseId, name)
  const [viewMode, setViewMode] = useState<'photo' | 'steps'>('photo')
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [isZoomed, setIsZoomed] = useState<boolean>(false)

  // Auto-play animation cycle between Frame 1 -> Frame 2 -> Frame 3
  useEffect(() => {
    if (!isPlaying || viewMode !== 'steps') return
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 1800)
    return () => clearInterval(timer)
  }, [isPlaying, viewMode, steps.length])

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
    <div className="flex flex-col gap-3 rounded-2xl border border-border/90 bg-card p-3 shadow-sm sm:p-4">
      {/* Top View Mode Switcher: HD 3D Anatomical Guide vs 3-Step Motion Frames */}
      <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-2.5">
        <div className="flex items-center gap-1.5 rounded-xl bg-secondary/80 p-1">
          <button
            type="button"
            onClick={() => {
              triggerHaptic('light')
              setViewMode('photo')
            }}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold transition-all active:scale-95 ${
              viewMode === 'photo'
                ? 'bg-primary text-primary-foreground shadow-[0_0_12px_rgba(34,197,94,0.35)]'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <ImageIcon className="size-3.5" />
            <span>3D Muscle Guide</span>
          </button>

          <button
            type="button"
            onClick={() => {
              triggerHaptic('light')
              setViewMode('steps')
            }}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold transition-all active:scale-95 ${
              viewMode === 'steps'
                ? 'bg-primary text-primary-foreground shadow-[0_0_12px_rgba(34,197,94,0.35)]'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Activity className="size-3.5" />
            <span>Motion Steps</span>
          </button>
        </div>

        {viewMode === 'steps' && (
          /* Auto Play / Pause Toggle */
          <button
            type="button"
            onClick={togglePlay}
            className={`flex items-center gap-1 rounded-xl border px-2.5 py-1 text-xs font-semibold transition-all active:scale-95 ${
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
        )}

        {viewMode === 'photo' && (
          <button
            type="button"
            onClick={() => setIsZoomed(!isZoomed)}
            className="flex items-center gap-1 rounded-xl border border-border bg-secondary/80 px-2.5 py-1 text-[11px] font-semibold text-muted-foreground hover:text-foreground active:scale-95"
          >
            <Maximize2 className="size-3" />
            <span>{isZoomed ? 'Fit' : 'Expand'}</span>
          </button>
        )}
      </div>

      {/* MODE 1: HD 3D ANATOMICAL MUSCLE ILLUSTRATION (Start + Contraction Guide) */}
      {viewMode === 'photo' && (
        <div className="flex flex-col gap-2.5">
          <div className="relative w-full overflow-hidden rounded-2xl border border-border/80 bg-background/90 shadow-inner">
            <div className={`relative w-full transition-all duration-300 ${isZoomed ? 'h-64 sm:h-80' : 'h-48 sm:h-56'}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-contain p-1 rounded-xl select-none"
                priority
              />
            </div>

            {/* Overlay Badge */}
            <div className="absolute top-2.5 left-2.5 flex items-center gap-1 rounded-md bg-background/90 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-primary border border-border shadow-xs backdrop-blur-xs">
              <Sparkles className="size-3 text-primary" />
              <span>Anatomical Visual Guide</span>
            </div>
          </div>

          {/* Active Muscle Labels */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Target Activation:
            </span>
            {photo.muscles.map((m) => (
              <span
                key={m}
                className="rounded-lg border border-primary/30 bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* MODE 2: 3-STEP ANIMATED MOTION FRAMES */}
      {viewMode === 'steps' && (
        <>
          {/* Step Selector Pills */}
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

          {/* Main Visual Display Stage */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-border/80 bg-background/80 p-3 sm:p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="flex w-full flex-col items-center justify-center gap-3"
              >
                {/* Visual Biomechanical Graphic / Pose Frame */}
                <div className="relative flex h-32 xs:h-36 sm:h-40 w-full items-center justify-center rounded-xl bg-gradient-to-b from-primary/[0.08] to-transparent border border-primary/20 shadow-inner overflow-hidden p-1">
                  <BiomechanicGraphic type={step.graphicType} stage={step.stage} />

                  {/* Stage Badge in Graphic */}
                  <div className="absolute top-2 left-2 flex items-center gap-1 rounded-md bg-background/90 px-1.5 py-0.5 text-[9px] xs:text-[10px] font-black uppercase tracking-wider text-primary border border-border shadow-xs backdrop-blur-xs">
                    <Sparkles className="size-2.5 xs:size-3" />
                    <span>Frame {currentStep + 1}/3</span>
                  </div>

                  {/* Movement Vector Indicator */}
                  <div className="absolute top-2 right-2 flex items-center gap-1 rounded-md bg-primary/20 px-1.5 py-0.5 text-[9px] xs:text-[10px] font-bold text-primary border border-primary/30">
                    <span className="truncate max-w-[120px]">{step.label}</span>
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
        </>
      )}
    </div>
  )
}

/**
 * Anatomical 3D-styled medical gym illustrations showing realistic body musculature
 * with highlighted red active muscle contraction zones (matching professional gym exercise charts).
 */
function BiomechanicGraphic({
  type,
  stage,
}: {
  type: GraphicType
  stage: 1 | 2 | 3
}) {
  const redActive = '#ef4444'
  const redActiveLight = '#f87171'
  const redActiveDark = '#b91c1c'
  const bodyBase = '#94a3b8'
  const bodyLight = '#cbd5e1'
  const bodyDark = '#475569'
  const jointColor = '#e2e8f0'
  const barbellColor = '#38bdf8'

  // 1. ABS / CRUNCHES / CORE (Matching user reference image: lying start vs curled peak contraction)
  if (type === 'abs') {
    return (
      <svg viewBox="0 0 320 140" className="h-full w-auto select-none" fill="none">
        <defs>
          <linearGradient id="absMuscleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={redActiveLight} />
            <stop offset="50%" stopColor={redActive} />
            <stop offset="100%" stopColor={redActiveDark} />
          </linearGradient>
          <linearGradient id="bodyMuscleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={bodyLight} />
            <stop offset="60%" stopColor={bodyBase} />
            <stop offset="100%" stopColor={bodyDark} />
          </linearGradient>
          <pattern id="grid" width="12" height="12" patternUnits="userSpaceOnUse">
            <path d="M 12 0 L 0 0 0 12" fill="none" stroke="#334155" strokeWidth="0.5" opacity="0.15" />
          </pattern>
        </defs>

        {/* Subtle Anatomical Grid Background */}
        <rect width="320" height="140" fill="url(#grid)" />
        <line x1="20" y1="125" x2="300" y2="125" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />

        {stage === 1 && (
          // Stage 1: Supine Lying Setup (Left Figure in Reference)
          <g transform="translate(45, 20)">
            {/* Athletic Head & Ponytail */}
            <circle cx="210" cy="85" r="11" fill="url(#bodyMuscleGrad)" />
            <path d="M 218 80 Q 228 85 225 96 Q 220 94 218 88 Z" fill="#334155" />
            <ellipse cx="205" cy="86" rx="3" ry="5" fill="#1e293b" opacity="0.3" />

            {/* Arms Behind Head */}
            <path d="M 195 85 Q 205 70 216 75 Q 222 80 216 88" stroke="url(#bodyMuscleGrad)" strokeWidth="6" strokeLinecap="round" fill="none" />
            
            {/* Thorax / Ribs */}
            <path d="M 195 86 C 180 88 165 89 150 90 C 145 92 140 98 135 105" stroke={bodyDark} strokeWidth="2" fill="url(#bodyMuscleGrad)" />
            
            {/* HIGHLIGHTED ACTIVE RECTUS ABDOMINIS & OBLIQUES (Bright Red Muscle Group) */}
            <path d="M 180 88 C 170 89 155 90 145 94 C 142 98 140 104 148 105 C 162 104 175 100 182 95 Z" fill="url(#absMuscleGrad)" stroke={redActiveLight} strokeWidth="1" />
            {/* Muscle striations / six-pack segments */}
            <line x1="172" y1="90" x2="174" y2="101" stroke="#fee2e2" strokeWidth="1.2" opacity="0.9" />
            <line x1="162" y1="91" x2="164" y2="103" stroke="#fee2e2" strokeWidth="1.2" opacity="0.9" />
            <line x1="152" y1="93" x2="154" y2="104" stroke="#fee2e2" strokeWidth="1.2" opacity="0.9" />
            <path d="M 148 97 Q 165 95 180 92" stroke="#b91c1c" strokeWidth="1" opacity="0.8" />

            {/* Pelvis & Bent Thighs */}
            <path d="M 135 105 Q 115 80 95 75 Q 85 75 80 82" stroke="url(#bodyMuscleGrad)" strokeWidth="13" strokeLinecap="round" fill="none" />
            {/* Shins / Calves down to feet */}
            <path d="M 80 82 Q 65 95 50 115" stroke="url(#bodyMuscleGrad)" strokeWidth="10" strokeLinecap="round" fill="none" />
            {/* Feet planted flat */}
            <path d="M 50 115 L 35 117" stroke={bodyLight} strokeWidth="5" strokeLinecap="round" />

            {/* Joint Markers */}
            <circle cx="85" cy="78" r="4" fill={jointColor} />
            <circle cx="50" cy="115" r="3.5" fill={jointColor} />

            {/* Active Muscle Glow Badge */}
            <g transform="translate(130, 60)">
              <rect width="90" height="18" rx="9" fill="#991b1b" fillOpacity="0.8" stroke="#ef4444" strokeWidth="1" />
              <text x="45" y="13" textAnchor="middle" fill="#fee2e2" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
                Rectus Abdominis
              </text>
            </g>
          </g>
        )}

        {stage === 2 && (
          // Stage 2: Mid-Flexion Compression
          <g transform="translate(45, 15)">
            {/* Head curling up */}
            <circle cx="195" cy="65" r="11" fill="url(#bodyMuscleGrad)" />
            <path d="M 203 60 Q 212 65 208 76 Q 203 74 201 68 Z" fill="#334155" />

            {/* Arms behind head */}
            <path d="M 180 68 Q 192 50 202 55 Q 208 60 200 68" stroke="url(#bodyMuscleGrad)" strokeWidth="6" strokeLinecap="round" fill="none" />

            {/* Curled Thorax & Spine */}
            <path d="M 180 68 Q 165 72 150 82 Q 140 92 135 105" stroke={bodyDark} strokeWidth="2" fill="url(#bodyMuscleGrad)" />

            {/* HIGHLIGHTED ACTIVE CRUNCH MUSCLE CORE (Deep Red Contracted Striations) */}
            <path d="M 172 70 C 160 75 148 84 140 94 C 137 100 142 105 150 102 C 160 96 172 85 178 76 Z" fill="url(#absMuscleGrad)" stroke={redActiveLight} strokeWidth="1.5" />
            <line x1="165" y1="73" x2="160" y2="88" stroke="#fee2e2" strokeWidth="1.4" opacity="0.95" />
            <line x1="155" y1="78" x2="150" y2="94" stroke="#fee2e2" strokeWidth="1.4" opacity="0.95" />
            <line x1="147" y1="84" x2="142" y2="99" stroke="#fee2e2" strokeWidth="1.4" opacity="0.95" />

            {/* Pelvis & Legs */}
            <path d="M 135 105 Q 115 80 95 75 Q 85 75 80 82" stroke="url(#bodyMuscleGrad)" strokeWidth="13" strokeLinecap="round" fill="none" />
            <path d="M 80 82 Q 65 95 50 115" stroke="url(#bodyMuscleGrad)" strokeWidth="10" strokeLinecap="round" fill="none" />
            <path d="M 50 115 L 35 117" stroke={bodyLight} strokeWidth="5" strokeLinecap="round" />

            {/* Movement Vector Pulse Arc */}
            <path d="M 195 85 Q 190 75 185 68" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="3 3" strokeLinecap="round" />
          </g>
        )}

        {stage === 3 && (
          // Stage 3: Peak Contraction Curled Sit-Up (Right Figure in Reference Image)
          <g transform="translate(45, 10)">
            {/* Torso curled full forward */}
            <circle cx="175" cy="40" r="11" fill="url(#bodyMuscleGrad)" />
            <path d="M 183 35 Q 194 40 190 52 Q 184 50 182 43 Z" fill="#334155" />

            {/* Arms cradling head */}
            <path d="M 160 45 Q 172 25 182 32 Q 188 38 180 46" stroke="url(#bodyMuscleGrad)" strokeWidth="6" strokeLinecap="round" fill="none" />

            {/* Curled Upper Spine */}
            <path d="M 162 48 Q 148 58 140 75 Q 135 90 135 105" stroke={bodyDark} strokeWidth="2" fill="url(#bodyMuscleGrad)" />

            {/* MAXIMAL PEAK RED MUSCLE CONTRACTION (Deep Burning Red & Obliques) */}
            <path d="M 158 52 C 145 62 136 78 134 94 C 133 103 140 106 148 100 C 156 90 165 72 168 58 Z" fill="url(#absMuscleGrad)" stroke="#fca5a5" strokeWidth="2" />
            <line x1="156" y1="56" x2="148" y2="76" stroke="#ffffff" strokeWidth="1.6" />
            <line x1="148" y1="64" x2="141" y2="86" stroke="#ffffff" strokeWidth="1.6" />
            <line x1="142" y1="74" x2="137" y2="94" stroke="#ffffff" strokeWidth="1.6" />

            {/* Pelvis & Legs */}
            <path d="M 135 105 Q 115 80 95 75 Q 85 75 80 82" stroke="url(#bodyMuscleGrad)" strokeWidth="13" strokeLinecap="round" fill="none" />
            <path d="M 80 82 Q 65 95 50 115" stroke="url(#bodyMuscleGrad)" strokeWidth="10" strokeLinecap="round" fill="none" />
            <path d="M 50 115 L 35 117" stroke={bodyLight} strokeWidth="5" strokeLinecap="round" />

            {/* Peak Contraction Starburst */}
            <circle cx="145" cy="78" r="16" stroke={redActive} strokeWidth="1.5" strokeDasharray="3 3" />
            <g transform="translate(100, 15)">
              <rect width="115" height="18" rx="9" fill="#991b1b" fillOpacity="0.85" stroke="#ef4444" strokeWidth="1" />
              <text x="57" y="13" textAnchor="middle" fill="#fee2e2" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
                Peak Core Compression
              </text>
            </g>
          </g>
        )}
      </svg>
    )
  }

  // 2. BENCH PRESS / CHEST / PUSHUPS (Anatomical Pectoralis Major & Anterior Deltoid in Red)
  if (type === 'bench') {
    return (
      <svg viewBox="0 0 320 140" className="h-full w-auto select-none" fill="none">
        <defs>
          <linearGradient id="chestMuscleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={redActiveLight} />
            <stop offset="50%" stopColor={redActive} />
            <stop offset="100%" stopColor={redActiveDark} />
          </linearGradient>
          <linearGradient id="bodyMuscleGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={bodyLight} />
            <stop offset="60%" stopColor={bodyBase} />
            <stop offset="100%" stopColor={bodyDark} />
          </linearGradient>
        </defs>

        {/* Bench Flat Structure */}
        <rect x="50" y="90" width="160" height="10" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
        <rect x="75" y="100" width="10" height="25" fill="#0f172a" />
        <rect x="175" y="100" width="10" height="25" fill="#0f172a" />

        {stage === 1 && (
          // Bench Press: Starting Lockout Position
          <g transform="translate(40, 10)">
            {/* Head rested on bench */}
            <circle cx="80" cy="78" r="11" fill="url(#bodyMuscleGrad2)" />
            {/* Torso & Arch */}
            <path d="M 88 82 Q 130 80 160 88" stroke="url(#bodyMuscleGrad2)" strokeWidth="16" strokeLinecap="round" />
            
            {/* HIGHLIGHTED ACTIVE PECTORALIS MAJOR (Chest in Red) */}
            <ellipse cx="125" cy="80" rx="18" ry="8" fill="url(#chestMuscleGrad)" stroke={redActiveLight} strokeWidth="1.2" />
            <line x1="115" y1="78" x2="135" y2="78" stroke="#fee2e2" strokeWidth="1.2" />
            <line x1="118" y1="82" x2="132" y2="82" stroke="#fee2e2" strokeWidth="1.2" />

            {/* Straight Arms Overhead */}
            <path d="M 120 78 L 120 32" stroke="url(#bodyMuscleGrad2)" strokeWidth="8" strokeLinecap="round" />
            <path d="M 130 78 L 130 32" stroke="url(#bodyMuscleGrad2)" strokeWidth="8" strokeLinecap="round" />

            {/* Barbell & Plates */}
            <line x1="60" y1="30" x2="190" y2="30" stroke={barbellColor} strokeWidth="5" strokeLinecap="round" />
            <rect x="65" y="18" width="8" height="24" rx="2" fill={redActive} stroke="#fff" strokeWidth="0.8" />
            <rect x="177" y="18" width="8" height="24" rx="2" fill={redActive} stroke="#fff" strokeWidth="0.8" />

            {/* Legs bent to floor */}
            <path d="M 160 88 Q 185 92 195 115" stroke="url(#bodyMuscleGrad2)" strokeWidth="10" strokeLinecap="round" />
            <path d="M 195 115 L 210 115" stroke={bodyLight} strokeWidth="5" strokeLinecap="round" />
          </g>
        )}

        {stage === 2 && (
          // Bench Press: Deep Chest Stretch at Bottom
          <g transform="translate(40, 10)">
            <circle cx="80" cy="78" r="11" fill="url(#bodyMuscleGrad2)" />
            <path d="M 88 82 Q 130 80 160 88" stroke="url(#bodyMuscleGrad2)" strokeWidth="16" strokeLinecap="round" />

            {/* MAXIMAL PECTORAL STRETCH (Wide glowing red pectorals) */}
            <ellipse cx="125" cy="80" rx="22" ry="9" fill="url(#chestMuscleGrad)" stroke={redActiveLight} strokeWidth="1.8" />
            <line x1="110" y1="78" x2="140" y2="78" stroke="#ffffff" strokeWidth="1.4" />
            <line x1="112" y1="83" x2="138" y2="83" stroke="#ffffff" strokeWidth="1.4" />

            {/* 45-degree tucked elbows */}
            <path d="M 120 78 L 105 88 L 122 62" stroke="url(#bodyMuscleGrad2)" strokeWidth="7" strokeLinecap="round" />
            <path d="M 130 78 L 145 88 L 128 62" stroke="url(#bodyMuscleGrad2)" strokeWidth="7" strokeLinecap="round" />

            {/* Barbell at Chest Level */}
            <line x1="60" y1="60" x2="190" y2="60" stroke={barbellColor} strokeWidth="5" strokeLinecap="round" />
            <rect x="65" y="48" width="8" height="24" rx="2" fill={redActive} stroke="#fff" strokeWidth="0.8" />
            <rect x="177" y="48" width="8" height="24" rx="2" fill={redActive} stroke="#fff" strokeWidth="0.8" />

            <path d="M 160 88 Q 185 92 195 115" stroke="url(#bodyMuscleGrad2)" strokeWidth="10" strokeLinecap="round" />
            <path d="M 195 115 L 210 115" stroke={bodyLight} strokeWidth="5" strokeLinecap="round" />
          </g>
        )}

        {stage === 3 && (
          // Bench Press: Peak Concentric Chest Squeeze
          <g transform="translate(40, 10)">
            <circle cx="80" cy="78" r="11" fill="url(#bodyMuscleGrad2)" />
            <path d="M 88 82 Q 130 80 160 88" stroke="url(#bodyMuscleGrad2)" strokeWidth="16" strokeLinecap="round" />

            {/* PEAK CHEST SQUEEZE LOCKOUT */}
            <ellipse cx="125" cy="80" rx="19" ry="8.5" fill="url(#chestMuscleGrad)" stroke="#fca5a5" strokeWidth="2" />
            <line x1="114" y1="78" x2="136" y2="78" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="125" cy="80" r="14" stroke={redActive} strokeWidth="1.5" strokeDasharray="3 3" />

            <path d="M 120 78 L 120 30" stroke="url(#bodyMuscleGrad2)" strokeWidth="8" strokeLinecap="round" />
            <path d="M 130 78 L 130 30" stroke="url(#bodyMuscleGrad2)" strokeWidth="8" strokeLinecap="round" />

            <line x1="60" y1="28" x2="190" y2="28" stroke={barbellColor} strokeWidth="5" strokeLinecap="round" />
            <rect x="65" y="16" width="8" height="24" rx="2" fill={redActive} stroke="#fff" strokeWidth="0.8" />
            <rect x="177" y="16" width="8" height="24" rx="2" fill={redActive} stroke="#fff" strokeWidth="0.8" />

            <path d="M 160 88 Q 185 92 195 115" stroke="url(#bodyMuscleGrad2)" strokeWidth="10" strokeLinecap="round" />
            <path d="M 195 115 L 210 115" stroke={bodyLight} strokeWidth="5" strokeLinecap="round" />
          </g>
        )}
      </svg>
    )
  }

  // 3. SQUAT / LEGS / LUNGES (Anatomical Quadriceps & Gluteus Maximus in Red)
  if (type === 'squat') {
    return (
      <svg viewBox="0 0 320 140" className="h-full w-auto select-none" fill="none">
        <defs>
          <linearGradient id="legMuscleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={redActiveLight} />
            <stop offset="50%" stopColor={redActive} />
            <stop offset="100%" stopColor={redActiveDark} />
          </linearGradient>
        </defs>

        <line x1="30" y1="125" x2="290" y2="125" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />

        {stage === 1 && (
          // Squat: Upright Setup
          <g transform="translate(100, 10)">
            <circle cx="60" cy="20" r="10" fill={bodyBase} />
            <path d="M 60 28 L 60 65" stroke={bodyDark} strokeWidth="14" strokeLinecap="round" />
            
            {/* Barbell across upper traps */}
            <line x1="10" y1="28" x2="110" y2="28" stroke={barbellColor} strokeWidth="5" strokeLinecap="round" />
            <circle cx="15" cy="28" r="10" fill={redActive} stroke="#fff" strokeWidth="1" />
            <circle cx="105" cy="28" r="10" fill={redActive} stroke="#fff" strokeWidth="1" />

            {/* QUADRICEPS & GLUTES IN RED */}
            <path d="M 54 65 L 48 95" stroke="url(#legMuscleGrad)" strokeWidth="12" strokeLinecap="round" />
            <path d="M 66 65 L 72 95" stroke="url(#legMuscleGrad)" strokeWidth="12" strokeLinecap="round" />
            {/* Calves */}
            <path d="M 48 95 L 45 122" stroke={bodyBase} strokeWidth="9" strokeLinecap="round" />
            <path d="M 72 95 L 75 122" stroke={bodyBase} strokeWidth="9" strokeLinecap="round" />
          </g>
        )}

        {stage === 2 && (
          // Squat: Deep Parallel Hole (Peak Quad & Glute Contraction)
          <g transform="translate(100, 15)">
            <circle cx="80" cy="40" r="10" fill={bodyBase} />
            {/* Forward angled back */}
            <path d="M 80 48 L 55 72" stroke={bodyDark} strokeWidth="14" strokeLinecap="round" />

            <line x1="25" y1="46" x2="125" y2="46" stroke={barbellColor} strokeWidth="5" strokeLinecap="round" />
            <circle cx="30" cy="46" r="10" fill={redActive} stroke="#fff" strokeWidth="1" />
            <circle cx="120" cy="46" r="10" fill={redActive} stroke="#fff" strokeWidth="1" />

            {/* MAXIMAL QUADRICEPS & GLUTEUS TENSION (Deep Red) */}
            <path d="M 55 72 L 95 72" stroke="url(#legMuscleGrad)" strokeWidth="14" strokeLinecap="round" />
            <line x1="60" y1="72" x2="90" y2="72" stroke="#ffffff" strokeWidth="1.8" />
            {/* Shin vertical at ~80° */}
            <path d="M 95 72 L 88 120" stroke={bodyBase} strokeWidth="10" strokeLinecap="round" />
            <circle cx="95" cy="72" r="5" fill={jointColor} />
            <circle cx="75" cy="72" r="14" stroke={redActive} strokeWidth="2" strokeDasharray="3 3" />
          </g>
        )}

        {stage === 3 && (
          // Squat: Upright Power Lockout
          <g transform="translate(100, 10)">
            <circle cx="60" cy="18" r="10" fill={bodyBase} />
            <path d="M 60 26 L 60 63" stroke={bodyDark} strokeWidth="14" strokeLinecap="round" />

            <line x1="10" y1="26" x2="110" y2="26" stroke={barbellColor} strokeWidth="5" strokeLinecap="round" />
            <circle cx="15" cy="26" r="10" fill={redActive} stroke="#fff" strokeWidth="1" />
            <circle cx="105" cy="26" r="10" fill={redActive} stroke="#fff" strokeWidth="1" />

            {/* LOCKED OUT GLUTES & QUADS */}
            <path d="M 54 63 L 48 93" stroke="url(#legMuscleGrad)" strokeWidth="12" strokeLinecap="round" />
            <path d="M 66 63 L 72 93" stroke="url(#legMuscleGrad)" strokeWidth="12" strokeLinecap="round" />
            <path d="M 48 93 L 45 122" stroke={bodyBase} strokeWidth="9" strokeLinecap="round" />
            <path d="M 72 93 L 75 122" stroke={bodyBase} strokeWidth="9" strokeLinecap="round" />
            <circle cx="60" cy="63" r="15" stroke={redActive} strokeWidth="1.8" strokeDasharray="3 3" />
          </g>
        )}
      </svg>
    )
  }

  // 4. BICEPS / CURLS (Anatomical Biceps Brachii in Red)
  if (type === 'curl') {
    return (
      <svg viewBox="0 0 320 140" className="h-full w-auto select-none" fill="none">
        <defs>
          <linearGradient id="bicepMuscleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={redActiveLight} />
            <stop offset="50%" stopColor={redActive} />
            <stop offset="100%" stopColor={redActiveDark} />
          </linearGradient>
        </defs>

        <line x1="30" y1="125" x2="290" y2="125" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />

        <g transform="translate(110, 10)">
          <circle cx="50" cy="20" r="10" fill={bodyBase} />
          <path d="M 50 28 L 50 70" stroke={bodyDark} strokeWidth="14" strokeLinecap="round" />

          {stage === 1 && (
            // Arm hanging straight, bicep stretched
            <g>
              <path d="M 54 36 L 54 62" stroke="url(#bicepMuscleGrad)" strokeWidth="9" strokeLinecap="round" />
              <path d="M 54 62 L 54 90" stroke={bodyBase} strokeWidth="8" strokeLinecap="round" />
              <circle cx="54" cy="90" r="8" fill="#3b82f6" stroke="#fff" strokeWidth="1" />
            </g>
          )}

          {stage === 2 && (
            // Arm curling at 90 degrees
            <g>
              <path d="M 54 36 L 54 60" stroke="url(#bicepMuscleGrad)" strokeWidth="11" strokeLinecap="round" />
              <line x1="52" y1="42" x2="52" y2="54" stroke="#ffffff" strokeWidth="1.4" />
              <path d="M 54 60 L 80 50" stroke={bodyBase} strokeWidth="8" strokeLinecap="round" />
              <circle cx="80" cy="50" r="9" fill="#3b82f6" stroke="#fff" strokeWidth="1" />
            </g>
          )}

          {stage === 3 && (
            // Peak Bicep Contraction & Flex Peak
            <g>
              {/* Bulging Bicep Peak */}
              <ellipse cx="54" cy="46" rx="8" ry="12" fill="url(#bicepMuscleGrad)" stroke="#fee2e2" strokeWidth="1.5" />
              <line x1="52" y1="40" x2="52" y2="52" stroke="#ffffff" strokeWidth="1.6" />
              <path d="M 54 60 L 62 38" stroke={bodyBase} strokeWidth="8" strokeLinecap="round" />
              <circle cx="62" cy="38" r="9" fill="#3b82f6" stroke="#fff" strokeWidth="1" />
              <circle cx="54" cy="46" r="14" stroke={redActive} strokeWidth="2" strokeDasharray="3 3" />
            </g>
          )}

          {/* Legs */}
          <path d="M 45 70 L 42 122" stroke={bodyDark} strokeWidth="10" strokeLinecap="round" />
          <path d="M 55 70 L 58 122" stroke={bodyDark} strokeWidth="10" strokeLinecap="round" />
        </g>
      </svg>
    )
  }

  // 5. BACK / PULL-UPS / ROWS / LAT PULLDOWN (Anatomical Latissimus Dorsi in Red)
  if (type === 'pull' || type === 'deadlift') {
    return (
      <svg viewBox="0 0 320 140" className="h-full w-auto select-none" fill="none">
        <defs>
          <linearGradient id="latMuscleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={redActiveLight} />
            <stop offset="50%" stopColor={redActive} />
            <stop offset="100%" stopColor={redActiveDark} />
          </linearGradient>
        </defs>

        <rect x="70" y="8" width="180" height="6" rx="3" fill="#334155" />

        <g transform="translate(100, 15)">
          <circle cx="60" cy="35" r="10" fill={bodyBase} />

          {/* HIGHLIGHTED ACTIVE LATISSIMUS DORSI & TRAPEZIUS V-TAPER (Vibrant Red) */}
          <path d="M 42 45 Q 60 42 78 45 L 68 78 L 52 78 Z" fill="url(#latMuscleGrad)" stroke={redActiveLight} strokeWidth="1.2" />
          <line x1="50" y1="50" x2="56" y2="72" stroke="#fee2e2" strokeWidth="1.2" />
          <line x1="70" y1="50" x2="64" y2="72" stroke="#fee2e2" strokeWidth="1.2" />

          {stage === 1 && (
            // Hanging full stretch
            <g>
              <path d="M 45 45 L 25 10" stroke={bodyBase} strokeWidth="7" strokeLinecap="round" />
              <path d="M 75 45 L 95 10" stroke={bodyBase} strokeWidth="7" strokeLinecap="round" />
              <path d="M 55 78 L 52 118" stroke={bodyDark} strokeWidth="9" strokeLinecap="round" />
              <path d="M 65 78 L 68 118" stroke={bodyDark} strokeWidth="9" strokeLinecap="round" />
            </g>
          )}

          {stage === 2 && (
            // Pulling up, elbows flared back
            <g>
              <path d="M 45 42 L 30 52 L 30 10" stroke={bodyBase} strokeWidth="7" strokeLinecap="round" />
              <path d="M 75 42 L 90 52 L 90 10" stroke={bodyBase} strokeWidth="7" strokeLinecap="round" />
              <path d="M 55 78 L 52 110" stroke={bodyDark} strokeWidth="9" strokeLinecap="round" />
              <path d="M 65 78 L 68 110" stroke={bodyDark} strokeWidth="9" strokeLinecap="round" />
            </g>
          )}

          {stage === 3 && (
            // Chest to bar peak lat contraction
            <g>
              <path d="M 45 38 L 26 44 L 32 10" stroke={bodyBase} strokeWidth="8" strokeLinecap="round" />
              <path d="M 75 38 L 94 44 L 88 10" stroke={bodyBase} strokeWidth="8" strokeLinecap="round" />
              <circle cx="60" cy="56" r="16" stroke={redActive} strokeWidth="2" strokeDasharray="3 3" />
              <path d="M 55 78 L 52 105" stroke={bodyDark} strokeWidth="9" strokeLinecap="round" />
              <path d="M 65 78 L 68 105" stroke={bodyDark} strokeWidth="9" strokeLinecap="round" />
            </g>
          )}
        </g>
      </svg>
    )
  }

  // 6. DEFAULT / PRESS / TRICEP / GLUTE / LATERAL (Anatomical Deltoids, Triceps, & Glutes in Red)
  return (
    <svg viewBox="0 0 320 140" className="h-full w-auto select-none" fill="none">
      <defs>
        <linearGradient id="genericMuscleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={redActiveLight} />
          <stop offset="50%" stopColor={redActive} />
          <stop offset="100%" stopColor={redActiveDark} />
        </linearGradient>
      </defs>

      <line x1="30" y1="125" x2="290" y2="125" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />

      <g transform="translate(100, 12)">
        <circle cx="60" cy="20" r="10" fill={bodyBase} />

        {/* DELTOIDS & UPPER TORSO IN RED */}
        <circle cx="44" cy="34" r="7" fill="url(#genericMuscleGrad)" stroke={redActiveLight} strokeWidth="1" />
        <circle cx="76" cy="34" r="7" fill="url(#genericMuscleGrad)" stroke={redActiveLight} strokeWidth="1" />
        <path d="M 50 32 Q 60 30 70 32 L 66 65 L 54 65 Z" fill={bodyDark} stroke={bodyBase} strokeWidth="1" />

        {stage === 1 && (
          <g>
            <path d="M 44 38 L 36 68" stroke="url(#genericMuscleGrad)" strokeWidth="7" strokeLinecap="round" />
            <path d="M 76 38 L 84 68" stroke="url(#genericMuscleGrad)" strokeWidth="7" strokeLinecap="round" />
            <circle cx="36" cy="68" r="6" fill="#3b82f6" />
            <circle cx="84" cy="68" r="6" fill="#3b82f6" />
          </g>
        )}

        {stage === 2 && (
          <g>
            <path d="M 44 38 L 28 50" stroke="url(#genericMuscleGrad)" strokeWidth="8" strokeLinecap="round" />
            <path d="M 76 38 L 92 50" stroke="url(#genericMuscleGrad)" strokeWidth="8" strokeLinecap="round" />
            <circle cx="28" cy="50" r="6" fill="#3b82f6" />
            <circle cx="92" cy="50" r="6" fill="#3b82f6" />
          </g>
        )}

        {stage === 3 && (
          <g>
            <path d="M 44 38 L 18 36" stroke="url(#genericMuscleGrad)" strokeWidth="8" strokeLinecap="round" />
            <path d="M 76 38 L 102 36" stroke="url(#genericMuscleGrad)" strokeWidth="8" strokeLinecap="round" />
            <circle cx="18" cy="36" r="7" fill="#3b82f6" />
            <circle cx="102" cy="36" r="7" fill="#3b82f6" />
            <circle cx="60" cy="34" r="16" stroke={redActive} strokeWidth="2" strokeDasharray="3 3" />
          </g>
        )}

        {/* Lower Body */}
        <path d="M 54 65 L 48 122" stroke={bodyBase} strokeWidth="9" strokeLinecap="round" />
        <path d="M 66 65 L 72 122" stroke={bodyBase} strokeWidth="9" strokeLinecap="round" />
      </g>
    </svg>
  )
}

