"use client"

import { motion } from "framer-motion"
import { Headphones } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"

interface ListeningInsightsProps {
  insights: {
    listening_type_a: string
    listening_type_b: string
    sync_message: string
  }
  nameA: string
  nameB: string
}

export function ListeningInsights({
  insights,
  nameA,
  nameB,
}: ListeningInsightsProps) {
  return (
    <SectionWrapper title="Listening Insights" delay={0.7}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center gap-3 rounded-xl border border-[var(--glass-border)] bg-[var(--glass)] p-5 backdrop-blur-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neon/10 text-neon">
              <Headphones className="h-5 w-5" />
            </div>
            <span className="text-xs text-muted-foreground">{nameA}</span>
            <span className="text-base font-semibold text-foreground">
              {insights.listening_type_a}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col items-center gap-3 rounded-xl border border-[var(--glass-border)] bg-[var(--glass)] p-5 backdrop-blur-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neon/10 text-neon">
              <Headphones className="h-5 w-5" />
            </div>
            <span className="text-xs text-muted-foreground">{nameB}</span>
            <span className="text-base font-semibold text-foreground">
              {insights.listening_type_b}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="rounded-xl border border-neon/10 bg-neon/5 p-5"
        >
          <p className="text-center text-sm leading-relaxed text-foreground/80">
            {insights.sync_message}
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
