"use client"

import { motion } from "framer-motion"
import { Headphones, Link2, GitCompareArrows } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"

const steps = [
  {
    icon: Headphones,
    title: "Connect Spotify",
    description: "Securely link your Spotify account to pull your top artists, tracks, and listening data.",
  },
  {
    icon: Link2,
    title: "Share your link",
    description: "Get your unique r3sonance link and share it with anyone you want to compare with.",
  },
  {
    icon: GitCompareArrows,
    title: "Compare compatibility",
    description: "See your compatibility score, shared artists, and listening insights instantly.",
  },
]

export function HowItWorks() {
  return (
    <SectionWrapper className="px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="mb-4 text-center text-3xl font-bold text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How it works
        </motion.h2>
        <motion.p
          className="mx-auto mb-16 max-w-md text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Three simple steps to discover your musical compatibility.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group flex flex-col items-center gap-4 rounded-xl border border-[var(--glass-border)] bg-[var(--glass)] p-6 text-center backdrop-blur-md transition-all hover:border-neon/20"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neon/10 text-neon transition-shadow group-hover:shadow-[0_0_20px_rgba(0,230,118,0.2)]">
                <step.icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-mono text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
