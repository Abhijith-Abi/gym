import type { ExerciseMedia } from '@/types'

/**
 * Verified Exercise Media Manifest (Free Exercise DB API Integration).
 *
 * Source: https://github.com/luisaraujoc/free-exercise-db-api
 * License: MIT License (Copyright (c) 2026 Arham Wani)
 * Media Storage: Cloudflare R2 (https://pub-585d42eb1aa64a67aedf483ec328d3fe.r2.dev)
 *
 * Keyed strictly by ForgeFit canonical exercise IDs (SEED_EXERCISES).
 * Preserves user workout history, plan entries, and database keys.
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
    "mediaSource": "ForgeFit Seed Library (Local Fallback)",
    "mediaAttribution": "ForgeFit Form & Biomechanics Engine",
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
      "Rushing through reps",
      "Losing core brace"
    ],
    "breathing": "Breathe rhythmically with movement cadence."
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
    "mediaSource": "ForgeFit Seed Library (Local Fallback)",
    "mediaAttribution": "ForgeFit Form & Biomechanics Engine",
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
      "Rushing through reps",
      "Losing core brace"
    ],
    "breathing": "Breathe rhythmically with movement cadence."
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
    "mediaSource": "ForgeFit Seed Library (Local Fallback)",
    "mediaAttribution": "ForgeFit Form & Biomechanics Engine",
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
      "Rushing through reps",
      "Losing core brace"
    ],
    "breathing": "Breathe rhythmically with movement cadence."
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

  // Graceful fallback for custom exercises or runtime additions
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
