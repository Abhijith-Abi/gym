import {
  Timestamp,
  type DocumentData,
  type FirestoreDataConverter,
  type QueryDocumentSnapshot,
  type WithFieldValue,
} from 'firebase/firestore'
import { APP_SCHEMA_VERSION } from '@/lib/constants'
import type {
  Achievement,
  BodyMeasurement,
  ExerciseHistory,
  ExerciseSession,
  GoalRecord,
  MonthlySummary,
  MuscleVolume,
  PersonalRecord,
  ProgressPhoto,
  RecoveryLog,
  RolledSet,
  SetLog,
  UserProfile,
  UserRootDoc,
  UserSettings,
  WeeklySummary,
  WorkoutNote,
  WorkoutPlan,
  WorkoutSession,
} from '@/types'

/* ------------------------------------------------------------------ */
/* Timestamp <-> Date helpers                                          */
/* ------------------------------------------------------------------ */

function toDate(value: unknown): Date {
  if (value instanceof Timestamp) return value.toDate()
  if (value instanceof Date) return value
  if (typeof value === 'number') return new Date(value)
  if (typeof value === 'string') return new Date(value)
  return new Date(0)
}

function toOptionalDate(value: unknown): Date | undefined {
  if (value === undefined || value === null) return undefined
  return toDate(value)
}

function toTimestamp(value: Date): Timestamp {
  return Timestamp.fromDate(value)
}

/** Spread a key only when the value is defined (C.4 — never emit `field: null`). */
function present<T>(key: string, value: T | undefined): Record<string, T> {
  return value !== undefined ? { [key]: value } : {}
}

/* ------------------------------------------------------------------ */
/* UserProfile                                                         */
/* ------------------------------------------------------------------ */

export const userProfileConverter: FirestoreDataConverter<UserProfile> = {
  toFirestore(p: WithFieldValue<UserProfile>): DocumentData {
    const v = p as UserProfile
    return {
      uid: v.uid,
      email: v.email,
      displayName: v.displayName,
      ...present('photoURL', v.photoURL),
      goal: v.goal,
      experience: v.experience,
      preferredUnit: v.preferredUnit,
      onboardingCompleted: v.onboardingCompleted,
      createdAt: toTimestamp(v.createdAt),
      updatedAt: toTimestamp(v.updatedAt),
    }
  },
  fromFirestore(snap: QueryDocumentSnapshot): UserProfile {
    const d = snap.data()
    return {
      uid: d.uid,
      email: d.email,
      displayName: d.displayName,
      photoURL: d.photoURL ?? undefined,
      goal: d.goal,
      experience: d.experience,
      preferredUnit: d.preferredUnit,
      onboardingCompleted: Boolean(d.onboardingCompleted),
      createdAt: toDate(d.createdAt),
      updatedAt: toDate(d.updatedAt),
    }
  },
}

/* ------------------------------------------------------------------ */
/* UserRootDoc — ownership stamp only (users/{uid}); NOT a profile copy */
/* ------------------------------------------------------------------ */

export const userRootConverter: FirestoreDataConverter<UserRootDoc> = {
  toFirestore(r: WithFieldValue<UserRootDoc>): DocumentData {
    const v = r as UserRootDoc
    return {
      uid: v.uid,
      createdAt: toTimestamp(v.createdAt),
      updatedAt: toTimestamp(v.updatedAt),
    }
  },
  fromFirestore(snap: QueryDocumentSnapshot): UserRootDoc {
    const d = snap.data()
    return {
      uid: d.uid,
      createdAt: toDate(d.createdAt),
      updatedAt: toDate(d.updatedAt),
    }
  },
}

/* ------------------------------------------------------------------ */
/* UserSettings — users/{uid}/settings/preferences (NO preferredUnit)  */
/* ------------------------------------------------------------------ */

