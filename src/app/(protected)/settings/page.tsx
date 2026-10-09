import { BackupManager } from '@/components/settings/BackupManager'
import { LogoutButton } from '@/components/settings/LogoutButton'
import { ProfileEditForm } from '@/components/settings/ProfileEditForm'
import { ProfileHeader } from '@/components/settings/ProfileHeader'
import { SettingsForm } from '@/components/settings/SettingsForm'

/** Editable profile + training/UI preferences (FR-3, FR-10/18/26, FR-33). */
export default function SettingsPage() {
  return (
    <main className="w-full min-w-0 flex flex-col gap-6">
      <ProfileHeader />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Left Column: Profile & Account */}
        <div className="flex flex-col gap-6">
          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-bold text-foreground">Edit Profile</h2>
            <ProfileEditForm />
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-bold text-foreground">Account</h2>
            <LogoutButton />
          </section>
        </div>

        {/* Right Column: Preferences & Data Backup */}
        <div className="flex flex-col gap-6">
          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-bold text-foreground">Preferences &amp; Audio</h2>
            <SettingsForm />
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-bold text-foreground">Backup &amp; Data</h2>
            <BackupManager />
          </section>
        </div>
      </div>
    </main>
  )
}
