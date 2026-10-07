# ForgeFit — Requirements & Technical Design

> Greenfield build in an empty workspace at `/Users/abi-mac/Documents/Me/dev/gym`.
> Production-ready, mobile-first, offline-first Progressive Web App for personal
> strength-training / workout tracking. **PLAN → TRAIN → LOG → ANALYZE → PROGRESS → RECOVER → IMPROVE.**

---

# PART A — REQUIREMENTS

## A.1 Summary

ForgeFit is a serious personal-training system (not a basic CRUD tracker). A user opens
the app in the gym, immediately sees today's workout, sees what they did last time, gets a
recommended target, logs each set in 2-3 taps, uses a rest timer, gets PRs detected
automatically, finishes the workout, and has all progress stored securely in Firebase and
synced across devices. The app must work fully offline and sync on reconnect.

The build happens with **no real Firebase project and no credentials**. Therefore the entire
Firebase integration must be real and complete, yet initialize safely when the
`NEXT_PUBLIC_FIREBASE_*` env vars are absent, so that `pnpm lint`, `pnpm typecheck`, and
`pnpm build` all succeed and nothing crashes at import time. The app becomes fully functional
the moment real creds are dropped into `.env.local`.

## A.2 Functional Requirements

**FR-1 Authentication.** Email/password (login, register, forgot password, reset password,
logout) and Google sign-in. No dashboard flash before auth resolves; a loading screen covers
the undetermined state. Protected routes live under an `app/(protected)/` route group guarded
by an `AuthGuard`. Flow: app start → Firebase Auth init → loading → unauthenticated → login;
authenticated → load profile → load workout data → dashboard.

**FR-2 Onboarding (first login).** Choose goal (muscle_gain | strength | fat_loss | fitness |
custom), preferred unit (kg | lb), experience (beginner | intermediate | advanced), and pick a
plan. Persist to `users/{uid}` with `onboardingCompleted = true`. Users who have not completed
onboarding are routed to onboarding, not the dashboard.

**FR-3 User profile.** Stored at `users/{uid}` keyed by Firebase `uid` — never email as a doc
id. Editable profile (display name, photo, goal, experience, unit).

**FR-4 Seeded Monday–Sunday split + exercise library.** A pre-populated weekly split
(`src/data/workoutPlan.ts`) and a searchable exercise library (`src/data/exercises.ts`) with
muscles / equipment / category / difficulty / instructions / tips / alternatives. Exact split
(see §C.3 for the canonical seed): MON Chest&Triceps, TUE Back&Biceps, WED Legs&Calves, THU
Shoulders&Abs, FRI Arms&Core HIIT, SAT Full-Body HIIT, SUN Rest/active recovery.

**FR-5 Session engine.** Session states `NOT_STARTED | IN_PROGRESS | COMPLETED | ABANDONED`.
Start, pause/resume, finish, and abandon workouts. A `WorkoutSession` tracks id, uid, dayId,
workoutName, status, startedAt, completedAt, durationSeconds, totalSets, completedSets,
totalVolume, notes, mood, energy, soreness, createdAt, updatedAt.

**FR-6 Active Workout Mode.** Distraction-free screen: live elapsed timer, one exercise at a
time, previous-performance panel, recommended target, current set entry, rest timer, next-
exercise preview, sticky bottom controls, and guard against accidental navigation away.

**FR-7 Set logging.** Track per set: target reps, actual reps, weight, RPE, RIR, tempo, rest
time. Quick logging in ~2-3 taps with autofill from previous/recommended values. Supports
supersets and circuits/HIIT with an interval timer.

**FR-8 Previous performance.** Shown from `exerciseHistory`, per exercise, surfaced during the
active workout.

**FR-9 Progressive overload engine** (`src/lib/progression.ts`). Recommendation types
`INCREASE_WEIGHT | INCREASE_REPS | MAINTAIN | REDUCE_WEIGHT | REDUCE_VOLUME | DELOAD`. Double-
progression model. Returns `ProgressionRecommendation { type, currentWeight,
recommendedWeight, targetRepMin, targetRepMax, confidence, reason }`. Configurable; user may
override; must never permanently mutate the stored plan.

**FR-10 RPE/RIR tracking.** Setting selects `RPE | RIR | Both | None`; UI adapts.

**FR-11 Volume** (`src/lib/volume.ts`). Set / exercise / workout / muscle / week / month volume
plus change %.

**FR-12 Muscle-group analytics.** Volume rolled up per muscle group.

**FR-13 PR engine** (`src/lib/oneRepMax.ts`). Detect Weight, Rep, Volume, and Estimated-1RM
PRs. Epley formula `1RM = weight * (1 + reps/30)`. PRs stored in Firestore
`personalRecords/{recordId}`.

**FR-14 PR celebration.** `PRBadge` + `PRCelebration` using framer-motion + gsap + canvas-
confetti; optional vibration/sound; respects reduced-motion.

**FR-15 Exercise history + charts.** Per-exercise history with Recharts.

**FR-16 Workout history.** List with filters + a monthly calendar coloured Completed / Partial
/ Planned / Rest.

**FR-17 Streaks.** Rest days do not break the streak.

**FR-18 Timers.** Workout timer persists across app close/reopen. Rest timer with presets
30/60/90/120/180 + custom, pause/resume/skip/restart, vibration/audio/visual cues, auto-start,
disablable, smart rest. Hooks `useWorkoutTimer`, `useRestTimer`.

**FR-19 Templates.** Workout templates CRUD.

**FR-20 Exercise library UX.** Search / filter / categories / custom exercises, details,
substitutions that preserve history.

**FR-21 Units.** kg/lb conversion that never corrupts stored values (`src/lib/units.ts`).

**FR-22 Body tracking.** Body weight, body-fat %, measurements, trends/charts.

**FR-23 Progress photos.** Uploaded to Firebase Storage, per-user secured. Build must not fail
without Storage creds.

**FR-24 Recovery.** Sleep, energy, stress, soreness, motivation; a recovery score; fatigue
insights framed as a **training insight, not medical advice**; manual deload.

**FR-25 Goals.** Strength and body-weight goals with progress bars.

**FR-26 Hydration.** Configurable target, +250/500/750 ml quick adds, stored in Firestore when
enabled.

**FR-27 Dashboard.** Dynamic greeting; today's workout auto-selected by day of week; set/
exercise counts; estimated time; progress %; volume; streak; weekly volume; new PRs — all
dynamic. Sunday rest-day variant. Swipeable `DaySelector` MON–SUN with per-day status, auto-
selecting today.

**FR-28 Reports & analytics.** Weekly/monthly reports and analytics modules
(`src/lib/analytics/{volume,strength,consistency,muscleVolume,personalRecords,trends}.ts`) with
Recharts; range filters 7D/30D/90D/6M/1Y/ALL; **SUMMARY documents** (`analyticsWeekly/{weekId}`,
`analyticsMonthly/{monthId}` — see §C.4 for the Firestore-valid path) so reports don't load full
history; lazy-load heavy charts.

**FR-29 Firestore write strategy.** Edit locally in Zustand; write on set completion and
meaningful events (optimistic); batched writes / transactions; debounce; pagination; query
limits; selective listeners; no polling; no whole-collection listeners.

**FR-30 Offline-first.** Firestore offline persistence / IndexedDB; the workout screen fully
functions offline.

**FR-31 Sync engine** (`src/lib/sync/{syncManager,syncQueue,conflictResolver,networkStatus}.ts`).
`SyncOperation` queue flushed on reconnect; `SyncStatus` UI; conflict management via server
timestamps + deterministic rules + transactions; **completed sessions are immutable**; never
destroy history or overwrite another device.

**FR-32 Achievements.** First Workout; 10/50/100 Workouts; 10/30-Day Streak; First PR; 10 PRs;
100,000 kg Total Volume. Stored in Firestore with an unlock animation.

**FR-33 Backup / import / export (Settings).** Export (`forgefit-backup-YYYY-MM-DD.json`);
Import (Zod-validated, auto local backup before import); Clear Local Cache; Delete Account
(secure Auth + Firestore + Storage deletion via a Cloud Function or a documented server step —
never admin creds in client). `BackupManager`.

**FR-34 PWA.** `manifest.json` (name/short_name ForgeFit, display standalone, background_color
`#09090b`, theme_color `#22c55e`), icons, splash, service worker, offline cache,
installability. Custom install prompt (bottom sheet) via `beforeinstallprompt` + iOS
instructions; don't nag after dismissal (`useInstallPrompt`). Optional browser notifications,
only after the user enables them.

**FR-35 Mobile-first UX.** Bottom nav (Home / Workout / Progress / History / Profile) on
mobile; sidebar + multi-column on desktop. ≥44 px touch targets; bottom sheets; swipe; sticky
workout controls. Aesthetic: primary `#22c55e`, background `#09090b`, white/gray, subtle
gradients/glass.

**FR-36 Animations & haptics.** Respect `prefers-reduced-motion`; haptics via
`navigator.vibrate` (`useHaptics`) are enhancement-only and never required for function.

**FR-37 Accessibility.** Semantic HTML, keyboard nav, ARIA, accessible dialogs/focus/
validation, high contrast, reduced motion.

**FR-38 Robust states.** Skeletons (never blank), empty/error/offline/success states, friendly
error messages — never raw Firebase errors.

**FR-39 Data integrity.** Never auto-delete history; never overwrite historical sessions on
plan change; never lose offline data; never silently overwrite another device.

## A.3 Non-Functional Requirements

- **NFR-1 Build without creds.** `pnpm lint`, `pnpm typecheck`, `pnpm build` succeed with no
  `NEXT_PUBLIC_FIREBASE_*` set and nothing throws at import time.
- **NFR-2 Strict TypeScript.** `strict: true`; no unnecessary `any`; typed Firestore via
  `withConverter`.
- **NFR-3 Performance.** First meaningful paint fast on mid-range mobile; heavy charts and
  analytics lazy-loaded; summary docs instead of full-history reads; RSC by default to minimise
  client JS.
- **NFR-4 Security.** Strict per-user Firestore + Storage rules; no admin creds / service-
  account JSON / private keys in client; App Check wired but optional at build time.
- **NFR-5 Offline latency.** Set logging reflects instantly from Zustand regardless of network.
- **NFR-6 Accessibility.** Meets the practices in FR-37 (full WCAG conformance requires manual
  assistive-tech testing and is out of automated scope).

## A.4 Acceptance Criteria (testable)

1. With an empty `.env.local`, `pnpm install && pnpm lint && pnpm typecheck && pnpm build` all
   exit 0 and no module throws at import.
2. With empty env, launching the app shows a clear **"Firebase not configured"** runtime state
   rather than a crash or infinite spinner.
3. Dropping valid creds into `.env.local` makes auth, Firestore reads/writes, and Storage
   uploads function with **no code change**.
4. `firestore.rules` denies any read/write where `request.auth == null` or
   `request.auth.uid != uid`; it contains no `allow read, write: if true`.
5. `storage.rules` restricts each user to their own path and nothing else.
6. User docs are keyed by `uid`; no code path uses email as a document id.
7. Completing a set that beats history creates a `personalRecords/{recordId}` doc and triggers
   the PR celebration.
8. Est-1RM equals `weight * (1 + reps/30)` (Epley) to within floating-point tolerance.
9. The workout timer resumes with the correct elapsed value after the app is closed and
   reopened mid-session.
10. Logging sets with the network disabled persists locally; reconnecting flushes the sync
    queue and the data appears in Firestore with no duplicates.
11. A completed `WorkoutSession`'s training data cannot be mutated, appended to, or deleted by a
    later write — the security rules forbid changing its fields (except the `summaryApplied`
    bookkeeping toggle), deleting the session doc, and creating/updating/deleting any `exercises`/
    `sets` child under it (create blocked via a parent-status `get()`, mutate/delete via the
    mirrored `sessionCompleted` flag). Service layer and conflict resolver enforce the same as
    defense in depth. An emulator rules test asserts each of these denials.
