"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import type { SharedArtist } from "@/lib/types"

interface SharedArtistsProps {
  artists: SharedArtist[]
}

function getRankDiffColor(diff: number) {
  if (diff <= 2) return "#00e676"
  if (diff <= 5) return "#ffbb33"
  return "#ff4444"
}

export function SharedArtists({ artists }: SharedArtistsProps) {
  return (
    <SectionWrapper title="Shared Artists" delay={0.5}>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {artists.map((artist, i) => {
          const diffColor = getRankDiffColor(artist.rank_difference)
          return (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="flex flex-col items-center gap-3 rounded-xl border border-[var(--glass-border)] bg-[var(--glass)] p-5 backdrop-blur-md"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-[var(--glass-border)]">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="h-full w-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              <span className="text-sm font-semibold text-foreground">
                {artist.name}
              </span>
              <div className="flex w-full items-center justify-between text-xs">
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-muted-foreground">Your Rank</span>
                  <span className="font-mono font-semibold text-foreground">
                    #{artist.rank_a}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-muted-foreground">Difference</span>
                  <span
                    className="font-mono font-semibold"
                    style={{ color: diffColor }}
                  >
                    {artist.rank_difference === 0
                      ? "="
                      : `${artist.rank_difference > 0 ? "+" : ""}${artist.rank_difference}`}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-muted-foreground">Their Rank</span>
                  <span className="font-mono font-semibold text-foreground">
                    #{artist.rank_b}
                  </span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
