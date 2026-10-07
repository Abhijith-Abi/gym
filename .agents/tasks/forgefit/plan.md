# ForgeFit — Implementation Plan

Derived from the approved design at `.agents/tasks/forgefit/design.md` (authoritative contract)
and the approved verdict at `.agents/tasks/forgefit/design-review.json`. Build DIRECTLY in the
repo root `/Users/abi-mac/Documents/Me/dev/gym` on branch `main` (greenfield; no worktree).

## Standing constraints (apply to EVERY item)

- **Build-without-creds (NFR-1, AC-1/2/3).** There is NO real Firebase project and NO
  credentials, and none can be supplied. `pnpm lint`, `pnpm typecheck` (`tsc --noEmit`), and
  `pnpm build` (`next build`) MUST stay GREEN with absent/blank `NEXT_PUBLIC_FIREBASE_*`. No
  `initializeApp()` at import time; getters return `null` when config absent and never throw;
  client-only init (`typeof window`); services short-circuit to a typed `ServiceResult` error.
  Nothing may crash at import/build time. Do NOT mock Firebase to fake success — the code must
  become fully functional the instant real creds land in `.env.local`.
- **Strict TypeScript (NFR-2).** `strict: true`, no unnecessary `any`, typed Firestore via
  `withConverter`.
- **Services funnel (C.1).** All Firestore/Storage/Auth access goes through `src/services/*`
  calling `src/lib/firebase/*`. UI components never import `firebase/firestore` directly.
- **Canonical units (Assumption 2).** All weights stored in **kilograms**; `preferredUnit` is
  display/entry only.
- **Single profile copy (C.2).** `users/{uid}/profile/data` is the ONE authoritative profile
  (incl. `onboardingCompleted`); root `users/{uid}` carries only `{uid, createdAt, updatedAt}`;
  `preferredUnit` lives only on `UserProfile`, never on `UserSettings`.
- After each item, run the verification listed and fix any failure before moving on. Keep the
  codebase buildable at every item boundary.

## Verification commands (project-real, discovered/established in item 1)

- Lint: `pnpm lint`
- Typecheck: `pnpm typecheck` (= `tsc --noEmit`)
- Build: `pnpm build` (= `next build`)
- Unit tests: `pnpm test` (= `vitest run`) / scoped `pnpm vitest run <path>`
- Emulator rules tests (optional, documented): `pnpm test:rules` (Firebase Emulator Suite +
  `@firebase/rules-unit-testing`) — creds-independent.

Grep is NOT verification. Verify with the commands above.

---

# Phase 1 — Working spine (C.16 steps 1-9 + sync)

