"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { ROLE_WORDS, CONTACT_LINKS } from "@/app/_lib/data";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROLE_WORDS.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center"
    >
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        Desarrollador Full Stack | Ingeniero de Datos | DevOps
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-8 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl md:text-7xl"
      >
        Hola, soy{" "}
        <span className="bg-linear-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
          Cristian Martinez
        </span>
      </motion.h1>

      <div className="mt-4 h-9 sm:h-10">
        <AnimatePresence mode="wait">
          <motion.p
            key={ROLE_WORDS[index]}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-lg font-medium text-zinc-300 sm:text-2xl"
          >
            {ROLE_WORDS[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 max-w-xl text-balance text-zinc-400"
      >
        Construyo productos completos de punta a punta: interfaces con
        Next.js, servicios en Node.js y/o Spring Boot, manejo de
        datos en MySQL, SQL
        Server y PostgreSQL. Despliegues confiables con Docker, Jenkins y
        servidores Linux.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#proyectos"
          className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-medium text-zinc-950 transition-transform hover:scale-105"
        >
          Ver proyectos
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-zinc-100 transition-colors hover:bg-white/10"
        >
          Contactar
        </a>
        <div className="mx-1 flex items-center gap-3">
          <a
            href={CONTACT_LINKS.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={CONTACT_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </motion.div>

      <motion.a
        href="#sobre-mi"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:text-zinc-100"
        aria-label="Ir a la siguiente sección"
      >
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
