import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-violet-300 uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-balance text-zinc-400">{description}</p>
      ) : null}
    </Reveal>
  );
}