export const userSettingsConverter: FirestoreDataConverter<UserSettings> = {
  toFirestore(s: WithFieldValue<UserSettings>): DocumentData {
    const v = s as UserSettings
    return {
      rpeMode: v.rpeMode,
      restDefaultsSeconds: v.restDefaultsSeconds,
      autoStartRest: v.autoStartRest,
      smartRestEnabled: v.smartRestEnabled,
      soundEnabled: v.soundEnabled,
      hapticsEnabled: v.hapticsEnabled,
      hydrationTargetMl: v.hydrationTargetMl,
      hydrationEnabled: v.hydrationEnabled,
      progressionConfig: v.progressionConfig,
      ...present('reducedMotionOverride', v.reducedMotionOverride),
      notificationsEnabled: v.notificationsEnabled,
      deviceId: v.deviceId,
    }
  },
  fromFirestore(snap: QueryDocumentSnapshot): UserSettings {
    const d = snap.data()
    return {
      rpeMode: d.rpeMode,
      restDefaultsSeconds: d.restDefaultsSeconds,
      autoStartRest: Boolean(d.autoStartRest),
      smartRestEnabled: Boolean(d.smartRestEnabled),
      soundEnabled: Boolean(d.soundEnabled),
      hapticsEnabled: Boolean(d.hapticsEnabled),
      hydrationTargetMl: d.hydrationTargetMl ?? 0,
      hydrationEnabled: Boolean(d.hydrationEnabled),
      progressionConfig: d.progressionConfig,
      reducedMotionOverride: d.reducedMotionOverride ?? undefined,
      notificationsEnabled: Boolean(d.notificationsEnabled),
      deviceId: d.deviceId,
    }
  },
}

/* ------------------------------------------------------------------ */
/* WorkoutSession (schema-version stamped)                             */
/* ------------------------------------------------------------------ */

export const workoutSessionConverter: FirestoreDataConverter<WorkoutSession> = {
  toFirestore(s: WithFieldValue<WorkoutSession>): DocumentData {
    const v = s as WorkoutSession
    return {
      uid: v.uid,
      dayId: v.dayId,
      workoutName: v.workoutName,
      status: v.status,
      ...present('startedAt', v.startedAt ? toTimestamp(v.startedAt) : undefined),
      ...present('completedAt', v.completedAt ? toTimestamp(v.completedAt) : undefined),
      durationSeconds: v.durationSeconds,
      totalSets: v.totalSets,
      completedSets: v.completedSets,
      totalVolumeKg: v.totalVolumeKg,
      ...present('notes', v.notes),
      ...present('mood', v.mood),
      ...present('energy', v.energy),
      ...present('soreness', v.soreness),
      createdAt: toTimestamp(v.createdAt),
      updatedAt: toTimestamp(v.updatedAt),
      planId: v.planId,
      deviceId: v.deviceId,
      // stamp the current schema version at write time (C.3)
      schemaVersion: v.schemaVersion ?? APP_SCHEMA_VERSION,
      summaryApplied: v.summaryApplied,
    }
  },
  fromFirestore(snap: QueryDocumentSnapshot): WorkoutSession {
    const d = snap.data()
    return {
      id: snap.id,
      uid: d.uid,
      dayId: d.dayId,
      workoutName: d.workoutName,
      status: d.status,
      startedAt: toOptionalDate(d.startedAt),
      completedAt: toOptionalDate(d.completedAt),
      durationSeconds: d.durationSeconds ?? 0,
      totalSets: d.totalSets ?? 0,
      completedSets: d.completedSets ?? 0,
      totalVolumeKg: d.totalVolumeKg ?? 0,
      notes: d.notes ?? undefined,
      mood: d.mood ?? undefined,
      energy: d.energy ?? undefined,
      soreness: d.soreness ?? undefined,
      createdAt: toDate(d.createdAt),
      updatedAt: toDate(d.updatedAt),
      planId: d.planId,
      deviceId: d.deviceId,
      // forward-migration anchor: default older docs to v1
      schemaVersion: d.schemaVersion ?? 1,
      summaryApplied: Boolean(d.summaryApplied),
    }
  },
}

/* ------------------------------------------------------------------ */
/* ExerciseSession                                                     */
/* ------------------------------------------------------------------ */

