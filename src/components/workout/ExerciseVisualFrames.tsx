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
  | 'lunge'
  | 'leg-press'
  | 'row'
  | 'dips'
  | 'pushups'
  | 'flyes'
  | 'calf'
  | 'plank'
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

/**
 * Returns an exact high-definition 3D anatomical fitness photo only when there is a 1:1 match.
 * Returns null for exercises that have distinct movements so they render their dedicated biomechanical animation.
 */
export function getExerciseAnatomicalImage(exerciseId: string, name: string): {
  src: string
  alt: string
  muscles: string[]
} | null {
  const id = exerciseId.toLowerCase()
  const n = name.toLowerCase()

  // 1. Calf Raises
  if (id === 'standing-calf-raise' || id === 'seated-calf-raise' || n.includes('calf raise')) {
    return {
      src: '/exercises/calf_raise.jpg',
      alt: 'Calf Raise Anatomical Muscle Guide',
      muscles: ['Gastrocnemius (Medial & Lateral Heads)', 'Soleus', 'Achilles Tendon'],
    }
  }

  // 2. Hip Thrust
  if (id === 'hip-thrust' || n.includes('hip thrust')) {
    return {
      src: '/exercises/hip_thrust.jpg',
      alt: 'Hip Thrust Anatomical Muscle Guide',
      muscles: ['Gluteus Maximus', 'Gluteus Medius', 'Biceps Femoris (Hamstrings)'],
    }
  }

  // 3. Leg Extension / Hamstring Curl
  if (id === 'leg-extension' || id === 'hamstring-curl' || n.includes('leg extension') || n.includes('hamstring curl')) {
    return {
      src: '/exercises/leg_extension.jpg',
      alt: 'Leg Extension & Quadriceps Isolation Guide',
      muscles: ['Rectus Femoris', 'Vastus Lateralis', 'Vastus Medialis', 'Vastus Intermedius'],
    }
  }

  // 4. Planks
  if (id === 'plank' || id === 'side-plank' || n === 'plank' || n === 'side plank') {
    return {
      src: '/exercises/plank_core.jpg',
      alt: 'Plank Isometric Core Activation Guide',
      muscles: ['Rectus Abdominis', 'Transverse Abdominis (Deep Core)', 'Internal & External Obliques'],
    }
  }

  // 5. Crunches & Dynamic Abs
  if (id === 'cable-crunch' || id === 'bicycle-crunches' || n.includes('crunch')) {
    return {
      src: '/exercises/abs_crunch.jpg',
      alt: 'Abdominal Crunch Core Anatomical Guide',
      muscles: ['Rectus Abdominis', 'External Obliques', 'Iliopsoas'],
    }
  }

  // 6. Bench Press & Incline Press
  if (
    id === 'flat-barbell-bench' ||
    id === 'incline-barbell-bench' ||
    id === 'incline-db-press' ||
    n.includes('bench press') ||
    n.includes('incline dumbbell press')
  ) {
    return {
      src: '/exercises/bench_press.jpg',
      alt: 'Barbell Bench Press Anatomical Muscle Guide',
      muscles: ['Pectoralis Major', 'Anterior Deltoids', 'Triceps Brachii'],
    }
  }

  // 7. Squats (Back Squat, Goblet Squat) - NOT lunges or leg press
  if (id === 'back-squat' || id === 'goblet-squat' || n.includes('back squat') || n.includes('goblet squat')) {
    return {
      src: '/exercises/squat.jpg',
      alt: 'Barbell Squat Anatomical Muscle Activation Guide',
      muscles: ['Quadriceps Femoris', 'Gluteus Maximus', 'Adductor Magnus'],
    }
  }

  // 8. Deadlifts & RDL
  if (id === 'deadlift' || id === 'romanian-deadlift' || n === 'deadlift' || n.includes('romanian deadlift')) {
    return {
      src: '/exercises/deadlift.jpg',
      alt: 'Deadlift Anatomical Muscle Guide',
      muscles: ['Erector Spinae (Lower Back)', 'Gluteus Maximus', 'Hamstrings', 'Trapezius'],
    }
  }

  // 9. Biceps Curls
  if (
    id === 'barbell-curl' ||
    id === 'hammer-curl' ||
    id === 'incline-db-curl' ||
    id === 'preacher-curl' ||
    n.includes('bicep curl') ||
    n.includes('barbell curl') ||
    n.includes('hammer curl')
  ) {
    return {
      src: '/exercises/bicep_curl.jpg',
      alt: 'Bicep Curl Anatomical Muscle Guide',
      muscles: ['Biceps Brachii (Short & Long Head)', 'Brachialis', 'Brachioradialis'],
    }
  }

  // 10. Triceps Rope Pushdowns & Skull Crushers
  if (
    id === 'tricep-rope-pushdowns' ||
    id === 'skull-crushers' ||
    id === 'overhead-tricep-ext' ||
    n.includes('rope pushdown') ||
    n.includes('skull crusher')
  ) {
    return {
      src: '/exercises/tricep_pushdown.jpg',
      alt: 'Cable Triceps Pushdown Anatomical Guide',
      muscles: ['Triceps Brachii (Lateral, Long & Medial Heads)'],
    }
  }

  // 11. Lateral Deltoids
  if (id === 'lateral-raise' || n.includes('lateral raise')) {
    return {
      src: '/exercises/lateral_raise.jpg',
      alt: 'Lateral Deltoid Raise Anatomical Guide',
      muscles: ['Lateral Deltoid', 'Trapezius & Supraspinatus'],
    }
  }

  // 12. Overhead Shoulder Press & Arnold Press
  if (
    id === 'overhead-press' ||
    id === 'arnold-press' ||
    id === 'thrusters' ||
    n.includes('overhead press') ||
    n.includes('arnold press')
  ) {
    return {
      src: '/exercises/overhead_press.jpg',
      alt: 'Overhead Shoulder Press Anatomical Guide',
      muscles: ['Anterior Deltoid', 'Lateral Deltoid', 'Upper Trapezius', 'Triceps Brachii'],
    }
  }

  // 13. Pull-ups & Lat Pulldown
  if (id === 'pull-ups' || id === 'chin-ups' || id === 'lat-pulldown' || n.includes('pull-up') || n.includes('lat pulldown')) {
    return {
      src: '/exercises/pullup_back.jpg',
      alt: 'Pull-Up & Lat Pulldown Anatomical Guide',
      muscles: ['Latissimus Dorsi', 'Trapezius', 'Rhomboids', 'Rear Deltoid'],
    }
  }

  // For exercises with distinct movements (like Walking Lunge, Leg Press, Rows, Dips, Pushups, Face Pulls, etc.),
  // return null so they render their dedicated accurate biomechanical animation rather than a mismatched photo.
  return null
}

