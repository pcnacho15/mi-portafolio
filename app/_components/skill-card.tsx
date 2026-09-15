"use client";

import { useRef, type MouseEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";
import type { SkillCategory } from "@/app/_lib/data";
import { SkillIcon } from "@/app/_lib/icon-map";

export function SkillCard({ category }: { category: SkillCategory }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });
  const glow = useMotionTemplate`radial-gradient(280px circle at ${mouseX}% ${mouseY}%, rgba(139,92,246,0.15), transparent 70%)`;

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    mouseX.set(x * 100);
    mouseY.set(y * 100);
    rotateY.set((x - 0.5) * 10);
    rotateX.set((0.5 - y) * 10);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glow }}
      />
      <div className="relative">
        <h3 className="text-lg font-semibold text-zinc-50">
          {category.title}
        </h3>
        <p className="mt-1 text-sm text-zinc-400">{category.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <li
              key={skill.name}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300"
            >
              <SkillIcon name={skill.icon} className="h-3.5 w-3.5 text-violet-300" />
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