export const exerciseSessionConverter: FirestoreDataConverter<ExerciseSession> = {
  toFirestore(e: WithFieldValue<ExerciseSession>): DocumentData {
    const v = e as ExerciseSession
    return {
      sessionId: v.sessionId,
      exerciseId: v.exerciseId,
      order: v.order,
      ...present('supersetGroup', v.supersetGroup),
      ...present('circuitGroup', v.circuitGroup),
      targetPrescription: v.targetPrescription,
      ...present('notes', v.notes),
      sessionCompleted: v.sessionCompleted,
    }
  },
  fromFirestore(snap: QueryDocumentSnapshot): ExerciseSession {
    const d = snap.data()
    return {
      id: snap.id,
      sessionId: d.sessionId,
      exerciseId: d.exerciseId,
      order: d.order ?? 0,
      supersetGroup: d.supersetGroup ?? undefined,
      circuitGroup: d.circuitGroup ?? undefined,
      targetPrescription: d.targetPrescription,
      notes: d.notes ?? undefined,
      sessionCompleted: Boolean(d.sessionCompleted),
    }
  },
}

/* ------------------------------------------------------------------ */
/* SetLog — the XOR-sensitive converter (C.4)                          */
/* A duration-based set serializes with durationSeconds and NO         */
/* actualReps key at all (never actualReps: null).                     */
/* ------------------------------------------------------------------ */

export const setLogConverter: FirestoreDataConverter<SetLog> = {
  toFirestore(s: WithFieldValue<SetLog>): DocumentData {
    const v = s as SetLog
    return {
      exerciseSessionId: v.exerciseSessionId,
      setIndex: v.setIndex,
      ...present('targetReps', v.targetReps),
      ...present('actualReps', v.actualReps),
      ...present('durationSeconds', v.durationSeconds),
      weightKg: v.weightKg,
      ...present('rpe', v.rpe),
      ...present('rir', v.rir),
      ...present('tempo', v.tempo),
      ...present('restSeconds', v.restSeconds),
      isWarmup: v.isWarmup,
      isCompleted: v.isCompleted,
      completedAt: toTimestamp(v.completedAt),
      ...present('isPr', v.isPr),
      sessionCompleted: v.sessionCompleted,
    }
  },
  fromFirestore(snap: QueryDocumentSnapshot): SetLog {
    const d = snap.data()
    return {
      id: snap.id,
      exerciseSessionId: d.exerciseSessionId,
      setIndex: d.setIndex ?? 0,
      targetReps: d.targetReps ?? undefined,
      actualReps: d.actualReps ?? undefined,
      durationSeconds: d.durationSeconds ?? undefined,
      weightKg: d.weightKg ?? 0,
      rpe: d.rpe ?? undefined,
      rir: d.rir ?? undefined,
      tempo: d.tempo ?? undefined,
      restSeconds: d.restSeconds ?? undefined,
      isWarmup: Boolean(d.isWarmup),
      isCompleted: Boolean(d.isCompleted),
      completedAt: toDate(d.completedAt),
      isPr: d.isPr ?? undefined,
      sessionCompleted: Boolean(d.sessionCompleted),
    }
  },
}

/* ------------------------------------------------------------------ */
/* BodyMeasurement                                                     */
/* ------------------------------------------------------------------ */

export const bodyMeasurementConverter: FirestoreDataConverter<BodyMeasurement> = {
  toFirestore(b: WithFieldValue<BodyMeasurement>): DocumentData {
    const v = b as BodyMeasurement
    return {
      uid: v.uid,
      date: toTimestamp(v.date),
      ...present('weightKg', v.weightKg),
      ...present('bodyFatPct', v.bodyFatPct),
      measurements: v.measurements,
      ...present('note', v.note),
    }
  },
  fromFirestore(snap: QueryDocumentSnapshot): BodyMeasurement {
    const d = snap.data()
    return {
      id: snap.id,
      uid: d.uid,
      date: toDate(d.date),
      weightKg: d.weightKg ?? undefined,
      bodyFatPct: d.bodyFatPct ?? undefined,
      measurements: d.measurements ?? {},
      note: d.note ?? undefined,
    }
  },
}

/* ------------------------------------------------------------------ */
/* WorkoutPlan                                                         */
/* ------------------------------------------------------------------ */

