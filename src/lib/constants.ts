/**
 * App-wide constants.
 *
 * APP_SCHEMA_VERSION is the integer data-model version. It is incremented on
 * breaking changes to the Firestore/backup model and is used in three places:
 *   - stamped onto each WorkoutSession at creation (converter-driven forward
 *     migration of older docs on read),
 *   - stamped onto every backup export, and checked on import (C.11 policy),
 *   - the single source of truth for migration-map bounds.
 */
export const APP_SCHEMA_VERSION = 1
