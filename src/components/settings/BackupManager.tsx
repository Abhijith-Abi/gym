'use client'

import { useRef, useState } from 'react'
import { Download, Upload, Trash2, Database } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import * as backupService from '@/services/backupService'
import { backupFileName } from '@/lib/backup'
import { Button } from '@/components/ui/button'

const { serializeBackup } = backupService

/**
 * Backup / import / export + delete account (FR-33, design C.11 / step 6).
 */
export function BackupManager() {
  const { uid } = useAuth()
  const fileRef = useRef<HTMLInputElement>(null)
  const [status, setStatus] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  async function onExport() {
    if (!uid) return
    setBusy(true)
    setStatus(null)
    const res = await backupService.exportBackup(uid)
    setBusy(false)
    if (!res.ok) {
      setStatus(res.message)
      return
    }
    triggerDownload(serializeBackup(res.data), backupFileName())
    setStatus('✓ Backup downloaded.')
  }

  async function onImportFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file || !uid) return
    setBusy(true)
    setStatus('Taking a safety backup, then importing…')
    const text = await file.text()
    const res = await backupService.importBackupWithSafety(uid, text)
    setBusy(false)
    if (!res.ok) {
      setStatus(res.message)
      return
    }
    triggerDownload(
      serializeBackup(res.data.safety),
      `forgefit-safety-${backupFileName().replace('forgefit-backup-', '')}`,
    )
    setStatus(
      `✓ Imported ${res.data.result.importedDocs} documents across ${res.data.result.importedCollections} collections.`,
    )
  }

  async function onDeleteAccount() {
    if (!uid) return
    const confirmed = window.confirm(
      'This permanently deletes your ForgeFit data (workouts, progress, photos). This cannot be undone. Continue?',
    )
    if (!confirmed) return
    setBusy(true)
    setStatus('Deleting your data…')
    const res = await backupService.deleteUserData(uid)
    setBusy(false)
    setStatus(
      res.ok
        ? '✓ Your data was deleted. Sign out to finish removing your account.'
        : res.message,
    )
  }

  return (
    <section className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <Database className="size-4 text-primary" />
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Data Export &amp; Backup
        </span>
      </div>

      <input
        ref={fileRef}
        type="file"
        accept="application/json,.json"
        className="sr-only"
        onChange={(e) => void onImportFile(e)}
      />

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        <Button
          variant="outline"
          disabled={busy}
          onClick={() => void onExport()}
          className="min-h-[44px] rounded-xl border-border bg-card-elevated hover:bg-secondary"
        >
          <Download className="size-4" aria-hidden="true" />
          Export Data Backup
        </Button>

        <Button
          variant="outline"
          disabled={busy}
          onClick={() => fileRef.current?.click()}
          className="min-h-[44px] rounded-xl border-border bg-card-elevated hover:bg-secondary"
        >
          <Upload className="size-4" aria-hidden="true" />
          Import Data Backup
        </Button>
      </div>

      <div className="border-t border-border/60 pt-3">
        <Button
          variant="destructive"
          disabled={busy}
          onClick={() => void onDeleteAccount()}
          className="min-h-[44px] w-full rounded-xl"
        >
          <Trash2 className="size-4" aria-hidden="true" />
          Delete Account Data
        </Button>
      </div>

      {status ? (
        <p role="status" className="text-xs font-semibold text-primary">
          {status}
        </p>
      ) : null}
    </section>
  )
}

function triggerDownload(content: string, fileName: string) {
  if (typeof document === 'undefined') return
  const blob = new Blob([content], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = fileName
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}
