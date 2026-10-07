# ForgeFit Design Review — Iteration 4

Reviewer: design-review subagent (fresh read, no prior-author context)
Scope: `/Users/abi-mac/Documents/Me/dev/gym/.agents/tasks/forgefit/design.md`
Method: full read of the design, verification of workspace state (empty greenfield, `.gitignore`
excludes `.env.local` — both confirmed), and internal-consistency + feasibility analysis of the
Firebase/Firestore/Next.js claims.

This is the fourth revision; the document carries Parts D and E that resolve three prior review
cycles. The large architectural questions the gate calls out — (a) Zustand↔Firestore boundary,
(b) offline/sync/conflict + completed-session immutability, (c) guarded Firebase singleton, (d)
per-user security rules, (e) RSC/client split, (f) critical-path-first order — are all addressed
concretely. The findings below are the issues that remain or that this fresh read surfaces.

---

## Findings

### 1. HIGH — Completion batch flips child `sessionCompleted=true`, but the child `update` rule only permits that flip when the parent is still open; offline the ordering guarantee is lost

§C.7 Step 2 says the completion `writeBatch` simultaneously (a) sets the session
`status = COMPLETED` and (b) flips `sessionCompleted = true` on every `ExerciseSession`/`SetLog`.
The child `update` rule (§C.9) permits the flip because it reads the *committed* stored value
`resource.data.sessionCompleted == false`, and a `writeBatch` is evaluated against pre-batch
committed state — so online this works.

The gap is the **create** path under load loss of ordering offline. §C.7 states the "complete
session" op is the one thing owned by the custom `syncQueue`, and that individual `SetLog`
creates go **directly through the SDK** cache (not the queue). When offline, the SDK flush order
on reconnect is not coordinated with the custom queue's flush. If the composite "complete
session" batch (which calls `parentOpen()`-free `update`s plus the session→COMPLETED update) is
flushed by the SDK *before* a late direct-SDK `SetLog` create that the user logged just before
hitting finish, that create now hits a COMPLETED parent and is **denied by `parentOpen()`** —
silently dropping a logged set. The design asserts the two queues "own a disjoint class of
writes" but does not specify that the composite op must flush **after** all its own component
single-doc writes have been acknowledged. 

Concrete fix: specify an explicit barrier — the "complete session" op must not be enqueued/flushed
until the SDK reports all pending single-doc writes for that session are committed (e.g. gate
Step 2 on `waitForPendingWrites()` from the Firestore SDK, or re-issue every set create inside the
completion batch with its deterministic ID so the batch itself is the authority and no later
direct-SDK create can arrive). State which, in §C.7.

### 2. HIGH — `validSession` is required on the `summaryApplied` toggle update, but the toggle transaction (§C.7 Step 3) only reads/writes `summaryApplied` + `updatedAt`, so the rule re-validates fields that may legitimately be absent from a partial update

The `workoutSessions/{sid}` `allow update` rule applies `validSession(request.resource.data)` on
**both** branches, including the `summaryApplied` false→true toggle branch. `validSession`
requires `d.status in [...]`, `d.durationSeconds is int`, `d.totalVolumeKg is number`. In a
Firestore `update` (merge), `request.resource.data` is the **post-merge full document**, so these
fields are present and this passes — *provided* Step 3 uses `update()`/`set(..., {merge:true})` on
the existing doc and never a non-merge `set()`. The design never states the write mode for the
Step-3 transaction. If the implementer writes the summary-toggle with a plain `set()` of only
`{ summaryApplied, updatedAt }`, `request.resource.data` becomes just those two keys,
`validSession` fails on the missing required fields, and the toggle is denied — breaking Step 3
idempotency and AC-11's "allowed toggle" assertion.

Concrete fix: state explicitly in §C.7 Step 3 that the summary toggle is a **merge update**
(`updateDoc`/`set(..., {merge:true})`) that preserves all existing fields, and add a sentence to
§C.9 noting `validSession` relies on the post-merge document being complete. Alternatively,
hoist `validSession` into the `notCompleted()` branch only and drop it from the toggle branch
(the toggle already proves `onlySummaryAppliedChanged()`, so no other field can change).

### 3. MEDIUM — `onlySummaryAppliedChanged()` allows `updatedAt` to change, but the completion/toggle writes use `serverTimestamp()`, which the design pairs with a `baseUpdatedAt` precondition it never reconciles for this path

Conflict rules (§C.7) say mutable-doc writes are "guarded by `baseUpdatedAt` precondition" and
"server `updatedAt` wins." The summary toggle is an update to a COMPLETED session. If the
implementer applies the same `baseUpdatedAt` optimistic-concurrency precondition here, a second
device that already advanced `updatedAt` (e.g. by its own toggle attempt) will fail the
precondition, and the retry logic is unspecified for this exact doc. More importantly, the design
never says whether the toggle participates in the `baseUpdatedAt` scheme at all. Since
`summaryApplied` is the idempotency authority, its write must be last-writer-safe (both devices
trying to set true→true is a no-op by the `resource.data.summaryApplied == false` guard), but that
guard means the **second** device's toggle is *denied by rules* (stored is already `true`, so
`resource.data.summaryApplied == false` is false), not a silent no-op.

