# AGENTS.md — ForgeFit architecture guide

Orientation for anyone (human or agent) working on this codebase. The authoritative design
document lives at `.agents/tasks/forgefit/design.md` (requirements, data model, security rules,
and the resolved review history in PARTS D/E/F). This file is the quick map.

---

## What ForgeFit is

A mobile-first, offline-first PWA for strength training: plan → train → log → analyze → progress →
recover. Next.js 15 (App Router) + React 19 + TypeScript (strict), Firebase (Auth / Firestore /
Storage), Zustand, Tailwind + shadcn/ui, recharts, framer-motion/gsap/canvas-confetti,
react-hook-form + zod, @ducanh2912/next-pwa. Package manager: **pnpm**.

---

## The one rule that shapes everything: no credentials at build time

The app must `lint`, `typecheck`, and `build` **green with blank `NEXT_PUBLIC_FIREBASE_*`**.
This is enforced by a **guarded lazy Firebase singleton** in `src/lib/firebase/config.ts`:

- No `initializeApp()` at module import time — nothing runs on import.
- `firebaseConfigPresent()` checks all six env vars are non-empty.
- `getFirebaseApp()/getFirebaseAuth()/getDb()/getStorageClient()` return `null` when config is
  absent and **never throw**.
- Client-only: getters no-op on the server (`typeof window`), so RSC never pulls the client SDK
  into a server render path.
- Every service short-circuits to a typed `ServiceResult` error `{ ok: false, code:
  'firebase/not-configured' }` when the client is null.

**Never** add an import-time Firebase side effect, and **never** mock Firebase to fake success.
If you need a credential-dependent behavior verified, author it as an emulator test under
`tests/rules/` (`pnpm test:rules`) rather than faking it.

---

## State boundary: Zustand vs Firestore

Firebase/Firestore is the **source of truth** for permanent data. Zustand is **fast local state**
and caches. localStorage is **never** the database.

| State | Owner | Persisted where |
|---|---|---|
| Active workout (session, in-flight sets, elapsed timer) | Zustand (`sessionStore`, `timerStore`) | Zustand `persist` → localStorage for resume; mirrored to Firestore on meaningful events |
| Optimistic edits, transient form state | Zustand | memory / persist |
| Cached reads (dashboard, history, exercise history) | Zustand caches | hydrated from services; Firestore is source |
| Offline queue + sync flags | Zustand (`syncStore`) | durable |
| Timer resume anchors (absolute ms) | Zustand `persist` | localStorage |
| Profile, settings, plans, completed sessions, PRs, body, recovery, goals, achievements, notes, summaries | Firestore | Firestore (offline-persisted) |

Only `timerStore`, `settingsStore`, and `syncStore` use `persist`. Data stores hold ephemeral
caches rehydrated from services; the durable offline layer is Firestore's own
`persistentLocalCache`, not localStorage.

---

## Where Firestore access lives

**All** Firestore/Storage calls live in `src/services/*` and the `src/lib/firebase/*` layer. UI
components and stores must not import the Firebase SDK at runtime (type-only imports are fine).
Services return a discriminated union `ServiceResult<T> = { ok: true; data: T } | { ok: false;
code; message }`; raw Firebase error codes are mapped to friendly messages here and never shown
to the UI verbatim.

`src/lib/firebase/`: `config` (guarded singleton), `auth`, `firestore`, `storage`, `queries`
(bounded/paginated/ordered query builders), `converters` (typed `withConverter`,
`Timestamp↔Date`, schema-version stamping, **omits absent optional keys** so key-presence rules
work; app uses `ignoreUndefinedProperties: true`).

---

## Firestore data model (nested per user)

```
users/{uid}                      root ownership doc { uid, createdAt, updatedAt } (NOT a profile copy)
  profile/data                   full UserProfile (single source; AuthGuard routing reads this)
  settings/preferences           UserSettings (preferredUnit lives on profile, not here)
  workoutPlans/{planId}
  workoutSessions/{sessionId}
    exercises/{exerciseSessionId}
      sets/{setId}
  exerciseHistory/{exerciseId}
  personalRecords/{recordId}
  bodyMeasurements/{id}
  progressPhotos/{id}
  recoveryLogs/{yyyy-MM-dd}       date-keyed idempotent upsert
  goals/{id}
  achievements/{key}              key-keyed idempotent unlock
  notes/{id}
  analyticsWeekly/{yyyy-'W'II}    summary docs (NOT raw history) — valid storable path
  analyticsMonthly/{yyyy-MM}
```

Note: profile-goal enum is the `Goal` type; the goal **entity** stored under `goals/{id}` is
`GoalRecord` (name-collision resolved — don't re-merge them).

---

## Security rules (`firestore.rules`, `storage.rules`)

- Strict per-user: `request.auth != null && request.auth.uid == uid`. **No** recursive
  `match /{document=**}`, **no** `if true` — unknown paths fall through to default-deny.
- `uid`-bearing docs require `request.resource.data.uid == uid` on create/update; path-only
  singletons (`profile/data`, `settings/preferences`, `recoveryLogs/{date}`, `achievements/{key}`)
  are owner-gated.
- **Completed-session immutability** (three layers): rules forbid mutating/deleting a COMPLETED
  session's training fields (only the `summaryApplied` false→true bookkeeping toggle via
  `onlySummaryAppliedChanged()`); child `exercises`/`sets` freeze via a mirrored `sessionCompleted`
  flag on the hot update path and a create-time `parentOpen()` get() so no new set can be appended
  to a finished session; services and the conflict resolver refuse the same writes (defense in
  depth).
