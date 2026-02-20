"use client"

import { useCallback, useState } from "react"
import { Download, Loader2 } from "lucide-react"
import { GlowButton } from "@/components/glow-button"

interface DownloadCardProps {
  targetRef: React.RefObject<HTMLDivElement | null>
}

export function DownloadCard({ targetRef }: DownloadCardProps) {
  const [loading, setLoading] = useState(false)

  const handleDownload = useCallback(async () => {
    if (!targetRef.current) return
    setLoading(true)

    try {
      const { toPng } = await import("html-to-image")
      const dataUrl = await toPng(targetRef.current, {
        backgroundColor: "#050505",
        pixelRatio: 2,
      })

      const link = document.createElement("a")
      link.download = "r3sonance-compatibility.png"
      link.href = dataUrl
      link.click()
    } catch (err) {
      console.error("Failed to generate image:", err)
    } finally {
      setLoading(false)
    }
  }, [targetRef])

  return (
    <GlowButton
      onClick={handleDownload}
      disabled={loading}
      className="gap-2"
    >
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Download className="h-4 w-4" />
      )}
      Download Compatibility Card
    </GlowButton>
  )
}
