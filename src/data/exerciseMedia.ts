import type { ExerciseMedia } from '@/types'

/**
 * Verified Exercise Media Manifest (Free Exercise DB API Integration).
 *
 * Source: https://github.com/luisaraujoc/free-exercise-db-api
 * License: MIT License (Copyright (c) 2026 Arham Wani)
 * Media Storage: Cloudflare R2 (https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev)
 *
 * Covers 100% of ForgeFit canonical and expanded exercise library.
 */
export const EXERCISE_MEDIA_MANIFEST: Record<string, ExerciseMedia> = {
  "flat-barbell-bench": {
    "exerciseId": "flat-barbell-bench",
    "name": "Flat Barbell Bench Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-bench-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-bench-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-bench-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-bench-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/barbell-bench-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-bench-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/barbell-bench-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0025",
    "matchedExternalName": "Barbell Bench Press",
    "confidence": "exact",
    "steps": [
      "Lie flat on the bench with your eyes under the bar and plant your feet firmly on the floor.",
      "Grip the bar slightly wider than shoulder width and straighten your arms to unrack it over your chest.",
      "Lower the bar under control to your mid-chest while keeping your wrists stacked over your forearms.",
      "Lightly touch your chest, then press the bar straight up until your arms are fully extended.",
      "Guide the bar back into the rack once you finish the set."
    ],
    "formCues": [
      "Drive feet into floor",
      "Keep wrists stacked",
      "Touch mid-chest",
      "Press straight up"
    ],
    "commonMistakes": [
      "Bar drifts toward the neck or stomach",
      "Elbows flare straight out from the shoulders",
      "Wrists bend backward under the bar",
      "Hips lift off the bench during the press"
    ],
    "breathing": "Inhale as you lower the bar to your chest, and exhale as you press it back up."
  },
  "incline-db-press": {
    "exerciseId": "incline-db-press",
    "name": "Incline Dumbbell Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-bench-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-bench-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-bench-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-bench-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-incline-bench-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-bench-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-incline-bench-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0314",
    "matchedExternalName": "Dumbbell Incline Bench Press",
    "confidence": "exact",
    "steps": [
      "Set an incline bench and sit back with a dumbbell in each hand resting on your thighs.",
      "Lie back on the bench and bring the dumbbells to chest level with your palms facing forward.",
      "Plant your feet on the floor and position your elbows slightly below shoulder height.",
      "Press the dumbbells up over your upper chest until your arms are straight.",
      "Lower the dumbbells under control to the sides of your upper chest.",
      "Repeat by pressing back up along the same path."
    ],
    "formCues": [
      "Keep wrists stacked",
      "Drive feet into floor",
      "Lower with control",
      "Press over upper chest"
    ],
    "commonMistakes": [
      "Flaring the elbows straight out to the sides",
      "Letting the dumbbells drift toward the face",
      "Bouncing the dumbbells off the chest position",
      "Arching the lower back off the bench"
    ],
    "breathing": "Inhale as you lower the dumbbells, and exhale as you press them up."
  },
  "cable-flyes": {
    "exerciseId": "cable-flyes",
    "name": "Cable Flyes",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-standing-fly-crossover-fly.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-standing-fly-crossover-fly.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-standing-fly-crossover-fly.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-standing-fly-crossover-fly.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-standing-fly-crossover-fly.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-standing-fly-crossover-fly.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-standing-fly-crossover-fly.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1269",
    "matchedExternalName": "Cable Standing Fly",
    "confidence": "exact",
    "steps": [
      "Attach handles to both high pulleys.",
      "Stand centered between pulleys, grasp handles in each hand.",
      "Step forward into a staggered stance, arms outstretched.",
      "With elbows slightly bent, bring handles together in front of chest.",
      "Return slowly to starting position, feeling the stretch in the chest."
    ],
    "formCues": [
      "Lead with your elbows",
      "Slight bend at elbows",
      "Keep chest up",
      "Don’t let shoulders roll forward"
    ],
    "commonMistakes": [
      "Over-extending arms",
      "Letting elbows lock",
      "Rounding the back"
    ],
    "breathing": "Exhale as you bring hands together, inhale as you return."
  },
  "dips": {
    "exerciseId": "dips",
    "name": "Dips",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/chest-dips.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/chest-dips.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/chest-dips.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/chest-dips.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/chest-dips.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/chest-dips.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/chest-dips.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-chest-dips",
    "matchedExternalName": "Chest Dips",
    "confidence": "exact",
    "steps": [
      "Grip parallel bars and lift to start.",
      "Lean torso forward and bend elbows.",
      "Lower until upper arms are parallel to floor.",
      "Pause at the bottom, feeling the stretch.",
      "Push up through palms, returning to start."
    ],
    "formCues": [
      "Lean forward",
      "Keep elbows out to sides",
      "Descend under control",
      "Avoid locking elbows at top"
    ],
    "commonMistakes": [
      "Staying too upright (triceps focus)",
      "Going too deep",
      "Flaring elbows excessively"
    ],
    "breathing": "Inhale as you lower, exhale as you press up."
  },
  "tricep-rope-pushdowns": {
    "exerciseId": "tricep-rope-pushdowns",
    "name": "Tricep Rope Pushdowns",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-pushdown-rope-attachment.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-pushdown-rope-attachment.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-pushdown-rope-attachment.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-pushdown-rope-attachment.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-pushdown-rope-attachment.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-pushdown-rope-attachment.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-pushdown-rope-attachment.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0200",
    "matchedExternalName": "Cable Rope Triceps Pushdown",
    "confidence": "exact",
    "steps": [
      "Attach a rope to the high pulley and stand facing the machine.",
      "Grab the rope with both hands, thumbs facing inward.",
      "Keep elbows tucked at your sides and lean slightly forward.",
      "Extend your arms down, splitting the rope at the bottom.",
      "Slowly return to the start without letting elbows flare out."
    ],
    "formCues": [
      "Keep elbows fixed",
      "Split the rope at the bottom",
      "Don’t use your shoulders",
      "Full extension on each rep"
    ],
    "commonMistakes": [
      "Flaring elbows",
      "Using momentum",
      "Not fully extending arms"
    ],
    "breathing": "Exhale as you push down, inhale as you return."
  },
  "skull-crushers": {
    "exerciseId": "skull-crushers",
    "name": "Skull Crushers",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/ez-barbell-lying-triceps-extension.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/ez-barbell-lying-triceps-extension.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/ez-barbell-lying-triceps-extension.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/ez-barbell-lying-triceps-extension.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/ez-barbell-lying-triceps-extension.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/ez-barbell-lying-triceps-extension.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/ez-barbell-lying-triceps-extension.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0061",
    "matchedExternalName": "EZ Bar Lying Triceps Extension",
    "confidence": "exact",
    "steps": [
      "Lie on bench, grip EZ bar with medium width.",
      "Extend arms fully above chest.",
      "Bend elbows, lowering bar toward forehead.",
      "Keep upper arms stationary.",
      "Extend to starting position, repeat."
    ],
    "formCues": [
      "Lock upper arms",
      "Lower with control",
      "Don't move elbows",
      "Full triceps extension"
    ],
    "commonMistakes": [
      "Flaring elbows",
      "Moving upper arms",
      "Lowering bar too far past head"
    ],
    "breathing": "Inhale lowering bar, exhale extending arms."
  },
  "deadlift": {
    "exerciseId": "deadlift",
    "name": "Deadlift",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-straight-leg-deadlift.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-straight-leg-deadlift.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-straight-leg-deadlift.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-straight-leg-deadlift.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/barbell-straight-leg-deadlift.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-straight-leg-deadlift.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/barbell-straight-leg-deadlift.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0116",
    "matchedExternalName": "Barbell Straight Leg Deadlift",
    "confidence": "exact",
    "steps": [
      "Stand tall with your feet hip-width apart and hold the barbell in front of your thighs with straight arms.",
      "Soften your knees slightly and brace your midsection.",
      "Push your hips back and lower the bar down your legs while keeping your back flat and your legs nearly straight.",
      "Lower until the bar reaches mid-shin or until you feel a strong hamstring stretch without losing your back position.",
      "Drive your hips forward and stand tall, keeping the bar close to your legs the whole way up.",
      "Finish with your hips locked out and shoulders stacked over your hips."
    ],
    "formCues": [
      "Hips back, not down",
      "Keep the bar close",
      "Soft knees, flat back",
      "Stand tall and squeeze glutes"
    ],
    "commonMistakes": [
      "Bending the knees into a squat as the bar lowers",
      "Letting the bar drift forward away from the legs",
      "Rounding the lower back near the bottom",
      "Jerking the bar off the bottom instead of lifting smoothly"
    ],
    "breathing": "Inhale and brace before hinging down, then exhale as you drive your hips forward to stand up."
  },
  "lat-pulldown": {
    "exerciseId": "lat-pulldown",
    "name": "Lat Pulldown",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-bar-lateral-pulldown-reverse-grip.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-bar-lateral-pulldown-reverse-grip.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-bar-lateral-pulldown-reverse-grip.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-bar-lateral-pulldown-reverse-grip.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-bar-lateral-pulldown-reverse-grip.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-bar-lateral-pulldown-reverse-grip.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-bar-lateral-pulldown-reverse-grip.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0207",
    "matchedExternalName": "Reverse-Grip Cable Lat Pulldown",
    "confidence": "exact",
    "steps": [
      "Set the cable bar attachment and sit with knees secured under the pad.",
      "Grasp the bar with a reverse (supinated) shoulder-width grip.",
      "Lean back slightly, chest up, arms fully extended.",
      "Pull the bar down to your upper chest by contracting your lats.",
      "Slowly return the bar to the start position with control."
    ],
    "formCues": [
      "Pull elbows down",
      "Keep chest up",
      "Don’t swing the torso",
      "Grip the bar tightly"
    ],
    "commonMistakes": [
      "Using too much momentum",
      "Letting shoulders round",
      "Leaning too far back"
    ],
    "breathing": "Exhale as you pull down, inhale as you return up."
  },
  "bent-over-row": {
    "exerciseId": "bent-over-row",
    "name": "Bent-Over Barbell Row",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-underhand-bent-over-row.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-underhand-bent-over-row.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-underhand-bent-over-row.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-underhand-bent-over-row.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/barbell-underhand-bent-over-row.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-underhand-bent-over-row.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/barbell-underhand-bent-over-row.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0027",
    "matchedExternalName": "Barbell Underhand Bent-Over Row",
    "confidence": "exact",
    "steps": [
      "Stand with feet hip-width apart, barbell on floor.",
      "Bend forward from hips, back straight, grasp bar underhand.",
      "Let bar hang at arm’s length below shoulders.",
      "Row barbell to torso, elbows close to sides.",
      "Lower barbell under control to starting position."
    ],
    "formCues": [
      "Keep back flat",
      "Pull with elbows",
      "Squeeze shoulder blades",
      "Keep wrists neutral"
    ],
    "commonMistakes": [
      "Rounding lower back",
      "Flaring elbows excessively",
      "Using momentum"
    ],
    "breathing": "Exhale as you row up, inhale as you lower down."
  },
  "seated-cable-row": {
    "exerciseId": "seated-cable-row",
    "name": "Seated Cable Row",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-straight-back-seated-row-v-grip.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-straight-back-seated-row-v-grip.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-straight-back-seated-row-v-grip.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-straight-back-seated-row-v-grip.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-straight-back-seated-row-v-grip.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-straight-back-seated-row-v-grip.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-straight-back-seated-row-v-grip.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0208",
    "matchedExternalName": "Seated Cable Row (V-Grip)",
    "confidence": "exact",
    "steps": [
      "Sit on the cable row machine and place feet on the foot platform.",
      "Grab the V-grip handle with both hands, arms extended.",
      "Maintain a straight back and slight knee bend.",
      "Pull the handle toward your abdomen, retracting your shoulder blades.",
      "Slowly extend arms to return to the starting position."
    ],
    "formCues": [
      "Keep back straight",
      "Drive elbows back",
      "Retract shoulder blades",
      "Don’t lean or round spine"
    ],
    "commonMistakes": [
      "Hunching the back",
      "Using momentum",
      "Allowing elbows to flare out"
    ],
    "breathing": "Exhale as you row back, inhale as you extend forward."
  },
  "barbell-curl": {
    "exerciseId": "barbell-curl",
    "name": "Barbell Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/barbell-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/barbell-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0031",
    "matchedExternalName": "Barbell Curl",
    "confidence": "exact",
    "steps": [
      "Stand tall with your feet hip-width apart and hold the barbell at your thighs with an underhand grip.",
      "Set your shoulders back, brace your torso, and keep your elbows pinned by your sides.",
      "Curl the bar upward by bending your elbows until the bar reaches about shoulder height.",
      "Pause briefly at the top and squeeze your biceps without letting your elbows drift forward.",
      "Lower the bar slowly back to your thighs until your arms are straight."
    ],
    "formCues": [
      "Elbows stay by your sides",
      "Lift with the biceps",
      "Keep wrists straight",
      "Control the lowering"
    ],
    "commonMistakes": [
      "Swinging the torso to start the bar moving",
      "Letting the elbows drift forward as the bar rises",
      "Bending the wrists back instead of keeping them neutral",
      "Dropping the bar quickly on the way down"
    ],
    "breathing": "Exhale as you curl the bar up, and inhale as you lower it back down under control."
  },
  "hammer-curl": {
    "exerciseId": "hammer-curl",
    "name": "Hammer Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-cross-body-hammer-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-cross-body-hammer-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-cross-body-hammer-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-cross-body-hammer-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-cross-body-hammer-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-cross-body-hammer-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-cross-body-hammer-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0298",
    "matchedExternalName": "Dumbbell Cross Body Hammer Curl",
    "confidence": "exact",
    "steps": [
      "Stand tall holding a dumbbell in each hand at your sides with your palms facing inward.",
      "Brace your torso and keep your elbows pinned close to your ribs.",
      "Curl one dumbbell diagonally across your body toward the opposite shoulder without swinging.",
      "Pause briefly near shoulder height while keeping your wrist straight and palm facing inward.",
      "Lower the dumbbell back to your side under control.",
      "Repeat on the other arm, alternating sides."
    ],
    "formCues": [
      "Elbows stay tucked",
      "Curl across, not straight up",
      "Keep wrists neutral",
      "Don't swing the weight"
    ],
    "commonMistakes": [
      "Swinging the torso or leaning back to lift the dumbbell",
      "Letting the elbow drift forward away from the ribs",
      "Twisting the wrist so the palm turns up at the top",
      "Dropping the dumbbell quickly instead of lowering with control"
    ],
    "breathing": "Exhale as you curl the dumbbell across your body, and inhale as you lower it back down."
  },
  "back-squat": {
    "exerciseId": "back-squat",
    "name": "Back Squat",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/classic-barbell-squat.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/classic-barbell-squat.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/classic-barbell-squat.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/classic-barbell-squat.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/classic-barbell-squat.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/classic-barbell-squat.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/classic-barbell-squat.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1435",
    "matchedExternalName": "Barbell Back Squat",
    "confidence": "exact",
    "steps": [
      "Position barbell on upper traps, unrack.",
      "Stand with feet shoulder-width apart.",
      "Descend into squat keeping back neutral.",
      "Lower until thighs parallel or below.",
      "Drive up through heels to standing."
    ],
    "formCues": [
      "Chest up",
      "Back straight",
      "Drive through heels",
      "Knees track over toes"
    ],
    "commonMistakes": [
      "Knees caving in",
      "Rounding lower back",
      "Heels lifting off floor"
    ],
    "breathing": "Inhale lowering, exhale rising."
  },
  "leg-press": {
    "exerciseId": "leg-press",
    "name": "Leg Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/sled-45-degree-leg-wide-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/sled-45-degree-leg-wide-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/sled-45-degree-leg-wide-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/sled-45-degree-leg-wide-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/sled-45-degree-leg-wide-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/sled-45-degree-leg-wide-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/sled-45-degree-leg-wide-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0740",
    "matchedExternalName": "Sled 45 Degree Wide Leg Press",
    "confidence": "exact",
    "steps": [
      "Adjust the seat and load desired weight.",
      "Sit with your back and head against the pad, feet flat and wide on the platform.",
      "Release the safety handles and grasp the side handles.",
      "Bend your knees to lower the platform until your thighs reach 90 degrees or just past.",
      "Press through your heels to extend your legs fully, but avoid locking out the knees."
    ],
    "formCues": [
      "Push through heels",
      "Keep knees in line with toes",
      "Do not lock knees at top",
      "Maintain flat lower back"
    ],
    "commonMistakes": [
      "Allowing knees to collapse inward",
      "Rounding lower back",
      "Half reps or short range",
      "Locking knees at extension"
    ],
    "breathing": "Inhale as you lower the platform, exhale as you press it back up."
  },
  "romanian-deadlift": {
    "exerciseId": "romanian-deadlift",
    "name": "Romanian Deadlift",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-stiff-leg-deadlift.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-stiff-leg-deadlift.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-stiff-leg-deadlift.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-stiff-leg-deadlift.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-stiff-leg-deadlift.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-stiff-leg-deadlift.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-stiff-leg-deadlift.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0432",
    "matchedExternalName": "Dumbbell Stiff Leg Deadlift",
    "confidence": "exact",
    "steps": [
      "Stand tall with your feet hip-width apart, holding a dumbbell in each hand in front of your thighs.",
      "Soften your knees slightly and brace your midsection.",
      "Push your hips straight back and slide the dumbbells down the front of your legs.",
      "Lower until the dumbbells reach mid-shin or you feel a strong hamstring stretch while keeping your back flat.",
      "Drive your feet into the floor and extend your hips to stand back up.",
      "Finish tall with the dumbbells at your thighs and repeat."
    ],
    "formCues": [
      "Hips back, not down",
      "Keep dumbbells close",
      "Back flat the whole time",
      "Feel the hamstring stretch"
    ],
    "commonMistakes": [
      "Bending the knees too much and turning it into a squat",
      "Letting the dumbbells drift away from the legs",
      "Rounding the lower back on the way down",
      "Looking up and cranking the neck"
    ],
    "breathing": "Inhale as you hinge and lower the dumbbells, then exhale as you drive your hips forward to stand tall."
  },
  "walking-lunge": {
    "exerciseId": "walking-lunge",
    "name": "Walking Lunge",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lunge.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lunge.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-lunge.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-lunge.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-lunge.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lunge.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-lunge.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0336",
    "matchedExternalName": "Dumbbell Lunge",
    "confidence": "exact",
    "steps": [
      "Stand tall with a dumbbell in each hand at your sides and your feet hip-width apart.",
      "Step one foot forward far enough that both knees can bend comfortably.",
      "Lower your body until your front thigh is nearly parallel to the floor and your back knee drops toward the floor.",
      "Keep your torso upright and your front foot flat as you pause briefly at the bottom.",
      "Push through your front heel to return to standing.",
      "Repeat on the other side, alternating legs each rep."
    ],
    "formCues": [
      "Chest tall",
      "Front heel stays down",
      "Knees track over toes",
      "Drop straight down"
    ],
    "commonMistakes": [
      "Taking too short a step so the front knee shoots far past the toes.",
      "Leaning the torso forward as you lower into the lunge.",
      "Letting the front heel lift off the floor.",
      "Pushing off the back foot instead of driving through the front leg."
    ],
    "breathing": "Inhale as you lower into the lunge, and exhale as you push back to standing."
  },
  "standing-calf-raise": {
    "exerciseId": "standing-calf-raise",
    "name": "Standing Calf Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-standing-calf-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-standing-calf-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-standing-calf-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-standing-calf-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-standing-calf-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-standing-calf-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-standing-calf-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0605",
    "matchedExternalName": "Lever Standing Calf Raise",
    "confidence": "exact",
    "steps": [
      "Adjust the shoulder pads so they rest comfortably on your shoulders when you stand on the platform.",
      "Place the balls of your feet on the edge of the platform with your heels hanging off and grip the handles.",
      "Straighten your legs, brace your torso, and let your heels lower until you feel a stretch in your calves.",
      "Press through the balls of your feet to raise your heels as high as you can.",
      "Pause briefly at the top while staying balanced under the pads.",
      "Lower your heels under control back to the stretched start position."
    ],
    "formCues": [
      "Drive through big toe",
      "Lift heels straight up",
      "Use full ankle range",
      "Control the lowering"
    ],
    "commonMistakes": [
      "Bouncing out of the bottom instead of lowering under control.",
      "Bending the knees noticeably during the raise.",
      "Rolling the ankles inward or outward as the heels lift.",
      "Using a short range and stopping before the heels fully lower."
    ],
    "breathing": "Inhale as you lower your heels, and exhale as you press up onto the balls of your feet."
  },
  "overhead-press": {
    "exerciseId": "overhead-press",
    "name": "Overhead Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/military-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/military-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/military-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/military-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/military-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/military-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/military-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0553",
    "matchedExternalName": "Military Press",
    "confidence": "exact",
    "steps": [
      "Stand with feet hip-width apart and barbell at shoulder height.",
      "Grip the bar with hands just outside shoulder-width.",
      "Brace your core and squeeze your glutes.",
      "Press the barbell overhead to full arm extension.",
      "Lower the bar slowly back to shoulders."
    ],
    "formCues": [
      "Keep core tight",
      "Press in a straight line",
      "Avoid arching lower back",
      "Lock elbows at the top"
    ],
    "commonMistakes": [
      "Leaning back excessively",
      "Bouncing the bar off shoulders",
      "Flaring elbows too wide",
      "Not bringing bar below chin"
    ],
    "breathing": "Exhale as you press up, inhale as you lower down."
  },
  "lateral-raise": {
    "exerciseId": "lateral-raise",
    "name": "Lateral Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lateral-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lateral-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-lateral-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-lateral-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-lateral-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lateral-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-lateral-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0334",
    "matchedExternalName": "Dumbbell Lateral Raise",
    "confidence": "exact",
    "steps": [
      "Stand tall with a dumbbell in each hand at your sides, palms facing in.",
      "Set your shoulders down and brace your midsection.",
      "Raise both arms out to the sides until your hands reach about shoulder height, keeping a soft bend in your elbows.",
      "Pause briefly at the top without shrugging your shoulders.",
      "Lower the dumbbells back to your sides with control."
    ],
    "formCues": [
      "Lead with your elbows",
      "Stop at shoulder height",
      "Keep shoulders down",
      "Soft bend in elbows"
    ],
    "commonMistakes": [
      "Shrugging the shoulders up toward the ears",
      "Swinging the torso to heave the dumbbells upward",
      "Lifting the hands well above shoulder height",
      "Straightening the elbows and turning it into a front swing"
    ],
    "breathing": "Exhale as you raise the dumbbells to the sides, and inhale as you lower them back down under control."
  },
  "face-pull": {
    "exerciseId": "face-pull",
    "name": "Face Pull",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-rear-delt-row-with-rope.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-rear-delt-row-with-rope.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-rear-delt-row-with-rope.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-rear-delt-row-with-rope.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-rear-delt-row-with-rope.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-rear-delt-row-with-rope.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-rear-delt-row-with-rope.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0203",
    "matchedExternalName": "Cable Rear Delt Row (with rope)",
    "confidence": "exact",
    "steps": [
      "Attach a rope to a low cable pulley and stand facing the machine.",
      "Grab the rope with both hands, step back to create tension, and set your feet about hip-width apart.",
      "Soften your knees and hinge forward slightly with a flat back and arms extended in front of you.",
      "Lead with your elbows and row the rope up toward your upper chest while letting the rope ends separate.",
      "Pause briefly as your elbows travel out and back and your shoulder blades squeeze together.",
      "Lower the rope under control until your arms are extended again without rounding your shoulders."
    ],
    "formCues": [
      "Lead with the elbows",
      "Chest up, back flat",
      "Pull shoulders back",
      "Control the return"
    ],
    "commonMistakes": [
      "Standing fully upright and turning it into a regular cable row",
      "Shrugging the shoulders up toward the ears during the pull",
      "Pulling mostly with the hands and curling the rope in",
      "Rounding the upper back as the rope returns forward"
    ],
    "breathing": "Inhale as you lower the rope forward, and exhale as you row the rope toward your upper chest."
  },
  "hanging-leg-raise": {
    "exerciseId": "hanging-leg-raise",
    "name": "Hanging Leg Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/hanging-leg-hip-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/hanging-leg-hip-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/hanging-leg-hip-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/hanging-leg-hip-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/hanging-leg-hip-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/hanging-leg-hip-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/hanging-leg-hip-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1764",
    "matchedExternalName": "Hanging Leg Hip Raise",
    "confidence": "exact",
    "steps": [
      "Hang from the bar with both hands and let your body settle into a dead hang.",
      "Pull your ribs down and brace your midsection to stop excess swinging.",
      "Bend your knees and lift them toward your chest by curling your hips upward.",
      "Raise until your thighs are at least parallel to the floor or your knees reach hip height.",
      "Pause briefly at the top while keeping your torso steady.",
      "Lower your legs with control until you return to a full hang."
    ],
    "formCues": [
      "Curl pelvis up",
      "Control the swing",
      "Ribs down",
      "Lift knees, not shoulders"
    ],
    "commonMistakes": [
      "Swinging the body to start each rep",
      "Shrugging the shoulders up toward the ears",
      "Dropping the legs quickly on the way down",
      "Only lifting the knees halfway with no hip curl"
    ],
    "breathing": "Exhale as you raise your knees and curl your hips up; inhale as you lower back to the hang."
  },
  "woodchopper": {
    "exerciseId": "woodchopper",
    "name": "Cable Woodchopper",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/weighted-lying-twist.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/weighted-lying-twist.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/weighted-lying-twist.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/weighted-lying-twist.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/weighted-lying-twist.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0846",
    "matchedExternalName": "Weighted Lying Twist",
    "confidence": "exact",
    "steps": [
      "Lie on your back with arms outstretched for support.",
      "Hold a weight between your feet (or over chest).",
      "Lift your legs up to a 90-degree angle.",
      "Slowly rotate your legs to one side, keeping shoulders down.",
      "Return to center and repeat on the other side."
    ],
    "formCues": [
      "Keep shoulders grounded",
      "Move slowly and controlled",
      "Engage obliques",
      "Don’t swing legs"
    ],
    "commonMistakes": [
      "Letting shoulders lift",
      "Using momentum",
      "Dropping legs too low"
    ],
    "breathing": "Exhale as you twist, inhale as you return to center."
  },
  "plank": {
    "exerciseId": "plank",
    "name": "Plank",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/front-plank-female.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/front-plank-female.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/front-plank-female.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/front-plank-female.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/front-plank-female.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0464",
    "matchedExternalName": "Front Plank",
    "confidence": "exact",
    "steps": [
      "Lie face down, placing forearms on the ground and elbows under shoulders.",
      "Lift your body off the floor, supporting weight on forearms and toes.",
      "Keep your body in a straight line from head to heels.",
      "Engage your core and glutes for stability.",
      "Hold the position for the prescribed time, then lower to the ground."
    ],
    "formCues": [
      "Keep core tight",
      "Neutral spine",
      "Do not let hips drop",
      "Look down"
    ],
    "commonMistakes": [
      "Letting hips drop or rise",
      "Arched back",
      "Not engaging the core"
    ],
    "breathing": "Breathe slowly and steadily during the hold."
  },
  "preacher-curl": {
    "exerciseId": "preacher-curl",
    "name": "Preacher Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-preacher-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-preacher-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-seated-preacher-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-seated-preacher-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-seated-preacher-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-preacher-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-seated-preacher-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0402",
    "matchedExternalName": "Dumbbell Seated Preacher Curl",
    "confidence": "exact",
    "steps": [
      "Sit on the preacher bench and plant your feet flat on the floor.",
      "Hold a dumbbell with your palm facing up and place the back of your upper arm firmly against the pad.",
      "Start with your arm nearly straight and let the dumbbell hang just above the bottom of the pad.",
      "Curl the dumbbell upward by bending your elbow while keeping your upper arm pressed into the pad.",
      "Lift until the dumbbell nears your shoulder and briefly squeeze your biceps.",
      "Lower the dumbbell slowly until your arm is nearly straight again, then repeat before switching sides."
    ],
    "formCues": [
      "Keep upper arm glued down",
      "Curl only at the elbow",
      "Lower with control",
      "Squeeze at the top"
    ],
    "commonMistakes": [
      "Upper arm lifting off the pad during the curl",
      "Swinging the dumbbell instead of moving smoothly",
      "Stopping short and not lowering near full extension",
      "Bending the wrist back as the dumbbell rises"
    ],
    "breathing": "Exhale as you curl the dumbbell up, and inhale as you lower it back down under control."
  },
  "overhead-tricep-ext": {
    "exerciseId": "overhead-tricep-ext",
    "name": "Overhead Tricep Extension",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-rope-high-pulley-overhead-triceps-extension.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-rope-high-pulley-overhead-triceps-extension.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-rope-high-pulley-overhead-triceps-extension.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-rope-high-pulley-overhead-triceps-extension.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-rope-high-pulley-overhead-triceps-extension.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-rope-high-pulley-overhead-triceps-extension.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-rope-high-pulley-overhead-triceps-extension.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0194",
    "matchedExternalName": "Cable Rope Overhead Triceps Extension",
    "confidence": "exact",
    "steps": [
      "Attach a rope to a high pulley.",
      "Stand (or kneel) with back facing the machine.",
      "Grasp rope, step forward, and lean slightly.",
      "Keep upper arms still, extend elbows bringing rope forward/upward.",
      "Return to starting position slowly."
    ],
    "formCues": [
      "Keep upper arms stationary",
      "Elbows close",
      "Extend fully",
      "Avoid arching back"
    ],
    "commonMistakes": [
      "Moving upper arms",
      "Flaring elbows",
      "Arching or swinging back"
    ],
    "breathing": "Exhale as you extend, inhale as you bend elbows."
  },
  "incline-db-curl": {
    "exerciseId": "incline-db-curl",
    "name": "Incline Dumbbell Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-incline-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-incline-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0318",
    "matchedExternalName": "Dumbbell Incline Curl",
    "confidence": "exact",
    "steps": [
      "Set an incline bench and sit back with a dumbbell in each hand.",
      "Let your arms hang straight down under your shoulders with your palms facing forward.",
      "Keep your upper arms still and curl the dumbbells toward your shoulders.",
      "Pause briefly at the top and squeeze your biceps.",
      "Lower the dumbbells slowly until your elbows are fully straight again."
    ],
    "formCues": [
      "Keep elbows still",
      "Palms stay forward",
      "Lift with the biceps",
      "Lower under control"
    ],
    "commonMistakes": [
      "Swinging the dumbbells to start the curl",
      "Letting the elbows drift forward as the weights rise",
      "Stopping short instead of fully lowering the dumbbells",
      "Bending the wrists back while curling"
    ],
    "breathing": "Inhale as you lower the dumbbells and exhale as you curl them up."
  },
  "tricep-dips": {
    "exerciseId": "tricep-dips",
    "name": "Tricep Dips",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/triceps-dips.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/triceps-dips.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/triceps-dips.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/triceps-dips.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/triceps-dips.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/triceps-dips.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/triceps-dips.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-triceps-dips",
    "matchedExternalName": "Triceps Dips",
    "confidence": "exact",
    "steps": [
      "Sit on a bench or chair with hands gripping the edge.",
      "Extend legs forward and slide hips off the seat.",
      "Lower body by bending elbows to 90 degrees.",
      "Press through palms to straighten arms and lift body.",
      "Repeat for reps."
    ],
    "formCues": [
      "Keep elbows close to your body",
      "Lower slowly",
      "Press through your palms",
      "Avoid shrugging shoulders"
    ],
    "commonMistakes": [
      "Letting shoulders roll forward",
      "Dropping hips too low",
      "Elbows flaring out"
    ],
    "breathing": "Inhale as you lower down, exhale as you push up."
  },
  "russian-twist": {
    "exerciseId": "russian-twist",
    "name": "Russian Twist",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/russian-twist-on-stability-ball-arms-straight.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/russian-twist-on-stability-ball-arms-straight.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/russian-twist-on-stability-ball-arms-straight.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/russian-twist-on-stability-ball-arms-straight.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/russian-twist-on-stability-ball-arms-straight.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0211",
    "matchedExternalName": "Russian Twist on Stability Ball (Arms Straight)",
    "confidence": "exact",
    "steps": [
      "Sit on a stability ball and walk feet forward until shoulders rest on the ball.",
      "Keep knees bent at 90 degrees, hips lifted in a bridge position.",
      "Extend arms straight toward the ceiling with hands together.",
      "Rotate torso and arms as one unit to the left.",
      "Return to center, then rotate to the right, repeating for reps."
    ],
    "formCues": [
      "Keep arms extended",
      "Engage core",
      "Move smoothly",
      "Avoid sagging hips"
    ],
    "commonMistakes": [
      "Letting hips drop",
      "Bending arms",
      "Rotating too quickly"
    ],
    "breathing": "Exhale during each rotation, inhale as you return to center."
  },
  "ab-wheel-rollout": {
    "exerciseId": "ab-wheel-rollout",
    "name": "Ab Wheel Rollout",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-standing-wheel-rollout.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-standing-wheel-rollout.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-standing-wheel-rollout.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-standing-wheel-rollout.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-standing-wheel-rollout.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-standing-wheel-rollout.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-standing-wheel-rollout.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0796",
    "matchedExternalName": "Standing Wheel Rollout",
    "confidence": "exact",
    "steps": [
      "Stand with feet shoulder-width apart and hold the ab wheel.",
      "Bend forward and place the wheel on the floor in front of your feet.",
      "Roll the wheel forward, extending your arms and torso while keeping your core tight.",
      "Lower your body until you're just above the floor, maintaining a straight line from head to heels.",
      "Reverse the motion by pulling the wheel back toward your feet, returning to the start."
    ],
    "formCues": [
      "Engage core strongly",
      "Do not let hips sag",
      "Keep arms straight",
      "Move slowly and with control"
    ],
    "commonMistakes": [
      "Letting lower back arch excessively",
      "Collapsing hips",
      "Bending elbows during rollout"
    ],
    "breathing": "Inhale as you roll out, exhale as you pull back in."
  },
  "mountain-climbers": {
    "exerciseId": "mountain-climbers",
    "name": "Mountain Climbers",
    "mediaSource": "ForgeFit Seed Library (Local Biomechanical Guide)",
    "mediaAttribution": "ForgeFit Biomechanics Engine",
    "mediaVerified": false,
    "confidence": "fallback",
    "steps": [
      "Start in a push-up position.",
      "Drive the knees toward the chest alternately at pace.",
      "Keep the hips level."
    ],
    "formCues": [
      "Maintain a strong plank line."
    ],
    "commonMistakes": [
      "Rushing tempo",
      "Losing lumbar brace"
    ],
    "breathing": "Breathe steadily in rhythm with repetitions."
  },
  "burpees": {
    "exerciseId": "burpees",
    "name": "Burpees",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/burpee.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/burpee.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/burpee.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/burpee.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/burpee.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/burpee.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/burpee.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1160",
    "matchedExternalName": "Burpee",
    "confidence": "exact",
    "steps": [
      "Stand tall with your feet about hip-width apart.",
      "Bend your knees, hinge at your hips, and place your hands on the floor in front of your feet.",
      "Jump both feet back to a high plank with your body in a straight line.",
      "Lower your chest to the floor, then press back up to plank.",
      "Jump both feet forward to the outside of your hands.",
      "Drive through your feet and jump straight up, reaching your arms overhead as you leave the floor.",
      "Land softly and go straight into the next rep."
    ],
    "formCues": [
      "Keep your core braced.",
      "Land softly under control.",
      "Chest up on the jump.",
      "Move as one straight line."
    ],
    "commonMistakes": [
      "Hips sagging low in the plank or push-up.",
      "Feet landing too narrow under the body.",
      "Hands placed far in front of the shoulders.",
      "Landing stiff-legged with no knee bend."
    ],
    "breathing": "Inhale as you drop down and move into plank, then exhale as you press up and jump."
  },
  "kb-swing": {
    "exerciseId": "kb-swing",
    "name": "Kettlebell Swing",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/kettlebell-deadlift.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/kettlebell-deadlift.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/kettlebell-deadlift.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/kettlebell-deadlift.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/kettlebell-deadlift.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/kettlebell-deadlift.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/kettlebell-deadlift.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-kettlebell-deadlift",
    "matchedExternalName": "Kettlebell Deadlift",
    "confidence": "exact",
    "steps": [
      "Place kettlebell between your feet; stand with feet hip-width apart.",
      "Hinge at hips and bend knees, keeping back flat and chest up.",
      "Grip the kettlebell handle with both hands.",
      "Drive through your heels to stand up, fully extending hips and knees.",
      "Lower the kettlebell to the floor under control by hinging at the hips."
    ],
    "formCues": [
      "Flat back",
      "Push through heels",
      "Engage glutes",
      "Keep kettlebell close"
    ],
    "commonMistakes": [
      "Rounding the lower back",
      "Letting kettlebell drift from body",
      "Locking knees early",
      "Shrugging shoulders"
    ],
    "breathing": "Exhale as you stand up, inhale as you lower down."
  },
  "box-jump": {
    "exerciseId": "box-jump",
    "name": "Box Jump",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/jump-step-up.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/jump-step-up.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/jump-step-up.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/jump-step-up.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/jump-step-up.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/jump-step-up.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/jump-step-up.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-jump-step-up",
    "matchedExternalName": "Jump Step-Up",
    "confidence": "exact",
    "steps": [
      "Stand facing a sturdy box or platform.",
      "Place one foot firmly on top of the box.",
      "Drive through the heel and explode upward, lifting your other knee high.",
      "Land softly on the box with both feet.",
      "Step or jump down with control and repeat."
    ],
    "formCues": [
      "Drive explosively through the lead leg",
      "Land softly",
      "Keep chest lifted",
      "Use arms for balance"
    ],
    "commonMistakes": [
      "Letting the knee cave inward",
      "Landing hard or flat-footed",
      "Not using full range of motion"
    ],
    "breathing": "Exhale during the jump, inhale as you land and reset."
  },
  "jump-squat": {
    "exerciseId": "jump-squat",
    "name": "Jump Squat",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/squat.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/squat.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/squat.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/squat.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/squat.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/squat.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/squat.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-squat",
    "matchedExternalName": "Squat",
    "confidence": "exact",
    "steps": [
      "Stand with feet shoulder-width apart and toes slightly outward.",
      "Brace core and keep chest up.",
      "Initiate movement by pushing hips back and bending knees.",
      "Descend until thighs are at least parallel to the floor.",
      "Push through heels to return to standing."
    ],
    "formCues": [
      "Keep knees tracking toes",
      "Maintain neutral spine",
      "Weight on midfoot/heels",
      "Chest up"
    ],
    "commonMistakes": [
      "Letting knees collapse inward",
      "Rounding lower back",
      "Not reaching parallel depth"
    ],
    "breathing": "Inhale as you lower down, exhale as you stand up."
  },
  "battle-ropes": {
    "exerciseId": "battle-ropes",
    "name": "Battle Ropes",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/battling-ropes.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/battling-ropes.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/battling-ropes.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/battling-ropes.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/battling-ropes.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/battling-ropes.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/battling-ropes.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0128",
    "matchedExternalName": "Battling Ropes",
    "confidence": "exact",
    "steps": [
      "Anchor your stance with feet about shoulder-width apart and bend your knees slightly.",
      "Hold one rope end in each hand with your palms facing each other and your arms in front of you.",
      "Brace your core and lift one hand as you lower the other to start the waves.",
      "Keep alternating your arms quickly to send continuous waves down the ropes.",
      "Maintain the slight knee bend and steady torso as you keep the waves even."
    ],
    "formCues": [
      "Move arms fast",
      "Keep chest tall",
      "Brace your core",
      "Make even waves"
    ],
    "commonMistakes": [
      "Standing upright with locked knees",
      "Swinging the whole torso instead of the arms",
      "Letting the waves become uneven or stop",
      "Lifting the shoulders up toward the ears"
    ],
    "breathing": "Breathe steadily throughout, exhaling with the arm drive and inhaling as the arms switch."
  },
  "incline-barbell-bench": {
    "exerciseId": "incline-barbell-bench",
    "name": "Incline Barbell Bench Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-incline-bench-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-incline-bench-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-incline-bench-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-incline-bench-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/barbell-incline-bench-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-incline-bench-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/barbell-incline-bench-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0047",
    "matchedExternalName": "Barbell Incline Bench Press",
    "confidence": "exact",
    "steps": [
      "Set an incline bench and lie back with your eyes under the bar and your feet flat on the floor.",
      "Grip the bar slightly wider than shoulder width with straight wrists and pull your shoulder blades down and back.",
      "Unrack the bar and hold it above your upper chest with your arms straight.",
      "Lower the bar under control to your upper chest, keeping your elbows slightly tucked from straight out.",
      "Press the bar upward until your arms are straight again, keeping the bar path over your shoulders.",
      "Rack the bar back onto the supports with control after your final rep."
    ],
    "formCues": [
      "Drive feet into floor",
      "Keep chest up",
      "Wrists stacked over elbows",
      "Press straight up"
    ],
    "commonMistakes": [
      "Flaring the elbows straight out to the sides",
      "Bouncing the bar off the chest",
      "Lifting the feet or shifting on the bench",
      "Lowering the bar to the neck or stomach"
    ],
    "breathing": "Inhale as you lower the bar to your chest, and exhale as you press it back up."
  },
  "push-ups": {
    "exerciseId": "push-ups",
    "name": "Push-Ups",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/push-ups.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/push-ups.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/push-ups.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/push-ups.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/push-ups.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/push-ups.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/push-ups.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-push-ups",
    "matchedExternalName": "Push-Up",
    "confidence": "exact",
    "steps": [
      "Begin in a plank with hands under shoulders.",
      "Engage core and glutes.",
      "Lower chest toward floor, elbows at 45 degrees.",
      "Pause briefly when close to ground.",
      "Press back up to plank position."
    ],
    "formCues": [
      "Keep body straight",
      "Engage core",
      "Elbows 45 degrees",
      "Lower under control"
    ],
    "commonMistakes": [
      "Letting hips sag",
      "Flaring elbows too wide",
      "Incomplete range of motion"
    ],
    "breathing": "Inhale as you lower, exhale as you push up."
  },
  "pull-ups": {
    "exerciseId": "pull-ups",
    "name": "Pull-Ups",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/pull-up-wide-front-grip.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/pull-up-wide-front-grip.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/pull-up-wide-front-grip.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/pull-up-wide-front-grip.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/pull-up-wide-front-grip.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/pull-up-wide-front-grip.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/pull-up-wide-front-grip.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1429",
    "matchedExternalName": "Pull-Up (Wide Grip)",
    "confidence": "exact",
    "steps": [
      "Grip pull-up bar with hands wider than shoulders, palms overhand.",
      "Hang with arms fully extended and core tight.",
      "Pull chest up to bar, driving elbows down and out.",
      "Pause at the top, squeeze back muscles.",
      "Lower down slowly to full extension."
    ],
    "formCues": [
      "Keep elbows flared out",
      "Lead with chest",
      "Engage lats",
      "Avoid swinging"
    ],
    "commonMistakes": [
      "Partial reps",
      "Using momentum",
      "Shrugging shoulders"
    ],
    "breathing": "Exhale as you pull up, inhale as you lower down."
  },
  "chin-ups": {
    "exerciseId": "chin-ups",
    "name": "Chin-Ups",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/chin-ups-narrow-parallel-grip.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/chin-ups-narrow-parallel-grip.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/chin-ups-narrow-parallel-grip.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/chin-ups-narrow-parallel-grip.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/chin-ups-narrow-parallel-grip.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/chin-ups-narrow-parallel-grip.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/chin-ups-narrow-parallel-grip.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0253",
    "matchedExternalName": "Chin-ups (narrow parallel grip)",
    "confidence": "exact",
    "steps": [
      "Grab the parallel handles with a narrow neutral grip and hang with your arms straight.",
      "Cross your ankles or keep your legs still, then brace your midline and pull your shoulders down away from your ears.",
      "Pull your elbows down and back to lift your chest toward your hands.",
      "Keep pulling until your chin rises above your hands or handles.",
      "Lower yourself under control until your arms are straight again.",
      "Pause briefly at the bottom without relaxing your shoulders, then repeat."
    ],
    "formCues": [
      "Drive elbows to ribs",
      "Chest up to handles",
      "Keep shoulders down",
      "Lower with control"
    ],
    "commonMistakes": [
      "Shrugging the shoulders up toward the ears while pulling.",
      "Swinging the legs or kipping to get upward.",
      "Stopping short with the chin below the hands.",
      "Dropping quickly to the bottom without control."
    ],
    "breathing": "Inhale at the bottom before you pull, exhale as you lift yourself up, and inhale again as you lower under control."
  },
  "t-bar-row": {
    "exerciseId": "t-bar-row",
    "name": "T-Bar Row",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-t-bar-row.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-t-bar-row.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-t-bar-row.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-t-bar-row.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-t-bar-row.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-t-bar-row.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-t-bar-row.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-lever-t-bar-row",
    "matchedExternalName": "Lever T-Bar Row",
    "confidence": "exact",
    "steps": [
      "Lie prone on the chest pad of the T-bar row machine and grasp the handles.",
      "Brace your upper body and retract your shoulder blades.",
      "Pull the handles toward your chest or lower ribs.",
      "Pause and squeeze your back at the top.",
      "Lower the weight under control to a full stretch."
    ],
    "formCues": [
      "Pinch shoulder blades",
      "Drive elbows back",
      "Keep chest on pad",
      "Full stretch at bottom"
    ],
    "commonMistakes": [
      "Arching lower back",
      "Not fully extending arms",
      "Bouncing weights",
      "Letting shoulders round forward"
    ],
    "breathing": "Exhale as you row up, inhale as you lower down."
  },
  "dumbbell-row": {
    "exerciseId": "dumbbell-row",
    "name": "One-Arm Dumbbell Row",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-bent-over-row.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-bent-over-row.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-bent-over-row.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-bent-over-row.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-bent-over-row.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-bent-over-row.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-bent-over-row.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0293",
    "matchedExternalName": "Dumbbell Bent-Over Row",
    "confidence": "exact",
    "steps": [
      "Stand with feet shoulder-width apart holding dumbbells.",
      "Hinge at hips, keeping back flat and chest up.",
      "Let arms hang straight down, palms facing each other.",
      "Pull dumbbells to your sides, elbows close to body.",
      "Lower the weights under control to starting position."
    ],
    "formCues": [
      "Flat back",
      "Lead with elbows",
      "Engage core",
      "Squeeze shoulder blades"
    ],
    "commonMistakes": [
      "Rounding the back",
      "Jerking the weights",
      "Not fully extending arms",
      "Using biceps too much"
    ],
    "breathing": "Exhale as you row up, inhale as you lower down."
  },
  "arnold-press": {
    "exerciseId": "arnold-press",
    "name": "Arnold Dumbbell Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-arnold-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-arnold-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-arnold-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-arnold-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-arnold-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-arnold-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-arnold-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "2137",
    "matchedExternalName": "Dumbbell Arnold Press",
    "confidence": "exact",
    "steps": [
      "Sit tall on a bench with back support and plant your feet on the floor.",
      "Hold a dumbbell in each hand in front of your shoulders with palms facing you and elbows bent.",
      "Brace your midline and press the dumbbells upward while rotating your palms outward.",
      "Finish overhead with arms straight and palms facing forward.",
      "Lower the dumbbells under control while rotating your palms back toward you.",
      "Return to the start with dumbbells in front of your shoulders and repeat."
    ],
    "formCues": [
      "Press and rotate smoothly",
      "Keep ribs down",
      "Wrists stacked over elbows",
      "Finish biceps by ears"
    ],
    "commonMistakes": [
      "Arching the lower back as the dumbbells go overhead",
      "Letting the elbows flare straight out at the bottom",
      "Pressing the dumbbells up without rotating the hands",
      "Lowering the dumbbells too fast and losing control"
    ],
    "breathing": "Inhale at the bottom, exhale as you press and rotate overhead, then inhale as you lower back down."
  },
  "hip-thrust": {
    "exerciseId": "hip-thrust",
    "name": "Barbell Hip Thrust",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/hip-raise-bridge.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/hip-raise-bridge.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/hip-raise-bridge.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/hip-raise-bridge.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/hip-raise-bridge.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-hip-raise-bridge",
    "matchedExternalName": "Glute Bridge",
    "confidence": "exact",
    "steps": [
      "Start lying on back with knees bent, feet hip-width apart.",
      "Arms rest at sides, palms down.",
      "Push through heels, lifting hips toward ceiling.",
      "Pause and squeeze glutes at top.",
      "Lower hips back to floor."
    ],
    "formCues": [
      "Drive through heels",
      "Squeeze glutes",
      "Don't overarch back",
      "Keep knees in line"
    ],
    "commonMistakes": [
      "Pushing through toes",
      "Flaring ribs",
      "Rushing movement"
    ],
    "breathing": "Exhale as you lift hips, inhale as you lower down."
  },
  "bulgarian-split-squat": {
    "exerciseId": "bulgarian-split-squat",
    "name": "Bulgarian Split Squat",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-single-leg-squat.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-single-leg-squat.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-single-leg-squat.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-single-leg-squat.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-single-leg-squat.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-single-leg-squat.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-single-leg-squat.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0411",
    "matchedExternalName": "Dumbbell Single Leg Squat",
    "confidence": "exact",
    "steps": [
      "Stand tall holding a dumbbell in each hand at your sides.",
      "Shift your weight onto one foot and lift the other leg straight in front of you.",
      "Brace your torso and bend your standing knee and hip to lower under control.",
      "Keep the lifted leg off the floor and lower as far as you can while staying balanced.",
      "Drive through the standing foot to rise back to the starting position.",
      "Complete all reps on one leg, then switch sides."
    ],
    "formCues": [
      "Chest up",
      "Sit back",
      "Keep knee tracking forward",
      "Control the descent"
    ],
    "commonMistakes": [
      "Letting the lifted foot touch the floor between reps",
      "Rounding the back at the bottom",
      "Standing knee collapsing inward",
      "Dropping too fast and losing balance"
    ],
    "breathing": "Inhale as you lower down, and exhale as you drive back up to standing."
  },
  "goblet-squat": {
    "exerciseId": "goblet-squat",
    "name": "Goblet Squat",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-goblet-squat.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-goblet-squat.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-goblet-squat.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-goblet-squat.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-goblet-squat.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-goblet-squat.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-goblet-squat.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1760",
    "matchedExternalName": "Dumbbell Goblet Squat",
    "confidence": "exact",
    "steps": [
      "Stand tall with your feet about shoulder-width apart and hold one dumbbell vertically at your chest with both hands.",
      "Brace your midsection and keep your elbows pointed down close to your body.",
      "Sit your hips down and back while bending your knees, and lower until your thighs are parallel to the floor or slightly lower.",
      "Keep the dumbbell tight to your chest and your feet flat as your knees track over your toes.",
      "Drive through your whole foot to stand back up until your hips and knees are fully extended.",
      "Reset your stance and repeat the next rep."
    ],
    "formCues": [
      "Chest up",
      "Keep heels down",
      "Knees track over toes",
      "Hold the bell close"
    ],
    "commonMistakes": [
      "Letting the dumbbell drift away from the chest",
      "Heels lifting off the floor at the bottom",
      "Knees collapsing inward during the squat",
      "Folding the chest forward instead of staying upright"
    ],
    "breathing": "Inhale as you lower into the squat, and exhale as you stand back up."
  },
  "leg-extension": {
    "exerciseId": "leg-extension",
    "name": "Leg Extension Machine",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-leg-extension.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-leg-extension.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-leg-extension.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-leg-extension.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-leg-extension.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-leg-extension.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-leg-extension.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0585",
    "matchedExternalName": "Lever Leg Extension",
    "confidence": "exact",
    "steps": [
      "Adjust the seat and backrest so your knees line up with the machine's pivot point.",
      "Sit back against the pad and place your shins behind the lower roller pad.",
      "Grip the handles and start with your knees bent and feet pointed forward.",
      "Straighten your knees to lift the pad until your legs are nearly straight.",
      "Pause briefly while keeping your thighs pressed into the seat.",
      "Lower the pad with control until your knees are bent again."
    ],
    "formCues": [
      "Line up knees with pivot",
      "Lift with your quads",
      "Keep hips on the seat",
      "Lower under control"
    ],
    "commonMistakes": [
      "Knees sit too far forward or behind the machine pivot.",
      "Swinging the weight up with momentum.",
      "Locking the knees hard at the top.",
      "Lifting the hips or lower back off the seat."
    ],
    "breathing": "Exhale as you straighten your knees, and inhale as you lower the pad back down."
  },
  "hamstring-curl": {
    "exerciseId": "hamstring-curl",
    "name": "Lying Leg Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-lying-leg-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-lying-leg-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-lying-leg-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-lying-leg-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-lying-leg-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-lying-leg-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-lying-leg-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0586",
    "matchedExternalName": "Lever Lying Leg Curl",
    "confidence": "exact",
    "steps": [
      "Adjust the machine so your knees line up with the machine's pivot and the pad rests against the back of your lower legs above your heels.",
      "Lie face down on the bench with your legs straight and grab the handles or bench edges for support.",
      "Press your hips into the pad and point your toes forward to set your start position.",
      "Curl the pad upward by bending your knees until your heels move toward your glutes.",
      "Pause briefly at the top while keeping your hips down and thighs on the pad.",
      "Lower the pad back down under control until your legs are straight again."
    ],
    "formCues": [
      "Keep hips glued down",
      "Curl through the hamstrings",
      "Move slow on the way down",
      "Knees stay in line"
    ],
    "commonMistakes": [
      "Lifting the hips off the pad at the top",
      "Using momentum to swing the pad upward",
      "Stopping short and not fully lowering the pad",
      "Feet turning sharply inward or outward during the curl"
    ],
    "breathing": "Exhale as you curl the pad up, and inhale as you lower it back down under control."
  },
  "seated-calf-raise": {
    "exerciseId": "seated-calf-raise",
    "name": "Seated Calf Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-calf-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-calf-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-seated-calf-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-seated-calf-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-seated-calf-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-calf-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-seated-calf-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1379",
    "matchedExternalName": "Dumbbell Seated Calf Raise",
    "confidence": "exact",
    "steps": [
      "Sit on a bench or chair with your knees bent and place the balls of your feet on a small raised surface with your heels hanging off.",
      "Set a dumbbell across the tops of your thighs just above your knees and hold it steady with both hands.",
      "Let your heels drop down until you feel a stretch through your calves.",
      "Press through the balls of your feet and raise your heels as high as you can.",
      "Pause briefly at the top while keeping the dumbbell steady.",
      "Lower your heels back down under control and repeat."
    ],
    "formCues": [
      "Drive through big toe",
      "Lift heels straight up",
      "Use full ankle range",
      "Control the lowering"
    ],
    "commonMistakes": [
      "Bouncing the heels at the bottom instead of lowering under control.",
      "Rolling the ankles inward or outward as the heels rise.",
      "Placing the dumbbell too close to the knees so it slides during the set.",
      "Using a very short range of motion and not dropping the heels below the step."
    ],
    "breathing": "Inhale as you lower your heels, and exhale as you press up onto the balls of your feet."
  },
  "farmers-walk": {
    "exerciseId": "farmers-walk",
    "name": "Farmer's Walk",
    "mediaSource": "ForgeFit Seed Library (Local Biomechanical Guide)",
    "mediaAttribution": "ForgeFit Biomechanics Engine",
    "mediaVerified": false,
    "confidence": "fallback",
    "steps": [
      "Pick up heavy dumbbells or kettlebells in each hand.",
      "Walk with tall upright posture and shoulders packed.",
      "Take short, controlled, rhythmic steps."
    ],
    "formCues": [
      "Do not allow dumbbells to swing."
    ],
    "commonMistakes": [
      "Rushing tempo",
      "Losing lumbar brace"
    ],
    "breathing": "Breathe steadily in rhythm with repetitions."
  },
  "wrist-curls": {
    "exerciseId": "wrist-curls",
    "name": "Forearm Wrist Curls",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-over-bench-wrist-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-over-bench-wrist-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-over-bench-wrist-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-over-bench-wrist-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-over-bench-wrist-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-over-bench-wrist-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-over-bench-wrist-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0369",
    "matchedExternalName": "Dumbbell Over Bench Wrist Curl",
    "confidence": "exact",
    "steps": [
      "Sit at a bench and place your forearms on top with your palms facing up.",
      "Hold a dumbbell in each hand and slide forward until your wrists hang just past the bench edge.",
      "Let your hands lower to gently stretch your wrists at the bottom.",
      "Curl your wrists up by lifting your knuckles toward your forearms.",
      "Squeeze your forearms briefly at the top.",
      "Lower the dumbbells back down under control until your wrists extend again."
    ],
    "formCues": [
      "Move only your wrists",
      "Forearms stay glued down",
      "Curl through full range",
      "Lower slowly"
    ],
    "commonMistakes": [
      "Lifting the forearms off the bench during the curl.",
      "Swinging the dumbbells instead of moving only the wrists.",
      "Using partial range and stopping before the wrists fully lower.",
      "Bending the elbows to help raise the weight."
    ],
    "breathing": "Inhale as you lower your wrists and exhale as you curl them up."
  },
  "cable-crunch": {
    "exerciseId": "cable-crunch",
    "name": "Kneeling Cable Crunch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-kneeling-crunch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-kneeling-crunch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-kneeling-crunch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-kneeling-crunch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-kneeling-crunch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-kneeling-crunch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-kneeling-crunch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0175",
    "matchedExternalName": "Cable Kneeling Crunch",
    "confidence": "exact",
    "steps": [
      "Attach a rope handle to the high pulley and kneel facing the machine.",
      "Grab the rope ends and bring your hands beside your head with your elbows slightly forward.",
      "Brace your midsection and keep your hips stacked over your knees.",
      "Curl your ribcage toward your pelvis and bring your elbows down toward your thighs.",
      "Pause briefly in the bottom position while keeping tension on the rope.",
      "Slowly uncurl your spine and return to the start without letting the weight stack slam."
    ],
    "formCues": [
      "Ribs to hips",
      "Hips stay still",
      "Curl, don't hinge",
      "Keep neck neutral"
    ],
    "commonMistakes": [
      "Pulling the rope down with the arms instead of curling the torso",
      "Sitting hips back and turning it into a hip hinge",
      "Jerking up and letting the weight stack drop between reps",
      "Lifting the chest too high and losing abdominal tension at the top"
    ],
    "breathing": "Exhale as you curl down into the crunch, and inhale as you slowly return to the starting position."
  },
  "bicycle-crunches": {
    "exerciseId": "bicycle-crunches",
    "name": "Bicycle Crunches",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/45-degree-bycicle-twisting-crunch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/45-degree-bycicle-twisting-crunch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/45-degree-bycicle-twisting-crunch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/45-degree-bycicle-twisting-crunch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/45-degree-bycicle-twisting-crunch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/45-degree-bycicle-twisting-crunch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/45-degree-bycicle-twisting-crunch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-45-degree-bycicle-twisting-crunch",
    "matchedExternalName": "45-Degree Bicycle Twisting Crunch",
    "confidence": "exact",
    "steps": [
      "Lie down with your hands behind your head and legs extended upwards at about a 45-degree angle.",
      "Engage your core and lift your shoulders off the ground.",
      "Twist your upper body, bringing your right elbow toward your left knee as you extend your right leg.",
      "Return to the starting position and repeat to the opposite side.",
      "Continue alternating sides in a controlled, twisting motion."
    ],
    "formCues": [
      "Keep elbows wide",
      "Twist through the torso",
      "Do not pull on neck",
      "Control each rep"
    ],
    "commonMistakes": [
      "Pulling on the neck",
      "Using momentum instead of abs",
      "Allowing hips to sag"
    ],
    "breathing": "Exhale during the twist, inhale as you return to center."
  },
  "side-plank": {
    "exerciseId": "side-plank",
    "name": "Side Plank Hold",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/side-bridge-side-plank.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/side-bridge-side-plank.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/side-bridge-side-plank.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/side-bridge-side-plank.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/side-bridge-side-plank.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/side-bridge-side-plank.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/side-bridge-side-plank.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0705",
    "matchedExternalName": "Side Plank",
    "confidence": "exact",
    "steps": [
      "Lie on your side, elbow stacked under shoulder.",
      "Stack your feet or place one in front of the other.",
      "Raise hips up to create a straight line.",
      "Hold body in line, keeping abs and glutes engaged.",
      "Lower hips gently to finish; switch sides."
    ],
    "formCues": [
      "Keep body straight",
      "Elbow directly under shoulder",
      "Squeeze glutes",
      "Don't let hips sag"
    ],
    "commonMistakes": [
      "Letting hips drop",
      "Shoulder collapsing inward",
      "Twisting upper body"
    ],
    "breathing": "Breathe steadily throughout the hold."
  },
  "thrusters": {
    "exerciseId": "thrusters",
    "name": "Barbell Thrusters",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-clean-and-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-clean-and-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-clean-and-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-clean-and-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/barbell-clean-and-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-clean-and-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/barbell-clean-and-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0028",
    "matchedExternalName": "Barbell Clean And Press",
    "confidence": "exact",
    "steps": [
      "Stand with your feet hip- to shoulder-width apart and place the barbell over your midfoot.",
      "Bend at your hips and knees, grip the bar just outside your legs, and set your back flat with your chest up.",
      "Push the floor away and lift the bar, keeping it close to your shins and thighs as you stand.",
      "Explosively extend your hips, knees, and ankles, then shrug and pull yourself under the bar.",
      "Catch the bar on the fronts of your shoulders with elbows forward and stand tall.",
      "Press the bar straight overhead until your arms are locked out and the bar is over your shoulders.",
      "Lower the bar back to your shoulders, then guide it down to the floor under control."
    ],
    "formCues": [
      "Keep the bar close",
      "Drive through the floor",
      "Elbows fast through",
      "Press straight overhead"
    ],
    "commonMistakes": [
      "Starting with the bar too far in front of the feet",
      "Rounding the lower back when pulling from the floor",
      "Catching the bar with elbows low and chest collapsed",
      "Pressing the bar forward instead of overhead"
    ],
    "breathing": "Inhale and brace before pulling from the floor, then exhale as you press overhead and reset your breath before the next rep."
  },
  "high-knees": {
    "exerciseId": "high-knees",
    "name": "High Knees Sprint",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/running.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/running.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/running.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/running.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/running.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/running.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/running.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-running",
    "matchedExternalName": "Running",
    "confidence": "exact",
    "steps": [
      "Warm up with light walking or dynamic stretches.",
      "Begin running at a moderate pace.",
      "Maintain a steady breathing rhythm and upright posture.",
      "Land lightly with a midfoot or forefoot strike.",
      "Cool down with walking and stretching."
    ],
    "formCues": [
      "Keep chest up",
      "Relax shoulders",
      "Lean slightly forward from ankles",
      "Swing arms naturally"
    ],
    "commonMistakes": [
      "Overstriding",
      "Hunching shoulders",
      "Landing heavily on heels"
    ],
    "breathing": "Exhale steadily as you push off, inhale as you recover."
  },
  "jumping-jacks": {
    "exerciseId": "jumping-jacks",
    "name": "Jumping Jacks",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/jumping-jack.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/jumping-jack.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/jumping-jack.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/jumping-jack.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/jumping-jack.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/jumping-jack.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/jumping-jack.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "new-low-impact-jumping-jack",
    "matchedExternalName": "Jumping Jack",
    "confidence": "exact",
    "steps": [
      "Start with feet together and arms relaxed at your sides.",
      "Jump feet out to shoulder-width as you raise arms overhead.",
      "Briefly touch hands or keep arms straight above head.",
      "Jump feet back together and arms down to sides.",
      "Repeat at a brisk pace."
    ],
    "formCues": [
      "Land softly",
      "Keep core engaged",
      "Full arm extension",
      "Stay light on feet"
    ],
    "commonMistakes": [
      "Slapping feet",
      "Incomplete arm raise",
      "Landing hard on heels"
    ],
    "breathing": "Breathe evenly throughout the movement."
  },
  "cat-cow": {
    "exerciseId": "cat-cow",
    "name": "Cat-Cow Spinal Mobility",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-spine-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-spine-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-spine-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-spine-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-spine-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-spine-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-spine-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1363",
    "matchedExternalName": "Spine Stretch",
    "confidence": "exact",
    "steps": [
      "Sit on floor with legs extended and feet flexed.",
      "Extend arms straight ahead at shoulder height.",
      "Inhale, then as you exhale, reach forward, articulating your spine.",
      "Stretch forward as far as comfortable, keeping legs straight.",
      "Hold and return slowly to start."
    ],
    "formCues": [
      "Lengthen spine",
      "Reach with fingertips",
      "Keep legs straight",
      "Relax neck"
    ],
    "commonMistakes": [
      "Rounding shoulders excessively",
      "Forcing the stretch",
      "Bending knees"
    ],
    "breathing": "Exhale as you stretch forward, inhale as you return to start."
  },
  "worlds-greatest-stretch": {
    "exerciseId": "worlds-greatest-stretch",
    "name": "World's Greatest Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-runners-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-runners-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-runners-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-runners-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-runners-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-runners-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-runners-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1585",
    "matchedExternalName": "Runner's Stretch",
    "confidence": "exact",
    "steps": [
      "Step one foot forward into a lunge, keeping the rear leg extended.",
      "Place both hands on either side of the front foot.",
      "Lower your hips gently, keeping back leg straight.",
      "Lift your chest for deeper stretch.",
      "Hold, then switch legs."
    ],
    "formCues": [
      "Keep back leg long",
      "Sink hips down",
      "Lift chest",
      "Square your hips"
    ],
    "commonMistakes": [
      "Letting knee go over toes",
      "Dropping hips too low",
      "Arching the back excessively"
    ],
    "breathing": "Inhale as you get into position, exhale as you deepen the stretch."
  },
  "cobra-stretch": {
    "exerciseId": "cobra-stretch",
    "name": "Cobra Stretch",
    "mediaSource": "ForgeFit Seed Library (Local Biomechanical Guide)",
    "mediaAttribution": "ForgeFit Biomechanics Engine",
    "mediaVerified": false,
    "confidence": "fallback",
    "steps": [
      "Lie prone with hands beside chest.",
      "Press up extending arms while keeping hips grounded.",
      "Look forward and breathe deeply into abdominal stretch."
    ],
    "formCues": [
      "Relax shoulders away from ears."
    ],
    "commonMistakes": [
      "Rushing tempo",
      "Losing lumbar brace"
    ],
    "breathing": "Breathe steadily in rhythm with repetitions."
  },
  "45-degree-hyperextension": {
    "exerciseId": "45-degree-hyperextension",
    "name": "45 Degree Hyperextension",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/45-degree-hyperextension.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/45-degree-hyperextension.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/45-degree-hyperextension.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/45-degree-hyperextension.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/45-degree-hyperextension.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/45-degree-hyperextension.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/45-degree-hyperextension.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0489",
    "matchedExternalName": "45 Degree Hyperextension",
    "confidence": "exact",
    "steps": [
      "Position yourself on the 45-degree hyperextension bench with ankles secured.",
      "Cross arms over chest or place hands behind head.",
      "Lower your upper body forward at the hips.",
      "Stop when your upper body is just below parallel to the floor.",
      "Lift your torso back up in line with your legs."
    ],
    "formCues": [
      "Keep back straight",
      "Hinge from hips",
      "Engage glutes",
      "Avoid hyperextending spine"
    ],
    "commonMistakes": [
      "Rounding the back",
      "Overextending at the top",
      "Using momentum"
    ],
    "breathing": "Exhale as you rise, inhale as you lower."
  },
  "45-degree-bicycle-twisting-crunch": {
    "exerciseId": "45-degree-bicycle-twisting-crunch",
    "name": "45-Degree Bicycle Twisting Crunch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/45-degree-bycicle-twisting-crunch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/45-degree-bycicle-twisting-crunch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/45-degree-bycicle-twisting-crunch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/45-degree-bycicle-twisting-crunch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/45-degree-bycicle-twisting-crunch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/45-degree-bycicle-twisting-crunch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/45-degree-bycicle-twisting-crunch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-45-degree-bycicle-twisting-crunch",
    "matchedExternalName": "45-Degree Bicycle Twisting Crunch",
    "confidence": "exact",
    "steps": [
      "Lie down with your hands behind your head and legs extended upwards at about a 45-degree angle.",
      "Engage your core and lift your shoulders off the ground.",
      "Twist your upper body, bringing your right elbow toward your left knee as you extend your right leg.",
      "Return to the starting position and repeat to the opposite side.",
      "Continue alternating sides in a controlled, twisting motion."
    ],
    "formCues": [
      "Keep elbows wide",
      "Twist through the torso",
      "Do not pull on neck",
      "Control each rep"
    ],
    "commonMistakes": [
      "Pulling on the neck",
      "Using momentum instead of abs",
      "Allowing hips to sag"
    ],
    "breathing": "Exhale during the twist, inhale as you return to center."
  },
  "all-fours-groin-stretch": {
    "exerciseId": "all-fours-groin-stretch",
    "name": "All Fours Groin Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-all-fours-squad-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-all-fours-squad-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-all-fours-squad-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-all-fours-squad-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-all-fours-squad-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-all-fours-squad-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-all-fours-squad-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-all-fours-squad-stretch",
    "matchedExternalName": "All Fours Groin Stretch",
    "confidence": "exact",
    "steps": [
      "Start on hands and knees (quadruped position).",
      "Slide knees apart, keeping shins and feet in line with knees.",
      "Lower hips toward the floor, maintaining a flat back.",
      "Move hips back gently until you feel a stretch in the groin.",
      "Hold the position and breathe deeply."
    ],
    "formCues": [
      "Keep spine neutral",
      "Move slowly",
      "Avoid bouncing",
      "Relax into stretch"
    ],
    "commonMistakes": [
      "Arching lower back",
      "Letting feet come together",
      "Overstretching past comfort"
    ],
    "breathing": "Breathe slowly and deeply throughout the stretch."
  },
  "band-assisted-pull-up": {
    "exerciseId": "band-assisted-pull-up",
    "name": "Band Assisted Pull-up",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-assisted-pull-up.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-assisted-pull-up.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-assisted-pull-up.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-assisted-pull-up.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/band-assisted-pull-up.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-assisted-pull-up.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/band-assisted-pull-up.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0970",
    "matchedExternalName": "Band Assisted Pull-up",
    "confidence": "exact",
    "steps": [
      "Loop the band securely over a pull-up bar and place one foot or knee into the bottom of the band.",
      "Grip the bar slightly wider than shoulder width with your palms facing away from you.",
      "Hang with straight arms, tighten your midsection, and pull your shoulders down away from your ears.",
      "Pull yourself up by driving your elbows down and back until your chin clears the bar.",
      "Lower yourself with control until your arms are straight again, keeping tension through your torso."
    ],
    "formCues": [
      "Drive elbows to hips",
      "Keep ribs down",
      "Shoulders away from ears",
      "Control the descent"
    ],
    "commonMistakes": [
      "Kicking or swinging to get up",
      "Shrugging shoulders up toward the ears",
      "Stopping short with the chin below the bar",
      "Dropping quickly to the bottom without control"
    ],
    "breathing": "Inhale at the bottom before you pull, exhale as you pull up, and inhale again as you lower under control."
  },
  "band-bent-over-rear-lateral-raise": {
    "exerciseId": "band-bent-over-rear-lateral-raise",
    "name": "Band Bent-Over Rear Lateral Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-bent-over-rear-lateral-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-bent-over-rear-lateral-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-bent-over-rear-lateral-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-bent-over-rear-lateral-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/band-bent-over-rear-lateral-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-bent-over-rear-lateral-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/band-bent-over-rear-lateral-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-band-bent-over-rear-lateral-raise",
    "matchedExternalName": "Band Bent-Over Rear Lateral Raise",
    "confidence": "exact",
    "steps": [
      "Stand on a resistance band, feet shoulder-width apart.",
      "Hinge forward at hips, keeping back flat.",
      "Hold band with both hands, arms hanging down.",
      "Raise arms out to sides until parallel with shoulders.",
      "Lower arms back down with control."
    ],
    "formCues": [
      "Flat back",
      "Slight elbow bend",
      "Squeeze shoulders",
      "Slow control"
    ],
    "commonMistakes": [
      "Rounding back",
      "Shrugging shoulders",
      "Using momentum"
    ],
    "breathing": "Exhale during the raise, inhale during the lowering."
  },
  "band-hip-abduction": {
    "exerciseId": "band-hip-abduction",
    "name": "Band Hip Abduction",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-hip-abduction.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-hip-abduction.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-hip-abduction.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-hip-abduction.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/band-hip-abduction.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-hip-abduction.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/band-hip-abduction.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "3006",
    "matchedExternalName": "Band Hip Abduction",
    "confidence": "exact",
    "steps": [
      "Place a resistance band around your thighs or ankles.",
      "Stand tall with feet hip-width apart.",
      "Shift weight to one leg.",
      "Lift the other leg laterally against band resistance.",
      "Return leg to start; repeat on both sides."
    ],
    "formCues": [
      "Keep chest up",
      "Stable standing leg",
      "Move slowly",
      "Feel glute engagement"
    ],
    "commonMistakes": [
      "Leaning torso",
      "Poor balance",
      "Letting band snap back"
    ],
    "breathing": "Exhale as you lift leg, inhale as you return."
  },
  "band-hip-adduction": {
    "exerciseId": "band-hip-adduction",
    "name": "Band Hip Adduction",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-hip-adduction.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-hip-adduction.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-hip-adduction.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-hip-adduction.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/band-hip-adduction.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-hip-adduction.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/band-hip-adduction.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-band-hip-adduction",
    "matchedExternalName": "Band Hip Adduction",
    "confidence": "exact",
    "steps": [
      "Secure a resistance band to a sturdy anchor at ankle height.",
      "Loop the other end around your working ankle.",
      "Stand tall and hold onto a support if needed.",
      "Bring your working leg across your body, adducting at the hip.",
      "Slowly return to the starting position and repeat."
    ],
    "formCues": [
      "Keep core tight",
      "Move with control",
      "Avoid swinging",
      "Maintain upright posture"
    ],
    "commonMistakes": [
      "Using momentum",
      "Rotating hips outward",
      "Bending the standing leg excessively"
    ],
    "breathing": "Exhale as you pull leg inward, inhale as you return."
  },
  "band-kneeling-one-arm-pulldown": {
    "exerciseId": "band-kneeling-one-arm-pulldown",
    "name": "Band Kneeling One Arm Pulldown",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-kneeling-one-arm-pulldown.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-kneeling-one-arm-pulldown.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-kneeling-one-arm-pulldown.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-kneeling-one-arm-pulldown.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/band-kneeling-one-arm-pulldown.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-kneeling-one-arm-pulldown.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/band-kneeling-one-arm-pulldown.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0983",
    "matchedExternalName": "Band Kneeling One Arm Pulldown",
    "confidence": "exact",
    "steps": [
      "Anchor the band overhead and kneel facing the anchor point.",
      "Grab the band with one hand and extend that arm up and slightly forward.",
      "Brace your torso and keep your chest tall without leaning back.",
      "Pull your elbow down toward your side until your hand reaches about shoulder or rib level.",
      "Squeeze your lat at the bottom while keeping your shoulder down.",
      "Slowly straighten your arm back overhead under control.",
      "Complete all reps on one side, then switch arms."
    ],
    "formCues": [
      "Drive elbow to your side",
      "Keep ribs down",
      "Shoulder away from your ear",
      "Move slowly on the return"
    ],
    "commonMistakes": [
      "Leaning the torso back to finish the pull",
      "Shrugging the shoulder up toward the ear",
      "Bending and straightening the wrist during the pull",
      "Letting the band snap the arm back overhead"
    ],
    "breathing": "Inhale as your arm returns overhead, and exhale as you pull the band down to your side."
  },
  "band-one-arm-front-raise": {
    "exerciseId": "band-one-arm-front-raise",
    "name": "Band One Arm Front Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-one-arm-forward-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-one-arm-forward-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-one-arm-forward-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-one-arm-forward-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/band-one-arm-forward-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-one-arm-forward-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/band-one-arm-forward-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1017",
    "matchedExternalName": "Band One Arm Front Raise",
    "confidence": "exact",
    "steps": [
      "Stand with one foot on the band for resistance.",
      "Hold handle in one hand at thigh level, palm facing down.",
      "Keep arm straight, raise it forward to shoulder height.",
      "Pause briefly at the top.",
      "Lower arm back down slowly and repeat."
    ],
    "formCues": [
      "Raise to shoulder height",
      "Keep elbow soft",
      "Don't swing",
      "Control the descent"
    ],
    "commonMistakes": [
      "Swinging the arm",
      "Bending at the elbow",
      "Raising above shoulder"
    ],
    "breathing": "Exhale as you lift, inhale as you lower."
  },
  "band-one-leg-kickback-bent-position": {
    "exerciseId": "band-one-leg-kickback-bent-position",
    "name": "Band One-Leg Kickback (Bent Position)",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-one-leg-kickback-bent-position.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-one-leg-kickback-bent-position.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-one-leg-kickback-bent-position.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-one-leg-kickback-bent-position.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/band-one-leg-kickback-bent-position.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-one-leg-kickback-bent-position.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/band-one-leg-kickback-bent-position.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-band-one-leg-kickback-bent-position",
    "matchedExternalName": "Band One-Leg Kickback (Bent Position)",
    "confidence": "exact",
    "steps": [
      "Anchor the band and loop it around your working ankle.",
      "Start on all fours with hands under shoulders and knees bent.",
      "Engage your core and extend one leg backward against band resistance.",
      "Pause and squeeze the glute at the top.",
      "Return to starting position and repeat for desired reps, then switch legs."
    ],
    "formCues": [
      "Keep back flat",
      "Drive heel upward",
      "Squeeze glutes",
      "Avoid arching lower back"
    ],
    "commonMistakes": [
      "Sagging the lower back",
      "Rotating the hips",
      "Using momentum"
    ],
    "breathing": "Exhale as you kick back, inhale as you bring the knee in."
  },
  "band-overhead-triceps-extension": {
    "exerciseId": "band-overhead-triceps-extension",
    "name": "Band Overhead Triceps Extension",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-overhead-triceps-extension.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-overhead-triceps-extension.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-overhead-triceps-extension.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-overhead-triceps-extension.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/band-overhead-triceps-extension.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-overhead-triceps-extension.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/band-overhead-triceps-extension.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "new-band-overhead-triceps-extension",
    "matchedExternalName": "Band Overhead Triceps Extension",
    "confidence": "exact",
    "steps": [
      "Stand on the middle of the band with feet hip-width apart and hold one end in each hand.",
      "Raise your hands overhead and bend your elbows so your hands move behind your head.",
      "Keep your upper arms close to your ears and brace your midsection.",
      "Straighten your elbows to press the band overhead until your arms are fully extended.",
      "Pause briefly at the top, then bend your elbows slowly to return behind your head.",
      "Repeat without letting your elbows flare wide."
    ],
    "formCues": [
      "Elbows point forward",
      "Upper arms stay still",
      "Brace your ribs down",
      "Fully straighten the elbows"
    ],
    "commonMistakes": [
      "Elbows flare out to the sides",
      "Lower back arches as the band goes overhead",
      "Upper arms drift forward and backward",
      "Only moving partway instead of fully extending"
    ],
    "breathing": "Inhale as you lower your hands behind your head, and exhale as you straighten your elbows overhead."
  },
  "band-prone-leg-curl": {
    "exerciseId": "band-prone-leg-curl",
    "name": "Band Prone Leg Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-leg-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-leg-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-leg-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-leg-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/band-leg-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-leg-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/band-leg-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0976",
    "matchedExternalName": "Band Prone Leg Curl",
    "confidence": "exact",
    "steps": [
      "Anchor the band securely at ground level.",
      "Lie face down with legs extended.",
      "Loop the band around your ankle.",
      "Flex your knee, bringing your heel toward your glutes.",
      "Slowly return to the start; repeat and switch legs if desired."
    ],
    "formCues": [
      "Keep hips down",
      "Point toes away",
      "Squeeze hamstrings at top",
      "Control lowering phase"
    ],
    "commonMistakes": [
      "Lifting hips off ground",
      "Using momentum",
      "Letting band snap back"
    ],
    "breathing": "Exhale as you curl, inhale as you lower."
  },
  "band-pull-through": {
    "exerciseId": "band-pull-through",
    "name": "Band Pull Through",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-pull-through.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-pull-through.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-pull-through.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-pull-through.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/band-pull-through.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-pull-through.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/band-pull-through.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0991",
    "matchedExternalName": "Band Pull Through",
    "confidence": "exact",
    "steps": [
      "Anchor the band at floor level and loop it between your legs.",
      "Face away from the anchor and walk forward until the band is taut.",
      "Stand with feet about hip-width apart and soften your knees.",
      "Push your hips back and hinge forward, letting the band travel behind you.",
      "Lower until you feel your hamstrings stretch while keeping your back flat.",
      "Drive your hips forward to stand tall and squeeze your glutes at the top."
    ],
    "formCues": [
      "Push hips back",
      "Keep ribs down",
      "Stand tall at top",
      "Squeeze glutes hard"
    ],
    "commonMistakes": [
      "Squatting down instead of hinging back",
      "Rounding the lower back as you fold forward",
      "Letting the band pull the hips backward at lockout",
      "Bending the knees too much and shifting into the quads"
    ],
    "breathing": "Inhale as you hinge back and exhale as you drive your hips forward to stand."
  },
  "band-resisted-decline-sit-up": {
    "exerciseId": "band-resisted-decline-sit-up",
    "name": "Band Resisted Decline Sit-Up",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-decline-sit-ups.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-decline-sit-ups.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-decline-sit-ups.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-decline-sit-ups.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/band-decline-sit-ups.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-decline-sit-ups.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/band-decline-sit-ups.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-band-decline-sit-ups",
    "matchedExternalName": "Band Resisted Decline Sit-Up",
    "confidence": "exact",
    "steps": [
      "Attach a resistance band securely behind the decline bench.",
      "Lie on the bench with your feet anchored, holding the band at the chest or behind the neck.",
      "Engage your core and perform a sit-up, raising your torso towards your knees.",
      "Control the movement back down to starting position.",
      "Repeat for the desired repetitions."
    ],
    "formCues": [
      "Keep tension in band",
      "Crunch up slowly",
      "Avoid swinging",
      "Exhale on exertion"
    ],
    "commonMistakes": [
      "Using momentum",
      "Letting band go slack",
      "Improper anchoring of feet"
    ],
    "breathing": "Exhale as you sit up, inhale as you lower down."
  },
  "band-seated-leg-extension": {
    "exerciseId": "band-seated-leg-extension",
    "name": "Band Seated Leg Extension",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-seated-leg-extension.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-seated-leg-extension.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-seated-leg-extension.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-seated-leg-extension.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/band-seated-leg-extension.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-seated-leg-extension.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/band-seated-leg-extension.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0980",
    "matchedExternalName": "Band Seated Leg Extension",
    "confidence": "exact",
    "steps": [
      "Sit upright on a sturdy chair with feet flat.",
      "Anchor one end of a band behind the chair leg.",
      "Loop the other end of the band around your ankle.",
      "Raise your lower leg to extend the knee fully.",
      "Lower the leg back down under control; repeat and switch legs."
    ],
    "formCues": [
      "Sit tall",
      "Keep upper leg stationary",
      "Control extension",
      "Do not lock knee at top"
    ],
    "commonMistakes": [
      "Swinging the leg",
      "Allowing the knee to drift or twist",
      "Arching back"
    ],
    "breathing": "Exhale as you extend, inhale as you return."
  },
  "band-seated-row": {
    "exerciseId": "band-seated-row",
    "name": "Band Seated Row",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-seated-row.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-seated-row.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-seated-row.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-seated-row.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/band-seated-row.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-seated-row.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/band-seated-row.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0990",
    "matchedExternalName": "Band Seated Row",
    "confidence": "exact",
    "steps": [
      "Sit on the floor with legs straight and loop the band over your feet.",
      "Grab the band handles or ends with both hands, arms extended.",
      "Keep back straight and chest up.",
      "Pull the handles back, driving elbows past your torso and squeezing shoulder blades.",
      "Release slowly to the starting position."
    ],
    "formCues": [
      "Lead with elbows",
      "Keep chest up",
      "Squeeze shoulder blades",
      "Don't round your back"
    ],
    "commonMistakes": [
      "Rounding the back",
      "Using momentum",
      "Letting band slack between reps"
    ],
    "breathing": "Exhale as you row, inhale as you return to start."
  },
  "band-shoulder-warm-up-stretch": {
    "exerciseId": "band-shoulder-warm-up-stretch",
    "name": "Band Shoulder Warm-Up Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-band-warm-up-shoulder-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-band-warm-up-shoulder-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-band-warm-up-shoulder-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-band-warm-up-shoulder-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-band-warm-up-shoulder-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-band-warm-up-shoulder-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-band-warm-up-shoulder-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-band-warm-up-shoulder-stretch",
    "matchedExternalName": "Band Shoulder Warm-Up Stretch",
    "confidence": "exact",
    "steps": [
      "Stand tall and grip band with hands wider than shoulders.",
      "Hold arms straight, band in front of thighs.",
      "Slowly raise band overhead while keeping arms straight.",
      "Move band behind head and down to lower back.",
      "Reverse the movement to bring band to starting position."
    ],
    "formCues": [
      "Keep arms straight",
      "Move slowly",
      "Stay within pain-free range",
      "Keep posture tall"
    ],
    "commonMistakes": [
      "Bending arms",
      "Rushing the movement",
      "Arching lower back"
    ],
    "breathing": "Breathe naturally throughout stretch."
  },
  "band-side-bend": {
    "exerciseId": "band-side-bend",
    "name": "Band Side Bend",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-side-bend.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-side-bend.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-side-bend.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-side-bend.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/band-side-bend.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-side-bend.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/band-side-bend.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0002",
    "matchedExternalName": "Band Side Bend",
    "confidence": "exact",
    "steps": [
      "Anchor the resistance band securely at ground level.",
      "Stand beside the anchor point, feet shoulder-width apart.",
      "Hold the band handle with the outside hand, arm extended alongside your body.",
      "Keeping your torso straight, bend sideways at the waist away from the anchor.",
      "Return to the starting position and repeat for reps, then switch sides."
    ],
    "formCues": [
      "Keep chest up",
      "Don’t rotate hips",
      "Bend directly to the side",
      "Controlled return"
    ],
    "commonMistakes": [
      "Rotating the torso instead of bending laterally",
      "Bending forward or backward",
      "Letting the band snap back",
      "Using momentum"
    ],
    "breathing": "Exhale while bending, inhale on the return."
  },
  "band-standing-calf-raise": {
    "exerciseId": "band-standing-calf-raise",
    "name": "Band Standing Calf Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-standing-calf-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-standing-calf-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-standing-calf-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-standing-calf-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/band-standing-calf-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-standing-calf-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/band-standing-calf-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0999",
    "matchedExternalName": "Band Standing Calf Raise",
    "confidence": "exact",
    "steps": [
      "Stand with feet shoulder-width on the band.",
      "Hold band handles by sides or at shoulders for resistance.",
      "Keep torso upright and brace core.",
      "Raise heels to stand on the balls of your feet, contracting calves.",
      "Lower heels back to the floor slowly."
    ],
    "formCues": [
      "Go all the way up",
      "Pause at the top",
      "Lower slowly",
      "Keep core engaged"
    ],
    "commonMistakes": [
      "Partial reps",
      "Letting heels drop too quickly",
      "Leaning forward or backward"
    ],
    "breathing": "Exhale as you rise, inhale as you lower."
  },
  "band-standing-crunch": {
    "exerciseId": "band-standing-crunch",
    "name": "Band Standing Crunch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-standing-crunch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-standing-crunch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-standing-crunch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-standing-crunch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/band-standing-crunch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-standing-crunch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/band-standing-crunch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1005",
    "matchedExternalName": "Band Standing Crunch",
    "confidence": "exact",
    "steps": [
      "Attach the band to an anchor around waist height and stand facing away from it.",
      "Hold the band at your chest with both hands and step forward until the band is taut.",
      "Set your feet about hip-width apart and soften your knees.",
      "Brace your midsection and curl your ribs down, bending your torso forward.",
      "Pause briefly at the bottom while keeping your hips mostly still.",
      "Slowly uncurl your torso and return to an upright position under control."
    ],
    "formCues": [
      "Ribs down",
      "Curl through your spine",
      "Keep hips still",
      "Move slowly both ways"
    ],
    "commonMistakes": [
      "Pulling the band with the arms instead of curling the torso.",
      "Hinging at the hips like a bow instead of rounding into a crunch.",
      "Letting the band snap the torso back upright.",
      "Standing too close to the anchor so the band has no tension."
    ],
    "breathing": "Exhale as you crunch forward, and inhale as you return to standing."
  },
  "band-standing-leg-curl": {
    "exerciseId": "band-standing-leg-curl",
    "name": "Band Standing Leg Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-standing-leg-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-standing-leg-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-standing-leg-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-standing-leg-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/band-standing-leg-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-standing-leg-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/band-standing-leg-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0988",
    "matchedExternalName": "Band Standing Leg Curl",
    "confidence": "exact",
    "steps": [
      "Anchor the resistance band behind you at ground level.",
      "Loop the band around one ankle.",
      "Stand on the opposite leg and balance.",
      "Curl your heel toward your glutes by flexing your knee.",
      "Lower leg slowly; repeat and switch sides."
    ],
    "formCues": [
      "Keep thighs aligned",
      "Stay tall",
      "Squeeze hamstrings",
      "Control descent"
    ],
    "commonMistakes": [
      "Letting knees move forward",
      "Using back to assist",
      "Letting band snap"
    ],
    "breathing": "Exhale as you curl, inhale as you return."
  },
  "band-standing-lift": {
    "exerciseId": "band-standing-lift",
    "name": "Band Standing Lift",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-standing-lift.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-standing-lift.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-standing-lift.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-standing-lift.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/band-standing-lift.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-standing-lift.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/band-standing-lift.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1408",
    "matchedExternalName": "Band Standing Lift",
    "confidence": "exact",
    "steps": [
      "Anchor the band low near the floor.",
      "Stand side-on to the anchor, feet shoulder-width.",
      "Hold the band handle with both hands at hip level.",
      "Lift and rotate your torso diagonally to the opposite side and above shoulder.",
      "Return to start; repeat, then switch sides."
    ],
    "formCues": [
      "Keep arms mostly straight",
      "Twist from the core",
      "Pivot feet for rotation",
      "Do not hyperextend back"
    ],
    "commonMistakes": [
      "Using arms instead of core",
      "Not rotating torso",
      "Bending elbows excessively"
    ],
    "breathing": "Exhale as you lift/rotate, inhale as you return."
  },
  "band-standing-rear-delt-row": {
    "exerciseId": "band-standing-rear-delt-row",
    "name": "Band Standing Rear Delt Row",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-standing-rear-delt-row.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-standing-rear-delt-row.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-standing-rear-delt-row.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-standing-rear-delt-row.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-standing-rear-delt-row.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1022",
    "matchedExternalName": "Band Standing Rear Delt Row",
    "confidence": "exact",
    "steps": [
      "Stand on the middle of the band with feet about hip-width apart and hold one end in each hand.",
      "Hinge forward at the hips with a soft bend in your knees until your torso leans forward and your arms hang below your shoulders.",
      "Set your shoulders down and keep your chest open with your palms facing each other or slightly inward.",
      "Pull your elbows out and back until your hands reach around lower chest to upper rib level.",
      "Squeeze your rear shoulders and upper back at the top without shrugging.",
      "Lower your hands back down under control until your arms are straight again."
    ],
    "formCues": [
      "Lead with the elbows",
      "Keep neck long",
      "Chest open, back flat",
      "Don’t shrug up"
    ],
    "commonMistakes": [
      "Standing too upright and turning it into a regular row",
      "Shrugging the shoulders toward the ears at the top",
      "Pulling the hands too low toward the waist",
      "Rounding the upper or lower back while hinging"
    ],
    "breathing": "Inhale as you lower to the start, and exhale as you row the band up."
  },
  "band-straight-back-seated-row": {
    "exerciseId": "band-straight-back-seated-row",
    "name": "Band Straight-Back Seated Row",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-straight-back-seated-row.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-straight-back-seated-row.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-straight-back-seated-row.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-straight-back-seated-row.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/band-straight-back-seated-row.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-straight-back-seated-row.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/band-straight-back-seated-row.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "3144",
    "matchedExternalName": "Band Straight-Back Seated Row",
    "confidence": "exact",
    "steps": [
      "Sit on the floor and extend your legs forward.",
      "Loop the band around your feet securely.",
      "Grip the band handles with both hands, arms extended.",
      "Keeping your back straight, pull the handles toward your waist, elbows close to your body.",
      "Pause, squeeze your shoulder blades, then slowly return to the starting position."
    ],
    "formCues": [
      "Keep chest up",
      "Maintain neutral spine",
      "Squeeze shoulder blades",
      "Control the release"
    ],
    "commonMistakes": [
      "Rounding your back",
      "Letting arms flare out",
      "Using momentum rather than back muscles"
    ],
    "breathing": "Exhale as you row, inhale as you return to start."
  },
  "band-triceps-pushdown": {
    "exerciseId": "band-triceps-pushdown",
    "name": "Band Triceps Pushdown",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-triceps-pushdown.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-triceps-pushdown.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-triceps-pushdown.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-triceps-pushdown.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/band-triceps-pushdown.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-triceps-pushdown.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/band-triceps-pushdown.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "new-band-triceps-pushdown",
    "matchedExternalName": "Band Triceps Pushdown",
    "confidence": "exact",
    "steps": [
      "Anchor the band overhead and stand facing it with a handle or end in each hand.",
      "Bend your elbows to about 90 degrees and pin your upper arms close to your sides.",
      "Brace your torso and press your hands straight down until your elbows fully extend.",
      "Pause briefly at the bottom and squeeze your triceps.",
      "Slowly let the band rise back up until your forearms return to the start position.",
      "Repeat without letting your elbows drift forward or outward."
    ],
    "formCues": [
      "Elbows pinned to sides",
      "Only move the forearms",
      "Stand tall",
      "Squeeze at lockout"
    ],
    "commonMistakes": [
      "Upper arms swinging forward and back",
      "Elbows flaring away from the torso",
      "Leaning body weight onto the band",
      "Stopping short of full elbow extension"
    ],
    "breathing": "Exhale as you press the band down, and inhale as you return to the start."
  },
  "barbell-back-squat": {
    "exerciseId": "barbell-back-squat",
    "name": "Barbell Back Squat",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/classic-barbell-squat.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/classic-barbell-squat.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/classic-barbell-squat.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/classic-barbell-squat.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/classic-barbell-squat.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/classic-barbell-squat.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/classic-barbell-squat.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1435",
    "matchedExternalName": "Barbell Back Squat",
    "confidence": "exact",
    "steps": [
      "Position barbell on upper traps, unrack.",
      "Stand with feet shoulder-width apart.",
      "Descend into squat keeping back neutral.",
      "Lower until thighs parallel or below.",
      "Drive up through heels to standing."
    ],
    "formCues": [
      "Chest up",
      "Back straight",
      "Drive through heels",
      "Knees track over toes"
    ],
    "commonMistakes": [
      "Knees caving in",
      "Rounding lower back",
      "Heels lifting off floor"
    ],
    "breathing": "Inhale lowering, exhale rising."
  },
  "barbell-bench-press": {
    "exerciseId": "barbell-bench-press",
    "name": "Barbell Bench Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-bench-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-bench-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-bench-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-bench-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/barbell-bench-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-bench-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/barbell-bench-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0025",
    "matchedExternalName": "Barbell Bench Press",
    "confidence": "exact",
    "steps": [
      "Lie flat on the bench with your eyes under the bar and plant your feet firmly on the floor.",
      "Grip the bar slightly wider than shoulder width and straighten your arms to unrack it over your chest.",
      "Lower the bar under control to your mid-chest while keeping your wrists stacked over your forearms.",
      "Lightly touch your chest, then press the bar straight up until your arms are fully extended.",
      "Guide the bar back into the rack once you finish the set."
    ],
    "formCues": [
      "Drive feet into floor",
      "Keep wrists stacked",
      "Touch mid-chest",
      "Press straight up"
    ],
    "commonMistakes": [
      "Bar drifts toward the neck or stomach",
      "Elbows flare straight out from the shoulders",
      "Wrists bend backward under the bar",
      "Hips lift off the bench during the press"
    ],
    "breathing": "Inhale as you lower the bar to your chest, and exhale as you press it back up."
  },
  "barbell-clean-and-press": {
    "exerciseId": "barbell-clean-and-press",
    "name": "Barbell Clean And Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-clean-and-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-clean-and-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-clean-and-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-clean-and-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/barbell-clean-and-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-clean-and-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/barbell-clean-and-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0028",
    "matchedExternalName": "Barbell Clean And Press",
    "confidence": "exact",
    "steps": [
      "Stand with your feet hip- to shoulder-width apart and place the barbell over your midfoot.",
      "Bend at your hips and knees, grip the bar just outside your legs, and set your back flat with your chest up.",
      "Push the floor away and lift the bar, keeping it close to your shins and thighs as you stand.",
      "Explosively extend your hips, knees, and ankles, then shrug and pull yourself under the bar.",
      "Catch the bar on the fronts of your shoulders with elbows forward and stand tall.",
      "Press the bar straight overhead until your arms are locked out and the bar is over your shoulders.",
      "Lower the bar back to your shoulders, then guide it down to the floor under control."
    ],
    "formCues": [
      "Keep the bar close",
      "Drive through the floor",
      "Elbows fast through",
      "Press straight overhead"
    ],
    "commonMistakes": [
      "Starting with the bar too far in front of the feet",
      "Rounding the lower back when pulling from the floor",
      "Catching the bar with elbows low and chest collapsed",
      "Pressing the bar forward instead of overhead"
    ],
    "breathing": "Inhale and brace before pulling from the floor, then exhale as you press overhead and reset your breath before the next rep."
  },
  "barbell-close-grip-bench-press": {
    "exerciseId": "barbell-close-grip-bench-press",
    "name": "Barbell Close Grip Bench Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-close-grip-bench-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-close-grip-bench-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-close-grip-bench-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-close-grip-bench-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-close-grip-bench-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0030",
    "matchedExternalName": "Barbell Close Grip Bench Press",
    "confidence": "exact",
    "steps": [
      "Lie on bench and grasp barbell with close grip.",
      "Unrack and position bar above lower chest.",
      "Lower bar slowly, elbows close to sides.",
      "Touch chest briefly, then press bar to starting position.",
      "Repeat for reps."
    ],
    "formCues": [
      "Tuck elbows",
      "Grip just inside shoulder width",
      "Press through triceps",
      "Control the descent"
    ],
    "commonMistakes": [
      "Gripping too narrow or wide",
      "Elbows flaring out",
      "Bouncing bar on chest"
    ],
    "breathing": "Exhale pressing up, inhale lowering bar."
  },
  "barbell-decline-bench-press": {
    "exerciseId": "barbell-decline-bench-press",
    "name": "Barbell Decline Bench Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-decline-bench-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-decline-bench-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-decline-bench-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-decline-bench-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/barbell-decline-bench-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-decline-bench-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/barbell-decline-bench-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0033",
    "matchedExternalName": "Barbell Decline Bench Press",
    "confidence": "exact",
    "steps": [
      "Lie on the decline bench and secure your legs under the pads with your eyes under the bar.",
      "Grip the bar slightly wider than shoulder width and pull your shoulder blades back into the bench.",
      "Unrack the bar and hold it above your lower chest with straight wrists and locked elbows.",
      "Lower the bar under control to your lower chest or upper sternum while keeping your elbows at about a 45-degree angle.",
      "Press the bar straight up until your elbows are extended and the bar returns over your lower chest.",
      "Repeat each rep with the same bar path and controlled tempo."
    ],
    "formCues": [
      "Drive shoulders into bench",
      "Wrists stacked over forearms",
      "Lower to lower chest",
      "Press straight up"
    ],
    "commonMistakes": [
      "Bouncing the bar off the chest",
      "Flaring the elbows straight out to the sides",
      "Letting the wrists bend back under the bar",
      "Pressing the bar toward the face instead of over the chest"
    ],
    "breathing": "Inhale as you lower the bar to your chest, and exhale as you press it back up."
  },
  "barbell-drag-curl": {
    "exerciseId": "barbell-drag-curl",
    "name": "Barbell Drag Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-drag-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-drag-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-drag-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-drag-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/barbell-drag-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-drag-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/barbell-drag-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0038",
    "matchedExternalName": "Barbell Drag Curl",
    "confidence": "exact",
    "steps": [
      "Stand tall with feet about hip-width apart and hold the barbell with an underhand grip at your thighs.",
      "Pull your shoulders slightly back and keep your elbows behind your torso.",
      "Curl the bar upward by sliding it close along the front of your body as your elbows travel back.",
      "Lift until the bar reaches your upper stomach or lower chest without letting it drift away from you.",
      "Lower the barbell slowly along the same path until your arms are straight again."
    ],
    "formCues": [
      "Keep the bar close",
      "Drive elbows back",
      "Chest tall",
      "Control the lowering"
    ],
    "commonMistakes": [
      "Letting the bar swing forward away from the body",
      "Bending the wrists back as the bar rises",
      "Rocking the torso to start the curl",
      "Flaring the elbows out to the sides"
    ],
    "breathing": "Inhale at the bottom, exhale as you drag-curl the bar up, and inhale as you lower it back down."
  },
  "barbell-front-raise": {
    "exerciseId": "barbell-front-raise",
    "name": "Barbell Front Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-front-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-front-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-front-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-front-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/barbell-front-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-front-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/barbell-front-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0041",
    "matchedExternalName": "Barbell Front Raise",
    "confidence": "exact",
    "steps": [
      "Stand tall with your feet hip-width apart and hold the barbell against your thighs with an overhand grip.",
      "Brace your core and keep a soft bend in your elbows.",
      "Raise the barbell straight forward in front of you until it reaches shoulder height.",
      "Pause briefly without shrugging your shoulders.",
      "Lower the barbell back to your thighs with control.",
      "Reset your posture and repeat the movement."
    ],
    "formCues": [
      "Lift to shoulder height",
      "Keep ribs down",
      "Lead with your hands",
      "Avoid swinging"
    ],
    "commonMistakes": [
      "Leaning back to start the lift.",
      "Swinging the barbell with the hips.",
      "Raising the barbell above shoulder height.",
      "Shrugging the shoulders toward the ears."
    ],
    "breathing": "Exhale as you raise the barbell, and inhale as you lower it back down."
  },
  "barbell-front-squat": {
    "exerciseId": "barbell-front-squat",
    "name": "Barbell Front Squat",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-front-chest-squat.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-front-chest-squat.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-front-chest-squat.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-front-chest-squat.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/barbell-front-chest-squat.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-front-chest-squat.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/barbell-front-chest-squat.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0042",
    "matchedExternalName": "Barbell Front Squat",
    "confidence": "exact",
    "steps": [
      "Rack barbell at collarbone level, elbows up.",
      "Stand with feet shoulder-width apart.",
      "Descend into squat keeping torso upright.",
      "Lower until thighs are parallel to floor.",
      "Drive up through heels to stand."
    ],
    "formCues": [
      "Elbows high",
      "Torso upright",
      "Heels down",
      "Keep knees tracking over toes"
    ],
    "commonMistakes": [
      "Letting elbows drop",
      "Rounding back",
      "Heels lifting off floor"
    ],
    "breathing": "Inhale when lowering, exhale standing up."
  },
  "barbell-incline-bench-press": {
    "exerciseId": "barbell-incline-bench-press",
    "name": "Barbell Incline Bench Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-incline-bench-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-incline-bench-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-incline-bench-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-incline-bench-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/barbell-incline-bench-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-incline-bench-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/barbell-incline-bench-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0047",
    "matchedExternalName": "Barbell Incline Bench Press",
    "confidence": "exact",
    "steps": [
      "Set an incline bench and lie back with your eyes under the bar and your feet flat on the floor.",
      "Grip the bar slightly wider than shoulder width with straight wrists and pull your shoulder blades down and back.",
      "Unrack the bar and hold it above your upper chest with your arms straight.",
      "Lower the bar under control to your upper chest, keeping your elbows slightly tucked from straight out.",
      "Press the bar upward until your arms are straight again, keeping the bar path over your shoulders.",
      "Rack the bar back onto the supports with control after your final rep."
    ],
    "formCues": [
      "Drive feet into floor",
      "Keep chest up",
      "Wrists stacked over elbows",
      "Press straight up"
    ],
    "commonMistakes": [
      "Flaring the elbows straight out to the sides",
      "Bouncing the bar off the chest",
      "Lifting the feet or shifting on the bench",
      "Lowering the bar to the neck or stomach"
    ],
    "breathing": "Inhale as you lower the bar to your chest, and exhale as you press it back up."
  },
  "barbell-lunge": {
    "exerciseId": "barbell-lunge",
    "name": "Barbell Lunge",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-lunge.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-lunge.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-lunge.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-lunge.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/barbell-lunge.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-lunge.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/barbell-lunge.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0054",
    "matchedExternalName": "Barbell Lunge",
    "confidence": "exact",
    "steps": [
      "Set the barbell across your upper back and stand tall with feet hip-width apart.",
      "Brace your core and take a controlled step forward with one foot.",
      "Lower your body until both knees bend and your back knee moves toward the floor.",
      "Keep your front foot flat and your torso upright at the bottom position.",
      "Push through the front foot to stand back up and bring your feet together.",
      "Repeat on the other side, alternating legs each rep."
    ],
    "formCues": [
      "Stay tall",
      "Front heel stays down",
      "Track knees over toes",
      "Control the descent"
    ],
    "commonMistakes": [
      "Taking such a short step that the front knee shoots far past the toes.",
      "Leaning the torso forward as you lower.",
      "Letting the front knee cave inward.",
      "Pushing off the back foot instead of driving through the front foot."
    ],
    "breathing": "Inhale as you step forward and lower down, then exhale as you push back to standing."
  },
  "barbell-prone-incline-curl": {
    "exerciseId": "barbell-prone-incline-curl",
    "name": "Barbell Prone Incline Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-prone-incline-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-prone-incline-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-prone-incline-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-prone-incline-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-prone-incline-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0072",
    "matchedExternalName": "Barbell Prone Incline Curl",
    "confidence": "exact",
    "steps": [
      "Set an incline bench and lie face down with your chest supported and your feet planted on the floor.",
      "Hold the barbell with an underhand grip about shoulder-width apart and let your arms hang straight down.",
      "Brace your torso against the bench and keep your upper arms still.",
      "Curl the barbell upward by bending your elbows until the bar reaches near the front of your shoulders.",
      "Squeeze your biceps briefly at the top without lifting your chest off the bench.",
      "Lower the barbell under control until your elbows are fully extended again."
    ],
    "formCues": [
      "Keep elbows pinned",
      "Curl, don't swing",
      "Chest stays on bench",
      "Control the lowering"
    ],
    "commonMistakes": [
      "Lifting the chest off the bench to help the bar up",
      "Letting the elbows drift forward during the curl",
      "Using body swing or kicking the legs to create momentum",
      "Dropping the bar quickly instead of lowering it under control"
    ],
    "breathing": "Inhale at the bottom, exhale as you curl the bar up, and inhale again as you lower it back down."
  },
  "barbell-rear-delt-raise": {
    "exerciseId": "barbell-rear-delt-raise",
    "name": "Barbell Rear Delt Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-rear-delt-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-rear-delt-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-rear-delt-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-rear-delt-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/barbell-rear-delt-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-rear-delt-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/barbell-rear-delt-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0075",
    "matchedExternalName": "Barbell Rear Delt Raise",
    "confidence": "exact",
    "steps": [
      "Stand tall holding the barbell with a shoulder-width overhand grip.",
      "Soften your knees and hinge at your hips until your torso is nearly parallel to the floor.",
      "Let the bar hang below your chest with your arms straight and your neck neutral.",
      "Raise the bar out and up by moving your upper arms to the sides until they reach shoulder height.",
      "Pause briefly at the top while keeping your torso still.",
      "Lower the bar under control to the starting position."
    ],
    "formCues": [
      "Hinge, don't round",
      "Lead with your elbows",
      "Keep neck neutral",
      "Control the lowering"
    ],
    "commonMistakes": [
      "Rounding the lower back as you hinge forward",
      "Swinging the torso to heave the bar upward",
      "Shrugging the shoulders toward the ears",
      "Turning it into a row by bending the elbows too much"
    ],
    "breathing": "Inhale as you lower the bar and set your hinge, then exhale as you raise the bar out to the sides."
  },
  "barbell-reverse-wrist-curl": {
    "exerciseId": "barbell-reverse-wrist-curl",
    "name": "Barbell Reverse Wrist Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-reverse-wrist-curl-over-grip.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-reverse-wrist-curl-over-grip.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-reverse-wrist-curl-over-grip.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-reverse-wrist-curl-over-grip.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/barbell-reverse-wrist-curl-over-grip.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-reverse-wrist-curl-over-grip.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/barbell-reverse-wrist-curl-over-grip.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0082",
    "matchedExternalName": "Barbell Reverse Wrist Curl",
    "confidence": "exact",
    "steps": [
      "Sit on a bench and grasp a barbell with an overhand (pronated) grip.",
      "Rest your forearms on your thighs with wrists hanging just beyond your knees.",
      "Begin with your wrists flexed downward.",
      "Slowly curl your wrists upward, lifting the barbell.",
      "Lower under control to the starting position."
    ],
    "formCues": [
      "Keep forearms stationary",
      "Use slow, controlled motion",
      "Only wrists should move",
      "Avoid swinging"
    ],
    "commonMistakes": [
      "Using too much weight",
      "Lifting with elbows or shoulders",
      "Letting the barbell roll in hands"
    ],
    "breathing": "Exhale as you curl the bar up, inhale as you lower."
  },
  "barbell-seated-behind-the-neck-press": {
    "exerciseId": "barbell-seated-behind-the-neck-press",
    "name": "Barbell Seated Behind-The-Neck Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-seated-behind-head-military-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-seated-behind-head-military-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-seated-behind-head-military-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-seated-behind-head-military-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/barbell-seated-behind-head-military-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-seated-behind-head-military-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/barbell-seated-behind-head-military-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-barbell-seated-behind-head-military-press",
    "matchedExternalName": "Barbell Seated Behind-The-Neck Press",
    "confidence": "exact",
    "steps": [
      "Sit on a bench with back support; grip barbell wider than shoulders.",
      "Unrack barbell and hold above your head.",
      "Lower barbell behind your head to just below ear level.",
      "Press barbell back up to the starting position.",
      "Repeat for desired reps, keeping core engaged."
    ],
    "formCues": [
      "Keep back upright",
      "Don't arch lower back",
      "Lower bar with control",
      "Use full range"
    ],
    "commonMistakes": [
      "Flaring elbows excessively",
      "Arching lower back",
      "Lowering bar too far"
    ],
    "breathing": "Exhale when pressing up, inhale when lowering the bar."
  },
  "barbell-shrug": {
    "exerciseId": "barbell-shrug",
    "name": "Barbell Shrug",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-shrug.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-shrug.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-shrug.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-shrug.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/barbell-shrug.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-shrug.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/barbell-shrug.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0095",
    "matchedExternalName": "Barbell Shrug",
    "confidence": "exact",
    "steps": [
      "Stand tall with your feet hip- to shoulder-width apart and hold the barbell in front of your thighs with an overhand grip.",
      "Let your arms hang straight, brace your torso, and keep your chest up.",
      "Lift your shoulders straight up toward your ears without bending your elbows or leaning back.",
      "Pause briefly at the top and squeeze your upper traps.",
      "Lower your shoulders under control until they return to the starting position."
    ],
    "formCues": [
      "Shoulders straight up",
      "Arms stay long",
      "Chest tall",
      "No rolling"
    ],
    "commonMistakes": [
      "Bending the elbows to curl the bar upward.",
      "Rolling the shoulders forward or backward at the top.",
      "Leaning back and swinging the torso to move the bar.",
      "Letting the head jut forward as the shoulders rise."
    ],
    "breathing": "Inhale before each rep, exhale as you shrug your shoulders up, and inhale as you lower back down."
  },
  "barbell-standing-back-wrist-curl": {
    "exerciseId": "barbell-standing-back-wrist-curl",
    "name": "Barbell Standing Back Wrist Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-standing-back-wrist-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-standing-back-wrist-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-standing-back-wrist-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-standing-back-wrist-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/barbell-standing-back-wrist-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-standing-back-wrist-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/barbell-standing-back-wrist-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0104",
    "matchedExternalName": "Barbell Standing Back Wrist Curl",
    "confidence": "exact",
    "steps": [
      "Stand tall with your feet about hip-width apart and hold a barbell behind your hips with an overhand grip.",
      "Let the bar rest across your fingers so your knuckles face the floor and your palms face behind you.",
      "Keep your elbows close to your sides and straighten your wrists to lower the bar toward your fingertips.",
      "Curl your wrists upward to roll the bar back into your hands and lift it as high as you can.",
      "Pause briefly at the top, then lower the bar with control back to the starting position."
    ],
    "formCues": [
      "Move only your wrists",
      "Keep elbows pinned back",
      "Use full wrist range",
      "Control the lowering"
    ],
    "commonMistakes": [
      "Swinging the bar with the shoulders or torso",
      "Bending the elbows to lift the bar",
      "Letting the bar slip too far out of the hands",
      "Using short, jerky wrist motions"
    ],
    "breathing": "Inhale as you lower the bar toward your fingertips, and exhale as you curl your wrists up."
  },
  "barbell-straight-leg-deadlift": {
    "exerciseId": "barbell-straight-leg-deadlift",
    "name": "Barbell Straight Leg Deadlift",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-straight-leg-deadlift.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-straight-leg-deadlift.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-straight-leg-deadlift.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-straight-leg-deadlift.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/barbell-straight-leg-deadlift.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-straight-leg-deadlift.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/barbell-straight-leg-deadlift.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0116",
    "matchedExternalName": "Barbell Straight Leg Deadlift",
    "confidence": "exact",
    "steps": [
      "Stand tall with your feet hip-width apart and hold the barbell in front of your thighs with straight arms.",
      "Soften your knees slightly and brace your midsection.",
      "Push your hips back and lower the bar down your legs while keeping your back flat and your legs nearly straight.",
      "Lower until the bar reaches mid-shin or until you feel a strong hamstring stretch without losing your back position.",
      "Drive your hips forward and stand tall, keeping the bar close to your legs the whole way up.",
      "Finish with your hips locked out and shoulders stacked over your hips."
    ],
    "formCues": [
      "Hips back, not down",
      "Keep the bar close",
      "Soft knees, flat back",
      "Stand tall and squeeze glutes"
    ],
    "commonMistakes": [
      "Bending the knees into a squat as the bar lowers",
      "Letting the bar drift forward away from the legs",
      "Rounding the lower back near the bottom",
      "Jerking the bar off the bottom instead of lifting smoothly"
    ],
    "breathing": "Inhale and brace before hinging down, then exhale as you drive your hips forward to stand up."
  },
  "barbell-underhand-bent-over-row": {
    "exerciseId": "barbell-underhand-bent-over-row",
    "name": "Barbell Underhand Bent-Over Row",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-underhand-bent-over-row.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-underhand-bent-over-row.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-underhand-bent-over-row.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-underhand-bent-over-row.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/barbell-underhand-bent-over-row.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-underhand-bent-over-row.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/barbell-underhand-bent-over-row.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0027",
    "matchedExternalName": "Barbell Underhand Bent-Over Row",
    "confidence": "exact",
    "steps": [
      "Stand with feet hip-width apart, barbell on floor.",
      "Bend forward from hips, back straight, grasp bar underhand.",
      "Let bar hang at arm’s length below shoulders.",
      "Row barbell to torso, elbows close to sides.",
      "Lower barbell under control to starting position."
    ],
    "formCues": [
      "Keep back flat",
      "Pull with elbows",
      "Squeeze shoulder blades",
      "Keep wrists neutral"
    ],
    "commonMistakes": [
      "Rounding lower back",
      "Flaring elbows excessively",
      "Using momentum"
    ],
    "breathing": "Exhale as you row up, inhale as you lower down."
  },
  "barbell-wide-grip-upright-row": {
    "exerciseId": "barbell-wide-grip-upright-row",
    "name": "Barbell Wide-Grip Upright Row",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-upright-row-wide-grip.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-upright-row-wide-grip.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-upright-row-wide-grip.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/barbell-upright-row-wide-grip.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/barbell-upright-row-wide-grip.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/barbell-upright-row-wide-grip.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/barbell-upright-row-wide-grip.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0123",
    "matchedExternalName": "Barbell Wide-Grip Upright Row",
    "confidence": "exact",
    "steps": [
      "Stand upright with feet shoulder width apart.",
      "Hold the barbell using a wide, overhand grip.",
      "Let the bar rest in front of your thighs.",
      "Lift the bar straight up toward your chest, elbows out to the sides.",
      "Lower the bar slowly to the starting position."
    ],
    "formCues": [
      "Lead with your elbows",
      "Keep bar close to your body",
      "Stop at upper chest",
      "Maintain neutral spine"
    ],
    "commonMistakes": [
      "Shrugging shoulders excessively",
      "Using too much momentum",
      "Hands too close"
    ],
    "breathing": "Exhale as you lift, inhale as you lower."
  },
  "battling-ropes": {
    "exerciseId": "battling-ropes",
    "name": "Battling Ropes",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/battling-ropes.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/battling-ropes.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/battling-ropes.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/battling-ropes.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/battling-ropes.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/battling-ropes.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/battling-ropes.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0128",
    "matchedExternalName": "Battling Ropes",
    "confidence": "exact",
    "steps": [
      "Anchor your stance with feet about shoulder-width apart and bend your knees slightly.",
      "Hold one rope end in each hand with your palms facing each other and your arms in front of you.",
      "Brace your core and lift one hand as you lower the other to start the waves.",
      "Keep alternating your arms quickly to send continuous waves down the ropes.",
      "Maintain the slight knee bend and steady torso as you keep the waves even."
    ],
    "formCues": [
      "Move arms fast",
      "Keep chest tall",
      "Brace your core",
      "Make even waves"
    ],
    "commonMistakes": [
      "Standing upright with locked knees",
      "Swinging the whole torso instead of the arms",
      "Letting the waves become uneven or stop",
      "Lifting the shoulders up toward the ears"
    ],
    "breathing": "Breathe steadily throughout, exhaling with the arm drive and inhaling as the arms switch."
  },
  "bench-crunch": {
    "exerciseId": "bench-crunch",
    "name": "Bench Crunch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/crunch-on-bench.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/crunch-on-bench.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/crunch-on-bench.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/crunch-on-bench.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/crunch-on-bench.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/crunch-on-bench.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/crunch-on-bench.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-crunch-on-bench",
    "matchedExternalName": "Bench Crunch",
    "confidence": "exact",
    "steps": [
      "Lie flat on a bench with knees bent and feet secured or flat.",
      "Cross your arms over your chest or place hands behind your head.",
      "Engage your core and lift your shoulders towards your knees.",
      "Squeeze at the top and hold briefly.",
      "Lower your upper body back to bench in a controlled manner."
    ],
    "formCues": [
      "Lift with your abs",
      "Keep chin tucked",
      "Don't arch back",
      "Control the motion"
    ],
    "commonMistakes": [
      "Pulling on neck",
      "Rushing reps",
      "Lifting too high"
    ],
    "breathing": "Exhale as you lift, inhale as you lower."
  },
  "bench-dips": {
    "exerciseId": "bench-dips",
    "name": "Bench Dips",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/bench-dips.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/bench-dips.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/bench-dips.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/bench-dips.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/bench-dips.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/bench-dips.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/bench-dips.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-bench-dips",
    "matchedExternalName": "Bench Dips",
    "confidence": "exact",
    "steps": [
      "Sit on a bench and place your hands beside your hips, gripping the edge.",
      "Extend your legs out in front with heels on the floor.",
      "Slide your hips off the bench, supporting your weight with your arms.",
      "Lower your body by bending your elbows to about 90 degrees.",
      "Push through your palms to extend your elbows and return to the start."
    ],
    "formCues": [
      "Keep elbows close to body",
      "Lower slowly and with control",
      "Keep chest tall",
      "Avoid shrugging shoulders"
    ],
    "commonMistakes": [
      "Allowing elbows to flare out",
      "Shrugging shoulders upward",
      "Dropping hips too low"
    ],
    "breathing": "Inhale as you lower down, exhale as you press upward."
  },
  "bench-pull-up": {
    "exerciseId": "bench-pull-up",
    "name": "Bench Pull-Up",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/bench-pull-ups.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/bench-pull-ups.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/bench-pull-ups.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/bench-pull-ups.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/bench-pull-ups.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/bench-pull-ups.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/bench-pull-ups.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0570",
    "matchedExternalName": "Bench Pull-Up",
    "confidence": "exact",
    "steps": [
      "Place a bench under a pull-up bar.",
      "Grip the bar with hands wider than shoulder-width.",
      "Position feet on the bench for support.",
      "Pull your chest towards the bar, using feet as needed.",
      "Lower yourself slowly to starting position."
    ],
    "formCues": [
      "Keep core engaged",
      "Lead with chest",
      "Pull elbows down and back",
      "Don't let legs push too much"
    ],
    "commonMistakes": [
      "Using too much leg drive",
      "Swinging body or kicking feet",
      "Chin barely reaching bar",
      "Not controlling descent"
    ],
    "breathing": "Exhale as you pull up, inhale as you lower down."
  },
  "bent-knee-lying-twist-on-stability-ball": {
    "exerciseId": "bent-knee-lying-twist-on-stability-ball",
    "name": "Bent Knee Lying Twist on Stability Ball",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/bent-knee-lying-twist-on-stability-ball.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/bent-knee-lying-twist-on-stability-ball.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/bent-knee-lying-twist-on-stability-ball.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/bent-knee-lying-twist-on-stability-ball.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/bent-knee-lying-twist-on-stability-ball.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "3639",
    "matchedExternalName": "Bent Knee Lying Twist on Stability Ball",
    "confidence": "exact",
    "steps": [
      "Lie on your back with calves on a stability ball.",
      "Extend arms out at your sides for support.",
      "Bend knees at 90 degrees over the ball.",
      "Slowly drop knees to one side, keeping shoulders flat.",
      "Return to center and repeat on the other side."
    ],
    "formCues": [
      "Keep shoulders grounded",
      "Control the twist",
      "Engage core",
      "Move slowly"
    ],
    "commonMistakes": [
      "Letting shoulders lift off floor",
      "Moving too quickly",
      "Over-twisting hips"
    ],
    "breathing": "Exhale as you twist, inhale returning to center."
  },
  "bridge-pose-setu-bandhasana": {
    "exerciseId": "bridge-pose-setu-bandhasana",
    "name": "Bridge Pose (Setu Bandhasana)",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-bridge-pose-setu-bandhasana.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-bridge-pose-setu-bandhasana.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-bridge-pose-setu-bandhasana.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-bridge-pose-setu-bandhasana.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-bridge-pose-setu-bandhasana.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-bridge-pose-setu-bandhasana.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-bridge-pose-setu-bandhasana.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-bridge-pose-setu-bandhasana",
    "matchedExternalName": "Bridge Pose (Setu Bandhasana)",
    "confidence": "exact",
    "steps": [
      "Lie on your back with your knees bent and feet hip-width apart.",
      "Place your arms at your sides, palms down.",
      "Press through your heels and lift your hips upward.",
      "Hold the pose, engaging your glutes and core.",
      "Lower your hips back to the starting position."
    ],
    "formCues": [
      "Squeeze glutes at the top",
      "Keep knees aligned with hips",
      "Do not overarch lower back",
      "Press evenly through feet"
    ],
    "commonMistakes": [
      "Arching the back excessively",
      "Letting knees fall outward or inward",
      "Not engaging the core"
    ],
    "breathing": "Exhale as you lift hips, inhale as you lower down."
  },
  "burpee": {
    "exerciseId": "burpee",
    "name": "Burpee",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/burpee.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/burpee.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/burpee.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/burpee.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/burpee.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/burpee.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/burpee.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1160",
    "matchedExternalName": "Burpee",
    "confidence": "exact",
    "steps": [
      "Stand tall with your feet about hip-width apart.",
      "Bend your knees, hinge at your hips, and place your hands on the floor in front of your feet.",
      "Jump both feet back to a high plank with your body in a straight line.",
      "Lower your chest to the floor, then press back up to plank.",
      "Jump both feet forward to the outside of your hands.",
      "Drive through your feet and jump straight up, reaching your arms overhead as you leave the floor.",
      "Land softly and go straight into the next rep."
    ],
    "formCues": [
      "Keep your core braced.",
      "Land softly under control.",
      "Chest up on the jump.",
      "Move as one straight line."
    ],
    "commonMistakes": [
      "Hips sagging low in the plank or push-up.",
      "Feet landing too narrow under the body.",
      "Hands placed far in front of the shoulders.",
      "Landing stiff-legged with no knee bend."
    ],
    "breathing": "Inhale as you drop down and move into plank, then exhale as you press up and jump."
  },
  "butterfly-yoga-pose": {
    "exerciseId": "butterfly-yoga-pose",
    "name": "Butterfly Yoga Pose",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-butterfly-yoga-pose.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-butterfly-yoga-pose.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-butterfly-yoga-pose.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-butterfly-yoga-pose.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-butterfly-yoga-pose.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-butterfly-yoga-pose.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-butterfly-yoga-pose.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1494",
    "matchedExternalName": "Butterfly Yoga Pose",
    "confidence": "exact",
    "steps": [
      "Sit upright with feet together and knees bent out to sides.",
      "Hold your feet with your hands.",
      "Keep spine tall and shoulders relaxed.",
      "Gently press knees toward the floor.",
      "Hold the position, breathing deeply."
    ],
    "formCues": [
      "Keep chest tall",
      "Relax the hips",
      "Don't force knees down",
      "Engage core lightly"
    ],
    "commonMistakes": [
      "Rounding the back",
      "Bouncing knees",
      "Forcing knees down"
    ],
    "breathing": "Breathe evenly throughout the stretch."
  },
  "cable-close-grip-lat-pulldown": {
    "exerciseId": "cable-close-grip-lat-pulldown",
    "name": "Cable Close Grip Lat Pulldown",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-close-grip-front-lat-pulldown.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-close-grip-front-lat-pulldown.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-close-grip-front-lat-pulldown.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-close-grip-front-lat-pulldown.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-close-grip-front-lat-pulldown.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-close-grip-front-lat-pulldown.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-close-grip-front-lat-pulldown.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0974",
    "matchedExternalName": "Cable Close Grip Lat Pulldown",
    "confidence": "exact",
    "steps": [
      "Attach a V-bar or close grip handle to the cable machine.",
      "Sit down and secure your thighs under the pads.",
      "Grasp the handle with a neutral grip, hands parallel.",
      "Pull the handle down to the top of your chest, keeping torso vertical.",
      "Slowly return the handle to the top without locking elbows."
    ],
    "formCues": [
      "Lead with the elbows",
      "Keep chest up",
      "Do not swing back",
      "Squeeze lats at bottom"
    ],
    "commonMistakes": [
      "Leaning back excessively",
      "Using momentum",
      "Not fully engaging lats",
      "Rounding shoulders forward"
    ],
    "breathing": "Exhale as you pull down, inhale as you return up."
  },
  "cable-crossover-reverse-fly": {
    "exerciseId": "cable-crossover-reverse-fly",
    "name": "Cable Crossover Reverse Fly",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-crossover-reverse-fly.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-crossover-reverse-fly.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-crossover-reverse-fly.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-crossover-reverse-fly.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-crossover-reverse-fly.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-crossover-reverse-fly.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-crossover-reverse-fly.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0154",
    "matchedExternalName": "Cable Crossover Reverse Fly",
    "confidence": "exact",
    "steps": [
      "Set both cable handles to the low pulleys and stand centered between them.",
      "Grab the left handle in your right hand and the right handle in your left hand, then step forward to create tension.",
      "Hinge forward slightly with a soft bend in your knees and keep your chest up and back flat.",
      "Start with your arms angled down and crossed in front of you, elbows slightly bent.",
      "Pull both arms out and back in a wide arc until your hands reach about shoulder height.",
      "Squeeze your rear shoulders and upper back at the end position.",
      "Return the handles slowly to the start without shrugging or changing your torso position."
    ],
    "formCues": [
      "Lead with your elbows",
      "Keep a soft elbow bend",
      "Chest up, back flat",
      "Don't shrug your shoulders"
    ],
    "commonMistakes": [
      "Standing fully upright and turning it into a row",
      "Bending and straightening the elbows during the rep",
      "Shrugging the shoulders up toward the ears",
      "Swinging the torso to move the handles"
    ],
    "breathing": "Inhale as you return the handles to the start, and exhale as you pull your arms out and back."
  },
  "cable-kneeling-crunch": {
    "exerciseId": "cable-kneeling-crunch",
    "name": "Cable Kneeling Crunch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-kneeling-crunch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-kneeling-crunch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-kneeling-crunch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-kneeling-crunch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-kneeling-crunch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-kneeling-crunch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-kneeling-crunch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0175",
    "matchedExternalName": "Cable Kneeling Crunch",
    "confidence": "exact",
    "steps": [
      "Attach a rope handle to the high pulley and kneel facing the machine.",
      "Grab the rope ends and bring your hands beside your head with your elbows slightly forward.",
      "Brace your midsection and keep your hips stacked over your knees.",
      "Curl your ribcage toward your pelvis and bring your elbows down toward your thighs.",
      "Pause briefly in the bottom position while keeping tension on the rope.",
      "Slowly uncurl your spine and return to the start without letting the weight stack slam."
    ],
    "formCues": [
      "Ribs to hips",
      "Hips stay still",
      "Curl, don't hinge",
      "Keep neck neutral"
    ],
    "commonMistakes": [
      "Pulling the rope down with the arms instead of curling the torso",
      "Sitting hips back and turning it into a hip hinge",
      "Jerking up and letting the weight stack drop between reps",
      "Lifting the chest too high and losing abdominal tension at the top"
    ],
    "breathing": "Exhale as you curl down into the crunch, and inhale as you slowly return to the starting position."
  },
  "cable-lateral-raise": {
    "exerciseId": "cable-lateral-raise",
    "name": "Cable Lateral Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-lateral-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-lateral-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-lateral-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-lateral-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-lateral-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-lateral-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-lateral-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0178",
    "matchedExternalName": "Cable Lateral Raise",
    "confidence": "exact",
    "steps": [
      "Set the cable at the lowest position and stand side-on to it.",
      "Grab the handle with the outside hand and let your arm hang by your thigh.",
      "Stand tall with a slight bend in your elbow and brace your midline.",
      "Raise your arm out to the side until your hand reaches shoulder height.",
      "Pause briefly without shrugging your shoulder.",
      "Lower the handle back down with control to the start position."
    ],
    "formCues": [
      "Lead with your elbow",
      "Stop at shoulder height",
      "Keep neck relaxed",
      "Raise with control"
    ],
    "commonMistakes": [
      "Shrugging the shoulder up toward the ear",
      "Swinging the torso to lift the handle",
      "Turning the raise into a front lift",
      "Lifting the hand far above shoulder height"
    ],
    "breathing": "Exhale as you raise the handle to the side, and inhale as you lower it back down."
  },
  "cable-lying-triceps-extension": {
    "exerciseId": "cable-lying-triceps-extension",
    "name": "Cable Lying Triceps Extension",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-lying-triceps-extension.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-lying-triceps-extension.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-lying-triceps-extension.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-lying-triceps-extension.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-lying-triceps-extension.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-lying-triceps-extension.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-lying-triceps-extension.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0186",
    "matchedExternalName": "Cable Lying Triceps Extension",
    "confidence": "exact",
    "steps": [
      "Attach a rope handle to a low cable and place a flat bench in line with the pulley.",
      "Lie face up on the bench with your head closest to the cable and hold the rope with a neutral grip.",
      "Press the rope straight above your chest with your arms fully extended.",
      "Keep your upper arms mostly still and bend your elbows to lower the rope toward your forehead.",
      "Pause briefly when your elbows are deeply bent.",
      "Straighten your elbows to return the rope to the start position above your chest."
    ],
    "formCues": [
      "Elbows stay tucked",
      "Upper arms stay still",
      "Move only at the elbows",
      "Finish with straight arms"
    ],
    "commonMistakes": [
      "Letting the elbows flare wide to the sides",
      "Drifting the upper arms backward and turning it into a pullover",
      "Lowering the rope behind the head instead of toward the forehead",
      "Bouncing out of the bottom instead of controlling the cable"
    ],
    "breathing": "Inhale as you lower the rope toward your forehead, and exhale as you straighten your elbows back to the start."
  },
  "cable-one-arm-curl": {
    "exerciseId": "cable-one-arm-curl",
    "name": "Cable One Arm Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-one-arm-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-one-arm-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-one-arm-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-one-arm-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-one-arm-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-one-arm-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-one-arm-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0190",
    "matchedExternalName": "Cable One Arm Curl",
    "confidence": "exact",
    "steps": [
      "Stand beside the cable machine and hold the handle in one hand with your palm facing up.",
      "Step out until the cable is taut, then stand tall with your elbow tucked against your side.",
      "Curl the handle upward by bending your elbow without letting your upper arm drift forward.",
      "Raise the handle until your forearm is close to your biceps, then briefly squeeze your arm.",
      "Lower the handle slowly until your arm is straight again while keeping tension on the cable.",
      "Complete all reps on one arm, then switch sides."
    ],
    "formCues": [
      "Keep elbow pinned",
      "Palm stays up",
      "Stand tall",
      "Lower with control"
    ],
    "commonMistakes": [
      "Elbow swings forward during the curl",
      "Shoulder shrugs up toward the ear",
      "Torso leans back to move the weight",
      "Handle drops quickly on the way down"
    ],
    "breathing": "Exhale as you curl the handle up, and inhale as you lower it back down."
  },
  "cable-one-arm-front-raise": {
    "exerciseId": "cable-one-arm-front-raise",
    "name": "Cable One Arm Front Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-one-arm-forward-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-one-arm-forward-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-one-arm-forward-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-one-arm-forward-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-one-arm-forward-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-one-arm-forward-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-one-arm-forward-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0162",
    "matchedExternalName": "Cable One Arm Front Raise",
    "confidence": "exact",
    "steps": [
      "Attach handle to low pulley and stand facing away from machine.",
      "Grasp handle with one hand, arm by your side.",
      "With a straight arm, raise it forward to shoulder height.",
      "Pause briefly at the top.",
      "Lower back to the start slowly and repeat."
    ],
    "formCues": [
      "Keep core tight",
      "Lift with shoulder, not hand",
      "Don't swing",
      "Control the descent"
    ],
    "commonMistakes": [
      "Using momentum",
      "Shrugging shoulder",
      "Overextending at the top"
    ],
    "breathing": "Exhale as you lift, inhale as you lower."
  },
  "cable-one-arm-lateral-pulldown": {
    "exerciseId": "cable-one-arm-lateral-pulldown",
    "name": "Cable One Arm Lateral Pulldown",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-one-arm-lateral-pulldown.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-one-arm-lateral-pulldown.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-one-arm-lateral-pulldown.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-one-arm-lateral-pulldown.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-one-arm-lateral-pulldown.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-one-arm-lateral-pulldown.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-one-arm-lateral-pulldown.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "2616",
    "matchedExternalName": "Cable One Arm Lateral Pulldown",
    "confidence": "exact",
    "steps": [
      "Attach a single handle to the high cable pulley.",
      "Sit or stand, arm overhead grasping the handle.",
      "Stabilize your body and engage your core.",
      "Pull handle down to shoulder/upper chest level.",
      "Pause, then return handle slowly."
    ],
    "formCues": [
      "Pull elbow down and in",
      "Don’t shrug shoulders",
      "Keep torso upright",
      "Focus on the lats"
    ],
    "commonMistakes": [
      "Arching back excessively",
      "Letting shoulder roll forward",
      "Using momentum"
    ],
    "breathing": "Exhale while pulling down, inhale while releasing."
  },
  "cable-one-arm-lateral-raise": {
    "exerciseId": "cable-one-arm-lateral-raise",
    "name": "Cable One Arm Lateral Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-one-arm-lateral-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-one-arm-lateral-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-one-arm-lateral-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-one-arm-lateral-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-one-arm-lateral-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-one-arm-lateral-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-one-arm-lateral-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0192",
    "matchedExternalName": "Cable One Arm Lateral Raise",
    "confidence": "exact",
    "steps": [
      "Stand sideways to the cable machine and grasp the handle with the outside hand.",
      "Step away until the cable is taut, with your arm down by your side and a slight bend in your elbow.",
      "Brace your torso and keep your shoulders level.",
      "Raise your arm out to the side until your hand reaches about shoulder height.",
      "Pause briefly without shrugging your shoulder.",
      "Lower the handle back down with control to the starting position.",
      "Complete the reps on one side, then switch arms."
    ],
    "formCues": [
      "Lead with the elbow",
      "Keep shoulders level",
      "Raise to shoulder height",
      "Lower with control"
    ],
    "commonMistakes": [
      "Shrugging the working shoulder toward the ear",
      "Swinging the torso to start the rep",
      "Turning the raise into a front raise",
      "Lifting the hand far above shoulder height"
    ],
    "breathing": "Exhale as you raise your arm to the side, and inhale as you lower it back down under control."
  },
  "cable-one-arm-twisting-seated-row": {
    "exerciseId": "cable-one-arm-twisting-seated-row",
    "name": "Cable One-Arm Twisting Seated Row",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-one-arm-twisting-seated-row.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-one-arm-twisting-seated-row.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-one-arm-twisting-seated-row.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-one-arm-twisting-seated-row.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-one-arm-twisting-seated-row.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-one-arm-twisting-seated-row.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-one-arm-twisting-seated-row.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0861",
    "matchedExternalName": "Cable One-Arm Twisting Seated Row",
    "confidence": "exact",
    "steps": [
      "Sit on the cable row bench and grasp a single handle with one hand.",
      "Keep back straight and feet planted on the platform.",
      "Pull the handle toward your torso while rotating your shoulder and upper body toward the working side.",
      "Pause and squeeze your back muscles at contraction.",
      "Slowly return arm and torso to the starting position with control."
    ],
    "formCues": [
      "Rotate torso with row",
      "Keep chest up",
      "Avoid jerking",
      "Control the return"
    ],
    "commonMistakes": [
      "Over-rotating",
      "Using momentum",
      "Shrugging the shoulder"
    ],
    "breathing": "Exhale as you row and rotate, inhale as you extend and return."
  },
  "cable-pulldown": {
    "exerciseId": "cable-pulldown",
    "name": "Cable Pulldown",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-pulldown.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-pulldown.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-pulldown.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-pulldown.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-pulldown.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-pulldown.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-pulldown.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0198",
    "matchedExternalName": "Cable Pulldown",
    "confidence": "exact",
    "steps": [
      "Adjust the seat and knee pad so your thighs are held down and you can reach the bar overhead.",
      "Sit tall with your feet flat, grab the bar with an overhand grip just outside shoulder width, and straighten your arms.",
      "Lean back slightly and pull your shoulders down away from your ears.",
      "Drive your elbows down and pull the bar to the top of your chest.",
      "Pause briefly while keeping your chest lifted and your torso still.",
      "Slowly straighten your arms and let the bar rise under control to the start position."
    ],
    "formCues": [
      "Pull elbows to your ribs",
      "Keep chest tall",
      "Shoulders down, not shrugged",
      "Control the way up"
    ],
    "commonMistakes": [
      "Pulling the bar behind the neck",
      "Swinging the torso backward to start the rep",
      "Letting the shoulders shrug up at the top",
      "Stopping short and not fully straightening the arms"
    ],
    "breathing": "Inhale as the bar rises, and exhale as you pull the bar down to your upper chest."
  },
  "cable-rear-delt-row-with-rope": {
    "exerciseId": "cable-rear-delt-row-with-rope",
    "name": "Cable Rear Delt Row (with rope)",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-rear-delt-row-with-rope.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-rear-delt-row-with-rope.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-rear-delt-row-with-rope.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-rear-delt-row-with-rope.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-rear-delt-row-with-rope.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-rear-delt-row-with-rope.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-rear-delt-row-with-rope.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0203",
    "matchedExternalName": "Cable Rear Delt Row (with rope)",
    "confidence": "exact",
    "steps": [
      "Attach a rope to a low cable pulley and stand facing the machine.",
      "Grab the rope with both hands, step back to create tension, and set your feet about hip-width apart.",
      "Soften your knees and hinge forward slightly with a flat back and arms extended in front of you.",
      "Lead with your elbows and row the rope up toward your upper chest while letting the rope ends separate.",
      "Pause briefly as your elbows travel out and back and your shoulder blades squeeze together.",
      "Lower the rope under control until your arms are extended again without rounding your shoulders."
    ],
    "formCues": [
      "Lead with the elbows",
      "Chest up, back flat",
      "Pull shoulders back",
      "Control the return"
    ],
    "commonMistakes": [
      "Standing fully upright and turning it into a regular cable row",
      "Shrugging the shoulders up toward the ears during the pull",
      "Pulling mostly with the hands and curling the rope in",
      "Rounding the upper back as the rope returns forward"
    ],
    "breathing": "Inhale as you lower the rope forward, and exhale as you row the rope toward your upper chest."
  },
  "cable-rope-overhead-triceps-extension": {
    "exerciseId": "cable-rope-overhead-triceps-extension",
    "name": "Cable Rope Overhead Triceps Extension",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-rope-high-pulley-overhead-triceps-extension.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-rope-high-pulley-overhead-triceps-extension.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-rope-high-pulley-overhead-triceps-extension.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-rope-high-pulley-overhead-triceps-extension.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-rope-high-pulley-overhead-triceps-extension.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-rope-high-pulley-overhead-triceps-extension.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-rope-high-pulley-overhead-triceps-extension.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0194",
    "matchedExternalName": "Cable Rope Overhead Triceps Extension",
    "confidence": "exact",
    "steps": [
      "Attach a rope to a high pulley.",
      "Stand (or kneel) with back facing the machine.",
      "Grasp rope, step forward, and lean slightly.",
      "Keep upper arms still, extend elbows bringing rope forward/upward.",
      "Return to starting position slowly."
    ],
    "formCues": [
      "Keep upper arms stationary",
      "Elbows close",
      "Extend fully",
      "Avoid arching back"
    ],
    "commonMistakes": [
      "Moving upper arms",
      "Flaring elbows",
      "Arching or swinging back"
    ],
    "breathing": "Exhale as you extend, inhale as you bend elbows."
  },
  "cable-rope-triceps-pushdown": {
    "exerciseId": "cable-rope-triceps-pushdown",
    "name": "Cable Rope Triceps Pushdown",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-pushdown-rope-attachment.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-pushdown-rope-attachment.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-pushdown-rope-attachment.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-pushdown-rope-attachment.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-pushdown-rope-attachment.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-pushdown-rope-attachment.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-pushdown-rope-attachment.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0200",
    "matchedExternalName": "Cable Rope Triceps Pushdown",
    "confidence": "exact",
    "steps": [
      "Attach a rope to the high pulley and stand facing the machine.",
      "Grab the rope with both hands, thumbs facing inward.",
      "Keep elbows tucked at your sides and lean slightly forward.",
      "Extend your arms down, splitting the rope at the bottom.",
      "Slowly return to the start without letting elbows flare out."
    ],
    "formCues": [
      "Keep elbows fixed",
      "Split the rope at the bottom",
      "Don’t use your shoulders",
      "Full extension on each rep"
    ],
    "commonMistakes": [
      "Flaring elbows",
      "Using momentum",
      "Not fully extending arms"
    ],
    "breathing": "Exhale as you push down, inhale as you return."
  },
  "cable-seated-high-row-v-bar": {
    "exerciseId": "cable-seated-high-row-v-bar",
    "name": "Cable Seated High Row (V-bar)",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-seated-high-row-v-bar.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-seated-high-row-v-bar.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-seated-high-row-v-bar.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-seated-high-row-v-bar.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-seated-high-row-v-bar.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-seated-high-row-v-bar.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-seated-high-row-v-bar.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0213",
    "matchedExternalName": "Cable Seated High Row (V-bar)",
    "confidence": "exact",
    "steps": [
      "Sit at the cable row station facing the stack and grasp the V-bar handle with a neutral grip.",
      "Plant your feet, soften your knees, and sit tall with your chest up and arms extended.",
      "Brace your torso and pull your shoulder blades back and down.",
      "Drive your elbows back and out slightly as you row the handle toward your upper stomach or lower chest.",
      "Pause briefly with the handle close to your torso and your shoulders pulled back.",
      "Extend your arms forward under control until your shoulders are stretched, then repeat."
    ],
    "formCues": [
      "Chest up",
      "Lead with the elbows",
      "Squeeze shoulder blades",
      "Control the return"
    ],
    "commonMistakes": [
      "Rounding the lower back as the handle moves forward",
      "Leaning far back and using body swing to pull",
      "Shrugging the shoulders up toward the ears",
      "Pulling with the arms only and not moving the shoulder blades"
    ],
    "breathing": "Inhale as you extend your arms forward, and exhale as you row the handle toward your torso."
  },
  "cable-standing-crunch": {
    "exerciseId": "cable-standing-crunch",
    "name": "Cable Standing Crunch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-standing-crunch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-standing-crunch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-standing-crunch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-standing-crunch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-standing-crunch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-standing-crunch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-standing-crunch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0226",
    "matchedExternalName": "Cable Standing Crunch",
    "confidence": "exact",
    "steps": [
      "Set a cable at the high pulley and stand facing away from the machine.",
      "Hold the attachment by the sides of your head with both hands and bend your knees slightly.",
      "Brace your midsection and keep your hips mostly still.",
      "Curl your ribcage down toward your pelvis, bringing your elbows toward your thighs.",
      "Pause briefly in the bottom position and squeeze your abs.",
      "Slowly uncurl your torso back to the start without letting the weight stack slam."
    ],
    "formCues": [
      "Ribs to hips",
      "Keep hips still",
      "Curl, don't hinge",
      "Brace your abs"
    ],
    "commonMistakes": [
      "Hinging forward at the hips instead of curling the spine",
      "Pulling the attachment down with the arms",
      "Standing too upright and barely moving the torso",
      "Letting the weight yank the torso back up"
    ],
    "breathing": "Inhale at the top, exhale as you curl down, and inhale again as you return under control."
  },
  "cable-standing-fly": {
    "exerciseId": "cable-standing-fly",
    "name": "Cable Standing Fly",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-standing-fly-crossover-fly.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-standing-fly-crossover-fly.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-standing-fly-crossover-fly.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-standing-fly-crossover-fly.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-standing-fly-crossover-fly.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-standing-fly-crossover-fly.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-standing-fly-crossover-fly.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1269",
    "matchedExternalName": "Cable Standing Fly",
    "confidence": "exact",
    "steps": [
      "Attach handles to both high pulleys.",
      "Stand centered between pulleys, grasp handles in each hand.",
      "Step forward into a staggered stance, arms outstretched.",
      "With elbows slightly bent, bring handles together in front of chest.",
      "Return slowly to starting position, feeling the stretch in the chest."
    ],
    "formCues": [
      "Lead with your elbows",
      "Slight bend at elbows",
      "Keep chest up",
      "Don’t let shoulders roll forward"
    ],
    "commonMistakes": [
      "Over-extending arms",
      "Letting elbows lock",
      "Rounding the back"
    ],
    "breathing": "Exhale as you bring hands together, inhale as you return."
  },
  "cable-standing-inner-curl": {
    "exerciseId": "cable-standing-inner-curl",
    "name": "Cable Standing Inner Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-standing-inner-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-standing-inner-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-standing-inner-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-standing-inner-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-standing-inner-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-standing-inner-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-standing-inner-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0229",
    "matchedExternalName": "Cable Standing Inner Curl",
    "confidence": "exact",
    "steps": [
      "Set a cable handle to the lowest position and stand facing the machine.",
      "Grab the handle with one hand using an underhand grip and let your arm hang straight by your side.",
      "Step back until the cable is taut, then stand tall with your feet about hip-width apart.",
      "Keep your elbow pinned near your side and curl the handle up toward your shoulder.",
      "Squeeze your biceps at the top without letting your upper arm drift forward.",
      "Lower the handle slowly until your arm is straight again, then repeat before switching sides."
    ],
    "formCues": [
      "Keep elbow by your side",
      "Curl, don't swing",
      "Stand tall",
      "Control the lowering"
    ],
    "commonMistakes": [
      "Elbow drifts forward during the curl",
      "Torso rocks back to move the weight",
      "Wrist bends excessively instead of staying neutral",
      "Letting the handle drop quickly on the way down"
    ],
    "breathing": "Exhale as you curl the handle up, and inhale as you lower it back down."
  },
  "cable-standing-lift": {
    "exerciseId": "cable-standing-lift",
    "name": "Cable Standing Lift",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-standing-lift.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-standing-lift.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-standing-lift.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-standing-lift.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-standing-lift.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-standing-lift.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-standing-lift.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0230",
    "matchedExternalName": "Cable Standing Lift",
    "confidence": "exact",
    "steps": [
      "Set the cable handle to a low position and stand side-on to the machine with your feet about shoulder-width apart.",
      "Hold the handle with both hands near the hip closest to the machine and straighten your arms with a soft bend in the elbows.",
      "Brace your core and turn your chest slightly toward the handle without rounding your back.",
      "Pull the handle diagonally up and across your body toward the opposite shoulder by rotating your torso and lifting your arms together.",
      "Pause briefly at the top with your hips mostly facing forward and your arms extended.",
      "Lower the handle back along the same diagonal path to the starting hip under control.",
      "Complete all reps on one side, then turn around and repeat on the other side."
    ],
    "formCues": [
      "Brace your core",
      "Rotate through your torso",
      "Keep arms long",
      "Control the return"
    ],
    "commonMistakes": [
      "Bending the elbows and turning it into an arm pull",
      "Twisting the knees inward instead of rotating the torso",
      "Leaning back or arching the lower back at the top",
      "Letting the weight snap back down without control"
    ],
    "breathing": "Inhale at the start, exhale as you lift and rotate across the body, then inhale as you return under control."
  },
  "cable-standing-one-arm-triceps-extension": {
    "exerciseId": "cable-standing-one-arm-triceps-extension",
    "name": "Cable Standing One Arm Triceps Extension",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-standing-one-arm-triceps-extension.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-standing-one-arm-triceps-extension.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-standing-one-arm-triceps-extension.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-standing-one-arm-triceps-extension.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-standing-one-arm-triceps-extension.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-standing-one-arm-triceps-extension.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-standing-one-arm-triceps-extension.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0231",
    "matchedExternalName": "Cable Standing One Arm Triceps Extension",
    "confidence": "exact",
    "steps": [
      "Stand side-on to the cable machine and grasp the handle with one hand.",
      "Step away until the cable is taut, then raise your upper arm so it stays roughly parallel to the floor.",
      "Bend your elbow to bring the handle toward the side of your head while keeping your upper arm still.",
      "Extend your elbow to press the handle away until your arm is straight.",
      "Pause briefly with your triceps tight, then return under control.",
      "Complete all reps on one side, then switch arms."
    ],
    "formCues": [
      "Keep elbow still",
      "Upper arm stays level",
      "Straighten the arm fully",
      "Move only at elbow"
    ],
    "commonMistakes": [
      "Letting the elbow drift up and down during the rep",
      "Turning the torso to help move the handle",
      "Dropping the upper arm instead of keeping it level",
      "Using momentum and snapping the cable back"
    ],
    "breathing": "Inhale as you bend your elbow and bring the handle in; exhale as you straighten your arm."
  },
  "cable-straight-arm-pulldown": {
    "exerciseId": "cable-straight-arm-pulldown",
    "name": "Cable Straight Arm Pulldown",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-straight-arm-pulldown.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-straight-arm-pulldown.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-straight-arm-pulldown.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-straight-arm-pulldown.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-straight-arm-pulldown.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-straight-arm-pulldown.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-straight-arm-pulldown.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0238",
    "matchedExternalName": "Cable Straight Arm Pulldown",
    "confidence": "exact",
    "steps": [
      "Attach a straight bar to a high cable pulley and face the machine.",
      "Grab the bar with an overhand grip, step back slightly, and hinge forward a little at the hips.",
      "Start with your arms straight in front of you at shoulder height and your torso braced.",
      "Pull the bar down in a wide arc toward your thighs without bending your elbows.",
      "Squeeze your lats at the bottom with the bar close to your hips.",
      "Raise the bar back up slowly to shoulder height while keeping your arms long and your torso still."
    ],
    "formCues": [
      "Arms long, elbows soft",
      "Pull with your lats",
      "Ribs down, core tight",
      "Stop at your thighs"
    ],
    "commonMistakes": [
      "Bending the elbows and turning it into a triceps pressdown",
      "Leaning back and using body swing to move the bar",
      "Shrugging the shoulders up toward the ears",
      "Letting the bar drift away from the body at the bottom"
    ],
    "breathing": "Inhale as the bar rises to the start, and exhale as you pull it down toward your thighs."
  },
  "cable-triceps-pushdown": {
    "exerciseId": "cable-triceps-pushdown",
    "name": "Cable Triceps Pushdown",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-triceps-pushdown.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-triceps-pushdown.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-triceps-pushdown.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-triceps-pushdown.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-triceps-pushdown.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-triceps-pushdown.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-triceps-pushdown.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1723",
    "matchedExternalName": "Cable Triceps Pushdown",
    "confidence": "exact",
    "steps": [
      "Stand facing the cable stack with attachment at high position.",
      "Grip the bar or rope with both hands.",
      "Keep elbows tight to your body.",
      "Push the attachment down until arms are fully extended.",
      "Return slowly to starting position."
    ],
    "formCues": [
      "Lock elbows at sides",
      "Control the movement",
      "Don’t let elbows drift",
      "Squeeze triceps at the bottom"
    ],
    "commonMistakes": [
      "Using too much weight",
      "Letting elbows flare out",
      "Leaning over the bar"
    ],
    "breathing": "Exhale as you push down, inhale as you return up."
  },
  "cable-twist-up-down": {
    "exerciseId": "cable-twist-up-down",
    "name": "Cable Twist (up-down)",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-twist-up-down.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-twist-up-down.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-twist-up-down.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-twist-up-down.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-twist-up-down.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-twist-up-down.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-twist-up-down.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0862",
    "matchedExternalName": "Cable Twist (up-down)",
    "confidence": "exact",
    "steps": [
      "Set the cable handle at about shoulder height and stand sideways to the machine with feet hip-width apart.",
      "Grab the handle with both hands and extend your arms in front of your chest with a soft bend in your elbows.",
      "Brace your core and rotate your torso away from the machine while guiding the handle diagonally down across your body.",
      "Keep your hips mostly still and finish with your hands near the outside of your opposite hip.",
      "Control the handle back to the start, then repeat all reps before switching sides or reverse the path to move from low to high."
    ],
    "formCues": [
      "Rotate through your ribs",
      "Keep hips quiet",
      "Move on a diagonal",
      "Brace before you twist"
    ],
    "commonMistakes": [
      "Turning the hips and feet with the cable",
      "Bending and straightening the elbows to move the weight",
      "Letting the cable yank the torso back",
      "Shrugging the shoulders toward the ears"
    ],
    "breathing": "Exhale as you rotate and pull the handle across your body; inhale as you return under control."
  },
  "calf-stretch-with-rope": {
    "exerciseId": "calf-stretch-with-rope",
    "name": "Calf Stretch with Rope",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-calf-stretch-with-rope.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-calf-stretch-with-rope.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-calf-stretch-with-rope.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-calf-stretch-with-rope.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-calf-stretch-with-rope.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-calf-stretch-with-rope.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-calf-stretch-with-rope.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1378",
    "matchedExternalName": "Calf Stretch with Rope",
    "confidence": "exact",
    "steps": [
      "Sit on the floor with one leg extended.",
      "Loop a rope or band around the ball of your foot.",
      "Hold ends of rope and gently pull your foot toward you.",
      "Keep knee straight for a deeper stretch.",
      "Hold the stretch and then switch legs."
    ],
    "formCues": [
      "Keep knee extended",
      "Pull gently",
      "Don’t bounce",
      "Relax into stretch"
    ],
    "commonMistakes": [
      "Bending the knee",
      "Jerking the rope",
      "Holding breath"
    ],
    "breathing": "Breathe deeply and relax throughout the stretch."
  },
  "calf-stretch-with-strap": {
    "exerciseId": "calf-stretch-with-strap",
    "name": "Calf Stretch with Strap",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-calf-stretch-with-strap.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-calf-stretch-with-strap.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-calf-stretch-with-strap.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-calf-stretch-with-strap.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-calf-stretch-with-strap.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-calf-stretch-with-strap.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-calf-stretch-with-strap.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1599",
    "matchedExternalName": "Calf Stretch with Strap",
    "confidence": "exact",
    "steps": [
      "Sit with legs extended on the floor.",
      "Loop a strap around the ball of one foot.",
      "Hold strap ends and gently pull foot towards you.",
      "Keep the knee straight and hold for desired time.",
      "Switch sides and repeat."
    ],
    "formCues": [
      "Keep knee straight",
      "Flex foot toward you",
      "Gentle pull, avoid jerking",
      "Sit tall"
    ],
    "commonMistakes": [
      "Bending knee",
      "Pulling too hard",
      "Letting back round"
    ],
    "breathing": "Breathe deeply and steadily throughout stretch; exhale gently as you deepen the stretch."
  },
  "cambered-bar-lying-row": {
    "exerciseId": "cambered-bar-lying-row",
    "name": "Cambered Bar Lying Row",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cambered-bar-lying-row.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cambered-bar-lying-row.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cambered-bar-lying-row.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cambered-bar-lying-row.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cambered-bar-lying-row.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cambered-bar-lying-row.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cambered-bar-lying-row.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0248",
    "matchedExternalName": "Cambered Bar Lying Row",
    "confidence": "exact",
    "steps": [
      "Place a barbell on the floor under the end of a flat bench and lie face down so your chest is supported with your arms hanging straight down.",
      "Plant your feet on the floor, brace your midsection, and grab the bar with an overhand grip slightly wider than shoulder width.",
      "Lift the bar clear of the floor and let it hang directly below your shoulders with your neck neutral.",
      "Pull the bar up toward the underside of the bench or lower chest by driving your elbows back.",
      "Pause briefly at the top and squeeze your shoulder blades together.",
      "Lower the bar under control until your arms are straight and the bar returns just above the floor."
    ],
    "formCues": [
      "Chest stays on bench",
      "Pull elbows back",
      "Squeeze shoulder blades",
      "Keep neck neutral"
    ],
    "commonMistakes": [
      "Lifting the chest off the bench to move the bar",
      "Shrugging the shoulders up toward the ears",
      "Yanking the bar off the floor with momentum",
      "Flaring the elbows straight out to the sides"
    ],
    "breathing": "Inhale as you lower the bar and exhale as you pull it up toward your chest."
  },
  "cardio-exercise": {
    "exerciseId": "cardio-exercise",
    "name": "Cardio Exercise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cardio-exercises.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cardio-exercises.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cardio-exercises.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cardio-exercises.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cardio-exercises.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cardio-exercises.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cardio-exercises.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-cardio-exercises",
    "matchedExternalName": "Cardio Exercise",
    "confidence": "exact",
    "steps": [
      "Select a cardio activity (running, jumping jacks, etc).",
      "Warm up for 3-5 minutes.",
      "Perform the chosen activity at a sustainable pace.",
      "Maintain movement for set time or rounds.",
      "Cool down and stretch afterwards."
    ],
    "formCues": [
      "Keep chest up",
      "Engage core",
      "Use full range of motion",
      "Breathe steadily"
    ],
    "commonMistakes": [
      "Overexerting too soon",
      "Neglecting form",
      "Ignoring proper warm-up or cool-down"
    ],
    "breathing": "Breathe rhythmically; exhale on exertion, inhale during lower intensity."
  },
  "cardio-machine-exercise": {
    "exerciseId": "cardio-machine-exercise",
    "name": "Cardio Machine Exercise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cardio-exercises-machine.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cardio-exercises-machine.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cardio-exercises-machine.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cardio-exercises-machine.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cardio-exercises-machine.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-cardio-exercises-machine",
    "matchedExternalName": "Cardio Machine Exercise",
    "confidence": "exact",
    "steps": [
      "Choose your preferred cardio machine (treadmill, bike, etc).",
      "Adjust resistance, incline, and settings as desired.",
      "Begin with a brief warm-up.",
      "Perform cardio at steady or variable intensity.",
      "Cool down after session."
    ],
    "formCues": [
      "Maintain upright posture",
      "Relax shoulders",
      "Use full range of motion",
      "Control your breathing"
    ],
    "commonMistakes": [
      "Slouching or poor posture",
      "Using excessive resistance or speed",
      "Neglecting warm-up or cool-down"
    ],
    "breathing": "Breathe rhythmically according to intensity; exhale during exertion, inhale during recovery."
  },
  "cardio-machine-workouts": {
    "exerciseId": "cardio-machine-workouts",
    "name": "Cardio Machine Workouts",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cardio-exercises-machines.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cardio-exercises-machines.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cardio-exercises-machines.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cardio-exercises-machines.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cardio-exercises-machines.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-cardio-exercises-machines",
    "matchedExternalName": "Cardio Machine Workouts",
    "confidence": "exact",
    "steps": [
      "Select a cardio machine suitable for your fitness level.",
      "Adjust settings such as resistance, speed, and incline as desired.",
      "Begin movement, focusing on steady pace and good posture.",
      "Continue for your planned duration, monitoring intensity.",
      "Cool down gradually and safely exit the machine."
    ],
    "formCues": [
      "Maintain upright posture",
      "Use full range of motion",
      "Monitor intensity",
      "Keep steady pace"
    ],
    "commonMistakes": [
      "Poor posture",
      "Jumping on or off quickly",
      "Overexerting too quickly"
    ],
    "breathing": "Breathe steadily throughout the workout."
  },
  "chest-dips": {
    "exerciseId": "chest-dips",
    "name": "Chest Dips",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/chest-dips.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/chest-dips.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/chest-dips.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/chest-dips.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/chest-dips.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/chest-dips.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/chest-dips.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-chest-dips",
    "matchedExternalName": "Chest Dips",
    "confidence": "exact",
    "steps": [
      "Grip parallel bars and lift to start.",
      "Lean torso forward and bend elbows.",
      "Lower until upper arms are parallel to floor.",
      "Pause at the bottom, feeling the stretch.",
      "Push up through palms, returning to start."
    ],
    "formCues": [
      "Lean forward",
      "Keep elbows out to sides",
      "Descend under control",
      "Avoid locking elbows at top"
    ],
    "commonMistakes": [
      "Staying too upright (triceps focus)",
      "Going too deep",
      "Flaring elbows excessively"
    ],
    "breathing": "Inhale as you lower, exhale as you press up."
  },
  "chest-lift-with-rotation": {
    "exerciseId": "chest-lift-with-rotation",
    "name": "Chest Lift with Rotation",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/chest-lift-with-rotation.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/chest-lift-with-rotation.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/chest-lift-with-rotation.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/chest-lift-with-rotation.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/chest-lift-with-rotation.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-chest-lift-with-rotation",
    "matchedExternalName": "Chest Lift with Rotation",
    "confidence": "exact",
    "steps": [
      "Lie on your back, knees bent, feet flat on floor.",
      "Place hands behind head, elbows wide.",
      "Engage core and lift head, neck, and shoulders off mat.",
      "Rotate torso to one side while lifting.",
      "Return to center and lower down; repeat on alternate side."
    ],
    "formCues": [
      "Twist from core",
      "Don't pull on neck",
      "Elbows wide",
      "Exhale on lift"
    ],
    "commonMistakes": [
      "Pulling on neck",
      "Using arms to assist",
      "Lifting too high",
      "Not engaging core"
    ],
    "breathing": "Exhale as you lift and rotate, inhale as you lower."
  },
  "chin-to-chest-stretch": {
    "exerciseId": "chin-to-chest-stretch",
    "name": "Chin-to-Chest Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-chin-to-chest-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-chin-to-chest-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-chin-to-chest-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-chin-to-chest-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-chin-to-chest-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-chin-to-chest-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-chin-to-chest-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-chin-to-chest-stretch",
    "matchedExternalName": "Chin-to-Chest Stretch",
    "confidence": "exact",
    "steps": [
      "Sit or stand with a straight back.",
      "Gently lower your chin toward your chest.",
      "Relax your shoulders and feel the stretch along your neck.",
      "Hold the position for 15-30 seconds.",
      "Slowly return to neutral."
    ],
    "formCues": [
      "Move slowly",
      "Keep shoulders relaxed",
      "Do not force the stretch",
      "Hold gently"
    ],
    "commonMistakes": [
      "Bouncing the stretch",
      "Tensing shoulders",
      "Overstretching the neck"
    ],
    "breathing": "Breathe deeply and evenly throughout the stretch."
  },
  "chin-ups-narrow-parallel-grip": {
    "exerciseId": "chin-ups-narrow-parallel-grip",
    "name": "Chin-ups (narrow parallel grip)",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/chin-ups-narrow-parallel-grip.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/chin-ups-narrow-parallel-grip.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/chin-ups-narrow-parallel-grip.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/chin-ups-narrow-parallel-grip.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/chin-ups-narrow-parallel-grip.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/chin-ups-narrow-parallel-grip.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/chin-ups-narrow-parallel-grip.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0253",
    "matchedExternalName": "Chin-ups (narrow parallel grip)",
    "confidence": "exact",
    "steps": [
      "Grab the parallel handles with a narrow neutral grip and hang with your arms straight.",
      "Cross your ankles or keep your legs still, then brace your midline and pull your shoulders down away from your ears.",
      "Pull your elbows down and back to lift your chest toward your hands.",
      "Keep pulling until your chin rises above your hands or handles.",
      "Lower yourself under control until your arms are straight again.",
      "Pause briefly at the bottom without relaxing your shoulders, then repeat."
    ],
    "formCues": [
      "Drive elbows to ribs",
      "Chest up to handles",
      "Keep shoulders down",
      "Lower with control"
    ],
    "commonMistakes": [
      "Shrugging the shoulders up toward the ears while pulling.",
      "Swinging the legs or kipping to get upward.",
      "Stopping short with the chin below the hands.",
      "Dropping quickly to the bottom without control."
    ],
    "breathing": "Inhale at the bottom before you pull, exhale as you lift yourself up, and inhale again as you lower under control."
  },
  "close-feet-leg-press": {
    "exerciseId": "close-feet-leg-press",
    "name": "Close Feet Leg Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/close-feet-leg-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/close-feet-leg-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/close-feet-leg-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/close-feet-leg-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/close-feet-leg-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/close-feet-leg-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/close-feet-leg-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-close-feet-leg-press",
    "matchedExternalName": "Close Feet Leg Press",
    "confidence": "exact",
    "steps": [
      "Sit in the leg press machine with feet close together on the platform.",
      "Adjust seat and foot placement for comfort and safety.",
      "Release safety handles and grip the handles for support.",
      "Extend your knees to press the weight upward.",
      "Lower platform slowly back to starting position."
    ],
    "formCues": [
      "Keep knees aligned with toes",
      "Do not lock out knees",
      "Lower with control",
      "Keep back and hips against pad"
    ],
    "commonMistakes": [
      "Letting knees collapse inward",
      "Allowing heels to lift",
      "Shortening range of motion"
    ],
    "breathing": "Exhale as you press up, inhale as you lower down."
  },
  "close-grip-chin-up": {
    "exerciseId": "close-grip-chin-up",
    "name": "Close Grip Chin-Up",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/close-grip-chin-up.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/close-grip-chin-up.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/close-grip-chin-up.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/close-grip-chin-up.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/close-grip-chin-up.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/close-grip-chin-up.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/close-grip-chin-up.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "2987",
    "matchedExternalName": "Close Grip Chin-Up",
    "confidence": "exact",
    "steps": [
      "Grab the pull-up bar with an underhand grip, hands shoulder-width or slightly closer.",
      "Hang at full arm extension, engage your core and back.",
      "Pull your chest towards the bar by driving your elbows down and back.",
      "Clear the bar with your chin, pause briefly at the top.",
      "Lower yourself with control until arms are fully extended."
    ],
    "formCues": [
      "Squeeze shoulder blades",
      "Drive elbows down",
      "Keep core tight",
      "Avoid swinging"
    ],
    "commonMistakes": [
      "Using momentum",
      "Flaring elbows out",
      "Partial range of motion"
    ],
    "breathing": "Exhale as you pull up, inhale as you lower down."
  },
  "close-grip-push-up": {
    "exerciseId": "close-grip-push-up",
    "name": "Close-Grip Push-Up",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/close-grip-push-ups.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/close-grip-push-ups.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/close-grip-push-ups.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/close-grip-push-ups.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/close-grip-push-ups.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/close-grip-push-ups.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/close-grip-push-ups.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0259",
    "matchedExternalName": "Close-Grip Push-Up",
    "confidence": "exact",
    "steps": [
      "Begin in a plank position with hands close together under your chest.",
      "Keep your core tight and body in a straight line.",
      "Lower your chest toward the hands, elbows tucked by your sides.",
      "Pause briefly at the bottom without touching the floor.",
      "Press up to the starting position."
    ],
    "formCues": [
      "Tuck elbows",
      "Keep hands under chest",
      "Maintain straight body",
      "Squeeze triceps at the top"
    ],
    "commonMistakes": [
      "Letting elbows flare",
      "Sagging hips",
      "Hands too wide"
    ],
    "breathing": "Inhale as you lower down, exhale as you push up."
  },
  "commando-pull-up": {
    "exerciseId": "commando-pull-up",
    "name": "Commando Pull-Up",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/commando-pull-up.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/commando-pull-up.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/commando-pull-up.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/commando-pull-up.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/commando-pull-up.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/commando-pull-up.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/commando-pull-up.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-commando-pull-up",
    "matchedExternalName": "Commando Pull-Up",
    "confidence": "exact",
    "steps": [
      "Stand under a pull-up bar and grip it with hands facing each other, one in front of the other.",
      "Hang with your body turned so the bar is directly in front of your face.",
      "Brace your core and pull up, bringing your head to one side of the bar.",
      "Lower yourself under control back to the starting position.",
      "Repeat, bringing your head to the opposite side on the next rep."
    ],
    "formCues": [
      "Keep body tight",
      "Alternate sides",
      "Control descent",
      "Avoid swinging"
    ],
    "commonMistakes": [
      "Losing control at bottom",
      "Letting body swing",
      "Not clearing chin to side",
      "Uneven pull strength"
    ],
    "breathing": "Exhale as you pull up, inhale as you lower down."
  },
  "crossover-kneeling-hip-flexor-stretch": {
    "exerciseId": "crossover-kneeling-hip-flexor-stretch",
    "name": "Crossover Kneeling Hip Flexor Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-crossover-kneeling-hip-flexor-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-crossover-kneeling-hip-flexor-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-crossover-kneeling-hip-flexor-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-crossover-kneeling-hip-flexor-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-crossover-kneeling-hip-flexor-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-crossover-kneeling-hip-flexor-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-crossover-kneeling-hip-flexor-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-crossover-kneeling-hip-flexor-stretch",
    "matchedExternalName": "Crossover Kneeling Hip Flexor Stretch",
    "confidence": "exact",
    "steps": [
      "Start in a kneeling lunge with one knee on the ground and the opposite foot forward.",
      "Tuck the pelvis under and shift your weight forward, feeling a stretch in the hip flexor of the rear leg.",
      "Rotate your torso across the body, away from the back leg.",
      "Hold for 20-30 seconds, breathing steadily.",
      "Release and repeat on the other side."
    ],
    "formCues": [
      "Keep torso upright",
      "Engage glutes",
      "Rotate gently",
      "Hips square"
    ],
    "commonMistakes": [
      "Arching the back",
      "Letting front knee collapse inward",
      "Leaning forward excessively"
    ],
    "breathing": "Inhale to prepare, exhale as you rotate and deepen stretch."
  },
  "decline-dumbbell-bench-press": {
    "exerciseId": "decline-dumbbell-bench-press",
    "name": "Decline Dumbbell Bench Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/decline-dumbbell-bench-press-45-degree.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/decline-dumbbell-bench-press-45-degree.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/decline-dumbbell-bench-press-45-degree.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/decline-dumbbell-bench-press-45-degree.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/decline-dumbbell-bench-press-45-degree.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/decline-dumbbell-bench-press-45-degree.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/decline-dumbbell-bench-press-45-degree.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0301",
    "matchedExternalName": "Decline Dumbbell Bench Press",
    "confidence": "exact",
    "steps": [
      "Set a bench to a 45-degree decline angle.",
      "Secure feet, lie back holding dumbbells over chest.",
      "Lower dumbbells to the sides of your chest.",
      "Pause at the bottom.",
      "Press weights back to starting position."
    ],
    "formCues": [
      "Control lowering phase",
      "Do not let elbows flare",
      "Keep wrists straight",
      "Press through the heels"
    ],
    "commonMistakes": [
      "Dropping elbows too low",
      "Using uneven range",
      "Arching lower back",
      "Rushed reps"
    ],
    "breathing": "Inhale as you lower the dumbbells, exhale as you press up."
  },
  "decline-dumbbell-fly": {
    "exerciseId": "decline-dumbbell-fly",
    "name": "Decline Dumbbell Fly",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-decline-fly-45-degree-1.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-decline-fly-45-degree-1.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-decline-fly-45-degree-1.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-decline-fly-45-degree-1.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-decline-fly-45-degree-1.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0302",
    "matchedExternalName": "Decline Dumbbell Fly",
    "confidence": "exact",
    "steps": [
      "Set bench to 45-degree decline, secure feet.",
      "Lie back, arms extended above chest, slight bend in elbows.",
      "Lower dumbbells in a wide arc to sides.",
      "Pause at bottom for a stretch.",
      "Return dumbbells to starting position, squeezing chest."
    ],
    "formCues": [
      "Arms slightly bent",
      "Big arc motion",
      "Don't overstretch",
      "Squeeze at top"
    ],
    "commonMistakes": [
      "Straightening arms",
      "Dropping dumbbells too low",
      "Using too much weight",
      "Rushing the rep"
    ],
    "breathing": "Inhale as you open arms, exhale as you bring weights together."
  },
  "deep-push-up": {
    "exerciseId": "deep-push-up",
    "name": "Deep Push-Up",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/deep-push-ups.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/deep-push-ups.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/deep-push-ups.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/deep-push-ups.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/deep-push-ups.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/deep-push-ups.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/deep-push-ups.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1274",
    "matchedExternalName": "Deep Push-Up",
    "confidence": "exact",
    "steps": [
      "Place hands on elevated surfaces shoulder-width apart.",
      "Assume a plank position with tight core and straight body.",
      "Lower your chest between your hands, dipping below hand level.",
      "Pause at the bottom, feeling a deep stretch in the chest.",
      "Push up powerfully until arms are extended."
    ],
    "formCues": [
      "Keep elbows at 45 degrees",
      "Lower chest below hands",
      "Maintain a straight line",
      "Engage your core"
    ],
    "commonMistakes": [
      "Sagging hips",
      "Flaring elbows",
      "Not going deep enough",
      "Letting shoulders round"
    ],
    "breathing": "Inhale as you lower down, exhale as you push up."
  },
  "donkey-calf-raise": {
    "exerciseId": "donkey-calf-raise",
    "name": "Donkey Calf Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/donkey-calf-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/donkey-calf-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/donkey-calf-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/donkey-calf-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/donkey-calf-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/donkey-calf-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/donkey-calf-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0284",
    "matchedExternalName": "Donkey Calf Raise",
    "confidence": "exact",
    "steps": [
      "Stand with the balls of your feet on the edge of a step or block and let your heels hang off.",
      "Hinge forward at your hips and place your hands on a stable support for balance.",
      "Keep your knees slightly bent and lower your heels until you feel a stretch in your calves.",
      "Press through the balls of your feet and lift your heels as high as you can.",
      "Pause briefly at the top while staying balanced.",
      "Lower your heels back down with control and repeat."
    ],
    "formCues": [
      "Lift heels straight up",
      "Move through full range",
      "Press through big toe",
      "Lower with control"
    ],
    "commonMistakes": [
      "Bouncing at the bottom instead of lowering under control",
      "Rolling the ankles inward or outward",
      "Using the hands to push the body up",
      "Cutting the range short and not dropping the heels"
    ],
    "breathing": "Inhale as you lower your heels, and exhale as you press up onto the balls of your feet."
  },
  "dumbbell-alternating-shoulder-press": {
    "exerciseId": "dumbbell-alternating-shoulder-press",
    "name": "Dumbbell Alternating Shoulder Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-alternate-shoulder-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-alternate-shoulder-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-alternate-shoulder-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-alternate-shoulder-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-alternate-shoulder-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-alternate-shoulder-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-alternate-shoulder-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0361",
    "matchedExternalName": "Dumbbell Alternating Shoulder Press",
    "confidence": "exact",
    "steps": [
      "Hold dumbbells at shoulder level, palms facing forward.",
      "Brace your core and press one dumbbell overhead until arm is fully extended.",
      "Lower to shoulder height as you press the opposite dumbbell overhead.",
      "Continue alternating arms with each rep.",
      "Maintain upright posture and avoid arching back."
    ],
    "formCues": [
      "No arching",
      "Core tight",
      "Elbow under wrist",
      "Smooth transition"
    ],
    "commonMistakes": [
      "Leaning to side",
      "Pressing both at once",
      "Shrugging shoulders"
    ],
    "breathing": "Exhale pressing up, inhale lowering down."
  },
  "dumbbell-arnold-press": {
    "exerciseId": "dumbbell-arnold-press",
    "name": "Dumbbell Arnold Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-arnold-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-arnold-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-arnold-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-arnold-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-arnold-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-arnold-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-arnold-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "2137",
    "matchedExternalName": "Dumbbell Arnold Press",
    "confidence": "exact",
    "steps": [
      "Sit tall on a bench with back support and plant your feet on the floor.",
      "Hold a dumbbell in each hand in front of your shoulders with palms facing you and elbows bent.",
      "Brace your midline and press the dumbbells upward while rotating your palms outward.",
      "Finish overhead with arms straight and palms facing forward.",
      "Lower the dumbbells under control while rotating your palms back toward you.",
      "Return to the start with dumbbells in front of your shoulders and repeat."
    ],
    "formCues": [
      "Press and rotate smoothly",
      "Keep ribs down",
      "Wrists stacked over elbows",
      "Finish biceps by ears"
    ],
    "commonMistakes": [
      "Arching the lower back as the dumbbells go overhead",
      "Letting the elbows flare straight out at the bottom",
      "Pressing the dumbbells up without rotating the hands",
      "Lowering the dumbbells too fast and losing control"
    ],
    "breathing": "Inhale at the bottom, exhale as you press and rotate overhead, then inhale as you lower back down."
  },
  "dumbbell-behind-the-back-wrist-curl": {
    "exerciseId": "dumbbell-behind-the-back-wrist-curl",
    "name": "Dumbbell Behind-the-Back Wrist Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-behind-back-wrist-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-behind-back-wrist-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-behind-back-wrist-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-behind-back-wrist-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-behind-back-wrist-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-behind-back-wrist-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-behind-back-wrist-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0364",
    "matchedExternalName": "Dumbbell Behind-the-Back Wrist Curl",
    "confidence": "exact",
    "steps": [
      "Stand with dumbbell held behind your back, arm straight, palm facing backward.",
      "Allow the dumbbell to roll down your fingers slightly.",
      "Flex your wrist to curl the dumbbell up.",
      "Squeeze at the top of the movement.",
      "Lower the weight back down slowly."
    ],
    "formCues": [
      "Wrist only",
      "Don’t swing arm",
      "Full wrist flexion",
      "Controlled lowering"
    ],
    "commonMistakes": [
      "Using arm instead of wrist",
      "Incomplete range",
      "Jerking movement"
    ],
    "breathing": "Exhale during curl, inhale lowering down."
  },
  "dumbbell-bent-over-row": {
    "exerciseId": "dumbbell-bent-over-row",
    "name": "Dumbbell Bent-Over Row",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-bent-over-row.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-bent-over-row.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-bent-over-row.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-bent-over-row.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-bent-over-row.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-bent-over-row.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-bent-over-row.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0293",
    "matchedExternalName": "Dumbbell Bent-Over Row",
    "confidence": "exact",
    "steps": [
      "Stand with feet shoulder-width apart holding dumbbells.",
      "Hinge at hips, keeping back flat and chest up.",
      "Let arms hang straight down, palms facing each other.",
      "Pull dumbbells to your sides, elbows close to body.",
      "Lower the weights under control to starting position."
    ],
    "formCues": [
      "Flat back",
      "Lead with elbows",
      "Engage core",
      "Squeeze shoulder blades"
    ],
    "commonMistakes": [
      "Rounding the back",
      "Jerking the weights",
      "Not fully extending arms",
      "Using biceps too much"
    ],
    "breathing": "Exhale as you row up, inhale as you lower down."
  },
  "dumbbell-biceps-curl": {
    "exerciseId": "dumbbell-biceps-curl",
    "name": "Dumbbell Biceps Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-biceps-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-biceps-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-biceps-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-biceps-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-biceps-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-biceps-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-biceps-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0294",
    "matchedExternalName": "Dumbbell Biceps Curl",
    "confidence": "exact",
    "steps": [
      "Stand tall with a dumbbell in each hand, arms at your sides, and palms facing forward.",
      "Brace your torso and keep your elbows close to your ribs.",
      "Curl both dumbbells up toward your shoulders without letting your upper arms swing forward.",
      "Pause briefly at the top and squeeze your biceps.",
      "Lower the dumbbells back down under control until your arms are straight."
    ],
    "formCues": [
      "Elbows pinned to sides",
      "Curl, don't swing",
      "Squeeze at the top",
      "Lower with control"
    ],
    "commonMistakes": [
      "Swinging the torso to start the curl",
      "Letting the elbows drift forward as the weights rise",
      "Using partial range and not lowering fully",
      "Bending the wrists back instead of keeping them neutral"
    ],
    "breathing": "Exhale as you curl the dumbbells up, and inhale as you lower them back down."
  },
  "dumbbell-close-grip-press": {
    "exerciseId": "dumbbell-close-grip-press",
    "name": "Dumbbell Close-Grip Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-close-grip-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-close-grip-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-close-grip-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-close-grip-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-close-grip-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-close-grip-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-close-grip-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0296",
    "matchedExternalName": "Dumbbell Close-Grip Press",
    "confidence": "exact",
    "steps": [
      "Lie flat on a bench with a dumbbell in each hand.",
      "Hold dumbbells together above chest, palms in.",
      "Lower dumbbells toward sternum, elbows tight to torso.",
      "Pause when elbows reach 90 degrees.",
      "Press dumbbells back up by extending arms."
    ],
    "formCues": [
      "Keep elbows close",
      "Touch dumbbells together",
      "Press through palms",
      "Own the descent"
    ],
    "commonMistakes": [
      "Flaring elbows out",
      "Letting dumbbells drift apart",
      "Arching back excessively",
      "Lowering weights too far"
    ],
    "breathing": "Inhale as you lower the dumbbells, exhale as you press up."
  },
  "dumbbell-concentration-curl": {
    "exerciseId": "dumbbell-concentration-curl",
    "name": "Dumbbell Concentration Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-concentration-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-concentration-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-concentration-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-concentration-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-concentration-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-concentration-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-concentration-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0297",
    "matchedExternalName": "Dumbbell Concentration Curl",
    "confidence": "exact",
    "steps": [
      "Sit on a bench with your feet flat and knees apart, holding a dumbbell in one hand.",
      "Lean forward slightly and brace the back of your upper arm against the inside of your same-side thigh near the knee.",
      "Let your arm hang straight down with your palm facing up and your wrist neutral.",
      "Curl the dumbbell toward your same-side shoulder without moving your upper arm.",
      "Squeeze your biceps at the top when your forearm is nearly vertical.",
      "Lower the dumbbell slowly until your elbow is fully extended, then repeat and switch sides."
    ],
    "formCues": [
      "Keep elbow glued to thigh",
      "Curl only at the elbow",
      "Palm stays facing up",
      "Lower with control"
    ],
    "commonMistakes": [
      "Lifting the elbow off the thigh during the curl",
      "Swinging the torso to help raise the dumbbell",
      "Cutting the rep short and not fully lowering",
      "Bending the wrist back instead of keeping it neutral"
    ],
    "breathing": "Inhale as you lower the dumbbell and exhale as you curl it up."
  },
  "dumbbell-cross-body-hammer-curl": {
    "exerciseId": "dumbbell-cross-body-hammer-curl",
    "name": "Dumbbell Cross Body Hammer Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-cross-body-hammer-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-cross-body-hammer-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-cross-body-hammer-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-cross-body-hammer-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-cross-body-hammer-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-cross-body-hammer-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-cross-body-hammer-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0298",
    "matchedExternalName": "Dumbbell Cross Body Hammer Curl",
    "confidence": "exact",
    "steps": [
      "Stand tall holding a dumbbell in each hand at your sides with your palms facing inward.",
      "Brace your torso and keep your elbows pinned close to your ribs.",
      "Curl one dumbbell diagonally across your body toward the opposite shoulder without swinging.",
      "Pause briefly near shoulder height while keeping your wrist straight and palm facing inward.",
      "Lower the dumbbell back to your side under control.",
      "Repeat on the other arm, alternating sides."
    ],
    "formCues": [
      "Elbows stay tucked",
      "Curl across, not straight up",
      "Keep wrists neutral",
      "Don't swing the weight"
    ],
    "commonMistakes": [
      "Swinging the torso or leaning back to lift the dumbbell",
      "Letting the elbow drift forward away from the ribs",
      "Twisting the wrist so the palm turns up at the top",
      "Dropping the dumbbell quickly instead of lowering with control"
    ],
    "breathing": "Exhale as you curl the dumbbell across your body, and inhale as you lower it back down."
  },
  "dumbbell-deadlift": {
    "exerciseId": "dumbbell-deadlift",
    "name": "Dumbbell Deadlift",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-deadlift.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-deadlift.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-deadlift.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-deadlift.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-deadlift.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-deadlift.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-deadlift.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0300",
    "matchedExternalName": "Dumbbell Deadlift",
    "confidence": "exact",
    "steps": [
      "Stand tall with your feet hip- to shoulder-width apart, holding a dumbbell in each hand in front of your thighs.",
      "Brace your midsection, pull your shoulders back, and keep your arms straight.",
      "Push your hips back and bend your knees slightly as you slide the dumbbells down close to your legs.",
      "Lower until the dumbbells reach around mid-shin or just below your knees while keeping your back flat.",
      "Drive through your feet and push your hips forward to stand back up with the dumbbells at your thighs.",
      "Finish tall with your hips and knees straight, then repeat the hinge."
    ],
    "formCues": [
      "Hips back first",
      "Keep dumbbells close",
      "Chest proud",
      "Stand tall at top"
    ],
    "commonMistakes": [
      "Rounding the lower back as the dumbbells lower",
      "Letting the dumbbells drift far in front of the legs",
      "Squatting straight down instead of hinging the hips back",
      "Locking the knees rigid or overbending them"
    ],
    "breathing": "Inhale as you lower the dumbbells with control, and exhale as you drive through your feet to stand up."
  },
  "dumbbell-fly": {
    "exerciseId": "dumbbell-fly",
    "name": "Dumbbell Fly",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-fly.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-fly.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-fly.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-fly.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-fly.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-fly.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-fly.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0308",
    "matchedExternalName": "Dumbbell Fly",
    "confidence": "exact",
    "steps": [
      "Lie flat on a bench holding a dumbbell in each hand, and plant your feet on the floor.",
      "Press the dumbbells above your chest with your palms facing each other and soften your elbows slightly.",
      "Lower both arms out to the sides in a wide arc until your elbows reach about chest level.",
      "Pause briefly at the bottom while keeping the same elbow bend.",
      "Squeeze your chest and bring the dumbbells back together over your chest along the same arc."
    ],
    "formCues": [
      "Hug a wide barrel",
      "Keep elbows softly bent",
      "Lower with control",
      "Squeeze chest at the top"
    ],
    "commonMistakes": [
      "Bending and straightening the elbows like a press",
      "Lowering the dumbbells too far below chest level",
      "Bringing the dumbbells together by shrugging the shoulders forward",
      "Dropping the arms quickly instead of controlling the arc"
    ],
    "breathing": "Inhale as you lower the dumbbells out to the sides, and exhale as you bring them back together over your chest."
  },
  "dumbbell-fly-on-exercise-ball": {
    "exerciseId": "dumbbell-fly-on-exercise-ball",
    "name": "Dumbbell Fly On Exercise Ball",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-fly-on-exercise-ball.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-fly-on-exercise-ball.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-fly-on-exercise-ball.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-fly-on-exercise-ball.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-fly-on-exercise-ball.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-fly-on-exercise-ball.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-fly-on-exercise-ball.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1277",
    "matchedExternalName": "Dumbbell Fly On Exercise Ball",
    "confidence": "exact",
    "steps": [
      "Sit on the exercise ball holding a dumbbell in each hand at your thighs.",
      "Walk your feet forward and roll down until your head, neck, and upper back rest on the ball, then lift your hips so your torso is level.",
      "Press the dumbbells above your chest with your palms facing each other and your elbows slightly bent.",
      "Lower your arms out to the sides in a wide arc while keeping the same small bend in your elbows.",
      "Stop when your upper arms are roughly in line with your torso and your chest feels stretched.",
      "Bring the dumbbells back together over your chest along the same arc and squeeze your chest at the top."
    ],
    "formCues": [
      "Keep hips up",
      "Soft bend in elbows",
      "Open wide, not too low",
      "Bring bells together smoothly"
    ],
    "commonMistakes": [
      "Letting the hips sag below the torso",
      "Turning the movement into a press by bending the elbows too much",
      "Lowering the dumbbells far below chest level",
      "Shrugging the shoulders up toward the ears"
    ],
    "breathing": "Inhale as you lower the dumbbells out to the sides, and exhale as you bring them back together over your chest."
  },
  "dumbbell-front-raise": {
    "exerciseId": "dumbbell-front-raise",
    "name": "Dumbbell Front Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-front-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-front-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-front-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-front-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-front-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-front-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-front-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0310",
    "matchedExternalName": "Dumbbell Front Raise",
    "confidence": "exact",
    "steps": [
      "Stand tall with a dumbbell in each hand at your thighs, palms facing your legs.",
      "Brace your torso and keep a soft bend in your elbows.",
      "Raise both dumbbells straight in front of you until your hands reach about shoulder height.",
      "Pause briefly without shrugging your shoulders.",
      "Lower the dumbbells back to your thighs with control.",
      "Repeat from a still, upright stance."
    ],
    "formCues": [
      "Lift to shoulder height",
      "Keep ribs down",
      "Lead with your hands",
      "Don't shrug up"
    ],
    "commonMistakes": [
      "Swinging the dumbbells up with the hips or torso.",
      "Lifting the weights higher than shoulder level.",
      "Shrugging the shoulders toward the ears.",
      "Bending the elbows more as the weights rise."
    ],
    "breathing": "Exhale as you raise the dumbbells, and inhale as you lower them back down with control."
  },
  "dumbbell-goblet-squat": {
    "exerciseId": "dumbbell-goblet-squat",
    "name": "Dumbbell Goblet Squat",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-goblet-squat.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-goblet-squat.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-goblet-squat.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-goblet-squat.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-goblet-squat.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-goblet-squat.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-goblet-squat.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1760",
    "matchedExternalName": "Dumbbell Goblet Squat",
    "confidence": "exact",
    "steps": [
      "Stand tall with your feet about shoulder-width apart and hold one dumbbell vertically at your chest with both hands.",
      "Brace your midsection and keep your elbows pointed down close to your body.",
      "Sit your hips down and back while bending your knees, and lower until your thighs are parallel to the floor or slightly lower.",
      "Keep the dumbbell tight to your chest and your feet flat as your knees track over your toes.",
      "Drive through your whole foot to stand back up until your hips and knees are fully extended.",
      "Reset your stance and repeat the next rep."
    ],
    "formCues": [
      "Chest up",
      "Keep heels down",
      "Knees track over toes",
      "Hold the bell close"
    ],
    "commonMistakes": [
      "Letting the dumbbell drift away from the chest",
      "Heels lifting off the floor at the bottom",
      "Knees collapsing inward during the squat",
      "Folding the chest forward instead of staying upright"
    ],
    "breathing": "Inhale as you lower into the squat, and exhale as you stand back up."
  },
  "dumbbell-hammer-grip-incline-bench-row": {
    "exerciseId": "dumbbell-hammer-grip-incline-bench-row",
    "name": "Dumbbell Hammer Grip Incline Bench Row",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-hammer-grip-incline-bench-row.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-hammer-grip-incline-bench-row.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-hammer-grip-incline-bench-row.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-hammer-grip-incline-bench-row.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-hammer-grip-incline-bench-row.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-hammer-grip-incline-bench-row.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-hammer-grip-incline-bench-row.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1330",
    "matchedExternalName": "Dumbbell Hammer Grip Incline Bench Row",
    "confidence": "exact",
    "steps": [
      "Set an incline bench to 30-45 degrees and lie facedown with dumbbells.",
      "Hold the dumbbells with palms facing each other (neutral/hammer grip).",
      "Pull the dumbbells up toward your hips, elbows close to your body.",
      "Pause and contract your back muscles at the top.",
      "Lower the weights slowly with control."
    ],
    "formCues": [
      "Chest on bench",
      "Elbows tight",
      "No shrugging",
      "Full squeeze"
    ],
    "commonMistakes": [
      "Letting chest leave bench",
      "Over-rowing with biceps",
      "Shrugging shoulders"
    ],
    "breathing": "Exhale pulling up, inhale lowering down."
  },
  "dumbbell-incline-bench-press": {
    "exerciseId": "dumbbell-incline-bench-press",
    "name": "Dumbbell Incline Bench Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-bench-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-bench-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-bench-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-bench-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-incline-bench-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-bench-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-incline-bench-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0314",
    "matchedExternalName": "Dumbbell Incline Bench Press",
    "confidence": "exact",
    "steps": [
      "Set an incline bench and sit back with a dumbbell in each hand resting on your thighs.",
      "Lie back on the bench and bring the dumbbells to chest level with your palms facing forward.",
      "Plant your feet on the floor and position your elbows slightly below shoulder height.",
      "Press the dumbbells up over your upper chest until your arms are straight.",
      "Lower the dumbbells under control to the sides of your upper chest.",
      "Repeat by pressing back up along the same path."
    ],
    "formCues": [
      "Keep wrists stacked",
      "Drive feet into floor",
      "Lower with control",
      "Press over upper chest"
    ],
    "commonMistakes": [
      "Flaring the elbows straight out to the sides",
      "Letting the dumbbells drift toward the face",
      "Bouncing the dumbbells off the chest position",
      "Arching the lower back off the bench"
    ],
    "breathing": "Inhale as you lower the dumbbells, and exhale as you press them up."
  },
  "dumbbell-incline-biceps-curl": {
    "exerciseId": "dumbbell-incline-biceps-curl",
    "name": "Dumbbell Incline Biceps Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-biceps-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-biceps-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-biceps-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-biceps-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-incline-biceps-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-biceps-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-incline-biceps-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0322",
    "matchedExternalName": "Dumbbell Incline Biceps Curl",
    "confidence": "exact",
    "steps": [
      "Set the bench to a 45-60 degree incline and sit back with a dumbbell in each hand.",
      "Let your arms hang fully extended at your sides, elbows near your body.",
      "Curl the dumbbells up by flexing your elbows, keeping upper arms stationary.",
      "Pause and squeeze your biceps at the top of the movement.",
      "Lower the weights under control to the starting position."
    ],
    "formCues": [
      "Keep elbows still",
      "Let arms fully extend",
      "Do not swing weights",
      "Squeeze at the top"
    ],
    "commonMistakes": [
      "Swinging arms for momentum",
      "Elbows drifting forward",
      "Partial range of motion"
    ],
    "breathing": "Exhale as you curl up, inhale as you lower down."
  },
  "dumbbell-incline-curl": {
    "exerciseId": "dumbbell-incline-curl",
    "name": "Dumbbell Incline Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-incline-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-incline-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0318",
    "matchedExternalName": "Dumbbell Incline Curl",
    "confidence": "exact",
    "steps": [
      "Set an incline bench and sit back with a dumbbell in each hand.",
      "Let your arms hang straight down under your shoulders with your palms facing forward.",
      "Keep your upper arms still and curl the dumbbells toward your shoulders.",
      "Pause briefly at the top and squeeze your biceps.",
      "Lower the dumbbells slowly until your elbows are fully straight again."
    ],
    "formCues": [
      "Keep elbows still",
      "Palms stay forward",
      "Lift with the biceps",
      "Lower under control"
    ],
    "commonMistakes": [
      "Swinging the dumbbells to start the curl",
      "Letting the elbows drift forward as the weights rise",
      "Stopping short instead of fully lowering the dumbbells",
      "Bending the wrists back while curling"
    ],
    "breathing": "Inhale as you lower the dumbbells and exhale as you curl them up."
  },
  "dumbbell-incline-fly": {
    "exerciseId": "dumbbell-incline-fly",
    "name": "Dumbbell Incline Fly",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-fly.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-fly.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-fly.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-fly.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-incline-fly.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-fly.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-incline-fly.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0319",
    "matchedExternalName": "Dumbbell Incline Fly",
    "confidence": "exact",
    "steps": [
      "Set an incline bench and sit with a dumbbell in each hand on your thighs.",
      "Lie back and press the dumbbells above your upper chest with your palms facing each other.",
      "Bend your elbows slightly and keep that bend locked in.",
      "Lower the dumbbells out to your sides in a wide arc until they reach chest level or a gentle chest stretch.",
      "Squeeze your chest to bring the dumbbells back together over your upper chest along the same arc.",
      "Stop with the dumbbells nearly touching and repeat."
    ],
    "formCues": [
      "Soft elbows, fixed angle",
      "Open wide, not too low",
      "Squeeze chest at the top",
      "Keep shoulders down"
    ],
    "commonMistakes": [
      "Bending and straightening the elbows like a press",
      "Lowering the dumbbells far below chest level",
      "Letting the dumbbells drift behind the shoulders",
      "Clanging the dumbbells together at the top"
    ],
    "breathing": "Inhale as you lower the dumbbells out to the sides, and exhale as you bring them back together over your chest."
  },
  "dumbbell-incline-fly-on-exercise-ball": {
    "exerciseId": "dumbbell-incline-fly-on-exercise-ball",
    "name": "Dumbbell Incline Fly On Exercise Ball",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-fly-on-exercise-ball.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-fly-on-exercise-ball.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-fly-on-exercise-ball.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-fly-on-exercise-ball.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-incline-fly-on-exercise-ball.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-fly-on-exercise-ball.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-incline-fly-on-exercise-ball.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1278",
    "matchedExternalName": "Dumbbell Incline Fly On Exercise Ball",
    "confidence": "exact",
    "steps": [
      "Hold a dumbbell in each hand and position your upper back on the exercise ball so your torso is angled upward.",
      "Plant your feet firmly on the floor and raise the dumbbells above your upper chest with your palms facing each other.",
      "Keep a soft bend in your elbows and lower your arms out to the sides in a wide arc.",
      "Stop when your elbows are roughly level with your chest and you feel your chest stretch.",
      "Squeeze your chest and bring the dumbbells back up along the same arc until they meet above your chest."
    ],
    "formCues": [
      "Keep elbows slightly bent",
      "Open wide under control",
      "Lift through your chest",
      "Feet planted, hips steady"
    ],
    "commonMistakes": [
      "Straightening the elbows and turning the move into a press",
      "Lowering the dumbbells too far below chest level",
      "Bouncing the hips or letting the ball roll around",
      "Bringing the dumbbells up unevenly or clanking them together"
    ],
    "breathing": "Inhale as you lower the dumbbells out to the sides, and exhale as you bring them back together above your chest."
  },
  "dumbbell-incline-hammer-curl": {
    "exerciseId": "dumbbell-incline-hammer-curl",
    "name": "Dumbbell Incline Hammer Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-hammer-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-hammer-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-hammer-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-hammer-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-incline-hammer-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-hammer-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-incline-hammer-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0320",
    "matchedExternalName": "Dumbbell Incline Hammer Curl",
    "confidence": "exact",
    "steps": [
      "Set an incline bench and sit back with a dumbbell in each hand.",
      "Let your arms hang straight down by your sides with your palms facing each other.",
      "Keep your upper arms still and curl both dumbbells toward your shoulders.",
      "Stop when your forearms are nearly vertical and squeeze your biceps.",
      "Lower the dumbbells slowly until your elbows are fully straight again.",
      "Repeat without swinging your torso or letting your shoulders roll forward."
    ],
    "formCues": [
      "Palms face each other",
      "Keep elbows pinned",
      "Lift, don't swing",
      "Lower under control"
    ],
    "commonMistakes": [
      "Swinging the dumbbells up with the torso",
      "Letting the elbows drift forward during the curl",
      "Turning the palms up at the top",
      "Cutting the lowering phase short"
    ],
    "breathing": "Exhale as you curl the dumbbells up, and inhale as you lower them back down."
  },
  "dumbbell-incline-hammer-press": {
    "exerciseId": "dumbbell-incline-hammer-press",
    "name": "Dumbbell Incline Hammer Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-hammer-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-hammer-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-hammer-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-hammer-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-incline-hammer-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-hammer-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-incline-hammer-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0321",
    "matchedExternalName": "Dumbbell Incline Hammer Press",
    "confidence": "exact",
    "steps": [
      "Set an incline bench and sit with a dumbbell in each hand on your thighs.",
      "Lie back on the bench and bring the dumbbells to chest height with your palms facing each other.",
      "Plant your feet, pull your shoulder blades back into the bench, and keep your wrists stacked over your elbows.",
      "Press the dumbbells upward until your arms are straight above your upper chest.",
      "Lower the dumbbells under control until they return to chest level with your palms still facing in.",
      "Repeat the press without bouncing the dumbbells off your chest or shoulders."
    ],
    "formCues": [
      "Drive up over upper chest",
      "Keep palms facing in",
      "Pin shoulders to bench",
      "Wrists stacked over elbows"
    ],
    "commonMistakes": [
      "Flaring the elbows straight out to the sides",
      "Letting the dumbbells drift back over the face",
      "Banging the dumbbells together at the top",
      "Arching the lower back and lifting the hips"
    ],
    "breathing": "Inhale as you lower the dumbbells to chest level, and exhale as you press them up."
  },
  "dumbbell-incline-rear-lateral-raise": {
    "exerciseId": "dumbbell-incline-rear-lateral-raise",
    "name": "Dumbbell Incline Rear Lateral Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-rear-lateral-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-rear-lateral-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-rear-lateral-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-rear-lateral-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-rear-lateral-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0326",
    "matchedExternalName": "Dumbbell Incline Rear Lateral Raise",
    "confidence": "exact",
    "steps": [
      "Set an incline bench to about 45 degrees and hold a dumbbell in each hand.",
      "Lie face down with your chest supported on the bench and let your arms hang straight below your shoulders.",
      "Turn your palms to face each other and keep a soft bend in your elbows.",
      "Raise both arms out and slightly back until they reach shoulder height.",
      "Squeeze your rear shoulders and upper back at the top.",
      "Lower the dumbbells with control back to the starting position."
    ],
    "formCues": [
      "Lead with your elbows",
      "Chest stays on the pad",
      "Lift to shoulder height",
      "Control the lowering"
    ],
    "commonMistakes": [
      "Swinging the dumbbells up with momentum",
      "Shrugging the shoulders toward the ears",
      "Straightening the elbows into a wide row",
      "Lifting the arms far past shoulder height"
    ],
    "breathing": "Inhale as you lower the dumbbells, and exhale as you raise them out to the sides."
  },
  "dumbbell-incline-row": {
    "exerciseId": "dumbbell-incline-row",
    "name": "Dumbbell Incline Row",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-row.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-row.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-row.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-row.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-incline-row.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-row.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-incline-row.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0327",
    "matchedExternalName": "Dumbbell Incline Row",
    "confidence": "exact",
    "steps": [
      "Set an incline bench to a moderate angle and lie face down with your chest supported and feet planted on the floor.",
      "Hold a dumbbell in each hand with your arms hanging straight down and palms facing each other.",
      "Brace your midline and pull your shoulders down and back.",
      "Row the dumbbells up toward your lower ribs by bending your elbows and driving them back.",
      "Squeeze your upper back at the top without lifting your chest off the bench.",
      "Lower the dumbbells under control until your arms are fully extended again."
    ],
    "formCues": [
      "Lead with the elbows",
      "Keep chest on the pad",
      "Squeeze shoulder blades together",
      "Lower with control"
    ],
    "commonMistakes": [
      "Shrugging the shoulders up toward the ears",
      "Yanking the dumbbells with body momentum",
      "Flaring the elbows straight out to the sides",
      "Lifting the chest off the bench at the top"
    ],
    "breathing": "Inhale as you lower the dumbbells, and exhale as you row them up toward your ribs."
  },
  "dumbbell-incline-shrug": {
    "exerciseId": "dumbbell-incline-shrug",
    "name": "Dumbbell Incline Shrug",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-shrug.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-shrug.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-shrug.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-shrug.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-incline-shrug.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-shrug.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-incline-shrug.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0329",
    "matchedExternalName": "Dumbbell Incline Shrug",
    "confidence": "exact",
    "steps": [
      "Set an incline bench to about 45 degrees and sit with your chest supported against the pad.",
      "Hold a dumbbell in each hand and let your arms hang straight down at your sides with your palms facing in.",
      "Plant your feet firmly on the floor and keep your chest against the bench.",
      "Lift your shoulders straight up toward your ears without bending your elbows.",
      "Pause briefly at the top, then lower your shoulders back down under control.",
      "Repeat from a dead hang each rep."
    ],
    "formCues": [
      "Arms stay long",
      "Shrug straight up",
      "Keep chest on pad",
      "Lower with control"
    ],
    "commonMistakes": [
      "Bending the elbows and turning the rep into a row",
      "Rolling the shoulders forward or backward at the top",
      "Lifting the chest off the bench to move the weight",
      "Using momentum and dropping quickly between reps"
    ],
    "breathing": "Inhale at the bottom, exhale as you shrug your shoulders up, then inhale as you lower back down."
  },
  "dumbbell-incline-triceps-extension": {
    "exerciseId": "dumbbell-incline-triceps-extension",
    "name": "Dumbbell Incline Triceps Extension",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-triceps-extension.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-triceps-extension.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-triceps-extension.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-incline-triceps-extension.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-incline-triceps-extension.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-incline-triceps-extension.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-incline-triceps-extension.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0330",
    "matchedExternalName": "Dumbbell Incline Triceps Extension",
    "confidence": "exact",
    "steps": [
      "Sit back on an incline bench holding a dumbbell in each hand.",
      "Press the dumbbells overhead with your palms facing each other.",
      "Keep your elbows pointed up and close to your head.",
      "Lower the dumbbells behind your head by bending only your elbows.",
      "Pause briefly when your forearms are below parallel to the floor.",
      "Straighten your elbows to raise the dumbbells back overhead."
    ],
    "formCues": [
      "Elbows stay tucked",
      "Upper arms stay still",
      "Lower with control",
      "Finish straight overhead"
    ],
    "commonMistakes": [
      "Elbows flare wide out to the sides.",
      "Upper arms drift backward and turn it into a press.",
      "Lowering only a few inches behind the head.",
      "Arching the low back off the bench."
    ],
    "breathing": "Inhale as you lower the dumbbells behind your head, and exhale as you extend your elbows to bring them overhead."
  },
  "dumbbell-iron-cross": {
    "exerciseId": "dumbbell-iron-cross",
    "name": "Dumbbell Iron Cross",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-iron-cross.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-iron-cross.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-iron-cross.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-iron-cross.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-iron-cross.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-iron-cross.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-iron-cross.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0332",
    "matchedExternalName": "Dumbbell Iron Cross",
    "confidence": "exact",
    "steps": [
      "Stand tall with a dumbbell in each hand at your sides and your feet about hip-width apart.",
      "Hold a slight bend in your elbows and turn your palms toward your sides.",
      "Raise both arms out to the sides until your hands reach shoulder height.",
      "Pause briefly with your shoulders level and your wrists in line with your elbows.",
      "Lower the dumbbells back to your sides with control.",
      "Repeat without swinging your torso or bouncing the weights."
    ],
    "formCues": [
      "Lead with the elbows",
      "Lift to shoulder height",
      "Keep shoulders down",
      "Move with control"
    ],
    "commonMistakes": [
      "Swinging the torso to start each rep",
      "Shrugging the shoulders toward the ears",
      "Lifting the dumbbells higher than shoulder level",
      "Straightening the elbows completely and locking the arms"
    ],
    "breathing": "Inhale as you lower the dumbbells and exhale as you raise them out to the sides."
  },
  "dumbbell-kickback": {
    "exerciseId": "dumbbell-kickback",
    "name": "Dumbbell Kickback",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-kickback.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-kickback.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-kickback.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-kickback.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-kickback.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-kickback.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-kickback.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0333",
    "matchedExternalName": "Dumbbell Kickback",
    "confidence": "exact",
    "steps": [
      "Stand with a dumbbell in each hand and hinge forward at the hips with a flat back.",
      "Bend your elbows to about 90 degrees and pin your upper arms alongside your torso.",
      "Brace your torso and keep your elbows still.",
      "Straighten your arms by driving the dumbbells back until your elbows are fully extended.",
      "Squeeze your triceps at the back of the movement.",
      "Bend your elbows under control to return to the start position."
    ],
    "formCues": [
      "Keep elbows glued in",
      "Only move the forearms",
      "Squeeze at full extension",
      "Keep your back flat"
    ],
    "commonMistakes": [
      "Swinging the dumbbells with the shoulders or torso",
      "Letting the elbows drift away from the ribs",
      "Dropping the upper arms during the set",
      "Snapping the weights down instead of lowering slowly"
    ],
    "breathing": "Inhale as you bend the elbows to the start position, and exhale as you straighten the arms back."
  },
  "dumbbell-lateral-raise": {
    "exerciseId": "dumbbell-lateral-raise",
    "name": "Dumbbell Lateral Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lateral-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lateral-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-lateral-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-lateral-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-lateral-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lateral-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-lateral-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0334",
    "matchedExternalName": "Dumbbell Lateral Raise",
    "confidence": "exact",
    "steps": [
      "Stand tall with a dumbbell in each hand at your sides, palms facing in.",
      "Set your shoulders down and brace your midsection.",
      "Raise both arms out to the sides until your hands reach about shoulder height, keeping a soft bend in your elbows.",
      "Pause briefly at the top without shrugging your shoulders.",
      "Lower the dumbbells back to your sides with control."
    ],
    "formCues": [
      "Lead with your elbows",
      "Stop at shoulder height",
      "Keep shoulders down",
      "Soft bend in elbows"
    ],
    "commonMistakes": [
      "Shrugging the shoulders up toward the ears",
      "Swinging the torso to heave the dumbbells upward",
      "Lifting the hands well above shoulder height",
      "Straightening the elbows and turning it into a front swing"
    ],
    "breathing": "Exhale as you raise the dumbbells to the sides, and inhale as you lower them back down under control."
  },
  "dumbbell-lunge": {
    "exerciseId": "dumbbell-lunge",
    "name": "Dumbbell Lunge",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lunge.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lunge.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-lunge.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-lunge.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-lunge.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lunge.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-lunge.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0336",
    "matchedExternalName": "Dumbbell Lunge",
    "confidence": "exact",
    "steps": [
      "Stand tall with a dumbbell in each hand at your sides and your feet hip-width apart.",
      "Step one foot forward far enough that both knees can bend comfortably.",
      "Lower your body until your front thigh is nearly parallel to the floor and your back knee drops toward the floor.",
      "Keep your torso upright and your front foot flat as you pause briefly at the bottom.",
      "Push through your front heel to return to standing.",
      "Repeat on the other side, alternating legs each rep."
    ],
    "formCues": [
      "Chest tall",
      "Front heel stays down",
      "Knees track over toes",
      "Drop straight down"
    ],
    "commonMistakes": [
      "Taking too short a step so the front knee shoots far past the toes.",
      "Leaning the torso forward as you lower into the lunge.",
      "Letting the front heel lift off the floor.",
      "Pushing off the back foot instead of driving through the front leg."
    ],
    "breathing": "Inhale as you lower into the lunge, and exhale as you push back to standing."
  },
  "dumbbell-lying-alternate-extension": {
    "exerciseId": "dumbbell-lying-alternate-extension",
    "name": "Dumbbell Lying Alternate Extension",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lying-alternate-extension.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lying-alternate-extension.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-lying-alternate-extension.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-lying-alternate-extension.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-lying-alternate-extension.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lying-alternate-extension.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-lying-alternate-extension.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1729",
    "matchedExternalName": "Dumbbell Lying Alternate Extension",
    "confidence": "exact",
    "steps": [
      "Lie flat on a bench holding a dumbbell in each hand, and press both arms straight up over your chest with palms facing each other.",
      "Keep one arm still above your chest as you bend the other elbow and lower that dumbbell beside your forehead.",
      "Stop when your forearm points down and your upper arm stays mostly vertical.",
      "Straighten the bent arm to bring the dumbbell back above your chest.",
      "Repeat on the other side while keeping the first arm locked out.",
      "Continue alternating sides with both shoulders and head resting on the bench."
    ],
    "formCues": [
      "Elbows point to the ceiling",
      "Only move at the elbow",
      "Keep one arm locked out",
      "Lower beside your forehead"
    ],
    "commonMistakes": [
      "Elbows flare wide as the dumbbell lowers",
      "Upper arms drift backward instead of staying upright",
      "The non-working arm drops or bends",
      "Turning it into a press from the chest"
    ],
    "breathing": "Inhale as you lower each dumbbell and exhale as you straighten the elbow to bring it back up."
  },
  "dumbbell-lying-hammer-press": {
    "exerciseId": "dumbbell-lying-hammer-press",
    "name": "Dumbbell Lying Hammer Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lying-hammer-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lying-hammer-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-lying-hammer-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-lying-hammer-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-lying-hammer-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lying-hammer-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-lying-hammer-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0340",
    "matchedExternalName": "Dumbbell Lying Hammer Press",
    "confidence": "exact",
    "steps": [
      "Lie flat on a bench holding a dumbbell in each hand, and press the dumbbells above your chest with your palms facing each other.",
      "Plant your feet on the floor and brace your torso while keeping your wrists stacked over your elbows.",
      "Lower the dumbbells under control to either side of your chest, keeping your elbows slightly tucked from your shoulders.",
      "Pause briefly when your upper arms reach bench level or the dumbbells lightly touch your chest line.",
      "Press the dumbbells straight up until your arms are extended above your chest, keeping the palms facing each other throughout.",
      "Bring the dumbbells back together over your chest and repeat."
    ],
    "formCues": [
      "Keep palms facing in",
      "Tuck elbows slightly",
      "Press over mid-chest",
      "Keep wrists straight"
    ],
    "commonMistakes": [
      "Elbows flare straight out to the sides.",
      "Dumbbells drift toward the face instead of staying over the chest.",
      "Wrists bend back under the dumbbells.",
      "Lowering too fast and bouncing at the bottom."
    ],
    "breathing": "Inhale as you lower the dumbbells to your chest and exhale as you press them back up."
  },
  "dumbbell-lying-leg-curl": {
    "exerciseId": "dumbbell-lying-leg-curl",
    "name": "Dumbbell Lying Leg Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lying-femoral.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lying-femoral.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-lying-femoral.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-lying-femoral.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-lying-femoral.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lying-femoral.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-lying-femoral.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0343",
    "matchedExternalName": "Dumbbell Lying Leg Curl",
    "confidence": "exact",
    "steps": [
      "Lie face down on a bench, legs straight, dumbbell held between your feet.",
      "Hold onto the bench for stability.",
      "Contract your hamstrings to curl the dumbbell upward toward your glutes.",
      "Pause at the top of the movement.",
      "Lower the dumbbell in a controlled motion to the starting position."
    ],
    "formCues": [
      "Keep hips down",
      "Squeeze at top",
      "Control the descent",
      "Engage hamstrings"
    ],
    "commonMistakes": [
      "Allowing hips to lift",
      "Letting dumbbell slip",
      "Using momentum"
    ],
    "breathing": "Exhale as you curl up, inhale as you lower down."
  },
  "dumbbell-lying-rear-delt-row": {
    "exerciseId": "dumbbell-lying-rear-delt-row",
    "name": "Dumbbell Lying Rear Delt Row",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lying-rear-delt-row.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lying-rear-delt-row.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-lying-rear-delt-row.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-lying-rear-delt-row.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-lying-rear-delt-row.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lying-rear-delt-row.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-lying-rear-delt-row.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1328",
    "matchedExternalName": "Dumbbell Lying Rear Delt Row",
    "confidence": "exact",
    "steps": [
      "Lie face down on a flat bench holding a dumbbell in each hand, with your chest supported and arms hanging straight down.",
      "Set your feet firmly on the floor and turn your palms to face each other.",
      "Pull your elbows out to the sides and row the dumbbells up toward your upper chest.",
      "Squeeze your upper back at the top while keeping your chest on the bench.",
      "Lower the dumbbells back down under control until your arms are straight again.",
      "Repeat without swinging the weights or shrugging your shoulders."
    ],
    "formCues": [
      "Lead with the elbows",
      "Chest stays on the bench",
      "Pull wide, not low",
      "Squeeze shoulder blades together"
    ],
    "commonMistakes": [
      "Pulling the elbows close to the ribs like a regular row",
      "Shrugging the shoulders up toward the ears",
      "Lifting the chest off the bench to move the weights",
      "Swinging the dumbbells instead of lowering them with control"
    ],
    "breathing": "Inhale as you lower the dumbbells, and exhale as you row them up toward your upper chest."
  },
  "dumbbell-lying-triceps-extension": {
    "exerciseId": "dumbbell-lying-triceps-extension",
    "name": "Dumbbell Lying Triceps Extension",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lying-triceps-extension.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lying-triceps-extension.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-lying-triceps-extension.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-lying-triceps-extension.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-lying-triceps-extension.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-lying-triceps-extension.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-lying-triceps-extension.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0351",
    "matchedExternalName": "Dumbbell Lying Triceps Extension",
    "confidence": "exact",
    "steps": [
      "Lie flat on a bench holding a dumbbell in each hand, and press the dumbbells above your chest with your palms facing each other.",
      "Pull your shoulders down into the bench and straighten your wrists so the dumbbells stay stacked over your elbows.",
      "Bend your elbows and lower the dumbbells toward the sides of your forehead while keeping your upper arms mostly still.",
      "Stop when your elbows are fully bent and the dumbbells are close to your head.",
      "Straighten your elbows to drive the dumbbells back to the start position above your chest.",
      "Repeat each rep without letting your elbows flare wide."
    ],
    "formCues": [
      "Keep elbows tucked",
      "Upper arms stay still",
      "Bend only at elbows",
      "Stack wrists over elbows"
    ],
    "commonMistakes": [
      "Elbows flare out wide as the dumbbells lower.",
      "Upper arms drift backward or forward during the rep.",
      "Dumbbells drop too low behind the head instead of beside the forehead.",
      "Wrists bend back instead of staying straight."
    ],
    "breathing": "Inhale as you lower the dumbbells toward your forehead, and exhale as you extend your elbows to raise them back up."
  },
  "dumbbell-one-arm-lateral-raise": {
    "exerciseId": "dumbbell-one-arm-lateral-raise",
    "name": "Dumbbell One Arm Lateral Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-one-arm-lateral-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-one-arm-lateral-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-one-arm-lateral-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-one-arm-lateral-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-one-arm-lateral-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-one-arm-lateral-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-one-arm-lateral-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0355",
    "matchedExternalName": "Dumbbell One Arm Lateral Raise",
    "confidence": "exact",
    "steps": [
      "Stand tall with feet about hip-width apart and hold a dumbbell at one side with a slight bend in your elbow.",
      "Brace your core and keep your shoulders level as your free arm stays relaxed by your side or on your hip.",
      "Lift the dumbbell out to the side until your hand reaches about shoulder height.",
      "Pause briefly at the top without shrugging your shoulder toward your ear.",
      "Lower the dumbbell back to your side with control.",
      "Complete all reps on one arm, then switch sides."
    ],
    "formCues": [
      "Lead with your elbow",
      "Stop at shoulder height",
      "Keep shoulders level",
      "Lower with control"
    ],
    "commonMistakes": [
      "Shrugging the working shoulder up toward the ear",
      "Swinging the torso or leaning to start the lift",
      "Raising the dumbbell higher than shoulder height",
      "Locking the elbow completely straight"
    ],
    "breathing": "Inhale as you lower the dumbbell, and exhale as you lift it out to the side."
  },
  "dumbbell-one-arm-zottman-preacher-curl": {
    "exerciseId": "dumbbell-one-arm-zottman-preacher-curl",
    "name": "Dumbbell One Arm Zottman Preacher Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-one-arm-zottman-preacher-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-one-arm-zottman-preacher-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-one-arm-zottman-preacher-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-one-arm-zottman-preacher-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-one-arm-zottman-preacher-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-one-arm-zottman-preacher-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-one-arm-zottman-preacher-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1672",
    "matchedExternalName": "Dumbbell One Arm Zottman Preacher Curl",
    "confidence": "exact",
    "steps": [
      "Sit at a preacher bench and plant your feet on the floor.",
      "Hold a dumbbell in one hand and place the back of your upper arm flat against the pad with your arm nearly straight.",
      "Start with your palm facing up and curl the dumbbell toward your shoulder without lifting your upper arm off the pad.",
      "Pause near the top and rotate your wrist until your palm faces down.",
      "Lower the dumbbell slowly until your arm is nearly straight while keeping your palm facing down.",
      "Rotate your wrist back to palm-up at the bottom and repeat before switching arms."
    ],
    "formCues": [
      "Keep arm glued to pad",
      "Curl, then rotate",
      "Lower slowly on the way down",
      "Keep wrist movement controlled"
    ],
    "commonMistakes": [
      "Upper arm lifting off the preacher pad",
      "Swinging the dumbbell instead of curling it",
      "Dropping the weight quickly on the lowering phase",
      "Rotating the wrist too early before reaching the top"
    ],
    "breathing": "Exhale as you curl the dumbbell up, then inhale as you rotate and lower it back down."
  },
  "dumbbell-one-arm-triceps-extension": {
    "exerciseId": "dumbbell-one-arm-triceps-extension",
    "name": "Dumbbell One-Arm Triceps Extension",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-one-arm-triceps-extension.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-one-arm-triceps-extension.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-one-arm-triceps-extension.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-one-arm-triceps-extension.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-one-arm-triceps-extension.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-one-arm-triceps-extension.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-one-arm-triceps-extension.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0306",
    "matchedExternalName": "Dumbbell One-Arm Triceps Extension",
    "confidence": "exact",
    "steps": [
      "Hold dumbbell in one hand, arm extended overhead.",
      "Support upper arm with free hand if needed.",
      "Lower dumbbell behind head by bending the elbow.",
      "Pause when forearm is parallel to ground.",
      "Extend arm fully to return to starting position."
    ],
    "formCues": [
      "Keep upper arm vertical",
      "Only move forearm",
      "No swinging",
      "Full elbow extension"
    ],
    "commonMistakes": [
      "Moving upper arm",
      "Dropping weight too far",
      "Allowing elbow to flare",
      "Rushing movement"
    ],
    "breathing": "Inhale as you lower the dumbbell, exhale as you press up."
  },
  "dumbbell-over-bench-wrist-curl": {
    "exerciseId": "dumbbell-over-bench-wrist-curl",
    "name": "Dumbbell Over Bench Wrist Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-over-bench-wrist-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-over-bench-wrist-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-over-bench-wrist-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-over-bench-wrist-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-over-bench-wrist-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-over-bench-wrist-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-over-bench-wrist-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0369",
    "matchedExternalName": "Dumbbell Over Bench Wrist Curl",
    "confidence": "exact",
    "steps": [
      "Sit at a bench and place your forearms on top with your palms facing up.",
      "Hold a dumbbell in each hand and slide forward until your wrists hang just past the bench edge.",
      "Let your hands lower to gently stretch your wrists at the bottom.",
      "Curl your wrists up by lifting your knuckles toward your forearms.",
      "Squeeze your forearms briefly at the top.",
      "Lower the dumbbells back down under control until your wrists extend again."
    ],
    "formCues": [
      "Move only your wrists",
      "Forearms stay glued down",
      "Curl through full range",
      "Lower slowly"
    ],
    "commonMistakes": [
      "Lifting the forearms off the bench during the curl.",
      "Swinging the dumbbells instead of moving only the wrists.",
      "Using partial range and stopping before the wrists fully lower.",
      "Bending the elbows to help raise the weight."
    ],
    "breathing": "Inhale as you lower your wrists and exhale as you curl them up."
  },
  "dumbbell-palm-rotational-bent-over-row": {
    "exerciseId": "dumbbell-palm-rotational-bent-over-row",
    "name": "Dumbbell Palm Rotational Bent Over Row",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-palm-rotational-bent-over-row.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-palm-rotational-bent-over-row.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-palm-rotational-bent-over-row.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-palm-rotational-bent-over-row.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-palm-rotational-bent-over-row.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-palm-rotational-bent-over-row.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-palm-rotational-bent-over-row.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1329",
    "matchedExternalName": "Dumbbell Palm Rotational Bent Over Row",
    "confidence": "exact",
    "steps": [
      "Stand with your feet hip-width apart, holding a dumbbell in each hand with your arms straight and palms facing each other.",
      "Hinge at your hips until your torso is leaned forward, soften your knees, and keep your back flat.",
      "Let the dumbbells hang below your shoulders and brace your core.",
      "Row both dumbbells toward your lower ribs by driving your elbows back.",
      "Rotate your palms as you lift until they face more backward or away from your body at the top.",
      "Pause and squeeze your upper back, then lower the dumbbells with control as you rotate your palms back to neutral."
    ],
    "formCues": [
      "Keep your back flat",
      "Drive elbows back",
      "Rotate through the pull",
      "Squeeze shoulder blades together"
    ],
    "commonMistakes": [
      "Rounding the lower back as you hinge forward",
      "Standing up taller to swing the dumbbells",
      "Shrugging the shoulders toward the ears",
      "Letting the wrists curl instead of rotating the forearms"
    ],
    "breathing": "Inhale at the bottom, exhale as you row and rotate the dumbbells up, then inhale as you lower them back down."
  },
  "dumbbell-preacher-curl-over-exercise-ball": {
    "exerciseId": "dumbbell-preacher-curl-over-exercise-ball",
    "name": "Dumbbell Preacher Curl Over Exercise Ball",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-preacher-curl-over-exercise-ball.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-preacher-curl-over-exercise-ball.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-preacher-curl-over-exercise-ball.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-preacher-curl-over-exercise-ball.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-preacher-curl-over-exercise-ball.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-preacher-curl-over-exercise-ball.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-preacher-curl-over-exercise-ball.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1673",
    "matchedExternalName": "Dumbbell Preacher Curl Over Exercise Ball",
    "confidence": "exact",
    "steps": [
      "Sit tall on the exercise ball with both feet flat and spread for balance.",
      "Hold a dumbbell in one hand with your palm facing up and brace the back of your upper arm against the ball.",
      "Let the arm straighten almost fully so the dumbbell hangs below your elbow.",
      "Curl the dumbbell toward your shoulder without lifting your elbow off the ball.",
      "Squeeze your biceps at the top while keeping your wrist straight.",
      "Lower the dumbbell slowly until your arm is almost straight, then repeat and switch sides."
    ],
    "formCues": [
      "Keep elbow glued down",
      "Curl only at the elbow",
      "Keep wrist straight",
      "Lower under control"
    ],
    "commonMistakes": [
      "Elbow slides or lifts off the ball during the curl.",
      "Shoulder rolls forward to help raise the dumbbell.",
      "Wrist bends back or curls inward at the top.",
      "Body rocks on the ball to create momentum."
    ],
    "breathing": "Inhale as you lower the dumbbell and exhale as you curl it up."
  },
  "dumbbell-pronate-grip-triceps-extension": {
    "exerciseId": "dumbbell-pronate-grip-triceps-extension",
    "name": "Dumbbell Pronate-grip Triceps Extension",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-pronate-grip-triceps-extension.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-pronate-grip-triceps-extension.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-pronate-grip-triceps-extension.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-pronate-grip-triceps-extension.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-pronate-grip-triceps-extension.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-pronate-grip-triceps-extension.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-pronate-grip-triceps-extension.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0373",
    "matchedExternalName": "Dumbbell Pronate-grip Triceps Extension",
    "confidence": "exact",
    "steps": [
      "Sit tall on a bench or chair with both feet flat on the floor.",
      "Hold one dumbbell with both hands by the handle using an overhand grip and press it straight overhead.",
      "Bring your upper arms close to your ears and point your elbows forward.",
      "Lower the dumbbell behind your head by bending only your elbows.",
      "Stop when your forearms are below parallel and your upper arms stay mostly still.",
      "Straighten your elbows to raise the dumbbell back to the overhead start position."
    ],
    "formCues": [
      "Elbows stay close in",
      "Upper arms stay still",
      "Brace your ribs down",
      "Lock out overhead"
    ],
    "commonMistakes": [
      "Elbows flare wide out to the sides.",
      "Upper arms drift backward and move during the rep.",
      "Lower back arches as the weight goes overhead.",
      "The dumbbell drops too low and bumps the upper back."
    ],
    "breathing": "Inhale as you lower the dumbbell behind your head, and exhale as you straighten your elbows to lift it overhead."
  },
  "dumbbell-prone-incline-curl": {
    "exerciseId": "dumbbell-prone-incline-curl",
    "name": "Dumbbell Prone Incline Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-prone-incline-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-prone-incline-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-prone-incline-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-prone-incline-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-prone-incline-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-prone-incline-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-prone-incline-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0374",
    "matchedExternalName": "Dumbbell Prone Incline Curl",
    "confidence": "exact",
    "steps": [
      "Set an incline bench to about 45 degrees and lie face down with your chest supported.",
      "Hold a dumbbell in each hand with your arms hanging straight down and palms facing forward.",
      "Keep your upper arms still and curl both dumbbells up toward your shoulders.",
      "Pause briefly at the top and squeeze your biceps.",
      "Lower the dumbbells slowly until your arms are fully extended again."
    ],
    "formCues": [
      "Keep chest on bench",
      "Elbows stay still",
      "Curl through full range",
      "Lower with control"
    ],
    "commonMistakes": [
      "Lifting the chest off the bench to swing the weights",
      "Letting the elbows drift forward during the curl",
      "Cutting the rep short and not fully lowering the dumbbells",
      "Bending the wrists back instead of keeping them neutral"
    ],
    "breathing": "Inhale as you lower the dumbbells and exhale as you curl them up."
  },
  "dumbbell-rear-delt-row": {
    "exerciseId": "dumbbell-rear-delt-row",
    "name": "Dumbbell Rear Delt Row",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-rear-delt-row.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-rear-delt-row.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-rear-delt-row.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-rear-delt-row.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-rear-delt-row.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-rear-delt-row.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-rear-delt-row.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0377",
    "matchedExternalName": "Dumbbell Rear Delt Row",
    "confidence": "exact",
    "steps": [
      "Stand with your feet hip- to shoulder-width apart, holding a dumbbell in each hand at your sides.",
      "Hinge at your hips until your torso is leaned forward, soften your knees, and let the dumbbells hang below your shoulders with your palms facing each other.",
      "Brace your core and keep your back flat as you pull your elbows up and out to the sides.",
      "Lift until your upper arms are roughly in line with your shoulders and squeeze your upper back.",
      "Lower the dumbbells under control to the start position and repeat."
    ],
    "formCues": [
      "Lead with your elbows.",
      "Keep your back flat.",
      "Raise arms out, not back.",
      "Squeeze shoulder blades together."
    ],
    "commonMistakes": [
      "Rounding the lower back as you hinge forward.",
      "Shrugging the shoulders up toward the ears.",
      "Pulling the dumbbells straight back close to the ribs.",
      "Swinging the torso to start each rep."
    ],
    "breathing": "Inhale as you lower the dumbbells, and exhale as you row them up and out to the sides."
  },
  "dumbbell-seated-calf-raise": {
    "exerciseId": "dumbbell-seated-calf-raise",
    "name": "Dumbbell Seated Calf Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-calf-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-calf-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-seated-calf-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-seated-calf-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-seated-calf-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-calf-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-seated-calf-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1379",
    "matchedExternalName": "Dumbbell Seated Calf Raise",
    "confidence": "exact",
    "steps": [
      "Sit on a bench or chair with your knees bent and place the balls of your feet on a small raised surface with your heels hanging off.",
      "Set a dumbbell across the tops of your thighs just above your knees and hold it steady with both hands.",
      "Let your heels drop down until you feel a stretch through your calves.",
      "Press through the balls of your feet and raise your heels as high as you can.",
      "Pause briefly at the top while keeping the dumbbell steady.",
      "Lower your heels back down under control and repeat."
    ],
    "formCues": [
      "Drive through big toe",
      "Lift heels straight up",
      "Use full ankle range",
      "Control the lowering"
    ],
    "commonMistakes": [
      "Bouncing the heels at the bottom instead of lowering under control.",
      "Rolling the ankles inward or outward as the heels rise.",
      "Placing the dumbbell too close to the knees so it slides during the set.",
      "Using a very short range of motion and not dropping the heels below the step."
    ],
    "breathing": "Inhale as you lower your heels, and exhale as you press up onto the balls of your feet."
  },
  "dumbbell-seated-front-raise": {
    "exerciseId": "dumbbell-seated-front-raise",
    "name": "Dumbbell Seated Front Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-front-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-front-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-seated-front-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-seated-front-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-seated-front-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-front-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-seated-front-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0392",
    "matchedExternalName": "Dumbbell Seated Front Raise",
    "confidence": "exact",
    "steps": [
      "Sit tall on a bench with your feet flat on the floor and a dumbbell in each hand at your sides.",
      "Hold the dumbbells with your palms facing down or slightly toward each other, and brace your midsection.",
      "Raise both arms straight forward until the dumbbells reach shoulder height.",
      "Pause briefly at the top without leaning back or shrugging your shoulders.",
      "Lower the dumbbells under control back to the starting position by your thighs.",
      "Repeat each rep with the same seated posture and arm path."
    ],
    "formCues": [
      "Lift to shoulder height",
      "Keep torso still",
      "Soft bend in elbows",
      "Shoulders down and back"
    ],
    "commonMistakes": [
      "Leaning the torso back to swing the dumbbells up",
      "Raising the dumbbells above shoulder height",
      "Shrugging the shoulders toward the ears",
      "Dropping the weights quickly on the way down"
    ],
    "breathing": "Exhale as you raise the dumbbells, and inhale as you lower them back down under control."
  },
  "dumbbell-seated-kickback": {
    "exerciseId": "dumbbell-seated-kickback",
    "name": "Dumbbell Seated Kickback",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-kickback.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-kickback.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-seated-kickback.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-seated-kickback.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-seated-kickback.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-kickback.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-seated-kickback.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0394",
    "matchedExternalName": "Dumbbell Seated Kickback",
    "confidence": "exact",
    "steps": [
      "Sit on a bench holding a dumbbell in each hand with your feet flat on the floor.",
      "Hinge forward from your hips and keep your back flat with your chest angled toward your thighs.",
      "Pull your elbows up beside your torso and bend them to about 90 degrees.",
      "Keep your upper arms still and straighten your elbows to kick the dumbbells back behind you.",
      "Squeeze your triceps with your arms fully extended.",
      "Bend your elbows slowly to return the dumbbells to the start position."
    ],
    "formCues": [
      "Keep elbows glued in",
      "Only move the forearms",
      "Back flat, chest up",
      "Squeeze at full extension"
    ],
    "commonMistakes": [
      "Swinging the dumbbells with the shoulders",
      "Letting the elbows drift away from the torso",
      "Dropping the upper arms during the rep",
      "Rounding the back while leaning forward"
    ],
    "breathing": "Inhale as you bend your elbows to lower the dumbbells, and exhale as you straighten your arms back."
  },
  "dumbbell-seated-lateral-raise": {
    "exerciseId": "dumbbell-seated-lateral-raise",
    "name": "Dumbbell Seated Lateral Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-lateral-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-lateral-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-seated-lateral-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-seated-lateral-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-seated-lateral-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-lateral-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-seated-lateral-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0396",
    "matchedExternalName": "Dumbbell Seated Lateral Raise",
    "confidence": "exact",
    "steps": [
      "Sit upright on a bench with your feet flat on the floor and a dumbbell in each hand at your sides.",
      "Set your shoulders down and keep a soft bend in your elbows.",
      "Raise both arms out to your sides until the dumbbells reach about shoulder height.",
      "Pause briefly at the top without shrugging your shoulders.",
      "Lower the dumbbells back to your sides with control and repeat."
    ],
    "formCues": [
      "Lead with your elbows",
      "Keep shoulders down",
      "Lift to shoulder height",
      "Control the lowering"
    ],
    "commonMistakes": [
      "Swinging the torso to start the lift",
      "Shrugging the shoulders up toward the ears",
      "Lifting the dumbbells higher than shoulder level",
      "Straightening the elbows into a stiff arm"
    ],
    "breathing": "Exhale as you raise the dumbbells out to the sides, and inhale as you lower them back down."
  },
  "dumbbell-seated-neutral-wrist-curl": {
    "exerciseId": "dumbbell-seated-neutral-wrist-curl",
    "name": "Dumbbell Seated Neutral Wrist Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-neutral-wrist-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-neutral-wrist-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-seated-neutral-wrist-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-seated-neutral-wrist-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-seated-neutral-wrist-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-neutral-wrist-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-seated-neutral-wrist-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0397",
    "matchedExternalName": "Dumbbell Seated Neutral Wrist Curl",
    "confidence": "exact",
    "steps": [
      "Sit on a bench with your feet flat and hold a dumbbell in each hand with your palms facing each other.",
      "Rest your forearms on your thighs near your knees and let your wrists hang just past your knees.",
      "Start with your wrists straight and your hands hanging down under control.",
      "Curl the dumbbells upward by bending only at your wrists while keeping your forearms pressed into your thighs.",
      "Squeeze briefly at the top without turning your palms up or down.",
      "Lower the dumbbells slowly back to the start until your wrists are fully extended."
    ],
    "formCues": [
      "Move only your wrists",
      "Keep palms facing in",
      "Forearms stay glued down",
      "Control the lowering"
    ],
    "commonMistakes": [
      "Lifting the forearms off the thighs to swing the dumbbells up",
      "Turning the palms up or down during the curl",
      "Bouncing the dumbbells at the bottom",
      "Using the shoulders or elbows to help the movement"
    ],
    "breathing": "Exhale as you curl your wrists up, and inhale as you lower the dumbbells back down."
  },
  "dumbbell-seated-preacher-curl": {
    "exerciseId": "dumbbell-seated-preacher-curl",
    "name": "Dumbbell Seated Preacher Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-preacher-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-preacher-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-seated-preacher-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-seated-preacher-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-seated-preacher-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-preacher-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-seated-preacher-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0402",
    "matchedExternalName": "Dumbbell Seated Preacher Curl",
    "confidence": "exact",
    "steps": [
      "Sit on the preacher bench and plant your feet flat on the floor.",
      "Hold a dumbbell with your palm facing up and place the back of your upper arm firmly against the pad.",
      "Start with your arm nearly straight and let the dumbbell hang just above the bottom of the pad.",
      "Curl the dumbbell upward by bending your elbow while keeping your upper arm pressed into the pad.",
      "Lift until the dumbbell nears your shoulder and briefly squeeze your biceps.",
      "Lower the dumbbell slowly until your arm is nearly straight again, then repeat before switching sides."
    ],
    "formCues": [
      "Keep upper arm glued down",
      "Curl only at the elbow",
      "Lower with control",
      "Squeeze at the top"
    ],
    "commonMistakes": [
      "Upper arm lifting off the pad during the curl",
      "Swinging the dumbbell instead of moving smoothly",
      "Stopping short and not lowering near full extension",
      "Bending the wrist back as the dumbbell rises"
    ],
    "breathing": "Exhale as you curl the dumbbell up, and inhale as you lower it back down under control."
  },
  "dumbbell-seated-triceps-extension": {
    "exerciseId": "dumbbell-seated-triceps-extension",
    "name": "Dumbbell Seated Triceps Extension",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-triceps-extension.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-triceps-extension.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-seated-triceps-extension.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-seated-triceps-extension.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-seated-triceps-extension.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-seated-triceps-extension.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-seated-triceps-extension.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "2188",
    "matchedExternalName": "Dumbbell Seated Triceps Extension",
    "confidence": "exact",
    "steps": [
      "Sit tall on a bench with both feet flat on the floor.",
      "Hold one dumbbell by the top end with both hands and press it straight overhead.",
      "Keep your upper arms close to your head and brace your torso.",
      "Bend your elbows to lower the dumbbell behind your head under control.",
      "Stop when your forearms are below parallel and your elbows stay pointed up.",
      "Straighten your elbows to raise the dumbbell back to the overhead start position."
    ],
    "formCues": [
      "Elbows point up",
      "Keep biceps by ears",
      "Move only at elbows",
      "Brace your ribs down"
    ],
    "commonMistakes": [
      "Elbows flare wide out to the sides.",
      "Lower back arches as the weight goes overhead.",
      "Upper arms drift backward and forward during the rep.",
      "The dumbbell drops too low with no control behind the head."
    ],
    "breathing": "Inhale as you lower the dumbbell behind your head, and exhale as you extend your elbows to raise it overhead."
  },
  "dumbbell-shrug": {
    "exerciseId": "dumbbell-shrug",
    "name": "Dumbbell Shrug",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-shrug.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-shrug.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-shrug.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-shrug.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-shrug.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-shrug.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-shrug.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0406",
    "matchedExternalName": "Dumbbell Shrug",
    "confidence": "exact",
    "steps": [
      "Stand tall with a dumbbell in each hand at your sides and your feet about hip-width apart.",
      "Let your arms hang straight with your palms facing your body.",
      "Lift your shoulders straight up toward your ears without bending your elbows.",
      "Pause briefly at the top while keeping your torso still.",
      "Lower your shoulders back down under control to the start position and repeat."
    ],
    "formCues": [
      "Shoulders straight up",
      "Arms stay long",
      "Neck relaxed",
      "Control the lowering"
    ],
    "commonMistakes": [
      "Rolling the shoulders in circles instead of lifting straight up and down.",
      "Bending the elbows and turning the move into an upright row.",
      "Leaning the torso back or forward to swing the dumbbells.",
      "Jutting the head forward as the shoulders rise."
    ],
    "breathing": "Exhale as you shrug your shoulders up, and inhale as you lower them back down."
  },
  "dumbbell-side-bend": {
    "exerciseId": "dumbbell-side-bend",
    "name": "Dumbbell Side Bend",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-side-bend.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-side-bend.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-side-bend.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-side-bend.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-side-bend.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-side-bend.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-side-bend.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0407",
    "matchedExternalName": "Dumbbell Side Bend",
    "confidence": "exact",
    "steps": [
      "Stand tall with your feet about hip-width apart and hold a dumbbell in one hand at your side.",
      "Place your other hand on your hip or behind your head and brace your stomach.",
      "Keep your chest up and slowly bend your torso sideways away from the dumbbell.",
      "Lower the dumbbell down the side of your leg as far as you can without twisting or leaning forward.",
      "Squeeze your obliques and return to standing tall.",
      "Complete all reps on one side, then switch hands and repeat."
    ],
    "formCues": [
      "Bend only to the side",
      "Keep chest tall",
      "Brace your core",
      "Move slowly and controlled"
    ],
    "commonMistakes": [
      "Twisting the torso as you bend",
      "Leaning forward instead of sideways",
      "Shrugging the weighted shoulder up",
      "Using momentum to swing back up"
    ],
    "breathing": "Inhale as you bend sideways, then exhale as you return to standing."
  },
  "dumbbell-single-leg-calf-raise": {
    "exerciseId": "dumbbell-single-leg-calf-raise",
    "name": "Dumbbell Single Leg Calf Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-single-leg-calf-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-single-leg-calf-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-single-leg-calf-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-single-leg-calf-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-single-leg-calf-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-single-leg-calf-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-single-leg-calf-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0409",
    "matchedExternalName": "Dumbbell Single Leg Calf Raise",
    "confidence": "exact",
    "steps": [
      "Stand on the edge of a step with one foot, placing the ball of your foot on the step and letting your heel hang off.",
      "Hold a dumbbell in one hand and lightly brace your other hand on a wall or rail.",
      "Lift your nonworking foot off the step and straighten your standing leg.",
      "Press through the ball of your foot to raise your heel as high as you can.",
      "Pause briefly at the top while keeping your ankle stacked over your toes.",
      "Lower your heel slowly below the step until you feel a stretch in your calf.",
      "Complete all reps on one side, then switch legs."
    ],
    "formCues": [
      "Push through your big toe",
      "Rise straight up",
      "Lower with control",
      "Keep hips level"
    ],
    "commonMistakes": [
      "Bouncing out of the bottom instead of lowering under control",
      "Rolling the ankle inward or outward during the raise",
      "Bending the standing knee to help drive up",
      "Using the support hand to pull the body upward"
    ],
    "breathing": "Inhale as you lower your heel, and exhale as you press up onto your toes."
  },
  "dumbbell-single-leg-squat": {
    "exerciseId": "dumbbell-single-leg-squat",
    "name": "Dumbbell Single Leg Squat",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-single-leg-squat.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-single-leg-squat.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-single-leg-squat.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-single-leg-squat.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-single-leg-squat.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-single-leg-squat.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-single-leg-squat.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0411",
    "matchedExternalName": "Dumbbell Single Leg Squat",
    "confidence": "exact",
    "steps": [
      "Stand tall holding a dumbbell in each hand at your sides.",
      "Shift your weight onto one foot and lift the other leg straight in front of you.",
      "Brace your torso and bend your standing knee and hip to lower under control.",
      "Keep the lifted leg off the floor and lower as far as you can while staying balanced.",
      "Drive through the standing foot to rise back to the starting position.",
      "Complete all reps on one leg, then switch sides."
    ],
    "formCues": [
      "Chest up",
      "Sit back",
      "Keep knee tracking forward",
      "Control the descent"
    ],
    "commonMistakes": [
      "Letting the lifted foot touch the floor between reps",
      "Rounding the back at the bottom",
      "Standing knee collapsing inward",
      "Dropping too fast and losing balance"
    ],
    "breathing": "Inhale as you lower down, and exhale as you drive back up to standing."
  },
  "dumbbell-squat": {
    "exerciseId": "dumbbell-squat",
    "name": "Dumbbell Squat",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-squat.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-squat.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-squat.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-squat.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-squat.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-squat.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-squat.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0413",
    "matchedExternalName": "Dumbbell Squat",
    "confidence": "exact",
    "steps": [
      "Stand tall with a dumbbell in each hand at your sides and place your feet about shoulder-width apart.",
      "Brace your core, keep your chest up, and let your arms hang straight.",
      "Bend your hips and knees together to sit down and slightly back.",
      "Lower until your thighs are at least parallel to the floor or as low as you can while keeping your heels down.",
      "Drive through your midfoot and heels to stand back up.",
      "Finish tall with your hips and knees fully straight before the next rep."
    ],
    "formCues": [
      "Chest up",
      "Knees track over toes",
      "Keep heels down",
      "Stand tall at top"
    ],
    "commonMistakes": [
      "Letting the knees cave inward on the way down or up.",
      "Rising onto the toes and lifting the heels off the floor.",
      "Rounding the upper or lower back at the bottom.",
      "Dropping the chest forward so the dumbbells swing ahead of the legs."
    ],
    "breathing": "Inhale as you lower into the squat, then exhale as you stand back up."
  },
  "dumbbell-standing-calf-raise": {
    "exerciseId": "dumbbell-standing-calf-raise",
    "name": "Dumbbell Standing Calf Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-standing-calf-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-standing-calf-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-standing-calf-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-standing-calf-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-standing-calf-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-standing-calf-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-standing-calf-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0417",
    "matchedExternalName": "Dumbbell Standing Calf Raise",
    "confidence": "exact",
    "steps": [
      "Stand upright with a dumbbell in each hand and place your feet about hip-width apart.",
      "Let your arms hang by your sides and keep your knees softly bent.",
      "Press through the balls of your feet and lift your heels as high as you can.",
      "Pause briefly at the top while staying tall through your torso.",
      "Lower your heels back to the floor with control and repeat."
    ],
    "formCues": [
      "Rise straight up",
      "Press through big toe",
      "Control the lowering",
      "Keep torso tall"
    ],
    "commonMistakes": [
      "Bouncing at the bottom instead of lowering under control",
      "Rolling the ankles outward or inward",
      "Bending the knees to turn it into a squat",
      "Leaning the torso forward as the heels lift"
    ],
    "breathing": "Inhale as you lower your heels, and exhale as you press up onto your toes."
  },
  "dumbbell-stiff-leg-deadlift": {
    "exerciseId": "dumbbell-stiff-leg-deadlift",
    "name": "Dumbbell Stiff Leg Deadlift",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-stiff-leg-deadlift.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-stiff-leg-deadlift.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-stiff-leg-deadlift.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-stiff-leg-deadlift.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-stiff-leg-deadlift.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-stiff-leg-deadlift.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-stiff-leg-deadlift.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0432",
    "matchedExternalName": "Dumbbell Stiff Leg Deadlift",
    "confidence": "exact",
    "steps": [
      "Stand tall with your feet hip-width apart, holding a dumbbell in each hand in front of your thighs.",
      "Soften your knees slightly and brace your midsection.",
      "Push your hips straight back and slide the dumbbells down the front of your legs.",
      "Lower until the dumbbells reach mid-shin or you feel a strong hamstring stretch while keeping your back flat.",
      "Drive your feet into the floor and extend your hips to stand back up.",
      "Finish tall with the dumbbells at your thighs and repeat."
    ],
    "formCues": [
      "Hips back, not down",
      "Keep dumbbells close",
      "Back flat the whole time",
      "Feel the hamstring stretch"
    ],
    "commonMistakes": [
      "Bending the knees too much and turning it into a squat",
      "Letting the dumbbells drift away from the legs",
      "Rounding the lower back on the way down",
      "Looking up and cranking the neck"
    ],
    "breathing": "Inhale as you hinge and lower the dumbbells, then exhale as you drive your hips forward to stand tall."
  },
  "dumbbell-sumo-squat": {
    "exerciseId": "dumbbell-sumo-squat",
    "name": "Dumbbell Sumo Squat",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-bar-grip-sumo-squat.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-bar-grip-sumo-squat.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-bar-grip-sumo-squat.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-bar-grip-sumo-squat.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-bar-grip-sumo-squat.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-bar-grip-sumo-squat.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-bar-grip-sumo-squat.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "new-dumbbell-sumo-squat",
    "matchedExternalName": "Dumbbell Sumo Squat",
    "confidence": "exact",
    "steps": [
      "Stand with feet wide apart, toes angled outward.",
      "Grip the dumbbell vertically between your legs.",
      "Keep chest up and core braced.",
      "Squat down, pushing knees outward.",
      "Drive through heels to stand up."
    ],
    "formCues": [
      "Knees out",
      "Keep chest tall",
      "Sit hips back",
      "Drive through heels"
    ],
    "commonMistakes": [
      "Letting knees cave in",
      "Rounding the back",
      "Shallow squats"
    ],
    "breathing": "Inhale as you lower down, exhale as you stand up."
  },
  "dumbbell-upright-row": {
    "exerciseId": "dumbbell-upright-row",
    "name": "Dumbbell Upright Row",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-upright-row.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-upright-row.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-upright-row.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-upright-row.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-upright-row.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0437",
    "matchedExternalName": "Dumbbell Upright Row",
    "confidence": "exact",
    "steps": [
      "Stand tall with a dumbbell in each hand in front of your thighs, palms facing your body.",
      "Brace your midsection and keep your chest lifted.",
      "Pull the dumbbells straight up along the front of your body by driving your elbows up and out.",
      "Raise until the dumbbells reach about upper-chest height and your elbows stay higher than your hands.",
      "Pause briefly, then lower the dumbbells back to your thighs with control."
    ],
    "formCues": [
      "Lead with your elbows",
      "Keep dumbbells close",
      "Shoulders down and back",
      "Lift to upper chest"
    ],
    "commonMistakes": [
      "Pulling the dumbbells all the way to the chin",
      "Letting the wrists bend sharply at the top",
      "Swinging the torso to start the lift",
      "Hands rising higher than the elbows"
    ],
    "breathing": "Exhale as you pull the dumbbells up, and inhale as you lower them back down."
  },
  "dynamic-chest-stretch": {
    "exerciseId": "dynamic-chest-stretch",
    "name": "Dynamic Chest Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-dynamic-chest-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-dynamic-chest-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-dynamic-chest-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-dynamic-chest-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-dynamic-chest-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-dynamic-chest-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-dynamic-chest-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1167",
    "matchedExternalName": "Dynamic Chest Stretch",
    "confidence": "exact",
    "steps": [
      "Stand with your feet shoulder-width apart.",
      "Extend both arms out to your sides at shoulder height.",
      "Swing your arms forward, crossing them in front of your chest.",
      "Open your arms wide, stretching your chest as you do.",
      "Repeat the swinging motion for the desired number of repetitions."
    ],
    "formCues": [
      "Keep movements controlled",
      "Maintain upright posture",
      "Engage core",
      "Avoid twisting torso"
    ],
    "commonMistakes": [
      "Swinging arms too forcefully",
      "Allowing shoulders to shrug",
      "Rotating the torso excessively"
    ],
    "breathing": "Breathe naturally throughout the movement."
  },
  "elliptical-trainer": {
    "exerciseId": "elliptical-trainer",
    "name": "Elliptical Trainer",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/elliptical.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/elliptical.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/elliptical.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/elliptical.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/elliptical.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/elliptical.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/elliptical.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "2141",
    "matchedExternalName": "Elliptical Trainer",
    "confidence": "exact",
    "steps": [
      "Step onto the pedals and hold the handles.",
      "Select desired resistance and incline.",
      "Begin moving feet in a smooth, elliptical pattern.",
      "Push and pull the handles with your arms in sync with your strides.",
      "Maintain a steady cadence and upright posture."
    ],
    "formCues": [
      "Keep chest up",
      "Balance weight evenly",
      "Smooth, controlled motion",
      "Engage core lightly"
    ],
    "commonMistakes": [
      "Leaning too far forward or backward",
      "Relying only on legs or arms",
      "Choppy, fast movements"
    ],
    "breathing": "Maintain rhythmic, deep breathing throughout the workout."
  },
  "exercise-ball-sit-up": {
    "exerciseId": "exercise-ball-sit-up",
    "name": "Exercise Ball Sit-Up",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/sit-up-on-exercise-ball.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/sit-up-on-exercise-ball.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/sit-up-on-exercise-ball.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/sit-up-on-exercise-ball.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/sit-up-on-exercise-ball.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/sit-up-on-exercise-ball.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/sit-up-on-exercise-ball.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1338",
    "matchedExternalName": "Exercise Ball Sit-Up",
    "confidence": "exact",
    "steps": [
      "Sit on the exercise ball with feet flat on the floor.",
      "Walk feet forward, rolling until the ball supports your lower back.",
      "Cross arms over your chest or position hands behind your head.",
      "Engage your core and sit up, lifting your upper body.",
      "Lower back down under control to starting position."
    ],
    "formCues": [
      "Keep feet planted",
      "Avoid pulling neck",
      "Engage abs throughout",
      "Do not arch lower back"
    ],
    "commonMistakes": [
      "Using momentum",
      "Feet lifting off the ground",
      "Ball not positioned under lower back"
    ],
    "breathing": "Exhale as you lift, inhale as you lower."
  },
  "exercise-ball-spinal-stretch": {
    "exerciseId": "exercise-ball-spinal-stretch",
    "name": "Exercise Ball Spinal Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-spinal-stretch-on-exercise-ball.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-spinal-stretch-on-exercise-ball.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-spinal-stretch-on-exercise-ball.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-spinal-stretch-on-exercise-ball.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-spinal-stretch-on-exercise-ball.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-spinal-stretch-on-exercise-ball.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-spinal-stretch-on-exercise-ball.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1339",
    "matchedExternalName": "Exercise Ball Spinal Stretch",
    "confidence": "exact",
    "steps": [
      "Sit on the exercise ball with feet hip-width apart.",
      "Slowly walk your feet forward, rolling until your back is draped over the ball.",
      "Let your arms extend overhead or rest beside you for support.",
      "Relax into the stretch, allowing your spine to gently extend.",
      "Hold for the desired duration, then carefully return to a seated position."
    ],
    "formCues": [
      "Move slowly and controlled",
      "Keep feet planted",
      "Relax neck and shoulders",
      "Breathe deeply"
    ],
    "commonMistakes": [
      "Arching excessively",
      "Letting hips sag too low",
      "Losing balance on the ball"
    ],
    "breathing": "Breathe deeply and steadily throughout the stretch."
  },
  "ez-bar-biceps-curl": {
    "exerciseId": "ez-bar-biceps-curl",
    "name": "EZ Bar Biceps Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/ez-barbell-biceps-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/ez-barbell-biceps-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/ez-barbell-biceps-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/ez-barbell-biceps-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/ez-barbell-biceps-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/ez-barbell-biceps-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/ez-barbell-biceps-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "2407",
    "matchedExternalName": "EZ Bar Biceps Curl",
    "confidence": "exact",
    "steps": [
      "Grip the EZ bar at angled sections, palms facing up.",
      "Stand tall with arms fully extended and elbows anchored.",
      "Curl the bar upward, contracting the biceps.",
      "Pause and squeeze at the top.",
      "Lower the bar down slowly."
    ],
    "formCues": [
      "Keep elbows stationary",
      "Use full range of motion",
      "Don't swing the bar",
      "Control tempo"
    ],
    "commonMistakes": [
      "Using momentum",
      "Letting elbows move forward",
      "Partial reps"
    ],
    "breathing": "Exhale as you lift, inhale lowering the bar."
  },
  "ez-bar-lying-triceps-extension": {
    "exerciseId": "ez-bar-lying-triceps-extension",
    "name": "EZ Bar Lying Triceps Extension",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/ez-barbell-lying-triceps-extension.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/ez-barbell-lying-triceps-extension.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/ez-barbell-lying-triceps-extension.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/ez-barbell-lying-triceps-extension.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/ez-barbell-lying-triceps-extension.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/ez-barbell-lying-triceps-extension.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/ez-barbell-lying-triceps-extension.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0061",
    "matchedExternalName": "EZ Bar Lying Triceps Extension",
    "confidence": "exact",
    "steps": [
      "Lie on bench, grip EZ bar with medium width.",
      "Extend arms fully above chest.",
      "Bend elbows, lowering bar toward forehead.",
      "Keep upper arms stationary.",
      "Extend to starting position, repeat."
    ],
    "formCues": [
      "Lock upper arms",
      "Lower with control",
      "Don't move elbows",
      "Full triceps extension"
    ],
    "commonMistakes": [
      "Flaring elbows",
      "Moving upper arms",
      "Lowering bar too far past head"
    ],
    "breathing": "Inhale lowering bar, exhale extending arms."
  },
  "ez-barbell-anti-gravity-press": {
    "exerciseId": "ez-barbell-anti-gravity-press",
    "name": "EZ Barbell Anti Gravity Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/ez-barbell-anti-gravity-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/ez-barbell-anti-gravity-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/ez-barbell-anti-gravity-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/ez-barbell-anti-gravity-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/ez-barbell-anti-gravity-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/ez-barbell-anti-gravity-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/ez-barbell-anti-gravity-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0445",
    "matchedExternalName": "EZ Barbell Anti Gravity Press",
    "confidence": "exact",
    "steps": [
      "Stand tall with your feet about hip- to shoulder-width apart and hold the EZ bar at shoulder height with an overhand grip.",
      "Brace your core and keep your wrists stacked over your elbows.",
      "Press the bar straight overhead until your arms are fully extended above your shoulders.",
      "Move your head slightly back as the bar passes your face, then bring your head through under the bar at the top.",
      "Lower the bar under control back to shoulder height.",
      "Repeat each rep from a stable standing position."
    ],
    "formCues": [
      "Press straight overhead",
      "Ribs down, core tight",
      "Wrists stacked over elbows",
      "Head through at top"
    ],
    "commonMistakes": [
      "Leaning back hard and turning it into an incline press",
      "Pressing the bar out in front instead of overhead",
      "Flaring the elbows too far out from the start",
      "Lowering the bar too fast and bouncing at the shoulders"
    ],
    "breathing": "Inhale and brace at shoulder height, exhale as you press overhead, and inhale again as you lower the bar back down."
  },
  "feet-and-ankles-rotation-stretch": {
    "exerciseId": "feet-and-ankles-rotation-stretch",
    "name": "Feet and Ankles Rotation Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-feet-and-ankles-rotation-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-feet-and-ankles-rotation-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-feet-and-ankles-rotation-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-feet-and-ankles-rotation-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-feet-and-ankles-rotation-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-feet-and-ankles-rotation-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-feet-and-ankles-rotation-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-feet-and-ankles-rotation-stretch",
    "matchedExternalName": "Feet and Ankles Rotation Stretch",
    "confidence": "exact",
    "steps": [
      "Sit or stand and lift one foot off the ground.",
      "Point your toes and slowly rotate your ankle in circles.",
      "Make several circles clockwise, then reverse to counterclockwise.",
      "Repeat for the other ankle.",
      "Maintain steady breathing and controlled motion."
    ],
    "formCues": [
      "Move slowly",
      "Full range of motion",
      "Relax foot",
      "Rotate both directions"
    ],
    "commonMistakes": [
      "Rushed movements",
      "Small circles",
      "Not changing direction"
    ],
    "breathing": "Breathe normally throughout the stretch."
  },
  "feet-and-ankles-stretch": {
    "exerciseId": "feet-and-ankles-stretch",
    "name": "Feet and Ankles Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-feet-and-ankles-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-feet-and-ankles-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-feet-and-ankles-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-feet-and-ankles-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-feet-and-ankles-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-feet-and-ankles-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-feet-and-ankles-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-feet-and-ankles-stretch",
    "matchedExternalName": "Feet and Ankles Stretch",
    "confidence": "exact",
    "steps": [
      "Sit or stand with legs extended or positioned comfortably.",
      "Point your toes downward to stretch the top of your feet and fronts of your ankles.",
      "Flex your toes upward toward your shins to stretch the calves and back of the ankles.",
      "Hold each position for 15-30 seconds.",
      "Repeat the sequence for several reps."
    ],
    "formCues": [
      "Move slowly through each phase",
      "Hold gentle tension, do not force",
      "Keep knees extended but soft",
      "Breathe evenly"
    ],
    "commonMistakes": [
      "Bouncing during the stretch",
      "Overstretching or forcing range of motion",
      "Holding breath"
    ],
    "breathing": "Breathe normally throughout, or exhale as you relax into each stretch."
  },
  "flat-bench-cable-fly": {
    "exerciseId": "flat-bench-cable-fly",
    "name": "Flat Bench Cable Fly",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-lying-fly-flat-bench-cable-fly.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-lying-fly-flat-bench-cable-fly.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-lying-fly-flat-bench-cable-fly.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-lying-fly-flat-bench-cable-fly.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-lying-fly-flat-bench-cable-fly.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-lying-fly-flat-bench-cable-fly.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-lying-fly-flat-bench-cable-fly.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0620",
    "matchedExternalName": "Flat Bench Cable Fly",
    "confidence": "exact",
    "steps": [
      "Set a flat bench between two cable pulleys and attach handles.",
      "Lie back and grip each handle with arms extended.",
      "With elbows slightly bent, bring handles together above your chest.",
      "Squeeze your chest at the top.",
      "Slowly return to the starting position with control."
    ],
    "formCues": [
      "Maintain slight elbow bend",
      "Keep arms wide",
      "Control both directions",
      "Avoid overstretching"
    ],
    "commonMistakes": [
      "Locking elbows",
      "Letting the cables slam back",
      "Using too much weight"
    ],
    "breathing": "Exhale as you bring hands together, inhale as you return."
  },
  "flexion-leg-sit-up-stretch": {
    "exerciseId": "flexion-leg-sit-up-stretch",
    "name": "Flexion Leg Sit-Up Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-flexion-leg-sit-up.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-flexion-leg-sit-up.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-flexion-leg-sit-up.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-flexion-leg-sit-up.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-flexion-leg-sit-up.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-flexion-leg-sit-up.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-flexion-leg-sit-up.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-flexion-leg-sit-up",
    "matchedExternalName": "Flexion Leg Sit-Up Stretch",
    "confidence": "exact",
    "steps": [
      "Lie on your back with knees bent and feet flat on the floor.",
      "Cross arms over chest or reach toward knees.",
      "Contract abdominal muscles to sit up, curling your spine.",
      "Reach for your knees at the top to enhance the stretch.",
      "Lower back to starting position with control."
    ],
    "formCues": [
      "Curl up slowly",
      "Avoid pulling on neck",
      "Engage core throughout",
      "Keep feet flat"
    ],
    "commonMistakes": [
      "Jerking the movement",
      "Using momentum instead of muscle",
      "Straining the neck"
    ],
    "breathing": "Exhale as you sit up, inhale as you lower down."
  },
  "floor-crunch": {
    "exerciseId": "floor-crunch",
    "name": "Floor Crunch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/crunch-floor-female.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/crunch-floor-female.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/crunch-floor-female.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/crunch-floor-female.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/crunch-floor-female.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0274",
    "matchedExternalName": "Floor Crunch",
    "confidence": "exact",
    "steps": [
      "Lie on your back with knees bent and feet hip-width apart.",
      "Place hands lightly behind head or cross over chest.",
      "Engage core and lift shoulders off the floor.",
      "Pause briefly at the top of the movement.",
      "Slowly return to the starting position."
    ],
    "formCues": [
      "Keep chin off chest",
      "Lower back pressed to floor",
      "Controlled movement",
      "Exhale on crunch"
    ],
    "commonMistakes": [
      "Pulling on neck",
      "Not engaging core",
      "Using momentum",
      "Not breathing properly"
    ],
    "breathing": "Exhale as you crunch up, inhale as you lower down."
  },
  "front-plank": {
    "exerciseId": "front-plank",
    "name": "Front Plank",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/front-plank-female.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/front-plank-female.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/front-plank-female.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/front-plank-female.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/front-plank-female.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0464",
    "matchedExternalName": "Front Plank",
    "confidence": "exact",
    "steps": [
      "Lie face down, placing forearms on the ground and elbows under shoulders.",
      "Lift your body off the floor, supporting weight on forearms and toes.",
      "Keep your body in a straight line from head to heels.",
      "Engage your core and glutes for stability.",
      "Hold the position for the prescribed time, then lower to the ground."
    ],
    "formCues": [
      "Keep core tight",
      "Neutral spine",
      "Do not let hips drop",
      "Look down"
    ],
    "commonMistakes": [
      "Letting hips drop or rise",
      "Arched back",
      "Not engaging the core"
    ],
    "breathing": "Breathe slowly and steadily during the hold."
  },
  "front-toe-touch-stretch": {
    "exerciseId": "front-toe-touch-stretch",
    "name": "Front Toe Touch Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-front-toe-touch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-front-toe-touch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-front-toe-touch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-front-toe-touch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-front-toe-touch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-front-toe-touch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-front-toe-touch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-front-toe-touch",
    "matchedExternalName": "Front Toe Touch Stretch",
    "confidence": "exact",
    "steps": [
      "Stand (or sit) with legs straight.",
      "Bend slowly forward from the hips, keeping a flat back.",
      "Reach towards or touch your toes with your hands.",
      "Keep knees straight but not locked.",
      "Hold stretch, then return to starting position."
    ],
    "formCues": [
      "Hinge at hips",
      "Keep head in line with spine",
      "Reach gently, don’t bounce",
      "Keep legs straight"
    ],
    "commonMistakes": [
      "Rounding the back excessively",
      "Bouncing or forcing the stretch",
      "Locking the knees"
    ],
    "breathing": "Exhale as you bend forward, inhale as you return upright."
  },
  "glute-bridge": {
    "exerciseId": "glute-bridge",
    "name": "Glute Bridge",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/hip-raise-bridge.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/hip-raise-bridge.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/hip-raise-bridge.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/hip-raise-bridge.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/hip-raise-bridge.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-hip-raise-bridge",
    "matchedExternalName": "Glute Bridge",
    "confidence": "exact",
    "steps": [
      "Start lying on back with knees bent, feet hip-width apart.",
      "Arms rest at sides, palms down.",
      "Push through heels, lifting hips toward ceiling.",
      "Pause and squeeze glutes at top.",
      "Lower hips back to floor."
    ],
    "formCues": [
      "Drive through heels",
      "Squeeze glutes",
      "Don't overarch back",
      "Keep knees in line"
    ],
    "commonMistakes": [
      "Pushing through toes",
      "Flaring ribs",
      "Rushing movement"
    ],
    "breathing": "Exhale as you lift hips, inhale as you lower down."
  },
  "hanging-leg-hip-raise": {
    "exerciseId": "hanging-leg-hip-raise",
    "name": "Hanging Leg Hip Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/hanging-leg-hip-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/hanging-leg-hip-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/hanging-leg-hip-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/hanging-leg-hip-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/hanging-leg-hip-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/hanging-leg-hip-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/hanging-leg-hip-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1764",
    "matchedExternalName": "Hanging Leg Hip Raise",
    "confidence": "exact",
    "steps": [
      "Hang from the bar with both hands and let your body settle into a dead hang.",
      "Pull your ribs down and brace your midsection to stop excess swinging.",
      "Bend your knees and lift them toward your chest by curling your hips upward.",
      "Raise until your thighs are at least parallel to the floor or your knees reach hip height.",
      "Pause briefly at the top while keeping your torso steady.",
      "Lower your legs with control until you return to a full hang."
    ],
    "formCues": [
      "Curl pelvis up",
      "Control the swing",
      "Ribs down",
      "Lift knees, not shoulders"
    ],
    "commonMistakes": [
      "Swinging the body to start each rep",
      "Shrugging the shoulders up toward the ears",
      "Dropping the legs quickly on the way down",
      "Only lifting the knees halfway with no hip curl"
    ],
    "breathing": "Exhale as you raise your knees and curl your hips up; inhale as you lower back to the hang."
  },
  "hanging-straight-leg-raise": {
    "exerciseId": "hanging-straight-leg-raise",
    "name": "Hanging Straight Leg Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/hanging-straight-leg-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/hanging-straight-leg-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/hanging-straight-leg-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/hanging-straight-leg-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/hanging-straight-leg-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/hanging-straight-leg-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/hanging-straight-leg-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0474",
    "matchedExternalName": "Hanging Straight Leg Raise",
    "confidence": "exact",
    "steps": [
      "Hang from a pull-up bar with arms fully extended.",
      "Keep legs together and straight.",
      "Engage core and lift legs up to parallel or higher.",
      "Pause briefly at the top.",
      "Lower legs under control to starting position."
    ],
    "formCues": [
      "Avoid swinging",
      "Lift with core, not momentum",
      "Keep legs straight",
      "Control leg descent"
    ],
    "commonMistakes": [
      "Swinging the body",
      "Using momentum",
      "Bending knees or arching back"
    ],
    "breathing": "Exhale as you lift legs, inhale as you lower."
  },
  "hip-circles-stretch": {
    "exerciseId": "hip-circles-stretch",
    "name": "Hip Circles Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-hip-circles-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-hip-circles-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-hip-circles-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-hip-circles-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-hip-circles-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-hip-circles-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-hip-circles-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0257",
    "matchedExternalName": "Hip Circles Stretch",
    "confidence": "exact",
    "steps": [
      "Stand tall with feet shoulder-width apart, hands on hips.",
      "Lift one knee up in front of you.",
      "Move your knee and thigh in a circular motion outward.",
      "Reverse and perform circles inward after the set.",
      "Switch legs and repeat."
    ],
    "formCues": [
      "Move leg from the hip",
      "Keep upper body stable",
      "Smooth, controlled circles",
      "Breathe steadily"
    ],
    "commonMistakes": [
      "Rushing the circles",
      "Swinging the whole body",
      "Holding breath"
    ],
    "breathing": "Inhale and exhale naturally during the stretch."
  },
  "hip-extension-stretch": {
    "exerciseId": "hip-extension-stretch",
    "name": "Hip Extension Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-hip-extension-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-hip-extension-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-hip-extension-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-hip-extension-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-hip-extension-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-hip-extension-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-hip-extension-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-hip-extension-stretch",
    "matchedExternalName": "Hip Extension Stretch",
    "confidence": "exact",
    "steps": [
      "Lie face down with legs extended.",
      "Place hands beneath shoulders, elbows bent.",
      "Press palms into floor, lifting chest and gently extending hips.",
      "Hold the stretch at a comfortable tension.",
      "Slowly lower back down."
    ],
    "formCues": [
      "Avoid excessive back arch",
      "Keep hips on floor",
      "Press through palms",
      "Stretch gradually"
    ],
    "commonMistakes": [
      "Overarching the lower back",
      "Forcing the stretch",
      "Holding breath"
    ],
    "breathing": "Inhale while preparing, exhale as you press up into stretch."
  },
  "hip-flexor-and-quadriceps-stretch": {
    "exerciseId": "hip-flexor-and-quadriceps-stretch",
    "name": "Hip Flexor and Quadriceps Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-hip-flexor-and-quad-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-hip-flexor-and-quad-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-hip-flexor-and-quad-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-hip-flexor-and-quad-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-hip-flexor-and-quad-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-hip-flexor-and-quad-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-hip-flexor-and-quad-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1564",
    "matchedExternalName": "Hip Flexor and Quadriceps Stretch",
    "confidence": "exact",
    "steps": [
      "Begin in a half-kneeling position, one knee down, one foot forward.",
      "Keep torso upright with hands on hips or front knee.",
      "Push hips forward slightly to increase the stretch.",
      "Feel the stretch in the hip flexor and thigh of the back leg.",
      "Hold for desired time, then switch legs."
    ],
    "formCues": [
      "Keep core engaged",
      "Torso upright",
      "Push hips forward gently",
      "Don't arch lower back"
    ],
    "commonMistakes": [
      "Leaning forward",
      "Arching lower back",
      "Letting front knee go past toes"
    ],
    "breathing": "Breathe deeply and steadily throughout the stretch."
  },
  "incline-leg-hip-raise": {
    "exerciseId": "incline-leg-hip-raise",
    "name": "Incline Leg Hip Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/incline-leg-hip-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/incline-leg-hip-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/incline-leg-hip-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/incline-leg-hip-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/incline-leg-hip-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/incline-leg-hip-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/incline-leg-hip-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0325",
    "matchedExternalName": "Incline Leg Hip Raise",
    "confidence": "exact",
    "steps": [
      "Lie face up on an incline bench and grip the handles behind your head.",
      "Extend your legs straight and keep them together.",
      "Raise your legs towards your chest, lifting your hips off the bench.",
      "Pause at the top, focusing on contracting your abs.",
      "Lower your legs under control to the starting position."
    ],
    "formCues": [
      "Keep legs straight",
      "Lift hips at top",
      "Control lowering",
      "Don't use momentum"
    ],
    "commonMistakes": [
      "Swinging legs",
      "Arching lower back excessively",
      "Not performing full hip lift"
    ],
    "breathing": "Exhale as you lift hips, inhale as you lower legs."
  },
  "incline-push-up": {
    "exerciseId": "incline-push-up",
    "name": "Incline Push-Up",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/incline-push-ups.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/incline-push-ups.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/incline-push-ups.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/incline-push-ups.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/incline-push-ups.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/incline-push-ups.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/incline-push-ups.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0493",
    "matchedExternalName": "Incline Push-Up",
    "confidence": "exact",
    "steps": [
      "Place hands shoulder-width apart on elevated surface.",
      "Extend legs back with feet together, forming a straight line.",
      "Lower chest toward the surface, elbows at 45 degrees.",
      "Pause when chest is just above the surface.",
      "Push back up to starting position."
    ],
    "formCues": [
      "Maintain straight line body",
      "Core engaged",
      "Lower under control",
      "Exhale as you push up"
    ],
    "commonMistakes": [
      "Sagging hips",
      "Flaring elbows out",
      "Incomplete range of motion"
    ],
    "breathing": "Inhale as you lower, exhale as you push up."
  },
  "inverted-row-between-chairs": {
    "exerciseId": "inverted-row-between-chairs",
    "name": "Inverted Row Between Chairs",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/inverted-row-between-chairs.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/inverted-row-between-chairs.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/inverted-row-between-chairs.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/inverted-row-between-chairs.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/inverted-row-between-chairs.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/inverted-row-between-chairs.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/inverted-row-between-chairs.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0499",
    "matchedExternalName": "Inverted Row Between Chairs",
    "confidence": "exact",
    "steps": [
      "Set up a sturdy bar between two heavy chairs.",
      "Lie underneath with your chest directly below the bar.",
      "Grip the bar with an overhand, shoulder-width grip.",
      "Brace your body, keeping a straight line from head to heels.",
      "Pull your chest to the bar, pause, then lower yourself slowly."
    ],
    "formCues": [
      "Keep your body straight",
      "Squeeze shoulder blades",
      "Don't let hips sag",
      "Pull to chest, not neck"
    ],
    "commonMistakes": [
      "Allowing hips to drop",
      "Flared elbows",
      "Not lowering all the way",
      "Not squeezing shoulder blades"
    ],
    "breathing": "Exhale as you pull up, inhale as you lower down."
  },
  "inverted-row-with-straps": {
    "exerciseId": "inverted-row-with-straps",
    "name": "Inverted Row With Straps",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/inverted-row-with-straps.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/inverted-row-with-straps.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/inverted-row-with-straps.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/inverted-row-with-straps.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/inverted-row-with-straps.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/inverted-row-with-straps.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/inverted-row-with-straps.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0498",
    "matchedExternalName": "Inverted Row With Straps",
    "confidence": "exact",
    "steps": [
      "Set the straps to about chest height and stand facing the anchor point.",
      "Grab the handles with an overhand grip and walk your feet forward until your body leans back in a straight line.",
      "Brace your core and keep your heels planted with your arms fully extended.",
      "Pull your chest toward the handles by driving your elbows back and squeezing your shoulder blades together.",
      "Pause briefly when your hands reach your ribs or chest.",
      "Lower yourself with control until your arms are straight again."
    ],
    "formCues": [
      "Keep body in one line",
      "Drive elbows back",
      "Squeeze shoulder blades",
      "Keep shoulders down"
    ],
    "commonMistakes": [
      "Hips sag or pike instead of staying straight",
      "Shrugging the shoulders up toward the ears",
      "Pulling with bent wrists and loose handles",
      "Letting the body drop quickly on the way down"
    ],
    "breathing": "Inhale as you lower yourself away from the handles, and exhale as you pull your chest toward them."
  },
  "iron-cross-stretch": {
    "exerciseId": "iron-cross-stretch",
    "name": "Iron Cross Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-iron-cross-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-iron-cross-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-iron-cross-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-iron-cross-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-iron-cross-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-iron-cross-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-iron-cross-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1419",
    "matchedExternalName": "Iron Cross Stretch",
    "confidence": "exact",
    "steps": [
      "Lie on your back with arms extended out to the sides.",
      "Lift one leg straight up towards the ceiling.",
      "Sweep the raised leg across your body to the opposite side.",
      "Allow your foot to touch or lower towards the floor.",
      "Hold the stretch, then switch legs."
    ],
    "formCues": [
      "Shoulders stay flat",
      "Sweep leg slowly",
      "Breathe deeply into stretch",
      "Relax into the twist"
    ],
    "commonMistakes": [
      "Lifting shoulders off the floor",
      "Twisting too quickly",
      "Holding breath",
      "Allowing hips to pop up"
    ],
    "breathing": "Exhale as you move into the twist, inhale as you return to center."
  },
  "jackknife": {
    "exerciseId": "jackknife",
    "name": "Jackknife",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/jackknife-pilates.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/jackknife-pilates.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/jackknife-pilates.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/jackknife-pilates.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/jackknife-pilates.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-jackknife-pilates",
    "matchedExternalName": "Jackknife",
    "confidence": "exact",
    "steps": [
      "Lie on your back with arms at your sides and legs extended.",
      "Engage your core and lift legs towards the ceiling.",
      "Continue lifting hips off the mat, reaching feet upward.",
      "Pause at the top with hips elevated.",
      "Slowly roll back down vertebra by vertebra."
    ],
    "formCues": [
      "Keep legs straight",
      "Lift with core",
      "Control the descent",
      "Avoid swinging"
    ],
    "commonMistakes": [
      "Letting legs fall too quickly",
      "Arching the back excessively",
      "Pushing with arms"
    ],
    "breathing": "Exhale while lifting up, inhale while lowering down."
  },
  "jackknife-floor": {
    "exerciseId": "jackknife-floor",
    "name": "Jackknife Floor",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/jack-knife-floor.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/jack-knife-floor.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/jack-knife-floor.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/jack-knife-floor.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/jack-knife-floor.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0981",
    "matchedExternalName": "Jackknife Floor",
    "confidence": "exact",
    "steps": [
      "Lie flat with arms extended overhead and legs straight.",
      "Engage your core, lift arms and legs toward each other.",
      "Reach hands toward feet, forming a 'V' at the top.",
      "Pause briefly, squeezing at the top.",
      "Lower back down slowly to starting position."
    ],
    "formCues": [
      "Keep legs straight",
      "Lift arms and legs together",
      "Do not swing",
      "Control the descent"
    ],
    "commonMistakes": [
      "Bending knees or elbows too much",
      "Heaving with momentum",
      "Letting lower back arch"
    ],
    "breathing": "Exhale as you lift, inhale as you lower."
  },
  "jackknife-split-crunch": {
    "exerciseId": "jackknife-split-crunch",
    "name": "Jackknife Split Crunch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/jack-split-crunches.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/jack-split-crunches.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/jack-split-crunches.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/jack-split-crunches.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/jack-split-crunches.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-jack-split-crunches",
    "matchedExternalName": "Jackknife Split Crunch",
    "confidence": "exact",
    "steps": [
      "Lie on your back with arms extended overhead and legs straight.",
      "Engage your core and simultaneously lift your torso and legs off the ground.",
      "As you rise, spread your legs into a split while reaching your hands toward your feet.",
      "Pause at the top, squeezing your abs.",
      "Lower your legs and torso back to the ground with control, bringing feet together."
    ],
    "formCues": [
      "Keep core tight",
      "Don't arch lower back",
      "Lead with chest",
      "Controlled split"
    ],
    "commonMistakes": [
      "Swinging the legs",
      "Using momentum",
      "Arching the lower back"
    ],
    "breathing": "Exhale when crunching up, inhale when lowering down."
  },
  "jump-rope": {
    "exerciseId": "jump-rope",
    "name": "Jump Rope",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/jump-rope.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/jump-rope.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/jump-rope.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/jump-rope.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/jump-rope.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/jump-rope.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/jump-rope.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "2612",
    "matchedExternalName": "Jump Rope",
    "confidence": "exact",
    "steps": [
      "Hold a handle in each hand with the rope behind your heels.",
      "Stand tall with feet close together and elbows tucked by your sides.",
      "Turn the rope with your wrists and swing it up overhead.",
      "Hop just high enough to clear the rope as it passes under your feet.",
      "Land softly on the balls of your feet with knees slightly bent.",
      "Keep the rope moving in a smooth rhythm and repeat each jump."
    ],
    "formCues": [
      "Turn with the wrists",
      "Stay light on your feet",
      "Jump only as needed",
      "Keep elbows close"
    ],
    "commonMistakes": [
      "Swinging the arms in big circles instead of using the wrists",
      "Jumping too high off the floor on each rep",
      "Landing flat-footed or with stiff knees",
      "Letting the hands drift wide away from the hips"
    ],
    "breathing": "Breathe steadily and naturally, exhaling softly every few jumps while keeping a relaxed rhythm."
  },
  "jump-step-up": {
    "exerciseId": "jump-step-up",
    "name": "Jump Step-Up",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/jump-step-up.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/jump-step-up.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/jump-step-up.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/jump-step-up.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/jump-step-up.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/jump-step-up.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/jump-step-up.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-jump-step-up",
    "matchedExternalName": "Jump Step-Up",
    "confidence": "exact",
    "steps": [
      "Stand facing a sturdy box or platform.",
      "Place one foot firmly on top of the box.",
      "Drive through the heel and explode upward, lifting your other knee high.",
      "Land softly on the box with both feet.",
      "Step or jump down with control and repeat."
    ],
    "formCues": [
      "Drive explosively through the lead leg",
      "Land softly",
      "Keep chest lifted",
      "Use arms for balance"
    ],
    "commonMistakes": [
      "Letting the knee cave inward",
      "Landing hard or flat-footed",
      "Not using full range of motion"
    ],
    "breathing": "Exhale during the jump, inhale as you land and reset."
  },
  "jumping-jack": {
    "exerciseId": "jumping-jack",
    "name": "Jumping Jack",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/jumping-jack.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/jumping-jack.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/jumping-jack.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/jumping-jack.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/jumping-jack.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/jumping-jack.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/jumping-jack.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "new-low-impact-jumping-jack",
    "matchedExternalName": "Jumping Jack",
    "confidence": "exact",
    "steps": [
      "Start with feet together and arms relaxed at your sides.",
      "Jump feet out to shoulder-width as you raise arms overhead.",
      "Briefly touch hands or keep arms straight above head.",
      "Jump feet back together and arms down to sides.",
      "Repeat at a brisk pace."
    ],
    "formCues": [
      "Land softly",
      "Keep core engaged",
      "Full arm extension",
      "Stay light on feet"
    ],
    "commonMistakes": [
      "Slapping feet",
      "Incomplete arm raise",
      "Landing hard on heels"
    ],
    "breathing": "Breathe evenly throughout the movement."
  },
  "kettlebell-deadlift": {
    "exerciseId": "kettlebell-deadlift",
    "name": "Kettlebell Deadlift",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/kettlebell-deadlift.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/kettlebell-deadlift.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/kettlebell-deadlift.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/kettlebell-deadlift.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/kettlebell-deadlift.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/kettlebell-deadlift.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/kettlebell-deadlift.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-kettlebell-deadlift",
    "matchedExternalName": "Kettlebell Deadlift",
    "confidence": "exact",
    "steps": [
      "Place kettlebell between your feet; stand with feet hip-width apart.",
      "Hinge at hips and bend knees, keeping back flat and chest up.",
      "Grip the kettlebell handle with both hands.",
      "Drive through your heels to stand up, fully extending hips and knees.",
      "Lower the kettlebell to the floor under control by hinging at the hips."
    ],
    "formCues": [
      "Flat back",
      "Push through heels",
      "Engage glutes",
      "Keep kettlebell close"
    ],
    "commonMistakes": [
      "Rounding the lower back",
      "Letting kettlebell drift from body",
      "Locking knees early",
      "Shrugging shoulders"
    ],
    "breathing": "Exhale as you stand up, inhale as you lower down."
  },
  "kneeling-back-rotation-stretch": {
    "exerciseId": "kneeling-back-rotation-stretch",
    "name": "Kneeling Back Rotation Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-kneeling-back-rotation-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-kneeling-back-rotation-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-kneeling-back-rotation-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-kneeling-back-rotation-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-kneeling-back-rotation-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-kneeling-back-rotation-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-kneeling-back-rotation-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-kneeling-back-rotation-stretch",
    "matchedExternalName": "Kneeling Back Rotation Stretch",
    "confidence": "exact",
    "steps": [
      "Kneel on the floor (all fours or lunge position).",
      "Place one hand behind your head or neck.",
      "Rotate elbow and upper body upward, opening chest.",
      "Hold for a moment at top of rotation.",
      "Return to start and repeat; switch sides."
    ],
    "formCues": [
      "Keep hips stable",
      "Open chest fully",
      "Rotate through upper back",
      "Move slowly"
    ],
    "commonMistakes": [
      "Rotating through lower back",
      "Forcing the stretch",
      "Letting hips move"
    ],
    "breathing": "Exhale as you rotate, inhale returning to start."
  },
  "kneeling-lat-stretch": {
    "exerciseId": "kneeling-lat-stretch",
    "name": "Kneeling Lat Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-kneeling-lat-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-kneeling-lat-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-kneeling-lat-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-kneeling-lat-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-kneeling-lat-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-kneeling-lat-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-kneeling-lat-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1346",
    "matchedExternalName": "Kneeling Lat Stretch",
    "confidence": "exact",
    "steps": [
      "Kneel and sit hips back on heels.",
      "Reach both arms forward, palms on floor.",
      "Push chest toward the ground.",
      "Hold the stretch, focusing on the long side body.",
      "Optionally shift hands to each side for more stretch."
    ],
    "formCues": [
      "Keep arms straight",
      "Reach fingertips forward",
      "Drop chest down",
      "Relax neck and shoulders"
    ],
    "commonMistakes": [
      "Arching lower back excessively",
      "Bending elbows too much",
      "Letting hips lift off heels",
      "Tensing shoulders"
    ],
    "breathing": "Inhale deeply as you reach forward, exhale as you sink deeper into the stretch."
  },
  "kneeling-triceps-stretch": {
    "exerciseId": "kneeling-triceps-stretch",
    "name": "Kneeling Triceps Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-kneeling-triceps-extension.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-kneeling-triceps-extension.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-kneeling-triceps-extension.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-kneeling-triceps-extension.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-kneeling-triceps-extension.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-kneeling-triceps-extension.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-kneeling-triceps-extension.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1771",
    "matchedExternalName": "Kneeling Triceps Stretch",
    "confidence": "exact",
    "steps": [
      "Kneel on the floor or mat.",
      "Raise one arm overhead then bend the elbow so your hand touches your upper back.",
      "Use your other hand to gently push on the bent elbow.",
      "Hold the stretch.",
      "Switch arms and repeat."
    ],
    "formCues": [
      "Keep back straight",
      "Elbow points up",
      "Gently press, don’t force",
      "Relax neck and shoulders"
    ],
    "commonMistakes": [
      "Arching the back",
      "Pushing too hard",
      "Letting elbow flare out"
    ],
    "breathing": "Breathe deeply and steadily throughout the stretch."
  },
  "landmine-180": {
    "exerciseId": "landmine-180",
    "name": "Landmine 180",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/landmine-180.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/landmine-180.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/landmine-180.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/landmine-180.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/landmine-180.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/landmine-180.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/landmine-180.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0562",
    "matchedExternalName": "Landmine 180",
    "confidence": "exact",
    "steps": [
      "Stand facing the free end of the barbell with your feet about shoulder-width apart, and hold the barbell sleeve with both hands in front of your chest.",
      "Bend your knees slightly, brace your midsection, and keep your arms long but not locked.",
      "Rotate your shoulders and hips together to lower the barbell toward one hip.",
      "Drive through your feet and rotate across your body to sweep the barbell in an arc toward the opposite side.",
      "Control the barbell as it changes direction, and continue rotating side to side with your chest facing the barbell.",
      "Keep the movement smooth and balanced on both sides until the set is complete."
    ],
    "formCues": [
      "Rotate hips and shoulders together",
      "Brace your core",
      "Move the bar in an arc",
      "Stay tall through the chest"
    ],
    "commonMistakes": [
      "Twisting only the arms while the torso stays still",
      "Letting the lower back arch as the bar moves",
      "Locking the knees and staying flat-footed",
      "Jerking the bar instead of controlling the arc"
    ],
    "breathing": "Inhale as the barbell moves to one side, and exhale as you rotate it across to the other side."
  },
  "leg-raise-crunch": {
    "exerciseId": "leg-raise-crunch",
    "name": "Leg Raise Crunch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/crunch-leg-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/crunch-leg-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/crunch-leg-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/crunch-leg-raise.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/crunch-leg-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0600",
    "matchedExternalName": "Leg Raise Crunch",
    "confidence": "exact",
    "steps": [
      "Lie on your back and extend your legs.",
      "Place your hands by your sides or behind your head.",
      "Simultaneously lift your legs and upper torso toward each other.",
      "Squeeze at the top of the movement.",
      "Lower your legs and upper body back down under control."
    ],
    "formCues": [
      "Keep lower back pressed to floor",
      "Move slowly",
      "Exhale at the crunch",
      "Don't use momentum"
    ],
    "commonMistakes": [
      "Arching the lower back",
      "Using momentum",
      "Neck strain from pulling"
    ],
    "breathing": "Exhale during the crunch, inhale as you return."
  },
  "leg-raise-with-hip-lift": {
    "exerciseId": "leg-raise-with-hip-lift",
    "name": "Leg Raise with Hip Lift",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/leg-raise-hip-lift.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/leg-raise-hip-lift.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/leg-raise-hip-lift.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/leg-raise-hip-lift.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/leg-raise-hip-lift.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-leg-raise-hip-lift",
    "matchedExternalName": "Leg Raise with Hip Lift",
    "confidence": "exact",
    "steps": [
      "Lie flat with arms at your sides and legs straight.",
      "Raise your legs up together towards the ceiling.",
      "At the top of the movement, press your legs up by lifting your hips off the ground.",
      "Pause, squeezing your abs.",
      "Lower your hips and legs back to the starting position slowly."
    ],
    "formCues": [
      "Keep legs together",
      "Don’t swing",
      "Lift hips with control",
      "Keep back flat"
    ],
    "commonMistakes": [
      "Using momentum",
      "Arching lower back",
      "Not controlling the descent"
    ],
    "breathing": "Exhale during hip lift, inhale during the descent."
  },
  "lever-back-extension": {
    "exerciseId": "lever-back-extension",
    "name": "Lever Back Extension",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-back-extension.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-back-extension.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-back-extension.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-back-extension.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-back-extension.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-back-extension.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-back-extension.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0573",
    "matchedExternalName": "Lever Back Extension",
    "confidence": "exact",
    "steps": [
      "Adjust the machine so the back pad sits comfortably against your upper back and your feet are secured on the platform.",
      "Sit tall against the pad and grip the handles or side bars.",
      "Brace your core and lean your torso forward under control through the machine's range.",
      "Stop at the bottom when you feel a comfortable stretch and keep your feet pressed into the platform.",
      "Drive your torso back against the pad until you return to an upright position.",
      "Repeat smoothly without bouncing or jerking the pad."
    ],
    "formCues": [
      "Brace before you move",
      "Move through a smooth arc",
      "Keep feet firmly planted",
      "Return to tall posture"
    ],
    "commonMistakes": [
      "Using momentum and bouncing out of the bottom position",
      "Pushing through a short, rushed range of motion",
      "Letting the feet lift or shift on the platform",
      "Hyperextending far past upright at the top"
    ],
    "breathing": "Inhale as you lean forward, then exhale as you extend back to an upright position."
  },
  "lever-high-row": {
    "exerciseId": "lever-high-row",
    "name": "Lever High Row",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-high-row.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-high-row.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-high-row.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-high-row.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-high-row.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-high-row.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-high-row.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0581",
    "matchedExternalName": "Lever High Row",
    "confidence": "exact",
    "steps": [
      "Adjust the seat so the handles start around upper-chest height when you sit down.",
      "Sit with your chest firmly against the pad and place your feet flat on the platform.",
      "Grab the handles with an overhand grip and straighten your arms without lifting your chest off the pad.",
      "Pull the handles back toward your upper ribs by driving your elbows down and back.",
      "Squeeze your shoulder blades together at the end of the pull.",
      "Return the handles forward under control until your arms are straight again."
    ],
    "formCues": [
      "Chest stays on pad",
      "Drive elbows back",
      "Squeeze shoulder blades",
      "Control the return"
    ],
    "commonMistakes": [
      "Shrugging the shoulders up toward the ears as you pull",
      "Leaning off the chest pad to move the weight",
      "Letting the handles slam forward between reps",
      "Bending the wrists back instead of keeping them neutral"
    ],
    "breathing": "Exhale as you pull the handles toward you, and inhale as you return to the starting position."
  },
  "lever-horizontal-leg-press": {
    "exerciseId": "lever-horizontal-leg-press",
    "name": "Lever Horizontal Leg Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-horizontal-leg-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-horizontal-leg-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-horizontal-leg-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-horizontal-leg-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-horizontal-leg-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-horizontal-leg-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-horizontal-leg-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "2611",
    "matchedExternalName": "Lever Horizontal Leg Press",
    "confidence": "exact",
    "steps": [
      "Sit on the leg press and adjust seat as needed.",
      "Place feet shoulder-width apart on platform.",
      "Push platform away by extending legs.",
      "Do not lock knees at the top position.",
      "Lower platform under control to start position."
    ],
    "formCues": [
      "Keep lower back pressed into seat",
      "Do not lock knees",
      "Feet flat and even pressure",
      "Control the descent"
    ],
    "commonMistakes": [
      "Letting knees cave in/out",
      "Lifting hips off seat",
      "Locking out knees",
      "Using too much weight"
    ],
    "breathing": "Exhale as you press up, inhale as you lower down."
  },
  "lever-incline-hammer-chest-press": {
    "exerciseId": "lever-incline-hammer-chest-press",
    "name": "Lever Incline Hammer Chest Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-incline-hammer-chest-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-incline-hammer-chest-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-incline-hammer-chest-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-incline-hammer-chest-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-incline-hammer-chest-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-incline-hammer-chest-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-incline-hammer-chest-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1299",
    "matchedExternalName": "Lever Incline Hammer Chest Press",
    "confidence": "exact",
    "steps": [
      "Adjust seat height for optimal handle position.",
      "Sit and grip handles with elbows bent.",
      "Press handles up and forward above chest.",
      "Avoid locking elbows completely.",
      "Lower handles slowly to starting position."
    ],
    "formCues": [
      "Press upward and slightly forward",
      "Keep feet flat on floor",
      "Don't shrug shoulders",
      "Pause at top"
    ],
    "commonMistakes": [
      "Letting elbows flare too wide",
      "Locking out elbows",
      "Arching back off seat",
      "Gripping handles unevenly"
    ],
    "breathing": "Exhale as you press up, inhale as you lower down."
  },
  "lever-kneeling-leg-curl": {
    "exerciseId": "lever-kneeling-leg-curl",
    "name": "Lever Kneeling Leg Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-kneeling-leg-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-kneeling-leg-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-kneeling-leg-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-kneeling-leg-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-kneeling-leg-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-kneeling-leg-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-kneeling-leg-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0582",
    "matchedExternalName": "Lever Kneeling Leg Curl",
    "confidence": "exact",
    "steps": [
      "Adjust the machine so your knees line up with the machine's pivot point and your ankles sit securely under the pads.",
      "Kneel on the pad facing the machine, brace your torso against the support, and grip the handles.",
      "Start with your legs extended behind you and keep your hips still.",
      "Curl your heels up toward your glutes by bending your knees against the pads.",
      "Pause briefly at the top and squeeze your hamstrings.",
      "Lower the pads under control until your legs are straight again."
    ],
    "formCues": [
      "Keep hips glued down",
      "Curl through the knees",
      "Move slowly on the way down",
      "Squeeze hamstrings at the top"
    ],
    "commonMistakes": [
      "Lifting the hips off the pad during the curl",
      "Swinging the legs to start each rep",
      "Stopping short and not straightening the knees at the bottom",
      "Letting the ankles slip out of the pads"
    ],
    "breathing": "Exhale as you curl your heels up, and inhale as you lower back to the start."
  },
  "lever-lateral-raise": {
    "exerciseId": "lever-lateral-raise",
    "name": "Lever Lateral Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-lateral-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-lateral-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-lateral-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-lateral-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-lateral-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-lateral-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-lateral-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0584",
    "matchedExternalName": "Lever Lateral Raise",
    "confidence": "exact",
    "steps": [
      "Adjust the seat so the machine arms line up with your shoulders when you sit down.",
      "Sit with your back against the pad and place your forearms or hands on the machine pads or handles.",
      "Start with your arms down at your sides and keep a soft bend in your elbows.",
      "Raise the machine arms out to your sides until your upper arms reach shoulder height.",
      "Pause briefly at the top without shrugging your shoulders.",
      "Lower the arms back down under control to the starting position."
    ],
    "formCues": [
      "Lead with the elbows",
      "Keep shoulders down",
      "Lift to shoulder height",
      "Control the lowering"
    ],
    "commonMistakes": [
      "Shrugging the shoulders up toward the ears",
      "Swinging or bouncing the weight at the bottom",
      "Lifting the arms far above shoulder height",
      "Letting the back come off the pad"
    ],
    "breathing": "Exhale as you raise the arms out to the sides, and inhale as you lower them back down."
  },
  "lever-leg-extension": {
    "exerciseId": "lever-leg-extension",
    "name": "Lever Leg Extension",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-leg-extension.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-leg-extension.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-leg-extension.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-leg-extension.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-leg-extension.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-leg-extension.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-leg-extension.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0585",
    "matchedExternalName": "Lever Leg Extension",
    "confidence": "exact",
    "steps": [
      "Adjust the seat and backrest so your knees line up with the machine's pivot point.",
      "Sit back against the pad and place your shins behind the lower roller pad.",
      "Grip the handles and start with your knees bent and feet pointed forward.",
      "Straighten your knees to lift the pad until your legs are nearly straight.",
      "Pause briefly while keeping your thighs pressed into the seat.",
      "Lower the pad with control until your knees are bent again."
    ],
    "formCues": [
      "Line up knees with pivot",
      "Lift with your quads",
      "Keep hips on the seat",
      "Lower under control"
    ],
    "commonMistakes": [
      "Knees sit too far forward or behind the machine pivot.",
      "Swinging the weight up with momentum.",
      "Locking the knees hard at the top.",
      "Lifting the hips or lower back off the seat."
    ],
    "breathing": "Exhale as you straighten your knees, and inhale as you lower the pad back down."
  },
  "lever-lying-chest-press": {
    "exerciseId": "lever-lying-chest-press",
    "name": "Lever Lying Chest Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-lying-chest-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-lying-chest-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-lying-chest-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-lying-chest-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-lying-chest-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-lying-chest-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-lying-chest-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0577",
    "matchedExternalName": "Lever Lying Chest Press",
    "confidence": "exact",
    "steps": [
      "Lie supine on the machine bench.",
      "Grip the handles firmly, elbows bent.",
      "Engage chest and press handles forward and up.",
      "Fully extend arms without locking out elbows.",
      "Slowly return to starting position."
    ],
    "formCues": [
      "Keep feet flat on floor",
      "Don't overextend elbows",
      "Press evenly with both arms",
      "Squeeze chest at top"
    ],
    "commonMistakes": [
      "Letting shoulders roll forward",
      "Lifting lower back off bench",
      "Using too much weight",
      "Allowing wrists to bend"
    ],
    "breathing": "Exhale as you press up, inhale as you lower down."
  },
  "lever-lying-leg-curl": {
    "exerciseId": "lever-lying-leg-curl",
    "name": "Lever Lying Leg Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-lying-leg-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-lying-leg-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-lying-leg-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-lying-leg-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-lying-leg-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-lying-leg-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-lying-leg-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0586",
    "matchedExternalName": "Lever Lying Leg Curl",
    "confidence": "exact",
    "steps": [
      "Adjust the machine so your knees line up with the machine's pivot and the pad rests against the back of your lower legs above your heels.",
      "Lie face down on the bench with your legs straight and grab the handles or bench edges for support.",
      "Press your hips into the pad and point your toes forward to set your start position.",
      "Curl the pad upward by bending your knees until your heels move toward your glutes.",
      "Pause briefly at the top while keeping your hips down and thighs on the pad.",
      "Lower the pad back down under control until your legs are straight again."
    ],
    "formCues": [
      "Keep hips glued down",
      "Curl through the hamstrings",
      "Move slow on the way down",
      "Knees stay in line"
    ],
    "commonMistakes": [
      "Lifting the hips off the pad at the top",
      "Using momentum to swing the pad upward",
      "Stopping short and not fully lowering the pad",
      "Feet turning sharply inward or outward during the curl"
    ],
    "breathing": "Exhale as you curl the pad up, and inhale as you lower it back down under control."
  },
  "lever-preacher-curl": {
    "exerciseId": "lever-preacher-curl",
    "name": "Lever Preacher Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-preacher-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-preacher-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-preacher-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-preacher-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-preacher-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-preacher-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-preacher-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0592",
    "matchedExternalName": "Lever Preacher Curl",
    "confidence": "exact",
    "steps": [
      "Adjust the seat so your armpits sit close to the top of the preacher pad.",
      "Sit down and place the backs of your upper arms flat on the pad.",
      "Grip the machine handles with an underhand grip and straighten your arms to the start.",
      "Keep your chest up and curl the handles toward your shoulders by bending your elbows.",
      "Squeeze your biceps briefly at the top without lifting your upper arms off the pad.",
      "Lower the handles under control until your arms are nearly straight again."
    ],
    "formCues": [
      "Keep upper arms glued down",
      "Curl only at the elbows",
      "Lift smooth, lower slower",
      "Keep wrists neutral"
    ],
    "commonMistakes": [
      "Upper arms lifting off the pad as the handles rise",
      "Using the shoulders or rocking the torso to start the curl",
      "Letting the weight drop quickly on the way down",
      "Bending the wrists back instead of keeping them straight"
    ],
    "breathing": "Exhale as you curl the handles up, and inhale as you lower them back down under control."
  },
  "lever-reverse-hyperextension": {
    "exerciseId": "lever-reverse-hyperextension",
    "name": "Lever Reverse Hyperextension",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-reverse-hyperextension.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-reverse-hyperextension.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-reverse-hyperextension.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-reverse-hyperextension.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-reverse-hyperextension.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-reverse-hyperextension.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-reverse-hyperextension.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0593",
    "matchedExternalName": "Lever Reverse Hyperextension",
    "confidence": "exact",
    "steps": [
      "Adjust the machine so your hips rest on the pad and your legs can hang freely.",
      "Lie face down with your torso supported and grip the handles or sides for stability.",
      "Place your feet against the foot pads and let your legs hang down under control.",
      "Brace your midsection and squeeze your glutes to raise your legs behind you.",
      "Lift until your legs are about in line with your torso without arching your lower back.",
      "Lower your legs slowly to the start position and repeat."
    ],
    "formCues": [
      "Lift with your glutes",
      "Keep hips on the pad",
      "Control the swing",
      "Stop at torso level"
    ],
    "commonMistakes": [
      "Swinging the legs up with momentum",
      "Arching the lower back at the top",
      "Letting the hips slide off the pad",
      "Bending and straightening the knees during each rep"
    ],
    "breathing": "Inhale as you lower your legs, and exhale as you raise them behind you."
  },
  "lever-reverse-t-bar-row": {
    "exerciseId": "lever-reverse-t-bar-row",
    "name": "Lever Reverse T-Bar Row",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-reverse-t-bar-row.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-reverse-t-bar-row.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-reverse-t-bar-row.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-reverse-t-bar-row.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-reverse-t-bar-row.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-reverse-t-bar-row.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-reverse-t-bar-row.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1349",
    "matchedExternalName": "Lever Reverse T-Bar Row",
    "confidence": "exact",
    "steps": [
      "Adjust the seat or chest pad so the handles line up around mid-chest when you reach forward.",
      "Place your chest firmly against the pad and set your feet flat on the platform.",
      "Grab the handles with an overhand grip and straighten your arms without rounding your shoulders.",
      "Pull the handles toward your chest by driving your elbows back and out slightly.",
      "Squeeze your shoulder blades together at the end of the pull.",
      "Lower the handles under control until your arms are straight again."
    ],
    "formCues": [
      "Chest stays on pad",
      "Lead with your elbows",
      "Squeeze shoulder blades together",
      "Control the lowering"
    ],
    "commonMistakes": [
      "Shrugging the shoulders up toward the ears",
      "Bouncing the chest off the pad to move the handles",
      "Letting the upper back round at the start",
      "Yanking the weight and dropping it back fast"
    ],
    "breathing": "Exhale as you pull the handles toward your chest, and inhale as you lower them back under control."
  },
  "lever-seated-calf-raise": {
    "exerciseId": "lever-seated-calf-raise",
    "name": "Lever Seated Calf Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-seated-calf-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-seated-calf-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-seated-calf-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-seated-calf-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-seated-calf-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-seated-calf-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-seated-calf-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0594",
    "matchedExternalName": "Lever Seated Calf Raise",
    "confidence": "exact",
    "steps": [
      "Adjust the seat so the thigh pad rests securely on your thighs with your knees bent about 90 degrees.",
      "Place the balls of your feet on the footplate with your heels hanging off the edge.",
      "Grip the handles or seat and lift your heels to take the weight onto your calves.",
      "Press through the balls of your feet to raise your heels as high as you can.",
      "Pause briefly at the top while keeping your toes planted.",
      "Lower your heels slowly until you feel a stretch in your calves, then repeat."
    ],
    "formCues": [
      "Drive through big toe",
      "Lift heels straight up",
      "Control the lowering",
      "Keep knees still"
    ],
    "commonMistakes": [
      "Bouncing out of the bottom instead of lowering under control.",
      "Letting the knees shift up and down during the rep.",
      "Rolling the feet outward or inward on the platform.",
      "Using only a short top-half range of motion."
    ],
    "breathing": "Inhale as you lower your heels, and exhale as you press up onto the balls of your feet."
  },
  "lever-seated-crunch": {
    "exerciseId": "lever-seated-crunch",
    "name": "Lever Seated Crunch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-seated-crunch-1.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-seated-crunch-1.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-seated-crunch-1.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-seated-crunch-1.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-seated-crunch-1.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1452",
    "matchedExternalName": "Lever Seated Crunch",
    "confidence": "exact",
    "steps": [
      "Adjust seat and select appropriate resistance.",
      "Sit back and secure feet and handles as designed.",
      "Engage abs and flex spine forward in a crunch motion.",
      "Bring chest toward knees while exhaling.",
      "Control return to start and repeat."
    ],
    "formCues": [
      "Move with abs, not hips",
      "Don't use momentum",
      "Controlled movement",
      "Full range of motion"
    ],
    "commonMistakes": [
      "Letting hip flexors dominate",
      "Using excessive weight",
      "Rushing reps",
      "Partial range of motion"
    ],
    "breathing": "Exhale as you crunch down, inhale as you return up."
  },
  "lever-seated-dip": {
    "exerciseId": "lever-seated-dip",
    "name": "Lever Seated Dip",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-seated-dips.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-seated-dips.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-seated-dips.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-seated-dips.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-seated-dips.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-seated-dips.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-seated-dips.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1451",
    "matchedExternalName": "Lever Seated Dip",
    "confidence": "exact",
    "steps": [
      "Adjust the seat and select appropriate weight.",
      "Sit down and grip the handles firmly.",
      "Press the handles downward by extending your arms fully.",
      "Pause briefly at lockout.",
      "Return to the start position slowly."
    ],
    "formCues": [
      "Keep elbows close",
      "Control the descent",
      "Do not lock elbows",
      "Sit upright"
    ],
    "commonMistakes": [
      "Allowing elbows to flare out",
      "Using excessive weight",
      "Swinging or jerking movement"
    ],
    "breathing": "Exhale on pressing down, inhale on returning up."
  },
  "lever-seated-hip-abduction": {
    "exerciseId": "lever-seated-hip-abduction",
    "name": "Lever Seated Hip Abduction",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-seated-hip-abduction.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-seated-hip-abduction.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-seated-hip-abduction.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-seated-hip-abduction.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-seated-hip-abduction.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-seated-hip-abduction.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-seated-hip-abduction.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0597",
    "matchedExternalName": "Lever Seated Hip Abduction",
    "confidence": "exact",
    "steps": [
      "Adjust the seat so your knees bend about 90 degrees and the thigh pads rest against the outside of your legs.",
      "Sit tall with your back against the pad, place your feet on the footrests, and grip the handles.",
      "Start with your legs together and your knees aligned with the machine's pivot.",
      "Drive your knees outward against the pads until your legs are as wide as your comfortable range allows.",
      "Pause briefly with your hips still on the seat.",
      "Bring your legs back together slowly until the pads nearly touch, then repeat."
    ],
    "formCues": [
      "Sit tall",
      "Drive knees out",
      "Control the return",
      "Keep hips on seat"
    ],
    "commonMistakes": [
      "Leaning the torso forward or rocking back to move the weight.",
      "Letting the legs snap back together on the return.",
      "Lifting the hips off the seat at the widest point.",
      "Turning the feet excessively to cheat the movement."
    ],
    "breathing": "Exhale as you press your knees outward, and inhale as you return to the starting position."
  },
  "lever-seated-hip-adduction": {
    "exerciseId": "lever-seated-hip-adduction",
    "name": "Lever Seated Hip Adduction",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-seated-hip-adduction.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-seated-hip-adduction.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-seated-hip-adduction.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-seated-hip-adduction.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-seated-hip-adduction.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-seated-hip-adduction.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-seated-hip-adduction.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0598",
    "matchedExternalName": "Lever Seated Hip Adduction",
    "confidence": "exact",
    "steps": [
      "Adjust the seat and pads so your knees line up with the machine's pivot point.",
      "Sit tall with your back against the pad, place your legs outside the thigh pads, and grab the handles.",
      "Set your feet flat on the footrests and start with your legs comfortably apart.",
      "Bring your legs together by pressing inward against the pads.",
      "Squeeze your inner thighs briefly when the pads come together.",
      "Return the pads outward slowly until you reach the start position without letting the weight slam."
    ],
    "formCues": [
      "Sit tall",
      "Control both directions",
      "Squeeze inner thighs",
      "Keep hips still"
    ],
    "commonMistakes": [
      "Leaning forward or lifting the lower back off the pad.",
      "Letting the pads fly open on the way back.",
      "Using short, bouncing reps instead of controlled motion.",
      "Turning the feet and knees excessively to force the movement."
    ],
    "breathing": "Exhale as you press your legs together, and inhale as you return to the starting position."
  },
  "lever-seated-leg-curl": {
    "exerciseId": "lever-seated-leg-curl",
    "name": "Lever Seated Leg Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-seated-leg-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-seated-leg-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-seated-leg-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-seated-leg-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-seated-leg-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-seated-leg-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-seated-leg-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0599",
    "matchedExternalName": "Lever Seated Leg Curl",
    "confidence": "exact",
    "steps": [
      "Adjust the seat and pad so your knees line up with the machine’s pivot point.",
      "Sit back against the pad and place your lower legs under the roller just above your ankles.",
      "Grip the handles and keep your thighs pressed into the seat.",
      "Curl the pad down by bending your knees until your heels move toward the floor.",
      "Pause briefly and squeeze your hamstrings at the bottom.",
      "Lower the pad back up with control until your knees are nearly straight."
    ],
    "formCues": [
      "Keep hips glued down",
      "Curl through the heels",
      "Move only at knees",
      "Lower with control"
    ],
    "commonMistakes": [
      "Lifting the hips off the seat during the curl.",
      "Using momentum and swinging the pad through the rep.",
      "Letting the knees fully lock out at the top.",
      "Setting the pad too high on the calves instead of above the ankles."
    ],
    "breathing": "Exhale as you curl the pad down, and inhale as you return it to the starting position."
  },
  "lever-seated-reverse-fly": {
    "exerciseId": "lever-seated-reverse-fly",
    "name": "Lever Seated Reverse Fly",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-seated-reverse-fly.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-seated-reverse-fly.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-seated-reverse-fly.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-seated-reverse-fly.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-seated-reverse-fly.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-seated-reverse-fly.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-seated-reverse-fly.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0602",
    "matchedExternalName": "Lever Seated Reverse Fly",
    "confidence": "exact",
    "steps": [
      "Adjust the seat so the handles are about shoulder height when you sit down.",
      "Sit with your chest against the pad, feet flat on the floor, and grasp the handles with an overhand grip.",
      "Start with your arms in front of you and keep a soft bend in your elbows.",
      "Pull the handles out and back in a wide arc until your upper arms line up with your shoulders.",
      "Squeeze your rear shoulders and upper back at the end of the movement.",
      "Return the handles slowly to the start without letting the weight slam down."
    ],
    "formCues": [
      "Lead with your elbows",
      "Keep chest on the pad",
      "Soft bend in elbows",
      "Squeeze shoulder blades together"
    ],
    "commonMistakes": [
      "Shrugging the shoulders up toward the ears",
      "Straightening the elbows and turning it into a press",
      "Letting the chest come off the pad",
      "Swinging the handles back with momentum"
    ],
    "breathing": "Exhale as you pull the handles back, and inhale as you return to the starting position."
  },
  "lever-shrug": {
    "exerciseId": "lever-shrug",
    "name": "Lever Shrug",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-shrug.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-shrug.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-shrug.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-shrug.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-shrug.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-shrug.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-shrug.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0604",
    "matchedExternalName": "Lever Shrug",
    "confidence": "exact",
    "steps": [
      "Adjust the machine so the handles rest at your sides with your shoulders relaxed.",
      "Sit or stand against the pad and grasp the handles with a firm overhand grip.",
      "Straighten your arms and set your chest tall with your neck neutral.",
      "Lift your shoulders straight up toward your ears without bending your elbows.",
      "Pause briefly at the top while keeping your torso still.",
      "Lower your shoulders under control until they return to the start."
    ],
    "formCues": [
      "Shoulders straight up",
      "Arms stay long",
      "Keep chest tall",
      "Control the lowering"
    ],
    "commonMistakes": [
      "Bending the elbows and turning it into a row",
      "Rolling the shoulders forward or backward",
      "Leaning the torso to move the weight",
      "Jutting the chin forward as the shoulders rise"
    ],
    "breathing": "Inhale at the bottom, exhale as you shrug your shoulders up, then inhale as you lower back down."
  },
  "lever-standing-calf-raise": {
    "exerciseId": "lever-standing-calf-raise",
    "name": "Lever Standing Calf Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-standing-calf-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-standing-calf-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-standing-calf-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-standing-calf-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-standing-calf-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-standing-calf-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-standing-calf-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0605",
    "matchedExternalName": "Lever Standing Calf Raise",
    "confidence": "exact",
    "steps": [
      "Adjust the shoulder pads so they rest comfortably on your shoulders when you stand on the platform.",
      "Place the balls of your feet on the edge of the platform with your heels hanging off and grip the handles.",
      "Straighten your legs, brace your torso, and let your heels lower until you feel a stretch in your calves.",
      "Press through the balls of your feet to raise your heels as high as you can.",
      "Pause briefly at the top while staying balanced under the pads.",
      "Lower your heels under control back to the stretched start position."
    ],
    "formCues": [
      "Drive through big toe",
      "Lift heels straight up",
      "Use full ankle range",
      "Control the lowering"
    ],
    "commonMistakes": [
      "Bouncing out of the bottom instead of lowering under control.",
      "Bending the knees noticeably during the raise.",
      "Rolling the ankles inward or outward as the heels lift.",
      "Using a short range and stopping before the heels fully lower."
    ],
    "breathing": "Inhale as you lower your heels, and exhale as you press up onto the balls of your feet."
  },
  "lever-standing-hip-extension": {
    "exerciseId": "lever-standing-hip-extension",
    "name": "Lever Standing Hip Extension",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-standing-hip-extension.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-standing-hip-extension.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-standing-hip-extension.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-standing-hip-extension.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-standing-hip-extension.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-standing-hip-extension.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-standing-hip-extension.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "2286",
    "matchedExternalName": "Lever Standing Hip Extension",
    "confidence": "exact",
    "steps": [
      "Adjust the machine to your height.",
      "Place one foot on platform, chest against pad.",
      "Brace core and grasp handles for balance.",
      "Extend hip, pressing lever back with heel.",
      "Return to starting position and repeat."
    ],
    "formCues": [
      "Drive through heel",
      "Keep knee slightly bent",
      "Don't arch lower back",
      "Pause at top briefly"
    ],
    "commonMistakes": [
      "Excessive lower back arch",
      "Using momentum",
      "Letting knee lock out",
      "Not completing full extension"
    ],
    "breathing": "Exhale as you extend hip, inhale as you return."
  },
  "lever-standing-rear-kick": {
    "exerciseId": "lever-standing-rear-kick",
    "name": "Lever Standing Rear Kick",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-standing-rear-kick.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-standing-rear-kick.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-standing-rear-kick.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-standing-rear-kick.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-standing-rear-kick.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-standing-rear-kick.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-standing-rear-kick.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-lever-standing-rear-kick",
    "matchedExternalName": "Lever Standing Rear Kick",
    "confidence": "exact",
    "steps": [
      "Adjust the lever machine pad to chest height and select weight.",
      "Place working foot on the platform.",
      "Hold handles and brace core.",
      "Extend hip by pushing foot backward as far as comfortable.",
      "Return slowly to starting position and repeat."
    ],
    "formCues": [
      "Lead with heel",
      "Keep core tight",
      "Avoid arching the back",
      "Squeeze glute at top"
    ],
    "commonMistakes": [
      "Using lower back to lift",
      "Swinging leg with momentum",
      "Not controlling the negative"
    ],
    "breathing": "Exhale as you kick back, inhale as you return."
  },
  "lever-t-bar-row": {
    "exerciseId": "lever-t-bar-row",
    "name": "Lever T-Bar Row",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-t-bar-row.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-t-bar-row.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-t-bar-row.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-t-bar-row.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-t-bar-row.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-t-bar-row.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-t-bar-row.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-lever-t-bar-row",
    "matchedExternalName": "Lever T-Bar Row",
    "confidence": "exact",
    "steps": [
      "Lie prone on the chest pad of the T-bar row machine and grasp the handles.",
      "Brace your upper body and retract your shoulder blades.",
      "Pull the handles toward your chest or lower ribs.",
      "Pause and squeeze your back at the top.",
      "Lower the weight under control to a full stretch."
    ],
    "formCues": [
      "Pinch shoulder blades",
      "Drive elbows back",
      "Keep chest on pad",
      "Full stretch at bottom"
    ],
    "commonMistakes": [
      "Arching lower back",
      "Not fully extending arms",
      "Bouncing weights",
      "Letting shoulders round forward"
    ],
    "breathing": "Exhale as you row up, inhale as you lower down."
  },
  "lever-triceps-extension": {
    "exerciseId": "lever-triceps-extension",
    "name": "Lever Triceps Extension",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-triceps-extension.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-triceps-extension.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-triceps-extension.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-triceps-extension.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-triceps-extension.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-triceps-extension.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-triceps-extension.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0607",
    "matchedExternalName": "Lever Triceps Extension",
    "confidence": "exact",
    "steps": [
      "Adjust the seat so the handles line up with about eye or forehead level when you sit down.",
      "Sit with your back against the pad and place your feet flat on the floor.",
      "Grip the handles with your palms facing down and straighten your arms in front of you.",
      "Keep your upper arms still and bend your elbows to lower the handles toward your forehead.",
      "Pause briefly when your elbows are fully bent and the handles are close to your head.",
      "Press the handles away by straightening your elbows until your arms are extended again."
    ],
    "formCues": [
      "Keep elbows tucked",
      "Upper arms stay still",
      "Move only at elbows",
      "Control both directions"
    ],
    "commonMistakes": [
      "Elbows flare wide out to the sides.",
      "Shoulders roll forward and the chest collapses.",
      "Handles are dropped quickly toward the head.",
      "Upper arms swing back and forth during the rep."
    ],
    "breathing": "Inhale as you bend your elbows to lower the handles, and exhale as you straighten your arms to press them away."
  },
  "lying-hip-lift-on-stability-ball": {
    "exerciseId": "lying-hip-lift-on-stability-ball",
    "name": "Lying Hip Lift on Stability Ball",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lying-hip-lift-on-stability-ball.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lying-hip-lift-on-stability-ball.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lying-hip-lift-on-stability-ball.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lying-hip-lift-on-stability-ball.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lying-hip-lift-on-stability-ball.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-lying-hip-lift-on-stability-ball",
    "matchedExternalName": "Lying Hip Lift on Stability Ball",
    "confidence": "exact",
    "steps": [
      "Lie on your back with arms by your sides and feet on the stability ball.",
      "Bend knees at 90 degrees and keep feet hip-width apart.",
      "Drive through your heels and squeeze your glutes to lift your hips.",
      "Pause at the top, keeping your body in a straight line.",
      "Lower your hips back down with control."
    ],
    "formCues": [
      "Press through heels",
      "Squeeze glutes",
      "Keep core engaged",
      "Avoid overextending back"
    ],
    "commonMistakes": [
      "Letting knees collapse",
      "Overarching lower back",
      "Dropping hips too low"
    ],
    "breathing": "Exhale when lifting hips, inhale when lowering hips."
  },
  "lying-leg-raise": {
    "exerciseId": "lying-leg-raise",
    "name": "Lying Leg Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lying-floor-leg-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lying-floor-leg-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lying-floor-leg-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lying-floor-leg-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lying-floor-leg-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lying-floor-leg-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lying-floor-leg-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0865",
    "matchedExternalName": "Lying Leg Raise",
    "confidence": "exact",
    "steps": [
      "Lie flat on your back, legs straight.",
      "Keep arms at your sides or under hips.",
      "Lift legs upward, keeping knees straight.",
      "Raise legs until hips come up slightly.",
      "Lower legs slowly without touching the floor."
    ],
    "formCues": [
      "Engage core",
      "Keep lower back down",
      "Control descent",
      "Avoid swinging"
    ],
    "commonMistakes": [
      "Arching lower back",
      "Using momentum",
      "Touching feet to ground between reps"
    ],
    "breathing": "Exhale as you raise legs, inhale as you lower."
  },
  "lying-quadriceps-stretch": {
    "exerciseId": "lying-quadriceps-stretch",
    "name": "Lying Quadriceps Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-quadriceps-lying-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-quadriceps-lying-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-quadriceps-lying-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-quadriceps-lying-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-quadriceps-lying-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-quadriceps-lying-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-quadriceps-lying-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-quadriceps-lying-stretch",
    "matchedExternalName": "Lying Quadriceps Stretch",
    "confidence": "exact",
    "steps": [
      "Lie on your stomach with legs extended.",
      "Bend one knee, bringing heel toward glute.",
      "Reach back and grasp ankle with hand.",
      "Gently pull heel closer to glute until a stretch is felt.",
      "Hold, then switch sides."
    ],
    "formCues": [
      "Knees together",
      "Relax neck",
      "Do not force",
      "Hips flat"
    ],
    "commonMistakes": [
      "Pulling too hard",
      "Letting pelvis lift",
      "Knee splaying out"
    ],
    "breathing": "Exhale as you pull, inhale to release."
  },
  "lying-scissor-kick": {
    "exerciseId": "lying-scissor-kick",
    "name": "Lying Scissor Kick",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lying-scissor-kick-female.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lying-scissor-kick-female.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lying-scissor-kick-female.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lying-scissor-kick-female.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lying-scissor-kick-female.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-lying-scissor-kick-female",
    "matchedExternalName": "Lying Scissor Kick",
    "confidence": "exact",
    "steps": [
      "Lie on your back with legs extended and arms at your sides.",
      "Lift both legs a few inches off the ground, keeping them straight.",
      "Alternate raising one leg while lowering the other in a scissor motion.",
      "Continue to alternate legs in a controlled manner.",
      "Keep your head and shoulders relaxed, core engaged."
    ],
    "formCues": [
      "Keep core braced",
      "Move legs with control",
      "Don't touch floor",
      "Point toes"
    ],
    "commonMistakes": [
      "Arching lower back",
      "Moving too fast",
      "Letting legs touch ground"
    ],
    "breathing": "Exhale as legs rise, inhale as legs lower."
  },
  "lying-straight-leg-raise": {
    "exerciseId": "lying-straight-leg-raise",
    "name": "Lying Straight Leg Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lying-straight-leg-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lying-straight-leg-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lying-straight-leg-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lying-straight-leg-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lying-straight-leg-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lying-straight-leg-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lying-straight-leg-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1002",
    "matchedExternalName": "Lying Straight Leg Raise",
    "confidence": "exact",
    "steps": [
      "Lie flat on your back, arms at sides.",
      "Extend legs fully, feet together.",
      "Lift legs straight up to vertical.",
      "Pause briefly at the top.",
      "Lower legs down slowly but don’t touch floor."
    ],
    "formCues": [
      "Keep lower back flat",
      "Control leg movement",
      "Squeeze abs",
      "Don’t let heels touch"
    ],
    "commonMistakes": [
      "Arching lower back",
      "Using momentum",
      "Separation of legs"
    ],
    "breathing": "Exhale as you lift legs, inhale as you lower."
  },
  "medicine-ball-wall-sit-up": {
    "exerciseId": "medicine-ball-wall-sit-up",
    "name": "Medicine Ball Wall Sit-Up",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/medicine-ball-sit-up-wall.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/medicine-ball-sit-up-wall.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/medicine-ball-sit-up-wall.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/medicine-ball-sit-up-wall.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/medicine-ball-sit-up-wall.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0640",
    "matchedExternalName": "Medicine Ball Wall Sit-Up",
    "confidence": "exact",
    "steps": [
      "Sit on the floor facing a wall, knees bent.",
      "Hold a medicine ball at your chest.",
      "Lie back, then perform a sit-up.",
      "At the top, throw the ball against the wall.",
      "Catch the rebound and lower back down."
    ],
    "formCues": [
      "Engage abs",
      "Full range of motion",
      "Coordinate throw and catch",
      "Keep feet grounded"
    ],
    "commonMistakes": [
      "Leaning too far back",
      "Using arms instead of core",
      "Missing the ball"
    ],
    "breathing": "Exhale as you sit up/throw, inhale as you lower down."
  },
  "middle-back-stretch": {
    "exerciseId": "middle-back-stretch",
    "name": "Middle Back Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-middle-back-stretch-1.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-middle-back-stretch-1.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-middle-back-stretch-1.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-middle-back-stretch-1.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-middle-back-stretch-1.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1405",
    "matchedExternalName": "Middle Back Stretch",
    "confidence": "exact",
    "steps": [
      "Sit or stand with feet hip-width apart.",
      "Extend your arms straight in front and clasp your hands.",
      "Round your upper back and push your hands forward.",
      "Tuck your chin slightly toward your chest.",
      "Hold the stretch for 20–30 seconds and release."
    ],
    "formCues": [
      "Round your upper back",
      "Keep arms extended",
      "Relax your shoulders",
      "Hold the position steady"
    ],
    "commonMistakes": [
      "Arching the lower back instead of rounding the upper back",
      "Holding breath",
      "Bouncing during the stretch"
    ],
    "breathing": "Breathe slowly and evenly throughout the stretch."
  },
  "military-press": {
    "exerciseId": "military-press",
    "name": "Military Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/military-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/military-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/military-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/military-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/military-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/military-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/military-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0553",
    "matchedExternalName": "Military Press",
    "confidence": "exact",
    "steps": [
      "Stand with feet hip-width apart and barbell at shoulder height.",
      "Grip the bar with hands just outside shoulder-width.",
      "Brace your core and squeeze your glutes.",
      "Press the barbell overhead to full arm extension.",
      "Lower the bar slowly back to shoulders."
    ],
    "formCues": [
      "Keep core tight",
      "Press in a straight line",
      "Avoid arching lower back",
      "Lock elbows at the top"
    ],
    "commonMistakes": [
      "Leaning back excessively",
      "Bouncing the bar off shoulders",
      "Flaring elbows too wide",
      "Not bringing bar below chin"
    ],
    "breathing": "Exhale as you press up, inhale as you lower down."
  },
  "neck-side-stretch": {
    "exerciseId": "neck-side-stretch",
    "name": "Neck Side Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-neck-side-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-neck-side-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-neck-side-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-neck-side-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-neck-side-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-neck-side-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-neck-side-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1403",
    "matchedExternalName": "Neck Side Stretch",
    "confidence": "exact",
    "steps": [
      "Sit or stand with good posture.",
      "Slowly tilt your head to one side, ear towards shoulder.",
      "Hold the stretch for 15-30 seconds.",
      "Return to center.",
      "Repeat on the opposite side."
    ],
    "formCues": [
      "Don't shrug shoulders",
      "Keep shoulders level",
      "Move slowly",
      "Feel a gentle stretch"
    ],
    "commonMistakes": [
      "Forcing the stretch",
      "Turning the head instead of tilting",
      "Using jerky movements"
    ],
    "breathing": "Breathe normally throughout the stretch."
  },
  "old-school-reverse-extensions": {
    "exerciseId": "old-school-reverse-extensions",
    "name": "Old School Reverse Extensions",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/old-school-reverse-extensions.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/old-school-reverse-extensions.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/old-school-reverse-extensions.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/old-school-reverse-extensions.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/old-school-reverse-extensions.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/old-school-reverse-extensions.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/old-school-reverse-extensions.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-old-school-reverse-extensions",
    "matchedExternalName": "Old School Reverse Extensions",
    "confidence": "exact",
    "steps": [
      "Lie face down on the floor or bench with elbows bent and hands at your sides.",
      "Position elbows by your torso.",
      "Straighten your arms fully behind you, contracting your triceps.",
      "Pause and squeeze at full extension.",
      "Return to the start in a controlled manner."
    ],
    "formCues": [
      "Keep elbows tight to torso",
      "Extend arms fully",
      "Squeeze triceps at the top",
      "Avoid swinging arms"
    ],
    "commonMistakes": [
      "Using body momentum",
      "Not achieving full extension",
      "Letting elbows flare out"
    ],
    "breathing": "Exhale as you extend your arms, inhale as you return."
  },
  "otis-up": {
    "exerciseId": "otis-up",
    "name": "Otis-Up",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/otis-ups.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/otis-ups.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/otis-ups.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/otis-ups.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/otis-ups.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/otis-ups.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/otis-ups.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-otis-ups",
    "matchedExternalName": "Otis-Up",
    "confidence": "exact",
    "steps": [
      "Lie on your back with knees bent and feet anchored.",
      "Hold a weight with both hands, arms fully extended above your chest.",
      "Engage your core and sit up, keeping arms straight and weight overhead.",
      "Reach an upright seated position.",
      "Lower yourself back down under control with arms extended."
    ],
    "formCues": [
      "Keep arms locked out",
      "Do not swing weight",
      "Engage abs fully",
      "Maintain slow control"
    ],
    "commonMistakes": [
      "Bending arms",
      "Dropping weight forward",
      "Using momentum to sit up"
    ],
    "breathing": "Exhale as you sit up, inhale as you lower down."
  },
  "overhead-chest-stretch": {
    "exerciseId": "overhead-chest-stretch",
    "name": "Overhead Chest Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-above-head-chest-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-above-head-chest-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-above-head-chest-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-above-head-chest-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-above-head-chest-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-above-head-chest-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-above-head-chest-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1259",
    "matchedExternalName": "Overhead Chest Stretch",
    "confidence": "exact",
    "steps": [
      "Stand upright with feet hip-width apart.",
      "Interlace fingers and stretch arms straight overhead.",
      "Gently pull arms back behind head.",
      "Squeeze shoulder blades together.",
      "Hold the stretch for 15-30 seconds."
    ],
    "formCues": [
      "Keep arms straight",
      "Open the chest",
      "Maintain tall posture",
      "Avoid arching lower back"
    ],
    "commonMistakes": [
      "Hyperextending lower back",
      "Bending elbows",
      "Letting shoulders shrug"
    ],
    "breathing": "Breathe deeply and steadily throughout the stretch."
  },
  "pec-deck-fly": {
    "exerciseId": "pec-deck-fly",
    "name": "Pec Deck Fly",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-pec-deck-fly.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-pec-deck-fly.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-pec-deck-fly.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lever-pec-deck-fly.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lever-pec-deck-fly.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lever-pec-deck-fly.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lever-pec-deck-fly.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-lever-pec-deck-fly",
    "matchedExternalName": "Pec Deck Fly",
    "confidence": "exact",
    "steps": [
      "Adjust seat and sit with back against pad.",
      "Place forearms on pads with elbows slightly bent.",
      "Bring arms together in a wide arc.",
      "Squeeze chest at the end of movement.",
      "Return slowly to starting position."
    ],
    "formCues": [
      "Keep elbows soft",
      "Squeeze chest at peak",
      "Maintain back on pad",
      "Control return phase"
    ],
    "commonMistakes": [
      "Locking elbows",
      "Arching lower back",
      "Using too much weight"
    ],
    "breathing": "Exhale as you bring arms together, inhale as you open."
  },
  "peroneals-stretch": {
    "exerciseId": "peroneals-stretch",
    "name": "Peroneals Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-peroneals-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-peroneals-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-peroneals-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-peroneals-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-peroneals-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-peroneals-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-peroneals-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1388",
    "matchedExternalName": "Peroneals Stretch",
    "confidence": "exact",
    "steps": [
      "Sit with one leg crossed over the other.",
      "Grasp the foot and gently pull it inward.",
      "Turn the sole toward your midline.",
      "Hold for 20-30 seconds.",
      "Switch sides and repeat."
    ],
    "formCues": [
      "Gentle stretch",
      "Don't force movement",
      "Keep knee straight",
      "Hold steady"
    ],
    "commonMistakes": [
      "Stretching too forcefully",
      "Not holding long enough",
      "Incorrect foot positioning"
    ],
    "breathing": "Breathe normally throughout the stretch."
  },
  "pilates-corkscrew": {
    "exerciseId": "pilates-corkscrew",
    "name": "Pilates Corkscrew",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/corkscrew-pilates.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/corkscrew-pilates.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/corkscrew-pilates.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/corkscrew-pilates.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/corkscrew-pilates.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-corkscrew-pilates",
    "matchedExternalName": "Pilates Corkscrew",
    "confidence": "exact",
    "steps": [
      "Lie on back, arms by side, legs straight up.",
      "Engage core, lift hips off mat gently.",
      "Circle legs together in a clockwise motion.",
      "Lower hips as legs complete the circle.",
      "Reverse the circle direction."
    ],
    "formCues": [
      "Abs tight",
      "Control the motion",
      "Keep shoulders down",
      "Slow and steady"
    ],
    "commonMistakes": [
      "Arching lower back",
      "Swinging legs",
      "Holding breath"
    ],
    "breathing": "Exhale as you circle legs, inhale to prepare."
  },
  "pilates-hundred": {
    "exerciseId": "pilates-hundred",
    "name": "Pilates Hundred",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/hundred-pilates.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/hundred-pilates.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/hundred-pilates.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/hundred-pilates.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/hundred-pilates.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-hundred-pilates",
    "matchedExternalName": "Pilates Hundred",
    "confidence": "exact",
    "steps": [
      "Lie on back, legs in tabletop or extended.",
      "Lift head, neck, shoulders off mat.",
      "Extend arms at sides, hovering above floor.",
      "Pump arms up and down vigorously.",
      "Inhale for 5 pumps, exhale for 5 pumps; repeat to 100."
    ],
    "formCues": [
      "Engage core",
      "Keep lower back down",
      "Strong arm pulses",
      "Steady breath"
    ],
    "commonMistakes": [
      "Neck strain",
      "Arching lower back",
      "Rapid, shallow breathing"
    ],
    "breathing": "Inhale for 5 pumps, exhale for 5 pumps, continue cycle."
  },
  "plyometric-side-lunge-stretch": {
    "exerciseId": "plyometric-side-lunge-stretch",
    "name": "Plyometric Side Lunge Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-plyo-side-lunge-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-plyo-side-lunge-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-plyo-side-lunge-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-plyo-side-lunge-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-plyo-side-lunge-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-plyo-side-lunge-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-plyo-side-lunge-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-plyo-side-lunge-stretch",
    "matchedExternalName": "Plyometric Side Lunge Stretch",
    "confidence": "exact",
    "steps": [
      "Stand with feet wider than hip-width apart.",
      "Shift your weight to one side, bending the knee and keeping the opposite leg straight.",
      "Drop into a deep lunge while maintaining upright posture.",
      "Push off the bent leg and return to starting position.",
      "Repeat to the opposite side in a dynamic, alternating fashion."
    ],
    "formCues": [
      "Keep chest up",
      "Push hips back",
      "Knee in line with toes",
      "Alternate sides smoothly"
    ],
    "commonMistakes": [
      "Letting knee cave inward",
      "Lifting heel off the ground",
      "Rounding the back"
    ],
    "breathing": "Inhale as you prepare and exhale moving into each lunge."
  },
  "pull-up-wide-grip": {
    "exerciseId": "pull-up-wide-grip",
    "name": "Pull-Up (Wide Grip)",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/pull-up-wide-front-grip.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/pull-up-wide-front-grip.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/pull-up-wide-front-grip.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/pull-up-wide-front-grip.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/pull-up-wide-front-grip.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/pull-up-wide-front-grip.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/pull-up-wide-front-grip.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1429",
    "matchedExternalName": "Pull-Up (Wide Grip)",
    "confidence": "exact",
    "steps": [
      "Grip pull-up bar with hands wider than shoulders, palms overhand.",
      "Hang with arms fully extended and core tight.",
      "Pull chest up to bar, driving elbows down and out.",
      "Pause at the top, squeeze back muscles.",
      "Lower down slowly to full extension."
    ],
    "formCues": [
      "Keep elbows flared out",
      "Lead with chest",
      "Engage lats",
      "Avoid swinging"
    ],
    "commonMistakes": [
      "Partial reps",
      "Using momentum",
      "Shrugging shoulders"
    ],
    "breathing": "Exhale as you pull up, inhale as you lower down."
  },
  "pull-up-chin-up": {
    "exerciseId": "pull-up-chin-up",
    "name": "Pull-Up / Chin-Up",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/chin-ups-pull-ups.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/chin-ups-pull-ups.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/chin-ups-pull-ups.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/chin-ups-pull-ups.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/chin-ups-pull-ups.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/chin-ups-pull-ups.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/chin-ups-pull-ups.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-chin-ups-pull-ups",
    "matchedExternalName": "Pull-Up / Chin-Up",
    "confidence": "exact",
    "steps": [
      "Stand under a pull-up bar and grip it with your chosen grip (overhand for pull-up, underhand for chin-up).",
      "Hang at full arm extension with shoulders engaged.",
      "Brace your core and pull your chest up toward the bar by driving elbows down.",
      "Clear the bar with your chin or chest as you squeeze your lats.",
      "Lower yourself under control to the starting hang position."
    ],
    "formCues": [
      "Lead with chest",
      "Drive elbows down",
      "Don't swing",
      "Engage shoulders"
    ],
    "commonMistakes": [
      "Not going to full hang",
      "Using leg kick or swing",
      "Chin not over the bar",
      "Shrugging shoulders"
    ],
    "breathing": "Exhale as you pull up, inhale as you lower down."
  },
  "push-up": {
    "exerciseId": "push-up",
    "name": "Push-Up",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/push-ups.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/push-ups.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/push-ups.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/push-ups.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/push-ups.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/push-ups.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/push-ups.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-push-ups",
    "matchedExternalName": "Push-Up",
    "confidence": "exact",
    "steps": [
      "Begin in a plank with hands under shoulders.",
      "Engage core and glutes.",
      "Lower chest toward floor, elbows at 45 degrees.",
      "Pause briefly when close to ground.",
      "Press back up to plank position."
    ],
    "formCues": [
      "Keep body straight",
      "Engage core",
      "Elbows 45 degrees",
      "Lower under control"
    ],
    "commonMistakes": [
      "Letting hips sag",
      "Flaring elbows too wide",
      "Incomplete range of motion"
    ],
    "breathing": "Inhale as you lower, exhale as you push up."
  },
  "rear-decline-bridge": {
    "exerciseId": "rear-decline-bridge",
    "name": "Rear Decline Bridge",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/rear-decline-bridge.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/rear-decline-bridge.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/rear-decline-bridge.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/rear-decline-bridge.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/rear-decline-bridge.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/rear-decline-bridge.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/rear-decline-bridge.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0668",
    "matchedExternalName": "Rear Decline Bridge",
    "confidence": "exact",
    "steps": [
      "Lie on your back with your knees bent and feet flat on the floor, hip-width apart.",
      "Place your arms by your sides and press your palms lightly into the floor.",
      "Brace your midsection and squeeze your glutes.",
      "Drive through your heels and lift your hips until your knees, hips, and shoulders line up.",
      "Pause briefly at the top while keeping your ribs down.",
      "Lower your hips to the floor with control and reset before the next rep."
    ],
    "formCues": [
      "Drive through your heels",
      "Squeeze glutes at the top",
      "Keep ribs down",
      "Don't arch your low back"
    ],
    "commonMistakes": [
      "Pushing through the toes so the heels lift",
      "Overarching the lower back at the top",
      "Letting the knees cave inward",
      "Dropping the hips quickly to the floor"
    ],
    "breathing": "Inhale at the bottom, exhale as you lift your hips, and inhale again as you lower with control."
  },
  "rear-deltoid-stretch": {
    "exerciseId": "rear-deltoid-stretch",
    "name": "Rear Deltoid Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-rear-deltoid-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-rear-deltoid-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-rear-deltoid-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-rear-deltoid-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-rear-deltoid-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-rear-deltoid-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-rear-deltoid-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0669",
    "matchedExternalName": "Rear Deltoid Stretch",
    "confidence": "exact",
    "steps": [
      "Extend one arm across your chest at shoulder height.",
      "Use opposite hand to pull arm towards your body.",
      "Hold the stretch for 20-30 seconds.",
      "Release and return to start.",
      "Repeat on the other side."
    ],
    "formCues": [
      "Relax shoulder",
      "Arm stays at shoulder height",
      "Gentle pull",
      "No twisting torso"
    ],
    "commonMistakes": [
      "Lifting the shoulder",
      "Twisting the upper body",
      "Forcing the stretch"
    ],
    "breathing": "Breathe normally throughout the stretch."
  },
  "rear-foot-elevated-hip-flexor-stretch": {
    "exerciseId": "rear-foot-elevated-hip-flexor-stretch",
    "name": "Rear Foot Elevated Hip Flexor Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-hip-flexor-stretch-rear-foot-elevated.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-hip-flexor-stretch-rear-foot-elevated.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-hip-flexor-stretch-rear-foot-elevated.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-hip-flexor-stretch-rear-foot-elevated.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-hip-flexor-stretch-rear-foot-elevated.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-hip-flexor-stretch-rear-foot-elevated.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-hip-flexor-stretch-rear-foot-elevated.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-hip-flexor-stretch-rear-foot-elevated",
    "matchedExternalName": "Rear Foot Elevated Hip Flexor Stretch",
    "confidence": "exact",
    "steps": [
      "Stand with your back to a bench; place one foot on the bench.",
      "Step the front foot forward and lower into a lunge.",
      "Tuck pelvis under, keeping chest tall.",
      "Lean gently forward to intensify the stretch.",
      "Hold, then switch legs."
    ],
    "formCues": [
      "Torso upright",
      "Pelvis tucked",
      "Front knee over ankle",
      "Breathe"
    ],
    "commonMistakes": [
      "Overarching lower back",
      "Knee traveling past toes",
      "Leaning forward"
    ],
    "breathing": "Inhale to prepare, exhale as you sink into the stretch."
  },
  "resistance-band-high-fly": {
    "exerciseId": "resistance-band-high-fly",
    "name": "Resistance Band High Fly",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-high-fly.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-high-fly.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-high-fly.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/band-high-fly.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/band-high-fly.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/band-high-fly.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/band-high-fly.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-band-high-fly",
    "matchedExternalName": "Resistance Band High Fly",
    "confidence": "exact",
    "steps": [
      "Anchor resistance band above shoulder height.",
      "Grasp handles and step forward for tension.",
      "Start with arms raised wide, aligned with shoulders.",
      "Pull arms downward and together in a wide arc.",
      "Squeeze chest, then return slowly to start."
    ],
    "formCues": [
      "Keep slight bend in elbows",
      "Control movement",
      "Squeeze chest at bottom",
      "Don't let band snap back"
    ],
    "commonMistakes": [
      "Overextending elbows",
      "Letting shoulders shrug",
      "Losing tension at top"
    ],
    "breathing": "Exhale as you bring arms together, inhale as you return."
  },
  "reverse-crunch": {
    "exerciseId": "reverse-crunch",
    "name": "Reverse Crunch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/reverse-crunch-female.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/reverse-crunch-female.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/reverse-crunch-female.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/reverse-crunch-female.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/reverse-crunch-female.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0872",
    "matchedExternalName": "Reverse Crunch",
    "confidence": "exact",
    "steps": [
      "Lie on your back, arms at your sides, knees bent, and feet off the ground.",
      "Engage your core and lift your legs, bringing knees toward your chest.",
      "Lift hips off the floor in a curling motion.",
      "Pause and squeeze your abs at the top.",
      "Lower your hips back down slowly, keeping control."
    ],
    "formCues": [
      "Move slowly",
      "Don't swing legs",
      "Keep core braced",
      "Avoid arching lower back"
    ],
    "commonMistakes": [
      "Using momentum to swing legs",
      "Not controlling the descent",
      "Letting lower back arch off the floor"
    ],
    "breathing": "Exhale as you lift hips, inhale as you lower down."
  },
  "reverse-dip-stretch": {
    "exerciseId": "reverse-dip-stretch",
    "name": "Reverse Dip Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-reverse-dip.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-reverse-dip.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-reverse-dip.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-reverse-dip.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-reverse-dip.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-reverse-dip.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-reverse-dip.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0672",
    "matchedExternalName": "Reverse Dip Stretch",
    "confidence": "exact",
    "steps": [
      "Sit with legs extended and arms behind your hips.",
      "Place hands flat on the floor, fingers pointing forward.",
      "Press through your palms to lift your chest up.",
      "Keep your arms long without locking elbows.",
      "Hold for the stretch, then slowly lower and relax."
    ],
    "formCues": [
      "Lift chest tall",
      "Keep elbows soft",
      "Open shoulders",
      "Avoid slumping"
    ],
    "commonMistakes": [
      "Locking elbows tightly",
      "Letting shoulders round forward",
      "Overarching lower back"
    ],
    "breathing": "Breathe deeply and steadily throughout the stretch."
  },
  "reverse-grip-machine-lat-pulldown": {
    "exerciseId": "reverse-grip-machine-lat-pulldown",
    "name": "Reverse Grip Machine Lat Pulldown",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/reverse-grip-machine-lat-pulldown.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/reverse-grip-machine-lat-pulldown.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/reverse-grip-machine-lat-pulldown.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/reverse-grip-machine-lat-pulldown.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/reverse-grip-machine-lat-pulldown.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/reverse-grip-machine-lat-pulldown.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/reverse-grip-machine-lat-pulldown.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0673",
    "matchedExternalName": "Reverse Grip Machine Lat Pulldown",
    "confidence": "exact",
    "steps": [
      "Adjust the seat so your knees fit snugly under the pads and place your feet flat on the floor.",
      "Reach up and grab the handles with an underhand grip about shoulder-width apart.",
      "Sit tall with your chest up and arms fully extended overhead.",
      "Pull the handles down toward your upper chest by driving your elbows down and back.",
      "Squeeze your upper back and lats at the bottom without leaning far backward.",
      "Slowly let the handles rise until your arms are straight again while keeping control."
    ],
    "formCues": [
      "Chest up",
      "Drive elbows down",
      "Keep wrists straight",
      "Control the return"
    ],
    "commonMistakes": [
      "Leaning far back and turning it into a row",
      "Pulling the handles behind the neck",
      "Shrugging the shoulders up toward the ears",
      "Letting the weight slam back at the top"
    ],
    "breathing": "Inhale as the handles rise back up, and exhale as you pull them down toward your chest."
  },
  "reverse-grip-pull-up": {
    "exerciseId": "reverse-grip-pull-up",
    "name": "Reverse Grip Pull-Up",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/reverse-grip-pull-up.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/reverse-grip-pull-up.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/reverse-grip-pull-up.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/reverse-grip-pull-up.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/reverse-grip-pull-up.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/reverse-grip-pull-up.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/reverse-grip-pull-up.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "2327",
    "matchedExternalName": "Reverse Grip Pull-Up",
    "confidence": "exact",
    "steps": [
      "Grab the bar with palms facing you (supinated grip), hands shoulder-width apart.",
      "Hang with arms fully extended and scapula engaged.",
      "Pull your chest up towards the bar, leading with your elbows.",
      "Clear your chin above the bar, squeezing at the top.",
      "Lower yourself back to the starting position with control."
    ],
    "formCues": [
      "Chest to bar",
      "Elbows drive down",
      "No swinging",
      "Full arm extension"
    ],
    "commonMistakes": [
      "Not extending arms",
      "Using momentum",
      "Craning neck over bar"
    ],
    "breathing": "Exhale pulling up, inhale lowering down."
  },
  "reverse-grip-cable-lat-pulldown": {
    "exerciseId": "reverse-grip-cable-lat-pulldown",
    "name": "Reverse-Grip Cable Lat Pulldown",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-bar-lateral-pulldown-reverse-grip.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-bar-lateral-pulldown-reverse-grip.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-bar-lateral-pulldown-reverse-grip.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-bar-lateral-pulldown-reverse-grip.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-bar-lateral-pulldown-reverse-grip.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-bar-lateral-pulldown-reverse-grip.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-bar-lateral-pulldown-reverse-grip.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0207",
    "matchedExternalName": "Reverse-Grip Cable Lat Pulldown",
    "confidence": "exact",
    "steps": [
      "Set the cable bar attachment and sit with knees secured under the pad.",
      "Grasp the bar with a reverse (supinated) shoulder-width grip.",
      "Lean back slightly, chest up, arms fully extended.",
      "Pull the bar down to your upper chest by contracting your lats.",
      "Slowly return the bar to the start position with control."
    ],
    "formCues": [
      "Pull elbows down",
      "Keep chest up",
      "Don’t swing the torso",
      "Grip the bar tightly"
    ],
    "commonMistakes": [
      "Using too much momentum",
      "Letting shoulders round",
      "Leaning too far back"
    ],
    "breathing": "Exhale as you pull down, inhale as you return up."
  },
  "ring-high-row": {
    "exerciseId": "ring-high-row",
    "name": "Ring High Row",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/ring-high-row.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/ring-high-row.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/ring-high-row.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/ring-high-row.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/ring-high-row.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/ring-high-row.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/ring-high-row.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-ring-high-row",
    "matchedExternalName": "Ring High Row",
    "confidence": "exact",
    "steps": [
      "Adjust rings to chest height and grip handles with neutral grip.",
      "Lean back with feet forward and body straight.",
      "Engage core, keep arms extended.",
      "Row your chest toward the rings, retracting shoulder blades.",
      "Lower body back to start under control."
    ],
    "formCues": [
      "Squeeze shoulder blades",
      "Keep body aligned",
      "Control each rep",
      "Pull elbows high"
    ],
    "commonMistakes": [
      "Sagging hips",
      "Shrugging shoulders",
      "Elbows flaring excessively",
      "Incomplete range"
    ],
    "breathing": "Exhale as you pull, inhale as you lower."
  },
  "rotational-push-up": {
    "exerciseId": "rotational-push-up",
    "name": "Rotational Push-Up",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/rotate-push-up-female.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/rotate-push-up-female.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/rotate-push-up-female.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/rotate-push-up-female.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/rotate-push-up-female.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-rotate-push-up-female",
    "matchedExternalName": "Rotational Push-Up",
    "confidence": "exact",
    "steps": [
      "Begin in a standard push-up position.",
      "Lower your chest toward the floor.",
      "As you press up, rotate your torso and lift one arm toward the ceiling.",
      "Hold briefly, keeping hips square.",
      "Return to start, repeat on the other side."
    ],
    "formCues": [
      "Rotate from torso",
      "Stack shoulders",
      "Keep core tight",
      "Breathe evenly"
    ],
    "commonMistakes": [
      "Letting hips sag",
      "Twisting too fast",
      "Losing shoulder alignment"
    ],
    "breathing": "Exhale when pushing up and rotating, inhale when lowering."
  },
  "runner-s-stretch": {
    "exerciseId": "runner-s-stretch",
    "name": "Runner's Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-runners-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-runners-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-runners-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-runners-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-runners-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-runners-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-runners-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1585",
    "matchedExternalName": "Runner's Stretch",
    "confidence": "exact",
    "steps": [
      "Step one foot forward into a lunge, keeping the rear leg extended.",
      "Place both hands on either side of the front foot.",
      "Lower your hips gently, keeping back leg straight.",
      "Lift your chest for deeper stretch.",
      "Hold, then switch legs."
    ],
    "formCues": [
      "Keep back leg long",
      "Sink hips down",
      "Lift chest",
      "Square your hips"
    ],
    "commonMistakes": [
      "Letting knee go over toes",
      "Dropping hips too low",
      "Arching the back excessively"
    ],
    "breathing": "Inhale as you get into position, exhale as you deepen the stretch."
  },
  "running": {
    "exerciseId": "running",
    "name": "Running",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/running.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/running.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/running.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/running.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/running.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/running.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/running.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-running",
    "matchedExternalName": "Running",
    "confidence": "exact",
    "steps": [
      "Warm up with light walking or dynamic stretches.",
      "Begin running at a moderate pace.",
      "Maintain a steady breathing rhythm and upright posture.",
      "Land lightly with a midfoot or forefoot strike.",
      "Cool down with walking and stretching."
    ],
    "formCues": [
      "Keep chest up",
      "Relax shoulders",
      "Lean slightly forward from ankles",
      "Swing arms naturally"
    ],
    "commonMistakes": [
      "Overstriding",
      "Hunching shoulders",
      "Landing heavily on heels"
    ],
    "breathing": "Exhale steadily as you push off, inhale as you recover."
  },
  "russian-twist-on-stability-ball-arms-straight": {
    "exerciseId": "russian-twist-on-stability-ball-arms-straight",
    "name": "Russian Twist on Stability Ball (Arms Straight)",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/russian-twist-on-stability-ball-arms-straight.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/russian-twist-on-stability-ball-arms-straight.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/russian-twist-on-stability-ball-arms-straight.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/russian-twist-on-stability-ball-arms-straight.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/russian-twist-on-stability-ball-arms-straight.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0211",
    "matchedExternalName": "Russian Twist on Stability Ball (Arms Straight)",
    "confidence": "exact",
    "steps": [
      "Sit on a stability ball and walk feet forward until shoulders rest on the ball.",
      "Keep knees bent at 90 degrees, hips lifted in a bridge position.",
      "Extend arms straight toward the ceiling with hands together.",
      "Rotate torso and arms as one unit to the left.",
      "Return to center, then rotate to the right, repeating for reps."
    ],
    "formCues": [
      "Keep arms extended",
      "Engage core",
      "Move smoothly",
      "Avoid sagging hips"
    ],
    "commonMistakes": [
      "Letting hips drop",
      "Bending arms",
      "Rotating too quickly"
    ],
    "breathing": "Exhale during each rotation, inhale as you return to center."
  },
  "scapula-dips": {
    "exerciseId": "scapula-dips",
    "name": "Scapula Dips",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/scapula-dips.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/scapula-dips.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/scapula-dips.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/scapula-dips.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/scapula-dips.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/scapula-dips.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/scapula-dips.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "3012",
    "matchedExternalName": "Scapula Dips",
    "confidence": "exact",
    "steps": [
      "Start in a straight-arm support on parallel bars or dip bars with your elbows locked and shoulders stacked over your hands.",
      "Lift your chest and brace your trunk while keeping your legs still under you.",
      "Lower your body a few inches by letting your shoulders rise toward your ears without bending your elbows.",
      "Press down through your hands to pull your shoulders away from your ears and raise your body back up.",
      "Repeat with slow, controlled shoulder movement while keeping your arms straight the whole time."
    ],
    "formCues": [
      "Keep elbows locked",
      "Shoulders away from ears",
      "Move only at shoulders",
      "Stay tall through chest"
    ],
    "commonMistakes": [
      "Bending the elbows like a regular dip",
      "Swinging the legs or torso to create momentum",
      "Shrugging up and never pressing back down",
      "Dropping too far and losing shoulder control"
    ],
    "breathing": "Inhale as you lower into the shoulder shrug, and exhale as you press down to lift your body back up."
  },
  "seated-alternating-dumbbell-curl": {
    "exerciseId": "seated-alternating-dumbbell-curl",
    "name": "Seated Alternating Dumbbell Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-alternate-seated-biceps-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-alternate-seated-biceps-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-alternate-seated-biceps-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-alternate-seated-biceps-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-alternate-seated-biceps-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-alternate-seated-biceps-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-alternate-seated-biceps-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0285",
    "matchedExternalName": "Seated Alternating Dumbbell Curl",
    "confidence": "exact",
    "steps": [
      "Sit with back against support and feet flat.",
      "Hold dumbbells at your sides, palms facing in.",
      "Curl one dumbbell while rotating palm up.",
      "Lower to starting position and alternate arms.",
      "Repeat, keeping back straight and elbows close to sides."
    ],
    "formCues": [
      "Keep elbows stationary",
      "Rotate palm up during curl",
      "Don't swing weights",
      "Engage your core"
    ],
    "commonMistakes": [
      "Using momentum",
      "Elbows flaring",
      "Rocking the torso",
      "Moving both arms together"
    ],
    "breathing": "Exhale as you curl up, inhale as you lower down."
  },
  "seated-bent-over-back-stretch": {
    "exerciseId": "seated-bent-over-back-stretch",
    "name": "Seated Bent Over Back Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-sitting-bent-over-back-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-sitting-bent-over-back-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-sitting-bent-over-back-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-sitting-bent-over-back-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-sitting-bent-over-back-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-sitting-bent-over-back-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-sitting-bent-over-back-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-sitting-bent-over-back-stretch",
    "matchedExternalName": "Seated Bent Over Back Stretch",
    "confidence": "exact",
    "steps": [
      "Sit comfortably on the floor, legs extended or crossed.",
      "Hinge forward at the hips, keeping back relaxed.",
      "Let arms reach forward toward feet or floor.",
      "Lower your chest toward your knees, breathing deeply.",
      "Hold the stretch and relax into the position."
    ],
    "formCues": [
      "Relax neck",
      "Hinge at hips",
      "Keep stretch gentle",
      "Breathe deeply"
    ],
    "commonMistakes": [
      "Rounding excessively",
      "Forcing stretch",
      "Holding breath"
    ],
    "breathing": "Inhale before bending, exhale as you fold forward."
  },
  "seated-boat-stretch": {
    "exerciseId": "seated-boat-stretch",
    "name": "Seated Boat Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-boat-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-boat-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-boat-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-boat-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-boat-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-boat-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-boat-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-boat-stretch",
    "matchedExternalName": "Seated Boat Stretch",
    "confidence": "exact",
    "steps": [
      "Sit on the floor with back straight.",
      "Bring soles of feet together and let knees drop out.",
      "Hold ankles or feet for support.",
      "Gently pull feet closer and lean forward slightly.",
      "Hold position without bouncing."
    ],
    "formCues": [
      "Keep chest up",
      "Relax knees toward floor",
      "Avoid rounding back",
      "Go only as far as comfortable"
    ],
    "commonMistakes": [
      "Forcing knees down",
      "Hunching shoulders",
      "Bouncing during stretch"
    ],
    "breathing": "Breathe deeply and regularly while holding the stretch."
  },
  "seated-cable-row-v-grip": {
    "exerciseId": "seated-cable-row-v-grip",
    "name": "Seated Cable Row (V-Grip)",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-straight-back-seated-row-v-grip.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-straight-back-seated-row-v-grip.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-straight-back-seated-row-v-grip.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-straight-back-seated-row-v-grip.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-straight-back-seated-row-v-grip.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-straight-back-seated-row-v-grip.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-straight-back-seated-row-v-grip.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0208",
    "matchedExternalName": "Seated Cable Row (V-Grip)",
    "confidence": "exact",
    "steps": [
      "Sit on the cable row machine and place feet on the foot platform.",
      "Grab the V-grip handle with both hands, arms extended.",
      "Maintain a straight back and slight knee bend.",
      "Pull the handle toward your abdomen, retracting your shoulder blades.",
      "Slowly extend arms to return to the starting position."
    ],
    "formCues": [
      "Keep back straight",
      "Drive elbows back",
      "Retract shoulder blades",
      "Don’t lean or round spine"
    ],
    "commonMistakes": [
      "Hunching the back",
      "Using momentum",
      "Allowing elbows to flare out"
    ],
    "breathing": "Exhale as you row back, inhale as you extend forward."
  },
  "seated-cable-row-wide-grip": {
    "exerciseId": "seated-cable-row-wide-grip",
    "name": "Seated Cable Row (Wide-Grip)",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-seated-row-wide-grip.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-seated-row-wide-grip.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-seated-row-wide-grip.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-seated-row-wide-grip.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-seated-row-wide-grip.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-seated-row-wide-grip.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-seated-row-wide-grip.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0218",
    "matchedExternalName": "Seated Cable Row (Wide-Grip)",
    "confidence": "exact",
    "steps": [
      "Sit down and place feet against the platform.",
      "Grasp the wide grip attachment with both hands.",
      "Keep your torso upright, arms fully extended.",
      "Pull the handle toward your upper abdomen, squeezing your upper back.",
      "Slowly release back to the start position."
    ],
    "formCues": [
      "Keep elbows high",
      "Squeeze shoulder blades",
      "Keep back neutral",
      "Don’t rock the torso"
    ],
    "commonMistakes": [
      "Leaning back too far",
      "Letting elbows drop",
      "Rounding the back"
    ],
    "breathing": "Exhale as you pull, inhale as you extend arms."
  },
  "seated-calf-stretch": {
    "exerciseId": "seated-calf-stretch",
    "name": "Seated Calf Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-seated-calf-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-seated-calf-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-seated-calf-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-seated-calf-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-seated-calf-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-seated-calf-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-seated-calf-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1390",
    "matchedExternalName": "Seated Calf Stretch",
    "confidence": "exact",
    "steps": [
      "Sit with legs extended straight in front.",
      "Loop a towel or band around one foot's ball.",
      "Keep knee straight and pull your toes toward you.",
      "Hold position, feeling stretch in calf.",
      "Repeat on the other leg."
    ],
    "formCues": [
      "Keep knee straight",
      "Flex ankle back",
      "Sit up tall",
      "Don't force the stretch"
    ],
    "commonMistakes": [
      "Bending the knee",
      "Rounding the back",
      "Pulling toes too forcefully"
    ],
    "breathing": "Breathe steadily and deeply throughout the stretch."
  },
  "seated-dumbbell-shoulder-press": {
    "exerciseId": "seated-dumbbell-shoulder-press",
    "name": "Seated Dumbbell Shoulder Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-bench-seated-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-bench-seated-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-bench-seated-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/dumbbell-bench-seated-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/dumbbell-bench-seated-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/dumbbell-bench-seated-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/dumbbell-bench-seated-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0289",
    "matchedExternalName": "Seated Dumbbell Shoulder Press",
    "confidence": "exact",
    "steps": [
      "Sit on a bench with back support and feet flat.",
      "Hold dumbbells at shoulder height, elbows bent.",
      "Press dumbbells overhead until arms are extended.",
      "Pause briefly at the top.",
      "Lower dumbbells to starting position."
    ],
    "formCues": [
      "Keep back pressed to pad",
      "Do not arch lower back",
      "Press overhead",
      "Elbows under wrists"
    ],
    "commonMistakes": [
      "Arching back excessively",
      "Lowering weights too fast",
      "Letting elbows drop too low",
      "Pressing weights out in front"
    ],
    "breathing": "Exhale as you press up, inhale as you lower down."
  },
  "seated-lower-back-stretch": {
    "exerciseId": "seated-lower-back-stretch",
    "name": "Seated Lower Back Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-seated-lower-back-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-seated-lower-back-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-seated-lower-back-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-seated-lower-back-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-seated-lower-back-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-seated-lower-back-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-seated-lower-back-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0690",
    "matchedExternalName": "Seated Lower Back Stretch",
    "confidence": "exact",
    "steps": [
      "Sit with legs extended or crossed.",
      "Reach both arms straight in front of you.",
      "Slowly bend at your hips to lower your torso forward.",
      "Relax your back and shoulders.",
      "Hold stretch, then return to upright position."
    ],
    "formCues": [
      "Reach with both arms",
      "Relax neck and head",
      "Hinge from hips",
      "Breathe and relax deeper"
    ],
    "commonMistakes": [
      "Rounding upper back excessively",
      "Forcing the stretch",
      "Holding breath"
    ],
    "breathing": "Inhale deeply before bending, exhale as you reach forward."
  },
  "seated-shoulder-flexor-depressor-retractor-stretch": {
    "exerciseId": "seated-shoulder-flexor-depressor-retractor-stretch",
    "name": "Seated Shoulder Flexor, Depressor, Retractor Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-seated-shoulder-flexor-depresor-retractor.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-seated-shoulder-flexor-depresor-retractor.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-seated-shoulder-flexor-depresor-retractor.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-seated-shoulder-flexor-depresor-retractor.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-seated-shoulder-flexor-depresor-retractor.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-seated-shoulder-flexor-depresor-retractor.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-seated-shoulder-flexor-depresor-retractor.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "2203",
    "matchedExternalName": "Seated Shoulder Flexor, Depressor, Retractor Stretch",
    "confidence": "exact",
    "steps": [
      "Sit tall with feet flat.",
      "Lift arms overhead, reaching upward.",
      "Gently depress the shoulders away from your ears.",
      "Retract shoulder blades by pulling them slightly together.",
      "Hold for a stretch, breathing evenly."
    ],
    "formCues": [
      "Reach up",
      "Pull shoulders down",
      "Retract shoulder blades",
      "Keep chest open"
    ],
    "commonMistakes": [
      "Shrugging shoulders",
      "Hunching forward",
      "Holding breath"
    ],
    "breathing": "Inhale to begin, exhale as you stretch deeper."
  },
  "seated-straight-arm-twist": {
    "exerciseId": "seated-straight-arm-twist",
    "name": "Seated Straight Arm Twist",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/seated-twist-straight-arm.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/seated-twist-straight-arm.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/seated-twist-straight-arm.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/seated-twist-straight-arm.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/seated-twist-straight-arm.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1011",
    "matchedExternalName": "Seated Straight Arm Twist",
    "confidence": "exact",
    "steps": [
      "Sit with knees bent, feet either flat or off the ground.",
      "Extend arms straight forward, clasping hands.",
      "Lean back slightly with a neutral spine.",
      "Rotate torso to one side, arms following movement.",
      "Return to center and repeat to opposite side."
    ],
    "formCues": [
      "Keep arms straight",
      "Brace your core",
      "Rotate shoulders not just arms",
      "Don't round your lower back"
    ],
    "commonMistakes": [
      "Using just arms instead of rotating the torso",
      "Rounding the spine",
      "Moving too quickly or without control"
    ],
    "breathing": "Exhale as you twist, inhale returning to center."
  },
  "seated-twist-on-stability-ball": {
    "exerciseId": "seated-twist-on-stability-ball",
    "name": "Seated Twist on Stability Ball",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/seated-twist-on-stability-ball.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/seated-twist-on-stability-ball.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/seated-twist-on-stability-ball.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/seated-twist-on-stability-ball.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/seated-twist-on-stability-ball.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0849",
    "matchedExternalName": "Seated Twist on Stability Ball",
    "confidence": "exact",
    "steps": [
      "Sit on a stability ball with feet flat, core engaged.",
      "Hold arms in front or across chest.",
      "Rotate your torso to the right, keeping hips stationary.",
      "Pause, then twist to the left.",
      "Return to center, repeat alternately."
    ],
    "formCues": [
      "Sit tall",
      "Keep hips steady",
      "Rotate from the waist",
      "Engage core"
    ],
    "commonMistakes": [
      "Slouching",
      "Over-rotating hips",
      "Forgetting to brace core"
    ],
    "breathing": "Exhale during the twist, inhale as you return to center."
  },
  "seated-twist-stretch-straight-arm": {
    "exerciseId": "seated-twist-stretch-straight-arm",
    "name": "Seated Twist Stretch (Straight Arm)",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-seated-twist-straight-arm.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-seated-twist-straight-arm.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-seated-twist-straight-arm.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-seated-twist-straight-arm.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-seated-twist-straight-arm.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-seated-twist-straight-arm.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-seated-twist-straight-arm.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-seated-twist-straight-arm",
    "matchedExternalName": "Seated Twist Stretch (Straight Arm)",
    "confidence": "exact",
    "steps": [
      "Sit upright with legs extended forward.",
      "Cross your left leg over your right if desired for more stretch.",
      "Extend your right arm straight behind you for support.",
      "Twist your torso toward your right, using the opposite arm for leverage.",
      "Hold, then repeat to the other side."
    ],
    "formCues": [
      "Keep back straight",
      "Twist gently",
      "Look over shoulder",
      "Breathe deeply"
    ],
    "commonMistakes": [
      "Slouching the back",
      "Over-twisting",
      "Holding breath"
    ],
    "breathing": "Breathe steadily while holding the stretch."
  },
  "seated-wide-angle-pose-sequence": {
    "exerciseId": "seated-wide-angle-pose-sequence",
    "name": "Seated Wide Angle Pose Sequence",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-seated-wide-angle-pose-sequence.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-seated-wide-angle-pose-sequence.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-seated-wide-angle-pose-sequence.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-seated-wide-angle-pose-sequence.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-seated-wide-angle-pose-sequence.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-seated-wide-angle-pose-sequence.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-seated-wide-angle-pose-sequence.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1587",
    "matchedExternalName": "Seated Wide Angle Pose Sequence",
    "confidence": "exact",
    "steps": [
      "Sit with legs extended wide apart.",
      "Keep knees and toes pointing upward.",
      "Sit tall and hinge forward at hips.",
      "Walk hands forward, maintaining flat back.",
      "Hold stretch or gently move side to side."
    ],
    "formCues": [
      "Keep spine long",
      "Point toes up",
      "Lead with chest",
      "Don't round lower back"
    ],
    "commonMistakes": [
      "Letting knees roll inward",
      "Rounding back excessively",
      "Pushing too far"
    ],
    "breathing": "Inhale to prepare, exhale as you stretch forward."
  },
  "shoulder-width-pull-up": {
    "exerciseId": "shoulder-width-pull-up",
    "name": "Shoulder-Width Pull-Up",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/pull-up-shoulder-grip.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/pull-up-shoulder-grip.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/pull-up-shoulder-grip.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/pull-up-shoulder-grip.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/pull-up-shoulder-grip.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/pull-up-shoulder-grip.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/pull-up-shoulder-grip.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0651",
    "matchedExternalName": "Shoulder-Width Pull-Up",
    "confidence": "exact",
    "steps": [
      "Grip bar shoulder-width, palms away.",
      "Hang with arms fully extended.",
      "Pull up until chin clears the bar.",
      "Pause briefly at the top.",
      "Lower down slowly to full extension."
    ],
    "formCues": [
      "Lead with chest",
      "No swinging",
      "Full range of motion",
      "Elbows down and back"
    ],
    "commonMistakes": [
      "Using momentum",
      "Partial reps",
      "Shrugging shoulders"
    ],
    "breathing": "Exhale pulling up, inhale lowering down."
  },
  "side-bend-on-stability-ball": {
    "exerciseId": "side-bend-on-stability-ball",
    "name": "Side Bend on Stability Ball",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/side-bend-on-stability-ball.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/side-bend-on-stability-ball.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/side-bend-on-stability-ball.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/side-bend-on-stability-ball.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/side-bend-on-stability-ball.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0850",
    "matchedExternalName": "Side Bend on Stability Ball",
    "confidence": "exact",
    "steps": [
      "Position yourself sideways on a stability ball, feet braced.",
      "Place top hand behind head, other hand for balance.",
      "Lower your torso over the ball for a stretch.",
      "Contract your side to lift torso up in a side bend.",
      "Lower back down with control, repeat."
    ],
    "formCues": [
      "Keep hips stacked",
      "Engage obliques",
      "Avoid pulling neck",
      "Slow movement"
    ],
    "commonMistakes": [
      "Using momentum",
      "Rotating torso",
      "Not stabilizing with lower arm"
    ],
    "breathing": "Exhale as you crunch up, inhale as you lower."
  },
  "side-bend-stretch": {
    "exerciseId": "side-bend-stretch",
    "name": "Side Bend Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-slopes-towards-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-slopes-towards-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-slopes-towards-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-slopes-towards-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-slopes-towards-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-slopes-towards-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-slopes-towards-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-slopes-towards-stretch",
    "matchedExternalName": "Side Bend Stretch",
    "confidence": "exact",
    "steps": [
      "Stand or sit tall with spine neutral.",
      "Raise right arm overhead.",
      "Slowly bend torso to the left, keeping hips steady.",
      "Hold stretch for time, feeling the pull in your side.",
      "Return to start and repeat on the other side."
    ],
    "formCues": [
      "Keep hips level",
      "Reach upward first",
      "Don’t twist",
      "Bend directly sideways"
    ],
    "commonMistakes": [
      "Twisting trunk",
      "Tilting forward/backward",
      "Dropping shoulder"
    ],
    "breathing": "Exhale as you bend, inhale as you return to upright."
  },
  "side-wrist-pull-stretch": {
    "exerciseId": "side-wrist-pull-stretch",
    "name": "Side Wrist Pull Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-side-wrist-pull-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-side-wrist-pull-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-side-wrist-pull-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-side-wrist-pull-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-side-wrist-pull-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-side-wrist-pull-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-side-wrist-pull-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0721",
    "matchedExternalName": "Side Wrist Pull Stretch",
    "confidence": "exact",
    "steps": [
      "Stand or sit tall.",
      "Extend one arm overhead or outward.",
      "Hold your wrist with the opposite hand.",
      "Pull gently toward one side.",
      "Hold, then switch sides."
    ],
    "formCues": [
      "Keep arm straight",
      "Pull gently",
      "Relax shoulder",
      "Keep hips squared"
    ],
    "commonMistakes": [
      "Pulling too hard",
      "Locking elbow",
      "Shrugging shoulder"
    ],
    "breathing": "Exhale as you stretch, inhale to reset or switch sides."
  },
  "single-dumbbell-stiff-leg-deadlift": {
    "exerciseId": "single-dumbbell-stiff-leg-deadlift",
    "name": "Single Dumbbell Stiff-Leg Deadlift",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/single-dumbbell-stiff-leg-deadlift.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/single-dumbbell-stiff-leg-deadlift.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/single-dumbbell-stiff-leg-deadlift.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/single-dumbbell-stiff-leg-deadlift.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/single-dumbbell-stiff-leg-deadlift.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/single-dumbbell-stiff-leg-deadlift.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/single-dumbbell-stiff-leg-deadlift.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1757",
    "matchedExternalName": "Single Dumbbell Stiff-Leg Deadlift",
    "confidence": "exact",
    "steps": [
      "Stand upright holding a dumbbell with both hands at your thighs.",
      "Keep a slight bend in your knees and your back flat.",
      "Hinge forward at the hips, lowering the dumbbell towards the floor.",
      "Pause at the bottom while feeling a stretch in your hamstrings.",
      "Return to the upright position by driving hips forward."
    ],
    "formCues": [
      "Hips back",
      "Flat back",
      "Feel hamstring stretch",
      "No rounding"
    ],
    "commonMistakes": [
      "Rounding back",
      "Excessive knee bend",
      "Bouncing at bottom"
    ],
    "breathing": "Inhale lowering, exhale as you stand back up."
  },
  "single-leg-stretch-bent-knee": {
    "exerciseId": "single-leg-stretch-bent-knee",
    "name": "Single Leg Stretch (Bent Knee)",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-single-leg-stretch-bent-knee.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-single-leg-stretch-bent-knee.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-single-leg-stretch-bent-knee.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-single-leg-stretch-bent-knee.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-single-leg-stretch-bent-knee.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-single-leg-stretch-bent-knee.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-single-leg-stretch-bent-knee.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-single-leg-stretch-bent-knee",
    "matchedExternalName": "Single Leg Stretch (Bent Knee)",
    "confidence": "exact",
    "steps": [
      "Lie on your back with both legs bent.",
      "Grasp one knee with both hands.",
      "Pull the knee toward your chest gently.",
      "Hold the stretch, keeping your back flat.",
      "Switch sides and repeat."
    ],
    "formCues": [
      "Keep shoulders relaxed",
      "Pull gently",
      "Keep opposite foot on floor",
      "Breathe steadily"
    ],
    "commonMistakes": [
      "Overpulling knee",
      "Arching lower back",
      "Holding breath"
    ],
    "breathing": "Exhale as you pull the knee in, inhale as you release."
  },
  "single-straight-leg-stretch": {
    "exerciseId": "single-straight-leg-stretch",
    "name": "Single Straight Leg Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-single-straight-leg-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-single-straight-leg-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-single-straight-leg-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-single-straight-leg-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-single-straight-leg-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-single-straight-leg-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-single-straight-leg-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-single-straight-leg-stretch",
    "matchedExternalName": "Single Straight Leg Stretch",
    "confidence": "exact",
    "steps": [
      "Lie on your back with both legs straight.",
      "Lift one leg up while keeping it straight.",
      "Hold the back of your thigh or calf gently.",
      "Pull the leg slightly toward your chest.",
      "Hold and switch legs."
    ],
    "formCues": [
      "Keep leg straight",
      "Relax neck and shoulders",
      "Point or flex foot for deeper stretch",
      "Avoid pulling too hard"
    ],
    "commonMistakes": [
      "Bending the raised knee",
      "Lifting hips off mat",
      "Straining neck or back"
    ],
    "breathing": "Exhale as you stretch the leg, inhale as you lower it."
  },
  "sit-up": {
    "exerciseId": "sit-up",
    "name": "Sit-Up",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/sit-ups.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/sit-ups.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/sit-ups.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/sit-ups.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/sit-ups.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/sit-ups.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/sit-ups.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-sit-ups",
    "matchedExternalName": "Sit-Up",
    "confidence": "exact",
    "steps": [
      "Lie flat on your back with knees bent and feet anchored.",
      "Place hands behind your head or across your chest.",
      "Engage your core to lift your torso to a seated position.",
      "Pause at the top, then slowly lower back to the floor.",
      "Repeat for the desired number of repetitions."
    ],
    "formCues": [
      "Avoid pulling on neck",
      "Lift chest first",
      "Engage abs throughout",
      "Control the lower"
    ],
    "commonMistakes": [
      "Jerking the neck",
      "Using momentum",
      "Feet lifting off the ground"
    ],
    "breathing": "Exhale as you rise, inhale as you lower."
  },
  "sled-45-degree-calf-press": {
    "exerciseId": "sled-45-degree-calf-press",
    "name": "Sled 45 Degree Calf Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/sled-45-degree-calf-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/sled-45-degree-calf-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/sled-45-degree-calf-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/sled-45-degree-calf-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/sled-45-degree-calf-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/sled-45-degree-calf-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/sled-45-degree-calf-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0738",
    "matchedExternalName": "Sled 45 Degree Calf Press",
    "confidence": "exact",
    "steps": [
      "Sit in the 45-degree sled machine and place the balls of both feet on the lower edge of the platform with your heels hanging off.",
      "Straighten your legs enough to support the sled and keep a small bend in your knees.",
      "Let your heels drop down by bending at the ankles until you feel a stretch in your calves.",
      "Press through the balls of your feet and raise your heels as high as you can.",
      "Pause briefly at the top while keeping your legs steady.",
      "Lower your heels under control back to the stretched position and repeat."
    ],
    "formCues": [
      "Drive through the balls of feet",
      "Lift heels as high as possible",
      "Control the heel drop",
      "Keep knees softly bent"
    ],
    "commonMistakes": [
      "Bending and straightening the knees instead of moving only at the ankles",
      "Placing the whole foot flat on the platform so the heels cannot drop",
      "Bouncing out of the bottom instead of lowering under control",
      "Turning the toes excessively in or out during the rep"
    ],
    "breathing": "Inhale as you lower your heels, and exhale as you press through the balls of your feet to raise them."
  },
  "sled-45-degree-wide-leg-press": {
    "exerciseId": "sled-45-degree-wide-leg-press",
    "name": "Sled 45 Degree Wide Leg Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/sled-45-degree-leg-wide-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/sled-45-degree-leg-wide-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/sled-45-degree-leg-wide-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/sled-45-degree-leg-wide-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/sled-45-degree-leg-wide-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/sled-45-degree-leg-wide-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/sled-45-degree-leg-wide-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0740",
    "matchedExternalName": "Sled 45 Degree Wide Leg Press",
    "confidence": "exact",
    "steps": [
      "Adjust the seat and load desired weight.",
      "Sit with your back and head against the pad, feet flat and wide on the platform.",
      "Release the safety handles and grasp the side handles.",
      "Bend your knees to lower the platform until your thighs reach 90 degrees or just past.",
      "Press through your heels to extend your legs fully, but avoid locking out the knees."
    ],
    "formCues": [
      "Push through heels",
      "Keep knees in line with toes",
      "Do not lock knees at top",
      "Maintain flat lower back"
    ],
    "commonMistakes": [
      "Allowing knees to collapse inward",
      "Rounding lower back",
      "Half reps or short range",
      "Locking knees at extension"
    ],
    "breathing": "Inhale as you lower the platform, exhale as you press it back up."
  },
  "sled-hack-squat": {
    "exerciseId": "sled-hack-squat",
    "name": "Sled Hack Squat",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/sled-hack-squat.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/sled-hack-squat.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/sled-hack-squat.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/sled-hack-squat.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/sled-hack-squat.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/sled-hack-squat.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/sled-hack-squat.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0743",
    "matchedExternalName": "Sled Hack Squat",
    "confidence": "exact",
    "steps": [
      "Stand on the sled platform with your back against the pad and your shoulders under the pads.",
      "Place your feet about shoulder-width apart on the platform with toes turned slightly out, then grip the handles.",
      "Unlock the sled and lower yourself by bending your knees and hips until your thighs reach parallel or your deepest controlled position.",
      "Keep your full foot planted against the platform as your knees track in line with your toes.",
      "Drive through your heels and midfoot to extend your knees and hips and return the sled upward.",
      "Stop just short of locking your knees, then continue into the next repetition."
    ],
    "formCues": [
      "Keep your back on pad",
      "Knees track over toes",
      "Push through whole foot",
      "Control the descent"
    ],
    "commonMistakes": [
      "Feet placed too low so the heels lift off the platform",
      "Knees collapsing inward during the lowering phase",
      "Lower back rounding or hips peeling off the pad",
      "Bouncing out of the bottom instead of pausing briefly"
    ],
    "breathing": "Inhale as you lower the sled, then exhale as you press it back up."
  },
  "smith-chair-squat": {
    "exerciseId": "smith-chair-squat",
    "name": "Smith Chair Squat",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/smith-chair-squat.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/smith-chair-squat.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/smith-chair-squat.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/smith-chair-squat.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/smith-chair-squat.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/smith-chair-squat.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/smith-chair-squat.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0750",
    "matchedExternalName": "Smith Chair Squat",
    "confidence": "exact",
    "steps": [
      "Set the Smith bar across your upper back and stand with your feet about shoulder-width apart, slightly in front of the bar path.",
      "Unrack the bar and brace your core with your chest up and eyes forward.",
      "Bend your knees and hips together to sit straight down under control.",
      "Lower until your thighs are about parallel to the floor or slightly below while keeping your heels down.",
      "Drive through your midfoot and heels to stand back up until your knees and hips are fully extended.",
      "Lock out tall, then repeat for the next rep."
    ],
    "formCues": [
      "Chest up",
      "Knees track over toes",
      "Drive through heels",
      "Brace your core"
    ],
    "commonMistakes": [
      "Feet set directly under the bar so the knees travel too far forward.",
      "Heels lift off the floor at the bottom.",
      "Knees cave inward during the ascent.",
      "Lower back rounds as the hips drop."
    ],
    "breathing": "Inhale and brace before you lower, then exhale as you drive back up to standing."
  },
  "smith-machine-calf-raise": {
    "exerciseId": "smith-machine-calf-raise",
    "name": "Smith Machine Calf Raise",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/smith-calf-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/smith-calf-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/smith-calf-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/smith-calf-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/smith-calf-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/smith-calf-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/smith-calf-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1393",
    "matchedExternalName": "Smith Machine Calf Raise",
    "confidence": "exact",
    "steps": [
      "Set up the Smith machine bar at shoulder height.",
      "Step under the bar, position it across your upper traps, and unrack.",
      "Stand upright with feet hip to shoulder-width apart.",
      "Rise onto the balls of your feet by extending your ankles.",
      "Pause at the top, then lower your heels in a controlled manner."
    ],
    "formCues": [
      "Move only at ankles",
      "Keep legs straight (but not locked)",
      "Control the movement",
      "Pause at top"
    ],
    "commonMistakes": [
      "Bouncing for momentum",
      "Partial range of motion",
      "Allowing ankles to roll outward/inward"
    ],
    "breathing": "Exhale as you rise, inhale as you lower."
  },
  "smith-machine-deadlift": {
    "exerciseId": "smith-machine-deadlift",
    "name": "Smith Machine Deadlift",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/smith-deadlift-deadlift-1.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/smith-deadlift-deadlift-1.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/smith-deadlift-deadlift-1.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/smith-deadlift-deadlift-1.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/smith-deadlift-deadlift-1.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0752",
    "matchedExternalName": "Smith Machine Deadlift",
    "confidence": "exact",
    "steps": [
      "Position feet shoulder-width beneath the Smith bar.",
      "Grip the bar just outside your knees with both hands.",
      "Hinge hips back and lower torso, keeping chest up.",
      "Extend hips and knees to lift the bar along the guides.",
      "Lower the bar with control to the starting position."
    ],
    "formCues": [
      "Hinge at hips",
      "Keep back flat",
      "Drive through heels",
      "Bar close to shins"
    ],
    "commonMistakes": [
      "Rounding the lower back",
      "Lifting with arms instead of legs",
      "Letting the bar drift away from body",
      "Jerky movements"
    ],
    "breathing": "Inhale as you lower the bar, exhale as you lift."
  },
  "smith-machine-leg-press": {
    "exerciseId": "smith-machine-leg-press",
    "name": "Smith Machine Leg Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/smith-leg-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/smith-leg-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/smith-leg-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/smith-leg-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/smith-leg-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/smith-leg-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/smith-leg-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0748",
    "matchedExternalName": "Smith Machine Leg Press",
    "confidence": "exact",
    "steps": [
      "Set the safety stops and load the appropriate weight.",
      "Lie under the Smith bar and position feet wider than shoulder-width on the bar.",
      "Unrack the bar by rotating your feet upward.",
      "Lower the bar slowly toward your torso until legs form roughly a 90-degree angle.",
      "Press the bar up by extending your knees and hips."
    ],
    "formCues": [
      "Keep core braced",
      "Press evenly with both feet",
      "Full range of motion",
      "Maintain foot flatness"
    ],
    "commonMistakes": [
      "Incorrect foot placement",
      "Pressing with toes only",
      "Shallow movement",
      "Letting knees cave inward"
    ],
    "breathing": "Inhale as you lower the bar, exhale as you press upward."
  },
  "smith-seated-shoulder-press": {
    "exerciseId": "smith-seated-shoulder-press",
    "name": "Smith Seated Shoulder Press",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/smith-seated-shoulder-press.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/smith-seated-shoulder-press.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/smith-seated-shoulder-press.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/smith-seated-shoulder-press.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/smith-seated-shoulder-press.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/smith-seated-shoulder-press.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/smith-seated-shoulder-press.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0765",
    "matchedExternalName": "Smith Seated Shoulder Press",
    "confidence": "exact",
    "steps": [
      "Set a bench or seat under the Smith bar so the bar starts around shoulder height when you sit down.",
      "Sit tall with your back supported, plant your feet flat, and grip the bar just wider than shoulder width with palms forward.",
      "Unrack the bar and hold it above your upper chest with wrists stacked over elbows.",
      "Lower the bar in a straight path until it reaches about chin to shoulder level.",
      "Press the bar straight up until your arms are extended overhead.",
      "Lower the bar with control to the start position and repeat.",
      "Finish by locking out the top and rotating the bar to re-rack it on the hooks."
    ],
    "formCues": [
      "Keep ribs down",
      "Press straight up",
      "Wrists stacked over elbows",
      "Feet flat and braced"
    ],
    "commonMistakes": [
      "Lowering the bar behind the head",
      "Flaring the elbows straight out to the sides",
      "Arching the lower back off the bench",
      "Letting the wrists bend back excessively"
    ],
    "breathing": "Inhale as you lower the bar to shoulder level, and exhale as you press it overhead."
  },
  "spell-caster": {
    "exerciseId": "spell-caster",
    "name": "Spell Caster",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/spell-caster.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/spell-caster.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/spell-caster.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/spell-caster.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/spell-caster.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/spell-caster.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/spell-caster.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0777",
    "matchedExternalName": "Spell Caster",
    "confidence": "exact",
    "steps": [
      "Stand tall with your feet about shoulder-width apart, holding one dumbbell with both hands in front of your hips.",
      "Soften your knees and hinge slightly at your hips while keeping your chest up and back flat.",
      "Rotate your torso and lower the dumbbell toward the outside of one foot.",
      "Drive through your hips and return to the center with the dumbbell back in front of your hips.",
      "Rotate to the other side and lower the dumbbell toward the outside of the opposite foot.",
      "Continue alternating sides with controlled movement."
    ],
    "formCues": [
      "Rotate through your torso",
      "Keep your back flat",
      "Bend at the hips",
      "Move with control"
    ],
    "commonMistakes": [
      "Rounding the lower back as the dumbbell lowers",
      "Bending mostly through the spine instead of hinging at the hips",
      "Letting the knees cave inward during the reach",
      "Swinging the dumbbell quickly instead of controlling each side"
    ],
    "breathing": "Inhale as you lower and rotate toward one foot, then exhale as you return to center and switch sides."
  },
  "spine-stretch": {
    "exerciseId": "spine-stretch",
    "name": "Spine Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-spine-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-spine-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-spine-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-spine-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-spine-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-spine-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-spine-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1363",
    "matchedExternalName": "Spine Stretch",
    "confidence": "exact",
    "steps": [
      "Sit on floor with legs extended and feet flexed.",
      "Extend arms straight ahead at shoulder height.",
      "Inhale, then as you exhale, reach forward, articulating your spine.",
      "Stretch forward as far as comfortable, keeping legs straight.",
      "Hold and return slowly to start."
    ],
    "formCues": [
      "Lengthen spine",
      "Reach with fingertips",
      "Keep legs straight",
      "Relax neck"
    ],
    "commonMistakes": [
      "Rounding shoulders excessively",
      "Forcing the stretch",
      "Bending knees"
    ],
    "breathing": "Exhale as you stretch forward, inhale as you return to start."
  },
  "squat": {
    "exerciseId": "squat",
    "name": "Squat",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/squat.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/squat.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/squat.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/squat.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/squat.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/squat.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/squat.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-squat",
    "matchedExternalName": "Squat",
    "confidence": "exact",
    "steps": [
      "Stand with feet shoulder-width apart and toes slightly outward.",
      "Brace core and keep chest up.",
      "Initiate movement by pushing hips back and bending knees.",
      "Descend until thighs are at least parallel to the floor.",
      "Push through heels to return to standing."
    ],
    "formCues": [
      "Keep knees tracking toes",
      "Maintain neutral spine",
      "Weight on midfoot/heels",
      "Chest up"
    ],
    "commonMistakes": [
      "Letting knees collapse inward",
      "Rounding lower back",
      "Not reaching parallel depth"
    ],
    "breathing": "Inhale as you lower down, exhale as you stand up."
  },
  "stability-ball-leg-curl": {
    "exerciseId": "stability-ball-leg-curl",
    "name": "Stability Ball Leg Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/leg-curl-on-stability-ball.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/leg-curl-on-stability-ball.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/leg-curl-on-stability-ball.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/leg-curl-on-stability-ball.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/leg-curl-on-stability-ball.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0353",
    "matchedExternalName": "Stability Ball Leg Curl",
    "confidence": "exact",
    "steps": [
      "Lie face up on the floor, arms at your sides, heels on a stability ball.",
      "Lift hips to form a straight line from shoulders to heels.",
      "Bend knees to roll the ball toward your glutes.",
      "Pause and squeeze your hamstrings.",
      "Extend your legs to roll the ball back out."
    ],
    "formCues": [
      "Hips up",
      "Control movement",
      "Don’t let hips sag",
      "Engage core"
    ],
    "commonMistakes": [
      "Letting hips drop",
      "Rapid reps",
      "Not extending legs fully"
    ],
    "breathing": "Exhale as you curl in, inhale as you extend out."
  },
  "stability-ball-leg-elevated-crunch": {
    "exerciseId": "stability-ball-leg-elevated-crunch",
    "name": "Stability Ball Leg Elevated Crunch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/crunch-legs-on-stability-ball.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/crunch-legs-on-stability-ball.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/crunch-legs-on-stability-ball.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/crunch-legs-on-stability-ball.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/crunch-legs-on-stability-ball.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0271",
    "matchedExternalName": "Stability Ball Leg Elevated Crunch",
    "confidence": "exact",
    "steps": [
      "Place stability ball in front of you and sit down.",
      "Lie back and position your calves and feet on top of the ball with knees bent.",
      "Place your hands lightly behind your head or crossed on your chest.",
      "Engage your core and curl your upper body toward your knees.",
      "Pause briefly at the top, then lower back down without losing control."
    ],
    "formCues": [
      "Keep lower back pressed to floor",
      "Do not pull with your neck",
      "Control the movement",
      "Exhale on lift"
    ],
    "commonMistakes": [
      "Using momentum instead of muscle",
      "Straining the neck",
      "Letting the ball roll away",
      "Arching the lower back"
    ],
    "breathing": "Exhale as you crunch up, inhale as you lower down."
  },
  "stairs-calf-stretch": {
    "exerciseId": "stairs-calf-stretch",
    "name": "Stairs Calf Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-stairs-calf-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-stairs-calf-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-stairs-calf-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-stairs-calf-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-stairs-calf-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-stairs-calf-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-stairs-calf-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-stairs-calf-stretch",
    "matchedExternalName": "Stairs Calf Stretch",
    "confidence": "exact",
    "steps": [
      "Stand with the balls of your feet on a step or stair.",
      "Support yourself with a railing, wall, or sturdy object.",
      "Lower your heels slowly below the step to feel a stretch in your calves.",
      "Hold the stretch for 15-30 seconds.",
      "Raise heels back up and repeat as desired."
    ],
    "formCues": [
      "Keep knees straight but not locked",
      "Lower heels gradually",
      "Engage core for balance",
      "Avoid bouncing"
    ],
    "commonMistakes": [
      "Letting heels drop too fast",
      "Rounding your back",
      "Bouncing during stretch"
    ],
    "breathing": "Exhale as you lower into the stretch, inhale as you return."
  },
  "standing-adductor-stretch": {
    "exerciseId": "standing-adductor-stretch",
    "name": "Standing Adductor Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-adductor-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-adductor-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-adductor-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-adductor-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-adductor-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-adductor-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-adductor-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-adductor-stretch",
    "matchedExternalName": "Standing Adductor Stretch",
    "confidence": "exact",
    "steps": [
      "Stand wide with feet apart.",
      "Shift weight to one leg, bending at the knee.",
      "Keep the opposite leg straight and toes forward.",
      "Lean gently toward the bent knee for a deep inner thigh stretch.",
      "Hold, then switch to the other side."
    ],
    "formCues": [
      "Keep both heels on floor",
      "Maintain upright torso",
      "Do not bounce",
      "Stretch slowly"
    ],
    "commonMistakes": [
      "Letting the heel lift",
      "Twisting hips",
      "Bending forward at the waist"
    ],
    "breathing": "Breathe deeply and steadily while holding the stretch."
  },
  "standing-back-rotation-stretch": {
    "exerciseId": "standing-back-rotation-stretch",
    "name": "Standing Back Rotation Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-standing-back-rotation-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-standing-back-rotation-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-standing-back-rotation-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-standing-back-rotation-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-standing-back-rotation-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-standing-back-rotation-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-standing-back-rotation-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-standing-back-rotation-stretch",
    "matchedExternalName": "Standing Back Rotation Stretch",
    "confidence": "exact",
    "steps": [
      "Stand tall with feet shoulder-width apart.",
      "Extend arms at shoulder height or place hands on hips.",
      "Rotate torso gently to one side without moving hips.",
      "Hold stretch for desired time.",
      "Return to center and repeat on other side."
    ],
    "formCues": [
      "Keep hips facing forward",
      "Rotate gently",
      "Elongate spine",
      "Don’t force stretch"
    ],
    "commonMistakes": [
      "Over-rotating",
      "Letting hips twist",
      "Holding breath"
    ],
    "breathing": "Exhale as you twist, inhale as you return to center."
  },
  "standing-bench-calf-stretch": {
    "exerciseId": "standing-bench-calf-stretch",
    "name": "Standing Bench Calf Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-standing-bench-calf-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-standing-bench-calf-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-standing-bench-calf-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-standing-bench-calf-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-standing-bench-calf-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-standing-bench-calf-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-standing-bench-calf-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-standing-bench-calf-stretch",
    "matchedExternalName": "Standing Bench Calf Stretch",
    "confidence": "exact",
    "steps": [
      "Stand in front of a bench or sturdy surface.",
      "Place the ball of one foot onto the edge, keeping heel on the floor.",
      "Lean your body forward while keeping your knee straight.",
      "Hold the stretch for 15-30 seconds.",
      "Switch legs and repeat."
    ],
    "formCues": [
      "Keep knee straight",
      "Lean from the hips",
      "Maintain upright posture",
      "Feel stretch in calf, not ankle"
    ],
    "commonMistakes": [
      "Bending the knee too much",
      "Letting the foot roll inward or outward",
      "Forcing the stretch"
    ],
    "breathing": "Exhale as you relax into the stretch, inhale as you ease off."
  },
  "standing-hamstring-stretch": {
    "exerciseId": "standing-hamstring-stretch",
    "name": "Standing Hamstring Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-hamstring-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-hamstring-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-hamstring-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-hamstring-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-hamstring-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-hamstring-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-hamstring-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1511",
    "matchedExternalName": "Standing Hamstring Stretch",
    "confidence": "exact",
    "steps": [
      "Stand up straight with feet hip-width apart.",
      "Keep knees soft, and hinge forward at the hips.",
      "Lower your torso toward your legs while reaching for your toes.",
      "Stop when you feel a gentle stretch in your hamstrings.",
      "Hold for the desired duration, then return to standing."
    ],
    "formCues": [
      "Keep back straight",
      "Hinge from hips",
      "Avoid locking knees",
      "Don't bounce"
    ],
    "commonMistakes": [
      "Rounding the back",
      "Locking out the knees",
      "Forcing the stretch"
    ],
    "breathing": "Exhale as you hinge forward, inhale as you return upright."
  },
  "standing-hip-flexor-and-abdominal-stretch": {
    "exerciseId": "standing-hip-flexor-and-abdominal-stretch",
    "name": "Standing Hip Flexor and Abdominal Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-ceiling-look-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-ceiling-look-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-ceiling-look-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-ceiling-look-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-ceiling-look-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-ceiling-look-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-ceiling-look-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-ceiling-look-stretch",
    "matchedExternalName": "Standing Hip Flexor and Abdominal Stretch",
    "confidence": "exact",
    "steps": [
      "Stand upright with feet shoulder-width apart.",
      "Lift arms overhead, palms facing forward.",
      "Arch back gently, lifting chest and looking upward.",
      "Shift hips forward slightly to increase hip flexor stretch.",
      "Hold and breathe for desired duration."
    ],
    "formCues": [
      "Engage glutes",
      "Stretch upwards before leaning back",
      "Don’t force neck back",
      "Keep knees soft"
    ],
    "commonMistakes": [
      "Overarching lower back",
      "Locking knees",
      "Failing to engage core"
    ],
    "breathing": "Inhale before arching; exhale as you hold the stretch."
  },
  "standing-knee-raise-stretch": {
    "exerciseId": "standing-knee-raise-stretch",
    "name": "Standing Knee Raise Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-knee-raise.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-knee-raise.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-knee-raise.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-knee-raise.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-knee-raise.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-knee-raise.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-knee-raise.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0484",
    "matchedExternalName": "Standing Knee Raise Stretch",
    "confidence": "exact",
    "steps": [
      "Stand tall with feet together.",
      "Lift one knee toward your chest.",
      "Grasp your knee with both hands.",
      "Pull the knee gently toward your chest, feeling the stretch.",
      "Hold, then lower and repeat on the opposite leg."
    ],
    "formCues": [
      "Keep torso upright",
      "Engage core",
      "Use arms to pull knee gently",
      "Do not lean back"
    ],
    "commonMistakes": [
      "Rounding shoulders",
      "Pulling too forcefully",
      "Losing balance"
    ],
    "breathing": "Exhale as you pull the knee up, inhale as you release."
  },
  "standing-lateral-stretch": {
    "exerciseId": "standing-lateral-stretch",
    "name": "Standing Lateral Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-standing-lateral-stretch-1.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-standing-lateral-stretch-1.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-standing-lateral-stretch-1.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-standing-lateral-stretch-1.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-standing-lateral-stretch-1.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0794",
    "matchedExternalName": "Standing Lateral Stretch",
    "confidence": "exact",
    "steps": [
      "Stand upright, feet hip-width apart.",
      "Raise one arm overhead, keeping it straight.",
      "Place other hand on hip or let it hang at side.",
      "Gently lean to the opposite side, keeping hips square.",
      "Hold, then return to center and repeat on the other side."
    ],
    "formCues": [
      "Reach tall, then over",
      "Keep both feet grounded",
      "Hips facing forward",
      "Breathe into stretch"
    ],
    "commonMistakes": [
      "Rotating torso",
      "Bending forward or backwards",
      "Not keeping arm straight"
    ],
    "breathing": "Inhale to lengthen, exhale as you lean into the stretch."
  },
  "standing-quadriceps-stretch": {
    "exerciseId": "standing-quadriceps-stretch",
    "name": "Standing Quadriceps Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-quadriceps-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-quadriceps-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-quadriceps-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-quadriceps-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-quadriceps-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-quadriceps-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-quadriceps-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-quadriceps-stretch",
    "matchedExternalName": "Standing Quadriceps Stretch",
    "confidence": "exact",
    "steps": [
      "Stand upright, balancing on one foot.",
      "Bend the opposite knee, reaching back for the foot.",
      "Pull heel gently towards glute while keeping knees together.",
      "Keep torso tall and hips level.",
      "Hold the stretch, then switch legs."
    ],
    "formCues": [
      "Knees side by side",
      "Torso tall",
      "Engage core",
      "Breathe steadily"
    ],
    "commonMistakes": [
      "Knees apart",
      "Leaning forward",
      "Pulling foot too aggressively"
    ],
    "breathing": "Exhale as you pull heel in, inhale as you release."
  },
  "standing-reach-up-back-rotation-stretch": {
    "exerciseId": "standing-reach-up-back-rotation-stretch",
    "name": "Standing Reach Up Back Rotation Stretch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-standing-reach-up-back-rotation-stretch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-standing-reach-up-back-rotation-stretch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-standing-reach-up-back-rotation-stretch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-standing-reach-up-back-rotation-stretch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-standing-reach-up-back-rotation-stretch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-standing-reach-up-back-rotation-stretch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-standing-reach-up-back-rotation-stretch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-standing-reach-up-back-rotation-stretch",
    "matchedExternalName": "Standing Reach Up Back Rotation Stretch",
    "confidence": "exact",
    "steps": [
      "Stand tall with feet shoulder-width apart.",
      "Raise both arms overhead.",
      "Gently arch your upper back and chest.",
      "Rotate your torso to one side while maintaining the stretch.",
      "Return to center, then rotate to the other side."
    ],
    "formCues": [
      "Keep core engaged",
      "Avoid hyperextending lower back",
      "Reach up and out",
      "Move smoothly"
    ],
    "commonMistakes": [
      "Overarching the lower back",
      "Not fully extending arms",
      "Twisting too abruptly"
    ],
    "breathing": "Inhale before reaching up; exhale as you rotate and stretch."
  },
  "standing-side-bend-stretch-bent-arm": {
    "exerciseId": "standing-side-bend-stretch-bent-arm",
    "name": "Standing Side Bend Stretch (Bent Arm)",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-standing-side-bend-bent-arm.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-standing-side-bend-bent-arm.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-standing-side-bend-bent-arm.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-standing-side-bend-bent-arm.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-standing-side-bend-bent-arm.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-standing-side-bend-bent-arm.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-standing-side-bend-bent-arm.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-stretching-standing-side-bend-bent-arm",
    "matchedExternalName": "Standing Side Bend Stretch (Bent Arm)",
    "confidence": "exact",
    "steps": [
      "Stand with feet shoulder-width apart.",
      "Raise one arm overhead, bending the elbow comfortably.",
      "Lean sideways away from the raised arm to stretch the side of your torso.",
      "Hold the stretch for 15-30 seconds.",
      "Switch sides and repeat."
    ],
    "formCues": [
      "Keep hips square",
      "Bend without twisting",
      "Stretch through the side",
      "Breathe steadily"
    ],
    "commonMistakes": [
      "Rotating the torso",
      "Overextending",
      "Holding breath"
    ],
    "breathing": "Breathe deeply throughout the stretch."
  },
  "standing-wheel-rollout": {
    "exerciseId": "standing-wheel-rollout",
    "name": "Standing Wheel Rollout",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-standing-wheel-rollout.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-standing-wheel-rollout.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-standing-wheel-rollout.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-standing-wheel-rollout.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-standing-wheel-rollout.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-standing-wheel-rollout.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-standing-wheel-rollout.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0796",
    "matchedExternalName": "Standing Wheel Rollout",
    "confidence": "exact",
    "steps": [
      "Stand with feet shoulder-width apart and hold the ab wheel.",
      "Bend forward and place the wheel on the floor in front of your feet.",
      "Roll the wheel forward, extending your arms and torso while keeping your core tight.",
      "Lower your body until you're just above the floor, maintaining a straight line from head to heels.",
      "Reverse the motion by pulling the wheel back toward your feet, returning to the start."
    ],
    "formCues": [
      "Engage core strongly",
      "Do not let hips sag",
      "Keep arms straight",
      "Move slowly and with control"
    ],
    "commonMistakes": [
      "Letting lower back arch excessively",
      "Collapsing hips",
      "Bending elbows during rollout"
    ],
    "breathing": "Inhale as you roll out, exhale as you pull back in."
  },
  "stationary-bike": {
    "exerciseId": "stationary-bike",
    "name": "Stationary Bike",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stationary-bike.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stationary-bike.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stationary-bike.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stationary-bike.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stationary-bike.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stationary-bike.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stationary-bike.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "2138",
    "matchedExternalName": "Stationary Bike",
    "confidence": "exact",
    "steps": [
      "Set seat and handlebar to appropriate heights.",
      "Sit upright and grip the handlebars lightly.",
      "Place feet securely on the pedals.",
      "Begin pedaling at a comfortable resistance and pace.",
      "Continue for your intended duration, maintaining good form."
    ],
    "formCues": [
      "Keep back straight",
      "Drive through full pedal stroke",
      "Relax shoulders",
      "Maintain steady breathing"
    ],
    "commonMistakes": [
      "Slouching forward",
      "Bouncing in the seat",
      "Pedaling with toes only",
      "Setting seat too low/high"
    ],
    "breathing": "Breathe evenly and deeply throughout the session."
  },
  "straight-leg-up-crunch": {
    "exerciseId": "straight-leg-up-crunch",
    "name": "Straight-Leg Up Crunch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/crunch-straight-leg-up.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/crunch-straight-leg-up.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/crunch-straight-leg-up.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/crunch-straight-leg-up.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/crunch-straight-leg-up.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-crunch-straight-leg-up",
    "matchedExternalName": "Straight-Leg Up Crunch",
    "confidence": "exact",
    "steps": [
      "Lie on back, legs straight up, feet flexed.",
      "Place arms beside you or hands behind head.",
      "Engage core, lift head and shoulders toward legs.",
      "Pause at top, exhale.",
      "Lower down with control."
    ],
    "formCues": [
      "Chin tucked",
      "Reach toward ceiling",
      "Don't strain neck",
      "Slow movement"
    ],
    "commonMistakes": [
      "Jerking up",
      "Using momentum",
      "Flaring elbows"
    ],
    "breathing": "Exhale as you crunch up, inhale as you lower down."
  },
  "supine-dumbbell-biceps-curl": {
    "exerciseId": "supine-dumbbell-biceps-curl",
    "name": "Supine Dumbbell Biceps Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lying-supine-dumbbell-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lying-supine-dumbbell-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lying-supine-dumbbell-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/lying-supine-dumbbell-curl.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/lying-supine-dumbbell-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/lying-supine-dumbbell-curl.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/lying-supine-dumbbell-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0350",
    "matchedExternalName": "Supine Dumbbell Biceps Curl",
    "confidence": "exact",
    "steps": [
      "Lie flat on your back holding dumbbells at your sides, arms fully extended.",
      "Keep palms facing forward (supinated grip).",
      "Curl the dumbbells up toward your shoulders, elbows stationary.",
      "Squeeze your biceps at the top.",
      "Lower the weights slowly to the start position."
    ],
    "formCues": [
      "Upper arms still",
      "Don’t arch back",
      "Full stretch at bottom",
      "Slow negative"
    ],
    "commonMistakes": [
      "Lifting shoulders off bench",
      "Swinging arms",
      "Partial range"
    ],
    "breathing": "Exhale as you curl up, inhale as you lower down."
  },
  "treadmill-running": {
    "exerciseId": "treadmill-running",
    "name": "Treadmill Running",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/treadmill-running.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/treadmill-running.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/treadmill-running.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/treadmill-running.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/treadmill-running.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/treadmill-running.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/treadmill-running.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-treadmill-running",
    "matchedExternalName": "Treadmill Running",
    "confidence": "exact",
    "steps": [
      "Step onto the treadmill and position feet on the sides.",
      "Select preferred speed and incline.",
      "Begin running, holding onto the handrails if necessary for balance.",
      "Focus on smooth strides and upright posture.",
      "Cool down by gradually reducing speed before stopping."
    ],
    "formCues": [
      "Keep posture upright",
      "Land softly",
      "Don't overstride",
      "Use arm swing for balance"
    ],
    "commonMistakes": [
      "Holding handrails too long",
      "Slouching",
      "Overstriding",
      "Staring down"
    ],
    "breathing": "Inhale through nose, exhale through mouth in rhythm with strides."
  },
  "triceps-dips": {
    "exerciseId": "triceps-dips",
    "name": "Triceps Dips",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/triceps-dips.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/triceps-dips.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/triceps-dips.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/triceps-dips.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/triceps-dips.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/triceps-dips.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/triceps-dips.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-triceps-dips",
    "matchedExternalName": "Triceps Dips",
    "confidence": "exact",
    "steps": [
      "Sit on a bench or chair with hands gripping the edge.",
      "Extend legs forward and slide hips off the seat.",
      "Lower body by bending elbows to 90 degrees.",
      "Press through palms to straighten arms and lift body.",
      "Repeat for reps."
    ],
    "formCues": [
      "Keep elbows close to your body",
      "Lower slowly",
      "Press through your palms",
      "Avoid shrugging shoulders"
    ],
    "commonMistakes": [
      "Letting shoulders roll forward",
      "Dropping hips too low",
      "Elbows flaring out"
    ],
    "breathing": "Inhale as you lower down, exhale as you push up."
  },
  "twisting-crunch": {
    "exerciseId": "twisting-crunch",
    "name": "Twisting Crunch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/twisting-crunch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/twisting-crunch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/twisting-crunch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/twisting-crunch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/twisting-crunch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/twisting-crunch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/twisting-crunch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0985",
    "matchedExternalName": "Twisting Crunch",
    "confidence": "exact",
    "steps": [
      "Lie on your back with knees bent and feet flat.",
      "Place hands lightly behind your head.",
      "Crunch up, twisting your torso to bring one shoulder toward the opposite knee.",
      "Return to start and repeat to the other side.",
      "Alternate sides for each repetition."
    ],
    "formCues": [
      "Twist from the torso",
      "Elbow toward knee",
      "Avoid pulling neck",
      "Keep lower back down"
    ],
    "commonMistakes": [
      "Pulling on the head/neck",
      "Not rotating enough",
      "Lifting lower back"
    ],
    "breathing": "Exhale as you crunch and twist, inhale as you return."
  },
  "v-up": {
    "exerciseId": "v-up",
    "name": "V-Up",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/v-up.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/v-up.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/v-up.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/v-up.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/v-up.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/v-up.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/v-up.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-v-up",
    "matchedExternalName": "V-Up",
    "confidence": "exact",
    "steps": [
      "Lie on your back with arms extended overhead and legs straight.",
      "Engage your core to lift your legs and torso simultaneously.",
      "Reach your hands toward your feet at the top, forming a 'V' shape.",
      "Pause briefly, squeezing your abs.",
      "Lower down slowly to starting position."
    ],
    "formCues": [
      "Lift with abs",
      "Keep legs straight",
      "Reach toward toes",
      "Control the descent"
    ],
    "commonMistakes": [
      "Swinging legs",
      "Arching lower back",
      "Not fully engaging abs"
    ],
    "breathing": "Exhale when lifting up, inhale as you lower down."
  },
  "vertical-leg-raise-on-parallel-bars": {
    "exerciseId": "vertical-leg-raise-on-parallel-bars",
    "name": "Vertical Leg Raise (on parallel bars)",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/vertical-leg-raise-on-parallel-bars.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/vertical-leg-raise-on-parallel-bars.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/vertical-leg-raise-on-parallel-bars.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/vertical-leg-raise-on-parallel-bars.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/vertical-leg-raise-on-parallel-bars.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/vertical-leg-raise-on-parallel-bars.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/vertical-leg-raise-on-parallel-bars.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0826",
    "matchedExternalName": "Vertical Leg Raise (on parallel bars)",
    "confidence": "exact",
    "steps": [
      "Support yourself on the parallel bars with straight arms and your legs hanging together.",
      "Pull your shoulders down and brace your midsection to stop your body from swinging.",
      "Keep your knees straight and lift your legs forward in front of you.",
      "Raise your legs until they reach hip height or slightly higher.",
      "Pause briefly at the top without leaning back.",
      "Lower your legs with control to the start and reset before the next repetition."
    ],
    "formCues": [
      "Keep legs straight",
      "Brace and stop the swing",
      "Lift with control",
      "Shoulders down"
    ],
    "commonMistakes": [
      "Swinging the torso to start each rep",
      "Bending the knees as the legs rise",
      "Shrugging the shoulders up toward the ears",
      "Dropping the legs quickly on the way down"
    ],
    "breathing": "Exhale as you lift your legs, then inhale as you lower them back to the start."
  },
  "walk-wave-machine": {
    "exerciseId": "walk-wave-machine",
    "name": "Walk Wave Machine",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/walk-wave-machine.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/walk-wave-machine.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/walk-wave-machine.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/walk-wave-machine.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/walk-wave-machine.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/walk-wave-machine.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/walk-wave-machine.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-walk-wave-machine",
    "matchedExternalName": "Walk Wave Machine",
    "confidence": "exact",
    "steps": [
      "Step onto the machine and position feet on pedals.",
      "Grip handles for stability.",
      "Initiate movement by pushing one leg outward while the other follows.",
      "Maintain a rhythmic, lateral gliding motion.",
      "Continue for the desired time or intensity."
    ],
    "formCues": [
      "Maintain upright posture",
      "Engage glutes",
      "Move laterally",
      "Use smooth, controlled motion"
    ],
    "commonMistakes": [
      "Leaning forward",
      "Letting knees cave in",
      "Jerky movements"
    ],
    "breathing": "Keep breath steady and controlled throughout."
  },
  "weighted-leg-extension-crunch": {
    "exerciseId": "weighted-leg-extension-crunch",
    "name": "Weighted Leg Extension Crunch",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/weighted-leg-extension-crunch.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/weighted-leg-extension-crunch.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/weighted-leg-extension-crunch.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/weighted-leg-extension-crunch.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/weighted-leg-extension-crunch.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/weighted-leg-extension-crunch.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/weighted-leg-extension-crunch.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0832",
    "matchedExternalName": "Weighted Leg Extension Crunch",
    "confidence": "exact",
    "steps": [
      "Lie flat on your back with knees bent, holding a weight across your chest.",
      "Lift your legs to tabletop position (knees over hips, 90-degree bend).",
      "Simultaneously extend your legs outward and crunch your upper body up.",
      "Pause briefly at peak contraction.",
      "Return arms and legs to the starting position."
    ],
    "formCues": [
      "Keep core braced",
      "Don't arch lower back",
      "Control leg extension",
      "Crunch chest up"
    ],
    "commonMistakes": [
      "Using momentum",
      "Letting lower back arch",
      "Holding breath"
    ],
    "breathing": "Exhale as you crunch and extend, inhale as you return."
  },
  "weighted-lying-twist": {
    "exerciseId": "weighted-lying-twist",
    "name": "Weighted Lying Twist",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/weighted-lying-twist.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/weighted-lying-twist.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/weighted-lying-twist.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/weighted-lying-twist.mp4",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/weighted-lying-twist.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0846",
    "matchedExternalName": "Weighted Lying Twist",
    "confidence": "exact",
    "steps": [
      "Lie on your back with arms outstretched for support.",
      "Hold a weight between your feet (or over chest).",
      "Lift your legs up to a 90-degree angle.",
      "Slowly rotate your legs to one side, keeping shoulders down.",
      "Return to center and repeat on the other side."
    ],
    "formCues": [
      "Keep shoulders grounded",
      "Move slowly and controlled",
      "Engage obliques",
      "Don’t swing legs"
    ],
    "commonMistakes": [
      "Letting shoulders lift",
      "Using momentum",
      "Dropping legs too low"
    ],
    "breathing": "Exhale as you twist, inhale as you return to center."
  },
  "weighted-sissy-squat": {
    "exerciseId": "weighted-sissy-squat",
    "name": "Weighted Sissy Squat",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/weighted-sissy-squat.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/weighted-sissy-squat.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/weighted-sissy-squat.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/weighted-sissy-squat.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/weighted-sissy-squat.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/weighted-sissy-squat.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/weighted-sissy-squat.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0851",
    "matchedExternalName": "Weighted Sissy Squat",
    "confidence": "exact",
    "steps": [
      "Stand tall with your feet about hip-width apart and hold the weight securely in front of your chest or across your upper back.",
      "Rise onto the balls of your feet and brace your midsection.",
      "Lean your torso back in one straight line from knees to shoulders as your knees travel forward.",
      "Lower under control by bending your knees until you feel a strong stretch through the front of your thighs.",
      "Drive through the balls of your feet and straighten your knees to return to the start.",
      "Finish tall and reset your balance before the next repetition."
    ],
    "formCues": [
      "Lean back as one piece",
      "Keep hips extended",
      "Drive knees forward",
      "Stay on your toes"
    ],
    "commonMistakes": [
      "Bending forward at the hips during the descent",
      "Dropping the heels and shifting weight backward",
      "Letting the knees cave inward",
      "Lowering too fast and bouncing out of the bottom"
    ],
    "breathing": "Inhale as you lower under control, then exhale as you drive back up to the starting position."
  },
  "weighted-standing-curl": {
    "exerciseId": "weighted-standing-curl",
    "name": "Weighted Standing Curl",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/weighted-standing-curl.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/weighted-standing-curl.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/weighted-standing-curl.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/weighted-standing-curl.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/weighted-standing-curl.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "0853",
    "matchedExternalName": "Weighted Standing Curl",
    "confidence": "exact",
    "steps": [
      "Stand tall with a weight in each hand at your sides and turn your palms forward.",
      "Set your feet about hip-width apart and keep your elbows pinned near your ribs.",
      "Curl the weights upward by bending your elbows until your hands reach shoulder height.",
      "Pause briefly at the top without letting your elbows drift forward.",
      "Lower the weights back down with control until your arms are fully straightened at your sides."
    ],
    "formCues": [
      "Elbows stay by your sides",
      "Curl, don't swing",
      "Palms face forward",
      "Lower with control"
    ],
    "commonMistakes": [
      "Swinging the torso to lift the weights",
      "Letting the elbows drift forward at the top",
      "Dropping the weights quickly on the way down",
      "Bending the wrists back instead of keeping them neutral"
    ],
    "breathing": "Exhale as you curl the weights up, and inhale as you lower them back down under control."
  },
  "wide-grip-cable-lat-pulldown": {
    "exerciseId": "wide-grip-cable-lat-pulldown",
    "name": "Wide Grip Cable Lat Pulldown",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-bar-lateral-pulldown-wide-shoulder-grip.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-bar-lateral-pulldown-wide-shoulder-grip.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-bar-lateral-pulldown-wide-shoulder-grip.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/cable-bar-lateral-pulldown-wide-shoulder-grip.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/cable-bar-lateral-pulldown-wide-shoulder-grip.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/cable-bar-lateral-pulldown-wide-shoulder-grip.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/cable-bar-lateral-pulldown-wide-shoulder-grip.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "drv-cable-bar-lateral-pulldown-wide-shoulder-grip",
    "matchedExternalName": "Wide Grip Cable Lat Pulldown",
    "confidence": "exact",
    "steps": [
      "Adjust the thigh pad and sit at the cable pulldown machine.",
      "Grip the wide bar overhead with a pronated (overhand) grip, hands wider than shoulders.",
      "Lean back slightly, brace your core, and retract your shoulder blades.",
      "Pull the bar down to your upper chest, driving elbows down and out.",
      "Pause briefly, then slowly release the bar back to the starting position."
    ],
    "formCues": [
      "Pull elbows down",
      "Keep chest up",
      "Don't swing",
      "Control the weight"
    ],
    "commonMistakes": [
      "Using momentum or body swing",
      "Allowing shoulders to shrug up",
      "Not fully extending arms",
      "Pulling bar behind neck"
    ],
    "breathing": "Exhale as you pull the bar down, inhale as you return to start."
  },
  "wrist-circles": {
    "exerciseId": "wrist-circles",
    "name": "Wrist Circles",
    "imageUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-wrist-circles.jpg",
    "thumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-wrist-circles.jpg",
    "videoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-wrist-circles.mp4",
    "maleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/male/stretching-wrist-circles.mp4",
    "femaleVideoUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-videos/female/stretching-wrist-circles.mp4",
    "maleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/male/stretching-wrist-circles.jpg",
    "femaleThumbnailUrl": "https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev/exercise-posters/female/stretching-wrist-circles.jpg",
    "mediaSource": "Free Exercise DB API (luisaraujoc)",
    "mediaAttribution": "Free Exercise DB with Videos (MIT License) - Hosted on Cloudflare R2",
    "mediaVerified": true,
    "matchedExternalId": "1428",
    "matchedExternalName": "Wrist Circles",
    "confidence": "exact",
    "steps": [
      "Extend arms out in front or to sides.",
      "Make fists or keep hands open.",
      "Slowly rotate wrists in circular motions.",
      "Perform several circles in one direction.",
      "Switch direction and repeat."
    ],
    "formCues": [
      "Move slowly",
      "Full range of motion",
      "Stay relaxed",
      "Breathe steadily"
    ],
    "commonMistakes": [
      "Moving arms instead of wrists",
      "Rushing motions",
      "Holding breath"
    ],
    "breathing": "Breathe evenly throughout the movement."
  }
}

/**
 * Returns verified media for any exercise ID, with graceful fallback for custom
 * exercises or unverified movements.
 */
export function getExerciseMedia(
  exerciseId: string,
  fallbackName?: string,
): ExerciseMedia {
  const existing = EXERCISE_MEDIA_MANIFEST[exerciseId]
  if (existing) {
    return existing
  }

  const name = fallbackName || exerciseId
  return {
    exerciseId,
    name,
    mediaSource: 'Custom / Unverified',
    mediaAttribution: 'User Custom Exercise',
    mediaVerified: false,
    confidence: 'fallback',
    steps: ['Maintain steady tempo', 'Keep core braced through full range of motion'],
    formCues: ['Focus on mind-muscle connection', 'Control the eccentric phase'],
    commonMistakes: ['Using excessive momentum', 'Incomplete range of motion'],
    breathing: 'Inhale during setup, exhale on exertion.',
  }
}
