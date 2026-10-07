import type { NextConfig } from 'next'
import withPWAInit from '@ducanh2912/next-pwa'

const nextConfig: NextConfig = {
  reactStrictMode: true,
}

// @ducanh2912/next-pwa wraps the Next config (design C.10). The service worker
// is DISABLED in development to avoid SW/HMR conflicts and is generated only on
// `next build`. It precaches the Next app shell and runtime-caches static assets
// + our seed data. Firestore manages its own offline cache (persistentLocalCache),
// so we deliberately do NOT let the SW cache Firestore/Firebase traffic.
const withPWA = withPWAInit({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  cacheOnFrontEndNav: true,
  // Serve /offline when a navigation request fails with no cache (FR-30/34).
  fallbacks: {
    document: '/offline',
  },
  workboxOptions: {
    // NEVER route Firebase/Firestore/Storage/Auth traffic through the SW cache —
    // the Firestore SDK owns its own durable offline persistence (design C.7/C.10).
    runtimeCaching: [
      {
        urlPattern: ({ url }: { url: URL }) =>
          /firestore\.googleapis\.com|firebasestorage\.googleapis\.com|identitytoolkit\.googleapis\.com|googleapis\.com\/.*firebase/.test(
            url.href,
          ),
        handler: 'NetworkOnly',
      },
      {
        // App shell / documents: network-first so fresh HTML wins, cache is the
        // offline fallback.
        urlPattern: ({ request }: { request: Request }) =>
          request.destination === 'document',
        handler: 'NetworkFirst',
        options: {
          cacheName: 'forgefit-pages',
          expiration: { maxEntries: 32, maxAgeSeconds: 24 * 60 * 60 },
        },
      },
      {
        // Static assets (JS/CSS/fonts/images incl. icons + manifest + seed data).
        urlPattern: ({ request }: { request: Request }) =>
          ['style', 'script', 'worker', 'font', 'image'].includes(
            request.destination,
          ),
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'forgefit-assets',
          expiration: { maxEntries: 128, maxAgeSeconds: 7 * 24 * 60 * 60 },
        },
      },
    ],
  },
})

export default withPWA(nextConfig)
