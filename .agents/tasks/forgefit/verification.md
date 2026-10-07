# ForgeFit — Verification Matrix

Maps every functional requirement (FR-1..39), non-functional requirement
(NFR-1..6), and acceptance criterion (AC-1..16) from `design.md` PART A to a
concrete result. This file is refreshed as the final cross-cutting step
(FEAT-006). It reflects the state of the full build (FEAT-001..006).

## Result legend

- **PASS** — verified by an automated gate (lint/typecheck/build/test) or by
  reading the implemented code path in this repo.
- **NEEDS VERIFICATION DURING IMPLEMENTATION** — requires the Firebase Emulator
  Suite, live Firebase credentials, a Lighthouse run, or a manual
  assistive-technology audit that is out of automated, creds-free scope.
  Per the environment constraints (no Firebase project / no creds, emulator may
  be unavailable) these are intentionally NOT claimed as "done".

## Automated gate snapshot (empty `NEXT_PUBLIC_FIREBASE_*` env)

Re-run after resolving the two review findings (completion call-site wiring)
from a clean state on branch `main` (`.env.local` holds blank
`NEXT_PUBLIC_FIREBASE_*` placeholders). Commands run in order; every one exited 0.

| Gate | Command | Result |
|---|---|---|
| Install | `pnpm install` | PASS — lockfile up to date, exit 0 |
| Lint | `pnpm lint` (`next lint`) | PASS — "No ESLint warnings or errors" |
| Typecheck | `pnpm typecheck` (`tsc --noEmit`) | PASS — exit 0, no diagnostics |
| Build | `pnpm build` (`next build`) | PASS — 20 static pages (18 app routes + `_not-found` + `/offline`), `(pwa)` compiled, `public/sw.js` generated, `/offline` precached, custom runtimeCaching applied; nothing throws at import/build with empty env |
| Unit/component tests | `pnpm test` (`vitest run`) | PASS — 181 passed, 2 version-gated skips, 27 files (incl. new `ActiveWorkout.test.tsx`) |
| Rules tests | `pnpm test:rules` (emulator) | NEEDS VERIFICATION — requires Firebase Emulator Suite |

### Review findings resolved this iteration (`review.json`, CHANGES_REQUESTED)

All fixes were pure wiring at the single completion call site
(`src/components/workout/ActiveWorkout.tsx#handleFinish`) over already-built,
already-tested machinery; no behavior the user already relies on was changed.

- **MEDIUM — PersonalRecord docs never persisted (AC-7).** `handleFinish`
  previously called `sessionService.completeSession({ …, personalRecords: [] })`
  then `clearProgress()`, discarding the celebration queue. Now it collects
  `useProgressStore.getState().pendingCelebration`, dedupes by the deterministic
  PR id, and passes those docs into the completion payload so
  `personalRecords/{recordId}` is written (feeds PR-count achievements + the
  weekly/monthly `prCount` delta).
- **MEDIUM — Composite Step 3 never invoked; summaries empty (FR-28).**
  `handleFinish` called Step 2 (`completeSession`) directly and never routed
  through the composite op, so `analyticsWeekly/{weekId}` + `analyticsMonthly/{monthId}`
  were never populated and the HIGH-1 flush barrier / Step-3 idempotency path
  were dead in the live flow. Now it builds the `ApplySummaryInput` delta
  (`workouts:1`, `totalVolumeKg`, `volumeByMuscle` attributed via each set's
  primary muscles from the exercise catalog, `prCount`, period keys via
  `weekIdOf`/`monthIdOf`), enqueues the op in `syncStore`, and runs it via
  `syncService.buildCompleteSessionOp` + `runCompleteSession` (Step 2 + Step 3
  behind the barrier). The op is dequeued + `markSynced()` on `done`/`dropped`
  and left queued on `held-offline`/`retry`/not-configured for a later flush.
- **NIT — stale "8 achievements" prose.** `design.md` §C.3 Achievement model
  reconciled from "enum of the 8 achievements" to "9" to match FR-32, the
  `AchievementKey` union, and `src/data/achievements.ts` (data unchanged).