12. Switching kg↔lb changes displayed values only; stored canonical values are unchanged and
    round-trip without drift.
13. The dashboard auto-selects today's day and shows the Sunday rest-day variant on Sundays.
14. Export produces `forgefit-backup-YYYY-MM-DD.json`; importing it back after a Clear Local
    Cache restores the data; import rejects a malformed file via Zod before writing; import
    rejects a backup whose `schemaVersion` is greater than `APP_SCHEMA_VERSION` with a friendly
    message and writes nothing; a backup with a lower `schemaVersion` is migrated then imported
    (or clearly rejected if no migration path exists); a local safety backup is taken before any
    import attempt.
15. The app satisfies PWA installability (valid manifest + service worker) in a Lighthouse PWA
    audit, and the install prompt does not reappear after dismissal.
16. All interactive routes under `(protected)/` redirect to `/login` when unauthenticated with
    no dashboard flash.

## A.5 Out of Scope

- Real Firebase project provisioning and credential issuance (dropped in later, not built here).
- Social / multi-user features (sharing, following, coaching another person's account).
- Payments / subscriptions.
- Native app-store packaging (PWA install only).
- Nutrition / calorie tracking (hydration is the only ingestion feature).
- Medical or clinical advice; recovery output is framed strictly as training insight.
- Server-rendered personalized analytics via Cloud Functions beyond the single optional
  account-deletion function.

---

# PART B — ASSUMPTIONS (explicit)

1. **Node & pnpm**: Node 20 LTS, pnpm 9+. The design targets Next.js 15 stable + React 19.
2. **Canonical weight unit**: all weights are **stored in kilograms** as the single source of
   truth; `preferredUnit` governs display/entry only (§C.9). This resolves FR-21 unambiguously.
3. **Analytics summaries are client-maintained**: with Cloud Functions optional, weekly/monthly
   summary docs are computed and written client-side on session completion (incremental upsert
   via transaction), not by a scheduled server job. A Cloud Function is documented as the future
   hardening path.
4. **App Check**: wired behind an env flag (`NEXT_PUBLIC_APPCHECK_SITE_KEY`); when absent it is
   skipped so builds/dev work without a reCAPTCHA key.
5. **Account deletion**: the client deletes the user's own Firestore docs + Storage objects it
   can reach under the security rules, then deletes the Auth user; a Cloud Function
   (`deleteUserData`) is provided as optional code + documented as the authoritative server-side
   cleanup. No admin creds ship in the client.
6. **Analytics (Firebase)**: `getAnalytics` is lazy, browser-only, and gated on both env
   presence and `isSupported()`.
7. **"profile" and "settings" as subcollections**: the contract lists `users/{uid}/profile/data`
   and `users/{uid}/settings/preferences`. We honor the given shape with **a single
   authoritative copy of the profile** at `profile/data` (full `UserProfile`, including
   `onboardingCompleted`), read directly for `AuthGuard`/onboarding routing. The root
   `users/{uid}` doc is NOT a profile mirror — it carries only `{ uid, createdAt, updatedAt }`
   for ownership. `preferredUnit` is stored only on `UserProfile`, never duplicated into
   `UserSettings`. See §C.2 for the full rationale (this removes the earlier triplication/drift
   risk).

---

# PART C — TECHNICAL DESIGN

## C.1 Overview

ForgeFit is a Next.js 15 App-Router PWA in strict TypeScript. **Firestore is the cloud source
of truth**; **Zustand is UI/application state and the fast local cache** (active workout,
optimistic edits, transient form state, cached reads, offline/sync flags); **Firestore offline
persistence (IndexedDB)** is the durable offline layer. `localStorage` is used only by Zustand's
`persist` middleware for small UI/session resumption state and is **never** the permanent
database.

The UI is **RSC-by-default**. Static shells, layouts, marketing/empty states, and seed-driven
non-interactive content render on the server. Everything that touches the Firebase client SDK,
Zustand, timers, charts, or browser APIs is a Client Component — because the Firebase Web SDK and
Zustand are inherently client-side, the authenticated data surfaces are predominantly client
components mounted inside server-rendered layouts. We keep the client bundle small by pushing
layout/structure to RSC and lazy-loading heavy client islands (charts, celebration, calendar).

All Firestore/Storage/Auth access is funneled through `src/services/*`, which call the thin
`src/lib/firebase/*` layer. UI components never import `firebase/firestore` directly.

## C.2 The guarded Firebase-init strategy (NFR-1, the central constraint)

`src/lib/firebase/config.ts` exports a **lazy, guarded singleton**:

```ts
// Shape (design intent, not final code)
export function firebaseConfigPresent(): boolean // all 6 NEXT_PUBLIC_FIREBASE_* non-empty
export function getFirebaseApp(): FirebaseApp | null
export function getFirebaseAuth(): Auth | null
export function getDb(): Firestore | null
export function getStorageClient(): FirebaseStorage | null
```

Rules that make builds green without creds:

- **No top-level side effects.** No module calls `initializeApp()` at import time. Each getter
  checks `firebaseConfigPresent()`; if false it returns `null` (never throws).
- **Singleton via `getApps()/getApp()/initializeApp()`** to survive Next.js hot reload and avoid
  duplicate-app errors.
- **Client-only.** Firebase client getters run only in the browser (`typeof window`); on the
  server they return `null`, so RSC never pulls the client SDK into a server render path.
- **Offline persistence** enabled once, on first `getDb()` in the browser, via
  `initializeFirestore(app, { localCache: persistentLocalCache({ tabManager:
  persistentMultipleTabManager() }) })`.
- **App Check & Analytics** only initialize when their respective env flags are present and (for
  Analytics) `isSupported()` resolves true. **App Check** (`initializeAppCheck` with a
  `ReCaptchaV3Provider`) runs **browser-only, after `getFirebaseApp()` has returned a non-null
  app**, and only when `NEXT_PUBLIC_APPCHECK_SITE_KEY` is present; otherwise it is skipped
  entirely (so builds/dev work with no key). If App Check is ever enabled in local dev, a debug
  token (`self.FIREBASE_APPCHECK_DEBUG_TOKEN`) is documented in `.env.local.example` comments as
  the dev path. Analytics is identically browser-only + lazy + `isSupported()`-gated.

**Config state surfaced to the app.** `firebaseConfigPresent()` feeds a
`FirebaseConfigContext`/`settingsStore` flag. When false:
- `AuthGuard` **renders the "Firebase not configured" state inline** (friendly copy + pointer to
  `.env.local.example`) with no navigation, so protected routes short-circuit immediately instead
  of spinning forever. The dedicated `/not-configured` route (§C.15) exists **only** as a
  direct-link fallback (e.g. for a shared deep link) and reuses the same component; it is not
  navigated to by the guard. This avoids a redundant second mechanism.
- Services short-circuit: every service function guards on a non-null client and otherwise
  returns a typed `ServiceResult` error `{ ok: false, code: 'firebase/not-configured' }` (no
  throw). This keeps acceptance criteria 1-3 satisfiable.

**Service return contract.** All services return a discriminated union
`ServiceResult<T> = { ok: true; data: T } | { ok: false; code: string; message: string }`.
Raw Firebase errors are mapped to friendly `code`/`message` here (FR-38) and never surfaced
to the UI verbatim.

**AuthGuard state machine — no flash in ANY intermediate state (FR-1, AC-16; resolves iter-4
MEDIUM-5).** The guard is an explicit finite state machine whose status lives in `authStore` as
`authStore.phase`. There are three distinct "not ready yet" states, and the earlier revision only
covered the first; all three now render the **full-screen loader with no route change**, so an
authenticated user can never flash the dashboard shell or bounce to `/login` while the profile
read is still in flight:

```
phase =
  | 'not-configured'          → render inline "Firebase not configured" state; no navigation
  | 'initializing'            → onAuthStateChanged has NOT yet fired once; full-screen loader, NO route change
  | 'authed-loading-profile'  → user is non-null but profile/data read is in flight; full-screen loader, NO route change
  | 'unauthenticated'         → onAuthStateChanged resolved to null; THIS is the only phase that redirects to /login
  | 'onboarding'              → profile loaded AND onboardingCompleted === false; route to onboarding
  | 'ready'                   → profile loaded AND onboardingCompleted === true; render protected children
```

Transitions: config check runs first (`not-configured` short-circuits everything). Otherwise the
guard starts in `initializing`; the first `onAuthStateChanged` callback moves it to either
`unauthenticated` (→ redirect `/login`) or `authed-loading-profile` while
`profileService.getProfile(uid)` runs. Only when that read resolves does it move to `onboarding`
or `ready`. Redirects happen on **exactly one** phase (`unauthenticated`); the two loading phases
(`initializing`, `authed-loading-profile`) and `onboarding` never render the dashboard shell.
This closes the window where a logged-in user with an unresolved profile could momentarily see
either the dashboard or a `/login` bounce. The skeleton/loader is the same full-screen component
used during initial auth so there is no visual seam between the two loading phases.

**Env files.** `.env.local` (committed? no — gitignored, blank placeholders created locally)
and a committed **`.env.local.example`** listing all six `NEXT_PUBLIC_FIREBASE_*` keys plus
optional `NEXT_PUBLIC_APPCHECK_SITE_KEY`, `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`. `.gitignore`
already excludes `.env.local`.

**Field-location rationale (resolving Assumption 7 — no profile triplication).** To eliminate
the drift class entirely, there is **exactly one authoritative copy of the profile**:
`users/{uid}/profile/data` holds the full `UserProfile` including `onboardingCompleted`, and
**`AuthGuard`/onboarding routing reads `profile/data` directly** (one nested read at login,
cheap and offline-cached). We do **not** keep a denormalized profile mirror on the root
`users/{uid}` doc. The root doc still exists as the parent of the subcollections and carries
only `{ uid, createdAt, updatedAt }` for ownership stamping/rule checks — it is not a second
copy of profile fields, so there is nothing to drift. `preferredUnit` lives **only** on
`UserProfile` (`profile/data`); it is **not** also stored in `UserSettings` (the former "unit
mirror" is removed, see §C.3). Every profile mutation is a single document write to
`profile/data`; because there is one copy, no cross-doc batch or reconciliation rule is needed.
`users/{uid}/settings/preferences` holds `UserSettings` (training/UI prefs), which does not
duplicate any profile field.

## C.3 Data model (`src/types/`)

All models in `src/types/` (barrel `index.ts`). Timestamps are Firestore `Timestamp` in
Firestore and converted to `Date`/epoch ms in app state by converters. **No `any`.**

```ts
type DayOfWeek = 'mon'|'tue'|'wed'|'thu'|'fri'|'sat'|'sun'
type Goal = 'muscle_gain'|'strength'|'fat_loss'|'fitness'|'custom'
type Experience = 'beginner'|'intermediate'|'advanced'
type Unit = 'kg'|'lb'
type SessionStatus = 'NOT_STARTED'|'IN_PROGRESS'|'COMPLETED'|'ABANDONED'
type RpeMode = 'RPE'|'RIR'|'Both'|'None'
type MuscleGroup = 'chest'|'back'|'shoulders'|'biceps'|'triceps'|'quads'|'hamstrings'
  |'glutes'|'calves'|'core'|'forearms'|'fullbody'
type ExerciseCategory = 'compound'|'isolation'|'cardio'|'hiit'|'mobility'
type Equipment = 'barbell'|'dumbbell'|'cable'|'machine'|'bodyweight'|'kettlebell'|'band'|'other'
type ProgressionType = 'INCREASE_WEIGHT'|'INCREASE_REPS'|'MAINTAIN'|'REDUCE_WEIGHT'
  |'REDUCE_VOLUME'|'DELOAD'
```

Core entities (fields; `kg` = canonical kilograms):

- **UserProfile**: uid, email, displayName, photoURL?, goal, experience, preferredUnit,
  onboardingCompleted, createdAt, updatedAt.
- **UserSettings**: rpeMode, restDefaultsSeconds, autoStartRest, smartRestEnabled (§C.8a),
  soundEnabled, hapticsEnabled, hydrationTargetMl, hydrationEnabled, progressionConfig (increment
  steps, rep windows, deload thresholds), reducedMotionOverride?, notificationsEnabled. **Note:**
  `preferredUnit` is intentionally NOT here — it lives only on `UserProfile` to avoid a duplicate
  copy (§C.2). `deviceId` also lives here (persisted) — see the `WorkoutSession` note below.
- **Exercise** (library item): id, name, primaryMuscles[], secondaryMuscles[], equipment,
  category, difficulty, instructions[], tips[], alternatives[](exerciseIds), isCustom, uid?
  (for custom), createdAt?.
- **ExerciseSet** (plan prescription): targetSets, targetRepMin, targetRepMax, targetRpe?,
  restSeconds, tempo?, note?.
- **WorkoutPlan**: id, uid, name, isTemplate, days: Record<DayOfWeek, PlanDay>, createdAt,
  updatedAt. **PlanDay**: dayId, workoutName, isRest, entries: PlanEntry[]. **PlanEntry**:
  exerciseId, prescription: ExerciseSet, supersetGroup?, circuitGroup?, intervalWorkSeconds?,
  intervalRestSeconds?, order.
- **WorkoutSession**: id, uid, dayId, workoutName, status, startedAt?, completedAt?,
  durationSeconds, totalSets, completedSets, totalVolumeKg, notes?, mood?, energy?, soreness?,
  createdAt, updatedAt, planId, deviceId, schemaVersion, **summaryApplied** (boolean, default
  false; flipped true in the completion transaction — the durable analytics idempotency marker,
  §C.7 Step 3).
  - **`deviceId`** = a UUID generated **once** on first app launch and stored in `settingsStore`
    (`persist`→localStorage); stable for the install (a reinstall/cache-clear mints a new one,
    which is fine — it is used **only** for conflict attribution/"which device last wrote", never
    as an identity or security signal).
  - **`schemaVersion`** = `APP_SCHEMA_VERSION` (§C.11) stamped at session-creation time; read by
    the converters (§C.4) to drive forward migration of older session docs on read. It is the
    same integer constant used by backup export/import, applied here per-document.
- **ExerciseSession** (`workoutSessions/{id}/exercises/{id}`): id, sessionId, exerciseId,
  order, supersetGroup?, circuitGroup?, targetPrescription, notes?, **sessionCompleted**
  (boolean; mirrors the parent session's COMPLETED state so rules can freeze the doc without a
  cross-doc read — §C.9; defaults false, flipped true only in the completion batch).
- **SetLog** (`.../exercises/{id}/sets/{id}`): id, exerciseSessionId, setIndex, targetReps?,
  actualReps? (optional — omitted for duration-based interval/hold sets), durationSeconds? (for
  interval rounds and timed holds; exactly one of `actualReps`/`durationSeconds` is present, a
  Zod refinement), weightKg, rpe?, rir?, tempo?, restSeconds?, isWarmup, isCompleted, completedAt,
  isPr?: { weight?: boolean; reps?: boolean; volume?: boolean; e1rm?: boolean },
  **sessionCompleted** (boolean; same mirror as ExerciseSession, defaults false).
- **ExerciseHistory** (`exerciseHistory/{exerciseId}`): exerciseId, uid, lastPerformedAt,
  bestE1rmKg, bestWeightKg, bestRepsAtWeight?, recentSessions: RolledSet[] (bounded ring, e.g.
  last 10 sessions' top sets) + rollups for Previous Performance without deep reads.
- **PersonalRecord**: id, uid, exerciseId, type ('weight'|'reps'|'volume'|'e1rm'), valueKg|value,
  reps?, sessionId, achievedAt.
- **ProgressionRecommendation**: type, currentWeightKg, recommendedWeightKg, targetRepMin,
  targetRepMax, confidence (0-1), reason.
- **BodyMeasurement**: id, uid, date, weightKg?, bodyFatPct?, measurements: Record<string,
  number> (chest, waist, hips, armL, armR, thighL, thighR, …), note?.
- **ProgressPhoto**: id, uid, date, storagePath, thumbPath?, pose?, note?, createdAt.
- **RecoveryLog** (`recoveryLogs/{date}`, date = `yyyy-MM-dd`): uid, date, sleepHours?,
  energy(1-5), stress(1-5), soreness(1-5), motivation(1-5), recoveryScore(computed, 0-100;
  weighted blend of sleep/energy/soreness/stress/motivation, higher = better recovered), note?,
  hydrationMl, hydrationTargetMl.
- **Goal**: id, uid, kind('strength'|'bodyweight'|'custom'), title, exerciseId?, targetValue,
  currentValue, unit, startValue, dueDate?, status('active'|'achieved'|'archived'), createdAt.
- **Achievement**: id, uid, key (enum of the 9 achievements), unlockedAt, meta?.
- **WorkoutNote**: id, uid, scope('session'|'exercise'|'general'), refId?, body, createdAt.
- **TimerState** (Zustand/persist, not Firestore): workoutStartedAtMs?, pausedAccumMs,
  isPaused, rest: { endsAtMs?, durationS, preset, isRunning }.
- **WeeklySummary** (`analyticsWeekly/{weekId}` where weekId=`yyyy-'W'II` ISO): uid, weekId,
  workouts, totalVolumeKg, volumeByMuscle: Record<MuscleGroup, number>, prCount, streakDays,
  updatedAt.
- **MonthlySummary** (`analyticsMonthly/{monthId}` `yyyy-MM`): uid, monthId, workouts,
  totalVolumeKg, volumeByMuscle, prCount, bodyWeightStartKg?, bodyWeightEndKg?, updatedAt.
- **SyncOperation** (Zustand/persist + IndexedDB queue): id (uuid), entity, op('set'|'update'|
  'create'|'delete'), path, payload, baseUpdatedAt?, createdAtMs, attempts, lastError?.

**Canonical seed data (`src/data/`).** `exercises.ts` holds the library; `workoutPlan.ts` holds
the exact MON–SUN split. The exact prescriptions (authoritative):

| Day | Workout | Exercises (sets × reps) |
|---|---|---|
| MON | Chest & Triceps | Flat Barbell/DB Bench 4×8-10; Incline DB Press 3×10-12; Cable Flyes 3×12-15; Dips/Push-ups 3×failure; Tricep Rope Pushdowns 3×12-15; Skull Crushers 3×10-12 |
| TUE | Back & Biceps | Deadlifts 4×6-8; Lat Pulldowns/Pull-ups 4×8-10; Bent-Over Rows 3×10-12; Seated Cable Rows 3×12; Barbell Curls 3×10-12; Hammer Curls 4×12 |
| WED | Legs & Calves | Back Squats 4×8-10; Leg Press 3×10-12; RDLs 3×10-12; Walking Lunges 3×12/leg; Standing Calf Raises 4×15-20 |
| THU | Shoulders & Abs | OHP 4×8-10; Lateral Raises 4×12-15; Face Pulls 3×15; Hanging Leg Raises 3×12-15; Woodchoppers 3×12/side; Plank 3×60s |
| FRI | Arms & Core HIIT | (Preacher Curls + Overhead Tricep Ext) superset 3×10; (Incline DB Curls + Tricep Dips) superset 3×12; Russian Twists 3×20; Ab Wheel Rollouts 3×10-12; Mountain Climbers 3×45s |
| SAT | Full-Body HIIT | Burpees 4×15; KB Swings 4×20; Box Jumps/Jump Squats 4×12; Battle Ropes 4 rounds 30s/30s |
| SUN | Rest / active recovery | isRest = true |

"×/leg", "×/side", "failure", and time-based ("60s", "45s", "30s/30s") prescriptions are encoded
on `PlanEntry`/`ExerciseSet` via `targetRepMin/Max` plus flags: `toFailure: boolean`,
`perSide: boolean`, `durationSeconds?` for holds, and `intervalWorkSeconds/intervalRestSeconds`
for Battle Ropes-style rounds.

## C.4 Firestore schema & converters

Exact tree (per the contract):

```
users/{uid}                      ← root doc: { uid, createdAt, updatedAt } only (ownership; NOT a profile copy)
  profile/data                   ← full UserProfile (single source; routing reads this)
  settings/preferences           ← UserSettings (no preferredUnit — that lives on UserProfile)
  workoutPlans/{planId}
  workoutSessions/{sessionId}
    exercises/{exerciseSessionId}
      sets/{setId}
  exerciseHistory/{exerciseId}
  personalRecords/{recordId}
  bodyMeasurements/{id}
  progressPhotos/{id}
  recoveryLogs/{date}            ← date-keyed (yyyy-MM-dd) → idempotent upsert
  goals/{id}
  achievements/{id}              ← id = achievement key → idempotent unlock
  notes/{id}
  analyticsWeekly/{weekId}       ← weekId = yyyy-'W'II (ISO week) → idempotent summary upsert
  analyticsMonthly/{monthId}     ← monthId = yyyy-MM → idempotent summary upsert
```

**Path-validity note (resolved).** The contract sketch wrote `analytics/weekly/{weekId}` and
`analytics/monthly/{monthId}`, but Firestore paths alternate collection/document, so
`users/{uid}/analytics/weekly/{weekId}` resolves to a *collection reference* (odd segment
count), not a storable document. We therefore use two sibling collections directly under the
user doc: **`users/{uid}/analyticsWeekly/{weekId}`** and
**`users/{uid}/analyticsMonthly/{monthId}`**. This preserves the "summary documents, not full
history" intent of FR-28 while being a legal, storable document path. The rules (§C.9) and the
`WeeklySummary`/`MonthlySummary` converters use these exact paths.

Sets live in a deep subcollection so no document holds thousands of sets (contract). Each
collection has a typed `withConverter` in `src/lib/firebase/converters.ts` doing
`Timestamp↔Date`, defaulting, and schema-version stamping. `src/lib/firebase/queries.ts` holds
reusable `CollectionReference`/`Query` builders (bounded, paginated, ordered) so services
compose rather than hand-roll queries.

**Converters OMIT absent optional fields entirely (resolves iter-4 MEDIUM-6).** `validSet()` in
the rules enforces "exactly one of `actualReps` / `durationSeconds`" via **key-presence**
(`('actualReps' in d) != ('durationSeconds' in d)`), not a null check. If a converter serialized
an absent optional as `actualReps: null`, *both* XOR sides would be `in d` and the write would be
denied. Therefore every `toFirestore()` converter is written to **never emit a key for an
undefined/absent optional** — it builds the output object by conditionally spreading only present
fields (e.g. `...(actualReps !== undefined ? { actualReps } : {})`), rather than assigning
`actualReps: value ?? null`. As a second line of defense, the Firestore app instance is
initialized with `ignoreUndefinedProperties: true` so a stray `undefined` is dropped rather than
rejected. A duration-based interval `SetLog` thus serializes with a `durationSeconds` key and
**no** `actualReps` key at all; `actualReps: null` is never produced by the app and would be
rejected by `validSet` if it ever were. (An emulator test in §C.14 asserts both halves: a round
`SetLog` with `durationSeconds` and no `actualReps` key passes, and a doc carrying
`actualReps: null` alongside `durationSeconds` is rejected.)

**Key query patterns & indexes** (`firestore.indexes.json`):
- Workout history: `workoutSessions` where `status == COMPLETED` order by `completedAt desc`,
  paginated (limit + `startAfter`). → composite index (status, completedAt).
- Calendar month: `workoutSessions` where `startedAt >= monthStart && < monthEnd`. → index
  (startedAt).
- PR list per exercise: `personalRecords` where `exerciseId == x` order by `achievedAt desc`.
- Body trend: `bodyMeasurements` order by `date desc` limited.
- Analytics reads hit the small summary docs, not the raw collections.

## C.5 Zustand ↔ Firestore state boundary

| State | Owner | Persisted where |
|---|---|---|
| Active workout (session, exercises, in-flight sets, elapsed timer) | **Zustand** (`sessionStore`, `timerStore`) | Zustand `persist`→localStorage for resume; mirrored to Firestore on meaningful events |
| Optimistic edits, transient form state | **Zustand** | memory / persist |
| Cached reads (dashboard, history page, exercise history) | **Zustand** caches hydrated from services | Firestore is source |
| Offline queue + sync flags | **Zustand** (`syncStore`) + IndexedDB | durable |
| Timer resume anchors (absolute ms timestamps) | **Zustand** `persist` | localStorage |
| Profile, settings, plans, completed sessions, PRs, body, recovery, goals, achievements, notes, summaries | **Firestore** | Firestore (offline-persisted) |

Stores (`src/store/`): `authStore, workoutStore, sessionStore, exerciseStore, progressStore,
analyticsStore, bodyStore, recoveryStore, goalStore, settingsStore, timerStore, syncStore`. Only
`timerStore`, `settingsStore` (UI prefs), and `syncStore` (queue) use `persist`; data stores
hold ephemeral caches and are rehydrated from services/Firestore (which itself is offline-
persistent), so we never make localStorage the DB.

**Timer persistence (FR-18, AC-9).** `timerStore` stores absolute anchors
(`workoutStartedAtMs`, `pausedAccumMs`, `rest.endsAtMs`) in localStorage via `persist`. Elapsed
is always recomputed as `now - startedAt - pausedAccum`, so closing/reopening the app or
backgrounding it yields the correct value without a running interval. A rAF/interval only drives
the visible tick.

## C.6 RSC vs Client split

- **Server Components**: root `layout.tsx`, route-group layouts, static chrome, the install-
  instructions/empty/marketing copy, non-interactive seed rendering. They never import the
  Firebase client SDK or Zustand.
- **Client Components** (`'use client'`): `AuthGuard`, all forms (RHF), Dashboard data islands,
  DaySelector, Active Workout surface, SetTracker/SetRow, timers, all charts, calendar, PR
  celebration, SyncStatus, InstallPrompt, BackupManager, bottom nav, bottom sheets.
- **Providers**: a single top-level client `Providers` wraps the app with the auth/firebase-
  config context and (optional) analytics init. Heavy client islands are `next/dynamic` with
  `ssr: false` + skeleton fallbacks (charts, calendar, celebration) to protect the main bundle
  and avoid SSR of browser-only libs (gsap/confetti/recharts).

## C.7 Offline / sync / conflict strategy (FR-29/30/31, AC-10/11)

- **Durable offline**: Firestore `persistentLocalCache` with multi-tab manager. Reads/writes
  work offline through the SDK's own queue; the workout screen never blocks on network.
- **Our sync layer** (`src/lib/sync/`) sits above for user-visible status and ordering of
  **composite** domain operations that aren't a single Firestore write (specifically "complete
  session"). `syncQueue` persists `SyncOperation`s; `networkStatus` (via
  `useNetworkStatus`/`navigator.onLine` + Firestore state) drives flush; `syncManager` flushes
  FIFO with retry/backoff; `conflictResolver` applies deterministic rules.

**"Complete session" write decomposition (resolves transaction feasibility).** The completion
is NOT one giant transaction. It is decomposed into bounded, idempotent, deterministically-keyed
steps so it stays well under Firestore's 500-writes-per-batch limit and never does a
read-after-write inside a transaction:

- **Max-sets assumption.** A heavy day is ~6-8 exercises × up to ~6 working sets ≈ 48 sets.
  During the live workout each `SetLog` is already written individually on set completion
  (optimistic, single-doc, SDK-cached), so at completion time most set docs already exist. The
  completion batch therefore writes: 1 session + ≤8 exercise docs + the `sessionCompleted` flag
  flip on existing exercise/set docs + ≤N PR docs + ≤N exerciseHistory upserts. Even counting
  every set doc being touched, 1 + 8 + 48 + ~8 PRs + ~8 history ≈ 73 writes — comfortably under
  500. We cap a single session at 100 total sets as a documented guard; beyond that the batch is
  split by exercise.
- **Step 1 — PR detection (reads BEFORE writes, outside any transaction).** `progressService`
  reads the relevant `exerciseHistory/{exerciseId}` docs (one bounded read per distinct
  exercise in the session, already cached offline) and computes weight/rep/volume/e1RM PRs
  **client-side** from the already-logged sets. No transaction, so no read-before-write
  constraint applies.
- **Step 2 — completion `writeBatch` (atomic, deterministic IDs).** One `writeBatch` that:
  sets `WorkoutSession.status = COMPLETED` + totals; flips `sessionCompleted = true` on each
  `ExerciseSession` and `SetLog` under it (the mirror in §C.9); creates `personalRecords/{id}`
  using **deterministic IDs** (`${sessionId}_${exerciseId}_${type}`) so a retry overwrites
  rather than duplicates; upserts each `exerciseHistory/{exerciseId}` rollup. All these are
  idempotent on replay because every doc ID is deterministic and the batch is atomic.
- **Step 3 — summary upsert (SEPARATE `runTransaction` spanning the session doc + period docs).**
  The weekly and monthly summary increments run as their own `runTransaction`s, decoupled from
  Step 2 so summary-doc contention never blocks session persistence, and so a summary retry can't
  re-run the session write. **Idempotency is keyed on durable per-session state, not a lossy
  ring:** each session doc carries a boolean `summaryApplied` (default false, §C.3). The Step-3
  transaction **reads the session doc first**; if `summaryApplied === true` it is a no-op; else it
  adds the session's deltas to the weekly and monthly summaries **and flips `summaryApplied = true`
  on the session doc in the same transaction**. Because the guard lives on the session itself (not
  an evictable set/ring on the summary doc), a late replay — even a backup re-import or a sync op
  arriving after thousands of newer sessions — can never re-apply an already-counted session: the
  marker is permanent and per-session. (Writing `summaryApplied` is the one permitted post-
  completion mutation of a COMPLETED session; the rules allow it because `summaryApplied` toggles
  false→true only and the field is excluded from the "contents frozen" set — the session's
  training data stays immutable while this bookkeeping flag is set once.)

  **Write mode of the toggle (resolves iter-4 HIGH-2).** The Step-3 `summaryApplied` flip is a
  **merge update** performed with `updateDoc(sessionRef, { summaryApplied: true, updatedAt:
  serverTimestamp() })` (equivalently `setDoc(..., { merge: true })`) inside the transaction, so
  every other session field is preserved on the server document. `validSession()` in the rules is
  therefore evaluated against the **post-merge** complete document (all required training fields
  still present), and the `onlySummaryAppliedChanged()` predicate proves no training field
  changed. The toggle never does a non-merge `set()` of a partial `{ summaryApplied, updatedAt }`
  payload — that would drop required fields and be denied. This is stated so the implementer uses
  `updateDoc`/merge, not a replacing `set()`.

  **Second-device toggle is a no-op, not an error (resolves iter-4 MEDIUM-3).** The toggle rule
  requires `resource.data.summaryApplied == false` (the pre-image), so if another device already
  applied the summary (stored value already `true`), a second device's transaction reads
  `summaryApplied === true` in Step 3 and **returns early as a no-op before issuing any write** —
  the rules-level `== false` guard is a backstop that is never reached on the happy path. If a
  write nonetheless races through and is denied because the stored value is already `true`,
  `syncManager` treats that specific denial as **success (goal already met), not a retryable
  error**. The toggle carries **no `baseUpdatedAt` optimistic-concurrency precondition** — the
  `summaryApplied` pre-image check *is* its concurrency guard — so a concurrent benign
  `updatedAt` bump from another device never spuriously fails it.

Ordering: Step 2 must succeed before Step 3 is enqueued; if Step 3 fails it retries
independently without touching the (now immutable) session training data.

- **Offline flush barrier (resolves iter-4 HIGH-1 — a late set create must never hit a COMPLETED
  parent).** Because single-doc `SetLog` creates flow directly through the Firestore SDK cache
  while the composite "complete session" op is owned by the custom `syncQueue`, their relative
  reconnect flush order must be pinned so the completion batch can never flip the parent session
  to `COMPLETED` *before* a still-pending set create flushes (which `parentOpen()` would then
  deny, silently dropping the set). The barrier is explicit and belongs in `syncManager`:
  **Step 2 of a "complete session" op is gated on `await waitForPendingWrites(db)`** — the
  completion batch is not issued until the SDK confirms every previously-queued single-doc write
  (including all of this session's `SetLog` creates/updates) has been acknowledged by the server.
  Only then does `syncManager` issue the batch that sets `status = COMPLETED`. This guarantees the
  COMPLETED flip is strictly last, so no `parentOpen()`-gated create can arrive afterward. (As a
  belt-and-suspenders invariant, the service layer also holds the completion op in the queue while
  `navigator.onLine` is false and only begins the `waitForPendingWrites()` gate once connectivity
  returns.)
- **Write strategy**: edit in Zustand → optimistic UI → on set completion / meaningful events,
  write via batched `writeBatch`/`runTransaction`. Debounced non-critical writes (notes, slider
  moods). Pagination + `limit` on all list reads. Selective `onSnapshot` only for the active
  session and sync status; **no whole-collection listeners, no polling**.
- **Queue-authority boundary (resolves dual-queue double-execution).** There are two durable
  queues — Firestore's own `persistentLocalCache` write queue and our custom `syncQueue` — and
  each owns a disjoint class of writes so they never both own the same write:
  - **Single-document, naturally-idempotent writes go DIRECTLY through the Firestore SDK** and
    rely on its offline cache + deterministic doc IDs. This covers: individual `SetLog`
    create/update, `recoveryLogs/{date}` upsert, `bodyMeasurements` create, `notes`,
    hydration increments, goal updates, settings/profile writes. These are **never** placed in
    the custom `syncQueue`. Offline, the SDK queues and flushes them on reconnect by itself.
  - **The custom `syncQueue` owns ONLY the composite "complete session" domain operation** (the
    Step 1-3 orchestration above) — the one unit that spans multiple docs with ordering and
    needs user-visible status. It is an **orchestration/status layer, not a transport layer**:
    it does not re-send writes the SDK already holds. Because every component write uses a
    deterministic ID, when `syncManager` flushes a "complete session" op it issues the batch
    whose IDs may already be partially persisted by the SDK; the batch `set()`s overwrite
    idempotently, so re-issue after a crash is safe and produces no duplicates.
  - `SyncOperation.id` therefore dedupes replays of the *composite* op; deterministic doc IDs
    dedupe the component docs. This closes AC-10 ("no duplicates") with a single owner per write.
- **Conflict rules**: server `updatedAt` (server timestamp) wins for mutable docs; last-writer-
  wins per field only within transactions guarded by `baseUpdatedAt` precondition. **Completed
  sessions are immutable** — enforced three ways: (1) **security rules** forbid updating a
  COMPLETED session's training fields (only the `summaryApplied` false→true bookkeeping toggle is
  permitted via `onlySummaryAppliedChanged()`), forbid **deleting** a COMPLETED session doc
  (`allow delete: if owns(uid) && notCompleted()`), and forbid creating, updating, or deleting any
  `exercises`/`sets` child under a completed session — updates/deletes are blocked by the mirrored
  `sessionCompleted` flag and **creates are blocked by a `parentOpen()` get() on the parent
  status**, so neither mutation nor *appending* can alter a finished session's contents from any
  client, including another device; (2) services refuse to write to, append to, or delete
  completed sessions (defense in depth); (3) the conflict resolver drops any queued op targeting a
  completed session. This guarantees no device overwrites or extends another's finished history
  (FR-39, AC-11).
- **Idempotency**: date-keyed docs (`recoveryLogs/{date}`) and key-keyed docs
  (`achievements/{key}`) upsert idempotently; `SyncOperation.id` dedupes replays so reconnect
  can't duplicate (AC-10).

## C.8 Progression, volume, 1RM, units (pure libs — highly unit-testable)

- **`src/lib/oneRepMax.ts`**: `epley1RM(weightKg, reps) = weightKg * (1 + reps/30)` (reps 1 →
  returns weight). Pure, trivially unit-tested (AC-8).
- **`src/lib/progression.ts`**: double-progression with **concrete, configurable thresholds**.
  Pure; never writes the plan; user override is captured on the set entry only. Inputs: the last
  `history.recentSessions` top working set(s) for the exercise, the prescription rep window
  `[targetRepMin, targetRepMax]`, optional `targetRpe`/`targetRir`, the user's `rpeMode`, the
  current `recoveryScore`, and `progressionConfig`. `progressionConfig` defaults (all overridable
  in `settings/preferences`):

  ```ts
  progressionConfig = {
    weightStepKg: { barbell: 2.5, dumbbell: 2.0, machine: 2.5, cable: 2.5, other: 2.5 },
    reduceWeightPct: 0.10,        // -10% on repeated misses
    missSessionsBeforeReduce: 2,  // N consecutive sub-min sessions
    deloadWeeksFlatE1rm: 3,       // M weeks of flat/negative e1RM trend
    deloadRecoveryScoreBelow: 40, // 0-100 recovery score gate
    targetRpeDefault: 8,          // if prescription has none
    targetRirDefault: 2
  }
  ```

  Decision rules, evaluated on the **last completed session's working sets** for that exercise
  (warmups excluded):
  - **INCREASE_WEIGHT** when *all* working sets reached `targetRepMax` AND the session's effort
    was not above target — i.e. logged `rpe ≤ targetRpe` (or `rir ≥ targetRir`); when `rpeMode`
    is `None`, the RPE/RIR gate is skipped and reps alone decide. Recommend
    `currentWeight + weightStep(equipment)`, reset reps to `targetRepMin`.
  - **INCREASE_REPS** when the top set's reps are `≥ targetRepMin` and `< targetRepMax` (still
    climbing the window). Recommend same weight, `recommendedReps = min(lastReps + 1, targetRepMax)`.
  - **MAINTAIN** when reps landed `< targetRepMin` for the **first** time (one bad session is not
    a trend), OR when effort was above target (`rpe > targetRpe` / `rir < targetRir`) despite
    hitting reps — hold weight to consolidate.
  - **REDUCE_WEIGHT** (−`reduceWeightPct`) after `missSessionsBeforeReduce` (default 2)
    **consecutive** sessions below `targetRepMin`.
  - **REDUCE_VOLUME** instead of REDUCE_WEIGHT when the misses coincide with low recovery
    (`recoveryScore < deloadRecoveryScoreBelow`) but weight was being hit before — drop a working
    set rather than load, preserving intensity.
  - **DELOAD** when the exercise's estimated-1RM trend (from `exerciseHistory`) is flat or
    negative over `deloadWeeksFlatE1rm` (default 3) weeks, OR the user triggers manual deload
    (FR-24). Recovery feeds progression **only** through `deloadRecoveryScoreBelow` and the
    REDUCE_VOLUME branch; it never silently changes recommended weight otherwise.
  - **`confidence`** (0-1) = a function of how much comparable history exists:
    `min(1, comparableSessions / 3)` where `comparableSessions` is the count of prior sessions
    with the same exercise and a rep window overlap (0 history → 0.33 after one session, 1.0 at
    ≥3). Surfaced in the UI so a low-confidence suggestion is visibly tentative.

  Returns `ProgressionRecommendation { type, currentWeightKg, recommendedWeightKg, targetRepMin,
  targetRepMax, confidence, reason }` with a human-readable `reason` string per branch.
- **`src/lib/volume.ts`**: set volume = `weightKg * reps` (bodyweight/time entries configurable);
  roll up to exercise/workout/muscle/week/month + change %. Pure.
- **`src/lib/units.ts`**: `toDisplay(kg, unit)`, `fromDisplay(value, unit)` with 2.2046226218
  factor and sensible rounding (0.5 kg / 1 lb plate increments). Canonical store is kg; display
  conversion only (AC-12). Round-trip tested.
- **`src/lib/analytics/*`**: pure transforms over summary docs + bounded raw reads for charts.

## C.8a Timers: smart rest + interval/HIIT state machine (FR-7, FR-18)

Both the rest timer and the interval timer follow the same **background-safe anchoring rule** as
the workout timer (§C.5): state is an **absolute `endsAtMs` epoch anchor** in `timerStore`
(`persist`), remaining time is always recomputed as `endsAtMs - now`, and a rAF/interval only
drives the visible tick. Closing, backgrounding, or reopening the app therefore never drifts the
countdown — on remount the timer reads the anchor and shows correct remaining time (or fires
immediately if `now >= endsAtMs`).

**Smart rest (FR-18) — concrete rule.** When auto-start rest is enabled, the rest duration on set
completion is derived, not guessed:

```
restSeconds = prescription.restSeconds (from the PlanEntry/ExerciseSet; preset fallback 90s)
if smartRestEnabled and lastSet.rpe >= 9      → restSeconds += 30   // hard set, extend recovery
if smartRestEnabled and lastSet.rir <= 0      → restSeconds += 30   // (if rpeMode uses RIR)
if smartRestEnabled and lastSet.isWarmup      → restSeconds = min(restSeconds, 45)  // short warmup rest
```

`smartRestEnabled` lives in `UserSettings` and is **disablable** (FR-18); when off, the timer uses
`prescription.restSeconds` verbatim. The adjustment is a pure function in `src/lib/progression.ts`
siblings (testable in isolation) and feeds `useRestTimer`, which only computes the `endsAtMs`
anchor. Presets 30/60/90/120/180 + custom still override the computed value with a single tap.

**Interval / HIIT timer (FR-7) — state machine.** Used for `PlanEntry`s carrying
`intervalWorkSeconds`/`intervalRestSeconds` and a round count (e.g. Battle Ropes `4 rounds
30s/30s`). `useRestTimer` is for inter-set rest; the interval loop is a **separate** reducer
driven by `IntervalTimer`, sharing only the `endsAtMs` anchoring primitive. States:

```
IDLE → WORK(round r) → REST(round r) → WORK(round r+1) → … → DONE
```

- Entering `WORK(r)`: set `endsAtMs = now + intervalWorkSeconds*1000`.
- At `endsAtMs` (or on background→foreground where `now >= endsAtMs`): **auto-advance** to
  `REST(r)` with `endsAtMs = now + intervalRestSeconds*1000`; a cue fires (visual + optional
  audio/vibration, enhancement-only per FR-36).
- At the end of `REST(r)`: if `r < totalRounds` advance to `WORK(r+1)`, else `DONE`.
- **Pause/resume** freezes by storing `remainingMs` and clearing `endsAtMs`; resume re-derives
  `endsAtMs = now + remainingMs`. **Skip** jumps to the next state boundary. On
  background/app-close the anchor persists, so reopening lands in the correct state (and if the
  whole interval elapsed while backgrounded, it resolves to `DONE`).

**How an interval round is logged.** Each completed round persists as **one duration-based
`SetLog`**: `durationSeconds = intervalWorkSeconds`, `actualReps` omitted (undefined — the Zod
schema makes `actualReps` optional when `durationSeconds` is present), `weightKg` = loaded weight
or `0` for bodyweight/cardio, `setIndex = round-1`. Volume for duration sets is excluded from the
`weightKg * reps` rollup (§C.8 `volume.ts` treats a set with no `actualReps` as zero mechanical
volume) and surfaces instead as time-under-tension/round count in muscle/workout summaries. This
keeps HIIT rounds first-class history without corrupting the weight×reps volume metric.

## C.9 Security rules (FR, NFR-4, AC-4/5, AC-11)

`firestore.rules` (strict, per-user; **no recursive wildcard, no `if true` anywhere**).

**Why no `match /{document=**}`:** In Firestore, `allow` grants from different `match` blocks
are **OR-ed** — a request is permitted if *any* matching rule allows it. A blanket recursive
`match /{document=**} { allow write: if owns(uid) }` would therefore grant write to
`workoutSessions/{sid}` and *override* the narrower immutability rule, making completed-session
immutability a no-op (this was the defect in the prior revision). We instead **enumerate every
collection explicitly** and rely on Firestore's **default-deny** (a path with no matching rule
is denied) to reject unknown collections — so "deny unknown top-level docs" needs no extra rule;
it is satisfied by *not* writing a wildcard.

