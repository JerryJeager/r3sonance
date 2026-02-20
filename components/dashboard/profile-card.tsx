"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Copy, Check, User } from "lucide-react"
import type { UserProfile } from "@/lib/types"

interface ProfileCardProps {
  user: UserProfile
}

export function ProfileCard({ user }: ProfileCardProps) {
  const [copied, setCopied] = useState(false)
  const shareLink = `https://r3sonance.app/compare/${user.public_id}`

  function handleCopy() {
    navigator.clipboard.writeText(shareLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-4 rounded-xl border border-[var(--glass-border)] bg-[var(--glass)] p-6 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neon/10 text-neon">
          <User className="h-6 w-6" />
        </div>
        <div className="flex flex-col gap-0.5">
          <h2 className="text-lg font-semibold text-foreground">{user.name}</h2>
          <p className="text-sm text-muted-foreground">{user.email}</p>
          <p className="font-mono text-xs text-muted-foreground">
            ID: {user.public_id}
          </p>
        </div>
      </div>

      <button
        onClick={handleCopy}
        className="flex items-center gap-2 rounded-lg border border-[var(--glass-border)] bg-[var(--glass)] px-4 py-2.5 text-sm transition-all hover:border-neon/30 hover:bg-neon/5"
      >
        <span className="truncate font-mono text-xs text-muted-foreground">
          {shareLink}
        </span>
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.div
              key="check"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <Check className="h-4 w-4 flex-shrink-0 text-neon" />
            </motion.div>
          ) : (
            <motion.div
              key="copy"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <Copy className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  )
}
