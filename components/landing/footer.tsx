export function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] px-4 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 text-center">
        <span className="text-sm font-semibold text-foreground">
          r3s<span className="text-neon">o</span>nance
        </span>
        <p className="text-xs text-muted-foreground">
          Music compatibility, visualized.
        </p>
      </div>
    </footer>
  )
}