**uid-stamp policy.** Docs that carry a `uid` field (plans, sessions, exerciseHistory, PRs,
body, photos, recovery, goals, notes, summaries) require `request.resource.data.uid == uid` on
create/update. Docs identified by **path only** and that carry no `uid` field — `profile/data`,
`settings/preferences`, `recoveryLogs/{date}`, `achievements/{key}` — are gated by `owns(uid)`
alone (requiring a `uid` field on them would be internally inconsistent with the schema). The
root `users/{uid}` doc holds a `uid` field and requires the stamp.

**Completed-session immutability tradeoff (resolved).** The session doc gates `update` on its
own stored `resource.data.status != 'COMPLETED'`. The nested `exercises/{eid}` and `sets/{setId}`
subcollections must also freeze once the parent session is COMPLETED. There are two distinct
mutation paths to close, and they are treated differently because their cost profiles differ:

- **`update`/`delete` of an EXISTING child doc** is the hot path — every live set-log during an
  active workout is an `update` of an already-created `SetLog`. A `get()` on the parent session
  on each such write would be one extra document read per logged set, which is unacceptable on
  the hot loop. **Decision: mirror a boolean `sessionCompleted` onto each `ExerciseSession` and
  `SetLog` doc** (stamped by the client, flipped true only inside the completion batch) and gate
  `update`/`delete` on that mirrored flag — no cross-doc read on the hot path. The rule forbids
  clearing the flag back to false.
