'use client'

import { Link2 } from 'lucide-react'

/** Labels a group of exercises performed back-to-back as a superset (FR-5). */
export function SupersetGroup({
  group,
  children,
}: {
  group: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-xl border border-dashed border-primary/40 p-2">
      <p className="mb-2 flex items-center gap-1 px-2 text-xs font-semibold uppercase text-primary">
        <Link2 className="size-3.5" aria-hidden="true" />
        Superset {group}
      </p>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  )
}
