"use client";

import { motion } from "framer-motion";
import { FaSpotify } from "react-icons/fa6";
import Link from "next/link";
import { GlowButton } from "@/components/glow-button";
import { BASE_URL } from "@/lib/types";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(0,230,118,0.15) 0%, rgba(0,230,118,0.05) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center gap-6 text-center"
      >
        <motion.h1
          className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          r3s
          <span className="text-neon">o</span>
          nance
        </motion.h1>

        <motion.p
          className="text-xl font-medium text-foreground/80 sm:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Find your music twin.
        </motion.p>

        <motion.p
          className="max-w-lg text-sm leading-relaxed text-muted-foreground text-balance"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Discover how compatible your Spotify taste is with your friends.
          Compare artists, tracks, listening habits and vibe alignment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Link href={`${BASE_URL()}/users/spotify/login`}>
            <GlowButton className="mt-4 gap-2 px-8 py-3.5 text-base">
              <FaSpotify className="h-5 w-5" />
              Login with Spotify
            </GlowButton>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