export const workoutPlanConverter: FirestoreDataConverter<WorkoutPlan> = {
  toFirestore(p: WithFieldValue<WorkoutPlan>): DocumentData {
    const v = p as WorkoutPlan
    return {
      uid: v.uid,
      name: v.name,
      isTemplate: v.isTemplate,
      days: v.days,
      createdAt: toTimestamp(v.createdAt),
      updatedAt: toTimestamp(v.updatedAt),
    }
  },
  fromFirestore(snap: QueryDocumentSnapshot): WorkoutPlan {
    const d = snap.data()
    return {
      id: snap.id,
      uid: d.uid,
      name: d.name,
      isTemplate: Boolean(d.isTemplate),
      days: d.days,
      createdAt: toDate(d.createdAt),
      updatedAt: toDate(d.updatedAt),
    }
  },
}

/* ------------------------------------------------------------------ */
/* PersonalRecord                                                      */
/* ------------------------------------------------------------------ */

export const personalRecordConverter: FirestoreDataConverter<PersonalRecord> = {
  toFirestore(p: WithFieldValue<PersonalRecord>): DocumentData {
    const v = p as PersonalRecord
    return {
      uid: v.uid,
      exerciseId: v.exerciseId,
      type: v.type,
      ...present('valueKg', v.valueKg),
      ...present('value', v.value),
      ...present('reps', v.reps),
      sessionId: v.sessionId,
      achievedAt: toTimestamp(v.achievedAt),
    }
  },
  fromFirestore(snap: QueryDocumentSnapshot): PersonalRecord {
    const d = snap.data()
    return {
      id: snap.id,
      uid: d.uid,
      exerciseId: d.exerciseId,
      type: d.type,
      valueKg: d.valueKg ?? undefined,
      value: d.value ?? undefined,
      reps: d.reps ?? undefined,
      sessionId: d.sessionId,
      achievedAt: toDate(d.achievedAt),
    }
  },
}

/* ------------------------------------------------------------------ */
/* ExerciseHistory (bounded ring; RolledSet performedAt <-> Timestamp) */
/* ------------------------------------------------------------------ */

function rolledSetToFs(s: RolledSet): DocumentData {
  return {
    sessionId: s.sessionId,
    performedAt: toTimestamp(s.performedAt),
    weightKg: s.weightKg,
    ...present('reps', s.reps),
    ...present('durationSeconds', s.durationSeconds),
    ...present('e1rmKg', s.e1rmKg),
    ...present('rpe', s.rpe),
    ...present('rir', s.rir),
  }
}

function rolledSetFromFs(d: DocumentData): RolledSet {
  return {
    sessionId: d.sessionId,
    performedAt: toDate(d.performedAt),
    weightKg: d.weightKg ?? 0,
    reps: d.reps ?? undefined,
    durationSeconds: d.durationSeconds ?? undefined,
    e1rmKg: d.e1rmKg ?? undefined,
    rpe: d.rpe ?? undefined,
    rir: d.rir ?? undefined,
  }
}

export const exerciseHistoryConverter: FirestoreDataConverter<ExerciseHistory> = {
  toFirestore(h: WithFieldValue<ExerciseHistory>): DocumentData {
    const v = h as ExerciseHistory
    return {
      exerciseId: v.exerciseId,
      uid: v.uid,
      lastPerformedAt: toTimestamp(v.lastPerformedAt),
      bestE1rmKg: v.bestE1rmKg,
      bestWeightKg: v.bestWeightKg,
      ...present('bestRepsAtWeight', v.bestRepsAtWeight),
      recentSessions: v.recentSessions.map(rolledSetToFs),
    }
  },
  fromFirestore(snap: QueryDocumentSnapshot): ExerciseHistory {
    const d = snap.data()
    const recent = Array.isArray(d.recentSessions) ? d.recentSessions : []
    return {
      exerciseId: d.exerciseId ?? snap.id,
      uid: d.uid,
      lastPerformedAt: toDate(d.lastPerformedAt),
      bestE1rmKg: d.bestE1rmKg ?? 0,
      bestWeightKg: d.bestWeightKg ?? 0,
      bestRepsAtWeight: d.bestRepsAtWeight ?? undefined,
      recentSessions: recent.map(rolledSetFromFs),
    }
  },
}

