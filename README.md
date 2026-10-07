# ForgeFit

A production-ready, mobile-first, offline-first **Progressive Web App** for serious strength
training. ForgeFit is a complete personal-training system built around the loop:

> **PLAN → TRAIN → LOG → ANALYZE → PROGRESS → RECOVER → IMPROVE**

Open it in the gym, see today's workout, see exactly what you did last time, get a recommended
target, log each set in a couple of taps, run a rest timer, catch PRs automatically, finish, and
have everything synced to Firebase across all your devices — working fully offline when there's
no signal.

---

## Status & important limitation

The app is **code-complete and builds green**, but it was built **without live Firebase
credentials** (none could be supplied during development). The Firebase layer uses a *guarded lazy
singleton*: with no credentials present the app compiles, builds, and boots into a friendly
**"Firebase not configured"** state instead of crashing. The moment you drop a real Firebase
config into `.env.local`, authentication, Firestore, and Storage activate **with no code change**.

What is **verified by the build/tests** (with blank env):

- `pnpm lint` — clean
- `pnpm typecheck` (`tsc --noEmit`, strict) — clean
- `pnpm build` (`next build`) — 20 routes, PWA service worker generated, `/offline` precached
- `pnpm test` (Vitest) — 181 passing (pure libs, progression, 1RM, units, volume, timers,
  interval state machine, PR detection, streaks, analytics transforms, backup matrix, AuthGuard
  phases, seed-plan integrity, service short-circuit under empty env, …)

