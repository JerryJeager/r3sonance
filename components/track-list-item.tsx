"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import type { Track } from "@/lib/types"

interface TrackListItemProps {
  track: Track
  index: number
}

function formatDuration(ms: number) {
  const minutes = Math.floor(ms / 60000)
  const seconds = Math.floor((ms % 60000) / 1000)
  return `${minutes}:${seconds.toString().padStart(2, "0")}`
}

export function TrackListItem({ track, index }: TrackListItemProps) {
  return (
    <motion.a
      href={track.spotify_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group flex items-center gap-4 rounded-lg border border-transparent p-3 transition-all hover:border-[var(--glass-border)] hover:bg-[var(--glass)]"
    >
      <span className="w-6 text-right text-xs font-mono text-muted-foreground">
        {index + 1}
      </span>
      <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={track.album_image}
          alt={track.album_name}
          className="h-full w-full object-cover"
          crossOrigin="anonymous"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-sm font-medium text-foreground">
          {track.name}
        </span>
        <span className="truncate text-xs text-muted-foreground">
          {track.artists.map((a) => a.name).join(", ")}
        </span>
      </div>
      <span className="text-xs font-mono text-muted-foreground">
        {formatDuration(track.duration_ms)}
      </span>
      <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.a>
  )
}