/* ------------------------------------------------------------------ */
/* Weekly / Monthly summaries (analytics idempotency targets, C.4/C.7) */
/* ------------------------------------------------------------------ */

function toMuscleVolume(value: unknown): MuscleVolume {
  return (value ?? {}) as MuscleVolume
}

export const weeklySummaryConverter: FirestoreDataConverter<WeeklySummary> = {
  toFirestore(s: WithFieldValue<WeeklySummary>): DocumentData {
    const v = s as WeeklySummary
    return {
      uid: v.uid,
      weekId: v.weekId,
      workouts: v.workouts,
      totalVolumeKg: v.totalVolumeKg,
      volumeByMuscle: v.volumeByMuscle,
      prCount: v.prCount,
      streakDays: v.streakDays,
      updatedAt: toTimestamp(v.updatedAt),
    }
  },
  fromFirestore(snap: QueryDocumentSnapshot): WeeklySummary {
    const d = snap.data()
    return {
      uid: d.uid,
      weekId: d.weekId ?? snap.id,
      workouts: d.workouts ?? 0,
      totalVolumeKg: d.totalVolumeKg ?? 0,
      volumeByMuscle: toMuscleVolume(d.volumeByMuscle),
      prCount: d.prCount ?? 0,
      streakDays: d.streakDays ?? 0,
      updatedAt: toDate(d.updatedAt),
    }
  },
}

export const monthlySummaryConverter: FirestoreDataConverter<MonthlySummary> = {
  toFirestore(s: WithFieldValue<MonthlySummary>): DocumentData {
    const v = s as MonthlySummary
    return {
      uid: v.uid,
      monthId: v.monthId,
      workouts: v.workouts,
      totalVolumeKg: v.totalVolumeKg,
      volumeByMuscle: v.volumeByMuscle,
      prCount: v.prCount,
      ...present('bodyWeightStartKg', v.bodyWeightStartKg),
      ...present('bodyWeightEndKg', v.bodyWeightEndKg),
      updatedAt: toTimestamp(v.updatedAt),
    }
  },
  fromFirestore(snap: QueryDocumentSnapshot): MonthlySummary {
    const d = snap.data()
    return {
      uid: d.uid,
      monthId: d.monthId ?? snap.id,
      workouts: d.workouts ?? 0,
      totalVolumeKg: d.totalVolumeKg ?? 0,
      volumeByMuscle: toMuscleVolume(d.volumeByMuscle),
      prCount: d.prCount ?? 0,
      bodyWeightStartKg: d.bodyWeightStartKg ?? undefined,
      bodyWeightEndKg: d.bodyWeightEndKg ?? undefined,
      updatedAt: toDate(d.updatedAt),
    }
  },
}

/* ------------------------------------------------------------------ */
/* RecoveryLog (date-keyed, no uid-as-id)                              */
/* ------------------------------------------------------------------ */

export const recoveryLogConverter: FirestoreDataConverter<RecoveryLog> = {
  toFirestore(r: WithFieldValue<RecoveryLog>): DocumentData {
    const v = r as RecoveryLog
    return {
      uid: v.uid,
      date: v.date,
      ...present('sleepHours', v.sleepHours),
      energy: v.energy,
      stress: v.stress,
      soreness: v.soreness,
      motivation: v.motivation,
      recoveryScore: v.recoveryScore,
      ...present('note', v.note),
      hydrationMl: v.hydrationMl,
      hydrationTargetMl: v.hydrationTargetMl,
    }
  },
  fromFirestore(snap: QueryDocumentSnapshot): RecoveryLog {
    const d = snap.data()
    return {
      uid: d.uid,
      date: d.date,
      sleepHours: d.sleepHours ?? undefined,
      energy: d.energy ?? 1,
      stress: d.stress ?? 1,
      soreness: d.soreness ?? 1,
      motivation: d.motivation ?? 1,
      recoveryScore: d.recoveryScore ?? 0,
      note: d.note ?? undefined,
      hydrationMl: d.hydrationMl ?? 0,
      hydrationTargetMl: d.hydrationTargetMl ?? 0,
    }
  },
}

