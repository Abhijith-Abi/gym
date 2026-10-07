'use client'

import { motion } from 'framer-motion'
import { Lock, Trophy, Sparkles } from 'lucide-react'
import type { AchievementDef } from '@/data/achievements'
import { cn } from '@/lib/utils'

/**
 * Achievement tile (FR-32, design C.16 step 5). Shows locked/unlocked state
 * with neon glow, trophy icons, and clear progress states.
 */
export function AchievementCard({
  def,
  unlocked,
  justUnlocked = false,
  currentMetricValue,
}: {
  def: AchievementDef
  unlocked: boolean
  justUnlocked?: boolean
  currentMetricValue?: number
}) {
  return (
    <motion.div
      initial={justUnlocked ? { scale: 0.8, opacity: 0 } : false}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'relative flex flex-col items-center gap-2 rounded-2xl border p-4 text-center transition-all',
        unlocked
          ? 'border-primary/50 bg-primary/10 shadow-[0_0_20px_rgba(34,197,94,0.2)]'
          : 'border-border/80 bg-card opacity-70 hover:opacity-90',
      )}
    >
      {unlocked && (
        <span className="absolute right-2 top-2 flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Sparkles className="size-3" />
        </span>
      )}

      <div
        className={cn(
          'flex size-12 items-center justify-center rounded-2xl shadow-sm',
          unlocked
            ? 'bg-primary/20 text-primary shadow-[0_0_15px_rgba(34,197,94,0.3)]'
            : 'bg-secondary text-muted-foreground',
        )}
      >
        {unlocked ? (
          <Trophy className="size-6 fill-primary text-primary" aria-hidden="true" />
        ) : (
          <Lock className="size-5 text-muted-foreground" aria-hidden="true" />
        )}
      </div>

      <div className="flex flex-col gap-0.5">
        <p className="text-xs font-bold text-foreground sm:text-sm">
          {def.title}
        </p>
        <p className="text-[10px] leading-tight text-muted-foreground">
          {def.description}
        </p>
      </div>

      {unlocked ? (
        <span className="mt-auto rounded-full bg-primary/20 px-2 py-0.5 text-[9px] font-extrabold uppercase text-primary">
          Unlocked
        </span>
      ) : currentMetricValue !== undefined ? (
        <span className="mt-auto text-[10px] font-mono font-semibold text-muted-foreground">
          {currentMetricValue} / {def.threshold}
        </span>
      ) : (
        <span className="mt-auto text-[9px] font-bold uppercase text-muted-foreground">
          Locked
        </span>
      )}
    </motion.div>
  )
}
