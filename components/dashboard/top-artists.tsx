"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { ArtistCard } from "@/components/artist-card"
import type { Artist } from "@/lib/types"

interface TopArtistsProps {
  artists: Artist[]
}

export function TopArtists({ artists }: TopArtistsProps) {
  return (
    <SectionWrapper title="Top 5 Artists" subtitle="Your most played artists" delay={0.2}>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {artists.map((artist, i) => (
          <ArtistCard key={artist.id} artist={artist} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
