'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'

/**
 * Accessible bottom sheet (FR-35, FR-37, design C.15).
 *
 * - `role="dialog"` + `aria-modal` + `aria-labelledby` on the titled surface.
 * - Focus is moved into the sheet on open and a simple focus trap keeps Tab
 *   within it; Escape closes it; focus returns to the opener on close.
 * - Honors prefers-reduced-motion (framer `useReducedMotion`): the slide/scale
 *   is dropped to a plain fade for reduced-motion users.
 * - Backdrop click + a ≥44px close button both dismiss.
 */
export function BottomSheet({
  open,
  onClose,
  title,
  description,
  children,
}: {
  open: boolean
  onClose: () => void
  title: string
  description?: string
  children?: ReactNode
}) {
  const reduceMotion = useReducedMotion()
  const panelRef = useRef<HTMLDivElement>(null)
  const titleId = useRef(`bs-title-${Math.random().toString(36).slice(2, 8)}`)
  const descId = useRef(`bs-desc-${Math.random().toString(36).slice(2, 8)}`)

  useEffect(() => {
    if (!open) return
    const opener = document.activeElement as HTMLElement | null

    // Move focus into the sheet.
    const toFocus =
      panelRef.current?.querySelector<HTMLElement>(
        '[data-autofocus], button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ) ?? panelRef.current
    toFocus?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (!focusables || focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      opener?.focus?.()
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId.current}
            aria-describedby={description ? descId.current : undefined}
            tabIndex={-1}
            className="relative w-full max-w-md rounded-t-2xl border border-border bg-card p-6 shadow-xl outline-none sm:rounded-2xl"
            initial={
              reduceMotion ? { opacity: 0 } : { y: '100%', opacity: 0.6 }
            }
            animate={reduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { y: '100%', opacity: 0 }}
            transition={{ type: 'tween', duration: reduceMotion ? 0.12 : 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 flex size-11 items-center justify-center rounded-md text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
            <h2 id={titleId.current} className="pr-10 text-lg font-semibold">
              {title}
            </h2>
            {description ? (
              <p
                id={descId.current}
                className="mt-1 text-sm text-muted-foreground"
              >
                {description}
              </p>
            ) : null}
            <div className="mt-4">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
