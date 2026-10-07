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
  CheckCircle2,
} from 'lucide-react'
import Image from 'next/image'
import { triggerHaptic } from '@/hooks/useHaptics'

export interface FrameStep {
  title: string
  label: string
  description: string
  focusCue: string
  stage: 1 | 2 | 3
}

export interface AnatomicalGuide {
  src: string
  alt: string
  muscles: string[]
  equipment: string
}

/**
 * Returns the high-definition 3D medical fitness anatomical illustration for every workout.
 */
export function getExerciseAnatomicalImage(exerciseId: string, name: string): AnatomicalGuide {
  const id = exerciseId.toLowerCase()
  const n = name.toLowerCase()

  // 1. Calf Raises
  if (id.includes('calf') || n.includes('calf')) {
    return {
      src: '/exercises/calf_raise.jpg',
      alt: 'Calf Raise Anatomical Muscle Guide',
      muscles: ['Gastrocnemius (Medial & Lateral Heads)', 'Soleus', 'Achilles Tendon'],
      equipment: 'Machine / Platform',
    }
  }

  // 2. Leg Press / Leg Extension / Hamstring Curl / Leg Machines
  if (
    id.includes('leg-press') ||
    id.includes('leg-ext') ||
    id.includes('extension') ||
    id.includes('hamstring') ||
    id.includes('hack') ||
    n.includes('leg press') ||
    n.includes('leg extension') ||
    n.includes('hamstring curl')
  ) {
    return {
      src: '/exercises/leg_extension.jpg',
      alt: 'Leg Press & Quadriceps Isolation Anatomical Guide',
      muscles: ['Rectus Femoris', 'Vastus Lateralis', 'Vastus Medialis', 'Gluteus Maximus'],
      equipment: '45° Sled / Machine',
    }
  }

  // 3. Hip Thrusts / Glute Bridges / Walking Lunges / Split Squats
  if (
    id.includes('thrust') ||
    id.includes('glute') ||
    id.includes('bridge') ||
    id.includes('lunge') ||
    id.includes('split-squat') ||
    id.includes('bulgarian') ||
    n.includes('thrust') ||
    n.includes('lunge') ||
    n.includes('split squat')
  ) {
    return {
      src: '/exercises/hip_thrust.jpg',
      alt: 'Hip Thrust & Lunge Glute/Hamstring Muscle Guide',
      muscles: ['Gluteus Maximus', 'Gluteus Medius', 'Biceps Femoris (Hamstrings)', 'Quadriceps'],
      equipment: 'Barbell / Dumbbell',
    }
  }

  // 4. Planks & Isometric Core Stability
  if (
    id.includes('plank') ||
    id.includes('woodchopper') ||
    n.includes('plank') ||
    n.includes('woodchopper')
  ) {
    return {
      src: '/exercises/plank_core.jpg',
      alt: 'Isometric Core & Plank Anatomical Guide',
      muscles: ['Rectus Abdominis', 'Transverse Abdominis (Deep Core)', 'Internal & External Obliques'],
      equipment: 'Bodyweight / Mat',
    }
  }

  // 5. Crunches & Dynamic Core (Crunches, Leg Raises, Ab Wheel, Russian Twists, Mountain Climbers)
  if (
    id.includes('crunch') ||
    id.includes('abs') ||
    id.includes('twist') ||
    id.includes('rollout') ||
    id.includes('leg-raise') ||
    id.includes('climber') ||
    id.includes('burpee') ||
    n.includes('crunch') ||
    n.includes('abs') ||
    n.includes('twist')
  ) {
    return {
      src: '/exercises/abs_crunch.jpg',
      alt: 'Abdominal Crunch & Six-Pack Anatomical Guide',
      muscles: ['Rectus Abdominis', 'External Obliques', 'Iliopsoas (Hip Flexors)'],
      equipment: 'Bodyweight / Cable',
    }
  }

  // 6. Chest Press, Push-ups, Dips & Chest Flyes
  if (
    id.includes('bench') ||
    id.includes('chest') ||
    id.includes('push-up') ||
    id.includes('pushup') ||
    id.includes('fly') ||
    id.includes('dip') ||
    n.includes('bench') ||
    n.includes('push up') ||
    n.includes('push-up') ||
    n.includes('fly') ||
    n.includes('dip')
  ) {
    return {
      src: '/exercises/bench_press.jpg',
      alt: 'Chest Press & Pectoral Muscle Guide',
      muscles: ['Pectoralis Major (Clavicular & Sternal)', 'Anterior Deltoids', 'Triceps Brachii'],
      equipment: 'Barbell / Dumbbell / Bench',
    }
  }

  // 7. Squats (Back Squat, Goblet Squat, Box Jumps, Jump Squats)
  if (id.includes('squat') || id.includes('jump') || n.includes('squat')) {
    return {
      src: '/exercises/squat.jpg',
      alt: 'Barbell Squat Lower Body Anatomical Guide',
      muscles: ['Quadriceps Femoris', 'Gluteus Maximus', 'Adductor Magnus', 'Erector Spinae'],
      equipment: 'Barbell / Kettlebell',
    }
  }

  // 8. Deadlifts, RDL, Kettlebell Swings & Farmer's Walk
  if (
    id.includes('deadlift') ||
    id.includes('rdl') ||
    id.includes('farmers-walk') ||
    id.includes('swing') ||
    n.includes('deadlift') ||
    n.includes('rdl') ||
    n.includes('swing')
  ) {
    return {
      src: '/exercises/deadlift.jpg',
      alt: 'Deadlift & Posterior Chain Muscle Guide',
      muscles: ['Erector Spinae (Lower Back)', 'Gluteus Maximus', 'Hamstrings', 'Trapezius'],
      equipment: 'Barbell / Dumbbells',
    }
  }

  // 9. Biceps Curls & Forearms
  if (
    id.includes('curl') ||
    id.includes('bicep') ||
    id.includes('wrist') ||
    n.includes('curl') ||
    n.includes('bicep')
  ) {
    return {
      src: '/exercises/bicep_curl.jpg',
      alt: 'Bicep Curl Anatomical Muscle Guide',
      muscles: ['Biceps Brachii (Short & Long Head)', 'Brachialis', 'Brachioradialis'],
      equipment: 'Barbell / Dumbbell',
    }
  }

  // 10. Triceps Pushdowns & Extensions
  if (
    id.includes('tricep') ||
    id.includes('pushdown') ||
    id.includes('skull') ||
    n.includes('tricep') ||
    n.includes('pushdown')
  ) {
    return {
      src: '/exercises/tricep_pushdown.jpg',
      alt: 'Cable Triceps Pushdown Anatomical Guide',
      muscles: ['Triceps Brachii (Lateral, Long & Medial Heads)'],
      equipment: 'Cable / Rope / EZ-Bar',
    }
  }

  // 11. Lateral Deltoids & Face Pulls
  if (id.includes('lateral') || id.includes('face-pull') || n.includes('lateral') || n.includes('face pull')) {
    return {
      src: '/exercises/lateral_raise.jpg',
      alt: 'Lateral Deltoid Raise Anatomical Guide',
      muscles: ['Lateral Deltoid', 'Trapezius & Supraspinatus', 'Rear Deltoid'],
      equipment: 'Dumbbells / Cable',
    }
  }

  // 12. Overhead Shoulder Press, Arnold Press & Thrusters
  if (
    id.includes('overhead') ||
    id.includes('shoulder') ||
    id.includes('military') ||
    id.includes('arnold') ||
    id.includes('thruster') ||
    n.includes('overhead') ||
    n.includes('shoulder') ||
    n.includes('press')
  ) {
    return {
      src: '/exercises/overhead_press.jpg',
      alt: 'Overhead Shoulder Press Anatomical Guide',
      muscles: ['Anterior Deltoid', 'Lateral Deltoid', 'Upper Trapezius', 'Triceps Brachii'],
      equipment: 'Barbell / Dumbbells',
    }
  }

  // 13. Back Rows, Pulldowns & Pull-ups
  if (
    id.includes('pull') ||
    id.includes('row') ||
    id.includes('lat') ||
    id.includes('chin') ||
    n.includes('pull') ||
    n.includes('row') ||
    n.includes('lat')
  ) {
    return {
      src: '/exercises/pullup_back.jpg',
      alt: 'Back & Lat Pulldown Anatomical Guide',
      muscles: ['Latissimus Dorsi', 'Trapezius', 'Rhomboids', 'Rear Deltoids'],
      equipment: 'Cable / Pull-up Bar / Barbell',
    }
  }

  // Default fallback
  return {
    src: '/exercises/abs_crunch.jpg',
    alt: 'Core & Body Anatomy Guide',
    muscles: ['Rectus Abdominis', 'External Obliques'],
    equipment: 'Bodyweight',
  }
}

