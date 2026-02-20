"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Info } from "lucide-react"

interface BreakdownSectionProps {
  breakdown: {
    artist_overlap_score: number
    track_overlap_score: number
    rank_alignment_score: number
    active_hour_score: number
    diversity_score: number
  }
}

const breakdownConfig: {
  key: keyof BreakdownSectionProps["breakdown"]
  label: string
  tooltip: string
  weight: number
}[] = [
  {
    key: "artist_overlap_score",
    label: "Artist Overlap",
    tooltip:
      "How many of your top artists are shared between both profiles.",
    weight: 35,
  },
  {
    key: "track_overlap_score",
    label: "Track Overlap",
    tooltip:
      "How many of your top tracks appear in both listening histories.",
    weight: 25,
  },
  {
    key: "rank_alignment_score",
    label: "Rank Alignment",
    tooltip:
      "How closely your shared artists are ranked in both profiles.",
    weight: 15,
  },
  {
    key: "active_hour_score",
    label: "Listening Rhythm",
    tooltip:
      "How well your peak listening hours align throughout the day.",
    weight: 12,
  },
  {
    key: "diversity_score",
    label: "Diversity",
    tooltip:
      "How similar your genre diversity and exploration patterns are.",
    weight: 10,
  },
]

function getBarColor(percentage: number) {
  if (percentage <= 30) return "#ff4444"
  if (percentage <= 60) return "#ffbb33"
  return "#00e676"
}

export function BreakdownSection({ breakdown }: BreakdownSectionProps) {
  return (
    <SectionWrapper title="Score Breakdown" delay={0.3}>
      <div className="flex flex-col gap-5 rounded-xl border border-[var(--glass-border)] bg-[var(--glass)] p-6 backdrop-blur-md">
        {breakdownConfig.map((config, i) => {
          const value = breakdown[config.key] ?? 0

          // 🔥 THIS IS WHERE Math.min GOES
          const percentage = Math.min(
            (value / config.weight) * 100,
            100
          )

          const barColor = getBarColor(percentage)

          return (
            <motion.div
              key={config.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex flex-col gap-2"
            >
              {/* Label + Value */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">
                    {config.label}
                  </span>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="text-muted-foreground transition-colors hover:text-foreground">
                        <Info className="h-3.5 w-3.5" />
                        <span className="sr-only">
                          More info about {config.label}
                        </span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{config.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                <span
                  className="font-mono text-sm font-semibold"
                  style={{ color: barColor }}
                >
                  {value.toFixed(1)} / {config.weight}
                  <span className="ml-2 text-xs text-muted-foreground">
                    ({percentage.toFixed(0)}%)
                  </span>
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 w-full overflow-hidden rounded-full bg-[rgba(255,255,255,0.06)]">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    backgroundColor: barColor,
                    boxShadow: `0 0 8px ${barColor}66`,
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{
                    duration: 1,
                    delay: 0.5 + i * 0.1,
                    ease: "easeOut",
                  }}
                />
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}