- **`create` of a NEW child doc** is NOT on the hot path: during an active (still-open) workout
  the client reads the parent's cached `status` for free, and once a session is COMPLETED no new
  child should ever be created. The mirror trick cannot defend a create (there is no pre-existing
  child whose mirrored flag the rule can read — a client could simply create a fresh doc with
  `sessionCompleted: false` under an already-COMPLETED session, appending to frozen history).
  **Decision: gate child `create` (and only create) on a single `get()` of the parent session's
  `status != 'COMPLETED'`.** This pays one extra read exactly once per newly-added set/exercise
  doc — the first time a set is logged — and never on the per-set `update` loop, so the hot path
  stays read-free while create-time immutability becomes rules-enforced (closing the append hole,
  not only the mutate hole). The service layer and conflict resolver additionally refuse creates
  targeting a session whose cached status is COMPLETED, so the invariant is defended in depth.

  **`sessionCompleted: false` is a REQUIRED field at create time** on every `ExerciseSession` and
  `SetLog` (not optional, resolving iter-4 MEDIUM-4). The create rule reads
  `request.resource.data.sessionCompleted == false`; if a client omitted the field the comparison
  would fail and the create would be denied (safe but confusing). The `sessionService`/`setService`
  therefore **always stamp `sessionCompleted: false`** when creating these child docs, and the
  model types (§C.3) declare the field non-optional. A minimal `validExerciseSession()` predicate
  (asserting `exerciseId` is a string and `order` is a non-negative int) gives the previously
  unvalidated `exercises` child the same create/update bounds-checking that `validSet()` gives
  `sets`.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    function signedIn() { return request.auth != null; }
    function owns(uid)  { return signedIn() && request.auth.uid == uid; }
    function stamped(uid) { return request.resource.data.uid == uid; }       // doc carries uid
    function notCompleted() { return resource.data.status != 'COMPLETED'; }  // existing session doc

    // true iff the ONLY field that differs between stored and incoming is summaryApplied
    // (the one permitted post-completion bookkeeping toggle; all training data stays frozen)
    function onlySummaryAppliedChanged() {
      return request.resource.data.diff(resource.data).affectedKeys()
               .hasOnly(['summaryApplied', 'updatedAt']);
    }

    // create-only: parent session must still be open (one get(), off the hot update path).
    // parentOpen()-gated creates are ALWAYS single-doc writes (one new SetLog or one new
    // ExerciseSession at a time), never grouped into a writeBatch of >1 child create, so each
    // request issues exactly one get() and stays far under Firestore's 10-get()-per-request
    // ceiling (resolves iter-4 NIT-7).
    function parentOpen(uid, sid) {
      return get(/databases/$(database)/documents/users/$(uid)/workoutSessions/$(sid))
               .data.status != 'COMPLETED';
    }

    // minimal field validation for ExerciseSession child docs (resolves iter-4 MEDIUM-4)
    function validExerciseSession(d) {
      return d.exerciseId is string && d.order is int && d.order >= 0;
    }

    // field-level validation (Zod-mirrored bounds) for high-risk write-heavy docs
    function validSet(d) {
      // exactly one of actualReps / durationSeconds (rep-based vs duration-based interval/hold set)
      return ( ('actualReps' in d) != ('durationSeconds' in d) )
        && (!('actualReps' in d)      || (d.actualReps is int && d.actualReps >= 0 && d.actualReps <= 1000))
        && (!('durationSeconds' in d) || (d.durationSeconds is int && d.durationSeconds >= 0 && d.durationSeconds <= 86400))
        && d.weightKg is number && d.weightKg >= 0 && d.weightKg <= 2000
        && (!('rpe' in d) || (d.rpe is number && d.rpe >= 1 && d.rpe <= 10))
        && (!('rir' in d) || (d.rir is number && d.rir >= 0 && d.rir <= 10))
        && (!('restSeconds' in d) || (d.restSeconds is int && d.restSeconds >= 0 && d.restSeconds <= 86400));
    }
    function validSession(d) {
      return d.status in ['NOT_STARTED','IN_PROGRESS','COMPLETED','ABANDONED']
        && d.durationSeconds is int && d.durationSeconds >= 0
        && d.totalVolumeKg is number && d.totalVolumeKg >= 0
        && (!('energy' in d) || (d.energy is int && d.energy >= 1 && d.energy <= 5))
        && (!('soreness' in d) || (d.soreness is int && d.soreness >= 1 && d.soreness <= 5));
    }
    function validBody(d) {
      return (!('weightKg' in d) || (d.weightKg is number && d.weightKg > 0 && d.weightKg <= 2000))
        && (!('bodyFatPct' in d) || (d.bodyFatPct is number && d.bodyFatPct >= 0 && d.bodyFatPct <= 100));
    }
    function validRecovery(d) {
      return (!('sleepHours' in d) || (d.sleepHours is number && d.sleepHours >= 0 && d.sleepHours <= 24))
        && (!('energy' in d)     || (d.energy is int && d.energy >= 1 && d.energy <= 5))
        && (!('stress' in d)     || (d.stress is int && d.stress >= 1 && d.stress <= 5))
        && (!('soreness' in d)   || (d.soreness is int && d.soreness >= 1 && d.soreness <= 5))
        && (!('motivation' in d) || (d.motivation is int && d.motivation >= 1 && d.motivation <= 5))
        && (!('hydrationMl' in d) || (d.hydrationMl is int && d.hydrationMl >= 0));
    }

    match /users/{uid} {
      // root ownership doc { uid, createdAt, updatedAt } — NOT a profile copy
      allow read:   if owns(uid);
      allow create, update: if owns(uid) && stamped(uid);
      allow delete: if owns(uid);

      // path-identified singletons (no uid field) — owner only
      match /profile/{docId}   { allow read, write: if owns(uid); }
      match /settings/{docId}  { allow read, write: if owns(uid); }

      // uid-stamped collections — owner + stamp
      match /workoutPlans/{planId}       { allow read: if owns(uid);
                                           allow create, update: if owns(uid) && stamped(uid);
                                           allow delete: if owns(uid); }
      match /exerciseHistory/{exId}      { allow read: if owns(uid);
                                           allow create, update: if owns(uid) && stamped(uid);
                                           allow delete: if owns(uid); }
      match /personalRecords/{recId}     { allow read: if owns(uid);
                                           allow create: if owns(uid) && stamped(uid);
                                           allow update, delete: if owns(uid) && stamped(uid); }
      match /bodyMeasurements/{id}       { allow read: if owns(uid);
                                           allow create, update: if owns(uid) && stamped(uid)
                                             && validBody(request.resource.data);
                                           allow delete: if owns(uid); }
      match /progressPhotos/{id}         { allow read: if owns(uid);
                                           allow create, update: if owns(uid) && stamped(uid);
                                           allow delete: if owns(uid); }
      match /goals/{id}                  { allow read: if owns(uid);
                                           allow create, update: if owns(uid) && stamped(uid);
                                           allow delete: if owns(uid); }
      match /notes/{id}                  { allow read: if owns(uid);
                                           allow create, update: if owns(uid) && stamped(uid);
                                           allow delete: if owns(uid); }
      match /analyticsWeekly/{weekId}    { allow read: if owns(uid);
                                           allow create, update: if owns(uid) && stamped(uid);
                                           allow delete: if owns(uid); }
      match /analyticsMonthly/{monthId}  { allow read: if owns(uid);
                                           allow create, update: if owns(uid) && stamped(uid);
                                           allow delete: if owns(uid); }

      // path-identified upserts (no uid field, idempotent) — owner only
      match /recoveryLogs/{date}         { allow read: if owns(uid);
                                           allow write: if owns(uid) && validRecovery(request.resource.data); }
      match /achievements/{key}          { allow read, write: if owns(uid); }

      // sessions — COMPLETED is immutable (contents AND the doc itself)
      match /workoutSessions/{sid} {
        allow read:   if owns(uid);
        allow create: if owns(uid) && stamped(uid) && validSession(request.resource.data);
        // A non-completed session is freely updatable (status may advance to COMPLETED).
        // A COMPLETED session is frozen EXCEPT the one bookkeeping toggle summaryApplied
        // false→true (§C.7 Step 3): every other field must be unchanged.
        allow update: if owns(uid) && stamped(uid) && validSession(request.resource.data)
          && (
               notCompleted()
               || (
                    resource.data.summaryApplied == false
                    && request.resource.data.summaryApplied == true
                    && onlySummaryAppliedChanged()
                  )
             );
        allow delete: if owns(uid) && notCompleted();    // a COMPLETED session doc cannot be deleted

        // subcollections freeze. update/delete read the mirrored flag (hot path, no get()).
        // create reads the parent status once (cold path) so new docs cannot append to a
        // COMPLETED session — closing the create-side immutability hole.
        match /exercises/{eid} {
          allow read:   if owns(uid);
          allow create: if owns(uid)
            && request.resource.data.sessionCompleted == false   // flag REQUIRED at create (always stamped by the service)
            && validExerciseSession(request.resource.data)
            && parentOpen(uid, sid);
          allow update: if owns(uid)
            && resource.data.sessionCompleted == false
            && request.resource.data.sessionCompleted in [false, true] // may flip true in batch, never back to false
            && validExerciseSession(request.resource.data);
          allow delete: if owns(uid) && resource.data.sessionCompleted == false;

          match /sets/{setId} {
            allow read:   if owns(uid);
            allow create: if owns(uid)
              && request.resource.data.sessionCompleted == false
              && parentOpen(uid, sid)
              && validSet(request.resource.data);
            allow update: if owns(uid)
              && resource.data.sessionCompleted == false
              && request.resource.data.sessionCompleted in [false, true]
              && validSet(request.resource.data);
            allow delete: if owns(uid) && resource.data.sessionCompleted == false;
          }
        }
      }
    }
    // every other path: default-deny (no match) → unknown top-level/user docs rejected
  }
}
```

**Deletion of a COMPLETED session is now blocked in the rules** (`allow delete: if owns(uid) &&
notCompleted()`), not only in the service layer, so a buggy/malicious client cannot delete a
finished session doc and orphan its frozen subcollections. The service + conflict-resolver layers
still refuse the delete too (defense in depth, FR-39), but the authoritative guarantee is at the
rules layer, matching AC-11. Intentional deletion of a completed workout is deliberately NOT a
feature; a user who wants it gone archives it (a mutable flag on the still-immutable record is out
of scope here).

**Field-level validation is concrete and server-authoritative for the high-risk write-heavy
docs** (`SetLog`, `WorkoutSession`, `BodyMeasurement`, `RecoveryLog`) via the `validSet`,
`validSession`, `validBody`, `validRecovery` helper functions in the rules above (range + type +
enum checks mirroring the Zod bounds of §C.13). Lower-risk/low-volume docs (notes, goals, plans,
summaries, PRs) are validated client-side by Zod with ownership-only rules — the design does not
claim server-side field validation for those; see §C.13 for the precise split and the documented
residual risk on the Zod-only docs.

`storage.rules` (read and write split — `request.resource` is null on reads, so size/contentType
belong on `write` only; applying them to `read` would deny all downloads and break photo
viewing):

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /users/{uid}/{allPaths=**} {
      allow read:  if request.auth != null && request.auth.uid == uid;
      allow write: if request.auth != null && request.auth.uid == uid
        && request.resource.size < 10 * 1024 * 1024
        && request.resource.contentType.matches('image/.*');
    }
  }
}
```

