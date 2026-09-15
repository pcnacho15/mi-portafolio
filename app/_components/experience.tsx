"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { EXPERIENCE } from "@/app/_lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
  });

  return (
    <section id="experiencia" className="relative px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Experiencia"
          title="Cómo he crecido"
          description="Un recorrido por el código, la infraestructura y los equipos con los que he trabajado."
        />

        <div ref={ref} className="relative mt-16">
          <div className="absolute top-0 bottom-0 left-[7px] w-px bg-white/10 sm:left-[11px]" />
          <motion.div
            style={{ scaleY: lineHeight }}
            className="absolute top-0 left-[7px] w-px origin-top bg-gradient-to-b from-violet-400 to-cyan-300 sm:left-[11px]"
          />

          <ol className="space-y-12">
            {EXPERIENCE.map((item, i) => (
              <Reveal as="li" key={item.role} delay={i * 0.1} className="relative pl-8 sm:pl-10">
                <span className="absolute top-1.5 left-0 h-3.5 w-3.5 rounded-full border-2 border-violet-400 bg-background sm:h-[22px] sm:w-[22px] sm:border-4" />
                <p className="text-xs font-medium tracking-wide text-violet-300 uppercase">
                  {item.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-zinc-50">
                  {item.role}
                  <span className="text-zinc-500"> · {item.place}</span>
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  {item.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
