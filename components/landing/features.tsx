"use client"

import { motion } from "framer-motion"
import { Users, BarChart3, Clock, Layers } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"

const features = [
  {
    icon: Users,
    title: "Artist overlap scoring",
    description:
      "See exactly which artists you share and how your rankings compare side by side.",
  },
  {
    icon: BarChart3,
    title: "Rank alignment analysis",
    description:
      "It's not just about shared artists, it's about how close your rankings are.",
  },
  {
    icon: Clock,
    title: "Listening habit sync",
    description:
      "Compare when you listen, how often, and what your listening patterns reveal.",
  },
  {
    icon: Layers,
    title: "Compatibility tiers",
    description:
      "From 'Different Wavelengths' to 'Sonic Soulmates' — see where you land.",
  },
]

export function Features() {
  return (
    <SectionWrapper className="px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="mb-4 text-center text-3xl font-bold text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Feature highlights
        </motion.h2>
        <motion.p
          className="mx-auto mb-16 max-w-md text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Deep insights into your musical compatibility.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex gap-4 rounded-xl border border-[var(--glass-border)] bg-[var(--glass)] p-5 backdrop-blur-md transition-all hover:border-neon/20"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-neon/10 text-neon">
                <feature.icon className="h-5 w-5" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
