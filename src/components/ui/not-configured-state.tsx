/**
 * "Firebase not configured" copy, shared by the AuthGuard inline state and the
 * /not-configured deep-link route (design C.2). No navigation happens here.
 */
export function NotConfiguredState() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-2xl font-semibold">Firebase not configured</h1>
      <p className="text-muted-foreground">
        ForgeFit is not connected to a Firebase project yet. Add your credentials
        to <code className="rounded bg-muted px-1 py-0.5">.env.local</code> and
        restart. See{' '}
        <code className="rounded bg-muted px-1 py-0.5">.env.local.example</code>{' '}
        for the required keys.
      </p>
    </main>
  )
}