Progress photos are stored under `users/{uid}/progressPhotos/...`. No admin creds, service-
account JSON, or private keys exist in client code (NFR-4).

**Thumbnails are client-generated images (resolves iter-4 NIT-8).** `ProgressPhoto.thumbPath`
points at a thumbnail that is produced **client-side** (downscaled to a bounded dimension via an
offscreen `<canvas>` and exported as a JPEG/WebP `Blob`) before upload, so both the full image and
its thumbnail are `image/*` blobs that satisfy the `contentType.matches('image/.*')` write
predicate. There is **no server-side (Cloud Function) image processing in scope**, and **no
non-image artifact is ever written to Storage** — Storage holds only user-uploaded progress-photo
images and their client-made thumbnails. (JSON backups from §C.11 download to the device; they are
never written to Firebase Storage.)

## C.10 PWA (FR-34)

`@ducanh2912/next-pwa` wraps `next.config`. `public/manifest.json`: name/short_name ForgeFit,
`display: standalone`, `background_color #09090b`, `theme_color #22c55e`, icon set (192/512 +
maskable), splash. Service worker precaches the app shell and runtime-caches static assets +
seed data; Firestore handles its own offline cache (we do not SW-cache Firestore). `next-pwa`
is **disabled in dev** to avoid SW/HMR conflicts and enabled on `build`. `useInstallPrompt`
captures `beforeinstallprompt`, shows a bottom-sheet, stores a "dismissed" flag so it doesn't
nag; iOS gets manual add-to-home instructions. Build must succeed with no creds (PWA is creds-
independent).