export function getExerciseVisualSteps(exerciseId: string, name: string): FrameStep[] {
  const id = exerciseId.toLowerCase()
  const n = name.toLowerCase()

  // 1. WALKING LUNGE / BULGARIAN SPLIT SQUAT / LUNGES
  if (id.includes('lunge') || id.includes('split-squat') || n.includes('lunge') || n.includes('split squat')) {
    return [
      {
        title: 'Step 1: Stride Stance Setup',
        label: 'Starting Stance',
        description: 'Stand tall holding dumbbells at your sides. Step one foot forward ~2 to 3 feet while maintaining an upright torso.',
        focusCue: 'Torso vertical, dumbbells stable',
        graphicType: 'lunge',
        stage: 1,
      },
      {
        title: 'Step 2: 90/90 Lunge Descent',
        label: 'Bottom Position',
        description: 'Drop your back knee straight down until hovering 1 inch above the floor. Front thigh parallel to ground.',
        focusCue: 'Both knees at 90°, chest proud',
        graphicType: 'lunge',
        stage: 2,
      },
      {
        title: 'Step 3: Front-Heel Drive & Forward Step',
        label: 'Drive & Step',
        description: 'Drive forcefully through your front heel to stand tall and immediately step forward with the opposite leg.',
        focusCue: 'Drive through front heel, squeeze glute',
        graphicType: 'lunge',
        stage: 3,
      },
    ]
  }

  // 2. LEG PRESS (45-DEGREE MACHINE)
  if (id.includes('leg-press') || id.includes('hack') || n.includes('leg press') || n.includes('hack squat')) {
    return [
      {
        title: 'Step 1: Sled Setup & Foot Placement',
        label: 'Starting Position',
        description: 'Sit firmly with back against the pad. Place feet shoulder-width in the center of the platform and unlock the safety catches.',
        focusCue: 'Tailbone glued to seat, feet flat',
        graphicType: 'leg-press',
        stage: 1,
      },
      {
        title: 'Step 2: 90-Degree Descent',
        label: 'Deep Knee Flexion',
        description: 'Lower the sled smoothly until your knees reach a 90-degree angle without your lower back rounding off the seat pad.',
        focusCue: 'Control tempo, knees track toes',
        graphicType: 'leg-press',
        stage: 2,
      },
      {
        title: 'Step 3: Quad Drive & Sled Press',
        label: 'Press Extension',
        description: 'Press through your mid-foot and heels to drive the weight back up. Stop just short of locking knees.',
        focusCue: 'Do not hyperextend knees, squeeze quads',
        graphicType: 'leg-press',
        stage: 3,
      },
    ]
  }

  // 3. ROWS (Bent-Over Barbell Row, Seated Cable Row, Dumbbell Row, T-Bar Row)
  if (id.includes('row') || n.includes('row')) {
    return [
      {
        title: 'Step 1: 45° Torso Hinge & Full Stretch',
        label: 'Starting Stretch',
        description: 'Hinge forward at the hips with flat neutral spine. Arms extended with full stretch on lats and rhomboids.',
        focusCue: 'Spine flat, chest out, arms long',
        graphicType: 'row',
        stage: 1,
      },
      {
        title: 'Step 2: Elbow Pull to Lower Ribs',
        label: 'Concentric Pull',
        description: 'Drive elbows back toward your hips, skimming past your torso while pulling the weight toward your navel.',
        focusCue: 'Pull with elbows, not hands',
        graphicType: 'row',
        stage: 2,
      },
      {
        title: 'Step 3: Scapular Retraction & Squeeze',
        label: 'Peak Back Squeeze',
        description: 'Squeeze your shoulder blades together hard at the top for 1 full second, then lower under 3-second control.',
        focusCue: 'Pinch shoulder blades together',
        graphicType: 'row',
        stage: 3,
      },
    ]
  }

  // 4. DIPS (Bodyweight / Weighted Dips)
  if (id.includes('dip') || n.includes('dip')) {
    return [
      {
        title: 'Step 1: Parallel Bar Support Setup',
        label: 'Top Lockout',
        description: 'Mount the parallel bars with straight arms, wrists stacked under shoulders, and slight forward torso lean.',
        focusCue: 'Chest slightly angled forward, core tight',
        graphicType: 'dips',
        stage: 1,
      },
      {
        title: 'Step 2: 90° Elbow Descent',
        label: 'Bottom Stretch',
        description: 'Lower smoothly until upper arms are parallel to the floor (90° elbow bend) feeling a deep stretch across chest and triceps.',
        focusCue: 'Do not let shoulders roll forward',
        graphicType: 'dips',
        stage: 2,
      },
      {
        title: 'Step 3: Triceps & Chest Press Lockout',
        label: 'Press Ascent',
        description: 'Press forcefully through the palms to return to full arm extension, flexing triceps and lower pectorals at top.',
        focusCue: 'Exhale on press, lock out triceps',
        graphicType: 'dips',
        stage: 3,
      },
    ]
  }

  // 5. PUSH-UPS
  if (id.includes('pushup') || id.includes('push-up') || n.includes('push up') || n.includes('push-up')) {
    return [
      {
        title: 'Step 1: High Plank Setup',
        label: 'Starting Plank',
        description: 'Hands planted slightly wider than shoulders, fingers spread, body forming a rigid straight line from head to heels.',
        focusCue: 'Squeeze glutes and brace core',
        graphicType: 'pushups',
        stage: 1,
      },
      {
        title: 'Step 2: Chest Grazing Floor',
        label: 'Bottom Chest Stretch',
        description: 'Lower your body in one solid piece until your chest hovers 1 inch above the floor with elbows tucked at 45°.',
        focusCue: 'Elbows at 45°, do not sag hips',
        graphicType: 'pushups',
        stage: 2,
      },
      {
        title: 'Step 3: Power Push & Chest Flex',
        label: 'Top Lockout',
        description: 'Press the floor away aggressively back to high plank, squeezing your chest and locking your triceps.',
        focusCue: 'Push through entire palm, exhale',
        graphicType: 'pushups',
        stage: 3,
      },
    ]
  }

  // 6. CHEST FLYES (Cable Flyes, DB Flyes)
  if (id.includes('fly') || n.includes('fly')) {
    return [
      {
        title: 'Step 1: Hugging Arc Setup',
        label: 'Starting Position',
        description: 'Arms spread wide with a slight soft bend in elbows, chest stretched open and shoulder blades pinned.',
        focusCue: 'Maintain slight elbow bend throughout',
        graphicType: 'flyes',
        stage: 1,
      },
      {
        title: 'Step 2: Sweeping Contraction',
        label: 'Sweeping Arc',
        description: 'Bring handles/dumbbells forward in a wide hugging motion, visualizing wrapping your arms around a large barrel.',
        focusCue: 'Lead with elbows, squeeze inner chest',
        graphicType: 'flyes',
        stage: 2,
      },
      {
        title: 'Step 3: Peak Pectoral Squeeze',
        label: 'Peak Chest Flex',
        description: 'Touch handles together in front of your sternum, flexing pectorals with maximum tension for 1 second.',
        focusCue: 'Hard chest contraction, slow return',
        graphicType: 'flyes',
        stage: 3,
      },
    ]
  }

  // 7. DEADLIFT / ROMANIAN DEADLIFT / GOOD MORNING
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

  // 8. BICEPS / CURLS
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

  // 9. TRICEPS / PUSHDOWNS / EXTENSIONS
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

  // 10. OVERHEAD PRESS / SHOULDERS
  if (
    id.includes('overhead') ||
    id.includes('shoulder') ||
    id.includes('military') ||
    id.includes('arnold') ||
    n.includes('overhead') ||
    n.includes('shoulder') ||
    (n.includes('press') && !id.includes('bench') && !id.includes('leg'))
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

  // 11. LATERAL RAISES & FACE PULLS
  if (id.includes('lateral') || id.includes('face-pull') || n.includes('lateral') || n.includes('face pull')) {
    return [
      {
        title: 'Step 1: Side Starting Stance',
        label: 'Starting Position',
        description: 'Stand with weights/handles at sides with a slight forward hip hinge, shoulders depressed down.',
        focusCue: 'Depress shoulders away from ears',
        graphicType: 'lateral',
        stage: 1,
      },
      {
        title: 'Step 2: 90° Lateral Flight Arc',
        label: 'Rising Flight',
        description: 'Raise arms outward in the scapular plane leading with elbows until parallel to the floor.',
        focusCue: 'Lead with elbows, pour the pitchers',
        graphicType: 'lateral',
        stage: 2,
      },
      {
        title: 'Step 3: Lateral Deltoid Peak Flex',
        label: 'Peak Deltoid Flex',
        description: 'Hold at shoulder height for 1 second with maximum lateral delt contraction, lower slowly.',
        focusCue: 'Hold 1s at top, resist gravity down',
        graphicType: 'lateral',
        stage: 3,
      },
    ]
  }

  // 12. PULL-UPS / LAT PULLDOWN / CHIN-UPS
  if (
    id.includes('pull') ||
    id.includes('lat') ||
    id.includes('chin') ||
    n.includes('pull') ||
    n.includes('lat') ||
    n.includes('chin')
  ) {
    return [
      {
        title: 'Step 1: Dead Hang Lat Stretch',
        label: 'Full Stretch',
        description: 'Hang from bar/pulley with arms fully extended, chest proud, engaging lats from the bottom.',
        focusCue: 'Depress scapulae, wide grip',
        graphicType: 'pull',
        stage: 1,
      },
      {
        title: 'Step 2: Scapular Pull & Drive',
        label: 'Mid Ascent',
        description: 'Drive elbows down and back toward ribs while pulling upper chest toward the bar.',
        focusCue: 'Drive elbows into back pockets',
        graphicType: 'pull',
        stage: 2,
      },
      {
        title: 'Step 3: Chest-to-Bar Squeeze',
        label: 'Peak Lat Squeeze',
        description: 'Touch collarbone to bar/pulley, flexing latissimus dorsi with maximum tension for 1 second.',
        focusCue: 'Crush lats together, 3s negative',
        graphicType: 'pull',
        stage: 3,
      },
    ]
  }

  // 13. SQUATS (Back Squat, Goblet Squat)
  if (id.includes('squat') || n.includes('squat')) {
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

  // 14. BENCH PRESS / INCLINE DB PRESS
  if (id.includes('bench') || n.includes('bench')) {
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

  // 15. CALF RAISES
  if (id.includes('calf') || n.includes('calf')) {
    return [
      {
        title: 'Step 1: Deep Heel Drop Stretch',
        label: 'Bottom Stretch',
        description: 'Balls of feet on platform, lower heels below the step into a deep stretch on Achilles and calves.',
        focusCue: 'Full 2-second stretch at bottom',
        graphicType: 'calf',
        stage: 1,
      },
      {
        title: 'Step 2: Plantarflexion Drive',
        label: 'Calf Drive',
        description: 'Drive through the balls of your big toes, raising heels smoothly through the full range of motion.',
        focusCue: 'Drive through big toe, ankles straight',
        graphicType: 'calf',
        stage: 2,
      },
      {
        title: 'Step 3: Peak Contraction on Toes',
        label: 'Peak Flex',
        description: 'Rise all the way onto your tiptoes, locking the calf muscle in peak contraction for 1 full second.',
        focusCue: 'Hold peak squeeze, slow descent',
        graphicType: 'calf',
        stage: 3,
      },
    ]
  }

  // 16. PLANKS & CORE STABILITY
  if (id.includes('plank') || n.includes('plank')) {
    return [
      {
        title: 'Step 1: Forearm & Toe Anchor',
        label: 'Setup Stance',
        description: 'Forearms parallel under shoulders, toes tucked, maintaining a rigid straight line from head to heels.',
        focusCue: 'Spine neutral, push floor away',
        graphicType: 'plank',
        stage: 1,
      },
      {
        title: 'Step 2: Deep Core & Glute Lock',
        label: 'Isometric Hold',
        description: 'Squeeze glutes and contract transverse abdominis tightly, preventing lower back from sagging.',
        focusCue: 'Pull navel to spine, brace like iron',
        graphicType: 'plank',
        stage: 2,
      },
      {
        title: 'Step 3: Peak Tension & Breathing',
        label: 'Peak Tension',
        description: 'Maintain maximal abdominal wall tension while keeping slow, controlled rhythmic nasal breathing.',
        focusCue: 'Stay rigid without holding breath',
        graphicType: 'plank',
        stage: 3,
      },
    ]
  }

  // 17. CRUNCHES & DYNAMIC ABS
  if (id.includes('crunch') || id.includes('abs') || id.includes('rollout') || id.includes('leg-raise') || n.includes('crunch')) {
    return [
      {
        title: 'Step 1: Supine Lying Setup',
        label: 'Starting Position',
        description: 'Lie on mat with knees bent at 90°, feet flat, hands behind head supporting the neck lightly.',
        focusCue: 'Lower back pressed flat into floor',
        graphicType: 'abs',
        stage: 1,
      },
      {
        title: 'Step 2: Torso Curl Compression',
        label: 'Mid-Flexion',
        description: 'Curl shoulder blades off floor, driving ribs toward pelvis with powerful rectus abdominis flexion.',
        focusCue: 'Exhale forcefully on curl',
        graphicType: 'abs',
        stage: 2,
      },
      {
        title: 'Step 3: Peak Abdominal Flex',
        label: 'Peak Six-Pack Squeeze',
        description: 'Squeeze abs maximally at peak crunch for 1 second, then lower under a slow 3-second negative.',
        focusCue: 'Hold crunch, resist on lowering',
        graphicType: 'abs',
        stage: 3,
      },
    ]
  }

  // Default Fallback
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
  
  // Default to photo if exact 1:1 image exists, otherwise default to animated biomechanic steps
  const [viewMode, setViewMode] = useState<'photo' | 'steps'>(photo ? 'photo' : 'steps')
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [isZoomed, setIsZoomed] = useState<boolean>(false)

  // Reset view mode if exerciseId changes
  useEffect(() => {
    setViewMode(photo ? 'photo' : 'steps')
    setCurrentStep(0)
  }, [exerciseId, photo])

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
      {/* Top View Mode Switcher: When Photo exists, give choice between 3D Muscle Guide & Motion Steps */}
      <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-2.5">
        <div className="flex items-center gap-1.5 rounded-xl bg-secondary/80 p-1">
          {photo && (
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
          )}

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

        {viewMode === 'photo' && photo && (
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
      {viewMode === 'photo' && photo && (
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
                <div className="relative flex h-32 xs:h-36 sm:h-44 w-full items-center justify-center rounded-xl bg-gradient-to-b from-primary/[0.08] to-transparent border border-primary/20 shadow-inner overflow-hidden p-1">
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
 * with highlighted red active muscle contraction zones for EVERY distinct workout type.
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

  // 1. WALKING LUNGE / SPLIT SQUAT (Anatomical Lunge stride with dumbbells at sides & red quads/glutes)
  if (type === 'lunge') {
    return (
      <svg viewBox="0 0 320 140" className="h-full w-auto select-none" fill="none">
        <defs>
          <linearGradient id="lungeMuscleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={redActiveLight} />
            <stop offset="50%" stopColor={redActive} />
            <stop offset="100%" stopColor={redActiveDark} />
          </linearGradient>
        </defs>

        <line x1="20" y1="125" x2="300" y2="125" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />

        {stage === 1 && (
          // Lunge: Standing Stride Setup
          <g transform="translate(100, 10)">
            <circle cx="60" cy="20" r="10" fill={bodyBase} />
            <path d="M 60 28 L 60 65" stroke={bodyDark} strokeWidth="14" strokeLinecap="round" />
            {/* Dumbbells at sides */}
            <path d="M 50 36 L 50 68" stroke={bodyBase} strokeWidth="6" strokeLinecap="round" />
            <path d="M 70 36 L 70 68" stroke={bodyBase} strokeWidth="6" strokeLinecap="round" />
            <rect x="46" y="66" width="8" height="12" rx="2" fill="#3b82f6" />
            <rect x="66" y="66" width="8" height="12" rx="2" fill="#3b82f6" />

            {/* Front Leg Stepping Forward */}
            <path d="M 55 65 L 75 92" stroke="url(#lungeMuscleGrad)" strokeWidth="11" strokeLinecap="round" />
            <path d="M 75 92 L 80 122" stroke={bodyBase} strokeWidth="8" strokeLinecap="round" />
            {/* Rear Leg Back */}
            <path d="M 65 65 L 45 95" stroke={bodyDark} strokeWidth="10" strokeLinecap="round" />
            <path d="M 45 95 L 38 122" stroke={bodyBase} strokeWidth="8" strokeLinecap="round" />
          </g>
        )}

        {stage === 2 && (
          // Lunge: Deep 90/90 Knee Drop (Peak Quad & Glute Contraction)
          <g transform="translate(90, 20)">
            <circle cx="70" cy="25" r="10" fill={bodyBase} />
            <path d="M 70 33 L 70 65" stroke={bodyDark} strokeWidth="14" strokeLinecap="round" />
            
            {/* Dumbbells hanging at sides */}
            <path d="M 60 38 L 60 70" stroke={bodyBase} strokeWidth="6" strokeLinecap="round" />
            <path d="M 80 38 L 80 70" stroke={bodyBase} strokeWidth="6" strokeLinecap="round" />
            <rect x="56" y="68" width="8" height="12" rx="2" fill="#3b82f6" />
            <rect x="76" y="68" width="8" height="12" rx="2" fill="#3b82f6" />

            {/* FRONT LEG: 90 DEGREE PARALLEL (Deep Red Active Quad & Glute) */}
            <path d="M 68 65 L 105 65" stroke="url(#lungeMuscleGrad)" strokeWidth="13" strokeLinecap="round" />
            <line x1="72" y1="65" x2="100" y2="65" stroke="#fee2e2" strokeWidth="1.8" />
            <path d="M 105 65 L 105 105" stroke={bodyBase} strokeWidth="9" strokeLinecap="round" />
            <path d="M 105 105 L 115 105" stroke={bodyLight} strokeWidth="4" strokeLinecap="round" />

            {/* REAR LEG: Hovering 1 inch off floor */}
            <path d="M 68 65 L 45 85" stroke={bodyDark} strokeWidth="11" strokeLinecap="round" />
            <path d="M 45 85 L 35 103" stroke={bodyDark} strokeWidth="8" strokeLinecap="round" />

            {/* Active Muscle Glow on Front Thigh */}
            <circle cx="86" cy="65" r="14" stroke={redActive} strokeWidth="1.8" strokeDasharray="3 3" />
          </g>
        )}

        {stage === 3 && (
          // Lunge: Front Heel Drive Forward
          <g transform="translate(100, 10)">
            <circle cx="65" cy="18" r="10" fill={bodyBase} />
            <path d="M 65 26 L 65 62" stroke={bodyDark} strokeWidth="14" strokeLinecap="round" />

            <path d="M 55 34 L 55 65" stroke={bodyBase} strokeWidth="6" strokeLinecap="round" />
            <path d="M 75 34 L 75 65" stroke={bodyBase} strokeWidth="6" strokeLinecap="round" />
            <rect x="51" y="63" width="8" height="12" rx="2" fill="#3b82f6" />
            <rect x="71" y="63" width="8" height="12" rx="2" fill="#3b82f6" />

            {/* Locked Front Quad */}
            <path d="M 60 62 L 72 90" stroke="url(#lungeMuscleGrad)" strokeWidth="12" strokeLinecap="round" />
            <path d="M 72 90 L 75 122" stroke={bodyBase} strokeWidth="9" strokeLinecap="round" />
            {/* Trailing leg pulling through */}
            <path d="M 68 62 L 50 85" stroke={bodyDark} strokeWidth="10" strokeLinecap="round" />
            <path d="M 50 85 L 48 122" stroke={bodyBase} strokeWidth="8" strokeLinecap="round" />
            <circle cx="65" cy="62" r="14" stroke={redActive} strokeWidth="1.5" strokeDasharray="3 3" />
          </g>
        )}
      </svg>
    )
  }

  // 2. LEG PRESS (45-Degree Sled Machine with Incline Backrest & Platform)
  if (type === 'leg-press') {
    return (
      <svg viewBox="0 0 320 140" className="h-full w-auto select-none" fill="none">
        <defs>
          <linearGradient id="pressLegGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={redActiveLight} />
            <stop offset="50%" stopColor={redActive} />
            <stop offset="100%" stopColor={redActiveDark} />
          </linearGradient>
        </defs>

        {/* 45-degree angled machine frame & guide rails */}
        <line x1="50" y1="120" x2="270" y2="20" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
        <line x1="70" y1="130" x2="290" y2="30" stroke="#334155" strokeWidth="4" />

        {/* Incline Backrest Seat */}
        <path d="M 65 115 L 115 80" stroke="#0f172a" strokeWidth="12" strokeLinecap="round" />

        {stage === 1 && (
          // Leg Press: Unracked Stance (Extended)
          <g transform="translate(40, 5)">
            <circle cx="75" cy="80" r="10" fill={bodyBase} />
            <path d="M 80 84 L 115 95" stroke={bodyDark} strokeWidth="14" strokeLinecap="round" />

            {/* Extended Legs pressing 45° sled */}
            <path d="M 115 95 L 165 60" stroke="url(#pressLegGrad)" strokeWidth="12" strokeLinecap="round" />
            <path d="M 165 60 L 205 32" stroke={bodyBase} strokeWidth="9" strokeLinecap="round" />

            {/* Sled Footplate & Weight Plate */}
            <rect x="200" y="18" width="10" height="30" rx="2" fill="#3b82f6" transform="rotate(-45 205 33)" />
            <circle cx="218" cy="22" r="12" fill={redActive} stroke="#fff" strokeWidth="1" />
          </g>
        )}

        {stage === 2 && (
          // Leg Press: Deep 90-Degree Knee Flexion (Peak Quad Tension)
          <g transform="translate(40, 5)">
            <circle cx="75" cy="80" r="10" fill={bodyBase} />
            <path d="M 80 84 L 115 95" stroke={bodyDark} strokeWidth="14" strokeLinecap="round" />

            {/* Deep 90° Bent Knees (Glowing Red Quadriceps) */}
            <path d="M 115 95 L 140 60" stroke="url(#pressLegGrad)" strokeWidth="13" strokeLinecap="round" />
            <line x1="118" y1="92" x2="138" y2="65" stroke="#ffffff" strokeWidth="1.8" />
            <path d="M 140 60 L 175 75" stroke={bodyBase} strokeWidth="9" strokeLinecap="round" />

            {/* Sled Platform Lowered */}
            <rect x="170" y="60" width="10" height="30" rx="2" fill="#3b82f6" transform="rotate(-45 175 75)" />
            <circle cx="188" cy="65" r="12" fill={redActive} stroke="#fff" strokeWidth="1" />
            <circle cx="130" cy="75" r="15" stroke={redActive} strokeWidth="2" strokeDasharray="3 3" />
          </g>
        )}

        {stage === 3 && (
          // Leg Press: Powerful Quad Drive Lockout
          <g transform="translate(40, 5)">
            <circle cx="75" cy="80" r="10" fill={bodyBase} />
            <path d="M 80 84 L 115 95" stroke={bodyDark} strokeWidth="14" strokeLinecap="round" />

            {/* Pressing Sled to Top */}
            <path d="M 115 95 L 162 62" stroke="url(#pressLegGrad)" strokeWidth="12" strokeLinecap="round" />
            <path d="M 162 62 L 202 34" stroke={bodyBase} strokeWidth="9" strokeLinecap="round" />

            <rect x="198" y="20" width="10" height="30" rx="2" fill="#3b82f6" transform="rotate(-45 203 35)" />
            <circle cx="216" cy="24" r="12" fill={redActive} stroke="#fff" strokeWidth="1" />
            <circle cx="140" cy="78" r="14" stroke={redActive} strokeWidth="1.8" strokeDasharray="3 3" />
          </g>
        )}
      </svg>
    )
  }

  // 3. ROWS (Bent-Over / Seated Cable / DB Row with glowing red Latissimus & Rhomboids)
  if (type === 'row') {
    return (
      <svg viewBox="0 0 320 140" className="h-full w-auto select-none" fill="none">
        <defs>
          <linearGradient id="rowMuscleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={redActiveLight} />
            <stop offset="50%" stopColor={redActive} />
            <stop offset="100%" stopColor={redActiveDark} />
          </linearGradient>
        </defs>

        <line x1="20" y1="125" x2="300" y2="125" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />

        <g transform="translate(100, 10)">
          {/* Head & 45-degree hinged spine */}
          <circle cx="45" cy="40" r="10" fill={bodyBase} />
          <path d="M 50 45 L 85 70" stroke={bodyDark} strokeWidth="14" strokeLinecap="round" />

          {/* ACTIVE RED LATS & RHOMBOIDS */}
          <path d="M 55 48 Q 70 55 80 68" stroke="url(#rowMuscleGrad)" strokeWidth="11" strokeLinecap="round" />

          {/* Legs & Knees soft */}
          <path d="M 85 70 L 78 95" stroke={bodyDark} strokeWidth="11" strokeLinecap="round" />
          <path d="M 78 95 L 75 122" stroke={bodyBase} strokeWidth="9" strokeLinecap="round" />

          {stage === 1 && (
            // Arms hanging straight down with stretch
            <g>
              <path d="M 58 50 L 58 92" stroke={bodyBase} strokeWidth="7" strokeLinecap="round" />
              <circle cx="58" cy="92" r="8" fill="#3b82f6" />
              <line x1="35" y1="92" x2="80" y2="92" stroke={barbellColor} strokeWidth="4" />
            </g>
          )}

          {stage === 2 && (
            // Elbows pulling back
            <g>
              <path d="M 58 50 L 75 62 L 62 82" stroke={bodyBase} strokeWidth="7" strokeLinecap="round" />
              <line x1="60" y1="52" x2="72" y2="60" stroke="#fee2e2" strokeWidth="1.6" />
              <circle cx="62" cy="82" r="8" fill="#3b82f6" />
            </g>
          )}

          {stage === 3 && (
            // Peak Back Squeeze to Navel
            <g>
              <path d="M 58 50 L 85 52 L 72 70" stroke={bodyBase} strokeWidth="8" strokeLinecap="round" />
              <circle cx="72" cy="70" r="9" fill="#3b82f6" />
              <line x1="50" y1="70" x2="95" y2="70" stroke={barbellColor} strokeWidth="4" />
              <circle cx="68" cy="58" r="15" stroke={redActive} strokeWidth="2" strokeDasharray="3 3" />
            </g>
          )}
        </g>
      </svg>
    )
  }

  // 4. DIPS (Parallel Bars with active triceps & lower chest)
  if (type === 'dips') {
    return (
      <svg viewBox="0 0 320 140" className="h-full w-auto select-none" fill="none">
        <defs>
          <linearGradient id="dipMuscleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={redActiveLight} />
            <stop offset="50%" stopColor={redActive} />
            <stop offset="100%" stopColor={redActiveDark} />
          </linearGradient>
        </defs>

        {/* Parallel Dip Bars */}
        <line x1="70" y1="80" x2="250" y2="80" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
        <line x1="100" y1="80" x2="100" y2="135" stroke="#1e293b" strokeWidth="8" />
        <line x1="220" y1="80" x2="220" y2="135" stroke="#1e293b" strokeWidth="8" />

        <g transform="translate(110, 5)">
          {stage === 1 && (
            // Lockout on bars
            <g>
              <circle cx="50" cy="20" r="10" fill={bodyBase} />
              <path d="M 50 28 L 50 72" stroke={bodyDark} strokeWidth="13" strokeLinecap="round" />
              {/* Straight Arms Locking */}
              <path d="M 44 35 L 44 75" stroke="url(#dipMuscleGrad)" strokeWidth="8" strokeLinecap="round" />
              <path d="M 56 35 L 56 75" stroke="url(#dipMuscleGrad)" strokeWidth="8" strokeLinecap="round" />
              {/* Legs bent */}
              <path d="M 50 72 L 60 95 L 48 115" stroke={bodyDark} strokeWidth="8" strokeLinecap="round" />
            </g>
          )}

          {stage === 2 && (
            // 90-degree descent (Deep chest & tricep stretch)
            <g>
              <circle cx="50" cy="40" r="10" fill={bodyBase} />
              <path d="M 50 48 L 52 88" stroke={bodyDark} strokeWidth="13" strokeLinecap="round" />
              {/* 90° Bent Elbows */}
              <path d="M 44 52 L 28 65 L 44 76" stroke="url(#dipMuscleGrad)" strokeWidth="8" strokeLinecap="round" />
              <path d="M 56 52 L 72 65 L 56 76" stroke="url(#dipMuscleGrad)" strokeWidth="8" strokeLinecap="round" />
              <path d="M 52 88 L 62 110 L 50 125" stroke={bodyDark} strokeWidth="8" strokeLinecap="round" />
              <circle cx="50" cy="55" r="14" stroke={redActive} strokeWidth="1.8" strokeDasharray="3 3" />
            </g>
          )}

          {stage === 3 && (
            // Press back to top lockout
            <g>
              <circle cx="50" cy="18" r="10" fill={bodyBase} />
              <path d="M 50 26 L 50 70" stroke={bodyDark} strokeWidth="13" strokeLinecap="round" />
              <path d="M 44 33 L 44 75" stroke="url(#dipMuscleGrad)" strokeWidth="8" strokeLinecap="round" />
              <path d="M 56 33 L 56 75" stroke="url(#dipMuscleGrad)" strokeWidth="8" strokeLinecap="round" />
              <circle cx="50" cy="38" r="14" stroke={redActive} strokeWidth="2" strokeDasharray="3 3" />
              <path d="M 50 70 L 60 92 L 48 112" stroke={bodyDark} strokeWidth="8" strokeLinecap="round" />
            </g>
          )}
        </g>
      </svg>
    )
  }

  // 5. ABS / CRUNCHES / CORE (Supine Lying vs Curled Peak Six-Pack Contraction)
  if (type === 'abs') {
    return (
      <svg viewBox="0 0 320 140" className="h-full w-auto select-none" fill="none">
        <defs>
          <linearGradient id="absMuscleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={redActiveLight} />
            <stop offset="50%" stopColor={redActive} />
            <stop offset="100%" stopColor={redActiveDark} />
          </linearGradient>
        </defs>

        <line x1="20" y1="125" x2="300" y2="125" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />

        {stage === 1 && (
          <g transform="translate(45, 20)">
            <circle cx="210" cy="85" r="11" fill={bodyBase} />
            <path d="M 195 85 Q 205 70 216 75" stroke={bodyBase} strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M 195 86 C 180 88 165 89 150 90" stroke={bodyDark} strokeWidth="2" fill={bodyBase} />
            
            {/* RECTUS ABDOMINIS IN RED */}
            <path d="M 180 88 C 170 89 155 90 145 94 C 142 98 140 104 148 105 C 162 104 175 100 182 95 Z" fill="url(#absMuscleGrad)" stroke={redActiveLight} strokeWidth="1" />
            <line x1="172" y1="90" x2="174" y2="101" stroke="#fee2e2" strokeWidth="1.2" opacity="0.9" />
            <line x1="162" y1="91" x2="164" y2="103" stroke="#fee2e2" strokeWidth="1.2" opacity="0.9" />

            <path d="M 135 105 Q 115 80 95 75" stroke={bodyDark} strokeWidth="13" strokeLinecap="round" />
            <path d="M 95 75 Q 75 95 50 115" stroke={bodyBase} strokeWidth="10" strokeLinecap="round" />
          </g>
        )}

        {stage === 2 && (
          <g transform="translate(45, 15)">
            <circle cx="195" cy="65" r="11" fill={bodyBase} />
            <path d="M 180 68 Q 165 72 150 82 Q 140 92 135 105" stroke={bodyDark} strokeWidth="2" fill={bodyBase} />

            <path d="M 172 70 C 160 75 148 84 140 94 C 137 100 142 105 150 102 C 160 96 172 85 178 76 Z" fill="url(#absMuscleGrad)" stroke={redActiveLight} strokeWidth="1.5" />
            <line x1="165" y1="73" x2="160" y2="88" stroke="#fee2e2" strokeWidth="1.4" />
            <line x1="155" y1="78" x2="150" y2="94" stroke="#fee2e2" strokeWidth="1.4" />

            <path d="M 135 105 Q 115 80 95 75" stroke={bodyDark} strokeWidth="13" strokeLinecap="round" />
            <path d="M 95 75 Q 75 95 50 115" stroke={bodyBase} strokeWidth="10" strokeLinecap="round" />
          </g>
        )}

        {stage === 3 && (
          <g transform="translate(45, 10)">
            <circle cx="175" cy="40" r="11" fill={bodyBase} />
            <path d="M 162 48 Q 148 58 140 75 Q 135 90 135 105" stroke={bodyDark} strokeWidth="2" fill={bodyBase} />

            <path d="M 158 52 C 145 62 136 78 134 94 C 133 103 140 106 148 100 C 156 90 165 72 168 58 Z" fill="url(#absMuscleGrad)" stroke="#fca5a5" strokeWidth="2" />
            <line x1="156" y1="56" x2="148" y2="76" stroke="#ffffff" strokeWidth="1.6" />
            <circle cx="145" cy="78" r="16" stroke={redActive} strokeWidth="1.5" strokeDasharray="3 3" />

            <path d="M 135 105 Q 115 80 95 75" stroke={bodyDark} strokeWidth="13" strokeLinecap="round" />
            <path d="M 95 75 Q 75 95 50 115" stroke={bodyBase} strokeWidth="10" strokeLinecap="round" />
          </g>
        )}
      </svg>
    )
  }

  // 6. BENCH PRESS / CHEST
  if (type === 'bench' || type === 'pushups' || type === 'flyes') {
    return (
      <svg viewBox="0 0 320 140" className="h-full w-auto select-none" fill="none">
        <defs>
          <linearGradient id="chestMuscleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={redActiveLight} />
            <stop offset="50%" stopColor={redActive} />
            <stop offset="100%" stopColor={redActiveDark} />
          </linearGradient>
        </defs>

        <rect x="50" y="90" width="160" height="10" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
        <rect x="75" y="100" width="10" height="25" fill="#0f172a" />
        <rect x="175" y="100" width="10" height="25" fill="#0f172a" />

        {stage === 1 && (
          <g transform="translate(40, 10)">
            <circle cx="80" cy="78" r="11" fill={bodyBase} />
            <path d="M 88 82 Q 130 80 160 88" stroke={bodyDark} strokeWidth="16" strokeLinecap="round" />
            <ellipse cx="125" cy="80" rx="18" ry="8" fill="url(#chestMuscleGrad)" stroke={redActiveLight} strokeWidth="1.2" />
            <path d="M 120 78 L 120 32" stroke={bodyBase} strokeWidth="8" strokeLinecap="round" />
            <line x1="60" y1="30" x2="190" y2="30" stroke={barbellColor} strokeWidth="5" strokeLinecap="round" />
            <path d="M 160 88 Q 185 92 195 115" stroke={bodyDark} strokeWidth="10" strokeLinecap="round" />
          </g>
        )}

        {stage === 2 && (
          <g transform="translate(40, 10)">
            <circle cx="80" cy="78" r="11" fill={bodyBase} />
            <path d="M 88 82 Q 130 80 160 88" stroke={bodyDark} strokeWidth="16" strokeLinecap="round" />
            <ellipse cx="125" cy="80" rx="22" ry="9" fill="url(#chestMuscleGrad)" stroke={redActiveLight} strokeWidth="1.8" />
            <path d="M 120 78 L 105 88 L 122 62" stroke={bodyBase} strokeWidth="7" strokeLinecap="round" />
            <line x1="60" y1="60" x2="190" y2="60" stroke={barbellColor} strokeWidth="5" strokeLinecap="round" />
            <path d="M 160 88 Q 185 92 195 115" stroke={bodyDark} strokeWidth="10" strokeLinecap="round" />
          </g>
        )}

        {stage === 3 && (
          <g transform="translate(40, 10)">
            <circle cx="80" cy="78" r="11" fill={bodyBase} />
            <path d="M 88 82 Q 130 80 160 88" stroke={bodyDark} strokeWidth="16" strokeLinecap="round" />
            <ellipse cx="125" cy="80" rx="19" ry="8.5" fill="url(#chestMuscleGrad)" stroke="#fca5a5" strokeWidth="2" />
            <circle cx="125" cy="80" r="14" stroke={redActive} strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 120 78 L 120 30" stroke={bodyBase} strokeWidth="8" strokeLinecap="round" />
            <line x1="60" y1="28" x2="190" y2="28" stroke={barbellColor} strokeWidth="5" strokeLinecap="round" />
            <path d="M 160 88 Q 185 92 195 115" stroke={bodyDark} strokeWidth="10" strokeLinecap="round" />
          </g>
        )}
      </svg>
    )
  }

  // 7. SQUAT (Barbell Squat)
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
          <g transform="translate(100, 10)">
            <circle cx="60" cy="20" r="10" fill={bodyBase} />
            <path d="M 60 28 L 60 65" stroke={bodyDark} strokeWidth="14" strokeLinecap="round" />
            <line x1="10" y1="28" x2="110" y2="28" stroke={barbellColor} strokeWidth="5" strokeLinecap="round" />
            <path d="M 54 65 L 48 95" stroke="url(#legMuscleGrad)" strokeWidth="12" strokeLinecap="round" />
            <path d="M 66 65 L 72 95" stroke="url(#legMuscleGrad)" strokeWidth="12" strokeLinecap="round" />
            <path d="M 48 95 L 45 122" stroke={bodyBase} strokeWidth="9" strokeLinecap="round" />
            <path d="M 72 95 L 75 122" stroke={bodyBase} strokeWidth="9" strokeLinecap="round" />
          </g>
        )}

        {stage === 2 && (
          <g transform="translate(100, 15)">
            <circle cx="80" cy="40" r="10" fill={bodyBase} />
            <path d="M 80 48 L 55 72" stroke={bodyDark} strokeWidth="14" strokeLinecap="round" />
            <line x1="25" y1="46" x2="125" y2="46" stroke={barbellColor} strokeWidth="5" strokeLinecap="round" />
            <path d="M 55 72 L 95 72" stroke="url(#legMuscleGrad)" strokeWidth="14" strokeLinecap="round" />
            <line x1="60" y1="72" x2="90" y2="72" stroke="#ffffff" strokeWidth="1.8" />
            <path d="M 95 72 L 88 120" stroke={bodyBase} strokeWidth="10" strokeLinecap="round" />
            <circle cx="75" cy="72" r="14" stroke={redActive} strokeWidth="2" strokeDasharray="3 3" />
          </g>
        )}

        {stage === 3 && (
          <g transform="translate(100, 10)">
            <circle cx="60" cy="18" r="10" fill={bodyBase} />
            <path d="M 60 26 L 60 63" stroke={bodyDark} strokeWidth="14" strokeLinecap="round" />
            <line x1="10" y1="26" x2="110" y2="26" stroke={barbellColor} strokeWidth="5" strokeLinecap="round" />
            <path d="M 54 63 L 48 93" stroke="url(#legMuscleGrad)" strokeWidth="12" strokeLinecap="round" />
            <path d="M 66 63 L 72 93" stroke="url(#legMuscleGrad)" strokeWidth="12" strokeLinecap="round" />
            <circle cx="60" cy="63" r="15" stroke={redActive} strokeWidth="1.8" strokeDasharray="3 3" />
          </g>
        )}
      </svg>
    )
  }

  // 8. BICEPS / CURL
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
            <g>
              <path d="M 54 36 L 54 62" stroke="url(#bicepMuscleGrad)" strokeWidth="9" strokeLinecap="round" />
              <path d="M 54 62 L 54 90" stroke={bodyBase} strokeWidth="8" strokeLinecap="round" />
              <circle cx="54" cy="90" r="8" fill="#3b82f6" />
            </g>
          )}

          {stage === 2 && (
            <g>
              <path d="M 54 36 L 54 60" stroke="url(#bicepMuscleGrad)" strokeWidth="11" strokeLinecap="round" />
              <path d="M 54 60 L 80 50" stroke={bodyBase} strokeWidth="8" strokeLinecap="round" />
              <circle cx="80" cy="50" r="9" fill="#3b82f6" />
            </g>
          )}

          {stage === 3 && (
            <g>
              <ellipse cx="54" cy="46" rx="8" ry="12" fill="url(#bicepMuscleGrad)" stroke="#fee2e2" strokeWidth="1.5" />
              <path d="M 54 60 L 62 38" stroke={bodyBase} strokeWidth="8" strokeLinecap="round" />
              <circle cx="62" cy="38" r="9" fill="#3b82f6" />
              <circle cx="54" cy="46" r="14" stroke={redActive} strokeWidth="2" strokeDasharray="3 3" />
            </g>
          )}

          <path d="M 45 70 L 42 122" stroke={bodyDark} strokeWidth="10" strokeLinecap="round" />
          <path d="M 55 70 L 58 122" stroke={bodyDark} strokeWidth="10" strokeLinecap="round" />
        </g>
      </svg>
    )
  }

  // 9. DEFAULT / OTHER
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

        <path d="M 54 65 L 48 122" stroke={bodyBase} strokeWidth="9" strokeLinecap="round" />
        <path d="M 66 65 L 72 122" stroke={bodyBase} strokeWidth="9" strokeLinecap="round" />
      </g>
    </svg>
  )
}
