import { BackupManager } from '@/components/settings/BackupManager'
import { LogoutButton } from '@/components/settings/LogoutButton'
import { ProfileEditForm } from '@/components/settings/ProfileEditForm'
import { ProfileHeader } from '@/components/settings/ProfileHeader'
import { SettingsForm } from '@/components/settings/SettingsForm'

/** Editable profile + training/UI preferences (FR-3, FR-10/18/26, FR-33). */
export default function SettingsPage() {
  return (
    <main className="mx-auto flex w-full max-w-2xl min-w-0 flex-col gap-6 p-3.5 sm:gap-8 sm:p-6">
      <ProfileHeader />

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold text-foreground">Edit Profile</h2>
        <ProfileEditForm />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold text-foreground">Preferences &amp; Audio</h2>
        <SettingsForm />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold text-foreground">Backup &amp; Data</h2>
        <BackupManager />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold text-foreground">Account</h2>
        <LogoutButton />
      </section>
    </main>
  )
}
