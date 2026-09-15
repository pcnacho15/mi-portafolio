"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/app/_lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(NAV_LINKS[0].href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href),
    ).filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-background/70 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className="font-mono text-sm font-semibold tracking-tight text-zinc-50"
        >
          <span className="text-violet-400">{"<"}</span>
          dev.portfolio
          <span className="text-violet-400">{" />"}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                className={`relative block rounded-full px-4 py-2 text-sm transition-colors ${
                  active === link.href
                    ? "text-zinc-50"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {active === link.href ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/8 ring-1 ring-white/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                ) : null}
                <span className="relative">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 text-sm font-medium text-zinc-950 transition-transform hover:scale-105 md:inline-block"
        >
          Hablemos
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-100 md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-white/10 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-sm ${
                      active === link.href
                        ? "bg-white/8 text-zinc-50"
                        : "text-zinc-400"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
