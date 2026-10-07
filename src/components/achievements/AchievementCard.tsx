'use client'

import { motion } from 'framer-motion'
import { Lock, Trophy } from 'lucide-react'
import type { AchievementDef } from '@/data/achievements'

/**
 * Achievement tile (FR-32, design C.16 step 5). Shows locked/unlocked state;
 * a newly-unlocked tile plays a subtle framer-motion pop (reduced-motion is
 * respected by framer-motion's own useReducedMotion inside the viewport). The
 * grid of these lives on the goals page.
 */
export function AchievementCard({
  def,
  unlocked,
  justUnlocked = false,
}: {
  def: AchievementDef
  unlocked: boolean
  justUnlocked?: boolean
}) {
  return (
    <motion.div
      initial={justUnlocked ? { scale: 0.8, opacity: 0 } : false}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={
        unlocked
          ? 'flex flex-col items-center gap-1 rounded-xl border border-primary/40 bg-primary/10 p-4 text-center'
          : 'flex flex-col items-center gap-1 rounded-xl border border-border bg-card p-4 text-center opacity-60'
      }
    >
      {unlocked ? (
        <Trophy className="size-6 text-primary" aria-hidden="true" />
      ) : (
        <Lock className="size-6 text-muted-foreground" aria-hidden="true" />
      )}
      <p className="text-sm font-medium">{def.title}</p>
      <p className="text-[10px] text-muted-foreground">{def.description}</p>
    </motion.div>
  )
}
