import type { Exercise } from '@/types'

/**
 * Seed exercise library (FR-4, FR-20). Every id referenced by the MON–SUN split
 * in src/data/workoutPlan.ts resolves to an entry here.
 * Expanded with verified movements from Free Exercise DB API.
 */
export const SEED_EXERCISES: Exercise[] = [
  {
    "id": "flat-barbell-bench",
    "name": "Flat Barbell Bench Press",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "triceps",
      "shoulders"
    ],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Lie flat and set your grip just outside shoulder width.",
      "Lower the bar under control to mid-chest.",
      "Press back up to full lockout without flaring the elbows."
    ],
    "tips": [
      "Keep shoulder blades retracted.",
      "Drive through your feet."
    ],
    "alternatives": [
      "incline-db-press"
    ],
    "isCustom": false
  },
  {
    "id": "incline-db-press",
    "name": "Incline Dumbbell Press",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Set the bench to about 30 degrees.",
      "Press the dumbbells up and slightly together.",
      "Lower until you feel a stretch across the upper chest."
    ],
    "tips": [
      "Keep wrists stacked over elbows."
    ],
    "alternatives": [
      "flat-barbell-bench"
    ],
    "isCustom": false
  },
  {
    "id": "cable-flyes",
    "name": "Cable Flyes",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders"
    ],
    "equipment": "cable",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Set the pulleys to chest height.",
      "With a slight elbow bend, bring the handles together in front of you.",
      "Return slowly to a stretched position."
    ],
    "tips": [
      "Lead with the elbows, not the hands."
    ],
    "alternatives": [
      "incline-db-press"
    ],
    "isCustom": false
  },
  {
    "id": "dips",
    "name": "Dips",
    "primaryMuscles": [
      "chest",
      "triceps"
    ],
    "secondaryMuscles": [
      "shoulders"
    ],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Support yourself on parallel bars.",
      "Lower until your upper arms are about parallel to the floor.",
      "Press back up to lockout."
    ],
    "tips": [
      "Lean forward slightly to bias the chest."
    ],
    "alternatives": [
      "tricep-dips"
    ],
    "isCustom": false
  },
  {
    "id": "tricep-rope-pushdowns",
    "name": "Tricep Rope Pushdowns",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Grip the rope at a high pulley.",
      "Extend the elbows fully, spreading the rope at the bottom.",
      "Return under control."
    ],
    "tips": [
      "Keep the elbows pinned to your sides."
    ],
    "alternatives": [
      "skull-crushers"
    ],
    "isCustom": false
  },
  {
    "id": "skull-crushers",
    "name": "Skull Crushers",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Lie flat holding the bar over your forehead.",
      "Bend the elbows to lower the bar behind your head.",
      "Extend back to the start."
    ],
    "tips": [
      "Keep the upper arms still."
    ],
    "alternatives": [
      "tricep-rope-pushdowns",
      "overhead-tricep-ext"
    ],
    "isCustom": false
  },
  {
    "id": "deadlift",
    "name": "Deadlift",
    "primaryMuscles": [
      "back",
      "hamstrings",
      "glutes"
    ],
    "secondaryMuscles": [
      "forearms",
      "core"
    ],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "advanced",
    "instructions": [
      "Set up with the bar over mid-foot.",
      "Brace, then drive the floor away keeping the bar close.",
      "Lock out hips and knees together."
    ],
    "tips": [
      "Keep a neutral spine throughout."
    ],
    "alternatives": [
      "romanian-deadlift"
    ],
    "isCustom": false
  },
  {
    "id": "lat-pulldown",
    "name": "Lat Pulldown",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [
      "biceps"
    ],
    "equipment": "cable",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Grip the bar wider than shoulder width.",
      "Pull the bar to your upper chest, driving the elbows down.",
      "Return under control to a full stretch."
    ],
    "tips": [
      "Avoid leaning back excessively."
    ],
    "alternatives": [
      "bent-over-row"
    ],
    "isCustom": false
  },
  {
    "id": "bent-over-row",
    "name": "Bent-Over Barbell Row",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [
      "biceps",
      "core"
    ],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Hinge to about 45 degrees with a neutral spine.",
      "Row the bar to your lower ribs.",
      "Lower under control."
    ],
    "tips": [
      "Keep the bar path close to the body."
    ],
    "alternatives": [
      "seated-cable-row"
    ],
    "isCustom": false
  },
  {
    "id": "seated-cable-row",
    "name": "Seated Cable Row",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [
      "biceps"
    ],
    "equipment": "cable",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Sit tall with a slight knee bend.",
      "Pull the handle to your abdomen, squeezing the shoulder blades.",
      "Extend the arms back under control."
    ],
    "tips": [
      "Keep the torso stable."
    ],
    "alternatives": [
      "bent-over-row"
    ],
    "isCustom": false
  },
  {
    "id": "barbell-curl",
    "name": "Barbell Curl",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ],
    "equipment": "barbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Hold the bar at shoulder width.",
      "Curl without swinging the torso.",
      "Lower under control."
    ],
    "tips": [
      "Keep the elbows fixed at your sides."
    ],
    "alternatives": [
      "hammer-curl",
      "preacher-curl"
    ],
    "isCustom": false
  },
  {
    "id": "hammer-curl",
    "name": "Hammer Curl",
    "primaryMuscles": [
      "biceps",
      "forearms"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Hold the dumbbells with a neutral grip.",
      "Curl keeping the palms facing in.",
      "Lower under control."
    ],
    "tips": [
      "Avoid rotating the wrists."
    ],
    "alternatives": [
      "barbell-curl",
      "incline-db-curl"
    ],
    "isCustom": false
  },
  {
    "id": "back-squat",
    "name": "Back Squat",
    "primaryMuscles": [
      "quads",
      "glutes"
    ],
    "secondaryMuscles": [
      "hamstrings",
      "core"
    ],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "advanced",
    "instructions": [
      "Set the bar on your upper back and brace.",
      "Descend to at least parallel.",
      "Drive up through mid-foot."
    ],
    "tips": [
      "Keep the knees tracking over the toes."
    ],
    "alternatives": [
      "leg-press"
    ],
    "isCustom": false
  },
  {
    "id": "leg-press",
    "name": "Leg Press",
    "primaryMuscles": [
      "quads",
      "glutes"
    ],
    "secondaryMuscles": [
      "hamstrings"
    ],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Place feet shoulder-width on the platform.",
      "Lower until the knees reach about 90 degrees.",
      "Press back without locking out hard."
    ],
    "tips": [
      "Keep the lower back on the pad."
    ],
    "alternatives": [
      "back-squat"
    ],
    "isCustom": false
  },
  {
    "id": "romanian-deadlift",
    "name": "Romanian Deadlift",
    "primaryMuscles": [
      "hamstrings",
      "glutes"
    ],
    "secondaryMuscles": [
      "back"
    ],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Hold the bar at the hips.",
      "Hinge back pushing the hips, keeping a slight knee bend.",
      "Return by driving the hips forward."
    ],
    "tips": [
      "Feel the stretch in the hamstrings, not the lower back."
    ],
    "alternatives": [
      "deadlift"
    ],
    "isCustom": false
  },
  {
    "id": "walking-lunge",
    "name": "Walking Lunge",
    "primaryMuscles": [
      "quads",
      "glutes"
    ],
    "secondaryMuscles": [
      "hamstrings",
      "core"
    ],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Step forward and lower the back knee toward the floor.",
      "Drive through the front heel to stand.",
      "Alternate legs each step."
    ],
    "tips": [
      "Keep the torso upright."
    ],
    "alternatives": [
      "leg-press"
    ],
    "isCustom": false
  },
  {
    "id": "standing-calf-raise",
    "name": "Standing Calf Raise",
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Place the balls of your feet on the platform.",
      "Rise up as high as possible.",
      "Lower into a deep stretch."
    ],
    "tips": [
      "Pause at the top for a full contraction."
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "overhead-press",
    "name": "Overhead Press",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps",
      "core"
    ],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Hold the bar at shoulder height.",
      "Press overhead, moving the head through at lockout.",
      "Lower under control."
    ],
    "tips": [
      "Keep the core braced to avoid overarching."
    ],
    "alternatives": [
      "lateral-raise"
    ],
    "isCustom": false
  },
  {
    "id": "lateral-raise",
    "name": "Lateral Raise",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Hold dumbbells at your sides.",
      "Raise to shoulder height with a slight elbow bend.",
      "Lower under control."
    ],
    "tips": [
      "Lead with the elbows."
    ],
    "alternatives": [
      "overhead-press"
    ],
    "isCustom": false
  },
  {
    "id": "face-pull",
    "name": "Face Pull",
    "primaryMuscles": [
      "shoulders",
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Set a rope at face height.",
      "Pull toward your face, flaring the elbows out.",
      "Return under control."
    ],
    "tips": [
      "Think about pulling the rope apart."
    ],
    "alternatives": [
      "lateral-raise"
    ],
    "isCustom": false
  },
  {
    "id": "hanging-leg-raise",
    "name": "Hanging Leg Raise",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [
      "forearms"
    ],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Hang from a bar.",
      "Raise your legs toward the bar without swinging.",
      "Lower under control."
    ],
    "tips": [
      "Tilt the pelvis to engage the lower abs."
    ],
    "alternatives": [
      "russian-twist"
    ],
    "isCustom": false
  },
  {
    "id": "woodchopper",
    "name": "Cable Woodchopper",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [
      "shoulders"
    ],
    "equipment": "cable",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Set a pulley high.",
      "Rotate and pull the handle diagonally across your body.",
      "Control the return."
    ],
    "tips": [
      "Rotate from the trunk, not just the arms."
    ],
    "alternatives": [
      "russian-twist"
    ],
    "isCustom": false
  },
  {
    "id": "plank",
    "name": "Plank",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [
      "shoulders"
    ],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Support yourself on forearms and toes.",
      "Hold a straight line from head to heels.",
      "Breathe steadily for the duration."
    ],
    "tips": [
      "Squeeze the glutes to protect the lower back."
    ],
    "alternatives": [
      "ab-wheel-rollout"
    ],
    "isCustom": false
  },
  {
    "id": "preacher-curl",
    "name": "Preacher Curl",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ],
    "equipment": "barbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Rest the arms on the preacher pad.",
      "Curl without lifting the elbows off the pad.",
      "Lower under control."
    ],
    "tips": [
      "Avoid fully slamming into extension."
    ],
    "alternatives": [
      "barbell-curl",
      "incline-db-curl"
    ],
    "isCustom": false
  },
  {
    "id": "overhead-tricep-ext",
    "name": "Overhead Tricep Extension",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Hold a dumbbell overhead with both hands.",
      "Lower behind the head by bending the elbows.",
      "Extend back to the top."
    ],
    "tips": [
      "Keep the elbows pointing forward."
    ],
    "alternatives": [
      "skull-crushers",
      "tricep-rope-pushdowns"
    ],
    "isCustom": false
  },
  {
    "id": "incline-db-curl",
    "name": "Incline Dumbbell Curl",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [
      "forearms"
    ],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit back on an incline bench, arms hanging.",
      "Curl the dumbbells keeping the elbows back.",
      "Lower under control for a full stretch."
    ],
    "tips": [
      "The incline increases the stretch on the biceps."
    ],
    "alternatives": [
      "barbell-curl",
      "preacher-curl"
    ],
    "isCustom": false
  },
  {
    "id": "tricep-dips",
    "name": "Tricep Dips",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [
      "chest",
      "shoulders"
    ],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Support yourself on a bench or bars, elbows back.",
      "Lower until the elbows reach about 90 degrees.",
      "Press back to lockout."
    ],
    "tips": [
      "Keep the torso upright to bias the triceps."
    ],
    "alternatives": [
      "dips",
      "tricep-rope-pushdowns"
    ],
    "isCustom": false
  },
  {
    "id": "russian-twist",
    "name": "Russian Twist",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit with knees bent and lean back slightly.",
      "Rotate the torso side to side.",
      "Keep the movement controlled."
    ],
    "tips": [
      "Hold a weight for added resistance."
    ],
    "alternatives": [
      "woodchopper"
    ],
    "isCustom": false
  },
  {
    "id": "ab-wheel-rollout",
    "name": "Ab Wheel Rollout",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [
      "shoulders"
    ],
    "equipment": "other",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Kneel holding the ab wheel.",
      "Roll forward keeping the core braced.",
      "Pull back to the start without sagging the hips."
    ],
    "tips": [
      "Only roll as far as you can control."
    ],
    "alternatives": [
      "plank"
    ],
    "isCustom": false
  },
  {
    "id": "mountain-climbers",
    "name": "Mountain Climbers",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [
      "shoulders",
      "quads"
    ],
    "equipment": "bodyweight",
    "category": "hiit",
    "difficulty": "beginner",
    "instructions": [
      "Start in a push-up position.",
      "Drive the knees toward the chest alternately at pace.",
      "Keep the hips level."
    ],
    "tips": [
      "Maintain a strong plank line."
    ],
    "alternatives": [
      "burpees"
    ],
    "isCustom": false
  },
  {
    "id": "burpees",
    "name": "Burpees",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [
      "chest",
      "quads",
      "core"
    ],
    "equipment": "bodyweight",
    "category": "hiit",
    "difficulty": "intermediate",
    "instructions": [
      "Drop to a squat and kick back to a plank.",
      "Perform a push-up, then jump the feet in.",
      "Explode up into a jump."
    ],
    "tips": [
      "Scale by stepping instead of jumping."
    ],
    "alternatives": [
      "mountain-climbers",
      "jump-squat"
    ],
    "isCustom": false
  },
  {
    "id": "kb-swing",
    "name": "Kettlebell Swing",
    "primaryMuscles": [
      "glutes",
      "hamstrings"
    ],
    "secondaryMuscles": [
      "back",
      "core",
      "shoulders"
    ],
    "equipment": "kettlebell",
    "category": "hiit",
    "difficulty": "intermediate",
    "instructions": [
      "Hinge and hike the kettlebell back.",
      "Snap the hips to drive it to chest height.",
      "Let it swing back and repeat."
    ],
    "tips": [
      "The power comes from the hips, not the arms."
    ],
    "alternatives": [
      "romanian-deadlift"
    ],
    "isCustom": false
  },
  {
    "id": "box-jump",
    "name": "Box Jump",
    "primaryMuscles": [
      "quads",
      "glutes"
    ],
    "secondaryMuscles": [
      "calves",
      "core"
    ],
    "equipment": "other",
    "category": "hiit",
    "difficulty": "intermediate",
    "instructions": [
      "Stand facing a sturdy box.",
      "Load the hips and jump onto the box, landing softly.",
      "Step down and reset."
    ],
    "tips": [
      "Step down to protect the knees."
    ],
    "alternatives": [
      "jump-squat"
    ],
    "isCustom": false
  },
  {
    "id": "jump-squat",
    "name": "Jump Squat",
    "primaryMuscles": [
      "quads",
      "glutes"
    ],
    "secondaryMuscles": [
      "calves",
      "core"
    ],
    "equipment": "bodyweight",
    "category": "hiit",
    "difficulty": "beginner",
    "instructions": [
      "Squat down, then explode up into a jump.",
      "Land softly and absorb into the next rep."
    ],
    "tips": [
      "Land with soft knees."
    ],
    "alternatives": [
      "box-jump"
    ],
    "isCustom": false
  },
  {
    "id": "battle-ropes",
    "name": "Battle Ropes",
    "primaryMuscles": [
      "shoulders",
      "core"
    ],
    "secondaryMuscles": [
      "back",
      "forearms"
    ],
    "equipment": "other",
    "category": "hiit",
    "difficulty": "beginner",
    "instructions": [
      "Hold one rope end in each hand.",
      "Create alternating waves at pace.",
      "Keep a braced athletic stance."
    ],
    "tips": [
      "Stay low and drive from the whole body."
    ],
    "alternatives": [
      "mountain-climbers"
    ],
    "isCustom": false
  },
  {
    "id": "incline-barbell-bench",
    "name": "Incline Barbell Bench Press",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Set bench to 30-45 degrees.",
      "Grip the bar slightly wider than shoulder-width.",
      "Lower bar to upper chest under control.",
      "Press up to full extension."
    ],
    "tips": [
      "Keep shoulder blades retracted and heels planted."
    ],
    "alternatives": [
      "incline-db-press",
      "flat-barbell-bench"
    ],
    "isCustom": false
  },
  {
    "id": "push-ups",
    "name": "Push-Ups",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [
      "triceps",
      "shoulders",
      "core"
    ],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Start in a high plank position with hands under shoulders.",
      "Lower chest until elbows reach 90 degrees.",
      "Press back up explosively keeping core tight."
    ],
    "tips": [
      "Keep body in a straight line without dipping lower back."
    ],
    "alternatives": [
      "flat-barbell-bench",
      "dips"
    ],
    "isCustom": false
  },
  {
    "id": "pull-ups",
    "name": "Pull-Ups",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [
      "biceps",
      "shoulders"
    ],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Hang from bar with an overhand grip wider than shoulders.",
      "Drive elbows down towards hips to pull chin above bar.",
      "Lower under control to full dead-hang."
    ],
    "tips": [
      "Avoid swinging or kipping."
    ],
    "alternatives": [
      "lat-pulldown",
      "chin-ups"
    ],
    "isCustom": false
  },
  {
    "id": "chin-ups",
    "name": "Chin-Ups",
    "primaryMuscles": [
      "back",
      "biceps"
    ],
    "secondaryMuscles": [
      "shoulders",
      "forearms"
    ],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Grip bar with an underhand (supinated) grip shoulder-width apart.",
      "Pull yourself up until chin clears the bar.",
      "Lower smoothly to the starting position."
    ],
    "tips": [
      "Squeeze biceps at the top of the movement."
    ],
    "alternatives": [
      "pull-ups",
      "lat-pulldown"
    ],
    "isCustom": false
  },
  {
    "id": "t-bar-row",
    "name": "T-Bar Row",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [
      "biceps",
      "hamstrings"
    ],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Straddle bar with a hinged torso at roughly 45 degrees.",
      "Pull the weight towards your sternum squeezing the lats.",
      "Lower bar with control."
    ],
    "tips": [
      "Keep spine neutral and do not jerk the torso."
    ],
    "alternatives": [
      "bent-over-row",
      "seated-cable-row"
    ],
    "isCustom": false
  },
  {
    "id": "dumbbell-row",
    "name": "One-Arm Dumbbell Row",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [
      "biceps",
      "shoulders"
    ],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Place one knee and hand on a flat bench.",
      "Hold dumbbell with free hand and row it up towards your hip.",
      "Lower slowly until full lat stretch."
    ],
    "tips": [
      "Pull with your elbow, not your wrist."
    ],
    "alternatives": [
      "seated-cable-row",
      "bent-over-row"
    ],
    "isCustom": false
  },
  {
    "id": "arnold-press",
    "name": "Arnold Dumbbell Press",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [
      "triceps"
    ],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Hold dumbbells at chin level with palms facing you.",
      "As you press upward, rotate palms to face forward.",
      "Lock out at top, then reverse rotation on the way down."
    ],
    "tips": [
      "Move through a fluid, controlled rotation."
    ],
    "alternatives": [
      "overhead-press"
    ],
    "isCustom": false
  },
  {
    "id": "hip-thrust",
    "name": "Barbell Hip Thrust",
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [
      "hamstrings",
      "quads"
    ],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Sit on floor with upper back against a bench and bar across hips.",
      "Drive through heels and squeeze glutes to lift hips level with knees.",
      "Pause for 1 second at top before lowering under control."
    ],
    "tips": [
      "Keep chin tucked and eyes looking forward at lockout."
    ],
    "alternatives": [
      "romanian-deadlift",
      "back-squat"
    ],
    "isCustom": false
  },
  {
    "id": "bulgarian-split-squat",
    "name": "Bulgarian Split Squat",
    "primaryMuscles": [
      "quads",
      "glutes"
    ],
    "secondaryMuscles": [
      "hamstrings",
      "calves"
    ],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Stand in lunge stance with rear foot elevated on bench.",
      "Lower back knee toward floor until front thigh is parallel.",
      "Drive through front heel to return to top."
    ],
    "tips": [
      "Keep chest tall and maintain forward knee tracking."
    ],
    "alternatives": [
      "walking-lunge",
      "back-squat"
    ],
    "isCustom": false
  },
  {
    "id": "goblet-squat",
    "name": "Goblet Squat",
    "primaryMuscles": [
      "quads",
      "glutes"
    ],
    "secondaryMuscles": [
      "core",
      "calves"
    ],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Hold a dumbbell or kettlebell vertically against your chest.",
      "Squat down between your knees until thighs are parallel.",
      "Drive through midfoot and heels to stand up."
    ],
    "tips": [
      "Keep elbows tucked inside knees at bottom."
    ],
    "alternatives": [
      "back-squat",
      "leg-press"
    ],
    "isCustom": false
  },
  {
    "id": "leg-extension",
    "name": "Leg Extension Machine",
    "primaryMuscles": [
      "quads"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Adjust pad to sit comfortably above ankles.",
      "Extend legs to full extension, squeezing quads at top.",
      "Lower slowly to starting angle."
    ],
    "tips": [
      "Do not hyperextend knees aggressively."
    ],
    "alternatives": [
      "goblet-squat",
      "back-squat"
    ],
    "isCustom": false
  },
  {
    "id": "hamstring-curl",
    "name": "Lying Leg Curl",
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [
      "calves"
    ],
    "equipment": "machine",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie face down with roller pad positioned just below calves.",
      "Curl heels toward glutes as far as possible.",
      "Lower slowly back to starting position."
    ],
    "tips": [
      "Keep hips pressed firmly into bench."
    ],
    "alternatives": [
      "romanian-deadlift"
    ],
    "isCustom": false
  },
  {
    "id": "seated-calf-raise",
    "name": "Seated Calf Raise",
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Place balls of feet on platform with thigh pad secured.",
      "Lower heels for a deep stretch, then press through toes to full contraction.",
      "Hold peak contraction for 1 second."
    ],
    "tips": [
      "Avoid bouncing; use strict cadence."
    ],
    "alternatives": [
      "standing-calf-raise"
    ],
    "isCustom": false
  },
  {
    "id": "farmers-walk",
    "name": "Farmer's Walk",
    "primaryMuscles": [
      "forearms",
      "core"
    ],
    "secondaryMuscles": [
      "shoulders",
      "calves"
    ],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Pick up heavy dumbbells or kettlebells in each hand.",
      "Walk with tall upright posture and shoulders packed.",
      "Take short, controlled, rhythmic steps."
    ],
    "tips": [
      "Do not allow dumbbells to swing."
    ],
    "alternatives": [
      "wrist-curls"
    ],
    "isCustom": false
  },
  {
    "id": "wrist-curls",
    "name": "Forearm Wrist Curls",
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Rest forearms on bench with palms facing up and wrists over the edge.",
      "Curl the weights upward using only your wrists.",
      "Lower slowly for a full stretch."
    ],
    "tips": [
      "Use controlled tempo."
    ],
    "alternatives": [
      "farmers-walk"
    ],
    "isCustom": false
  },
  {
    "id": "cable-crunch",
    "name": "Kneeling Cable Crunch",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Kneel below high pulley with rope held at forehead.",
      "Flex at waist and curl torso downward toward knees.",
      "Squeeze abs hard at bottom, then slowly return."
    ],
    "tips": [
      "Keep hips stationary; curl through your spine."
    ],
    "alternatives": [
      "hanging-leg-raise",
      "russian-twist"
    ],
    "isCustom": false
  },
  {
    "id": "bicycle-crunches",
    "name": "Bicycle Crunches",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [
      "quads"
    ],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie on back with hands behind head and legs raised.",
      "Bring opposite elbow to opposite knee while extending other leg.",
      "Alternate sides in a fluid pedaling motion."
    ],
    "tips": [
      "Do not pull on your neck."
    ],
    "alternatives": [
      "russian-twist",
      "plank"
    ],
    "isCustom": false
  },
  {
    "id": "side-plank",
    "name": "Side Plank Hold",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [
      "shoulders",
      "glutes"
    ],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie on your side propped on forearm with feet stacked.",
      "Raise hips until body forms a straight line.",
      "Hold position with core engaged."
    ],
    "tips": [
      "Do not allow hips to sag."
    ],
    "alternatives": [
      "plank"
    ],
    "isCustom": false
  },
  {
    "id": "thrusters",
    "name": "Barbell Thrusters",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [
      "quads",
      "shoulders",
      "glutes",
      "triceps"
    ],
    "equipment": "barbell",
    "category": "hiit",
    "difficulty": "advanced",
    "instructions": [
      "Hold bar at front rack and perform a full front squat.",
      "Explode upward using leg drive to press bar overhead.",
      "Lower smoothly back into squat in one motion."
    ],
    "tips": [
      "Synchronize the leg drive with the overhead press."
    ],
    "alternatives": [
      "burpees",
      "jump-squat"
    ],
    "isCustom": false
  },
  {
    "id": "high-knees",
    "name": "High Knees Sprint",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [
      "core",
      "calves",
      "quads"
    ],
    "equipment": "bodyweight",
    "category": "hiit",
    "difficulty": "beginner",
    "instructions": [
      "Run in place driving knees up to hip height.",
      "Pump arms in sync with rapid foot turnover.",
      "Stay light on balls of feet."
    ],
    "tips": [
      "Maintain upright torso."
    ],
    "alternatives": [
      "mountain-climbers",
      "jumping-jacks"
    ],
    "isCustom": false
  },
  {
    "id": "jumping-jacks",
    "name": "Jumping Jacks",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [
      "calves",
      "shoulders"
    ],
    "equipment": "bodyweight",
    "category": "cardio",
    "difficulty": "beginner",
    "instructions": [
      "Jump feet out while clapping hands overhead.",
      "Jump back to starting stance in rhythmic tempo."
    ],
    "tips": [
      "Land softly on balls of feet."
    ],
    "alternatives": [
      "high-knees"
    ],
    "isCustom": false
  },
  {
    "id": "cat-cow",
    "name": "Cat-Cow Spinal Mobility",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [
      "back"
    ],
    "equipment": "bodyweight",
    "category": "mobility",
    "difficulty": "beginner",
    "instructions": [
      "Start on all fours with hands under shoulders.",
      "Inhale, arch back and lift chin (Cow).",
      "Exhale, round spine upward and tuck chin to chest (Cat)."
    ],
    "tips": [
      "Move smoothly with slow breath cycles."
    ],
    "alternatives": [
      "cobra-stretch"
    ],
    "isCustom": false
  },
  {
    "id": "worlds-greatest-stretch",
    "name": "World's Greatest Stretch",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [
      "hamstrings",
      "glutes",
      "shoulders"
    ],
    "equipment": "bodyweight",
    "category": "mobility",
    "difficulty": "beginner",
    "instructions": [
      "Step into a deep lunge and place both hands inside front foot.",
      "Rotate inner arm toward ceiling, opening chest.",
      "Hold briefly, return hand, and shift hips back for hamstring stretch."
    ],
    "tips": [
      "Keep back knee off ground for extra hip flexor stretch."
    ],
    "alternatives": [
      "cat-cow"
    ],
    "isCustom": false
  },
  {
    "id": "cobra-stretch",
    "name": "Cobra Stretch",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [
      "back"
    ],
    "equipment": "bodyweight",
    "category": "mobility",
    "difficulty": "beginner",
    "instructions": [
      "Lie prone with hands beside chest.",
      "Press up extending arms while keeping hips grounded.",
      "Look forward and breathe deeply into abdominal stretch."
    ],
    "tips": [
      "Relax shoulders away from ears."
    ],
    "alternatives": [
      "cat-cow"
    ],
    "isCustom": false
  },
  {
    "id": "45-degree-hyperextension",
    "name": "45 Degree Hyperextension",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Position yourself on the 45-degree hyperextension bench with ankles secured.",
      "Cross arms over chest or place hands behind head.",
      "Lower your upper body forward at the hips.",
      "Stop when your upper body is just below parallel to the floor.",
      "Lift your torso back up in line with your legs."
    ],
    "tips": [
      "Keep back straight",
      "Hinge from hips",
      "Engage glutes",
      "Avoid hyperextending spine"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "45-degree-bicycle-twisting-crunch",
    "name": "45-Degree Bicycle Twisting Crunch",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Lie down with your hands behind your head and legs extended upwards at about a 45-degree angle.",
      "Engage your core and lift your shoulders off the ground.",
      "Twist your upper body, bringing your right elbow toward your left knee as you extend your right leg.",
      "Return to the starting position and repeat to the opposite side.",
      "Continue alternating sides in a controlled, twisting motion."
    ],
    "tips": [
      "Keep elbows wide",
      "Twist through the torso",
      "Do not pull on neck",
      "Control each rep"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "all-fours-groin-stretch",
    "name": "All Fours Groin Stretch",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Start on hands and knees (quadruped position).",
      "Slide knees apart, keeping shins and feet in line with knees.",
      "Lower hips toward the floor, maintaining a flat back.",
      "Move hips back gently until you feel a stretch in the groin.",
      "Hold the position and breathe deeply."
    ],
    "tips": [
      "Keep spine neutral",
      "Move slowly",
      "Avoid bouncing",
      "Relax into stretch"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "band-assisted-pull-up",
    "name": "Band Assisted Pull-up",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Loop the band securely over a pull-up bar and place one foot or knee into the bottom of the band.",
      "Grip the bar slightly wider than shoulder width with your palms facing away from you.",
      "Hang with straight arms, tighten your midsection, and pull your shoulders down away from your ears.",
      "Pull yourself up by driving your elbows down and back until your chin clears the bar.",
      "Lower yourself with control until your arms are straight again, keeping tension through your torso."
    ],
    "tips": [
      "Drive elbows to hips",
      "Keep ribs down",
      "Shoulders away from ears",
      "Control the descent"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "band-bent-over-rear-lateral-raise",
    "name": "Band Bent-Over Rear Lateral Raise",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand on a resistance band, feet shoulder-width apart.",
      "Hinge forward at hips, keeping back flat.",
      "Hold band with both hands, arms hanging down.",
      "Raise arms out to sides until parallel with shoulders.",
      "Lower arms back down with control."
    ],
    "tips": [
      "Flat back",
      "Slight elbow bend",
      "Squeeze shoulders",
      "Slow control"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "band-hip-abduction",
    "name": "Band Hip Abduction",
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Place a resistance band around your thighs or ankles.",
      "Stand tall with feet hip-width apart.",
      "Shift weight to one leg.",
      "Lift the other leg laterally against band resistance.",
      "Return leg to start; repeat on both sides."
    ],
    "tips": [
      "Keep chest up",
      "Stable standing leg",
      "Move slowly",
      "Feel glute engagement"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "band-hip-adduction",
    "name": "Band Hip Adduction",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Secure a resistance band to a sturdy anchor at ankle height.",
      "Loop the other end around your working ankle.",
      "Stand tall and hold onto a support if needed.",
      "Bring your working leg across your body, adducting at the hip.",
      "Slowly return to the starting position and repeat."
    ],
    "tips": [
      "Keep core tight",
      "Move with control",
      "Avoid swinging",
      "Maintain upright posture"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "band-kneeling-one-arm-pulldown",
    "name": "Band Kneeling One Arm Pulldown",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Anchor the band overhead and kneel facing the anchor point.",
      "Grab the band with one hand and extend that arm up and slightly forward.",
      "Brace your torso and keep your chest tall without leaning back.",
      "Pull your elbow down toward your side until your hand reaches about shoulder or rib level.",
      "Squeeze your lat at the bottom while keeping your shoulder down.",
      "Slowly straighten your arm back overhead under control.",
      "Complete all reps on one side, then switch arms."
    ],
    "tips": [
      "Drive elbow to your side",
      "Keep ribs down",
      "Shoulder away from your ear",
      "Move slowly on the return"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "band-one-arm-front-raise",
    "name": "Band One Arm Front Raise",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand with one foot on the band for resistance.",
      "Hold handle in one hand at thigh level, palm facing down.",
      "Keep arm straight, raise it forward to shoulder height.",
      "Pause briefly at the top.",
      "Lower arm back down slowly and repeat."
    ],
    "tips": [
      "Raise to shoulder height",
      "Keep elbow soft",
      "Don't swing",
      "Control the descent"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "band-one-leg-kickback-bent-position",
    "name": "Band One-Leg Kickback (Bent Position)",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Anchor the band and loop it around your working ankle.",
      "Start on all fours with hands under shoulders and knees bent.",
      "Engage your core and extend one leg backward against band resistance.",
      "Pause and squeeze the glute at the top.",
      "Return to starting position and repeat for desired reps, then switch legs."
    ],
    "tips": [
      "Keep back flat",
      "Drive heel upward",
      "Squeeze glutes",
      "Avoid arching lower back"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "band-overhead-triceps-extension",
    "name": "Band Overhead Triceps Extension",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand on the middle of the band with feet hip-width apart and hold one end in each hand.",
      "Raise your hands overhead and bend your elbows so your hands move behind your head.",
      "Keep your upper arms close to your ears and brace your midsection.",
      "Straighten your elbows to press the band overhead until your arms are fully extended.",
      "Pause briefly at the top, then bend your elbows slowly to return behind your head.",
      "Repeat without letting your elbows flare wide."
    ],
    "tips": [
      "Elbows point forward",
      "Upper arms stay still",
      "Brace your ribs down",
      "Fully straighten the elbows"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "band-prone-leg-curl",
    "name": "Band Prone Leg Curl",
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Anchor the band securely at ground level.",
      "Lie face down with legs extended.",
      "Loop the band around your ankle.",
      "Flex your knee, bringing your heel toward your glutes.",
      "Slowly return to the start; repeat and switch legs if desired."
    ],
    "tips": [
      "Keep hips down",
      "Point toes away",
      "Squeeze hamstrings at top",
      "Control lowering phase"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "band-pull-through",
    "name": "Band Pull Through",
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Anchor the band at floor level and loop it between your legs.",
      "Face away from the anchor and walk forward until the band is taut.",
      "Stand with feet about hip-width apart and soften your knees.",
      "Push your hips back and hinge forward, letting the band travel behind you.",
      "Lower until you feel your hamstrings stretch while keeping your back flat.",
      "Drive your hips forward to stand tall and squeeze your glutes at the top."
    ],
    "tips": [
      "Push hips back",
      "Keep ribs down",
      "Stand tall at top",
      "Squeeze glutes hard"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "band-resisted-decline-sit-up",
    "name": "Band Resisted Decline Sit-Up",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Attach a resistance band securely behind the decline bench.",
      "Lie on the bench with your feet anchored, holding the band at the chest or behind the neck.",
      "Engage your core and perform a sit-up, raising your torso towards your knees.",
      "Control the movement back down to starting position.",
      "Repeat for the desired repetitions."
    ],
    "tips": [
      "Keep tension in band",
      "Crunch up slowly",
      "Avoid swinging",
      "Exhale on exertion"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "band-seated-leg-extension",
    "name": "Band Seated Leg Extension",
    "primaryMuscles": [
      "quads"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit upright on a sturdy chair with feet flat.",
      "Anchor one end of a band behind the chair leg.",
      "Loop the other end of the band around your ankle.",
      "Raise your lower leg to extend the knee fully.",
      "Lower the leg back down under control; repeat and switch legs."
    ],
    "tips": [
      "Sit tall",
      "Keep upper leg stationary",
      "Control extension",
      "Do not lock knee at top"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "band-seated-row",
    "name": "Band Seated Row",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Sit on the floor with legs straight and loop the band over your feet.",
      "Grab the band handles or ends with both hands, arms extended.",
      "Keep back straight and chest up.",
      "Pull the handles back, driving elbows past your torso and squeezing shoulder blades.",
      "Release slowly to the starting position."
    ],
    "tips": [
      "Lead with elbows",
      "Keep chest up",
      "Squeeze shoulder blades",
      "Don't round your back"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "band-shoulder-warm-up-stretch",
    "name": "Band Shoulder Warm-Up Stretch",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand tall and grip band with hands wider than shoulders.",
      "Hold arms straight, band in front of thighs.",
      "Slowly raise band overhead while keeping arms straight.",
      "Move band behind head and down to lower back.",
      "Reverse the movement to bring band to starting position."
    ],
    "tips": [
      "Keep arms straight",
      "Move slowly",
      "Stay within pain-free range",
      "Keep posture tall"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "band-side-bend",
    "name": "Band Side Bend",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Anchor the resistance band securely at ground level.",
      "Stand beside the anchor point, feet shoulder-width apart.",
      "Hold the band handle with the outside hand, arm extended alongside your body.",
      "Keeping your torso straight, bend sideways at the waist away from the anchor.",
      "Return to the starting position and repeat for reps, then switch sides."
    ],
    "tips": [
      "Keep chest up",
      "Don’t rotate hips",
      "Bend directly to the side",
      "Controlled return"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "band-standing-calf-raise",
    "name": "Band Standing Calf Raise",
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand with feet shoulder-width on the band.",
      "Hold band handles by sides or at shoulders for resistance.",
      "Keep torso upright and brace core.",
      "Raise heels to stand on the balls of your feet, contracting calves.",
      "Lower heels back to the floor slowly."
    ],
    "tips": [
      "Go all the way up",
      "Pause at the top",
      "Lower slowly",
      "Keep core engaged"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "band-standing-crunch",
    "name": "Band Standing Crunch",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Attach the band to an anchor around waist height and stand facing away from it.",
      "Hold the band at your chest with both hands and step forward until the band is taut.",
      "Set your feet about hip-width apart and soften your knees.",
      "Brace your midsection and curl your ribs down, bending your torso forward.",
      "Pause briefly at the bottom while keeping your hips mostly still.",
      "Slowly uncurl your torso and return to an upright position under control."
    ],
    "tips": [
      "Ribs down",
      "Curl through your spine",
      "Keep hips still",
      "Move slowly both ways"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "band-standing-leg-curl",
    "name": "Band Standing Leg Curl",
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Anchor the resistance band behind you at ground level.",
      "Loop the band around one ankle.",
      "Stand on the opposite leg and balance.",
      "Curl your heel toward your glutes by flexing your knee.",
      "Lower leg slowly; repeat and switch sides."
    ],
    "tips": [
      "Keep thighs aligned",
      "Stay tall",
      "Squeeze hamstrings",
      "Control descent"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "band-standing-lift",
    "name": "Band Standing Lift",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Anchor the band low near the floor.",
      "Stand side-on to the anchor, feet shoulder-width.",
      "Hold the band handle with both hands at hip level.",
      "Lift and rotate your torso diagonally to the opposite side and above shoulder.",
      "Return to start; repeat, then switch sides."
    ],
    "tips": [
      "Keep arms mostly straight",
      "Twist from the core",
      "Pivot feet for rotation",
      "Do not hyperextend back"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "band-standing-rear-delt-row",
    "name": "Band Standing Rear Delt Row",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Stand on the middle of the band with feet about hip-width apart and hold one end in each hand.",
      "Hinge forward at the hips with a soft bend in your knees until your torso leans forward and your arms hang below your shoulders.",
      "Set your shoulders down and keep your chest open with your palms facing each other or slightly inward.",
      "Pull your elbows out and back until your hands reach around lower chest to upper rib level.",
      "Squeeze your rear shoulders and upper back at the top without shrugging.",
      "Lower your hands back down under control until your arms are straight again."
    ],
    "tips": [
      "Lead with the elbows",
      "Keep neck long",
      "Chest open, back flat",
      "Don’t shrug up"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "band-straight-back-seated-row",
    "name": "Band Straight-Back Seated Row",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Sit on the floor and extend your legs forward.",
      "Loop the band around your feet securely.",
      "Grip the band handles with both hands, arms extended.",
      "Keeping your back straight, pull the handles toward your waist, elbows close to your body.",
      "Pause, squeeze your shoulder blades, then slowly return to the starting position."
    ],
    "tips": [
      "Keep chest up",
      "Maintain neutral spine",
      "Squeeze shoulder blades",
      "Control the release"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "band-triceps-pushdown",
    "name": "Band Triceps Pushdown",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Anchor the band overhead and stand facing it with a handle or end in each hand.",
      "Bend your elbows to about 90 degrees and pin your upper arms close to your sides.",
      "Brace your torso and press your hands straight down until your elbows fully extend.",
      "Pause briefly at the bottom and squeeze your triceps.",
      "Slowly let the band rise back up until your forearms return to the start position.",
      "Repeat without letting your elbows drift forward or outward."
    ],
    "tips": [
      "Elbows pinned to sides",
      "Only move the forearms",
      "Stand tall",
      "Squeeze at lockout"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "barbell-back-squat",
    "name": "Barbell Back Squat",
    "primaryMuscles": [
      "quads"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Position barbell on upper traps, unrack.",
      "Stand with feet shoulder-width apart.",
      "Descend into squat keeping back neutral.",
      "Lower until thighs parallel or below.",
      "Drive up through heels to standing."
    ],
    "tips": [
      "Chest up",
      "Back straight",
      "Drive through heels",
      "Knees track over toes"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "barbell-bench-press",
    "name": "Barbell Bench Press",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Lie flat on the bench with your eyes under the bar and plant your feet firmly on the floor.",
      "Grip the bar slightly wider than shoulder width and straighten your arms to unrack it over your chest.",
      "Lower the bar under control to your mid-chest while keeping your wrists stacked over your forearms.",
      "Lightly touch your chest, then press the bar straight up until your arms are fully extended.",
      "Guide the bar back into the rack once you finish the set."
    ],
    "tips": [
      "Drive feet into floor",
      "Keep wrists stacked",
      "Touch mid-chest",
      "Press straight up"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "barbell-clean-and-press",
    "name": "Barbell Clean And Press",
    "primaryMuscles": [
      "quads"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "advanced",
    "instructions": [
      "Stand with your feet hip- to shoulder-width apart and place the barbell over your midfoot.",
      "Bend at your hips and knees, grip the bar just outside your legs, and set your back flat with your chest up.",
      "Push the floor away and lift the bar, keeping it close to your shins and thighs as you stand.",
      "Explosively extend your hips, knees, and ankles, then shrug and pull yourself under the bar.",
      "Catch the bar on the fronts of your shoulders with elbows forward and stand tall.",
      "Press the bar straight overhead until your arms are locked out and the bar is over your shoulders.",
      "Lower the bar back to your shoulders, then guide it down to the floor under control."
    ],
    "tips": [
      "Keep the bar close",
      "Drive through the floor",
      "Elbows fast through",
      "Press straight overhead"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "barbell-close-grip-bench-press",
    "name": "Barbell Close Grip Bench Press",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Lie on bench and grasp barbell with close grip.",
      "Unrack and position bar above lower chest.",
      "Lower bar slowly, elbows close to sides.",
      "Touch chest briefly, then press bar to starting position.",
      "Repeat for reps."
    ],
    "tips": [
      "Tuck elbows",
      "Grip just inside shoulder width",
      "Press through triceps",
      "Control the descent"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "barbell-decline-bench-press",
    "name": "Barbell Decline Bench Press",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Lie on the decline bench and secure your legs under the pads with your eyes under the bar.",
      "Grip the bar slightly wider than shoulder width and pull your shoulder blades back into the bench.",
      "Unrack the bar and hold it above your lower chest with straight wrists and locked elbows.",
      "Lower the bar under control to your lower chest or upper sternum while keeping your elbows at about a 45-degree angle.",
      "Press the bar straight up until your elbows are extended and the bar returns over your lower chest.",
      "Repeat each rep with the same bar path and controlled tempo."
    ],
    "tips": [
      "Drive shoulders into bench",
      "Wrists stacked over forearms",
      "Lower to lower chest",
      "Press straight up"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "barbell-drag-curl",
    "name": "Barbell Drag Curl",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Stand tall with feet about hip-width apart and hold the barbell with an underhand grip at your thighs.",
      "Pull your shoulders slightly back and keep your elbows behind your torso.",
      "Curl the bar upward by sliding it close along the front of your body as your elbows travel back.",
      "Lift until the bar reaches your upper stomach or lower chest without letting it drift away from you.",
      "Lower the barbell slowly along the same path until your arms are straight again."
    ],
    "tips": [
      "Keep the bar close",
      "Drive elbows back",
      "Chest tall",
      "Control the lowering"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "barbell-front-raise",
    "name": "Barbell Front Raise",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand tall with your feet hip-width apart and hold the barbell against your thighs with an overhand grip.",
      "Brace your core and keep a soft bend in your elbows.",
      "Raise the barbell straight forward in front of you until it reaches shoulder height.",
      "Pause briefly without shrugging your shoulders.",
      "Lower the barbell back to your thighs with control.",
      "Reset your posture and repeat the movement."
    ],
    "tips": [
      "Lift to shoulder height",
      "Keep ribs down",
      "Lead with your hands",
      "Avoid swinging"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "barbell-front-squat",
    "name": "Barbell Front Squat",
    "primaryMuscles": [
      "quads"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Rack barbell at collarbone level, elbows up.",
      "Stand with feet shoulder-width apart.",
      "Descend into squat keeping torso upright.",
      "Lower until thighs are parallel to floor.",
      "Drive up through heels to stand."
    ],
    "tips": [
      "Elbows high",
      "Torso upright",
      "Heels down",
      "Keep knees tracking over toes"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "barbell-incline-bench-press",
    "name": "Barbell Incline Bench Press",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Set an incline bench and lie back with your eyes under the bar and your feet flat on the floor.",
      "Grip the bar slightly wider than shoulder width with straight wrists and pull your shoulder blades down and back.",
      "Unrack the bar and hold it above your upper chest with your arms straight.",
      "Lower the bar under control to your upper chest, keeping your elbows slightly tucked from straight out.",
      "Press the bar upward until your arms are straight again, keeping the bar path over your shoulders.",
      "Rack the bar back onto the supports with control after your final rep."
    ],
    "tips": [
      "Drive feet into floor",
      "Keep chest up",
      "Wrists stacked over elbows",
      "Press straight up"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "barbell-lunge",
    "name": "Barbell Lunge",
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Set the barbell across your upper back and stand tall with feet hip-width apart.",
      "Brace your core and take a controlled step forward with one foot.",
      "Lower your body until both knees bend and your back knee moves toward the floor.",
      "Keep your front foot flat and your torso upright at the bottom position.",
      "Push through the front foot to stand back up and bring your feet together.",
      "Repeat on the other side, alternating legs each rep."
    ],
    "tips": [
      "Stay tall",
      "Front heel stays down",
      "Track knees over toes",
      "Control the descent"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "barbell-prone-incline-curl",
    "name": "Barbell Prone Incline Curl",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Set an incline bench and lie face down with your chest supported and your feet planted on the floor.",
      "Hold the barbell with an underhand grip about shoulder-width apart and let your arms hang straight down.",
      "Brace your torso against the bench and keep your upper arms still.",
      "Curl the barbell upward by bending your elbows until the bar reaches near the front of your shoulders.",
      "Squeeze your biceps briefly at the top without lifting your chest off the bench.",
      "Lower the barbell under control until your elbows are fully extended again."
    ],
    "tips": [
      "Keep elbows pinned",
      "Curl, don't swing",
      "Chest stays on bench",
      "Control the lowering"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "barbell-rear-delt-raise",
    "name": "Barbell Rear Delt Raise",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Stand tall holding the barbell with a shoulder-width overhand grip.",
      "Soften your knees and hinge at your hips until your torso is nearly parallel to the floor.",
      "Let the bar hang below your chest with your arms straight and your neck neutral.",
      "Raise the bar out and up by moving your upper arms to the sides until they reach shoulder height.",
      "Pause briefly at the top while keeping your torso still.",
      "Lower the bar under control to the starting position."
    ],
    "tips": [
      "Hinge, don't round",
      "Lead with your elbows",
      "Keep neck neutral",
      "Control the lowering"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "barbell-reverse-wrist-curl",
    "name": "Barbell Reverse Wrist Curl",
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit on a bench and grasp a barbell with an overhand (pronated) grip.",
      "Rest your forearms on your thighs with wrists hanging just beyond your knees.",
      "Begin with your wrists flexed downward.",
      "Slowly curl your wrists upward, lifting the barbell.",
      "Lower under control to the starting position."
    ],
    "tips": [
      "Keep forearms stationary",
      "Use slow, controlled motion",
      "Only wrists should move",
      "Avoid swinging"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "barbell-seated-behind-the-neck-press",
    "name": "Barbell Seated Behind-The-Neck Press",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "advanced",
    "instructions": [
      "Sit on a bench with back support; grip barbell wider than shoulders.",
      "Unrack barbell and hold above your head.",
      "Lower barbell behind your head to just below ear level.",
      "Press barbell back up to the starting position.",
      "Repeat for desired reps, keeping core engaged."
    ],
    "tips": [
      "Keep back upright",
      "Don't arch lower back",
      "Lower bar with control",
      "Use full range"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "barbell-shrug",
    "name": "Barbell Shrug",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand tall with your feet hip- to shoulder-width apart and hold the barbell in front of your thighs with an overhand grip.",
      "Let your arms hang straight, brace your torso, and keep your chest up.",
      "Lift your shoulders straight up toward your ears without bending your elbows or leaning back.",
      "Pause briefly at the top and squeeze your upper traps.",
      "Lower your shoulders under control until they return to the starting position."
    ],
    "tips": [
      "Shoulders straight up",
      "Arms stay long",
      "Chest tall",
      "No rolling"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "barbell-standing-back-wrist-curl",
    "name": "Barbell Standing Back Wrist Curl",
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand tall with your feet about hip-width apart and hold a barbell behind your hips with an overhand grip.",
      "Let the bar rest across your fingers so your knuckles face the floor and your palms face behind you.",
      "Keep your elbows close to your sides and straighten your wrists to lower the bar toward your fingertips.",
      "Curl your wrists upward to roll the bar back into your hands and lift it as high as you can.",
      "Pause briefly at the top, then lower the bar with control back to the starting position."
    ],
    "tips": [
      "Move only your wrists",
      "Keep elbows pinned back",
      "Use full wrist range",
      "Control the lowering"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "barbell-straight-leg-deadlift",
    "name": "Barbell Straight Leg Deadlift",
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Stand tall with your feet hip-width apart and hold the barbell in front of your thighs with straight arms.",
      "Soften your knees slightly and brace your midsection.",
      "Push your hips back and lower the bar down your legs while keeping your back flat and your legs nearly straight.",
      "Lower until the bar reaches mid-shin or until you feel a strong hamstring stretch without losing your back position.",
      "Drive your hips forward and stand tall, keeping the bar close to your legs the whole way up.",
      "Finish with your hips locked out and shoulders stacked over your hips."
    ],
    "tips": [
      "Hips back, not down",
      "Keep the bar close",
      "Soft knees, flat back",
      "Stand tall and squeeze glutes"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "barbell-underhand-bent-over-row",
    "name": "Barbell Underhand Bent-Over Row",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Stand with feet hip-width apart, barbell on floor.",
      "Bend forward from hips, back straight, grasp bar underhand.",
      "Let bar hang at arm’s length below shoulders.",
      "Row barbell to torso, elbows close to sides.",
      "Lower barbell under control to starting position."
    ],
    "tips": [
      "Keep back flat",
      "Pull with elbows",
      "Squeeze shoulder blades",
      "Keep wrists neutral"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "barbell-wide-grip-upright-row",
    "name": "Barbell Wide-Grip Upright Row",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Stand upright with feet shoulder width apart.",
      "Hold the barbell using a wide, overhand grip.",
      "Let the bar rest in front of your thighs.",
      "Lift the bar straight up toward your chest, elbows out to the sides.",
      "Lower the bar slowly to the starting position."
    ],
    "tips": [
      "Lead with your elbows",
      "Keep bar close to your body",
      "Stop at upper chest",
      "Maintain neutral spine"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "battling-ropes",
    "name": "Battling Ropes",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "other",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Anchor your stance with feet about shoulder-width apart and bend your knees slightly.",
      "Hold one rope end in each hand with your palms facing each other and your arms in front of you.",
      "Brace your core and lift one hand as you lower the other to start the waves.",
      "Keep alternating your arms quickly to send continuous waves down the ropes.",
      "Maintain the slight knee bend and steady torso as you keep the waves even."
    ],
    "tips": [
      "Move arms fast",
      "Keep chest tall",
      "Brace your core",
      "Make even waves"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "bench-crunch",
    "name": "Bench Crunch",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie flat on a bench with knees bent and feet secured or flat.",
      "Cross your arms over your chest or place hands behind your head.",
      "Engage your core and lift your shoulders towards your knees.",
      "Squeeze at the top and hold briefly.",
      "Lower your upper body back to bench in a controlled manner."
    ],
    "tips": [
      "Lift with your abs",
      "Keep chin tucked",
      "Don't arch back",
      "Control the motion"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "bench-dips",
    "name": "Bench Dips",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Sit on a bench and place your hands beside your hips, gripping the edge.",
      "Extend your legs out in front with heels on the floor.",
      "Slide your hips off the bench, supporting your weight with your arms.",
      "Lower your body by bending your elbows to about 90 degrees.",
      "Push through your palms to extend your elbows and return to the start."
    ],
    "tips": [
      "Keep elbows close to body",
      "Lower slowly and with control",
      "Keep chest tall",
      "Avoid shrugging shoulders"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "bench-pull-up",
    "name": "Bench Pull-Up",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Place a bench under a pull-up bar.",
      "Grip the bar with hands wider than shoulder-width.",
      "Position feet on the bench for support.",
      "Pull your chest towards the bar, using feet as needed.",
      "Lower yourself slowly to starting position."
    ],
    "tips": [
      "Keep core engaged",
      "Lead with chest",
      "Pull elbows down and back",
      "Don't let legs push too much"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "bent-knee-lying-twist-on-stability-ball",
    "name": "Bent Knee Lying Twist on Stability Ball",
    "primaryMuscles": [
      "quads"
    ],
    "secondaryMuscles": [],
    "equipment": "other",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie on your back with calves on a stability ball.",
      "Extend arms out at your sides for support.",
      "Bend knees at 90 degrees over the ball.",
      "Slowly drop knees to one side, keeping shoulders flat.",
      "Return to center and repeat on the other side."
    ],
    "tips": [
      "Keep shoulders grounded",
      "Control the twist",
      "Engage core",
      "Move slowly"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "bridge-pose-setu-bandhasana",
    "name": "Bridge Pose (Setu Bandhasana)",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie on your back with your knees bent and feet hip-width apart.",
      "Place your arms at your sides, palms down.",
      "Press through your heels and lift your hips upward.",
      "Hold the pose, engaging your glutes and core.",
      "Lower your hips back to the starting position."
    ],
    "tips": [
      "Squeeze glutes at the top",
      "Keep knees aligned with hips",
      "Do not overarch lower back",
      "Press evenly through feet"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "burpee",
    "name": "Burpee",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Stand tall with your feet about hip-width apart.",
      "Bend your knees, hinge at your hips, and place your hands on the floor in front of your feet.",
      "Jump both feet back to a high plank with your body in a straight line.",
      "Lower your chest to the floor, then press back up to plank.",
      "Jump both feet forward to the outside of your hands.",
      "Drive through your feet and jump straight up, reaching your arms overhead as you leave the floor.",
      "Land softly and go straight into the next rep."
    ],
    "tips": [
      "Keep your core braced.",
      "Land softly under control.",
      "Chest up on the jump.",
      "Move as one straight line."
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "butterfly-yoga-pose",
    "name": "Butterfly Yoga Pose",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit upright with feet together and knees bent out to sides.",
      "Hold your feet with your hands.",
      "Keep spine tall and shoulders relaxed.",
      "Gently press knees toward the floor.",
      "Hold the position, breathing deeply."
    ],
    "tips": [
      "Keep chest tall",
      "Relax the hips",
      "Don't force knees down",
      "Engage core lightly"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cable-close-grip-lat-pulldown",
    "name": "Cable Close Grip Lat Pulldown",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Attach a V-bar or close grip handle to the cable machine.",
      "Sit down and secure your thighs under the pads.",
      "Grasp the handle with a neutral grip, hands parallel.",
      "Pull the handle down to the top of your chest, keeping torso vertical.",
      "Slowly return the handle to the top without locking elbows."
    ],
    "tips": [
      "Lead with the elbows",
      "Keep chest up",
      "Do not swing back",
      "Squeeze lats at bottom"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cable-crossover-reverse-fly",
    "name": "Cable Crossover Reverse Fly",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Set both cable handles to the low pulleys and stand centered between them.",
      "Grab the left handle in your right hand and the right handle in your left hand, then step forward to create tension.",
      "Hinge forward slightly with a soft bend in your knees and keep your chest up and back flat.",
      "Start with your arms angled down and crossed in front of you, elbows slightly bent.",
      "Pull both arms out and back in a wide arc until your hands reach about shoulder height.",
      "Squeeze your rear shoulders and upper back at the end position.",
      "Return the handles slowly to the start without shrugging or changing your torso position."
    ],
    "tips": [
      "Lead with your elbows",
      "Keep a soft elbow bend",
      "Chest up, back flat",
      "Don't shrug your shoulders"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cable-kneeling-crunch",
    "name": "Cable Kneeling Crunch",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Attach a rope handle to the high pulley and kneel facing the machine.",
      "Grab the rope ends and bring your hands beside your head with your elbows slightly forward.",
      "Brace your midsection and keep your hips stacked over your knees.",
      "Curl your ribcage toward your pelvis and bring your elbows down toward your thighs.",
      "Pause briefly in the bottom position while keeping tension on the rope.",
      "Slowly uncurl your spine and return to the start without letting the weight stack slam."
    ],
    "tips": [
      "Ribs to hips",
      "Hips stay still",
      "Curl, don't hinge",
      "Keep neck neutral"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cable-lateral-raise",
    "name": "Cable Lateral Raise",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Set the cable at the lowest position and stand side-on to it.",
      "Grab the handle with the outside hand and let your arm hang by your thigh.",
      "Stand tall with a slight bend in your elbow and brace your midline.",
      "Raise your arm out to the side until your hand reaches shoulder height.",
      "Pause briefly without shrugging your shoulder.",
      "Lower the handle back down with control to the start position."
    ],
    "tips": [
      "Lead with your elbow",
      "Stop at shoulder height",
      "Keep neck relaxed",
      "Raise with control"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cable-lying-triceps-extension",
    "name": "Cable Lying Triceps Extension",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Attach a rope handle to a low cable and place a flat bench in line with the pulley.",
      "Lie face up on the bench with your head closest to the cable and hold the rope with a neutral grip.",
      "Press the rope straight above your chest with your arms fully extended.",
      "Keep your upper arms mostly still and bend your elbows to lower the rope toward your forehead.",
      "Pause briefly when your elbows are deeply bent.",
      "Straighten your elbows to return the rope to the start position above your chest."
    ],
    "tips": [
      "Elbows stay tucked",
      "Upper arms stay still",
      "Move only at the elbows",
      "Finish with straight arms"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cable-one-arm-curl",
    "name": "Cable One Arm Curl",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand beside the cable machine and hold the handle in one hand with your palm facing up.",
      "Step out until the cable is taut, then stand tall with your elbow tucked against your side.",
      "Curl the handle upward by bending your elbow without letting your upper arm drift forward.",
      "Raise the handle until your forearm is close to your biceps, then briefly squeeze your arm.",
      "Lower the handle slowly until your arm is straight again while keeping tension on the cable.",
      "Complete all reps on one arm, then switch sides."
    ],
    "tips": [
      "Keep elbow pinned",
      "Palm stays up",
      "Stand tall",
      "Lower with control"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cable-one-arm-front-raise",
    "name": "Cable One Arm Front Raise",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Attach handle to low pulley and stand facing away from machine.",
      "Grasp handle with one hand, arm by your side.",
      "With a straight arm, raise it forward to shoulder height.",
      "Pause briefly at the top.",
      "Lower back to the start slowly and repeat."
    ],
    "tips": [
      "Keep core tight",
      "Lift with shoulder, not hand",
      "Don't swing",
      "Control the descent"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cable-one-arm-lateral-pulldown",
    "name": "Cable One Arm Lateral Pulldown",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Attach a single handle to the high cable pulley.",
      "Sit or stand, arm overhead grasping the handle.",
      "Stabilize your body and engage your core.",
      "Pull handle down to shoulder/upper chest level.",
      "Pause, then return handle slowly."
    ],
    "tips": [
      "Pull elbow down and in",
      "Don’t shrug shoulders",
      "Keep torso upright",
      "Focus on the lats"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cable-one-arm-lateral-raise",
    "name": "Cable One Arm Lateral Raise",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand sideways to the cable machine and grasp the handle with the outside hand.",
      "Step away until the cable is taut, with your arm down by your side and a slight bend in your elbow.",
      "Brace your torso and keep your shoulders level.",
      "Raise your arm out to the side until your hand reaches about shoulder height.",
      "Pause briefly without shrugging your shoulder.",
      "Lower the handle back down with control to the starting position.",
      "Complete the reps on one side, then switch arms."
    ],
    "tips": [
      "Lead with the elbow",
      "Keep shoulders level",
      "Raise to shoulder height",
      "Lower with control"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cable-one-arm-twisting-seated-row",
    "name": "Cable One-Arm Twisting Seated Row",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Sit on the cable row bench and grasp a single handle with one hand.",
      "Keep back straight and feet planted on the platform.",
      "Pull the handle toward your torso while rotating your shoulder and upper body toward the working side.",
      "Pause and squeeze your back muscles at contraction.",
      "Slowly return arm and torso to the starting position with control."
    ],
    "tips": [
      "Rotate torso with row",
      "Keep chest up",
      "Avoid jerking",
      "Control the return"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cable-pulldown",
    "name": "Cable Pulldown",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Adjust the seat and knee pad so your thighs are held down and you can reach the bar overhead.",
      "Sit tall with your feet flat, grab the bar with an overhand grip just outside shoulder width, and straighten your arms.",
      "Lean back slightly and pull your shoulders down away from your ears.",
      "Drive your elbows down and pull the bar to the top of your chest.",
      "Pause briefly while keeping your chest lifted and your torso still.",
      "Slowly straighten your arms and let the bar rise under control to the start position."
    ],
    "tips": [
      "Pull elbows to your ribs",
      "Keep chest tall",
      "Shoulders down, not shrugged",
      "Control the way up"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cable-rear-delt-row-with-rope",
    "name": "Cable Rear Delt Row (with rope)",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Attach a rope to a low cable pulley and stand facing the machine.",
      "Grab the rope with both hands, step back to create tension, and set your feet about hip-width apart.",
      "Soften your knees and hinge forward slightly with a flat back and arms extended in front of you.",
      "Lead with your elbows and row the rope up toward your upper chest while letting the rope ends separate.",
      "Pause briefly as your elbows travel out and back and your shoulder blades squeeze together.",
      "Lower the rope under control until your arms are extended again without rounding your shoulders."
    ],
    "tips": [
      "Lead with the elbows",
      "Chest up, back flat",
      "Pull shoulders back",
      "Control the return"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cable-rope-overhead-triceps-extension",
    "name": "Cable Rope Overhead Triceps Extension",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Attach a rope to a high pulley.",
      "Stand (or kneel) with back facing the machine.",
      "Grasp rope, step forward, and lean slightly.",
      "Keep upper arms still, extend elbows bringing rope forward/upward.",
      "Return to starting position slowly."
    ],
    "tips": [
      "Keep upper arms stationary",
      "Elbows close",
      "Extend fully",
      "Avoid arching back"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cable-rope-triceps-pushdown",
    "name": "Cable Rope Triceps Pushdown",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Attach a rope to the high pulley and stand facing the machine.",
      "Grab the rope with both hands, thumbs facing inward.",
      "Keep elbows tucked at your sides and lean slightly forward.",
      "Extend your arms down, splitting the rope at the bottom.",
      "Slowly return to the start without letting elbows flare out."
    ],
    "tips": [
      "Keep elbows fixed",
      "Split the rope at the bottom",
      "Don’t use your shoulders",
      "Full extension on each rep"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cable-seated-high-row-v-bar",
    "name": "Cable Seated High Row (V-bar)",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Sit at the cable row station facing the stack and grasp the V-bar handle with a neutral grip.",
      "Plant your feet, soften your knees, and sit tall with your chest up and arms extended.",
      "Brace your torso and pull your shoulder blades back and down.",
      "Drive your elbows back and out slightly as you row the handle toward your upper stomach or lower chest.",
      "Pause briefly with the handle close to your torso and your shoulders pulled back.",
      "Extend your arms forward under control until your shoulders are stretched, then repeat."
    ],
    "tips": [
      "Chest up",
      "Lead with the elbows",
      "Squeeze shoulder blades",
      "Control the return"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cable-standing-crunch",
    "name": "Cable Standing Crunch",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Set a cable at the high pulley and stand facing away from the machine.",
      "Hold the attachment by the sides of your head with both hands and bend your knees slightly.",
      "Brace your midsection and keep your hips mostly still.",
      "Curl your ribcage down toward your pelvis, bringing your elbows toward your thighs.",
      "Pause briefly in the bottom position and squeeze your abs.",
      "Slowly uncurl your torso back to the start without letting the weight stack slam."
    ],
    "tips": [
      "Ribs to hips",
      "Keep hips still",
      "Curl, don't hinge",
      "Brace your abs"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cable-standing-fly",
    "name": "Cable Standing Fly",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Attach handles to both high pulleys.",
      "Stand centered between pulleys, grasp handles in each hand.",
      "Step forward into a staggered stance, arms outstretched.",
      "With elbows slightly bent, bring handles together in front of chest.",
      "Return slowly to starting position, feeling the stretch in the chest."
    ],
    "tips": [
      "Lead with your elbows",
      "Slight bend at elbows",
      "Keep chest up",
      "Don’t let shoulders roll forward"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cable-standing-inner-curl",
    "name": "Cable Standing Inner Curl",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Set a cable handle to the lowest position and stand facing the machine.",
      "Grab the handle with one hand using an underhand grip and let your arm hang straight by your side.",
      "Step back until the cable is taut, then stand tall with your feet about hip-width apart.",
      "Keep your elbow pinned near your side and curl the handle up toward your shoulder.",
      "Squeeze your biceps at the top without letting your upper arm drift forward.",
      "Lower the handle slowly until your arm is straight again, then repeat before switching sides."
    ],
    "tips": [
      "Keep elbow by your side",
      "Curl, don't swing",
      "Stand tall",
      "Control the lowering"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cable-standing-lift",
    "name": "Cable Standing Lift",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Set the cable handle to a low position and stand side-on to the machine with your feet about shoulder-width apart.",
      "Hold the handle with both hands near the hip closest to the machine and straighten your arms with a soft bend in the elbows.",
      "Brace your core and turn your chest slightly toward the handle without rounding your back.",
      "Pull the handle diagonally up and across your body toward the opposite shoulder by rotating your torso and lifting your arms together.",
      "Pause briefly at the top with your hips mostly facing forward and your arms extended.",
      "Lower the handle back along the same diagonal path to the starting hip under control.",
      "Complete all reps on one side, then turn around and repeat on the other side."
    ],
    "tips": [
      "Brace your core",
      "Rotate through your torso",
      "Keep arms long",
      "Control the return"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cable-standing-one-arm-triceps-extension",
    "name": "Cable Standing One Arm Triceps Extension",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand side-on to the cable machine and grasp the handle with one hand.",
      "Step away until the cable is taut, then raise your upper arm so it stays roughly parallel to the floor.",
      "Bend your elbow to bring the handle toward the side of your head while keeping your upper arm still.",
      "Extend your elbow to press the handle away until your arm is straight.",
      "Pause briefly with your triceps tight, then return under control.",
      "Complete all reps on one side, then switch arms."
    ],
    "tips": [
      "Keep elbow still",
      "Upper arm stays level",
      "Straighten the arm fully",
      "Move only at elbow"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cable-straight-arm-pulldown",
    "name": "Cable Straight Arm Pulldown",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Attach a straight bar to a high cable pulley and face the machine.",
      "Grab the bar with an overhand grip, step back slightly, and hinge forward a little at the hips.",
      "Start with your arms straight in front of you at shoulder height and your torso braced.",
      "Pull the bar down in a wide arc toward your thighs without bending your elbows.",
      "Squeeze your lats at the bottom with the bar close to your hips.",
      "Raise the bar back up slowly to shoulder height while keeping your arms long and your torso still."
    ],
    "tips": [
      "Arms long, elbows soft",
      "Pull with your lats",
      "Ribs down, core tight",
      "Stop at your thighs"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cable-triceps-pushdown",
    "name": "Cable Triceps Pushdown",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand facing the cable stack with attachment at high position.",
      "Grip the bar or rope with both hands.",
      "Keep elbows tight to your body.",
      "Push the attachment down until arms are fully extended.",
      "Return slowly to starting position."
    ],
    "tips": [
      "Lock elbows at sides",
      "Control the movement",
      "Don’t let elbows drift",
      "Squeeze triceps at the bottom"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cable-twist-up-down",
    "name": "Cable Twist (up-down)",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Set the cable handle at about shoulder height and stand sideways to the machine with feet hip-width apart.",
      "Grab the handle with both hands and extend your arms in front of your chest with a soft bend in your elbows.",
      "Brace your core and rotate your torso away from the machine while guiding the handle diagonally down across your body.",
      "Keep your hips mostly still and finish with your hands near the outside of your opposite hip.",
      "Control the handle back to the start, then repeat all reps before switching sides or reverse the path to move from low to high."
    ],
    "tips": [
      "Rotate through your ribs",
      "Keep hips quiet",
      "Move on a diagonal",
      "Brace before you twist"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "calf-stretch-with-rope",
    "name": "Calf Stretch with Rope",
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit on the floor with one leg extended.",
      "Loop a rope or band around the ball of your foot.",
      "Hold ends of rope and gently pull your foot toward you.",
      "Keep knee straight for a deeper stretch.",
      "Hold the stretch and then switch legs."
    ],
    "tips": [
      "Keep knee extended",
      "Pull gently",
      "Don’t bounce",
      "Relax into stretch"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "calf-stretch-with-strap",
    "name": "Calf Stretch with Strap",
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit with legs extended on the floor.",
      "Loop a strap around the ball of one foot.",
      "Hold strap ends and gently pull foot towards you.",
      "Keep the knee straight and hold for desired time.",
      "Switch sides and repeat."
    ],
    "tips": [
      "Keep knee straight",
      "Flex foot toward you",
      "Gentle pull, avoid jerking",
      "Sit tall"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cambered-bar-lying-row",
    "name": "Cambered Bar Lying Row",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Place a barbell on the floor under the end of a flat bench and lie face down so your chest is supported with your arms hanging straight down.",
      "Plant your feet on the floor, brace your midsection, and grab the bar with an overhand grip slightly wider than shoulder width.",
      "Lift the bar clear of the floor and let it hang directly below your shoulders with your neck neutral.",
      "Pull the bar up toward the underside of the bench or lower chest by driving your elbows back.",
      "Pause briefly at the top and squeeze your shoulder blades together.",
      "Lower the bar under control until your arms are straight and the bar returns just above the floor."
    ],
    "tips": [
      "Chest stays on bench",
      "Pull elbows back",
      "Squeeze shoulder blades",
      "Keep neck neutral"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cardio-exercise",
    "name": "Cardio Exercise",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Select a cardio activity (running, jumping jacks, etc).",
      "Warm up for 3-5 minutes.",
      "Perform the chosen activity at a sustainable pace.",
      "Maintain movement for set time or rounds.",
      "Cool down and stretch afterwards."
    ],
    "tips": [
      "Keep chest up",
      "Engage core",
      "Use full range of motion",
      "Breathe steadily"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cardio-machine-exercise",
    "name": "Cardio Machine Exercise",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Choose your preferred cardio machine (treadmill, bike, etc).",
      "Adjust resistance, incline, and settings as desired.",
      "Begin with a brief warm-up.",
      "Perform cardio at steady or variable intensity.",
      "Cool down after session."
    ],
    "tips": [
      "Maintain upright posture",
      "Relax shoulders",
      "Use full range of motion",
      "Control your breathing"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "cardio-machine-workouts",
    "name": "Cardio Machine Workouts",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "cardio",
    "difficulty": "beginner",
    "instructions": [
      "Select a cardio machine suitable for your fitness level.",
      "Adjust settings such as resistance, speed, and incline as desired.",
      "Begin movement, focusing on steady pace and good posture.",
      "Continue for your planned duration, monitoring intensity.",
      "Cool down gradually and safely exit the machine."
    ],
    "tips": [
      "Maintain upright posture",
      "Use full range of motion",
      "Monitor intensity",
      "Keep steady pace"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "chest-dips",
    "name": "Chest Dips",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Grip parallel bars and lift to start.",
      "Lean torso forward and bend elbows.",
      "Lower until upper arms are parallel to floor.",
      "Pause at the bottom, feeling the stretch.",
      "Push up through palms, returning to start."
    ],
    "tips": [
      "Lean forward",
      "Keep elbows out to sides",
      "Descend under control",
      "Avoid locking elbows at top"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "chest-lift-with-rotation",
    "name": "Chest Lift with Rotation",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie on your back, knees bent, feet flat on floor.",
      "Place hands behind head, elbows wide.",
      "Engage core and lift head, neck, and shoulders off mat.",
      "Rotate torso to one side while lifting.",
      "Return to center and lower down; repeat on alternate side."
    ],
    "tips": [
      "Twist from core",
      "Don't pull on neck",
      "Elbows wide",
      "Exhale on lift"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "chin-to-chest-stretch",
    "name": "Chin-to-Chest Stretch",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit or stand with a straight back.",
      "Gently lower your chin toward your chest.",
      "Relax your shoulders and feel the stretch along your neck.",
      "Hold the position for 15-30 seconds.",
      "Slowly return to neutral."
    ],
    "tips": [
      "Move slowly",
      "Keep shoulders relaxed",
      "Do not force the stretch",
      "Hold gently"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "chin-ups-narrow-parallel-grip",
    "name": "Chin-ups (narrow parallel grip)",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Grab the parallel handles with a narrow neutral grip and hang with your arms straight.",
      "Cross your ankles or keep your legs still, then brace your midline and pull your shoulders down away from your ears.",
      "Pull your elbows down and back to lift your chest toward your hands.",
      "Keep pulling until your chin rises above your hands or handles.",
      "Lower yourself under control until your arms are straight again.",
      "Pause briefly at the bottom without relaxing your shoulders, then repeat."
    ],
    "tips": [
      "Drive elbows to ribs",
      "Chest up to handles",
      "Keep shoulders down",
      "Lower with control"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "close-feet-leg-press",
    "name": "Close Feet Leg Press",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Sit in the leg press machine with feet close together on the platform.",
      "Adjust seat and foot placement for comfort and safety.",
      "Release safety handles and grip the handles for support.",
      "Extend your knees to press the weight upward.",
      "Lower platform slowly back to starting position."
    ],
    "tips": [
      "Keep knees aligned with toes",
      "Do not lock out knees",
      "Lower with control",
      "Keep back and hips against pad"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "close-grip-chin-up",
    "name": "Close Grip Chin-Up",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Grab the pull-up bar with an underhand grip, hands shoulder-width or slightly closer.",
      "Hang at full arm extension, engage your core and back.",
      "Pull your chest towards the bar by driving your elbows down and back.",
      "Clear the bar with your chin, pause briefly at the top.",
      "Lower yourself with control until arms are fully extended."
    ],
    "tips": [
      "Squeeze shoulder blades",
      "Drive elbows down",
      "Keep core tight",
      "Avoid swinging"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "close-grip-push-up",
    "name": "Close-Grip Push-Up",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Begin in a plank position with hands close together under your chest.",
      "Keep your core tight and body in a straight line.",
      "Lower your chest toward the hands, elbows tucked by your sides.",
      "Pause briefly at the bottom without touching the floor.",
      "Press up to the starting position."
    ],
    "tips": [
      "Tuck elbows",
      "Keep hands under chest",
      "Maintain straight body",
      "Squeeze triceps at the top"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "commando-pull-up",
    "name": "Commando Pull-Up",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "advanced",
    "instructions": [
      "Stand under a pull-up bar and grip it with hands facing each other, one in front of the other.",
      "Hang with your body turned so the bar is directly in front of your face.",
      "Brace your core and pull up, bringing your head to one side of the bar.",
      "Lower yourself under control back to the starting position.",
      "Repeat, bringing your head to the opposite side on the next rep."
    ],
    "tips": [
      "Keep body tight",
      "Alternate sides",
      "Control descent",
      "Avoid swinging"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "crossover-kneeling-hip-flexor-stretch",
    "name": "Crossover Kneeling Hip Flexor Stretch",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Start in a kneeling lunge with one knee on the ground and the opposite foot forward.",
      "Tuck the pelvis under and shift your weight forward, feeling a stretch in the hip flexor of the rear leg.",
      "Rotate your torso across the body, away from the back leg.",
      "Hold for 20-30 seconds, breathing steadily.",
      "Release and repeat on the other side."
    ],
    "tips": [
      "Keep torso upright",
      "Engage glutes",
      "Rotate gently",
      "Hips square"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "decline-dumbbell-bench-press",
    "name": "Decline Dumbbell Bench Press",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Set a bench to a 45-degree decline angle.",
      "Secure feet, lie back holding dumbbells over chest.",
      "Lower dumbbells to the sides of your chest.",
      "Pause at the bottom.",
      "Press weights back to starting position."
    ],
    "tips": [
      "Control lowering phase",
      "Do not let elbows flare",
      "Keep wrists straight",
      "Press through the heels"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "decline-dumbbell-fly",
    "name": "Decline Dumbbell Fly",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Set bench to 45-degree decline, secure feet.",
      "Lie back, arms extended above chest, slight bend in elbows.",
      "Lower dumbbells in a wide arc to sides.",
      "Pause at bottom for a stretch.",
      "Return dumbbells to starting position, squeezing chest."
    ],
    "tips": [
      "Arms slightly bent",
      "Big arc motion",
      "Don't overstretch",
      "Squeeze at top"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "deep-push-up",
    "name": "Deep Push-Up",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Place hands on elevated surfaces shoulder-width apart.",
      "Assume a plank position with tight core and straight body.",
      "Lower your chest between your hands, dipping below hand level.",
      "Pause at the bottom, feeling a deep stretch in the chest.",
      "Push up powerfully until arms are extended."
    ],
    "tips": [
      "Keep elbows at 45 degrees",
      "Lower chest below hands",
      "Maintain a straight line",
      "Engage your core"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "donkey-calf-raise",
    "name": "Donkey Calf Raise",
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand with the balls of your feet on the edge of a step or block and let your heels hang off.",
      "Hinge forward at your hips and place your hands on a stable support for balance.",
      "Keep your knees slightly bent and lower your heels until you feel a stretch in your calves.",
      "Press through the balls of your feet and lift your heels as high as you can.",
      "Pause briefly at the top while staying balanced.",
      "Lower your heels back down with control and repeat."
    ],
    "tips": [
      "Lift heels straight up",
      "Move through full range",
      "Press through big toe",
      "Lower with control"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-alternating-shoulder-press",
    "name": "Dumbbell Alternating Shoulder Press",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Hold dumbbells at shoulder level, palms facing forward.",
      "Brace your core and press one dumbbell overhead until arm is fully extended.",
      "Lower to shoulder height as you press the opposite dumbbell overhead.",
      "Continue alternating arms with each rep.",
      "Maintain upright posture and avoid arching back."
    ],
    "tips": [
      "No arching",
      "Core tight",
      "Elbow under wrist",
      "Smooth transition"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-arnold-press",
    "name": "Dumbbell Arnold Press",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Sit tall on a bench with back support and plant your feet on the floor.",
      "Hold a dumbbell in each hand in front of your shoulders with palms facing you and elbows bent.",
      "Brace your midline and press the dumbbells upward while rotating your palms outward.",
      "Finish overhead with arms straight and palms facing forward.",
      "Lower the dumbbells under control while rotating your palms back toward you.",
      "Return to the start with dumbbells in front of your shoulders and repeat."
    ],
    "tips": [
      "Press and rotate smoothly",
      "Keep ribs down",
      "Wrists stacked over elbows",
      "Finish biceps by ears"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-behind-the-back-wrist-curl",
    "name": "Dumbbell Behind-the-Back Wrist Curl",
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand with dumbbell held behind your back, arm straight, palm facing backward.",
      "Allow the dumbbell to roll down your fingers slightly.",
      "Flex your wrist to curl the dumbbell up.",
      "Squeeze at the top of the movement.",
      "Lower the weight back down slowly."
    ],
    "tips": [
      "Wrist only",
      "Don’t swing arm",
      "Full wrist flexion",
      "Controlled lowering"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-bent-over-row",
    "name": "Dumbbell Bent-Over Row",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Stand with feet shoulder-width apart holding dumbbells.",
      "Hinge at hips, keeping back flat and chest up.",
      "Let arms hang straight down, palms facing each other.",
      "Pull dumbbells to your sides, elbows close to body.",
      "Lower the weights under control to starting position."
    ],
    "tips": [
      "Flat back",
      "Lead with elbows",
      "Engage core",
      "Squeeze shoulder blades"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-biceps-curl",
    "name": "Dumbbell Biceps Curl",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand tall with a dumbbell in each hand, arms at your sides, and palms facing forward.",
      "Brace your torso and keep your elbows close to your ribs.",
      "Curl both dumbbells up toward your shoulders without letting your upper arms swing forward.",
      "Pause briefly at the top and squeeze your biceps.",
      "Lower the dumbbells back down under control until your arms are straight."
    ],
    "tips": [
      "Elbows pinned to sides",
      "Curl, don't swing",
      "Squeeze at the top",
      "Lower with control"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-close-grip-press",
    "name": "Dumbbell Close-Grip Press",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Lie flat on a bench with a dumbbell in each hand.",
      "Hold dumbbells together above chest, palms in.",
      "Lower dumbbells toward sternum, elbows tight to torso.",
      "Pause when elbows reach 90 degrees.",
      "Press dumbbells back up by extending arms."
    ],
    "tips": [
      "Keep elbows close",
      "Touch dumbbells together",
      "Press through palms",
      "Own the descent"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-concentration-curl",
    "name": "Dumbbell Concentration Curl",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit on a bench with your feet flat and knees apart, holding a dumbbell in one hand.",
      "Lean forward slightly and brace the back of your upper arm against the inside of your same-side thigh near the knee.",
      "Let your arm hang straight down with your palm facing up and your wrist neutral.",
      "Curl the dumbbell toward your same-side shoulder without moving your upper arm.",
      "Squeeze your biceps at the top when your forearm is nearly vertical.",
      "Lower the dumbbell slowly until your elbow is fully extended, then repeat and switch sides."
    ],
    "tips": [
      "Keep elbow glued to thigh",
      "Curl only at the elbow",
      "Palm stays facing up",
      "Lower with control"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-cross-body-hammer-curl",
    "name": "Dumbbell Cross Body Hammer Curl",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand tall holding a dumbbell in each hand at your sides with your palms facing inward.",
      "Brace your torso and keep your elbows pinned close to your ribs.",
      "Curl one dumbbell diagonally across your body toward the opposite shoulder without swinging.",
      "Pause briefly near shoulder height while keeping your wrist straight and palm facing inward.",
      "Lower the dumbbell back to your side under control.",
      "Repeat on the other arm, alternating sides."
    ],
    "tips": [
      "Elbows stay tucked",
      "Curl across, not straight up",
      "Keep wrists neutral",
      "Don't swing the weight"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-deadlift",
    "name": "Dumbbell Deadlift",
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Stand tall with your feet hip- to shoulder-width apart, holding a dumbbell in each hand in front of your thighs.",
      "Brace your midsection, pull your shoulders back, and keep your arms straight.",
      "Push your hips back and bend your knees slightly as you slide the dumbbells down close to your legs.",
      "Lower until the dumbbells reach around mid-shin or just below your knees while keeping your back flat.",
      "Drive through your feet and push your hips forward to stand back up with the dumbbells at your thighs.",
      "Finish tall with your hips and knees straight, then repeat the hinge."
    ],
    "tips": [
      "Hips back first",
      "Keep dumbbells close",
      "Chest proud",
      "Stand tall at top"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-fly",
    "name": "Dumbbell Fly",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie flat on a bench holding a dumbbell in each hand, and plant your feet on the floor.",
      "Press the dumbbells above your chest with your palms facing each other and soften your elbows slightly.",
      "Lower both arms out to the sides in a wide arc until your elbows reach about chest level.",
      "Pause briefly at the bottom while keeping the same elbow bend.",
      "Squeeze your chest and bring the dumbbells back together over your chest along the same arc."
    ],
    "tips": [
      "Hug a wide barrel",
      "Keep elbows softly bent",
      "Lower with control",
      "Squeeze chest at the top"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-fly-on-exercise-ball",
    "name": "Dumbbell Fly On Exercise Ball",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Sit on the exercise ball holding a dumbbell in each hand at your thighs.",
      "Walk your feet forward and roll down until your head, neck, and upper back rest on the ball, then lift your hips so your torso is level.",
      "Press the dumbbells above your chest with your palms facing each other and your elbows slightly bent.",
      "Lower your arms out to the sides in a wide arc while keeping the same small bend in your elbows.",
      "Stop when your upper arms are roughly in line with your torso and your chest feels stretched.",
      "Bring the dumbbells back together over your chest along the same arc and squeeze your chest at the top."
    ],
    "tips": [
      "Keep hips up",
      "Soft bend in elbows",
      "Open wide, not too low",
      "Bring bells together smoothly"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-front-raise",
    "name": "Dumbbell Front Raise",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand tall with a dumbbell in each hand at your thighs, palms facing your legs.",
      "Brace your torso and keep a soft bend in your elbows.",
      "Raise both dumbbells straight in front of you until your hands reach about shoulder height.",
      "Pause briefly without shrugging your shoulders.",
      "Lower the dumbbells back to your thighs with control.",
      "Repeat from a still, upright stance."
    ],
    "tips": [
      "Lift to shoulder height",
      "Keep ribs down",
      "Lead with your hands",
      "Don't shrug up"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-goblet-squat",
    "name": "Dumbbell Goblet Squat",
    "primaryMuscles": [
      "quads"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Stand tall with your feet about shoulder-width apart and hold one dumbbell vertically at your chest with both hands.",
      "Brace your midsection and keep your elbows pointed down close to your body.",
      "Sit your hips down and back while bending your knees, and lower until your thighs are parallel to the floor or slightly lower.",
      "Keep the dumbbell tight to your chest and your feet flat as your knees track over your toes.",
      "Drive through your whole foot to stand back up until your hips and knees are fully extended.",
      "Reset your stance and repeat the next rep."
    ],
    "tips": [
      "Chest up",
      "Keep heels down",
      "Knees track over toes",
      "Hold the bell close"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-hammer-grip-incline-bench-row",
    "name": "Dumbbell Hammer Grip Incline Bench Row",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Set an incline bench to 30-45 degrees and lie facedown with dumbbells.",
      "Hold the dumbbells with palms facing each other (neutral/hammer grip).",
      "Pull the dumbbells up toward your hips, elbows close to your body.",
      "Pause and contract your back muscles at the top.",
      "Lower the weights slowly with control."
    ],
    "tips": [
      "Chest on bench",
      "Elbows tight",
      "No shrugging",
      "Full squeeze"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-incline-bench-press",
    "name": "Dumbbell Incline Bench Press",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Set an incline bench and sit back with a dumbbell in each hand resting on your thighs.",
      "Lie back on the bench and bring the dumbbells to chest level with your palms facing forward.",
      "Plant your feet on the floor and position your elbows slightly below shoulder height.",
      "Press the dumbbells up over your upper chest until your arms are straight.",
      "Lower the dumbbells under control to the sides of your upper chest.",
      "Repeat by pressing back up along the same path."
    ],
    "tips": [
      "Keep wrists stacked",
      "Drive feet into floor",
      "Lower with control",
      "Press over upper chest"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-incline-biceps-curl",
    "name": "Dumbbell Incline Biceps Curl",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Set the bench to a 45-60 degree incline and sit back with a dumbbell in each hand.",
      "Let your arms hang fully extended at your sides, elbows near your body.",
      "Curl the dumbbells up by flexing your elbows, keeping upper arms stationary.",
      "Pause and squeeze your biceps at the top of the movement.",
      "Lower the weights under control to the starting position."
    ],
    "tips": [
      "Keep elbows still",
      "Let arms fully extend",
      "Do not swing weights",
      "Squeeze at the top"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-incline-curl",
    "name": "Dumbbell Incline Curl",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Set an incline bench and sit back with a dumbbell in each hand.",
      "Let your arms hang straight down under your shoulders with your palms facing forward.",
      "Keep your upper arms still and curl the dumbbells toward your shoulders.",
      "Pause briefly at the top and squeeze your biceps.",
      "Lower the dumbbells slowly until your elbows are fully straight again."
    ],
    "tips": [
      "Keep elbows still",
      "Palms stay forward",
      "Lift with the biceps",
      "Lower under control"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-incline-fly",
    "name": "Dumbbell Incline Fly",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Set an incline bench and sit with a dumbbell in each hand on your thighs.",
      "Lie back and press the dumbbells above your upper chest with your palms facing each other.",
      "Bend your elbows slightly and keep that bend locked in.",
      "Lower the dumbbells out to your sides in a wide arc until they reach chest level or a gentle chest stretch.",
      "Squeeze your chest to bring the dumbbells back together over your upper chest along the same arc.",
      "Stop with the dumbbells nearly touching and repeat."
    ],
    "tips": [
      "Soft elbows, fixed angle",
      "Open wide, not too low",
      "Squeeze chest at the top",
      "Keep shoulders down"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-incline-fly-on-exercise-ball",
    "name": "Dumbbell Incline Fly On Exercise Ball",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Hold a dumbbell in each hand and position your upper back on the exercise ball so your torso is angled upward.",
      "Plant your feet firmly on the floor and raise the dumbbells above your upper chest with your palms facing each other.",
      "Keep a soft bend in your elbows and lower your arms out to the sides in a wide arc.",
      "Stop when your elbows are roughly level with your chest and you feel your chest stretch.",
      "Squeeze your chest and bring the dumbbells back up along the same arc until they meet above your chest."
    ],
    "tips": [
      "Keep elbows slightly bent",
      "Open wide under control",
      "Lift through your chest",
      "Feet planted, hips steady"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-incline-hammer-curl",
    "name": "Dumbbell Incline Hammer Curl",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Set an incline bench and sit back with a dumbbell in each hand.",
      "Let your arms hang straight down by your sides with your palms facing each other.",
      "Keep your upper arms still and curl both dumbbells toward your shoulders.",
      "Stop when your forearms are nearly vertical and squeeze your biceps.",
      "Lower the dumbbells slowly until your elbows are fully straight again.",
      "Repeat without swinging your torso or letting your shoulders roll forward."
    ],
    "tips": [
      "Palms face each other",
      "Keep elbows pinned",
      "Lift, don't swing",
      "Lower under control"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-incline-hammer-press",
    "name": "Dumbbell Incline Hammer Press",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Set an incline bench and sit with a dumbbell in each hand on your thighs.",
      "Lie back on the bench and bring the dumbbells to chest height with your palms facing each other.",
      "Plant your feet, pull your shoulder blades back into the bench, and keep your wrists stacked over your elbows.",
      "Press the dumbbells upward until your arms are straight above your upper chest.",
      "Lower the dumbbells under control until they return to chest level with your palms still facing in.",
      "Repeat the press without bouncing the dumbbells off your chest or shoulders."
    ],
    "tips": [
      "Drive up over upper chest",
      "Keep palms facing in",
      "Pin shoulders to bench",
      "Wrists stacked over elbows"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-incline-rear-lateral-raise",
    "name": "Dumbbell Incline Rear Lateral Raise",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Set an incline bench to about 45 degrees and hold a dumbbell in each hand.",
      "Lie face down with your chest supported on the bench and let your arms hang straight below your shoulders.",
      "Turn your palms to face each other and keep a soft bend in your elbows.",
      "Raise both arms out and slightly back until they reach shoulder height.",
      "Squeeze your rear shoulders and upper back at the top.",
      "Lower the dumbbells with control back to the starting position."
    ],
    "tips": [
      "Lead with your elbows",
      "Chest stays on the pad",
      "Lift to shoulder height",
      "Control the lowering"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-incline-row",
    "name": "Dumbbell Incline Row",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Set an incline bench to a moderate angle and lie face down with your chest supported and feet planted on the floor.",
      "Hold a dumbbell in each hand with your arms hanging straight down and palms facing each other.",
      "Brace your midline and pull your shoulders down and back.",
      "Row the dumbbells up toward your lower ribs by bending your elbows and driving them back.",
      "Squeeze your upper back at the top without lifting your chest off the bench.",
      "Lower the dumbbells under control until your arms are fully extended again."
    ],
    "tips": [
      "Lead with the elbows",
      "Keep chest on the pad",
      "Squeeze shoulder blades together",
      "Lower with control"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-incline-shrug",
    "name": "Dumbbell Incline Shrug",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Set an incline bench to about 45 degrees and sit with your chest supported against the pad.",
      "Hold a dumbbell in each hand and let your arms hang straight down at your sides with your palms facing in.",
      "Plant your feet firmly on the floor and keep your chest against the bench.",
      "Lift your shoulders straight up toward your ears without bending your elbows.",
      "Pause briefly at the top, then lower your shoulders back down under control.",
      "Repeat from a dead hang each rep."
    ],
    "tips": [
      "Arms stay long",
      "Shrug straight up",
      "Keep chest on pad",
      "Lower with control"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-incline-triceps-extension",
    "name": "Dumbbell Incline Triceps Extension",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit back on an incline bench holding a dumbbell in each hand.",
      "Press the dumbbells overhead with your palms facing each other.",
      "Keep your elbows pointed up and close to your head.",
      "Lower the dumbbells behind your head by bending only your elbows.",
      "Pause briefly when your forearms are below parallel to the floor.",
      "Straighten your elbows to raise the dumbbells back overhead."
    ],
    "tips": [
      "Elbows stay tucked",
      "Upper arms stay still",
      "Lower with control",
      "Finish straight overhead"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-iron-cross",
    "name": "Dumbbell Iron Cross",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand tall with a dumbbell in each hand at your sides and your feet about hip-width apart.",
      "Hold a slight bend in your elbows and turn your palms toward your sides.",
      "Raise both arms out to the sides until your hands reach shoulder height.",
      "Pause briefly with your shoulders level and your wrists in line with your elbows.",
      "Lower the dumbbells back to your sides with control.",
      "Repeat without swinging your torso or bouncing the weights."
    ],
    "tips": [
      "Lead with the elbows",
      "Lift to shoulder height",
      "Keep shoulders down",
      "Move with control"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-kickback",
    "name": "Dumbbell Kickback",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand with a dumbbell in each hand and hinge forward at the hips with a flat back.",
      "Bend your elbows to about 90 degrees and pin your upper arms alongside your torso.",
      "Brace your torso and keep your elbows still.",
      "Straighten your arms by driving the dumbbells back until your elbows are fully extended.",
      "Squeeze your triceps at the back of the movement.",
      "Bend your elbows under control to return to the start position."
    ],
    "tips": [
      "Keep elbows glued in",
      "Only move the forearms",
      "Squeeze at full extension",
      "Keep your back flat"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-lateral-raise",
    "name": "Dumbbell Lateral Raise",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand tall with a dumbbell in each hand at your sides, palms facing in.",
      "Set your shoulders down and brace your midsection.",
      "Raise both arms out to the sides until your hands reach about shoulder height, keeping a soft bend in your elbows.",
      "Pause briefly at the top without shrugging your shoulders.",
      "Lower the dumbbells back to your sides with control."
    ],
    "tips": [
      "Lead with your elbows",
      "Stop at shoulder height",
      "Keep shoulders down",
      "Soft bend in elbows"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-lunge",
    "name": "Dumbbell Lunge",
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Stand tall with a dumbbell in each hand at your sides and your feet hip-width apart.",
      "Step one foot forward far enough that both knees can bend comfortably.",
      "Lower your body until your front thigh is nearly parallel to the floor and your back knee drops toward the floor.",
      "Keep your torso upright and your front foot flat as you pause briefly at the bottom.",
      "Push through your front heel to return to standing.",
      "Repeat on the other side, alternating legs each rep."
    ],
    "tips": [
      "Chest tall",
      "Front heel stays down",
      "Knees track over toes",
      "Drop straight down"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-lying-alternate-extension",
    "name": "Dumbbell Lying Alternate Extension",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie flat on a bench holding a dumbbell in each hand, and press both arms straight up over your chest with palms facing each other.",
      "Keep one arm still above your chest as you bend the other elbow and lower that dumbbell beside your forehead.",
      "Stop when your forearm points down and your upper arm stays mostly vertical.",
      "Straighten the bent arm to bring the dumbbell back above your chest.",
      "Repeat on the other side while keeping the first arm locked out.",
      "Continue alternating sides with both shoulders and head resting on the bench."
    ],
    "tips": [
      "Elbows point to the ceiling",
      "Only move at the elbow",
      "Keep one arm locked out",
      "Lower beside your forehead"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-lying-hammer-press",
    "name": "Dumbbell Lying Hammer Press",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Lie flat on a bench holding a dumbbell in each hand, and press the dumbbells above your chest with your palms facing each other.",
      "Plant your feet on the floor and brace your torso while keeping your wrists stacked over your elbows.",
      "Lower the dumbbells under control to either side of your chest, keeping your elbows slightly tucked from your shoulders.",
      "Pause briefly when your upper arms reach bench level or the dumbbells lightly touch your chest line.",
      "Press the dumbbells straight up until your arms are extended above your chest, keeping the palms facing each other throughout.",
      "Bring the dumbbells back together over your chest and repeat."
    ],
    "tips": [
      "Keep palms facing in",
      "Tuck elbows slightly",
      "Press over mid-chest",
      "Keep wrists straight"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-lying-leg-curl",
    "name": "Dumbbell Lying Leg Curl",
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Lie face down on a bench, legs straight, dumbbell held between your feet.",
      "Hold onto the bench for stability.",
      "Contract your hamstrings to curl the dumbbell upward toward your glutes.",
      "Pause at the top of the movement.",
      "Lower the dumbbell in a controlled motion to the starting position."
    ],
    "tips": [
      "Keep hips down",
      "Squeeze at top",
      "Control the descent",
      "Engage hamstrings"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-lying-rear-delt-row",
    "name": "Dumbbell Lying Rear Delt Row",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Lie face down on a flat bench holding a dumbbell in each hand, with your chest supported and arms hanging straight down.",
      "Set your feet firmly on the floor and turn your palms to face each other.",
      "Pull your elbows out to the sides and row the dumbbells up toward your upper chest.",
      "Squeeze your upper back at the top while keeping your chest on the bench.",
      "Lower the dumbbells back down under control until your arms are straight again.",
      "Repeat without swinging the weights or shrugging your shoulders."
    ],
    "tips": [
      "Lead with the elbows",
      "Chest stays on the bench",
      "Pull wide, not low",
      "Squeeze shoulder blades together"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-lying-triceps-extension",
    "name": "Dumbbell Lying Triceps Extension",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie flat on a bench holding a dumbbell in each hand, and press the dumbbells above your chest with your palms facing each other.",
      "Pull your shoulders down into the bench and straighten your wrists so the dumbbells stay stacked over your elbows.",
      "Bend your elbows and lower the dumbbells toward the sides of your forehead while keeping your upper arms mostly still.",
      "Stop when your elbows are fully bent and the dumbbells are close to your head.",
      "Straighten your elbows to drive the dumbbells back to the start position above your chest.",
      "Repeat each rep without letting your elbows flare wide."
    ],
    "tips": [
      "Keep elbows tucked",
      "Upper arms stay still",
      "Bend only at elbows",
      "Stack wrists over elbows"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-one-arm-lateral-raise",
    "name": "Dumbbell One Arm Lateral Raise",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand tall with feet about hip-width apart and hold a dumbbell at one side with a slight bend in your elbow.",
      "Brace your core and keep your shoulders level as your free arm stays relaxed by your side or on your hip.",
      "Lift the dumbbell out to the side until your hand reaches about shoulder height.",
      "Pause briefly at the top without shrugging your shoulder toward your ear.",
      "Lower the dumbbell back to your side with control.",
      "Complete all reps on one arm, then switch sides."
    ],
    "tips": [
      "Lead with your elbow",
      "Stop at shoulder height",
      "Keep shoulders level",
      "Lower with control"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-one-arm-zottman-preacher-curl",
    "name": "Dumbbell One Arm Zottman Preacher Curl",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Sit at a preacher bench and plant your feet on the floor.",
      "Hold a dumbbell in one hand and place the back of your upper arm flat against the pad with your arm nearly straight.",
      "Start with your palm facing up and curl the dumbbell toward your shoulder without lifting your upper arm off the pad.",
      "Pause near the top and rotate your wrist until your palm faces down.",
      "Lower the dumbbell slowly until your arm is nearly straight while keeping your palm facing down.",
      "Rotate your wrist back to palm-up at the bottom and repeat before switching arms."
    ],
    "tips": [
      "Keep arm glued to pad",
      "Curl, then rotate",
      "Lower slowly on the way down",
      "Keep wrist movement controlled"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-one-arm-triceps-extension",
    "name": "Dumbbell One-Arm Triceps Extension",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Hold dumbbell in one hand, arm extended overhead.",
      "Support upper arm with free hand if needed.",
      "Lower dumbbell behind head by bending the elbow.",
      "Pause when forearm is parallel to ground.",
      "Extend arm fully to return to starting position."
    ],
    "tips": [
      "Keep upper arm vertical",
      "Only move forearm",
      "No swinging",
      "Full elbow extension"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-over-bench-wrist-curl",
    "name": "Dumbbell Over Bench Wrist Curl",
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit at a bench and place your forearms on top with your palms facing up.",
      "Hold a dumbbell in each hand and slide forward until your wrists hang just past the bench edge.",
      "Let your hands lower to gently stretch your wrists at the bottom.",
      "Curl your wrists up by lifting your knuckles toward your forearms.",
      "Squeeze your forearms briefly at the top.",
      "Lower the dumbbells back down under control until your wrists extend again."
    ],
    "tips": [
      "Move only your wrists",
      "Forearms stay glued down",
      "Curl through full range",
      "Lower slowly"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-palm-rotational-bent-over-row",
    "name": "Dumbbell Palm Rotational Bent Over Row",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Stand with your feet hip-width apart, holding a dumbbell in each hand with your arms straight and palms facing each other.",
      "Hinge at your hips until your torso is leaned forward, soften your knees, and keep your back flat.",
      "Let the dumbbells hang below your shoulders and brace your core.",
      "Row both dumbbells toward your lower ribs by driving your elbows back.",
      "Rotate your palms as you lift until they face more backward or away from your body at the top.",
      "Pause and squeeze your upper back, then lower the dumbbells with control as you rotate your palms back to neutral."
    ],
    "tips": [
      "Keep your back flat",
      "Drive elbows back",
      "Rotate through the pull",
      "Squeeze shoulder blades together"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-preacher-curl-over-exercise-ball",
    "name": "Dumbbell Preacher Curl Over Exercise Ball",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit tall on the exercise ball with both feet flat and spread for balance.",
      "Hold a dumbbell in one hand with your palm facing up and brace the back of your upper arm against the ball.",
      "Let the arm straighten almost fully so the dumbbell hangs below your elbow.",
      "Curl the dumbbell toward your shoulder without lifting your elbow off the ball.",
      "Squeeze your biceps at the top while keeping your wrist straight.",
      "Lower the dumbbell slowly until your arm is almost straight, then repeat and switch sides."
    ],
    "tips": [
      "Keep elbow glued down",
      "Curl only at the elbow",
      "Keep wrist straight",
      "Lower under control"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-pronate-grip-triceps-extension",
    "name": "Dumbbell Pronate-grip Triceps Extension",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit tall on a bench or chair with both feet flat on the floor.",
      "Hold one dumbbell with both hands by the handle using an overhand grip and press it straight overhead.",
      "Bring your upper arms close to your ears and point your elbows forward.",
      "Lower the dumbbell behind your head by bending only your elbows.",
      "Stop when your forearms are below parallel and your upper arms stay mostly still.",
      "Straighten your elbows to raise the dumbbell back to the overhead start position."
    ],
    "tips": [
      "Elbows stay close in",
      "Upper arms stay still",
      "Brace your ribs down",
      "Lock out overhead"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-prone-incline-curl",
    "name": "Dumbbell Prone Incline Curl",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Set an incline bench to about 45 degrees and lie face down with your chest supported.",
      "Hold a dumbbell in each hand with your arms hanging straight down and palms facing forward.",
      "Keep your upper arms still and curl both dumbbells up toward your shoulders.",
      "Pause briefly at the top and squeeze your biceps.",
      "Lower the dumbbells slowly until your arms are fully extended again."
    ],
    "tips": [
      "Keep chest on bench",
      "Elbows stay still",
      "Curl through full range",
      "Lower with control"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-rear-delt-row",
    "name": "Dumbbell Rear Delt Row",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Stand with your feet hip- to shoulder-width apart, holding a dumbbell in each hand at your sides.",
      "Hinge at your hips until your torso is leaned forward, soften your knees, and let the dumbbells hang below your shoulders with your palms facing each other.",
      "Brace your core and keep your back flat as you pull your elbows up and out to the sides.",
      "Lift until your upper arms are roughly in line with your shoulders and squeeze your upper back.",
      "Lower the dumbbells under control to the start position and repeat."
    ],
    "tips": [
      "Lead with your elbows.",
      "Keep your back flat.",
      "Raise arms out, not back.",
      "Squeeze shoulder blades together."
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-seated-calf-raise",
    "name": "Dumbbell Seated Calf Raise",
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit on a bench or chair with your knees bent and place the balls of your feet on a small raised surface with your heels hanging off.",
      "Set a dumbbell across the tops of your thighs just above your knees and hold it steady with both hands.",
      "Let your heels drop down until you feel a stretch through your calves.",
      "Press through the balls of your feet and raise your heels as high as you can.",
      "Pause briefly at the top while keeping the dumbbell steady.",
      "Lower your heels back down under control and repeat."
    ],
    "tips": [
      "Drive through big toe",
      "Lift heels straight up",
      "Use full ankle range",
      "Control the lowering"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-seated-front-raise",
    "name": "Dumbbell Seated Front Raise",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit tall on a bench with your feet flat on the floor and a dumbbell in each hand at your sides.",
      "Hold the dumbbells with your palms facing down or slightly toward each other, and brace your midsection.",
      "Raise both arms straight forward until the dumbbells reach shoulder height.",
      "Pause briefly at the top without leaning back or shrugging your shoulders.",
      "Lower the dumbbells under control back to the starting position by your thighs.",
      "Repeat each rep with the same seated posture and arm path."
    ],
    "tips": [
      "Lift to shoulder height",
      "Keep torso still",
      "Soft bend in elbows",
      "Shoulders down and back"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-seated-kickback",
    "name": "Dumbbell Seated Kickback",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit on a bench holding a dumbbell in each hand with your feet flat on the floor.",
      "Hinge forward from your hips and keep your back flat with your chest angled toward your thighs.",
      "Pull your elbows up beside your torso and bend them to about 90 degrees.",
      "Keep your upper arms still and straighten your elbows to kick the dumbbells back behind you.",
      "Squeeze your triceps with your arms fully extended.",
      "Bend your elbows slowly to return the dumbbells to the start position."
    ],
    "tips": [
      "Keep elbows glued in",
      "Only move the forearms",
      "Back flat, chest up",
      "Squeeze at full extension"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-seated-lateral-raise",
    "name": "Dumbbell Seated Lateral Raise",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit upright on a bench with your feet flat on the floor and a dumbbell in each hand at your sides.",
      "Set your shoulders down and keep a soft bend in your elbows.",
      "Raise both arms out to your sides until the dumbbells reach about shoulder height.",
      "Pause briefly at the top without shrugging your shoulders.",
      "Lower the dumbbells back to your sides with control and repeat."
    ],
    "tips": [
      "Lead with your elbows",
      "Keep shoulders down",
      "Lift to shoulder height",
      "Control the lowering"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-seated-neutral-wrist-curl",
    "name": "Dumbbell Seated Neutral Wrist Curl",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit on a bench with your feet flat and hold a dumbbell in each hand with your palms facing each other.",
      "Rest your forearms on your thighs near your knees and let your wrists hang just past your knees.",
      "Start with your wrists straight and your hands hanging down under control.",
      "Curl the dumbbells upward by bending only at your wrists while keeping your forearms pressed into your thighs.",
      "Squeeze briefly at the top without turning your palms up or down.",
      "Lower the dumbbells slowly back to the start until your wrists are fully extended."
    ],
    "tips": [
      "Move only your wrists",
      "Keep palms facing in",
      "Forearms stay glued down",
      "Control the lowering"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-seated-preacher-curl",
    "name": "Dumbbell Seated Preacher Curl",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit on the preacher bench and plant your feet flat on the floor.",
      "Hold a dumbbell with your palm facing up and place the back of your upper arm firmly against the pad.",
      "Start with your arm nearly straight and let the dumbbell hang just above the bottom of the pad.",
      "Curl the dumbbell upward by bending your elbow while keeping your upper arm pressed into the pad.",
      "Lift until the dumbbell nears your shoulder and briefly squeeze your biceps.",
      "Lower the dumbbell slowly until your arm is nearly straight again, then repeat before switching sides."
    ],
    "tips": [
      "Keep upper arm glued down",
      "Curl only at the elbow",
      "Lower with control",
      "Squeeze at the top"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-seated-triceps-extension",
    "name": "Dumbbell Seated Triceps Extension",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit tall on a bench with both feet flat on the floor.",
      "Hold one dumbbell by the top end with both hands and press it straight overhead.",
      "Keep your upper arms close to your head and brace your torso.",
      "Bend your elbows to lower the dumbbell behind your head under control.",
      "Stop when your forearms are below parallel and your elbows stay pointed up.",
      "Straighten your elbows to raise the dumbbell back to the overhead start position."
    ],
    "tips": [
      "Elbows point up",
      "Keep biceps by ears",
      "Move only at elbows",
      "Brace your ribs down"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-shrug",
    "name": "Dumbbell Shrug",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand tall with a dumbbell in each hand at your sides and your feet about hip-width apart.",
      "Let your arms hang straight with your palms facing your body.",
      "Lift your shoulders straight up toward your ears without bending your elbows.",
      "Pause briefly at the top while keeping your torso still.",
      "Lower your shoulders back down under control to the start position and repeat."
    ],
    "tips": [
      "Shoulders straight up",
      "Arms stay long",
      "Neck relaxed",
      "Control the lowering"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-side-bend",
    "name": "Dumbbell Side Bend",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand tall with your feet about hip-width apart and hold a dumbbell in one hand at your side.",
      "Place your other hand on your hip or behind your head and brace your stomach.",
      "Keep your chest up and slowly bend your torso sideways away from the dumbbell.",
      "Lower the dumbbell down the side of your leg as far as you can without twisting or leaning forward.",
      "Squeeze your obliques and return to standing tall.",
      "Complete all reps on one side, then switch hands and repeat."
    ],
    "tips": [
      "Bend only to the side",
      "Keep chest tall",
      "Brace your core",
      "Move slowly and controlled"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-single-leg-calf-raise",
    "name": "Dumbbell Single Leg Calf Raise",
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand on the edge of a step with one foot, placing the ball of your foot on the step and letting your heel hang off.",
      "Hold a dumbbell in one hand and lightly brace your other hand on a wall or rail.",
      "Lift your nonworking foot off the step and straighten your standing leg.",
      "Press through the ball of your foot to raise your heel as high as you can.",
      "Pause briefly at the top while keeping your ankle stacked over your toes.",
      "Lower your heel slowly below the step until you feel a stretch in your calf.",
      "Complete all reps on one side, then switch legs."
    ],
    "tips": [
      "Push through your big toe",
      "Rise straight up",
      "Lower with control",
      "Keep hips level"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-single-leg-squat",
    "name": "Dumbbell Single Leg Squat",
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "advanced",
    "instructions": [
      "Stand tall holding a dumbbell in each hand at your sides.",
      "Shift your weight onto one foot and lift the other leg straight in front of you.",
      "Brace your torso and bend your standing knee and hip to lower under control.",
      "Keep the lifted leg off the floor and lower as far as you can while staying balanced.",
      "Drive through the standing foot to rise back to the starting position.",
      "Complete all reps on one leg, then switch sides."
    ],
    "tips": [
      "Chest up",
      "Sit back",
      "Keep knee tracking forward",
      "Control the descent"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-squat",
    "name": "Dumbbell Squat",
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Stand tall with a dumbbell in each hand at your sides and place your feet about shoulder-width apart.",
      "Brace your core, keep your chest up, and let your arms hang straight.",
      "Bend your hips and knees together to sit down and slightly back.",
      "Lower until your thighs are at least parallel to the floor or as low as you can while keeping your heels down.",
      "Drive through your midfoot and heels to stand back up.",
      "Finish tall with your hips and knees fully straight before the next rep."
    ],
    "tips": [
      "Chest up",
      "Knees track over toes",
      "Keep heels down",
      "Stand tall at top"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-standing-calf-raise",
    "name": "Dumbbell Standing Calf Raise",
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand upright with a dumbbell in each hand and place your feet about hip-width apart.",
      "Let your arms hang by your sides and keep your knees softly bent.",
      "Press through the balls of your feet and lift your heels as high as you can.",
      "Pause briefly at the top while staying tall through your torso.",
      "Lower your heels back to the floor with control and repeat."
    ],
    "tips": [
      "Rise straight up",
      "Press through big toe",
      "Control the lowering",
      "Keep torso tall"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-stiff-leg-deadlift",
    "name": "Dumbbell Stiff Leg Deadlift",
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Stand tall with your feet hip-width apart, holding a dumbbell in each hand in front of your thighs.",
      "Soften your knees slightly and brace your midsection.",
      "Push your hips straight back and slide the dumbbells down the front of your legs.",
      "Lower until the dumbbells reach mid-shin or you feel a strong hamstring stretch while keeping your back flat.",
      "Drive your feet into the floor and extend your hips to stand back up.",
      "Finish tall with the dumbbells at your thighs and repeat."
    ],
    "tips": [
      "Hips back, not down",
      "Keep dumbbells close",
      "Back flat the whole time",
      "Feel the hamstring stretch"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-sumo-squat",
    "name": "Dumbbell Sumo Squat",
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Stand with feet wide apart, toes angled outward.",
      "Grip the dumbbell vertically between your legs.",
      "Keep chest up and core braced.",
      "Squat down, pushing knees outward.",
      "Drive through heels to stand up."
    ],
    "tips": [
      "Knees out",
      "Keep chest tall",
      "Sit hips back",
      "Drive through heels"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dumbbell-upright-row",
    "name": "Dumbbell Upright Row",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Stand tall with a dumbbell in each hand in front of your thighs, palms facing your body.",
      "Brace your midsection and keep your chest lifted.",
      "Pull the dumbbells straight up along the front of your body by driving your elbows up and out.",
      "Raise until the dumbbells reach about upper-chest height and your elbows stay higher than your hands.",
      "Pause briefly, then lower the dumbbells back to your thighs with control."
    ],
    "tips": [
      "Lead with your elbows",
      "Keep dumbbells close",
      "Shoulders down and back",
      "Lift to upper chest"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "dynamic-chest-stretch",
    "name": "Dynamic Chest Stretch",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand with your feet shoulder-width apart.",
      "Extend both arms out to your sides at shoulder height.",
      "Swing your arms forward, crossing them in front of your chest.",
      "Open your arms wide, stretching your chest as you do.",
      "Repeat the swinging motion for the desired number of repetitions."
    ],
    "tips": [
      "Keep movements controlled",
      "Maintain upright posture",
      "Engage core",
      "Avoid twisting torso"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "elliptical-trainer",
    "name": "Elliptical Trainer",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Step onto the pedals and hold the handles.",
      "Select desired resistance and incline.",
      "Begin moving feet in a smooth, elliptical pattern.",
      "Push and pull the handles with your arms in sync with your strides.",
      "Maintain a steady cadence and upright posture."
    ],
    "tips": [
      "Keep chest up",
      "Balance weight evenly",
      "Smooth, controlled motion",
      "Engage core lightly"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "exercise-ball-sit-up",
    "name": "Exercise Ball Sit-Up",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "other",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit on the exercise ball with feet flat on the floor.",
      "Walk feet forward, rolling until the ball supports your lower back.",
      "Cross arms over your chest or position hands behind your head.",
      "Engage your core and sit up, lifting your upper body.",
      "Lower back down under control to starting position."
    ],
    "tips": [
      "Keep feet planted",
      "Avoid pulling neck",
      "Engage abs throughout",
      "Do not arch lower back"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "exercise-ball-spinal-stretch",
    "name": "Exercise Ball Spinal Stretch",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "other",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit on the exercise ball with feet hip-width apart.",
      "Slowly walk your feet forward, rolling until your back is draped over the ball.",
      "Let your arms extend overhead or rest beside you for support.",
      "Relax into the stretch, allowing your spine to gently extend.",
      "Hold for the desired duration, then carefully return to a seated position."
    ],
    "tips": [
      "Move slowly and controlled",
      "Keep feet planted",
      "Relax neck and shoulders",
      "Breathe deeply"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "ez-bar-biceps-curl",
    "name": "EZ Bar Biceps Curl",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Grip the EZ bar at angled sections, palms facing up.",
      "Stand tall with arms fully extended and elbows anchored.",
      "Curl the bar upward, contracting the biceps.",
      "Pause and squeeze at the top.",
      "Lower the bar down slowly."
    ],
    "tips": [
      "Keep elbows stationary",
      "Use full range of motion",
      "Don't swing the bar",
      "Control tempo"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "ez-bar-lying-triceps-extension",
    "name": "EZ Bar Lying Triceps Extension",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Lie on bench, grip EZ bar with medium width.",
      "Extend arms fully above chest.",
      "Bend elbows, lowering bar toward forehead.",
      "Keep upper arms stationary.",
      "Extend to starting position, repeat."
    ],
    "tips": [
      "Lock upper arms",
      "Lower with control",
      "Don't move elbows",
      "Full triceps extension"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "ez-barbell-anti-gravity-press",
    "name": "EZ Barbell Anti Gravity Press",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Stand tall with your feet about hip- to shoulder-width apart and hold the EZ bar at shoulder height with an overhand grip.",
      "Brace your core and keep your wrists stacked over your elbows.",
      "Press the bar straight overhead until your arms are fully extended above your shoulders.",
      "Move your head slightly back as the bar passes your face, then bring your head through under the bar at the top.",
      "Lower the bar under control back to shoulder height.",
      "Repeat each rep from a stable standing position."
    ],
    "tips": [
      "Press straight overhead",
      "Ribs down, core tight",
      "Wrists stacked over elbows",
      "Head through at top"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "feet-and-ankles-rotation-stretch",
    "name": "Feet and Ankles Rotation Stretch",
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit or stand and lift one foot off the ground.",
      "Point your toes and slowly rotate your ankle in circles.",
      "Make several circles clockwise, then reverse to counterclockwise.",
      "Repeat for the other ankle.",
      "Maintain steady breathing and controlled motion."
    ],
    "tips": [
      "Move slowly",
      "Full range of motion",
      "Relax foot",
      "Rotate both directions"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "feet-and-ankles-stretch",
    "name": "Feet and Ankles Stretch",
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit or stand with legs extended or positioned comfortably.",
      "Point your toes downward to stretch the top of your feet and fronts of your ankles.",
      "Flex your toes upward toward your shins to stretch the calves and back of the ankles.",
      "Hold each position for 15-30 seconds.",
      "Repeat the sequence for several reps."
    ],
    "tips": [
      "Move slowly through each phase",
      "Hold gentle tension, do not force",
      "Keep knees extended but soft",
      "Breathe evenly"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "flat-bench-cable-fly",
    "name": "Flat Bench Cable Fly",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Set a flat bench between two cable pulleys and attach handles.",
      "Lie back and grip each handle with arms extended.",
      "With elbows slightly bent, bring handles together above your chest.",
      "Squeeze your chest at the top.",
      "Slowly return to the starting position with control."
    ],
    "tips": [
      "Maintain slight elbow bend",
      "Keep arms wide",
      "Control both directions",
      "Avoid overstretching"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "flexion-leg-sit-up-stretch",
    "name": "Flexion Leg Sit-Up Stretch",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie on your back with knees bent and feet flat on the floor.",
      "Cross arms over chest or reach toward knees.",
      "Contract abdominal muscles to sit up, curling your spine.",
      "Reach for your knees at the top to enhance the stretch.",
      "Lower back to starting position with control."
    ],
    "tips": [
      "Curl up slowly",
      "Avoid pulling on neck",
      "Engage core throughout",
      "Keep feet flat"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "floor-crunch",
    "name": "Floor Crunch",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie on your back with knees bent and feet hip-width apart.",
      "Place hands lightly behind head or cross over chest.",
      "Engage core and lift shoulders off the floor.",
      "Pause briefly at the top of the movement.",
      "Slowly return to the starting position."
    ],
    "tips": [
      "Keep chin off chest",
      "Lower back pressed to floor",
      "Controlled movement",
      "Exhale on crunch"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "front-plank",
    "name": "Front Plank",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Lie face down, placing forearms on the ground and elbows under shoulders.",
      "Lift your body off the floor, supporting weight on forearms and toes.",
      "Keep your body in a straight line from head to heels.",
      "Engage your core and glutes for stability.",
      "Hold the position for the prescribed time, then lower to the ground."
    ],
    "tips": [
      "Keep core tight",
      "Neutral spine",
      "Do not let hips drop",
      "Look down"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "front-toe-touch-stretch",
    "name": "Front Toe Touch Stretch",
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand (or sit) with legs straight.",
      "Bend slowly forward from the hips, keeping a flat back.",
      "Reach towards or touch your toes with your hands.",
      "Keep knees straight but not locked.",
      "Hold stretch, then return to starting position."
    ],
    "tips": [
      "Hinge at hips",
      "Keep head in line with spine",
      "Reach gently, don’t bounce",
      "Keep legs straight"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "glute-bridge",
    "name": "Glute Bridge",
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Start lying on back with knees bent, feet hip-width apart.",
      "Arms rest at sides, palms down.",
      "Push through heels, lifting hips toward ceiling.",
      "Pause and squeeze glutes at top.",
      "Lower hips back to floor."
    ],
    "tips": [
      "Drive through heels",
      "Squeeze glutes",
      "Don't overarch back",
      "Keep knees in line"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "hanging-leg-hip-raise",
    "name": "Hanging Leg Hip Raise",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Hang from the bar with both hands and let your body settle into a dead hang.",
      "Pull your ribs down and brace your midsection to stop excess swinging.",
      "Bend your knees and lift them toward your chest by curling your hips upward.",
      "Raise until your thighs are at least parallel to the floor or your knees reach hip height.",
      "Pause briefly at the top while keeping your torso steady.",
      "Lower your legs with control until you return to a full hang."
    ],
    "tips": [
      "Curl pelvis up",
      "Control the swing",
      "Ribs down",
      "Lift knees, not shoulders"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "hanging-straight-leg-raise",
    "name": "Hanging Straight Leg Raise",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Hang from a pull-up bar with arms fully extended.",
      "Keep legs together and straight.",
      "Engage core and lift legs up to parallel or higher.",
      "Pause briefly at the top.",
      "Lower legs under control to starting position."
    ],
    "tips": [
      "Avoid swinging",
      "Lift with core, not momentum",
      "Keep legs straight",
      "Control leg descent"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "hip-circles-stretch",
    "name": "Hip Circles Stretch",
    "primaryMuscles": [
      "quads"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand tall with feet shoulder-width apart, hands on hips.",
      "Lift one knee up in front of you.",
      "Move your knee and thigh in a circular motion outward.",
      "Reverse and perform circles inward after the set.",
      "Switch legs and repeat."
    ],
    "tips": [
      "Move leg from the hip",
      "Keep upper body stable",
      "Smooth, controlled circles",
      "Breathe steadily"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "hip-extension-stretch",
    "name": "Hip Extension Stretch",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie face down with legs extended.",
      "Place hands beneath shoulders, elbows bent.",
      "Press palms into floor, lifting chest and gently extending hips.",
      "Hold the stretch at a comfortable tension.",
      "Slowly lower back down."
    ],
    "tips": [
      "Avoid excessive back arch",
      "Keep hips on floor",
      "Press through palms",
      "Stretch gradually"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "hip-flexor-and-quadriceps-stretch",
    "name": "Hip Flexor and Quadriceps Stretch",
    "primaryMuscles": [
      "quads"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Begin in a half-kneeling position, one knee down, one foot forward.",
      "Keep torso upright with hands on hips or front knee.",
      "Push hips forward slightly to increase the stretch.",
      "Feel the stretch in the hip flexor and thigh of the back leg.",
      "Hold for desired time, then switch legs."
    ],
    "tips": [
      "Keep core engaged",
      "Torso upright",
      "Push hips forward gently",
      "Don't arch lower back"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "incline-leg-hip-raise",
    "name": "Incline Leg Hip Raise",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Lie face up on an incline bench and grip the handles behind your head.",
      "Extend your legs straight and keep them together.",
      "Raise your legs towards your chest, lifting your hips off the bench.",
      "Pause at the top, focusing on contracting your abs.",
      "Lower your legs under control to the starting position."
    ],
    "tips": [
      "Keep legs straight",
      "Lift hips at top",
      "Control lowering",
      "Don't use momentum"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "incline-push-up",
    "name": "Incline Push-Up",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Place hands shoulder-width apart on elevated surface.",
      "Extend legs back with feet together, forming a straight line.",
      "Lower chest toward the surface, elbows at 45 degrees.",
      "Pause when chest is just above the surface.",
      "Push back up to starting position."
    ],
    "tips": [
      "Maintain straight line body",
      "Core engaged",
      "Lower under control",
      "Exhale as you push up"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "inverted-row-between-chairs",
    "name": "Inverted Row Between Chairs",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Set up a sturdy bar between two heavy chairs.",
      "Lie underneath with your chest directly below the bar.",
      "Grip the bar with an overhand, shoulder-width grip.",
      "Brace your body, keeping a straight line from head to heels.",
      "Pull your chest to the bar, pause, then lower yourself slowly."
    ],
    "tips": [
      "Keep your body straight",
      "Squeeze shoulder blades",
      "Don't let hips sag",
      "Pull to chest, not neck"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "inverted-row-with-straps",
    "name": "Inverted Row With Straps",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Set the straps to about chest height and stand facing the anchor point.",
      "Grab the handles with an overhand grip and walk your feet forward until your body leans back in a straight line.",
      "Brace your core and keep your heels planted with your arms fully extended.",
      "Pull your chest toward the handles by driving your elbows back and squeezing your shoulder blades together.",
      "Pause briefly when your hands reach your ribs or chest.",
      "Lower yourself with control until your arms are straight again."
    ],
    "tips": [
      "Keep body in one line",
      "Drive elbows back",
      "Squeeze shoulder blades",
      "Keep shoulders down"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "iron-cross-stretch",
    "name": "Iron Cross Stretch",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie on your back with arms extended out to the sides.",
      "Lift one leg straight up towards the ceiling.",
      "Sweep the raised leg across your body to the opposite side.",
      "Allow your foot to touch or lower towards the floor.",
      "Hold the stretch, then switch legs."
    ],
    "tips": [
      "Shoulders stay flat",
      "Sweep leg slowly",
      "Breathe deeply into stretch",
      "Relax into the twist"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "jackknife",
    "name": "Jackknife",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Lie on your back with arms at your sides and legs extended.",
      "Engage your core and lift legs towards the ceiling.",
      "Continue lifting hips off the mat, reaching feet upward.",
      "Pause at the top with hips elevated.",
      "Slowly roll back down vertebra by vertebra."
    ],
    "tips": [
      "Keep legs straight",
      "Lift with core",
      "Control the descent",
      "Avoid swinging"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "jackknife-floor",
    "name": "Jackknife Floor",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Lie flat with arms extended overhead and legs straight.",
      "Engage your core, lift arms and legs toward each other.",
      "Reach hands toward feet, forming a 'V' at the top.",
      "Pause briefly, squeezing at the top.",
      "Lower back down slowly to starting position."
    ],
    "tips": [
      "Keep legs straight",
      "Lift arms and legs together",
      "Do not swing",
      "Control the descent"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "jackknife-split-crunch",
    "name": "Jackknife Split Crunch",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Lie on your back with arms extended overhead and legs straight.",
      "Engage your core and simultaneously lift your torso and legs off the ground.",
      "As you rise, spread your legs into a split while reaching your hands toward your feet.",
      "Pause at the top, squeezing your abs.",
      "Lower your legs and torso back to the ground with control, bringing feet together."
    ],
    "tips": [
      "Keep core tight",
      "Don't arch lower back",
      "Lead with chest",
      "Controlled split"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "jump-rope",
    "name": "Jump Rope",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [],
    "equipment": "other",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Hold a handle in each hand with the rope behind your heels.",
      "Stand tall with feet close together and elbows tucked by your sides.",
      "Turn the rope with your wrists and swing it up overhead.",
      "Hop just high enough to clear the rope as it passes under your feet.",
      "Land softly on the balls of your feet with knees slightly bent.",
      "Keep the rope moving in a smooth rhythm and repeat each jump."
    ],
    "tips": [
      "Turn with the wrists",
      "Stay light on your feet",
      "Jump only as needed",
      "Keep elbows close"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "jump-step-up",
    "name": "Jump Step-Up",
    "primaryMuscles": [
      "quads"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Stand facing a sturdy box or platform.",
      "Place one foot firmly on top of the box.",
      "Drive through the heel and explode upward, lifting your other knee high.",
      "Land softly on the box with both feet.",
      "Step or jump down with control and repeat."
    ],
    "tips": [
      "Drive explosively through the lead leg",
      "Land softly",
      "Keep chest lifted",
      "Use arms for balance"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "jumping-jack",
    "name": "Jumping Jack",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Start with feet together and arms relaxed at your sides.",
      "Jump feet out to shoulder-width as you raise arms overhead.",
      "Briefly touch hands or keep arms straight above head.",
      "Jump feet back together and arms down to sides.",
      "Repeat at a brisk pace."
    ],
    "tips": [
      "Land softly",
      "Keep core engaged",
      "Full arm extension",
      "Stay light on feet"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "kettlebell-deadlift",
    "name": "Kettlebell Deadlift",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "kettlebell",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Place kettlebell between your feet; stand with feet hip-width apart.",
      "Hinge at hips and bend knees, keeping back flat and chest up.",
      "Grip the kettlebell handle with both hands.",
      "Drive through your heels to stand up, fully extending hips and knees.",
      "Lower the kettlebell to the floor under control by hinging at the hips."
    ],
    "tips": [
      "Flat back",
      "Push through heels",
      "Engage glutes",
      "Keep kettlebell close"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "kneeling-back-rotation-stretch",
    "name": "Kneeling Back Rotation Stretch",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Kneel on the floor (all fours or lunge position).",
      "Place one hand behind your head or neck.",
      "Rotate elbow and upper body upward, opening chest.",
      "Hold for a moment at top of rotation.",
      "Return to start and repeat; switch sides."
    ],
    "tips": [
      "Keep hips stable",
      "Open chest fully",
      "Rotate through upper back",
      "Move slowly"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "kneeling-lat-stretch",
    "name": "Kneeling Lat Stretch",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Kneel and sit hips back on heels.",
      "Reach both arms forward, palms on floor.",
      "Push chest toward the ground.",
      "Hold the stretch, focusing on the long side body.",
      "Optionally shift hands to each side for more stretch."
    ],
    "tips": [
      "Keep arms straight",
      "Reach fingertips forward",
      "Drop chest down",
      "Relax neck and shoulders"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "kneeling-triceps-stretch",
    "name": "Kneeling Triceps Stretch",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Kneel on the floor or mat.",
      "Raise one arm overhead then bend the elbow so your hand touches your upper back.",
      "Use your other hand to gently push on the bent elbow.",
      "Hold the stretch.",
      "Switch arms and repeat."
    ],
    "tips": [
      "Keep back straight",
      "Elbow points up",
      "Gently press, don’t force",
      "Relax neck and shoulders"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "landmine-180",
    "name": "Landmine 180",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Stand facing the free end of the barbell with your feet about shoulder-width apart, and hold the barbell sleeve with both hands in front of your chest.",
      "Bend your knees slightly, brace your midsection, and keep your arms long but not locked.",
      "Rotate your shoulders and hips together to lower the barbell toward one hip.",
      "Drive through your feet and rotate across your body to sweep the barbell in an arc toward the opposite side.",
      "Control the barbell as it changes direction, and continue rotating side to side with your chest facing the barbell.",
      "Keep the movement smooth and balanced on both sides until the set is complete."
    ],
    "tips": [
      "Rotate hips and shoulders together",
      "Brace your core",
      "Move the bar in an arc",
      "Stay tall through the chest"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "leg-raise-crunch",
    "name": "Leg Raise Crunch",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie on your back and extend your legs.",
      "Place your hands by your sides or behind your head.",
      "Simultaneously lift your legs and upper torso toward each other.",
      "Squeeze at the top of the movement.",
      "Lower your legs and upper body back down under control."
    ],
    "tips": [
      "Keep lower back pressed to floor",
      "Move slowly",
      "Exhale at the crunch",
      "Don't use momentum"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "leg-raise-with-hip-lift",
    "name": "Leg Raise with Hip Lift",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Lie flat with arms at your sides and legs straight.",
      "Raise your legs up together towards the ceiling.",
      "At the top of the movement, press your legs up by lifting your hips off the ground.",
      "Pause, squeezing your abs.",
      "Lower your hips and legs back to the starting position slowly."
    ],
    "tips": [
      "Keep legs together",
      "Don’t swing",
      "Lift hips with control",
      "Keep back flat"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-back-extension",
    "name": "Lever Back Extension",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Adjust the machine so the back pad sits comfortably against your upper back and your feet are secured on the platform.",
      "Sit tall against the pad and grip the handles or side bars.",
      "Brace your core and lean your torso forward under control through the machine's range.",
      "Stop at the bottom when you feel a comfortable stretch and keep your feet pressed into the platform.",
      "Drive your torso back against the pad until you return to an upright position.",
      "Repeat smoothly without bouncing or jerking the pad."
    ],
    "tips": [
      "Brace before you move",
      "Move through a smooth arc",
      "Keep feet firmly planted",
      "Return to tall posture"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-high-row",
    "name": "Lever High Row",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Adjust the seat so the handles start around upper-chest height when you sit down.",
      "Sit with your chest firmly against the pad and place your feet flat on the platform.",
      "Grab the handles with an overhand grip and straighten your arms without lifting your chest off the pad.",
      "Pull the handles back toward your upper ribs by driving your elbows down and back.",
      "Squeeze your shoulder blades together at the end of the pull.",
      "Return the handles forward under control until your arms are straight again."
    ],
    "tips": [
      "Chest stays on pad",
      "Drive elbows back",
      "Squeeze shoulder blades",
      "Control the return"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-horizontal-leg-press",
    "name": "Lever Horizontal Leg Press",
    "primaryMuscles": [
      "quads"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Sit on the leg press and adjust seat as needed.",
      "Place feet shoulder-width apart on platform.",
      "Push platform away by extending legs.",
      "Do not lock knees at the top position.",
      "Lower platform under control to start position."
    ],
    "tips": [
      "Keep lower back pressed into seat",
      "Do not lock knees",
      "Feet flat and even pressure",
      "Control the descent"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-incline-hammer-chest-press",
    "name": "Lever Incline Hammer Chest Press",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Adjust seat height for optimal handle position.",
      "Sit and grip handles with elbows bent.",
      "Press handles up and forward above chest.",
      "Avoid locking elbows completely.",
      "Lower handles slowly to starting position."
    ],
    "tips": [
      "Press upward and slightly forward",
      "Keep feet flat on floor",
      "Don't shrug shoulders",
      "Pause at top"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-kneeling-leg-curl",
    "name": "Lever Kneeling Leg Curl",
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Adjust the machine so your knees line up with the machine's pivot point and your ankles sit securely under the pads.",
      "Kneel on the pad facing the machine, brace your torso against the support, and grip the handles.",
      "Start with your legs extended behind you and keep your hips still.",
      "Curl your heels up toward your glutes by bending your knees against the pads.",
      "Pause briefly at the top and squeeze your hamstrings.",
      "Lower the pads under control until your legs are straight again."
    ],
    "tips": [
      "Keep hips glued down",
      "Curl through the knees",
      "Move slowly on the way down",
      "Squeeze hamstrings at the top"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-lateral-raise",
    "name": "Lever Lateral Raise",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Adjust the seat so the machine arms line up with your shoulders when you sit down.",
      "Sit with your back against the pad and place your forearms or hands on the machine pads or handles.",
      "Start with your arms down at your sides and keep a soft bend in your elbows.",
      "Raise the machine arms out to your sides until your upper arms reach shoulder height.",
      "Pause briefly at the top without shrugging your shoulders.",
      "Lower the arms back down under control to the starting position."
    ],
    "tips": [
      "Lead with the elbows",
      "Keep shoulders down",
      "Lift to shoulder height",
      "Control the lowering"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-leg-extension",
    "name": "Lever Leg Extension",
    "primaryMuscles": [
      "quads"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Adjust the seat and backrest so your knees line up with the machine's pivot point.",
      "Sit back against the pad and place your shins behind the lower roller pad.",
      "Grip the handles and start with your knees bent and feet pointed forward.",
      "Straighten your knees to lift the pad until your legs are nearly straight.",
      "Pause briefly while keeping your thighs pressed into the seat.",
      "Lower the pad with control until your knees are bent again."
    ],
    "tips": [
      "Line up knees with pivot",
      "Lift with your quads",
      "Keep hips on the seat",
      "Lower under control"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-lying-chest-press",
    "name": "Lever Lying Chest Press",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Lie supine on the machine bench.",
      "Grip the handles firmly, elbows bent.",
      "Engage chest and press handles forward and up.",
      "Fully extend arms without locking out elbows.",
      "Slowly return to starting position."
    ],
    "tips": [
      "Keep feet flat on floor",
      "Don't overextend elbows",
      "Press evenly with both arms",
      "Squeeze chest at top"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-lying-leg-curl",
    "name": "Lever Lying Leg Curl",
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Adjust the machine so your knees line up with the machine's pivot and the pad rests against the back of your lower legs above your heels.",
      "Lie face down on the bench with your legs straight and grab the handles or bench edges for support.",
      "Press your hips into the pad and point your toes forward to set your start position.",
      "Curl the pad upward by bending your knees until your heels move toward your glutes.",
      "Pause briefly at the top while keeping your hips down and thighs on the pad.",
      "Lower the pad back down under control until your legs are straight again."
    ],
    "tips": [
      "Keep hips glued down",
      "Curl through the hamstrings",
      "Move slow on the way down",
      "Knees stay in line"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-preacher-curl",
    "name": "Lever Preacher Curl",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Adjust the seat so your armpits sit close to the top of the preacher pad.",
      "Sit down and place the backs of your upper arms flat on the pad.",
      "Grip the machine handles with an underhand grip and straighten your arms to the start.",
      "Keep your chest up and curl the handles toward your shoulders by bending your elbows.",
      "Squeeze your biceps briefly at the top without lifting your upper arms off the pad.",
      "Lower the handles under control until your arms are nearly straight again."
    ],
    "tips": [
      "Keep upper arms glued down",
      "Curl only at the elbows",
      "Lift smooth, lower slower",
      "Keep wrists neutral"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-reverse-hyperextension",
    "name": "Lever Reverse Hyperextension",
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Adjust the machine so your hips rest on the pad and your legs can hang freely.",
      "Lie face down with your torso supported and grip the handles or sides for stability.",
      "Place your feet against the foot pads and let your legs hang down under control.",
      "Brace your midsection and squeeze your glutes to raise your legs behind you.",
      "Lift until your legs are about in line with your torso without arching your lower back.",
      "Lower your legs slowly to the start position and repeat."
    ],
    "tips": [
      "Lift with your glutes",
      "Keep hips on the pad",
      "Control the swing",
      "Stop at torso level"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-reverse-t-bar-row",
    "name": "Lever Reverse T-Bar Row",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Adjust the seat or chest pad so the handles line up around mid-chest when you reach forward.",
      "Place your chest firmly against the pad and set your feet flat on the platform.",
      "Grab the handles with an overhand grip and straighten your arms without rounding your shoulders.",
      "Pull the handles toward your chest by driving your elbows back and out slightly.",
      "Squeeze your shoulder blades together at the end of the pull.",
      "Lower the handles under control until your arms are straight again."
    ],
    "tips": [
      "Chest stays on pad",
      "Lead with your elbows",
      "Squeeze shoulder blades together",
      "Control the lowering"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-seated-calf-raise",
    "name": "Lever Seated Calf Raise",
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Adjust the seat so the thigh pad rests securely on your thighs with your knees bent about 90 degrees.",
      "Place the balls of your feet on the footplate with your heels hanging off the edge.",
      "Grip the handles or seat and lift your heels to take the weight onto your calves.",
      "Press through the balls of your feet to raise your heels as high as you can.",
      "Pause briefly at the top while keeping your toes planted.",
      "Lower your heels slowly until you feel a stretch in your calves, then repeat."
    ],
    "tips": [
      "Drive through big toe",
      "Lift heels straight up",
      "Control the lowering",
      "Keep knees still"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-seated-crunch",
    "name": "Lever Seated Crunch",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Adjust seat and select appropriate resistance.",
      "Sit back and secure feet and handles as designed.",
      "Engage abs and flex spine forward in a crunch motion.",
      "Bring chest toward knees while exhaling.",
      "Control return to start and repeat."
    ],
    "tips": [
      "Move with abs, not hips",
      "Don't use momentum",
      "Controlled movement",
      "Full range of motion"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-seated-dip",
    "name": "Lever Seated Dip",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Adjust the seat and select appropriate weight.",
      "Sit down and grip the handles firmly.",
      "Press the handles downward by extending your arms fully.",
      "Pause briefly at lockout.",
      "Return to the start position slowly."
    ],
    "tips": [
      "Keep elbows close",
      "Control the descent",
      "Do not lock elbows",
      "Sit upright"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-seated-hip-abduction",
    "name": "Lever Seated Hip Abduction",
    "primaryMuscles": [
      "quads"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Adjust the seat so your knees bend about 90 degrees and the thigh pads rest against the outside of your legs.",
      "Sit tall with your back against the pad, place your feet on the footrests, and grip the handles.",
      "Start with your legs together and your knees aligned with the machine's pivot.",
      "Drive your knees outward against the pads until your legs are as wide as your comfortable range allows.",
      "Pause briefly with your hips still on the seat.",
      "Bring your legs back together slowly until the pads nearly touch, then repeat."
    ],
    "tips": [
      "Sit tall",
      "Drive knees out",
      "Control the return",
      "Keep hips on seat"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-seated-hip-adduction",
    "name": "Lever Seated Hip Adduction",
    "primaryMuscles": [
      "quads"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Adjust the seat and pads so your knees line up with the machine's pivot point.",
      "Sit tall with your back against the pad, place your legs outside the thigh pads, and grab the handles.",
      "Set your feet flat on the footrests and start with your legs comfortably apart.",
      "Bring your legs together by pressing inward against the pads.",
      "Squeeze your inner thighs briefly when the pads come together.",
      "Return the pads outward slowly until you reach the start position without letting the weight slam."
    ],
    "tips": [
      "Sit tall",
      "Control both directions",
      "Squeeze inner thighs",
      "Keep hips still"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-seated-leg-curl",
    "name": "Lever Seated Leg Curl",
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Adjust the seat and pad so your knees line up with the machine’s pivot point.",
      "Sit back against the pad and place your lower legs under the roller just above your ankles.",
      "Grip the handles and keep your thighs pressed into the seat.",
      "Curl the pad down by bending your knees until your heels move toward the floor.",
      "Pause briefly and squeeze your hamstrings at the bottom.",
      "Lower the pad back up with control until your knees are nearly straight."
    ],
    "tips": [
      "Keep hips glued down",
      "Curl through the heels",
      "Move only at knees",
      "Lower with control"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-seated-reverse-fly",
    "name": "Lever Seated Reverse Fly",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Adjust the seat so the handles are about shoulder height when you sit down.",
      "Sit with your chest against the pad, feet flat on the floor, and grasp the handles with an overhand grip.",
      "Start with your arms in front of you and keep a soft bend in your elbows.",
      "Pull the handles out and back in a wide arc until your upper arms line up with your shoulders.",
      "Squeeze your rear shoulders and upper back at the end of the movement.",
      "Return the handles slowly to the start without letting the weight slam down."
    ],
    "tips": [
      "Lead with your elbows",
      "Keep chest on the pad",
      "Soft bend in elbows",
      "Squeeze shoulder blades together"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-shrug",
    "name": "Lever Shrug",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Adjust the machine so the handles rest at your sides with your shoulders relaxed.",
      "Sit or stand against the pad and grasp the handles with a firm overhand grip.",
      "Straighten your arms and set your chest tall with your neck neutral.",
      "Lift your shoulders straight up toward your ears without bending your elbows.",
      "Pause briefly at the top while keeping your torso still.",
      "Lower your shoulders under control until they return to the start."
    ],
    "tips": [
      "Shoulders straight up",
      "Arms stay long",
      "Keep chest tall",
      "Control the lowering"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-standing-calf-raise",
    "name": "Lever Standing Calf Raise",
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Adjust the shoulder pads so they rest comfortably on your shoulders when you stand on the platform.",
      "Place the balls of your feet on the edge of the platform with your heels hanging off and grip the handles.",
      "Straighten your legs, brace your torso, and let your heels lower until you feel a stretch in your calves.",
      "Press through the balls of your feet to raise your heels as high as you can.",
      "Pause briefly at the top while staying balanced under the pads.",
      "Lower your heels under control back to the stretched start position."
    ],
    "tips": [
      "Drive through big toe",
      "Lift heels straight up",
      "Use full ankle range",
      "Control the lowering"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-standing-hip-extension",
    "name": "Lever Standing Hip Extension",
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Adjust the machine to your height.",
      "Place one foot on platform, chest against pad.",
      "Brace core and grasp handles for balance.",
      "Extend hip, pressing lever back with heel.",
      "Return to starting position and repeat."
    ],
    "tips": [
      "Drive through heel",
      "Keep knee slightly bent",
      "Don't arch lower back",
      "Pause at top briefly"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-standing-rear-kick",
    "name": "Lever Standing Rear Kick",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Adjust the lever machine pad to chest height and select weight.",
      "Place working foot on the platform.",
      "Hold handles and brace core.",
      "Extend hip by pushing foot backward as far as comfortable.",
      "Return slowly to starting position and repeat."
    ],
    "tips": [
      "Lead with heel",
      "Keep core tight",
      "Avoid arching the back",
      "Squeeze glute at top"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-t-bar-row",
    "name": "Lever T-Bar Row",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Lie prone on the chest pad of the T-bar row machine and grasp the handles.",
      "Brace your upper body and retract your shoulder blades.",
      "Pull the handles toward your chest or lower ribs.",
      "Pause and squeeze your back at the top.",
      "Lower the weight under control to a full stretch."
    ],
    "tips": [
      "Pinch shoulder blades",
      "Drive elbows back",
      "Keep chest on pad",
      "Full stretch at bottom"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lever-triceps-extension",
    "name": "Lever Triceps Extension",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Adjust the seat so the handles line up with about eye or forehead level when you sit down.",
      "Sit with your back against the pad and place your feet flat on the floor.",
      "Grip the handles with your palms facing down and straighten your arms in front of you.",
      "Keep your upper arms still and bend your elbows to lower the handles toward your forehead.",
      "Pause briefly when your elbows are fully bent and the handles are close to your head.",
      "Press the handles away by straightening your elbows until your arms are extended again."
    ],
    "tips": [
      "Keep elbows tucked",
      "Upper arms stay still",
      "Move only at elbows",
      "Control both directions"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lying-hip-lift-on-stability-ball",
    "name": "Lying Hip Lift on Stability Ball",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "other",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Lie on your back with arms by your sides and feet on the stability ball.",
      "Bend knees at 90 degrees and keep feet hip-width apart.",
      "Drive through your heels and squeeze your glutes to lift your hips.",
      "Pause at the top, keeping your body in a straight line.",
      "Lower your hips back down with control."
    ],
    "tips": [
      "Press through heels",
      "Squeeze glutes",
      "Keep core engaged",
      "Avoid overextending back"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lying-leg-raise",
    "name": "Lying Leg Raise",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie flat on your back, legs straight.",
      "Keep arms at your sides or under hips.",
      "Lift legs upward, keeping knees straight.",
      "Raise legs until hips come up slightly.",
      "Lower legs slowly without touching the floor."
    ],
    "tips": [
      "Engage core",
      "Keep lower back down",
      "Control descent",
      "Avoid swinging"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lying-quadriceps-stretch",
    "name": "Lying Quadriceps Stretch",
    "primaryMuscles": [
      "quads"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie on your stomach with legs extended.",
      "Bend one knee, bringing heel toward glute.",
      "Reach back and grasp ankle with hand.",
      "Gently pull heel closer to glute until a stretch is felt.",
      "Hold, then switch sides."
    ],
    "tips": [
      "Knees together",
      "Relax neck",
      "Do not force",
      "Hips flat"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lying-scissor-kick",
    "name": "Lying Scissor Kick",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie on your back with legs extended and arms at your sides.",
      "Lift both legs a few inches off the ground, keeping them straight.",
      "Alternate raising one leg while lowering the other in a scissor motion.",
      "Continue to alternate legs in a controlled manner.",
      "Keep your head and shoulders relaxed, core engaged."
    ],
    "tips": [
      "Keep core braced",
      "Move legs with control",
      "Don't touch floor",
      "Point toes"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "lying-straight-leg-raise",
    "name": "Lying Straight Leg Raise",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie flat on your back, arms at sides.",
      "Extend legs fully, feet together.",
      "Lift legs straight up to vertical.",
      "Pause briefly at the top.",
      "Lower legs down slowly but don’t touch floor."
    ],
    "tips": [
      "Keep lower back flat",
      "Control leg movement",
      "Squeeze abs",
      "Don’t let heels touch"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "medicine-ball-wall-sit-up",
    "name": "Medicine Ball Wall Sit-Up",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "other",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Sit on the floor facing a wall, knees bent.",
      "Hold a medicine ball at your chest.",
      "Lie back, then perform a sit-up.",
      "At the top, throw the ball against the wall.",
      "Catch the rebound and lower back down."
    ],
    "tips": [
      "Engage abs",
      "Full range of motion",
      "Coordinate throw and catch",
      "Keep feet grounded"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "middle-back-stretch",
    "name": "Middle Back Stretch",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit or stand with feet hip-width apart.",
      "Extend your arms straight in front and clasp your hands.",
      "Round your upper back and push your hands forward.",
      "Tuck your chin slightly toward your chest.",
      "Hold the stretch for 20–30 seconds and release."
    ],
    "tips": [
      "Round your upper back",
      "Keep arms extended",
      "Relax your shoulders",
      "Hold the position steady"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "military-press",
    "name": "Military Press",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "barbell",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Stand with feet hip-width apart and barbell at shoulder height.",
      "Grip the bar with hands just outside shoulder-width.",
      "Brace your core and squeeze your glutes.",
      "Press the barbell overhead to full arm extension.",
      "Lower the bar slowly back to shoulders."
    ],
    "tips": [
      "Keep core tight",
      "Press in a straight line",
      "Avoid arching lower back",
      "Lock elbows at the top"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "neck-side-stretch",
    "name": "Neck Side Stretch",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit or stand with good posture.",
      "Slowly tilt your head to one side, ear towards shoulder.",
      "Hold the stretch for 15-30 seconds.",
      "Return to center.",
      "Repeat on the opposite side."
    ],
    "tips": [
      "Don't shrug shoulders",
      "Keep shoulders level",
      "Move slowly",
      "Feel a gentle stretch"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "old-school-reverse-extensions",
    "name": "Old School Reverse Extensions",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie face down on the floor or bench with elbows bent and hands at your sides.",
      "Position elbows by your torso.",
      "Straighten your arms fully behind you, contracting your triceps.",
      "Pause and squeeze at full extension.",
      "Return to the start in a controlled manner."
    ],
    "tips": [
      "Keep elbows tight to torso",
      "Extend arms fully",
      "Squeeze triceps at the top",
      "Avoid swinging arms"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "otis-up",
    "name": "Otis-Up",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "other",
    "category": "compound",
    "difficulty": "advanced",
    "instructions": [
      "Lie on your back with knees bent and feet anchored.",
      "Hold a weight with both hands, arms fully extended above your chest.",
      "Engage your core and sit up, keeping arms straight and weight overhead.",
      "Reach an upright seated position.",
      "Lower yourself back down under control with arms extended."
    ],
    "tips": [
      "Keep arms locked out",
      "Do not swing weight",
      "Engage abs fully",
      "Maintain slow control"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "overhead-chest-stretch",
    "name": "Overhead Chest Stretch",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand upright with feet hip-width apart.",
      "Interlace fingers and stretch arms straight overhead.",
      "Gently pull arms back behind head.",
      "Squeeze shoulder blades together.",
      "Hold the stretch for 15-30 seconds."
    ],
    "tips": [
      "Keep arms straight",
      "Open the chest",
      "Maintain tall posture",
      "Avoid arching lower back"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "pec-deck-fly",
    "name": "Pec Deck Fly",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Adjust seat and sit with back against pad.",
      "Place forearms on pads with elbows slightly bent.",
      "Bring arms together in a wide arc.",
      "Squeeze chest at the end of movement.",
      "Return slowly to starting position."
    ],
    "tips": [
      "Keep elbows soft",
      "Squeeze chest at peak",
      "Maintain back on pad",
      "Control return phase"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "peroneals-stretch",
    "name": "Peroneals Stretch",
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit with one leg crossed over the other.",
      "Grasp the foot and gently pull it inward.",
      "Turn the sole toward your midline.",
      "Hold for 20-30 seconds.",
      "Switch sides and repeat."
    ],
    "tips": [
      "Gentle stretch",
      "Don't force movement",
      "Keep knee straight",
      "Hold steady"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "pilates-corkscrew",
    "name": "Pilates Corkscrew",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Lie on back, arms by side, legs straight up.",
      "Engage core, lift hips off mat gently.",
      "Circle legs together in a clockwise motion.",
      "Lower hips as legs complete the circle.",
      "Reverse the circle direction."
    ],
    "tips": [
      "Abs tight",
      "Control the motion",
      "Keep shoulders down",
      "Slow and steady"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "pilates-hundred",
    "name": "Pilates Hundred",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie on back, legs in tabletop or extended.",
      "Lift head, neck, shoulders off mat.",
      "Extend arms at sides, hovering above floor.",
      "Pump arms up and down vigorously.",
      "Inhale for 5 pumps, exhale for 5 pumps; repeat to 100."
    ],
    "tips": [
      "Engage core",
      "Keep lower back down",
      "Strong arm pulses",
      "Steady breath"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "plyometric-side-lunge-stretch",
    "name": "Plyometric Side Lunge Stretch",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Stand with feet wider than hip-width apart.",
      "Shift your weight to one side, bending the knee and keeping the opposite leg straight.",
      "Drop into a deep lunge while maintaining upright posture.",
      "Push off the bent leg and return to starting position.",
      "Repeat to the opposite side in a dynamic, alternating fashion."
    ],
    "tips": [
      "Keep chest up",
      "Push hips back",
      "Knee in line with toes",
      "Alternate sides smoothly"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "pull-up-wide-grip",
    "name": "Pull-Up (Wide Grip)",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Grip pull-up bar with hands wider than shoulders, palms overhand.",
      "Hang with arms fully extended and core tight.",
      "Pull chest up to bar, driving elbows down and out.",
      "Pause at the top, squeeze back muscles.",
      "Lower down slowly to full extension."
    ],
    "tips": [
      "Keep elbows flared out",
      "Lead with chest",
      "Engage lats",
      "Avoid swinging"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "pull-up-chin-up",
    "name": "Pull-Up / Chin-Up",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Stand under a pull-up bar and grip it with your chosen grip (overhand for pull-up, underhand for chin-up).",
      "Hang at full arm extension with shoulders engaged.",
      "Brace your core and pull your chest up toward the bar by driving elbows down.",
      "Clear the bar with your chin or chest as you squeeze your lats.",
      "Lower yourself under control to the starting hang position."
    ],
    "tips": [
      "Lead with chest",
      "Drive elbows down",
      "Don't swing",
      "Engage shoulders"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "push-up",
    "name": "Push-Up",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Begin in a plank with hands under shoulders.",
      "Engage core and glutes.",
      "Lower chest toward floor, elbows at 45 degrees.",
      "Pause briefly when close to ground.",
      "Press back up to plank position."
    ],
    "tips": [
      "Keep body straight",
      "Engage core",
      "Elbows 45 degrees",
      "Lower under control"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "rear-decline-bridge",
    "name": "Rear Decline Bridge",
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Lie on your back with your knees bent and feet flat on the floor, hip-width apart.",
      "Place your arms by your sides and press your palms lightly into the floor.",
      "Brace your midsection and squeeze your glutes.",
      "Drive through your heels and lift your hips until your knees, hips, and shoulders line up.",
      "Pause briefly at the top while keeping your ribs down.",
      "Lower your hips to the floor with control and reset before the next rep."
    ],
    "tips": [
      "Drive through your heels",
      "Squeeze glutes at the top",
      "Keep ribs down",
      "Don't arch your low back"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "rear-deltoid-stretch",
    "name": "Rear Deltoid Stretch",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Extend one arm across your chest at shoulder height.",
      "Use opposite hand to pull arm towards your body.",
      "Hold the stretch for 20-30 seconds.",
      "Release and return to start.",
      "Repeat on the other side."
    ],
    "tips": [
      "Relax shoulder",
      "Arm stays at shoulder height",
      "Gentle pull",
      "No twisting torso"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "rear-foot-elevated-hip-flexor-stretch",
    "name": "Rear Foot Elevated Hip Flexor Stretch",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand with your back to a bench; place one foot on the bench.",
      "Step the front foot forward and lower into a lunge.",
      "Tuck pelvis under, keeping chest tall.",
      "Lean gently forward to intensify the stretch.",
      "Hold, then switch legs."
    ],
    "tips": [
      "Torso upright",
      "Pelvis tucked",
      "Front knee over ankle",
      "Breathe"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "resistance-band-high-fly",
    "name": "Resistance Band High Fly",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Anchor resistance band above shoulder height.",
      "Grasp handles and step forward for tension.",
      "Start with arms raised wide, aligned with shoulders.",
      "Pull arms downward and together in a wide arc.",
      "Squeeze chest, then return slowly to start."
    ],
    "tips": [
      "Keep slight bend in elbows",
      "Control movement",
      "Squeeze chest at bottom",
      "Don't let band snap back"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "reverse-crunch",
    "name": "Reverse Crunch",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie on your back, arms at your sides, knees bent, and feet off the ground.",
      "Engage your core and lift your legs, bringing knees toward your chest.",
      "Lift hips off the floor in a curling motion.",
      "Pause and squeeze your abs at the top.",
      "Lower your hips back down slowly, keeping control."
    ],
    "tips": [
      "Move slowly",
      "Don't swing legs",
      "Keep core braced",
      "Avoid arching lower back"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "reverse-dip-stretch",
    "name": "Reverse Dip Stretch",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit with legs extended and arms behind your hips.",
      "Place hands flat on the floor, fingers pointing forward.",
      "Press through your palms to lift your chest up.",
      "Keep your arms long without locking elbows.",
      "Hold for the stretch, then slowly lower and relax."
    ],
    "tips": [
      "Lift chest tall",
      "Keep elbows soft",
      "Open shoulders",
      "Avoid slumping"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "reverse-grip-machine-lat-pulldown",
    "name": "Reverse Grip Machine Lat Pulldown",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Adjust the seat so your knees fit snugly under the pads and place your feet flat on the floor.",
      "Reach up and grab the handles with an underhand grip about shoulder-width apart.",
      "Sit tall with your chest up and arms fully extended overhead.",
      "Pull the handles down toward your upper chest by driving your elbows down and back.",
      "Squeeze your upper back and lats at the bottom without leaning far backward.",
      "Slowly let the handles rise until your arms are straight again while keeping control."
    ],
    "tips": [
      "Chest up",
      "Drive elbows down",
      "Keep wrists straight",
      "Control the return"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "reverse-grip-pull-up",
    "name": "Reverse Grip Pull-Up",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Grab the bar with palms facing you (supinated grip), hands shoulder-width apart.",
      "Hang with arms fully extended and scapula engaged.",
      "Pull your chest up towards the bar, leading with your elbows.",
      "Clear your chin above the bar, squeezing at the top.",
      "Lower yourself back to the starting position with control."
    ],
    "tips": [
      "Chest to bar",
      "Elbows drive down",
      "No swinging",
      "Full arm extension"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "reverse-grip-cable-lat-pulldown",
    "name": "Reverse-Grip Cable Lat Pulldown",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Set the cable bar attachment and sit with knees secured under the pad.",
      "Grasp the bar with a reverse (supinated) shoulder-width grip.",
      "Lean back slightly, chest up, arms fully extended.",
      "Pull the bar down to your upper chest by contracting your lats.",
      "Slowly return the bar to the start position with control."
    ],
    "tips": [
      "Pull elbows down",
      "Keep chest up",
      "Don’t swing the torso",
      "Grip the bar tightly"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "ring-high-row",
    "name": "Ring High Row",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Adjust rings to chest height and grip handles with neutral grip.",
      "Lean back with feet forward and body straight.",
      "Engage core, keep arms extended.",
      "Row your chest toward the rings, retracting shoulder blades.",
      "Lower body back to start under control."
    ],
    "tips": [
      "Squeeze shoulder blades",
      "Keep body aligned",
      "Control each rep",
      "Pull elbows high"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "rotational-push-up",
    "name": "Rotational Push-Up",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Begin in a standard push-up position.",
      "Lower your chest toward the floor.",
      "As you press up, rotate your torso and lift one arm toward the ceiling.",
      "Hold briefly, keeping hips square.",
      "Return to start, repeat on the other side."
    ],
    "tips": [
      "Rotate from torso",
      "Stack shoulders",
      "Keep core tight",
      "Breathe evenly"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "runner-s-stretch",
    "name": "Runner's Stretch",
    "primaryMuscles": [
      "quads"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Step one foot forward into a lunge, keeping the rear leg extended.",
      "Place both hands on either side of the front foot.",
      "Lower your hips gently, keeping back leg straight.",
      "Lift your chest for deeper stretch.",
      "Hold, then switch legs."
    ],
    "tips": [
      "Keep back leg long",
      "Sink hips down",
      "Lift chest",
      "Square your hips"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "running",
    "name": "Running",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Warm up with light walking or dynamic stretches.",
      "Begin running at a moderate pace.",
      "Maintain a steady breathing rhythm and upright posture.",
      "Land lightly with a midfoot or forefoot strike.",
      "Cool down with walking and stretching."
    ],
    "tips": [
      "Keep chest up",
      "Relax shoulders",
      "Lean slightly forward from ankles",
      "Swing arms naturally"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "russian-twist-on-stability-ball-arms-straight",
    "name": "Russian Twist on Stability Ball (Arms Straight)",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "other",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Sit on a stability ball and walk feet forward until shoulders rest on the ball.",
      "Keep knees bent at 90 degrees, hips lifted in a bridge position.",
      "Extend arms straight toward the ceiling with hands together.",
      "Rotate torso and arms as one unit to the left.",
      "Return to center, then rotate to the right, repeating for reps."
    ],
    "tips": [
      "Keep arms extended",
      "Engage core",
      "Move smoothly",
      "Avoid sagging hips"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "scapula-dips",
    "name": "Scapula Dips",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Start in a straight-arm support on parallel bars or dip bars with your elbows locked and shoulders stacked over your hands.",
      "Lift your chest and brace your trunk while keeping your legs still under you.",
      "Lower your body a few inches by letting your shoulders rise toward your ears without bending your elbows.",
      "Press down through your hands to pull your shoulders away from your ears and raise your body back up.",
      "Repeat with slow, controlled shoulder movement while keeping your arms straight the whole time."
    ],
    "tips": [
      "Keep elbows locked",
      "Shoulders away from ears",
      "Move only at shoulders",
      "Stay tall through chest"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "seated-alternating-dumbbell-curl",
    "name": "Seated Alternating Dumbbell Curl",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit with back against support and feet flat.",
      "Hold dumbbells at your sides, palms facing in.",
      "Curl one dumbbell while rotating palm up.",
      "Lower to starting position and alternate arms.",
      "Repeat, keeping back straight and elbows close to sides."
    ],
    "tips": [
      "Keep elbows stationary",
      "Rotate palm up during curl",
      "Don't swing weights",
      "Engage your core"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "seated-bent-over-back-stretch",
    "name": "Seated Bent Over Back Stretch",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit comfortably on the floor, legs extended or crossed.",
      "Hinge forward at the hips, keeping back relaxed.",
      "Let arms reach forward toward feet or floor.",
      "Lower your chest toward your knees, breathing deeply.",
      "Hold the stretch and relax into the position."
    ],
    "tips": [
      "Relax neck",
      "Hinge at hips",
      "Keep stretch gentle",
      "Breathe deeply"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "seated-boat-stretch",
    "name": "Seated Boat Stretch",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit on the floor with back straight.",
      "Bring soles of feet together and let knees drop out.",
      "Hold ankles or feet for support.",
      "Gently pull feet closer and lean forward slightly.",
      "Hold position without bouncing."
    ],
    "tips": [
      "Keep chest up",
      "Relax knees toward floor",
      "Avoid rounding back",
      "Go only as far as comfortable"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "seated-cable-row-v-grip",
    "name": "Seated Cable Row (V-Grip)",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Sit on the cable row machine and place feet on the foot platform.",
      "Grab the V-grip handle with both hands, arms extended.",
      "Maintain a straight back and slight knee bend.",
      "Pull the handle toward your abdomen, retracting your shoulder blades.",
      "Slowly extend arms to return to the starting position."
    ],
    "tips": [
      "Keep back straight",
      "Drive elbows back",
      "Retract shoulder blades",
      "Don’t lean or round spine"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "seated-cable-row-wide-grip",
    "name": "Seated Cable Row (Wide-Grip)",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Sit down and place feet against the platform.",
      "Grasp the wide grip attachment with both hands.",
      "Keep your torso upright, arms fully extended.",
      "Pull the handle toward your upper abdomen, squeezing your upper back.",
      "Slowly release back to the start position."
    ],
    "tips": [
      "Keep elbows high",
      "Squeeze shoulder blades",
      "Keep back neutral",
      "Don’t rock the torso"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "seated-calf-stretch",
    "name": "Seated Calf Stretch",
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit with legs extended straight in front.",
      "Loop a towel or band around one foot's ball.",
      "Keep knee straight and pull your toes toward you.",
      "Hold position, feeling stretch in calf.",
      "Repeat on the other leg."
    ],
    "tips": [
      "Keep knee straight",
      "Flex ankle back",
      "Sit up tall",
      "Don't force the stretch"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "seated-dumbbell-shoulder-press",
    "name": "Seated Dumbbell Shoulder Press",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Sit on a bench with back support and feet flat.",
      "Hold dumbbells at shoulder height, elbows bent.",
      "Press dumbbells overhead until arms are extended.",
      "Pause briefly at the top.",
      "Lower dumbbells to starting position."
    ],
    "tips": [
      "Keep back pressed to pad",
      "Do not arch lower back",
      "Press overhead",
      "Elbows under wrists"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "seated-lower-back-stretch",
    "name": "Seated Lower Back Stretch",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit with legs extended or crossed.",
      "Reach both arms straight in front of you.",
      "Slowly bend at your hips to lower your torso forward.",
      "Relax your back and shoulders.",
      "Hold stretch, then return to upright position."
    ],
    "tips": [
      "Reach with both arms",
      "Relax neck and head",
      "Hinge from hips",
      "Breathe and relax deeper"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "seated-shoulder-flexor-depressor-retractor-stretch",
    "name": "Seated Shoulder Flexor, Depressor, Retractor Stretch",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit tall with feet flat.",
      "Lift arms overhead, reaching upward.",
      "Gently depress the shoulders away from your ears.",
      "Retract shoulder blades by pulling them slightly together.",
      "Hold for a stretch, breathing evenly."
    ],
    "tips": [
      "Reach up",
      "Pull shoulders down",
      "Retract shoulder blades",
      "Keep chest open"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "seated-straight-arm-twist",
    "name": "Seated Straight Arm Twist",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit with knees bent, feet either flat or off the ground.",
      "Extend arms straight forward, clasping hands.",
      "Lean back slightly with a neutral spine.",
      "Rotate torso to one side, arms following movement.",
      "Return to center and repeat to opposite side."
    ],
    "tips": [
      "Keep arms straight",
      "Brace your core",
      "Rotate shoulders not just arms",
      "Don't round your lower back"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "seated-twist-on-stability-ball",
    "name": "Seated Twist on Stability Ball",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "other",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit on a stability ball with feet flat, core engaged.",
      "Hold arms in front or across chest.",
      "Rotate your torso to the right, keeping hips stationary.",
      "Pause, then twist to the left.",
      "Return to center, repeat alternately."
    ],
    "tips": [
      "Sit tall",
      "Keep hips steady",
      "Rotate from the waist",
      "Engage core"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "seated-twist-stretch-straight-arm",
    "name": "Seated Twist Stretch (Straight Arm)",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit upright with legs extended forward.",
      "Cross your left leg over your right if desired for more stretch.",
      "Extend your right arm straight behind you for support.",
      "Twist your torso toward your right, using the opposite arm for leverage.",
      "Hold, then repeat to the other side."
    ],
    "tips": [
      "Keep back straight",
      "Twist gently",
      "Look over shoulder",
      "Breathe deeply"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "seated-wide-angle-pose-sequence",
    "name": "Seated Wide Angle Pose Sequence",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit with legs extended wide apart.",
      "Keep knees and toes pointing upward.",
      "Sit tall and hinge forward at hips.",
      "Walk hands forward, maintaining flat back.",
      "Hold stretch or gently move side to side."
    ],
    "tips": [
      "Keep spine long",
      "Point toes up",
      "Lead with chest",
      "Don't round lower back"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "shoulder-width-pull-up",
    "name": "Shoulder-Width Pull-Up",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Grip bar shoulder-width, palms away.",
      "Hang with arms fully extended.",
      "Pull up until chin clears the bar.",
      "Pause briefly at the top.",
      "Lower down slowly to full extension."
    ],
    "tips": [
      "Lead with chest",
      "No swinging",
      "Full range of motion",
      "Elbows down and back"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "side-bend-on-stability-ball",
    "name": "Side Bend on Stability Ball",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "other",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Position yourself sideways on a stability ball, feet braced.",
      "Place top hand behind head, other hand for balance.",
      "Lower your torso over the ball for a stretch.",
      "Contract your side to lift torso up in a side bend.",
      "Lower back down with control, repeat."
    ],
    "tips": [
      "Keep hips stacked",
      "Engage obliques",
      "Avoid pulling neck",
      "Slow movement"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "side-bend-stretch",
    "name": "Side Bend Stretch",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand or sit tall with spine neutral.",
      "Raise right arm overhead.",
      "Slowly bend torso to the left, keeping hips steady.",
      "Hold stretch for time, feeling the pull in your side.",
      "Return to start and repeat on the other side."
    ],
    "tips": [
      "Keep hips level",
      "Reach upward first",
      "Don’t twist",
      "Bend directly sideways"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "side-wrist-pull-stretch",
    "name": "Side Wrist Pull Stretch",
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand or sit tall.",
      "Extend one arm overhead or outward.",
      "Hold your wrist with the opposite hand.",
      "Pull gently toward one side.",
      "Hold, then switch sides."
    ],
    "tips": [
      "Keep arm straight",
      "Pull gently",
      "Relax shoulder",
      "Keep hips squared"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "single-dumbbell-stiff-leg-deadlift",
    "name": "Single Dumbbell Stiff-Leg Deadlift",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Stand upright holding a dumbbell with both hands at your thighs.",
      "Keep a slight bend in your knees and your back flat.",
      "Hinge forward at the hips, lowering the dumbbell towards the floor.",
      "Pause at the bottom while feeling a stretch in your hamstrings.",
      "Return to the upright position by driving hips forward."
    ],
    "tips": [
      "Hips back",
      "Flat back",
      "Feel hamstring stretch",
      "No rounding"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "single-leg-stretch-bent-knee",
    "name": "Single Leg Stretch (Bent Knee)",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "cardio",
    "difficulty": "beginner",
    "instructions": [
      "Lie on your back with both legs bent.",
      "Grasp one knee with both hands.",
      "Pull the knee toward your chest gently.",
      "Hold the stretch, keeping your back flat.",
      "Switch sides and repeat."
    ],
    "tips": [
      "Keep shoulders relaxed",
      "Pull gently",
      "Keep opposite foot on floor",
      "Breathe steadily"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "single-straight-leg-stretch",
    "name": "Single Straight Leg Stretch",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "cardio",
    "difficulty": "beginner",
    "instructions": [
      "Lie on your back with both legs straight.",
      "Lift one leg up while keeping it straight.",
      "Hold the back of your thigh or calf gently.",
      "Pull the leg slightly toward your chest.",
      "Hold and switch legs."
    ],
    "tips": [
      "Keep leg straight",
      "Relax neck and shoulders",
      "Point or flex foot for deeper stretch",
      "Avoid pulling too hard"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "sit-up",
    "name": "Sit-Up",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Lie flat on your back with knees bent and feet anchored.",
      "Place hands behind your head or across your chest.",
      "Engage your core to lift your torso to a seated position.",
      "Pause at the top, then slowly lower back to the floor.",
      "Repeat for the desired number of repetitions."
    ],
    "tips": [
      "Avoid pulling on neck",
      "Lift chest first",
      "Engage abs throughout",
      "Control the lower"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "sled-45-degree-calf-press",
    "name": "Sled 45 Degree Calf Press",
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit in the 45-degree sled machine and place the balls of both feet on the lower edge of the platform with your heels hanging off.",
      "Straighten your legs enough to support the sled and keep a small bend in your knees.",
      "Let your heels drop down by bending at the ankles until you feel a stretch in your calves.",
      "Press through the balls of your feet and raise your heels as high as you can.",
      "Pause briefly at the top while keeping your legs steady.",
      "Lower your heels under control back to the stretched position and repeat."
    ],
    "tips": [
      "Drive through the balls of feet",
      "Lift heels as high as possible",
      "Control the heel drop",
      "Keep knees softly bent"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "sled-45-degree-wide-leg-press",
    "name": "Sled 45 Degree Wide Leg Press",
    "primaryMuscles": [
      "quads"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Adjust the seat and load desired weight.",
      "Sit with your back and head against the pad, feet flat and wide on the platform.",
      "Release the safety handles and grasp the side handles.",
      "Bend your knees to lower the platform until your thighs reach 90 degrees or just past.",
      "Press through your heels to extend your legs fully, but avoid locking out the knees."
    ],
    "tips": [
      "Push through heels",
      "Keep knees in line with toes",
      "Do not lock knees at top",
      "Maintain flat lower back"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "sled-hack-squat",
    "name": "Sled Hack Squat",
    "primaryMuscles": [
      "glutes"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Stand on the sled platform with your back against the pad and your shoulders under the pads.",
      "Place your feet about shoulder-width apart on the platform with toes turned slightly out, then grip the handles.",
      "Unlock the sled and lower yourself by bending your knees and hips until your thighs reach parallel or your deepest controlled position.",
      "Keep your full foot planted against the platform as your knees track in line with your toes.",
      "Drive through your heels and midfoot to extend your knees and hips and return the sled upward.",
      "Stop just short of locking your knees, then continue into the next repetition."
    ],
    "tips": [
      "Keep your back on pad",
      "Knees track over toes",
      "Push through whole foot",
      "Control the descent"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "smith-chair-squat",
    "name": "Smith Chair Squat",
    "primaryMuscles": [
      "quads"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Set the Smith bar across your upper back and stand with your feet about shoulder-width apart, slightly in front of the bar path.",
      "Unrack the bar and brace your core with your chest up and eyes forward.",
      "Bend your knees and hips together to sit straight down under control.",
      "Lower until your thighs are about parallel to the floor or slightly below while keeping your heels down.",
      "Drive through your midfoot and heels to stand back up until your knees and hips are fully extended.",
      "Lock out tall, then repeat for the next rep."
    ],
    "tips": [
      "Chest up",
      "Knees track over toes",
      "Drive through heels",
      "Brace your core"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "smith-machine-calf-raise",
    "name": "Smith Machine Calf Raise",
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Set up the Smith machine bar at shoulder height.",
      "Step under the bar, position it across your upper traps, and unrack.",
      "Stand upright with feet hip to shoulder-width apart.",
      "Rise onto the balls of your feet by extending your ankles.",
      "Pause at the top, then lower your heels in a controlled manner."
    ],
    "tips": [
      "Move only at ankles",
      "Keep legs straight (but not locked)",
      "Control the movement",
      "Pause at top"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "smith-machine-deadlift",
    "name": "Smith Machine Deadlift",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Position feet shoulder-width beneath the Smith bar.",
      "Grip the bar just outside your knees with both hands.",
      "Hinge hips back and lower torso, keeping chest up.",
      "Extend hips and knees to lift the bar along the guides.",
      "Lower the bar with control to the starting position."
    ],
    "tips": [
      "Hinge at hips",
      "Keep back flat",
      "Drive through heels",
      "Bar close to shins"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "smith-machine-leg-press",
    "name": "Smith Machine Leg Press",
    "primaryMuscles": [
      "quads"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Set the safety stops and load the appropriate weight.",
      "Lie under the Smith bar and position feet wider than shoulder-width on the bar.",
      "Unrack the bar by rotating your feet upward.",
      "Lower the bar slowly toward your torso until legs form roughly a 90-degree angle.",
      "Press the bar up by extending your knees and hips."
    ],
    "tips": [
      "Keep core braced",
      "Press evenly with both feet",
      "Full range of motion",
      "Maintain foot flatness"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "smith-seated-shoulder-press",
    "name": "Smith Seated Shoulder Press",
    "primaryMuscles": [
      "shoulders"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Set a bench or seat under the Smith bar so the bar starts around shoulder height when you sit down.",
      "Sit tall with your back supported, plant your feet flat, and grip the bar just wider than shoulder width with palms forward.",
      "Unrack the bar and hold it above your upper chest with wrists stacked over elbows.",
      "Lower the bar in a straight path until it reaches about chin to shoulder level.",
      "Press the bar straight up until your arms are extended overhead.",
      "Lower the bar with control to the start position and repeat.",
      "Finish by locking out the top and rotating the bar to re-rack it on the hooks."
    ],
    "tips": [
      "Keep ribs down",
      "Press straight up",
      "Wrists stacked over elbows",
      "Feet flat and braced"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "spell-caster",
    "name": "Spell Caster",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Stand tall with your feet about shoulder-width apart, holding one dumbbell with both hands in front of your hips.",
      "Soften your knees and hinge slightly at your hips while keeping your chest up and back flat.",
      "Rotate your torso and lower the dumbbell toward the outside of one foot.",
      "Drive through your hips and return to the center with the dumbbell back in front of your hips.",
      "Rotate to the other side and lower the dumbbell toward the outside of the opposite foot.",
      "Continue alternating sides with controlled movement."
    ],
    "tips": [
      "Rotate through your torso",
      "Keep your back flat",
      "Bend at the hips",
      "Move with control"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "spine-stretch",
    "name": "Spine Stretch",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Sit on floor with legs extended and feet flexed.",
      "Extend arms straight ahead at shoulder height.",
      "Inhale, then as you exhale, reach forward, articulating your spine.",
      "Stretch forward as far as comfortable, keeping legs straight.",
      "Hold and return slowly to start."
    ],
    "tips": [
      "Lengthen spine",
      "Reach with fingertips",
      "Keep legs straight",
      "Relax neck"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "squat",
    "name": "Squat",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Stand with feet shoulder-width apart and toes slightly outward.",
      "Brace core and keep chest up.",
      "Initiate movement by pushing hips back and bending knees.",
      "Descend until thighs are at least parallel to the floor.",
      "Push through heels to return to standing."
    ],
    "tips": [
      "Keep knees tracking toes",
      "Maintain neutral spine",
      "Weight on midfoot/heels",
      "Chest up"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "stability-ball-leg-curl",
    "name": "Stability Ball Leg Curl",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [],
    "equipment": "other",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Lie face up on the floor, arms at your sides, heels on a stability ball.",
      "Lift hips to form a straight line from shoulders to heels.",
      "Bend knees to roll the ball toward your glutes.",
      "Pause and squeeze your hamstrings.",
      "Extend your legs to roll the ball back out."
    ],
    "tips": [
      "Hips up",
      "Control movement",
      "Don’t let hips sag",
      "Engage core"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "stability-ball-leg-elevated-crunch",
    "name": "Stability Ball Leg Elevated Crunch",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "other",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Place stability ball in front of you and sit down.",
      "Lie back and position your calves and feet on top of the ball with knees bent.",
      "Place your hands lightly behind your head or crossed on your chest.",
      "Engage your core and curl your upper body toward your knees.",
      "Pause briefly at the top, then lower back down without losing control."
    ],
    "tips": [
      "Keep lower back pressed to floor",
      "Do not pull with your neck",
      "Control the movement",
      "Exhale on lift"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "stairs-calf-stretch",
    "name": "Stairs Calf Stretch",
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand with the balls of your feet on a step or stair.",
      "Support yourself with a railing, wall, or sturdy object.",
      "Lower your heels slowly below the step to feel a stretch in your calves.",
      "Hold the stretch for 15-30 seconds.",
      "Raise heels back up and repeat as desired."
    ],
    "tips": [
      "Keep knees straight but not locked",
      "Lower heels gradually",
      "Engage core for balance",
      "Avoid bouncing"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "standing-adductor-stretch",
    "name": "Standing Adductor Stretch",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand wide with feet apart.",
      "Shift weight to one leg, bending at the knee.",
      "Keep the opposite leg straight and toes forward.",
      "Lean gently toward the bent knee for a deep inner thigh stretch.",
      "Hold, then switch to the other side."
    ],
    "tips": [
      "Keep both heels on floor",
      "Maintain upright torso",
      "Do not bounce",
      "Stretch slowly"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "standing-back-rotation-stretch",
    "name": "Standing Back Rotation Stretch",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand tall with feet shoulder-width apart.",
      "Extend arms at shoulder height or place hands on hips.",
      "Rotate torso gently to one side without moving hips.",
      "Hold stretch for desired time.",
      "Return to center and repeat on other side."
    ],
    "tips": [
      "Keep hips facing forward",
      "Rotate gently",
      "Elongate spine",
      "Don’t force stretch"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "standing-bench-calf-stretch",
    "name": "Standing Bench Calf Stretch",
    "primaryMuscles": [
      "calves"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand in front of a bench or sturdy surface.",
      "Place the ball of one foot onto the edge, keeping heel on the floor.",
      "Lean your body forward while keeping your knee straight.",
      "Hold the stretch for 15-30 seconds.",
      "Switch legs and repeat."
    ],
    "tips": [
      "Keep knee straight",
      "Lean from the hips",
      "Maintain upright posture",
      "Feel stretch in calf, not ankle"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "standing-hamstring-stretch",
    "name": "Standing Hamstring Stretch",
    "primaryMuscles": [
      "hamstrings"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand up straight with feet hip-width apart.",
      "Keep knees soft, and hinge forward at the hips.",
      "Lower your torso toward your legs while reaching for your toes.",
      "Stop when you feel a gentle stretch in your hamstrings.",
      "Hold for the desired duration, then return to standing."
    ],
    "tips": [
      "Keep back straight",
      "Hinge from hips",
      "Avoid locking knees",
      "Don't bounce"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "standing-hip-flexor-and-abdominal-stretch",
    "name": "Standing Hip Flexor and Abdominal Stretch",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand upright with feet shoulder-width apart.",
      "Lift arms overhead, palms facing forward.",
      "Arch back gently, lifting chest and looking upward.",
      "Shift hips forward slightly to increase hip flexor stretch.",
      "Hold and breathe for desired duration."
    ],
    "tips": [
      "Engage glutes",
      "Stretch upwards before leaning back",
      "Don’t force neck back",
      "Keep knees soft"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "standing-knee-raise-stretch",
    "name": "Standing Knee Raise Stretch",
    "primaryMuscles": [
      "quads"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand tall with feet together.",
      "Lift one knee toward your chest.",
      "Grasp your knee with both hands.",
      "Pull the knee gently toward your chest, feeling the stretch.",
      "Hold, then lower and repeat on the opposite leg."
    ],
    "tips": [
      "Keep torso upright",
      "Engage core",
      "Use arms to pull knee gently",
      "Do not lean back"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "standing-lateral-stretch",
    "name": "Standing Lateral Stretch",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand upright, feet hip-width apart.",
      "Raise one arm overhead, keeping it straight.",
      "Place other hand on hip or let it hang at side.",
      "Gently lean to the opposite side, keeping hips square.",
      "Hold, then return to center and repeat on the other side."
    ],
    "tips": [
      "Reach tall, then over",
      "Keep both feet grounded",
      "Hips facing forward",
      "Breathe into stretch"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "standing-quadriceps-stretch",
    "name": "Standing Quadriceps Stretch",
    "primaryMuscles": [
      "quads"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand upright, balancing on one foot.",
      "Bend the opposite knee, reaching back for the foot.",
      "Pull heel gently towards glute while keeping knees together.",
      "Keep torso tall and hips level.",
      "Hold the stretch, then switch legs."
    ],
    "tips": [
      "Knees side by side",
      "Torso tall",
      "Engage core",
      "Breathe steadily"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "standing-reach-up-back-rotation-stretch",
    "name": "Standing Reach Up Back Rotation Stretch",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand tall with feet shoulder-width apart.",
      "Raise both arms overhead.",
      "Gently arch your upper back and chest.",
      "Rotate your torso to one side while maintaining the stretch.",
      "Return to center, then rotate to the other side."
    ],
    "tips": [
      "Keep core engaged",
      "Avoid hyperextending lower back",
      "Reach up and out",
      "Move smoothly"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "standing-side-bend-stretch-bent-arm",
    "name": "Standing Side Bend Stretch (Bent Arm)",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand with feet shoulder-width apart.",
      "Raise one arm overhead, bending the elbow comfortably.",
      "Lean sideways away from the raised arm to stretch the side of your torso.",
      "Hold the stretch for 15-30 seconds.",
      "Switch sides and repeat."
    ],
    "tips": [
      "Keep hips square",
      "Bend without twisting",
      "Stretch through the side",
      "Breathe steadily"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "standing-wheel-rollout",
    "name": "Standing Wheel Rollout",
    "primaryMuscles": [
      "chest"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "advanced",
    "instructions": [
      "Stand with feet shoulder-width apart and hold the ab wheel.",
      "Bend forward and place the wheel on the floor in front of your feet.",
      "Roll the wheel forward, extending your arms and torso while keeping your core tight.",
      "Lower your body until you're just above the floor, maintaining a straight line from head to heels.",
      "Reverse the motion by pulling the wheel back toward your feet, returning to the start."
    ],
    "tips": [
      "Engage core strongly",
      "Do not let hips sag",
      "Keep arms straight",
      "Move slowly and with control"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "stationary-bike",
    "name": "Stationary Bike",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Set seat and handlebar to appropriate heights.",
      "Sit upright and grip the handlebars lightly.",
      "Place feet securely on the pedals.",
      "Begin pedaling at a comfortable resistance and pace.",
      "Continue for your intended duration, maintaining good form."
    ],
    "tips": [
      "Keep back straight",
      "Drive through full pedal stroke",
      "Relax shoulders",
      "Maintain steady breathing"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "straight-leg-up-crunch",
    "name": "Straight-Leg Up Crunch",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie on back, legs straight up, feet flexed.",
      "Place arms beside you or hands behind head.",
      "Engage core, lift head and shoulders toward legs.",
      "Pause at top, exhale.",
      "Lower down with control."
    ],
    "tips": [
      "Chin tucked",
      "Reach toward ceiling",
      "Don't strain neck",
      "Slow movement"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "supine-dumbbell-biceps-curl",
    "name": "Supine Dumbbell Biceps Curl",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [],
    "equipment": "dumbbell",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie flat on your back holding dumbbells at your sides, arms fully extended.",
      "Keep palms facing forward (supinated grip).",
      "Curl the dumbbells up toward your shoulders, elbows stationary.",
      "Squeeze your biceps at the top.",
      "Lower the weights slowly to the start position."
    ],
    "tips": [
      "Upper arms still",
      "Don’t arch back",
      "Full stretch at bottom",
      "Slow negative"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "treadmill-running",
    "name": "Treadmill Running",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Step onto the treadmill and position feet on the sides.",
      "Select preferred speed and incline.",
      "Begin running, holding onto the handrails if necessary for balance.",
      "Focus on smooth strides and upright posture.",
      "Cool down by gradually reducing speed before stopping."
    ],
    "tips": [
      "Keep posture upright",
      "Land softly",
      "Don't overstride",
      "Use arm swing for balance"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "triceps-dips",
    "name": "Triceps Dips",
    "primaryMuscles": [
      "triceps"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Sit on a bench or chair with hands gripping the edge.",
      "Extend legs forward and slide hips off the seat.",
      "Lower body by bending elbows to 90 degrees.",
      "Press through palms to straighten arms and lift body.",
      "Repeat for reps."
    ],
    "tips": [
      "Keep elbows close to your body",
      "Lower slowly",
      "Press through your palms",
      "Avoid shrugging shoulders"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "twisting-crunch",
    "name": "Twisting Crunch",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Lie on your back with knees bent and feet flat.",
      "Place hands lightly behind your head.",
      "Crunch up, twisting your torso to bring one shoulder toward the opposite knee.",
      "Return to start and repeat to the other side.",
      "Alternate sides for each repetition."
    ],
    "tips": [
      "Twist from the torso",
      "Elbow toward knee",
      "Avoid pulling neck",
      "Keep lower back down"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "v-up",
    "name": "V-Up",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Lie on your back with arms extended overhead and legs straight.",
      "Engage your core to lift your legs and torso simultaneously.",
      "Reach your hands toward your feet at the top, forming a 'V' shape.",
      "Pause briefly, squeezing your abs.",
      "Lower down slowly to starting position."
    ],
    "tips": [
      "Lift with abs",
      "Keep legs straight",
      "Reach toward toes",
      "Control the descent"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "vertical-leg-raise-on-parallel-bars",
    "name": "Vertical Leg Raise (on parallel bars)",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "compound",
    "difficulty": "intermediate",
    "instructions": [
      "Support yourself on the parallel bars with straight arms and your legs hanging together.",
      "Pull your shoulders down and brace your midsection to stop your body from swinging.",
      "Keep your knees straight and lift your legs forward in front of you.",
      "Raise your legs until they reach hip height or slightly higher.",
      "Pause briefly at the top without leaning back.",
      "Lower your legs with control to the start and reset before the next repetition."
    ],
    "tips": [
      "Keep legs straight",
      "Brace and stop the swing",
      "Lift with control",
      "Shoulders down"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "walk-wave-machine",
    "name": "Walk Wave Machine",
    "primaryMuscles": [
      "fullbody"
    ],
    "secondaryMuscles": [],
    "equipment": "machine",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Step onto the machine and position feet on pedals.",
      "Grip handles for stability.",
      "Initiate movement by pushing one leg outward while the other follows.",
      "Maintain a rhythmic, lateral gliding motion.",
      "Continue for the desired time or intensity."
    ],
    "tips": [
      "Maintain upright posture",
      "Engage glutes",
      "Move laterally",
      "Use smooth, controlled motion"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "weighted-leg-extension-crunch",
    "name": "Weighted Leg Extension Crunch",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "other",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Lie flat on your back with knees bent, holding a weight across your chest.",
      "Lift your legs to tabletop position (knees over hips, 90-degree bend).",
      "Simultaneously extend your legs outward and crunch your upper body up.",
      "Pause briefly at peak contraction.",
      "Return arms and legs to the starting position."
    ],
    "tips": [
      "Keep core braced",
      "Don't arch lower back",
      "Control leg extension",
      "Crunch chest up"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "weighted-lying-twist",
    "name": "Weighted Lying Twist",
    "primaryMuscles": [
      "core"
    ],
    "secondaryMuscles": [],
    "equipment": "other",
    "category": "isolation",
    "difficulty": "intermediate",
    "instructions": [
      "Lie on your back with arms outstretched for support.",
      "Hold a weight between your feet (or over chest).",
      "Lift your legs up to a 90-degree angle.",
      "Slowly rotate your legs to one side, keeping shoulders down.",
      "Return to center and repeat on the other side."
    ],
    "tips": [
      "Keep shoulders grounded",
      "Move slowly and controlled",
      "Engage obliques",
      "Don’t swing legs"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "weighted-sissy-squat",
    "name": "Weighted Sissy Squat",
    "primaryMuscles": [
      "quads"
    ],
    "secondaryMuscles": [],
    "equipment": "other",
    "category": "compound",
    "difficulty": "advanced",
    "instructions": [
      "Stand tall with your feet about hip-width apart and hold the weight securely in front of your chest or across your upper back.",
      "Rise onto the balls of your feet and brace your midsection.",
      "Lean your torso back in one straight line from knees to shoulders as your knees travel forward.",
      "Lower under control by bending your knees until you feel a strong stretch through the front of your thighs.",
      "Drive through the balls of your feet and straighten your knees to return to the start.",
      "Finish tall and reset your balance before the next repetition."
    ],
    "tips": [
      "Lean back as one piece",
      "Keep hips extended",
      "Drive knees forward",
      "Stay on your toes"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "weighted-standing-curl",
    "name": "Weighted Standing Curl",
    "primaryMuscles": [
      "biceps"
    ],
    "secondaryMuscles": [],
    "equipment": "other",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Stand tall with a weight in each hand at your sides and turn your palms forward.",
      "Set your feet about hip-width apart and keep your elbows pinned near your ribs.",
      "Curl the weights upward by bending your elbows until your hands reach shoulder height.",
      "Pause briefly at the top without letting your elbows drift forward.",
      "Lower the weights back down with control until your arms are fully straightened at your sides."
    ],
    "tips": [
      "Elbows stay by your sides",
      "Curl, don't swing",
      "Palms face forward",
      "Lower with control"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "wide-grip-cable-lat-pulldown",
    "name": "Wide Grip Cable Lat Pulldown",
    "primaryMuscles": [
      "back"
    ],
    "secondaryMuscles": [],
    "equipment": "cable",
    "category": "compound",
    "difficulty": "beginner",
    "instructions": [
      "Adjust the thigh pad and sit at the cable pulldown machine.",
      "Grip the wide bar overhead with a pronated (overhand) grip, hands wider than shoulders.",
      "Lean back slightly, brace your core, and retract your shoulder blades.",
      "Pull the bar down to your upper chest, driving elbows down and out.",
      "Pause briefly, then slowly release the bar back to the starting position."
    ],
    "tips": [
      "Pull elbows down",
      "Keep chest up",
      "Don't swing",
      "Control the weight"
    ],
    "alternatives": [],
    "isCustom": false
  },
  {
    "id": "wrist-circles",
    "name": "Wrist Circles",
    "primaryMuscles": [
      "forearms"
    ],
    "secondaryMuscles": [],
    "equipment": "bodyweight",
    "category": "isolation",
    "difficulty": "beginner",
    "instructions": [
      "Extend arms out in front or to sides.",
      "Make fists or keep hands open.",
      "Slowly rotate wrists in circular motions.",
      "Perform several circles in one direction.",
      "Switch direction and repeat."
    ],
    "tips": [
      "Move slowly",
      "Full range of motion",
      "Stay relaxed",
      "Breathe steadily"
    ],
    "alternatives": [],
    "isCustom": false
  }
]

/** Fast id → Exercise lookup for the library UI and plan rendering. */
export const EXERCISES_BY_ID: Readonly<Record<string, Exercise>> =
  Object.fromEntries(SEED_EXERCISES.map((e) => [e.id, e]))