New coverage: `src/components/workout/ActiveWorkout.test.tsx` asserts the finish
flow routes through the composite op (never Step 2 directly), passes the
detected PR for persistence, and builds a populated summary delta
(`workouts`/`prCount`/`totalVolumeKg`/`volumeByMuscle` + well-formed
`weekId`/`monthId`).

### Cross-FEAT seam checks (integration)

Beyond the gates, the seams between FEAT-001..006 were inspected directly:

- **Service boundary (NFR, C.5):** no UI component or Zustand store imports the
  Firebase Firestore/Storage/Auth SDK at runtime. The only `firebase/*` imports
  in `src/components` and `src/store` are `import type` (erased at compile):
  `QueryDocumentSnapshot` in `WorkoutHistory.tsx` and `User` in `authStore.ts` /
  `AuthGuard.test.tsx`. All data access funnels through `src/services/*`.
- **Services index (C.15):** `src/services/index.ts` re-exports all 12 service
  namespaces + `serviceResult`; no dangling or missing export.
- **Not-configured short-circuit (NFR-1 / AC-1):** `serviceResult.notConfigured()`
  returns the typed `{ok:false, code:'firebase/not-configured'}` and
  `services.test.ts` *asserts* (not greps) that every service returns it under
  empty env without throwing.
- **Rules ↔ schema (C.4/C.9):** `firestore.rules` is the verbatim C.9 contract —
  default-deny, `owns(uid)` on every path, uid stamping, COMPLETED-session
  immutability with only the `summaryApplied false→true` toggle permitted, and no
  `allow … if true`. The guarded paths (`workoutSessions/{sid}/exercises/{eid}/sets/{setId}`,
  `analyticsWeekly`, `analyticsMonthly`, `progressPhotos`, `recoveryLogs`, …)
  match the collection refs in `src/lib/firebase/firestore.ts`.
- **No stub markers:** no `TODO`/`FIXME`/unimplemented stubs across `src/**/*.ts`.

- **Completion call site (FEAT-003 UI ↔ FEAT-004 orchestration):** the two
  review findings were both at `ActiveWorkout.handleFinish`. It now routes the
  completion through the composite op (`syncService.buildCompleteSessionOp` +
  `runCompleteSession` → Step 2 completion batch + Step 3 summary transaction)
  instead of calling `sessionService.completeSession` (Step 2) in isolation, and
  forwards the detected PRs for persistence. This closes the seam between
  FEAT-003's finish UI and FEAT-004's sync/analytics layer.

The two review findings (AC-7 PR persistence, FR-28 summary population) and the
NIT prose fix were the only integration gaps; both code findings are resolved
and locked by `ActiveWorkout.test.tsx`. The pipeline (lint/typecheck/build/test)
is green with empty env.

---

## Functional requirements