## C.11 Account deletion & backup (FR-33, Assumption 5)

- **Export**: `backupService` + `src/lib/backup.ts` gather all user collections into a versioned
  JSON (`schemaVersion`), download as `forgefit-backup-YYYY-MM-DD.json`.
- **Import**: Zod schema validates the file **before** any write; a local export backup is taken
  first (always, before any of the version checks below); writes go through batched upserts;
  completed sessions are not overwritten.
- **Schema-version policy (resolves version-mismatch behavior).** The app defines
  `APP_SCHEMA_VERSION` (integer, incremented on breaking model changes). Every export stamps its
  `schemaVersion`. On import, after the safety backup and before writes:
  - `backup.schemaVersion > APP_SCHEMA_VERSION` → **reject** with the friendly message *"This
    backup was made by a newer version of ForgeFit. Update the app, then import again."* No
    writes.
  - `backup.schemaVersion < APP_SCHEMA_VERSION` → run a **documented migration map**
    (`src/lib/backup.ts` holds `migrations: Record<fromVersion, (data) => data>` applied in
    sequence up to current). If a required migration step is missing, **reject** with *"This
    backup is from an older version that can't be upgraded automatically."* No partial writes.
  - `backup.schemaVersion === APP_SCHEMA_VERSION` → proceed to the batched upsert.
  The migrated/validated object is re-validated against the current Zod schema before any write,
  so a buggy migration cannot write a malformed document. AC-14 is extended to cover a
  newer-version rejection and an older-version migrate-then-import path.
