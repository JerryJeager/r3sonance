"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface CompatibilityScoreProps {
  percentage: number
  tier: string
  comparedWith: string
}

function getTierColor(percentage: number) {
  if (percentage <= 30) return { color: "#ff4444", glow: "rgba(255, 68, 68, 0.4)" }
  if (percentage <= 60) return { color: "#ffbb33", glow: "rgba(255, 187, 51, 0.4)" }
  if (percentage <= 85) return { color: "#00e676", glow: "rgba(0, 230, 118, 0.4)" }
  return { color: "#00e5ff", glow: "rgba(0, 229, 255, 0.6)" }
}

export function CompatibilityScore({
  percentage,
  tier,
  comparedWith,
}: CompatibilityScoreProps) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0)
  const tierStyle = getTierColor(percentage)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage)
    }, 300)
    return () => clearTimeout(timer)
  }, [percentage])

  const circumference = 2 * Math.PI * 90
  const strokeDashoffset =
    circumference - (animatedPercentage / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative flex h-52 w-52 items-center justify-center">
        <svg
          className="h-full w-full -rotate-90"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="8"
          />
          <motion.circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke={tierStyle.color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            style={{
              filter: `drop-shadow(0 0 8px ${tierStyle.glow})`,
            }}
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <motion.span
            className="text-5xl font-bold"
            style={{ color: tierStyle.color }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {animatedPercentage}%
          </motion.span>
        </div>
      </div>
      <motion.div
        className="flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <span
          className="rounded-full px-4 py-1.5 text-sm font-semibold"
          style={{
            color: tierStyle.color,
            backgroundColor: `${tierStyle.color}15`,
            boxShadow: `0 0 15px ${tierStyle.glow.replace("0.4", "0.15")}`,
          }}
        >
          {tier}
        </span>
        <span className="text-sm text-muted-foreground">
          Compared with <span className="font-medium text-foreground">{comparedWith}</span>
        </span>
      </motion.div>
    </div>
  )
}
