"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionWrapperProps {
  children: ReactNode
  title?: string
  subtitle?: string
  className?: string
  delay?: number
}

export function SectionWrapper({
  children,
  title,
  subtitle,
  className,
  delay = 0,
}: SectionWrapperProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn("w-full", className)}
    >
      {title && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-foreground">{title}</h2>
          {subtitle && (
            <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </motion.section>
  )
}
