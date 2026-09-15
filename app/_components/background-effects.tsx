export function BackgroundEffects() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]" />
      <div className="animate-blob-1 absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-violet-600/25 blur-[110px]" />
      <div className="animate-blob-2 absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-cyan-400/20 blur-[110px]" />
      <div className="animate-blob-3 absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/15 blur-[110px]" />
    </div>
  );
}