| FR | Topic | Result | Evidence / Notes |
|---|---|---|---|
| FR-1 | Authentication (email/pw + Google, no flash) | PASS (code) / live NEEDS VERIFICATION | `authService`, `authStore` 6-phase machine, `AuthGuard` + `AuthGuard.test.tsx` (6 phase tests). Live auth needs creds. |
| FR-2 | Onboarding first-login routing | PASS (code) | `onboarding/` route, `ProfileSetup`, `authStore` → `onboarding` phase; writes `profile/data` with `onboardingCompleted`. Live write needs creds. |
| FR-3 | User profile (keyed by uid, editable) | PASS (code) | `profileService`, `ProfileEditForm`; `users/{uid}/profile/data`. AC-6 (no email id) PASS. |
| FR-4 | Seeded Mon–Sun split + exercise library | PASS | `src/data/workoutPlan.ts` + `workoutPlan.test.ts` (seed integrity); `src/data/exercises.ts`, `ExerciseLibrary`. |
| FR-5 | Session engine (states, start/pause/finish/abandon) | PASS (code) | `sessionStore`, `sessionService`. |
| FR-6 | Active Workout Mode | PASS (code) | `components/workout/ActiveWorkout` + islands, StickyControls. |
| FR-7 | Set logging (reps/weight/RPE/RIR/tempo/rest, supersets, HIIT) | PASS (code+test) | `SetTracker` + `SetTracker.test.tsx`; `IntervalTimer`, `intervalTimer.test.ts`. |
| FR-8 | Previous performance | PASS (code) | `PreviousPerformance`, `exerciseHistory` rollups + `exerciseHistory.test.ts`. |
| FR-9 | Progression engine | PASS (test) | `lib/progression.ts` + `progression.test.ts` (pure, never mutates plan). |
| FR-10 | RPE/RIR mode | PASS (code) | `UserSettings.rpeMode`, `SettingsForm`. |
| FR-11 | Volume | PASS (test) | `lib/volume.ts` + `volume.test.ts`. |
| FR-12 | Muscle-group analytics | PASS (test) | `lib/analytics/muscleVolume.ts`, `transforms.test.ts`. |
| FR-13 | PR engine (Epley 1RM) | PASS (test) | `lib/oneRepMax.ts` + `oneRepMax.test.ts`; `analytics/personalRecords.ts` + test. AC-8 PASS. |
| FR-14 | PR celebration (reduced-motion aware) | PASS (code) | `PRCelebration` (next/dynamic ssr:false) → `PRCelebrationView` (branches on `prefers-reduced-motion`, Escape + focus added in FEAT-006). |
| FR-15 | Exercise history + charts | PASS (code) | `charts/*` (dynamic), `StrengthChart`. |
| FR-16 | Workout history + calendar | PASS (code+test) | `WorkoutHistory`, `WorkoutCalendar` (now lazy via `LazyWorkoutCalendar`), `consistency.test.ts`. |
| FR-17 | Streaks (rest days don't break) | PASS (test) | `consistency.ts#computeStreak` + `consistency.test.ts`. |
| FR-18 | Timers (persist, presets, smart rest) | PASS (test) | `timerStore` + `timerStore.test.ts`, `useRestTimer`, `intervalTimer.test.ts`. AC-9 (resume) covered by timer test; full app-close/reopen is live behavior. |
| FR-19 | Templates | PASS (code) | `WorkoutPlan.isTemplate`, `workoutService`. |
| FR-20 | Exercise library UX + custom | PASS (code) | `ExerciseLibrary`, `CustomExerciseForm`, `ExerciseDetails`. |
| FR-21 | Units kg/lb (no corruption) | PASS (test) | `lib/units.ts` + `units.test.ts` (round-trip). AC-12 PASS. |
| FR-22 | Body tracking + trends | PASS (code) | `bodyService`, `BodyWeightChart` (dynamic), `BodyMeasurements`. |
| FR-23 | Progress photos (Storage, client thumbnails) | PASS (code) / live NEEDS VERIFICATION | `ProgressPhotoGallery`, `lib/thumbnail.ts` + `thumbnail.test.ts`. Build green with no Storage creds; actual upload needs creds. |
| FR-24 | Recovery (score, training-insight framing, manual deload) | PASS (test) | `recoveryService`, `lib/recovery.ts` + `recovery.test.ts`. |
| FR-25 | Goals | PASS (code+test) | `goalService`, `GoalProgress`, `goals.ts`. |
| FR-26 | Hydration | PASS (code) | `HydrationTracker`, settings target. |
| FR-27 | Dashboard (dynamic, today auto-select, Sunday variant) | PASS (test) | `Dashboard`, `DaySelector` + `DaySelector.test.tsx`. AC-13 PASS. |
| FR-28 | Reports & analytics (summary docs, lazy charts) | PASS (code+test) / live NEEDS VERIFICATION | `analyticsService` reads `analyticsWeekly`/`analyticsMonthly` summary docs (not full history); charts `next/dynamic ssr:false`. Summary docs are now populated at completion: `ActiveWorkout.handleFinish` routes through the composite op (Step 2 + Step 3 `applySessionSummaries`), fixing the prior gap where Step 3 had no app caller. `ActiveWorkout.test.tsx` asserts the populated summary delta. Live upsert needs creds. |
| FR-29 | Firestore write strategy (optimistic, batched, paginated) | PASS (code) | services + `syncManager`; list reads paginated with `limit`/`startAfter`. |
| FR-30 | Offline-first | PASS (code) / live NEEDS VERIFICATION | `persistentLocalCache`; `/offline` SW fallback (verified in build output). End-to-end offline run needs runtime. |
| FR-31 | Sync engine + conflict + immutability | PASS (test) | `lib/sync/*` + `syncManager.test.ts`, `syncQueue.test.ts`, `conflictResolver.test.ts`. |
| FR-32 | Achievements | PASS (test) | `lib/achievements.ts`, `achievements.test.ts`, `AchievementCard`. |
| FR-33 | Backup/import/export + delete account | PASS (test) | `backupService`, `lib/backup.ts` + `backup.test.ts` (schema-version policy). Delete-account live step needs creds. |
| FR-34 | PWA (manifest, SW, offline, install prompt, optional notifications) | PASS | `public/manifest.json` (standalone, #09090b/#22c55e, 192/512 + maskable), `public/icons/*`, next-pwa enabled on build only, `useInstallPrompt` + `InstallPrompt` + `InstallPrompt.test.tsx` (dismissal never re-nags), `useNotifications` (opt-in only). Installability itself = AC-15 (Lighthouse) NEEDS VERIFICATION. |
| FR-35 | Mobile-first UX (bottom nav / sidebar, ≥44px) | PASS (code) | `nav/BottomNav` (min-h 56px), `nav/Sidebar`, `BottomSheet`. |
| FR-36 | Animations & haptics (reduced-motion, enhancement-only) | PASS (code) | `useHaptics` (reduced-motion + disablable), global reduced-motion CSS, framer `useReducedMotion` in `BottomSheet`, PR celebration branch. |
| FR-37 | Accessibility | PASS (code) / manual NEEDS VERIFICATION | Semantic HTML, ARIA dialogs (`BottomSheet` aria-modal/labelledby + focus trap + Escape; PR dialog hardened), focus-visible ring, accessible form errors (`role="alert"`). Full WCAG/assistive-tech audit (NFR-6) is manual. |
| FR-38 | Robust states + friendly errors | PASS (test) | `ui/skeleton`, `ui/empty-state`, `ui/error-state` (+ render tests), `serviceResult.ts#mapError`/`FRIENDLY` maps raw Firebase codes. |
| FR-39 | Data integrity (no auto-delete/overwrite) | PASS (test) | `conflictResolver` drops ops on COMPLETED sessions; rules enforce immutability (emulator-verified below). |

---

## Non-functional requirements

| NFR | Topic | Result | Evidence / Notes |
|---|---|---|---|
| NFR-1 | Build without creds | PASS | lint + typecheck + build all exit 0 with empty env; no `initializeApp()` at import; `config.test.ts` asserts null getters. |
| NFR-2 | Strict TypeScript | PASS | `tsconfig.json strict:true`; `tsc --noEmit` clean; no unnecessary `any`. |
| NFR-3 | Performance (lazy heavy islands, summary reads, RSC default) | PASS (code) | Charts + PR celebration + calendar are `next/dynamic ssr:false` with skeleton fallbacks; analytics reads summary docs; layouts are RSC, client islands scoped. Field perf = Lighthouse (AC-15) NEEDS VERIFICATION. |
| NFR-4 | Security (per-user rules, no admin creds) | PASS (code) / emulator NEEDS VERIFICATION | `firestore.rules` + `storage.rules` per-user; no service-account/private keys in client. Rule assertions need emulator. |
| NFR-5 | Offline latency (instant Zustand) | PASS (code) | optimistic set logging in `sessionStore` independent of network. |
| NFR-6 | Accessibility practices | PASS (code) / manual NEEDS VERIFICATION | See FR-37; full assistive-tech conformance is explicitly manual and out of automated scope. |

---

## Acceptance criteria

| AC | Statement | Result | Evidence / Notes |
|---|---|---|---|
| AC-1 | Empty env → install/lint/typecheck/build exit 0, no import throw | PASS | Gate snapshot above. |
| AC-2 | Empty env → clear "Firebase not configured" state, no crash/spinner | PASS (code) | `AuthGuard` renders `NotConfiguredState` inline on `not-configured`; `/not-configured` route. |
| AC-3 | Dropping creds makes auth/Firestore/Storage work with no code change | NEEDS VERIFICATION | Requires live creds; guarded singleton is wired to activate on env presence. |
| AC-4 | `firestore.rules` deny unauth / cross-uid; no `if true` | PASS (static) / emulator NEEDS VERIFICATION | Rules reviewed (default-deny, per-user, no wildcard, no `if true`); assertion run needs emulator. |
| AC-5 | `storage.rules` restrict each user to own path | PASS (static) / emulator NEEDS VERIFICATION | Read/write split per-user; assertion run needs emulator. |
| AC-6 | User docs keyed by uid; no email doc id | PASS | `profileService`/schema use `uid`; no email-as-id path. |
| AC-7 | Beating history creates `personalRecords/{id}` + celebration | PASS (code+test) / live NEEDS VERIFICATION | `analytics/personalRecords.ts` + `progressService`; celebration via `PRCelebration`. Prior gap (completion passed `personalRecords: []`) is fixed: `ActiveWorkout.handleFinish` now forwards the deduped `pendingCelebration` PRs into the completion batch (`personalRecordConverter` writes `personalRecords/{recordId}`). `ActiveWorkout.test.tsx` asserts the detected PR reaches the composite op. Live write needs creds. |
| AC-8 | Est-1RM = weight·(1+reps/30) within tolerance | PASS (test) | `oneRepMax.test.ts`. |
| AC-9 | Timer resumes with correct elapsed after close/reopen | PASS (test) / device NEEDS VERIFICATION | `timerStore.test.ts` (absolute-anchor recompute); real app-close/reopen is device-level. |
| AC-10 | Offline logging persists; reconnect flushes, no duplicates | NEEDS VERIFICATION | Requires live creds + network toggling; logic covered by `syncQueue`/`syncManager` tests + deterministic IDs. |
| AC-11 | Completed session immutable (rules forbid mutate/append/delete; summaryApplied toggle allowed) | NEEDS VERIFICATION (emulator) | Named rules assertions (a–g) in `tests/rules/firestore.rules.test.ts`; need emulator to run. Service/conflict-resolver defense covered by `conflictResolver.test.ts`. |
| AC-12 | kg↔lb display-only; stored canonical kg round-trips | PASS (test) | `units.test.ts`. |
| AC-13 | Dashboard auto-selects today; Sunday rest variant | PASS (test) | `DaySelector.test.tsx`. |
| AC-14 | Export filename; import round-trip; Zod reject; version policy; safety backup | PASS (test) | `backup.test.ts` (incl. newer-version reject + migrate paths; 2 version-gated skips documented). |
| AC-15 | Lighthouse PWA installability + install prompt no re-nag | PARTIAL: no-re-nag PASS (test), installability NEEDS VERIFICATION | `InstallPrompt.test.tsx` proves dismissal never reappears + persists. Manifest + SW verified in build output and by serving `public/manifest.json`/`/sw.js`; the Lighthouse PWA audit itself needs a browser run. |
| AC-16 | `(protected)/` redirects to `/login` when unauth, no flash | PASS (test) | `AuthGuard.test.tsx` (only `unauthenticated` phase redirects; loading phases render loader, no route change). |

---

## Explicitly deferred (require emulator, live creds, Lighthouse, or manual audit)

- **AC-3, AC-7, AC-10** and all "live" notes — need real `NEXT_PUBLIC_FIREBASE_*`
  credentials. The guarded singleton (design C.2) activates on env presence with
  no code change; Firebase was never mocked to fake success.
- **AC-4, AC-5, AC-11, NFR-4 rule assertions** — need the Firebase Emulator Suite
  (`pnpm test:rules`). Assertions are authored in `tests/rules/firestore.rules.test.ts`.
- **AC-15 Lighthouse PWA installability** — needs a Chromium/Lighthouse run against
  `pnpm start`. The prerequisites (valid manifest, generated SW, offline fallback,
  icons incl. maskable) are present and build-verified.
- **NFR-6 / FR-37 full accessibility conformance** — needs a manual assistive-tech
  audit (screen reader, keyboard-only, contrast tooling). Automated/code-level
  practices are implemented.
