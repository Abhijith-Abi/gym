import { NotConfiguredState } from '@/components/ui/not-configured-state'

/**
 * Direct-link fallback for the "Firebase not configured" state (C.2). The
 * AuthGuard renders this same copy inline; this route exists only as a
 * deep-link target. Static server component.
 */
export default function NotConfiguredPage() {
  return <NotConfiguredState />
}
