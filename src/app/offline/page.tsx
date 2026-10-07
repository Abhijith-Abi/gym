/** Offline fallback route (C.15). Static server component. */
export default function OfflinePage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-2xl font-semibold">You&apos;re offline</h1>
      <p className="text-muted-foreground">
        ForgeFit works offline. Your workout data is saved on this device and will
        sync automatically when you reconnect.
      </p>
    </main>
  )
}
