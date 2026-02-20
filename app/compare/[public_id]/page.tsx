"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CompatibilityScore } from "@/components/compatibility-score";
import { BreakdownSection } from "@/components/compare/breakdown-section";
import { SharedArtists } from "@/components/compare/shared-artists";
import { ListeningInsights } from "@/components/compare/listening-insights";
import { DownloadCard } from "@/components/compare/download-card";
import { compatibilityData, currentUser } from "@/lib/dummy-data";
import { getCookie } from "@/actions/handleCookies";
import axios from "axios";
import {
  BASE_URL,
  compatibility_result,
  CompatibilityResult,
} from "@/lib/types";
import { useParams, useSearchParams } from "next/navigation";

export default function ComparePage() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const publicID = params?.public_id as string | undefined;
  const [compatibilityData, setCompatibilityData] =
    useState<CompatibilityResult>();
  const [compatibilityResult, setCompatibilityResult] =
    useState<compatibility_result>();
  const [error, setError] = useState("");

  useEffect(() => {
    const getCompatibilityData = async () => {
      setIsLoading(true);
      setError("");
      try {
        const accessToken = await getCookie("r3sonance_token");

        const compatibility = await axios.get(
          `${BASE_URL()}/users/compatibility/${publicID ? publicID : "r3c"}`,
          {
            headers: { Authorization: `Bearer ${accessToken?.value}` },
          },
        );

        setCompatibilityData(compatibility.data);
        setCompatibilityResult(compatibility.data.compatibility_result);
      } catch (e) {
        setError("Oops! Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    getCompatibilityData();
  }, []);

  return (
    <>
      {isLoading && !error && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon"></div>
        </div>
      )}
      {!isLoading && error && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center gap-4 rounded-lg border border-red-500/30 bg-red-500/10 p-8 max-w-md">
            <div className="text-lg font-semibold text-red-400">{error}</div>
            <Link
              href="/dashboard"
              className="px-4 py-2 rounded-lg bg-neon text-black font-medium hover:opacity-90 transition-opacity"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      )}
      {!isLoading && compatibilityData && compatibilityResult && (
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
                percentage={compatibilityResult.percentage}
                tier={compatibilityResult.tier}
                comparedWith={compatibilityData?.compared_with}
              />
            </div>

            {/* Download button */}
            <div className="flex justify-center">
              <DownloadCard targetRef={cardRef} />
            </div>

            {/* Breakdown */}
            <BreakdownSection breakdown={compatibilityResult.breakdown} />

            {/* Shared Artists */}
            {compatibilityResult.shared_artist &&
              compatibilityResult.shared_artist.length > 0 && (
                <SharedArtists artists={compatibilityResult.shared_artist} />
              )}

            {/* Listening Insights */}
            <ListeningInsights
              insights={compatibilityResult.listening_insights}
              nameA={currentUser.name}
              nameB={compatibilityData?.compared_with}
            />
          </div>
        </main>
      )}
    </>
  );
}
