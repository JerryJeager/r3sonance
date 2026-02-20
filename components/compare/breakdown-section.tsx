"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Info } from "lucide-react"

interface BreakdownItem {
  label: string
  value: number
  tooltip: string
}

interface BreakdownSectionProps {
  breakdown: {
    artist_overlap_score: number
    track_overlap_score: number
    rank_alignment_score: number
    active_hour_score: number
    diversity_score: number
  }
}

const breakdownConfig: { key: string; label: string; tooltip: string }[] = [
  {
    key: "artist_overlap_score",
    label: "Artist Overlap",
    tooltip: "How many of your top artists are shared between both profiles.",
  },
  {
    key: "track_overlap_score",
    label: "Track Overlap",
    tooltip: "How many of your top tracks appear in both listening histories.",
  },
  {
    key: "rank_alignment_score",
    label: "Rank Alignment",
    tooltip: "How closely your shared artists are ranked in both profiles.",
  },
  {
    key: "active_hour_score",
    label: "Listening Rhythm",
    tooltip: "How well your peak listening hours align throughout the day.",
  },
  {
    key: "diversity_score",
    label: "Diversity",
    tooltip: "How similar your genre diversity and exploration patterns are.",
  },
]

function getBarColor(value: number) {
  if (value <= 30) return "#ff4444"
  if (value <= 60) return "#ffbb33"
  return "#00e676"
}

export function BreakdownSection({ breakdown }: BreakdownSectionProps) {
  const items: BreakdownItem[] = breakdownConfig.map((config) => ({
    label: config.label,
    value: breakdown[config.key as keyof typeof breakdown],
    tooltip: config.tooltip,
  }))

  return (
    <SectionWrapper title="Score Breakdown" delay={0.3}>
      <div className="flex flex-col gap-5 rounded-xl border border-[var(--glass-border)] bg-[var(--glass)] p-6 backdrop-blur-md">
        {items.map((item, i) => {
          const barColor = getBarColor(item.value)
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="text-muted-foreground transition-colors hover:text-foreground">
                        <Info className="h-3.5 w-3.5" />
                        <span className="sr-only">More info about {item.label}</span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <span
                  className="font-mono text-sm font-semibold"
                  style={{ color: barColor }}
                >
                  {item.value}
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-[rgba(255,255,255,0.06)]">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    backgroundColor: barColor,
                    boxShadow: `0 0 8px ${barColor}66`,
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${item.value}%` }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