- **Delete Account**: client deletes reachable user docs + Storage objects then the Auth user
  (requires recent login → reauth flow). An **optional** Cloud Function `functions/deleteUserData`
  is included and documented as the authoritative recursive server-side cleanup; it is the only
  Cloud Function and is not required for build/dev. Its code lives under `functions/` outside the
  Next.js app and never ships client admin creds.

## C.12 Error handling (concrete, per operation)

| Operation | Failure conditions | Recoverable? | Caller receives | Logging |
|---|---|---|---|---|
| Firebase init | missing/partial env | Recoverable (expected) | getters return `null`; app shows "not configured" | `console.info` once |
| Auth (login/register/google) | wrong creds, network, popup closed, email in use | Recoverable | `ServiceResult` friendly code/message | warn-level, no PII |
| Firestore read (list) | offline, permission, index missing | Recoverable (offline cache serves; else empty+retry) | `ServiceResult` or cached data + `fromCache` flag | warn |
| Firestore write (set complete) | offline, permission, precondition failed | Recoverable | optimistic kept; op queued; `syncStore` marks pending | warn |
| Transaction (complete session) | contention, precondition (completed) | Fatal for that op (dropped) / retried on contention | `ServiceResult` error, UI toast | error |
| Storage upload (photo) | size/type, no creds, offline | Recoverable | `ServiceResult`; retry or queue | warn |
| Import | malformed/Zod fail | Recoverable (abort before write) | validation errors list | info |
| Delete account | reauth required, partial failure | Partially recoverable | prompt reauth; report residue | error |

Raw Firebase error codes are mapped to friendly messages in services; the UI only ever shows the
friendly text (FR-38).

## C.13 External-input validation (Zod)

Every form (RHF + `zodResolver`) and the import file validate: types, required/optional, numeric
ranges (reps ≥ 0, weight ≥ 0, RPE 1-10, RIR 0-10, sleep 0-24, 1-5 scales, hydration ≥ 0,
measurements > 0), enum membership (goal/experience/unit/status), string lengths (names,
notes). On failure: inline accessible field errors; nothing is written. The same Zod schemas are
reused in `converters`/`backup` import so validation is single-sourced.

**Where validation is enforced (two-layer split, no overstatement).**
- **Ownership + completed-session immutability** are **server-authoritative**, owned by the
  security rules (`owns(uid)`, the `uid` stamp, the `notCompleted()`/`sessionCompleted` gates).
  The client also stamps `uid`/`updatedAt`, but the rules are the enforcement boundary — a client
  that bypasses the UI cannot read/write another user's data or mutate a completed session.
- **Field range/enum validation** is **server-authoritative only for the four high-risk,
  write-heavy document classes** — `SetLog`, `WorkoutSession`, `BodyMeasurement`, `RecoveryLog` —
  via the `validSet`/`validSession`/`validBody`/`validRecovery` rule predicates in §C.9 (bounds
  mirror the Zod schemas). For the remaining lower-volume docs (notes, goals, plans, PRs,
  summaries, profile/settings) field validation is **client-side (Zod) only**, with ownership-only
  rules. **Documented residual risk:** a client bypassing the UI could write out-of-range field
  values to those Zod-only docs; the exposure is bounded to the attacker's own namespace (rules
  still prevent cross-user access) and the affected docs are not on the integrity-critical
  training-history path, so the risk is accepted rather than paid for with per-field rule logic on
  every collection. The high-risk set-logging/session/body/recovery writes — where a bad value
  would corrupt analytics, PRs, or history — are the ones hardened in rules.

## C.14 Testability

- **Unit (Vitest)**: pure libs — `oneRepMax`, `progression`, `volume`, `units`, analytics
  transforms, `conflictResolver`, Zod schemas, converters (Timestamp↔Date). These are the
  highest-value, deterministic tests and carry the risky logic.
- **Integration (Firebase Emulator Suite, optional/documented)**: services + rules via
  `@firebase/rules-unit-testing` to assert per-user isolation and completed-session immutability.
  Named rules assertions: (a) a second user is denied read/write on another uid's path; (b) an
  `update` of a COMPLETED session's `durationSeconds` is denied while the `summaryApplied`
  false→true toggle is allowed; (c) `delete` of a COMPLETED session doc is denied; (d) `create` of
  a new `sets` child under a COMPLETED session is denied (parent `get()` path); (e) `update` of a
  frozen `SetLog` is denied via the mirrored flag; (f) a photo **read** on the owner's own Storage
  path succeeds (regression guard for the read/write split); (g) an out-of-range `SetLog`
  (`weightKg: -1`, `rpe: 42`) is denied by `validSet`. Runs with emulator, not live creds, so it
  stays creds-independent.
- **Component (React Testing Library)**: SetTracker quick-log flow, AuthGuard states (loading /
  not-configured / unauthed / authed), DaySelector today-selection, InstallPrompt dismissal.
- A design that forced Firestore into components would be untestable; funneling through
  services + pure libs is what makes the risk testable.

## C.15 Directory / module map

```
src/
  app/
    layout.tsx  globals.css  providers.tsx
    login/  register/  forgot-password/  reset-password/  onboarding/
    (protected)/
      layout.tsx            ← AuthGuard + nav shells
      dashboard/  workout/  progress/  history/  exercises/  body/  recovery/  goals/  settings/
    offline/  not-configured/     ← fallback routes
  components/
    auth/ (AuthGuard, LoginForm, RegisterForm, ForgotPasswordForm, ProfileSetup)
    dashboard/ (Dashboard, DaySelector, Greeting, TodayCard, StatTiles)
    workout/ (WorkoutHeader, WorkoutProgressBar, ExerciseCard, ExerciseDetails, SetTracker,
              SetRow, PreviousPerformance, ProgressionRecommendation, WorkoutTimer, RestTimer,
              IntervalTimer, SupersetGroup, StickyControls)
    pr/ (PRBadge, PRCelebration)
    charts/ (ProgressChart, VolumeChart, StrengthChart, MuscleVolumeChart)  ← dynamic/ssr:false
    history/ (WorkoutHistory, WorkoutCalendar)
    body/ (BodyWeightChart, BodyMeasurements, ProgressPhotoGallery)
    recovery/ (RecoveryCard, HydrationTracker)
    goals/ (GoalProgress)
    achievements/ (AchievementCard)
    sync/ (SyncStatus)
    pwa/ (InstallPrompt)
    settings/ (BackupManager)
    nav/ (BottomNav, Sidebar)
    ui/ (shadcn components, BottomSheet, Skeletons, EmptyState, ErrorState)
  data/ (exercises.ts, workoutPlan.ts, achievements.ts)
  store/ (… 12 stores listed in C.5)
  services/ (authService, workoutService, sessionService, exerciseService, progressService,
             analyticsService, bodyService, recoveryService, goalService, backupService,
             syncService)
  lib/
    firebase/ (config, auth, firestore, storage, queries, converters)
    analytics/ (volume, strength, consistency, muscleVolume, personalRecords, trends)
    sync/ (syncManager, syncQueue, conflictResolver, networkStatus)
    progression.ts  oneRepMax.ts  volume.ts  units.ts  backup.ts  utils.ts
  hooks/ (useAuth, useWorkoutTimer, useRestTimer, useInstallPrompt, useHaptics, useNetworkStatus)
  types/ (index.ts + per-domain files)
root: next.config.ts  tailwind.config.ts  tsconfig.json (strict)  components.json (shadcn)
      firebase.json  firestore.rules  firestore.indexes.json  storage.rules
      .env.local (gitignored)  .env.local.example  public/manifest.json + icons
      functions/ (optional deleteUserData)  vitest.config.ts
```

## C.16 Implementation priority order (critical-path spine first)

1. **Scaffold**: Next 15 + TS strict + Tailwind + shadcn + pnpm; `next.config` + PWA (disabled in
   dev); env example; `.gitignore` already set.
2. **Types + pure libs** (`types/`, `oneRepMax`, `volume`, `units`, `progression`) + their unit
   tests — no Firebase needed, provable correctness.
3. **Guarded Firebase layer** (`lib/firebase/*`) + "not-configured" state + rules + indexes +
   storage.rules. Verify `pnpm lint/typecheck/build` green with empty env.
4. **Auth** (authService, authStore, useAuth, AuthGuard, login/register/forgot, loading, route
   group) — no flash.
5. **Onboarding + profile/settings** write the root ownership doc + single-copy `profile/data`
   + `settings/preferences` (no profile mirror; §C.2).
6. **Seed data** (exercises, workoutPlan) + exercise library UI.
7. **Session engine + Active Workout Mode + timers** (sessionStore, timerStore, SetTracker,
   RestTimer, PreviousPerformance, ProgressionRecommendation) — the core gym loop, offline-first.
8. **PR engine + celebration**; **exerciseHistory** rollups; **volume**.
9. **Dashboard** (dynamic, DaySelector, today auto-select, Sunday variant).
10. **Sync layer** (`lib/sync/*`, syncStore, SyncStatus) + conflict/immutability enforcement.
11. **History + calendar + streaks**.
12. **Analytics + summaries + reports** (lazy charts).
13. **Body, recovery, hydration, goals, achievements**.
14. **Backup/export/import + delete account** (+ optional Cloud Function).
15. **PWA polish** (install prompt, icons, splash), **a11y pass**, **animations/haptics**,
    **robust states** sweep.
16. Full verification: `pnpm lint && pnpm typecheck && pnpm build` green with empty env; emulator
    rules tests; Lighthouse PWA.

---

# PART D — RESPONSES TO DESIGN REVIEW (iteration 2)

The prior review returned **CHANGES_REQUESTED** with 2 HIGH, 6 MEDIUM, 2 NIT findings. Each is
addressed below; all align with the original requirements (per-user security, completed-session
immutability, offline-first, build-without-creds, strict typing).

- **Finding 1 (HIGH) — wildcard defeats session immutability.** *Addressed.* §C.9 rewritten:
  removed the recursive `match /{document=**}`; every collection is enumerated; `workoutSessions`
  `update` is gated on `resource.data.status != 'COMPLETED'`; the `exercises`/`sets`
  subcollections freeze via a **mirrored `sessionCompleted` flag** (added to the `ExerciseSession`
  and `SetLog` models in §C.3) rather than a per-write cross-doc `get()` — the read-cost tradeoff
  is stated and resolved in favor of the flag to keep the hot logging path read-free.

