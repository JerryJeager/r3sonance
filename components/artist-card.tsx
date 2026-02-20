"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import type { Artist } from "@/lib/types"

interface ArtistCardProps {
  artist: Artist
  index: number
}

export function ArtistCard({ artist, index }: ArtistCardProps) {
  return (
    <motion.a
      href={artist.spotify_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative flex flex-col items-center gap-3 rounded-xl border border-[var(--glass-border)] bg-[var(--glass)] p-4 backdrop-blur-md transition-all hover:border-neon/30 hover:shadow-[0_0_20px_rgba(0,230,118,0.15)]"
    >
      <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-[var(--glass-border)] transition-all group-hover:border-neon/50">
        <img
          src={artist.image}
          alt={artist.name}
          className="h-full w-full object-cover"
          crossOrigin="anonymous"
        />
      </div>
      <div className="flex items-center gap-1.5 text-center">
        <span className="text-sm font-medium text-foreground">
          {artist.name}
        </span>
        <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </motion.a>
  )
}