Concrete fix: state in §C.7 Step 3 that a denied toggle (because another device already applied
the summary) is treated as **success/no-op** by `syncManager` (the summary was applied; the goal
is met), not retried as an error. Confirm the toggle does **not** carry a `baseUpdatedAt`
precondition.

### 4. MEDIUM — `exercises/{eid}` subcollection has no field validation, while `sets` does; `ExerciseSession.sessionCompleted` create requires `== false` but nothing validates the rest of the doc

The `sets` child has `validSet()`; the `exercises` child has **no** validation predicate. The
design's §C.13 split names the "four high-risk write-heavy doc classes" as SetLog, WorkoutSession,
BodyMeasurement, RecoveryLog — `ExerciseSession` is deliberately not among them, which is a
defensible choice. But `ExerciseSession` create only checks `sessionCompleted == false &&
parentOpen()` — it does **not** check `request.resource.data.sessionCompleted` is actually a
boolean present on create, nor that `order`/`exerciseId` exist. A client could create an
`ExerciseSession` omitting `sessionCompleted` entirely, making `resource.data.sessionCompleted ==
false` evaluate on a missing field in a later update (Firestore rules treat a missing field access
as an error that denies, but on **create** the rule reads `request.resource.data.sessionCompleted
== false`, and if the field is absent this comparison fails → create denied). That is actually the
safe direction, but it means a client that forgets to stamp the flag gets a confusing denial, and
the design does not state the flag is mandatory on create.

Concrete fix: add one line to §C.9/§C.3 making `sessionCompleted: false` a **required** field on
`ExerciseSession` and `SetLog` at create time (it already is implicitly via the rule), and note
the service layer always stamps it. Optionally add a minimal `validExerciseSession()` asserting
`exerciseId is string && order is int`.

### 5. MEDIUM — No-auth-flash routing (FR-1, AC-16) depends on reading `profile/data` for the onboarding gate, but the design never specifies how `AuthGuard` distinguishes "auth resolved, profile still loading" from "unauthenticated" without a flash to `/login`

§C.2 says `AuthGuard` reads `profile/data` directly to route onboarding-incomplete users. AC-16
requires protected routes redirect to `/login` when unauthenticated **with no dashboard flash**,
and FR-1 requires no flash before auth resolves. The design describes a loading screen covering
the "undetermined" auth state, but the compound state machine has **three** gates that must each
have a covered intermediate state: (1) Firebase Auth `onAuthStateChanged` not yet fired, (2) user
authenticated but `profile/data` fetch in flight, (3) profile loaded but `onboardingCompleted ===
false`. The design only explicitly covers gate (1). If gate (2) is not covered, an authenticated
user briefly sees the dashboard shell (or a redirect to `/login`) before the profile read
resolves — the exact flash AC-16 forbids.

Concrete fix: specify the `AuthGuard` state machine explicitly — e.g.
`authState: 'initializing' | 'unauthenticated' | 'authed-loading-profile' | 'onboarding' |
'ready' | 'not-configured'` — and state that `'initializing'` and `'authed-loading-profile'` both
render the full-screen loader (no route change), only `'unauthenticated'` redirects to `/login`,
and only `'onboarding'` routes to onboarding. Name where this state lives (`authStore`).

### 6. MEDIUM — Interval-round `SetLog` sets `actualReps` undefined, but the Firestore `validSet` rule requires *exactly one* of `actualReps`/`durationSeconds` via `('actualReps' in d) != ('durationSeconds' in d)` — a client that writes `actualReps: null` (rather than omitting the key) will be denied

§C.8a says duration-based rounds persist with "`actualReps` omitted (undefined)". The `validSet`
rule uses `('actualReps' in d)`, which is **key-presence**, not null-check. Firestore converters
and many client code paths serialize an `undefined`/`null` field as a present key with value
`null` unless explicitly stripped. If the converter writes `actualReps: null`, `('actualReps' in
d)` is `true`, both sides of the XOR are true, and the write is denied. This is a real, common
foot-gun with `withConverter` + optional fields.

Concrete fix: state in §C.4/§C.8a that converters **omit** absent optional fields entirely (use
`deleteField()`/object construction that never emits the key, or `ignoreUndefinedProperties`) and
add an emulator test asserting a round `SetLog` with `durationSeconds` set and no `actualReps`
**key** passes `validSet`, while one carrying `actualReps: null` is correctly rejected (and the
app never produces that shape).

### 7. NIT — `parentOpen()` uses `get()` which counts as a document read and is subject to the rules 10-`get()`-per-request limit; batched creation of many sets could exceed it

