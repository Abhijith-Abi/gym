import { defineConfig } from 'vitest/config'

/**
 * Rules/integration tests run against the Firebase Emulator Suite via
 * @firebase/rules-unit-testing (creds-independent). Run `pnpm test:rules` with
 * the emulator started (`firebase emulators:start`). When the emulator is
 * unavailable (e.g. the build sandbox) these are documented as "needs
 * verification during implementation" per the task context.
 */
export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/rules/**/*.test.ts'],
    testTimeout: 20000,
  },
})
