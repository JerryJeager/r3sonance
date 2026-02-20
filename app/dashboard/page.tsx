"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ProfileCard } from "@/components/dashboard/profile-card"
import { TopArtists } from "@/components/dashboard/top-artists"
import { TopTracks } from "@/components/dashboard/top-tracks"
import { currentUser, userSnapshot } from "@/lib/dummy-data"

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-10">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--glass-border)] bg-[var(--glass)] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to home</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">
            r3s<span className="text-neon">o</span>nance
          </h1>
        </div>

        <ProfileCard user={currentUser} />

        <TopArtists artists={userSnapshot.snapshot.top_artists} />

        <TopTracks tracks={userSnapshot.snapshot.top_tracks} />
      </div>
    </main>
  )
}
