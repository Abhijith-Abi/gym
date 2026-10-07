import type { Metadata, Viewport } from 'next'
import { Comic_Neue } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

const comicNeue = Comic_Neue({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-comic',
  display: 'swap',
})

export const metadata: Metadata = {
  applicationName: 'ForgeFit',
  title: {
    default: 'ForgeFit',
    template: '%s · ForgeFit',
  },
  description: 'Build Strength. Track Progress. Train Smarter.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'ForgeFit',
  },
  icons: {
    icon: [
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#22c55e',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${comicNeue.variable}`} suppressHydrationWarning>
      {/* suppressHydrationWarning: browser extensions (e.g. Grammarly) inject
          data-* attributes onto <body> before React hydrates, which triggers a
          harmless attribute-mismatch warning. Scoped to this element only; it
          does not hide real hydration mismatches inside the app tree. */}
      <body className="min-h-dvh font-sans antialiased" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
