/**
 * Discriminated-union result returned by every service (C.2).
 * Raw Firebase errors are mapped to friendly code/message in the service layer
 * and never surfaced to the UI verbatim (FR-38).
 */
export type ServiceResult<T> =
  | { ok: true; data: T }
  | { ok: false; code: string; message: string }

/** Shared code for the absent-config short-circuit (C.2). */
export const FIREBASE_NOT_CONFIGURED = 'firebase/not-configured'
