export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Cristian Martinez. Construido con Next.js.</p>
        <p className="font-mono text-xs text-zinc-600">
          Diseñado &amp; desarrollado con cuidado por los detalles.
        </p>
      </div>
    </footer>
  );
}