- [ ] 1. Scaffold Next.js 15 App-Router + strict TS + Tailwind + shadcn/ui + pnpm, and install the
      locked dependency set. Create the Next 15 app (App Router, TS, Tailwind, ESLint), set
      `tsconfig.json` `strict: true`, init shadcn/ui (`components.json`) with Lucide, add the
      `typecheck` script (`tsc --noEmit`) and a `test` script (vitest). Install: zustand, firebase,
      framer-motion, gsap, canvas-confetti, react-hook-form, zod, @hookform/resolvers, recharts,
      date-fns, @ducanh2912/next-pwa; dev: vitest, @vitejs/plugin-react, jsdom,
      @testing-library/react, @testing-library/jest-dom, @firebase/rules-unit-testing. Add
      `vitest.config.ts`. Do NOT enable PWA runtime yet beyond wiring `next.config.ts` with
      next-pwa `disable` in dev (full PWA polish is item 24). Theme tokens: primary `#22c55e`,
      background `#09090b`.
      Files: `package.json`, `pnpm-lock.yaml`, `tsconfig.json`, `next.config.ts`,
      `tailwind.config.ts`, `postcss.config.*`, `components.json`, `.eslintrc*`/`eslint.config.*`,
      `vitest.config.ts`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`.
      Verify: `pnpm install && pnpm lint && pnpm typecheck && pnpm build` all exit 0 with empty env.

- [ ] 2. Add TypeScript data model in `src/types/` and the Zod schemas. Create every entity from
      design C.3 (UserProfile, UserSettings, Exercise, ExerciseSet, WorkoutPlan/PlanDay/PlanEntry,
      WorkoutSession incl. `summaryApplied`/`deviceId`/`schemaVersion`, ExerciseSession incl.
      REQUIRED non-optional `sessionCompleted`, SetLog incl. REQUIRED `sessionCompleted` + one-of
      `actualReps`/`durationSeconds`, ExerciseHistory, PersonalRecord, ProgressionRecommendation,
      BodyMeasurement, ProgressPhoto, RecoveryLog, Goal, Achievement, WorkoutNote, TimerState,
      WeeklySummary, MonthlySummary, SyncOperation) and all unions (DayOfWeek, Goal, Experience,
      Unit, SessionStatus, RpeMode, MuscleGroup, ExerciseCategory, Equipment, ProgressionType).
      Add `APP_SCHEMA_VERSION` constant. Mirror the C.13 Zod bounds (reps≥0, weight≥0, RPE 1-10,
      RIR 0-10, sleep 0-24, 1-5 scales, hydration≥0, measurements>0, enum membership, string
      lengths) with the SetLog one-of refinement.
      Files: `src/types/index.ts` + per-domain files under `src/types/`, `src/lib/schemas/*` (or
      `src/types/schemas.ts`), `src/lib/constants.ts` (APP_SCHEMA_VERSION).
      Verify: `pnpm typecheck` + `pnpm lint` green.

- [ ] 3. Implement the pure libs with unit tests: `oneRepMax.ts`, `units.ts`, `volume.ts`,
      `progression.ts`, and the smart-rest adjustment function. Epley `1RM = weightKg*(1+reps/30)`
      (reps 1 → weight) (AC-8). Units: kg canonical, factor 2.2046226218, plate-sensible rounding,
      round-trip stable (AC-12). Volume: set=`weightKg*reps`, duration sets (no `actualReps`) = 0
      mechanical volume; roll up exercise/workout/muscle/week/month + change %. Progression:
      double-progression with the concrete `progressionConfig` defaults and the six branch rules
      (INCREASE_WEIGHT / INCREASE_REPS / MAINTAIN / REDUCE_WEIGHT / REDUCE_VOLUME / DELOAD) +
      `confidence = min(1, comparableSessions/3)`; pure, never mutates the plan. Smart-rest rule
      from C.8a (+30s on RPE≥9 / RIR≤0, warmup cap 45s, disablable).
      Files: `src/lib/oneRepMax.ts`, `src/lib/units.ts`, `src/lib/volume.ts`,
      `src/lib/progression.ts`, `src/lib/utils.ts`, and `*.test.ts` siblings.
      Verify: `pnpm vitest run src/lib` — all pure-lib tests pass, including an Epley tolerance
      test and a kg↔lb round-trip test.

- [ ] 4. Build the guarded lazy Firebase layer (`src/lib/firebase/*`) and the env files. `config.ts`
      exports `firebaseConfigPresent()`, `getFirebaseApp()`, `getFirebaseAuth()`, `getDb()`,
      `getStorageClient()` per C.2: no top-level `initializeApp()`; getters return `null` when
      config absent or on the server (`typeof window`); singleton via `getApps()/getApp()`;
      `initializeFirestore` with `persistentLocalCache({ tabManager: persistentMultipleTabManager()
      })` and `ignoreUndefinedProperties: true`; App Check + Analytics browser-only, env-gated,
      `isSupported()`-gated, skipped when keys absent. `converters.ts`: typed `withConverter` per
      collection doing Timestamp↔Date, defaulting, schema-version stamping, and OMITTING absent
      optional keys (conditional spread, never `field: value ?? null`). `queries.ts`: bounded,
      ordered, paginated query builders. `auth.ts`, `firestore.ts`, `storage.ts`: thin typed
      wrappers. Create `.env.local` (blank placeholders, gitignored) and committed
      `.env.local.example` (6 `NEXT_PUBLIC_FIREBASE_*` + optional `NEXT_PUBLIC_APPCHECK_SITE_KEY`,
      `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`, debug-token comment).
      Files: `src/lib/firebase/{config,auth,firestore,storage,queries,converters}.ts`,
      `.env.local`, `.env.local.example`.
      Verify: `pnpm lint && pnpm typecheck && pnpm build` green with EMPTY env and nothing throws
      at import; add a vitest asserting `firebaseConfigPresent()===false` and all getters return
      `null` under empty env. Converter unit test: a duration-based SetLog serializes with
      `durationSeconds` and NO `actualReps` key.

- [ ] 5. Author the security rules, indexes, and Firebase config files verbatim from C.9.
      `firestore.rules` (rules_version '2'; no `match /{document=**}`; `signedIn/owns/stamped/
      notCompleted/onlySummaryAppliedChanged/parentOpen/validExerciseSession/validSet/validSession/
      validBody/validRecovery` helpers; per-collection matches exactly as in C.9 incl. the
      summaryApplied-only COMPLETED update toggle, `allow delete: if owns(uid) && notCompleted()`,
      and the `exercises`/`sets` create-gate via `parentOpen()` + required `sessionCompleted==false`).
      `storage.rules` (read/write split; size+contentType on write only). `firestore.indexes.json`
      (composite: sessions status+completedAt; startedAt; personalRecords exerciseId+achievedAt;
      bodyMeasurements date). `firebase.json` wiring rules/indexes/emulators.
      Files: `firestore.rules`, `storage.rules`, `firestore.indexes.json`, `firebase.json`.
      Verify: `pnpm build` still green (these are not imported by the app). If the emulator is
      available, `pnpm test:rules` asserts C.14 cases (a)-(g): cross-user deny; COMPLETED
      `durationSeconds` update denied while summaryApplied toggle allowed; COMPLETED delete denied;
      create of a new set under COMPLETED denied; frozen SetLog update denied; owner Storage read
      allowed; out-of-range SetLog denied. If the emulator is unavailable, mark the rules-test run
      as 'needs verification during implementation' and keep the lint/build green.

- [ ] 6. Implement the Firestore services in `src/services/*` returning the `ServiceResult<T>`
      discriminated union with friendly error mapping (C.12/FR-38). authService, workoutService,
      sessionService, exerciseService, progressService, analyticsService, bodyService,
      recoveryService, goalService, backupService, syncService. Every function guards on a non-null
      client and otherwise returns `{ ok:false, code:'firebase/not-configured' }` (no throw). Keep
      business logic thin here; services compose `queries.ts`/`converters.ts`. sessionService/
      setService ALWAYS stamp `sessionCompleted:false` and `uid` on child creates. Services refuse
      writes/appends/deletes to COMPLETED sessions (defense in depth).
      Files: `src/services/{authService,workoutService,sessionService,exerciseService,
      progressService,analyticsService,bodyService,recoveryService,goalService,backupService,
      syncService}.ts`.
      Verify: `pnpm typecheck && pnpm lint && pnpm build` green with empty env; a vitest asserts
      each service returns `firebase/not-configured` when config is absent.

- [ ] 7. Build authentication end to end with the AuthGuard phase state machine and the protected
      route group. authStore with `phase` (`not-configured | initializing | authed-loading-profile
      | unauthenticated | onboarding | ready`) exactly per C.2; `useAuth` hook; email/password
      login/register/forgot-password/reset-password/logout + Google sign-in via authService; routes
      `app/login`, `app/register`, `app/forgot-password`, `app/reset-password`; `app/(protected)/
      layout.tsx` mounting AuthGuard. Both loading phases render a full-screen loader with NO route
      change; only `unauthenticated` redirects to `/login`; `not-configured` renders the inline
      "Firebase not configured" state; `/not-configured` and `/offline` fallback routes reuse the
      same component. No dashboard flash (FR-1, AC-16, AC-2).
      Files: `src/store/authStore.ts`, `src/hooks/useAuth.ts`,
      `src/components/auth/{AuthGuard,LoginForm,RegisterForm,ForgotPasswordForm}.tsx`,
      `src/app/(protected)/layout.tsx`, `src/app/login/…`, `src/app/register/…`,
      `src/app/forgot-password/…`, `src/app/reset-password/…`, `src/app/not-configured/page.tsx`,
      `src/app/offline/page.tsx`, `src/app/providers.tsx`.
      Verify: `pnpm lint && pnpm typecheck && pnpm build` green with empty env; a React Testing
      Library test covers AuthGuard phases (initializing/not-configured/unauthenticated →
      /login/authed) with no dashboard flash. Live auth behavior with real creds is 'needs
      verification during implementation'.

- [ ] 8. Implement onboarding + profile/settings. Onboarding flow (goal, unit, experience, plan
      pick) writes the root ownership doc + single-copy `profile/data` (`onboardingCompleted:true`)
      + `settings/preferences`; routed from AuthGuard `onboarding` phase. Editable profile
      (displayName, photo, goal, experience, unit) and settings (rpeMode, rest defaults,
      autoStartRest, smartRestEnabled, sound/haptics, hydration target/enabled, progressionConfig,
      notificationsEnabled, deviceId minted once). `preferredUnit` only on profile.
      Files: `src/app/onboarding/…`, `src/components/auth/ProfileSetup.tsx`,
      `src/app/(protected)/settings/…`, `src/store/settingsStore.ts` (persist, deviceId),
      extend `authStore`.
      Verify: `pnpm lint && pnpm typecheck && pnpm build` green; vitest/RTL covers onboarding form
      validation (Zod) and that the profile write targets `profile/data` (AC-6: no email as doc id).

- [ ] 9. Seed the MON–SUN workout split and the exercise library, plus the exercise library UI.
      `src/data/workoutPlan.ts` encodes the exact C.3 split (MON Chest&Triceps, TUE Back&Biceps,
      WED Legs&Calves, THU Shoulders&Abs, FRI Arms&Core HIIT, SAT Full-Body HIIT, SUN isRest) with
      `toFailure`/`perSide`/`durationSeconds`/`intervalWork/RestSeconds` flags and the exact
      prescriptions. `src/data/exercises.ts` library with muscles/equipment/category/difficulty/
      instructions/tips/alternatives. `src/data/achievements.ts` the 8 achievement keys. Exercise
      library UI: search/filter/categories/details/substitutions/custom (RSC shell + client island).
      Files: `src/data/{workoutPlan,exercises,achievements}.ts`,
      `src/app/(protected)/exercises/…`, `src/components/` library views.
      Verify: `pnpm lint && pnpm typecheck && pnpm build` green; a vitest validates the seed plan
      has all 7 days, Sunday `isRest:true`, and each PlanEntry references a real exercise id.

- [ ] 10. Build the session engine + Active Workout Mode + timers (the core gym loop, offline-first).
      sessionStore + exerciseStore + timerStore (timerStore `persist` with absolute anchors
      `workoutStartedAtMs`/`pausedAccumMs`/`rest.endsAtMs`; elapsed recomputed `now-startedAt-
      pausedAccum`). Session states NOT_STARTED/IN_PROGRESS/COMPLETED/ABANDONED; start/pause/resume/
      finish/abandon. Active Workout screen: live timer, one exercise at a time, PreviousPerformance
      panel, ProgressionRecommendation, SetTracker/SetRow quick-log (2-3 taps, autofill), RPE/RIR
      adaptive UI, next-exercise preview, sticky controls, nav guard. Hooks `useWorkoutTimer`,
      `useRestTimer`, and IntervalTimer state machine (IDLE→WORK→REST→…→DONE, background-safe
      anchoring, auto-advance, pause/skip). Each live `SetLog` is a single-doc create/update
      through the SDK with `sessionCompleted:false` stamped. Duration rounds log one duration-based
      SetLog (`durationSeconds`, no `actualReps`).
      Files: `src/store/{sessionStore,exerciseStore,timerStore}.ts`,
      `src/hooks/{useWorkoutTimer,useRestTimer}.ts`,
      `src/components/workout/{WorkoutHeader,WorkoutProgressBar,ExerciseCard,ExerciseDetails,
      SetTracker,SetRow,PreviousPerformance,ProgressionRecommendation,WorkoutTimer,RestTimer,
      IntervalTimer,SupersetGroup,StickyControls}.tsx`, `src/app/(protected)/workout/…`.
      Verify: `pnpm lint && pnpm typecheck && pnpm build` green; vitest: timer resumes with correct
      elapsed after simulated close/reopen (AC-9); RTL: SetTracker quick-log flow; interval state
      machine advances WORK→REST→DONE. Offline SetLog persistence to live Firestore is 'needs
      verification during implementation'.

- [ ] 11. Implement the PR engine + celebration, exerciseHistory rollups, and volume wiring.
      progressService PR detection reads bounded `exerciseHistory/{exerciseId}` (cached) and
      computes weight/rep/volume/e1RM PRs client-side; PRs written as `personalRecords/{sessionId}_
      {exerciseId}_{type}` (deterministic). `isPr` flags on SetLog. PRBadge + PRCelebration
      (framer-motion + gsap + canvas-confetti, dynamic ssr:false, reduced-motion + optional
      vibration/sound). exerciseHistory upsert rollup (bounded recentSessions ring + bests).
      Files: `src/components/pr/{PRBadge,PRCelebration}.tsx`, extend `progressService`,
      `src/store/progressStore.ts`.
      Verify: `pnpm lint && pnpm typecheck && pnpm build` green; vitest covers PR detection logic
      (beating history by weight/reps/volume/e1RM yields the right PR records, AC-7) and that PR
      ids are deterministic. Live celebration render is 'needs verification during implementation'.

- [ ] 12. Build the dynamic dashboard + swipeable DaySelector. Greeting; today auto-selected by day
      of week; set/exercise counts; estimated time; progress %; volume; streak; weekly volume; new
      PRs — all dynamic from stores/services. Sunday rest-day variant. DaySelector MON–SUN with
      per-day status, auto-selecting today (AC-13). RSC shell + client data islands.
      Files: `src/components/dashboard/{Dashboard,DaySelector,Greeting,TodayCard,StatTiles}.tsx`,
      `src/app/(protected)/dashboard/…`, `src/store/workoutStore.ts`.
      Verify: `pnpm lint && pnpm typecheck && pnpm build` green; vitest/RTL: DaySelector selects
      today and renders the Sunday rest variant on Sundays (AC-13).

- [ ] 13. Implement the sync layer and enforce completed-session immutability + conflict rules.
      `src/lib/sync/{networkStatus,syncQueue,syncManager,conflictResolver}.ts`, `syncStore`,
      SyncStatus UI, `useNetworkStatus`. Queue-authority boundary (C.7): single-doc idempotent
      writes go DIRECTLY through the SDK; the custom `syncQueue` owns ONLY the composite "complete
      session" op (orchestration/status, not transport). Completion decomposition: Step 1 PR
      detection (reads before writes, no txn); Step 2 completion `writeBatch` (status=COMPLETED +
      totals, flip `sessionCompleted=true` on children, deterministic PR ids, exerciseHistory
      upserts) GATED on `await waitForPendingWrites(db)` (flush barrier, HIGH-1); Step 3 SEPARATE
      `runTransaction` per weekly/monthly summary doc, reads session first, no-ops if
      `summaryApplied===true`, else applies deltas and flips `summaryApplied=true` via merge
      `updateDoc` (HIGH-2); second-device denial treated as success not retry (MEDIUM-3); no
      `baseUpdatedAt` on the toggle. conflictResolver: server `updatedAt` wins; drops ops targeting
      COMPLETED sessions; `SyncOperation.id` dedupes composite replays (AC-10).
      Files: `src/lib/sync/*`, `src/store/syncStore.ts`, `src/hooks/useNetworkStatus.ts`,
      `src/components/sync/SyncStatus.tsx`, extend sessionService.
      Verify: `pnpm lint && pnpm typecheck && pnpm build` green; vitest: conflictResolver drops
      COMPLETED-targeted ops; Step 3 is a no-op when `summaryApplied===true`; completion write-set
      stays ≤~73/≤500. Reconnect flush with no duplicates against live Firestore (AC-10) and the
      flush barrier ordering are 'needs verification during implementation'.

---

# Phase 2 — Layered features (C.16 steps 11-15)

- [ ] 14. History list + monthly calendar + streaks. Paginated completed-session history with
      filters (status==COMPLETED order by completedAt desc, limit+startAfter); monthly calendar
      coloured Completed/Partial/Planned/Rest; streaks where rest days do NOT break the streak
      (FR-16/17).
      Files: `src/components/history/{WorkoutHistory,WorkoutCalendar}.tsx`,
      `src/app/(protected)/history/…`, extend workoutService (paginated queries).
      Verify: `pnpm lint && pnpm typecheck && pnpm build` green; vitest covers streak logic
      (rest day preserves streak) and calendar day-classification.

- [ ] 15. Analytics modules + weekly/monthly reports with Recharts + summary docs. Pure transforms
      `src/lib/analytics/{volume,strength,consistency,muscleVolume,personalRecords,trends}.ts` over
      summary docs + bounded raw reads; range filters 7D/30D/90D/6M/1Y/ALL; weekly/monthly reports
      read the small `analyticsWeekly`/`analyticsMonthly` summary docs (not full history); charts
      lazy-loaded (`next/dynamic` ssr:false) with skeletons.
      Files: `src/lib/analytics/*`, `src/components/charts/{ProgressChart,VolumeChart,StrengthChart,
      MuscleVolumeChart}.tsx`, `src/app/(protected)/progress/…`, `src/store/analyticsStore.ts`,
      extend analyticsService.
      Verify: `pnpm lint && pnpm typecheck && pnpm build` green; vitest covers each analytics
      transform (volume/strength/consistency/muscleVolume/PR/trend) with fixed inputs.

- [ ] 16. Body tracking (weight, body-fat %, measurements, trends) + progress photos. BodyMeasurement
      CRUD + trend charts; ProgressPhoto client-side thumbnail generation (offscreen canvas
      downscale to image/* blob) + upload to Storage `users/{uid}/progressPhotos/...`; gallery.
      Must not fail without Storage creds (service short-circuits).
      Files: `src/components/body/{BodyWeightChart,BodyMeasurements,ProgressPhotoGallery}.tsx`,
      `src/app/(protected)/body/…`, `src/store/bodyStore.ts`, extend bodyService/storage.
      Verify: `pnpm lint && pnpm typecheck && pnpm build` green with empty env (no Storage crash);
      vitest covers thumbnail-blob generation producing an image/* type. Live upload is 'needs
      verification during implementation'.

- [ ] 17. Recovery + fatigue insight + manual deload, and hydration. RecoveryLog (`recoveryLogs/
      {yyyy-MM-dd}` idempotent upsert): sleep/energy/stress/soreness/motivation + computed
      recoveryScore 0-100; fatigue framed as TRAINING insight, not medical advice; manual deload
      feeding progression. Hydration: configurable target, +250/500/750 ml quick adds, stored when
      enabled.
      Files: `src/components/recovery/{RecoveryCard,HydrationTracker}.tsx`,
      `src/app/(protected)/recovery/…`, `src/store/recoveryStore.ts`, extend recoveryService.
      Verify: `pnpm lint && pnpm typecheck && pnpm build` green; vitest covers recoveryScore
      computation (0-100, higher=better) and hydration increments.

- [ ] 18. Goals + achievements. Strength/bodyweight/custom goals with progress bars (goalService,
      goalStore, GoalProgress). The 8 achievements (First Workout; 10/50/100 Workouts; 10/30-Day
      Streak; First PR; 10 PRs; 100,000 kg Volume) stored at `achievements/{key}` (idempotent
      unlock) with unlock animation (AchievementCard).
      Files: `src/components/goals/GoalProgress.tsx`, `src/components/achievements/AchievementCard.tsx`,
      `src/app/(protected)/goals/…`, `src/store/goalStore.ts`, extend goalService + achievements seed.
      Verify: `pnpm lint && pnpm typecheck && pnpm build` green; vitest covers achievement unlock
      thresholds and idempotent key-keyed unlock.

- [ ] 19. Backup/export/import + delete account (Settings), Zod-validated with schema-version policy.
      Export gathers all collections to versioned `forgefit-backup-YYYY-MM-DD.json`. Import: Zod
      validate BEFORE any write; always take a local safety backup first; reject
      `schemaVersion > APP_SCHEMA_VERSION` (friendly msg, no writes); migrate `< APP_SCHEMA_VERSION`
      via documented `migrations` map then re-validate (or reject if no path); proceed on equal via
      batched upserts; never overwrite completed sessions. Delete account: client deletes reachable
      docs + Storage objects + Auth user (reauth flow); optional documented Cloud Function
      `functions/deleteUserData` (no admin creds in client).
      Files: `src/lib/backup.ts`, `src/components/settings/BackupManager.tsx`, extend backupService,
      `functions/` (optional, outside Next app).
      Verify: `pnpm lint && pnpm typecheck && pnpm build` green with empty env; vitest covers
      AC-14: export filename shape; import round-trip after clear-cache; malformed file rejected by
      Zod before writing; newer-version rejected with no writes; older-version migrate-then-import;
      safety backup taken before any import.

- [ ] 20. PWA polish: manifest, service worker, offline, custom install prompt, optional
      notifications. `public/manifest.json` (name/short_name ForgeFit, display standalone,
      background_color `#09090b`, theme_color `#22c55e`, 192/512 + maskable icons, splash);
      @ducanh2912/next-pwa SW precaches app shell + runtime-caches static/seed (NOT Firestore),
      disabled in dev; `useInstallPrompt` captures `beforeinstallprompt`, bottom-sheet, stores a
      dismissed flag so it never nags again, iOS manual instructions; optional browser
      notifications only after the user enables them.
      Files: `public/manifest.json`, `public/icons/*`, `next.config.ts` (next-pwa enabled on build),
      `src/components/pwa/InstallPrompt.tsx`, `src/hooks/useInstallPrompt.ts`.
      Verify: `pnpm build` green with empty env; `pnpm start` serves a valid manifest + registered
      SW; vitest/RTL: install prompt does not reappear after dismissal. Lighthouse PWA
      installability (AC-15) is 'needs verification during implementation'.

- [ ] 21. Accessibility pass (FR-37). Semantic HTML, keyboard nav, ARIA on dialogs/bottom sheets,
      focus management, accessible form validation, ≥44px touch targets, high contrast, reduced
      motion honored across animations. (Full WCAG conformance requires manual assistive-tech
      testing and expert review — out of automated scope, NFR-6.)
      Files: cross-cutting edits across `src/components/**`, `src/components/ui/*`.
      Verify: `pnpm lint && pnpm typecheck && pnpm build` green; RTL a11y checks on key dialogs/
      forms (roles, labels, focus trap). Manual AT/Lighthouse a11y audit is 'needs verification
      during implementation'.

- [ ] 22. Performance optimization + robust-states sweep (NFR-3, FR-38). Confirm RSC-by-default,
      heavy client islands (charts/calendar/celebration) are `next/dynamic` ssr:false with
      skeletons; reports read summary docs not full history; add Skeletons/EmptyState/ErrorState +
      offline/success states everywhere; map all raw Firebase errors to friendly messages.
      Files: `src/components/ui/{Skeletons,EmptyState,ErrorState,BottomSheet}.tsx`,
      `src/components/nav/{BottomNav,Sidebar}.tsx`, `src/hooks/useHaptics.ts`, cross-cutting polish.
      Verify: `pnpm lint && pnpm typecheck && pnpm build` green; confirm dynamic imports present on
      chart/celebration/calendar islands; RTL covers an EmptyState and an ErrorState render.

- [ ] 23. Full verification + write `verification.md`. Run `pnpm install && pnpm lint && pnpm
      typecheck && pnpm build` with EMPTY env and confirm all exit 0 with nothing throwing at
      import; run the full `pnpm test`; run `pnpm test:rules` if the emulator is available (else
      record it as needs-verification). Walk every FR/AC and record pass/needs-verification in
      `verification.md`.
      Files: `.agents/tasks/forgefit/verification.md`.
      Verify: all green; `verification.md` maps each FR-1..39 / NFR-1..6 / AC-1..16 to a plan item
      and a result.

## Requirement coverage map (every FR/AC maps to an item)

- FR-1 Auth / AC-16 / AC-2 → item 7. FR-2 Onboarding, FR-3 Profile / AC-6 → item 8.
- FR-4 Seed split + library, FR-20 library UX → item 9. FR-5 Session, FR-6 Active Mode, FR-7
  Set logging/supersets/HIIT, FR-10 RPE/RIR, FR-18 timers / AC-9, FR-19 templates → item 10.
- FR-8 Previous performance → items 10-11. FR-9 Progression, FR-13 1RM / AC-8, FR-11/12 volume,
  FR-21 units / AC-12 → items 3, 11. FR-13/14 PR + celebration / AC-7 → item 11.
- FR-27 Dashboard / AC-13 → item 12. FR-29/30/31 write/offline/sync + immutability / AC-10/11 →
  items 4, 6, 13 (rules in item 5). FR-15/16/17 history/calendar/streaks → items 14-15.
- FR-28 reports/analytics → item 15. FR-22 body, FR-23 photos → item 16. FR-24 recovery, FR-26
  hydration → item 17. FR-25 goals, FR-32 achievements → item 18. FR-33 backup/delete / AC-14 →
  item 19. FR-34 PWA / AC-15 → item 20. FR-35 mobile UX → items 10,12,22. FR-36 animations/haptics
  → items 11,21,22. FR-37 a11y → item 21. FR-38 robust states → item 22. FR-39 data integrity →
  items 5,13.
- NFR-1 build-without-creds / AC-1/2/3 → items 1,4,6 + every item's verify. NFR-2 strict TS → all.
  NFR-3 perf → items 15,22. NFR-4 security / AC-4/5 → item 5. NFR-5 offline latency → items 10,13.
  NFR-6 a11y → item 21.

## Open items flagged for implementation-time verification (cannot verify by reading alone)

- Offline SetLog persistence + reconnect flush with no duplicates (AC-10) and the flush-barrier
  ordering (item 13) require a live/emulated Firestore run.
- Completed-session immutability denials (AC-11), cross-user isolation (AC-4/5), and out-of-range
  rejection (AC-7 validation) require the Firebase Emulator Suite (`pnpm test:rules`).
- Live auth flows, Storage photo upload, PR celebration render, and Lighthouse PWA (AC-15) /
  a11y audits require a browser + (for Firebase) real/emulated creds.
These are implemented to spec; mark them "needs verification during implementation" rather than
"done" until exercised against the emulator/live creds.