What **requires your own Firebase project** to exercise at runtime (intentionally not claimed
done — see [Go-live checklist](#go-live-checklist)):

- Live email/password + Google auth, Firestore reads/writes, Storage uploads
- Security-rule enforcement (per-user isolation + completed-session immutability) — assertions are
  authored in `tests/rules/` and run against the **Firebase Emulator Suite** via `pnpm test:rules`
- The offline → online sync round-trip end to end
- Lighthouse PWA installability audit and a manual accessibility (screen-reader/keyboard) pass

---

## Tech stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS** + **shadcn/ui** + **lucide-react**
- **Zustand** (+ persist) for app/UI/active-workout state; **Firestore offline persistence**
  (`persistentLocalCache`) as the durable offline layer
- **Firebase**: Authentication, Cloud Firestore, Storage, App Check (optional), Analytics
  (optional)
- **framer-motion** + **gsap** + **canvas-confetti** for motion and PR celebrations
- **react-hook-form** + **zod** for forms and validation
- **recharts** for analytics
- **date-fns** for dates
- **@ducanh2912/next-pwa** for the manifest + service worker
- **Vitest** for tests
- Package manager: **pnpm**

---

## Quick start

```bash
pnpm install

# runs WITHOUT Firebase config — shows the "not configured" state
pnpm dev            # http://localhost:3000

# verification gates
pnpm lint
pnpm typecheck
pnpm build
pnpm test
```

To make it a real, data-backed app, do the [Go-live checklist](#go-live-checklist) below.

---

## Go-live checklist

### 1. Create a Firebase project

1. Go to the [Firebase console](https://console.firebase.google.com/) and create a project.
2. Add a **Web app** (`</>`) to the project. Firebase shows a `firebaseConfig` object — those
   values map one-to-one to the env vars below.

### 2. Enable authentication providers

In **Build → Authentication → Sign-in method**, enable:

- **Email/Password**
- **Google** (set a project support email). For Google sign-in to work in production, add your
  deploy domain under **Authentication → Settings → Authorized domains** (`localhost` is allowed
  by default for local dev).

### 3. Create Firestore and Storage

- **Build → Firestore Database → Create database** (production mode — the rules in this repo lock
  it down per user).
- **Build → Storage → Get started** (for progress photos).

### 4. Fill in `.env.local`

Copy the template and paste your Web app config values:

```bash
cp .env.local.example .env.local
```

| Variable | Where to find it (Firebase Web app config) |
|---|---|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | `apiKey` |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | `authDomain` |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | `projectId` |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | `storageBucket` |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | `messagingSenderId` |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | `appId` |
| `NEXT_PUBLIC_APPCHECK_SITE_KEY` *(optional)* | reCAPTCHA v3 site key (App Check). Omit to skip App Check. |
| `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` *(optional)* | `measurementId` (Analytics). Omit to skip Analytics. |

All six required `NEXT_PUBLIC_FIREBASE_*` values are **public client config** (safe to ship to the
browser) — your data is protected by the security rules, not by hiding these. `.env.local` is
git-ignored.

### 5. Deploy security rules and indexes

The rules enforce strict per-user ownership (`request.auth.uid == uid`) and completed-session
immutability. Deploy them with the Firebase CLI (`npm i -g firebase-tools`, then
`firebase login` and `firebase use <your-project-id>`):

```bash
firebase deploy --only firestore:rules,firestore:indexes,storage
```

`firebase.json` already points at `firestore.rules`, `firestore.indexes.json`, and
`storage.rules` in this repo. **Do not** skip the index deploy — the history/calendar/PR queries
need the composite indexes in `firestore.indexes.json`.

### 6. Run it

```bash
pnpm dev
```

Register an account, complete onboarding (goal / unit / experience / plan), and the dashboard
loads today's workout.

---

## Testing the security rules (optional but recommended)

Rule assertions (per-user deny + COMPLETED-session immutability) run against the **Firebase
Emulator Suite**:

```bash
npm i -g firebase-tools
firebase emulators:start --only firestore,storage,auth   # in one terminal
pnpm test:rules                                           # in another
```

Emulator ports are configured in `firebase.json` (Firestore 8080, Storage 9199, Auth 9099).

---

## Account deletion note

Account deletion runs **client-side**: it removes the user's reachable Firestore docs and Storage
objects, then deletes the Auth user (which may require a recent re-login / reauth). For an
authoritative, recursive server-side purge you can add the optional Cloud Function described in
the design (`functions/deleteUserData`); it is **not** required for the app to build or run and is
not included in this repo. No admin credentials or service-account keys ever ship in client code.

---

## Project layout

See [`AGENTS.md`](./AGENTS.md) for the full architecture, directory map, and the
Zustand-vs-Firestore state boundary.

```
src/
  app/            App Router: public routes + (protected) route group, providers, layout
  components/     Feature-grouped UI (auth, workout, dashboard, charts, history, body, …) + ui/
  data/           Seed MON–SUN workout split, exercise library, achievement definitions
  store/          Zustand stores (auth, session, timer, sync, settings, caches, …)
  services/       All Firestore/Storage calls (ServiceResult-returning), one module per domain
  lib/
    firebase/     Guarded lazy singleton: config, auth, firestore, storage, queries, converters
    analytics/    volume / strength / consistency / muscleVolume / personalRecords / trends
    sync/         syncManager / syncQueue / conflictResolver / networkStatus + summary txn
    schemas/      Zod schemas (single-sourced for forms, converters, and backup import)
    progression.ts, oneRepMax.ts, volume.ts, units.ts, backup.ts, intervalTimer.ts, …
  hooks/          useWorkoutTimer, useRestTimer, useInstallPrompt, useHaptics, useNetworkStatus, useAuth, …
  types/          Strict domain models

firestore.rules, storage.rules, firestore.indexes.json, firebase.json
public/manifest.json + icons + generated service worker
```

---

## Key design guarantees

- **Firebase is the source of truth; Zustand is fast local state.** Permanent data lives in
  Firestore (offline-persisted), never only in localStorage.
- **No auth flash.** `AuthGuard` is a 6-phase state machine
  (`not-configured | initializing | authed-loading-profile | unauthenticated | onboarding |
  ready`); loading phases render a full-screen loader with no route change, so a logged-in user
  never flashes the dashboard shell or bounces to `/login`.
- **Completed workouts are immutable history** — enforced in security rules (not just the client),
  including an append-guard so no device can add sets to a finished session. Changing a plan never
  rewrites past sessions.
- **Offline-first.** The workout screen fully functions with no network; writes queue and sync on
  reconnect. The "complete session" op waits for pending writes to be acknowledged before flipping
  a session to COMPLETED, so a late set-log is never dropped.
- **Cost-conscious Firestore.** Paginated/limited reads, summary documents for analytics,
  selective listeners only on the active session, debounced non-critical writes, deterministic doc
  IDs for idempotent retries.
```
