"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ReactNode, ButtonHTMLAttributes } from "react"

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function GlowButton({
  children,
  className,
  glowColor = "rgba(0, 230, 118, 0.4)",
  ...props
}: GlowButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-lg bg-neon px-6 py-3 text-sm font-semibold text-[#050505] transition-all",
        "hover:shadow-[0_0_20px_rgba(0,230,118,0.4),0_0_40px_rgba(0,230,118,0.2)]",
        className
      )}
      style={{
        boxShadow: `0 0 15px ${glowColor}, 0 0 30px ${glowColor.replace("0.4", "0.15")}`,
      }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