export function getExerciseVisualSteps(exerciseId: string, name: string): FrameStep[] {
  const id = exerciseId.toLowerCase()
  const n = name.toLowerCase()

  // 1. WALKING LUNGE / SPLIT SQUAT
  if (id.includes('lunge') || id.includes('split-squat') || n.includes('lunge')) {
    return [
      {
        title: 'Step 1: Stride Stance Setup',
        label: 'Starting Stance',
        description: 'Stand tall holding dumbbells at sides. Step forward ~2 to 3 feet with upright torso.',
        focusCue: 'Torso vertical, dumbbells stable',
        stage: 1,
      },
      {
        title: 'Step 2: 90/90 Lunge Descent',
        label: 'Bottom Position',
        description: 'Drop back knee straight down until hovering 1 inch above floor. Front thigh parallel to ground.',
        focusCue: 'Both knees at 90°, chest proud',
        stage: 2,
      },
      {
        title: 'Step 3: Front-Heel Drive & Forward Step',
        label: 'Drive & Step',
        description: 'Drive through front heel to stand tall and immediately step forward with opposite leg.',
        focusCue: 'Drive through front heel, squeeze glute',
        stage: 3,
      },
    ]
  }

  // 2. LEG PRESS (45-DEGREE MACHINE)
  if (id.includes('leg-press') || id.includes('hack') || n.includes('leg press')) {
    return [
      {
        title: 'Step 1: Sled Setup & Foot Placement',
        label: 'Starting Position',
        description: 'Sit firmly against back pad. Place feet shoulder-width in center of platform, unrack safety catches.',
        focusCue: 'Tailbone glued to seat, feet flat',
        stage: 1,
      },
      {
        title: 'Step 2: 90-Degree Descent',
        label: 'Deep Knee Flexion',
        description: 'Lower sled smoothly until knees reach a 90-degree angle without lower back rounding.',
        focusCue: 'Control tempo, knees track toes',
        stage: 2,
      },
      {
        title: 'Step 3: Quad Drive & Sled Press',
        label: 'Press Extension',
        description: 'Press through mid-foot and heels to drive weight back up. Stop just short of locking knees.',
        focusCue: 'Do not hyperextend knees, squeeze quads',
        stage: 3,
      },
    ]
  }

  // 3. ROWS (Bent-Over, Cable, DB Row)
  if (id.includes('row') || n.includes('row')) {
    return [
      {
        title: 'Step 1: 45° Torso Hinge & Stretch',
        label: 'Starting Stretch',
        description: 'Hinge forward at hips with flat neutral spine. Arms extended with full stretch on lats.',
        focusCue: 'Spine flat, chest out, arms long',
        stage: 1,
      },
      {
        title: 'Step 2: Elbow Pull to Lower Ribs',
        label: 'Concentric Pull',
        description: 'Drive elbows back toward hips, skimming past torso while pulling weight toward navel.',
        focusCue: 'Pull with elbows, not hands',
        stage: 2,
      },
      {
        title: 'Step 3: Scapular Retraction & Squeeze',
        label: 'Peak Back Squeeze',
        description: 'Squeeze shoulder blades together hard at top for 1 second, then lower under 3-second control.',
        focusCue: 'Pinch shoulder blades together',
        stage: 3,
      },
    ]
  }

  // 4. BENCH PRESS
  if (id.includes('bench') || n.includes('bench')) {
    return [
      {
        title: 'Step 1: Arch, Scapulae & Grip Setup',
        label: 'Starting Stance',
        description: 'Retract shoulder blades tight into bench, plant feet firmly, grip bar slightly wider than shoulders.',
        focusCue: 'Shoulder blades pinned, wrists straight',
        stage: 1,
      },
      {
        title: 'Step 2: Controlled 45-Degree Lowering',
        label: 'Bottom Chest Stretch',
        description: 'Lower bar smoothly to graze lower/mid-chest with elbows tucked at a 45° angle.',
        focusCue: 'Deep chest stretch, do not bounce',
        stage: 2,
      },
      {
        title: 'Step 3: Explosive Press & Chest Squeeze',
        label: 'Top Lockout Squeeze',
        description: 'Press bar up and slightly back toward eye line, squeezing chest hard at full extension.',
        focusCue: 'Drive feet into floor, exhale on press',
        stage: 3,
      },
    ]
  }

  // 5. SQUATS
  if (id.includes('squat') || n.includes('squat')) {
    return [
      {
        title: 'Step 1: Setup & Stance',
        label: 'Starting Stance',
        description: 'Set feet shoulder-width with toes flared ~15-30°. Barbell secured on upper traps, core braced.',
        focusCue: 'Tight upper back, neutral spine',
        stage: 1,
      },
      {
        title: 'Step 2: Deep Parallel Descent',
        label: 'Peak Depth',
        description: 'Hinge hips and bend knees simultaneously until hip crease is below knee level.',
        focusCue: 'Keep heels flat, chest proud',
        stage: 2,
      },
      {
        title: 'Step 3: Power Drive & Lockout',
        label: 'Ascent Lockout',
        description: 'Drive forcefully through mid-foot back to standing tall. Squeeze glutes and lock hips at top.',
        focusCue: 'Exhale on drive, don’t cave knees',
        stage: 3,
      },
    ]
  }

  // 6. DEADLIFT / RDL
  if (id.includes('deadlift') || id.includes('rdl') || n.includes('deadlift')) {
    return [
      {
        title: 'Step 1: Hip Hinge & Lock Grip',
        label: 'Starting Stance',
        description: 'Bar directly over mid-foot, hinge hips back, grip bar with arms straight outside shins, lats locked.',
        focusCue: 'Shins vertical, flat neutral spine',
        stage: 1,
      },
      {
        title: 'Step 2: Floor Drive',
        label: 'Mid-Shin Pull',
        description: 'Drive the floor away through heels, dragging the bar in continuous contact with shins past knees.',
        focusCue: 'Keep bar glued to body, chest proud',
        stage: 2,
      },
      {
        title: 'Step 3: Upright Lockout',
        label: 'Finish Position',
        description: 'Stand fully tall, squeeze glutes hard and lock hips without hyperextending the lower back.',
        focusCue: 'Lock glutes, stand proud',
        stage: 3,
      },
    ]
  }

  // Default Fallback Steps
  return [
    {
      title: 'Step 1: Position & Setup',
      label: 'Starting Stance',
      description: `Prepare for ${name} with solid athletic posture, core braced, and joints aligned.`,
      focusCue: 'Stable foundation and breathing ready',
      stage: 1,
    },
    {
      title: 'Step 2: Active Movement Flow',
      label: 'Mid Movement',
      description: `Execute ${name} through full range of motion under strict muscular control.`,
      focusCue: 'Control the tempo, keep tension',
      stage: 2,
    },
    {
      title: 'Step 3: Peak Contraction & Return',
      label: 'Finish Position',
      description: 'Flex working muscles at peak point, then return along the same path under 2-3s tempo.',
      focusCue: 'Smooth reset for the next repetition',
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

  // Reset step index on exercise change
  useEffect(() => {
    setCurrentStep(0)
  }, [exerciseId])

  // Auto-play animation cycle between Frame 1 -> Frame 2 -> Frame 3
  useEffect(() => {
    if (!isPlaying || viewMode !== 'steps') return
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 2200)
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
      {/* Top Header Mode Switcher: 3D Muscle Guide vs Motion Steps */}
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

        {viewMode === 'steps' ? (
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
        ) : (
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

      {/* MODE 1: 3D ANATOMICAL MUSCLE ILLUSTRATION */}
      {viewMode === 'photo' && (
        <div className="flex flex-col gap-2.5">
          <div className="relative w-full overflow-hidden rounded-2xl border border-border/80 bg-background/90 shadow-inner">
            <div className={`relative w-full transition-all duration-300 ${isZoomed ? 'h-64 sm:h-84' : 'h-48 sm:h-60'}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-contain p-1 rounded-xl select-none"
                priority
              />
            </div>

            {/* Overlay Badges */}
            <div className="absolute top-2.5 left-2.5 flex items-center gap-1 rounded-md bg-background/90 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-primary border border-border shadow-xs backdrop-blur-xs">
              <Sparkles className="size-3 text-primary" />
              <span>3D Anatomical Guide</span>
            </div>

            <div className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded-md bg-secondary/90 px-2 py-0.5 text-[10px] font-bold text-muted-foreground border border-border/60">
              <span>{photo.equipment}</span>
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

      {/* MODE 2: 3-STEP MOTION STEPS (Using the HD Guide + Step Overlays & Cues) */}
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

          {/* Main Display Stage with HD Visual Background & Step Cues */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-border/80 bg-background/90 p-3 sm:p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="flex w-full flex-col items-center justify-center gap-3"
              >
                {/* Photographic HD Exercise Frame */}
                <div className="relative h-44 xs:h-48 sm:h-56 w-full overflow-hidden rounded-xl border border-primary/20 bg-background shadow-inner">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-contain p-1 select-none"
                    priority
                  />

                  {/* Stage Badge in Graphic */}
                  <div className="absolute top-2 left-2 flex items-center gap-1 rounded-md bg-background/95 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-primary border border-border shadow-xs backdrop-blur-xs">
                    <Sparkles className="size-3" />
                    <span>Frame {currentStep + 1}/3</span>
                  </div>

                  {/* Movement Vector Indicator */}
                  <div className="absolute top-2 right-2 flex items-center gap-1 rounded-md bg-primary/90 px-2 py-0.5 text-[10px] font-bold text-primary-foreground border border-primary">
                    <span>{step.label}</span>
                  </div>

                  {/* Bottom Highlight Muscle Tag */}
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-md bg-background/90 px-2 py-0.5 text-[10px] font-bold text-foreground border border-border/80 backdrop-blur-xs">
                    <Target className="size-3 text-primary" />
                    <span className="truncate max-w-[200px]">{photo.muscles[0]}</span>
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
