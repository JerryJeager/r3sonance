"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { CompatibilityScore } from "@/components/compatibility-score"
import { BreakdownSection } from "@/components/compare/breakdown-section"
import { SharedArtists } from "@/components/compare/shared-artists"
import { ListeningInsights } from "@/components/compare/listening-insights"
import { DownloadCard } from "@/components/compare/download-card"
import { compatibilityData, currentUser } from "@/lib/dummy-data"

export default function ComparePage() {
  const cardRef = useRef<HTMLDivElement>(null)
  const data = compatibilityData
  const result = data.compatibility_result

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-10">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--glass-border)] bg-[var(--glass)] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to dashboard</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">
            r3s<span className="text-neon">o</span>nance
          </h1>
        </div>

        {/* Hero Compatibility Card - this gets screenshotted */}
        <div
          ref={cardRef}
          className="flex flex-col items-center gap-8 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] p-8 backdrop-blur-md sm:p-12"
        >
          <CompatibilityScore
            percentage={result.percentage}
            tier={result.tier}
            comparedWith={data.compared_with}
          />
        </div>

        {/* Download button */}
        <div className="flex justify-center">
          <DownloadCard targetRef={cardRef} />
        </div>

        {/* Breakdown */}
        <BreakdownSection breakdown={result.breakdown} />

        {/* Shared Artists */}
        {result.shared_artist && result.shared_artist.length > 0 && (
          <SharedArtists artists={result.shared_artist} />
        )}

        {/* Listening Insights */}
        <ListeningInsights
          insights={result.listening_insights}
          nameA={currentUser.name}
          nameB={data.compared_with}
        />
      </div>
    </main>
  )
}