- **Finding 2 (HIGH) — unexpressed deny-unknown / uid-stamp, contradicted by wildcard.**
  *Addressed.* §C.9 now gives explicit per-collection `match` blocks, states which docs carry a
  `uid` field (require `request.resource.data.uid == uid`) versus which are path-identified and
  gated by `owns(uid)` alone (`profile/data`, `settings/preferences`, `recoveryLogs/{date}`,
  `achievements/{key}`), and documents that "deny unknown docs" is achieved by Firestore
  default-deny (no wildcard) rather than an extra rule.

- **Finding 3 (MEDIUM) — invalid analytics path.** *Addressed.* Switched to two sibling
  collections `users/{uid}/analyticsWeekly/{weekId}` and `users/{uid}/analyticsMonthly/{monthId}`;
  updated §C.3 (types), §C.4 (tree + path-validity note), FR-28, and §C.9 (rules) consistently.

- **Finding 4 (MEDIUM) — complete-session transaction feasibility.** *Addressed.* §C.7 adds an
  explicit decomposition: a documented max-sets assumption (≤100, ~73 writes worst case, under the
  500 limit); PR detection as reads **before** the batch; a single deterministic-ID `writeBatch`
  for session+exercises+sets-flag+PRs+history (idempotent on retry); and a **separate**
  `runTransaction` per summary doc with an `appliedSessionIds` guard so summary contention never
  blocks session persistence and increments can't double-count.

- **Finding 5 (MEDIUM) — dual-queue authority.** *Addressed.* §C.7 adds the queue-authority
  boundary: single-document idempotent writes go **directly** through the Firestore SDK cache and
  are never enqueued in the custom queue; the custom `syncQueue` owns **only** the composite
  "complete session" operation and acts as orchestration/status (not transport), relying on
  deterministic IDs so re-issue is duplicate-free. Resolves AC-10 with a single owner per write.

- **Finding 6 (MEDIUM) — triplicated profile.** *Addressed (preferred option).* Dropped the
  root-doc profile mirror entirely; `profile/data` is the single authoritative copy and routing
  reads it directly; the root `users/{uid}` doc carries only `{ uid, createdAt, updatedAt }`;
  `preferredUnit` is stored only on `UserProfile` (removed from `UserSettings`). Updated §C.2,
  Assumption 7, §C.3, §C.4, and the priority order. No drift class remains.

- **Finding 7 (MEDIUM) — progression thresholds.** *Addressed.* §C.8 now pins a concrete
  `progressionConfig` (weight steps, −10% reduce, N=2 miss count, M=3 deload weeks, recovery-score
  gate, default RPE/RIR) and gives explicit branch boundaries for INCREASE_WEIGHT /
  INCREASE_REPS / MAINTAIN / REDUCE_WEIGHT / REDUCE_VOLUME / DELOAD, the recovery→progression
  link, and a `confidence` formula. RecoveryLog `recoveryScore` is pinned to 0-100.

- **Finding 8 (MEDIUM) — import schema-version policy.** *Addressed.* §C.11 defines the policy:
  reject newer-version backups with a friendly message; migrate older versions via a documented
  migration map (or reject clearly); proceed on equal; always take the local safety backup first;
  re-validate post-migration. AC-14 extended accordingly.

- **Finding 9 (NIT) — App Check readiness.** *Addressed.* §C.2 now states App Check initializes
  browser-only, after `getFirebaseApp()`, only when the site key env is present, with a dev
  debug-token note; otherwise skipped.

- **Finding 10 (NIT) — not-configured surface.** *Addressed.* §C.2 states `AuthGuard` renders the
  not-configured state **inline** (no navigation) and `/not-configured` is only a direct-link
  fallback reusing the same component.

---

# PART E — RESPONSES TO DESIGN REVIEW (iteration 3)

The iteration-3 review returned **CHANGES_REQUESTED** with 1 HIGH, 4 MEDIUM, 2 NIT findings. Each
is addressed below; all align with the original requirements (per-user security, completed-session
immutability incl. no-append, offline-first, build-without-creds, strict typing).

- **Finding 1 (HIGH) — create-side immutability hole (new children can be appended to a COMPLETED
  session).** *Fixed.* §C.9 adds a `parentOpen(uid, sid)` helper and gates `create` on the
  `exercises`/`sets` subcollections with a single `get()` of the parent session's `status`, so a
  new set/exercise doc cannot be created under a COMPLETED session. The read is **create-only**
  (cold path — once per newly-logged set), so the hot per-set `update` loop stays read-free; the
  tradeoff and why create ≠ update are spelled out in the "Completed-session immutability
  tradeoff" prose. §C.7 and AC-11 updated to state append is blocked, not only mutation.

- **Finding 2 (MEDIUM) — rules permitted deleting a COMPLETED session doc.** *Fixed.* The session
  `allow delete` is now `if owns(uid) && notCompleted()`, so a COMPLETED session doc cannot be
  deleted at the rules layer (not merely the service layer). Intentional deletion of completed
  workouts is explicitly declared out of scope. AC-11 and the §C.9 prose corrected to match.

- **Finding 3 (MEDIUM) — Storage rule applied upload-only predicates to reads.** *Fixed.*
  `storage.rules` is rewritten with a full `rules_version='2'` / `service firebase.storage` block
  that **splits `read` and `write`**: `read` is ownership-only; the size/`contentType` checks
  apply to `write` only. Progress-photo viewing (FR-23) now works. A regression test is named in
  §C.14 (f).

- **Finding 4 (MEDIUM) — deferred field validation vs "server-authoritative" claim.** *Fixed by
  specifying concrete predicates (option a) for the high-risk docs and correcting the claim for
  the rest.* §C.9 adds `validSet`, `validSession`, `validBody`, `validRecovery` rule functions
  (type/range/enum, mirroring the Zod bounds) wired into the `SetLog`, `WorkoutSession`,
  `BodyMeasurement`, and `RecoveryLog` create/update rules. §C.13 now states precisely that
  ownership+immutability and field validation for those four high-risk doc classes are
  server-authoritative, while lower-volume docs are Zod-only client-side with a documented,
  bounded residual risk — no more overstatement.

- **Finding 5 (MEDIUM) — "smart rest" and interval/HIIT timer unspecified.** *Fixed.* New §C.8a
  defines "smart rest" with a concrete rule (base = prescription `restSeconds`, +30s when last
  set RPE ≥ 9 / RIR ≤ 0, short-cap on warmups, disablable via `smartRestEnabled`), and specifies
  the interval timer as an explicit `IDLE→WORK→REST→…→DONE` state machine with absolute `endsAtMs`
  anchoring (background-safe), auto-advance, pause/resume/skip semantics, and duration-based
  `SetLog` persistence (`durationSeconds`, `actualReps` omitted, excluded from weight×reps volume).
  `smartRestEnabled` added to `UserSettings`; `SetLog` updated with optional `actualReps` +
  `durationSeconds` (one-of refinement).

- **Finding 6 (NIT) — `deviceId` / session `schemaVersion` undefined.** *Fixed.* §C.3 now defines
  `deviceId` = a UUID minted once and stored in `settingsStore` (persist), used only for conflict
  attribution; and session `schemaVersion` = `APP_SCHEMA_VERSION` stamped at creation, used by
  converters for forward migration. `deviceId` noted in `UserSettings` too.

- **Finding 7 (NIT) — analytics idempotency guard ambiguity (set vs ring).** *Fixed.* The
  lossy-ring option is dropped. §C.3 adds a durable per-session `summaryApplied` boolean; §C.7
  Step 3 now reads the session doc, no-ops if `summaryApplied === true`, else applies deltas and
  flips the flag in the **same transaction** — so a late replay can never double-count. §C.9
  permits exactly that one false→true toggle on a COMPLETED session via `onlySummaryAppliedChanged()`
  while keeping all training fields frozen.

---

*End of design. Technology stack above is locked once approved.*

# PART F — RESPONSES TO DESIGN REVIEW (iteration 4)

The iteration-4 review returned **CHANGES_REQUESTED** with 2 HIGH, 4 MEDIUM, 2 NIT findings,
confirming all six gate dimensions (source-of-truth boundary, offline/sync/immutability, guarded
Firebase singleton, per-user rules, RSC split, implementation order) were already resolved and
that the remaining items were localized security-rule / offline-ordering specifics. All eight are
now resolved directly in the sections noted; no gate dimension regressed.

- **Finding 1 (HIGH) — offline flush ordering could drop a late set create.** *Addressed in §C.7.*
  Added an explicit **offline flush barrier**: the composite "complete session" op gates Step 2 on
  `await waitForPendingWrites(db)`, so the `status = COMPLETED` flip is issued only after every
  previously-queued single-doc `SetLog` write is server-acknowledged. A `parentOpen()`-gated set
  create can therefore never arrive after the parent is COMPLETED, so no logged set is silently
  dropped. The service also holds the completion op while offline and starts the barrier only on
  reconnect (belt-and-suspenders).

- **Finding 2 (HIGH) — summaryApplied toggle write mode unspecified vs validSession.** *Addressed
  in §C.7 Step 3.* The toggle is a **merge update** (`updateDoc` / `set({merge:true})`) preserving
  all session fields, so `validSession()` evaluates the post-merge complete document and
  `onlySummaryAppliedChanged()` proves no training field changed. A non-merge partial `set()` is
  explicitly disallowed. Idempotency and AC-11 hold.

- **Finding 3 (MEDIUM) — second-device toggle denial handling.** *Addressed in §C.7 Step 3.* The
  Step-3 transaction reads the session first and returns a **no-op** when `summaryApplied` is
  already true (the rules `== false` pre-image guard is only a never-reached backstop on the happy
  path). If a race is nonetheless rules-denied because the stored value is already true,
  `syncManager` treats that denial as **success (goal met), not a retry**. The toggle carries **no
  `baseUpdatedAt` precondition** — the pre-image check is its concurrency guard.

- **Finding 4 (MEDIUM) — ExerciseSession unvalidated; sessionCompleted not stated mandatory at
  create.** *Addressed in §C.3/§C.9.* `sessionCompleted: false` is now a **required create-time
  field** on `ExerciseSession` and `SetLog` (always stamped by the service; non-optional in the
  types), and a minimal `validExerciseSession()` rule predicate (string `exerciseId`, non-negative
  int `order`) now validates the `exercises` child on create/update.

- **Finding 5 (MEDIUM) — no-flash routing missed the authed-but-profile-loading state.**
  *Addressed in §C.2.* Added the explicit `AuthGuard` state machine in `authStore.phase`
  (`not-configured | initializing | authed-loading-profile | unauthenticated | onboarding |
  ready`). Both loading phases render the full-screen loader with **no route change**; only
  `unauthenticated` redirects to `/login`; only `onboarding` routes to onboarding. The
  dashboard-flash / login-bounce window during the profile read is closed (FR-1, AC-16).

- **Finding 6 (MEDIUM) — key-presence validSet XOR vs a null-valued optional.** *Addressed in
  §C.4/§C.8a.* Converters are specified to **omit absent optional keys entirely** (conditional
  spread, never `field: value ?? null`), and the Firestore app sets `ignoreUndefinedProperties:
  true`. A duration-based interval `SetLog` serializes with `durationSeconds` and **no**
  `actualReps` key; `actualReps: null` is never produced and would be rejected by `validSet`. An
  emulator test asserts both halves.

- **Finding 7 (NIT) — parentOpen() get() ceiling.** *Addressed in §C.9.* Noted that
  `parentOpen()`-gated creates are always **single-doc** writes (never batched in groups), so each
  request issues exactly one `get()`, far under Firestore's 10-`get()`-per-request limit.

- **Finding 8 (NIT) — Storage thumbnail generation / non-image artifacts.** *Addressed in §C.9
  storage block.* `thumbPath` thumbnails are **client-generated** `image/*` blobs (offscreen
  canvas downscale) satisfying the write `contentType` rule; there is **no server-side image
  processing** and **no non-image artifact** written to Storage (JSON backups download to the
  device, never to Storage).