/* ------------------------------------------------------------------ */
/* ProgressPhoto                                                       */
/* ------------------------------------------------------------------ */

export const progressPhotoConverter: FirestoreDataConverter<ProgressPhoto> = {
  toFirestore(p: WithFieldValue<ProgressPhoto>): DocumentData {
    const v = p as ProgressPhoto
    return {
      uid: v.uid,
      date: toTimestamp(v.date),
      storagePath: v.storagePath,
      ...present('thumbPath', v.thumbPath),
      ...present('pose', v.pose),
      ...present('note', v.note),
      createdAt: toTimestamp(v.createdAt),
    }
  },
  fromFirestore(snap: QueryDocumentSnapshot): ProgressPhoto {
    const d = snap.data()
    return {
      id: snap.id,
      uid: d.uid,
      date: toDate(d.date),
      storagePath: d.storagePath,
      thumbPath: d.thumbPath ?? undefined,
      pose: d.pose ?? undefined,
      note: d.note ?? undefined,
      createdAt: toDate(d.createdAt),
    }
  },
}

/* ------------------------------------------------------------------ */
/* GoalRecord                                                          */
/* ------------------------------------------------------------------ */

export const goalConverter: FirestoreDataConverter<GoalRecord> = {
  toFirestore(g: WithFieldValue<GoalRecord>): DocumentData {
    const v = g as GoalRecord
    return {
      uid: v.uid,
      kind: v.kind,
      title: v.title,
      ...present('exerciseId', v.exerciseId),
      targetValue: v.targetValue,
      currentValue: v.currentValue,
      unit: v.unit,
      startValue: v.startValue,
      ...present('dueDate', v.dueDate ? toTimestamp(v.dueDate) : undefined),
      status: v.status,
      createdAt: toTimestamp(v.createdAt),
    }
  },
  fromFirestore(snap: QueryDocumentSnapshot): GoalRecord {
    const d = snap.data()
    return {
      id: snap.id,
      uid: d.uid,
      kind: d.kind,
      title: d.title,
      exerciseId: d.exerciseId ?? undefined,
      targetValue: d.targetValue ?? 0,
      currentValue: d.currentValue ?? 0,
      unit: d.unit ?? '',
      startValue: d.startValue ?? 0,
      dueDate: toOptionalDate(d.dueDate),
      status: d.status ?? 'active',
      createdAt: toDate(d.createdAt),
    }
  },
}

/* ------------------------------------------------------------------ */
/* Achievement (id = achievement key; idempotent unlock)               */
/* ------------------------------------------------------------------ */

export const achievementConverter: FirestoreDataConverter<Achievement> = {
  toFirestore(a: WithFieldValue<Achievement>): DocumentData {
    const v = a as Achievement
    return {
      uid: v.uid,
      key: v.key,
      unlockedAt: toTimestamp(v.unlockedAt),
      ...present('meta', v.meta),
    }
  },
  fromFirestore(snap: QueryDocumentSnapshot): Achievement {
    const d = snap.data()
    return {
      id: snap.id,
      uid: d.uid,
      key: d.key,
      unlockedAt: toDate(d.unlockedAt),
      meta: d.meta ?? undefined,
    }
  },
}

/* ------------------------------------------------------------------ */
/* WorkoutNote                                                         */
/* ------------------------------------------------------------------ */

export const workoutNoteConverter: FirestoreDataConverter<WorkoutNote> = {
  toFirestore(n: WithFieldValue<WorkoutNote>): DocumentData {
    const v = n as WorkoutNote
    return {
      uid: v.uid,
      scope: v.scope,
      ...present('refId', v.refId),
      body: v.body,
      createdAt: toTimestamp(v.createdAt),
    }
  },
  fromFirestore(snap: QueryDocumentSnapshot): WorkoutNote {
    const d = snap.data()
    return {
      id: snap.id,
      uid: d.uid,
      scope: d.scope,
      refId: d.refId ?? undefined,
      body: d.body ?? '',
      createdAt: toDate(d.createdAt),
    }
  },
}
