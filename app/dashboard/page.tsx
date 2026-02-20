"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProfileCard } from "@/components/dashboard/profile-card";
import { TopArtists } from "@/components/dashboard/top-artists";
import { TopTracks } from "@/components/dashboard/top-tracks";
import { currentUser, userSnapshot } from "@/lib/dummy-data";
import { useEffect, useState } from "react";
import { BASE_URL, Snapshot, UserProfile } from "@/lib/types";
import axios from "axios";
import { getCookie } from "@/actions/handleCookies";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile>();
  const [snapshot, setSnapshot] = useState<Snapshot>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getUserData = async () => {
      setIsLoading(true);
      try {
        const accessToken = await getCookie("r3sonance_token");
        if (!accessToken?.value) return;
        const [user, snapshot] = await Promise.all([
          axios.get(`${BASE_URL()}/users/profile`, {
            headers: { Authorization: `Bearer ${accessToken?.value}` },
          }),
          axios.get(`${BASE_URL()}/users/spotify/snapshot`, {
            headers: { Authorization: `Bearer ${accessToken?.value}` },
          }),
        ]);
        setUser(user.data);
        setSnapshot(snapshot.data);
      } catch (e) {
        console.log(e);
        router.replace("/");
      } finally {
        setIsLoading(false);
      }
    };

    getUserData();
  }, []);
  return (
    <>
      {isLoading && (
        <div className="min-h-screen bg-background">
          <div className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-10">
            <div className="h-10 w-32 animate-pulse rounded-lg bg-muted" />
            <div className="space-y-4">
              <div className="h-48 w-full animate-pulse rounded-lg bg-muted" />
              <div className="h-64 w-full animate-pulse rounded-lg bg-muted" />
              <div className="h-64 w-full animate-pulse rounded-lg bg-muted" />
            </div>
          </div>
        </div>
      )}
      {!isLoading && user && snapshot && (
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

            <ProfileCard user={user} />

            <TopArtists artists={snapshot.snapshot.top_artists || []} />

            <TopTracks tracks={snapshot.snapshot.top_tracks || []} />
          </div>
        </main>
      )}
    </>
  );
}
