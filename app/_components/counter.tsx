"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "motion/react";

export function Counter({
  to,
  suffix = "",
}: {
  to: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </motion.span>
  );
}