The completion/active flow creates set docs individually (one `parentOpen()` get each), so this is
fine per-request. But if any batched create ever groups multiple new `sets`/`exercises` docs in a
single `writeBatch`, each create's `parentOpen()` `get()` counts toward Firestore's limit of 10
`get()` calls per rules evaluation unit. The design should note creates that trigger `parentOpen()`
are issued as single-doc writes (they already are, per §C.7's "written individually on set
completion"), so the limit is never approached — just make the constraint explicit.

Concrete fix: add a sentence to §C.9 noting `parentOpen()`-gated creates are always single-doc
writes, never batched in groups >10, to stay under the rules `get()` ceiling.

### 8. NIT — `storage.rules` restricts `contentType` to `image/.*`, but FR-33 export and no other write targets Storage; progress photos may want HEIC/thumbnails, and there is no path for a future non-image artifact

Minor and arguably correct-as-is: `image/.*` covers `image/heic`, `image/webp`, etc., so photo
uploads are fine. The note is only that the design nowhere states thumbnails (`thumbPath` in
`ProgressPhoto`) are generated client-side vs server-side; if client-side, they are also
`image/*` and fine; if a future export-to-Storage feature is added it will be blocked. Not
blocking.

Concrete fix (optional): add one line confirming `thumbPath` thumbnails are client-generated
images (so they satisfy the `image/.*` write rule) and that no non-image artifact is written to
Storage in scope.

---

## Verified Assumptions

- **Workspace is an empty greenfield** at `/Users/abi-mac/Documents/Me/dev/gym` — confirmed via
  directory listing (`.agents`, `.git`, `.gitignore` only). Matches the design's opening claim.
- **`.gitignore` excludes `.env.local`** — confirmed by reading `.gitignore` (contains
  `.env.local` under `# env`). §C.2's ".gitignore already excludes .env.local" is accurate.
- **Epley formula** `1RM = weight * (1 + reps/30)` (FR-13, §C.8, AC-8) — correct standard Epley.
- **Firestore path-validity fix** (§C.4): `users/{uid}/analytics/weekly/{weekId}` is indeed an
  odd-segment collection reference, not a document; switching to sibling collections
  `analyticsWeekly/{weekId}` / `analyticsMonthly/{monthId}` is a valid document path. Correct.
- **Rules `match` blocks OR grants** and **default-deny for unmatched paths** (§C.9 rationale for
  removing `/{document=**}`) — accurate description of Firestore rules semantics; removing the
  recursive wildcard genuinely closes the override hole from the prior iteration.
- **`writeBatch` ≤ 500 writes** limit and the ~73-write worst-case estimate (§C.7) — the limit is
  correct and the estimate is comfortably under it.
- **`persistentLocalCache` + `persistentMultipleTabManager`** is the current Firestore JS SDK
  offline-persistence API (§C.2) — correct, replaces the deprecated `enableIndexedDbPersistence`.
- **Guarded lazy singleton with `getApps()/getApp()/initializeApp()` + no top-level
  `initializeApp()` + browser-only getters returning `null`** (§C.2) — this is a sound and
  sufficient strategy for NFR-1 (build/lint/typecheck green with no creds, no import-time crash).

## Unverified / Wrong Assumptions

- **`request.resource.data.diff(resource.data).affectedKeys().hasOnly([...])` behavior**
  (`onlySummaryAppliedChanged`, §C.9) — the `diff`/`affectedKeys`/`hasOnly` API is real, but
  whether `updatedAt` (a `serverTimestamp()` sentinel) reliably appears in `affectedKeys()` and
  whether listing it in `hasOnly` is sufficient was **not** verified against a live emulator (no
  emulator in this greenfield workspace). Finding 2/3 flag the related write-mode and
  concurrency ambiguities. The emulator rules tests named in §C.14 should confirm this empirically.
- **Converter serialization of omitted optional fields** (Finding 6) — the design *assumes*
  `actualReps` is "omitted (undefined)"; whether the chosen converter emits an absent key vs a
  `null` value is **not** specified and not verifiable without the converter source (not yet
  written). This is the crux of Finding 6.
- **SDK vs custom-queue flush ordering offline** (Finding 1) — the design asserts disjoint
  ownership makes double-execution impossible, but the **relative flush ordering** on reconnect
  (SDK queue vs custom queue) is not pinned down and could not be verified; it is the basis of
  Finding 1.
- **No source to verify** — because this is a greenfield build with nothing implemented and no
  dependencies installed, every "the existing helper/API does X" style claim is necessarily a
  forward design intent, not a verifiable fact. The pure-lib formulas (Epley, unit factor
  2.2046226218, volume `weight*reps`) are mathematically checkable and correct; everything
  touching Firebase runtime behavior is deferred to the emulator tests the design itself mandates.

---

## Verdict

HIGH findings: 2 (Findings 1, 2). MEDIUM findings: 4 (Findings 3, 4, 5, 6). NIT: 2.

Count of HIGH + MEDIUM = 6 > 0 → **CHANGES_REQUESTED**.

The design is close and architecturally sound on all six gate dimensions; the remaining blockers
are concrete write-mode / rule-interaction / offline-ordering specifics that would otherwise force
the implementer to invent behavior mid-build (and could silently drop logged sets or break the
summary-idempotency toggle). Resolving Findings 1–6 should make this APPROVED next pass.