- Field validation (`validSet`/`validSession`/`validBody`/`validRecovery`/`validExerciseSession`)
  is server-authoritative for the high-risk write-heavy docs; lower-volume docs are Zod-validated
  client-side (documented residual risk in design §C.13).
- Storage: read is ownership-only; write adds size (<10MB) + `image/*` contentType. Thumbnails are
  client-generated image blobs; no non-image artifact is written to Storage.

---

## Offline / sync model

- Firestore `persistentLocalCache` (multi-tab) is the durable offline queue for **single-doc,
  idempotent writes** (set logs, recovery, body, notes, hydration, goal/settings/profile) — these
  go **directly** through the SDK and are never put in the custom queue.
- The custom `src/lib/sync/*` layer (`syncQueue`, `syncManager`, `conflictResolver`,
  `networkStatus`) owns **only** the composite **"complete session"** operation and provides
  user-visible status (Synced / Syncing / Offline). It is an orchestration/status layer, not a
  transport layer.
- "Complete session" decomposes into: Step 1 PR detection (reads before writes), Step 2 a
  deterministic-ID `writeBatch` (session + exercise/set flag flips + PR docs + history upserts),
  Step 3 a separate `runTransaction` that increments weekly/monthly summaries and flips the
  per-session `summaryApplied` flag (merge update, idempotent no-op on replay).
- **Flush barrier**: Step 2 waits on `waitForPendingWrites(db)` so the COMPLETED flip is strictly
  last — a late set-log create can never hit a COMPLETED parent and be dropped.
- Conflict rule: server `updatedAt` wins for mutable docs; completed sessions are immutable.

---

## RSC vs client

Server Components by default. Client Components only where interactivity requires it (auth forms,
active workout, timers, charts, stores). Heavy, credential/DOM-dependent islands (Recharts,
calendar, PR celebration) are `next/dynamic` with `ssr: false` so they don't enter the server
render path and don't bloat first load.

---

## Directory map

```
src/
  app/
    layout.tsx, providers.tsx, globals.css, page.tsx
    login/ register/ forgot-password/ reset-password/ onboarding/ not-configured/ offline/
    (protected)/            AuthGuard-wrapped: dashboard, workout, progress, history,
                            exercises, body, recovery, goals, settings
  components/
    auth/ dashboard/ workout/ exercises/ progress/ history/ body/ recovery/
    goals/ achievements/ charts/ pr/ pwa/ sync/ nav/ settings/ ui/
  data/            workoutPlan.ts (MON–SUN seed), exercises.ts (library), achievements.ts
  store/           authStore, sessionStore, timerStore, syncStore, settingsStore,
                   workoutStore, exerciseStore, progressStore, analyticsStore, bodyStore,
                   recoveryStore, goalStore, safeStorage
  services/        authService, profileService, sessionService, workoutService, exerciseService,
                   progressService, analyticsService, bodyService, recoveryService, goalService,
                   backupService, syncService, serviceResult, index
  lib/
    firebase/      config, auth, firestore, storage, queries, converters
    analytics/     volume, strength, consistency, muscleVolume, personalRecords, trends
    sync/          syncManager, syncQueue, conflictResolver, networkStatus, (+ summary txn)
    schemas/       zod schemas (single-sourced across forms, converters, backup import)
    progression.ts oneRepMax.ts volume.ts units.ts backup.ts intervalTimer.ts recovery.ts
    goals.ts achievements.ts thumbnail.ts constants.ts utils.ts
  hooks/           useWorkoutTimer, useRestTimer, useInstallPrompt, useHaptics,
                   useNetworkStatus, useNotifications, useAuth
  types/           enums, user, session, exercise, progress, body, goal, sync, timer, service, index

firestore.rules  storage.rules  firestore.indexes.json  firebase.json
public/manifest.json + icons + generated sw.js
tests/rules/     emulator-based security-rule assertions (pnpm test:rules)
```

---

## Conventions

- **pnpm** only. Scripts: `dev`, `build`, `start`, `lint`, `typecheck`, `test`, `test:rules`.
- Strict TypeScript; avoid `any`. Units are **kg-canonical** internally; lb is a display
  conversion only — never mutate stored historical values on unit change.
- Epley 1RM: `weightKg * (1 + reps/30)`. Progression is **double-progression** with a configurable
  `progressionConfig`; it never writes the user's plan.
- Validation is single-sourced in `src/lib/schemas/` and reused by forms (RHF + `zodResolver`),
  converters, and backup import.
- Before any handoff, keep `lint` / `typecheck` / `build` / `test` green with **blank** env.
