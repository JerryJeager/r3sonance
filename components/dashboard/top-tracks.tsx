"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { TrackListItem } from "@/components/track-list-item"
import type { Track } from "@/lib/types"

interface TopTracksProps {
  tracks: Track[]
}

export function TopTracks({ tracks }: TopTracksProps) {
  return (
    <SectionWrapper title="Top 10 Tracks" subtitle="Your most played tracks" delay={0.4}>
      <div className="flex flex-col rounded-xl border border-[var(--glass-border)] bg-[var(--glass)] backdrop-blur-md">
        {tracks.map((track, i) => (
          <TrackListItem key={track.id} track={track} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
