import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { CONTACT_LINKS } from "@/app/_lib/data";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section id="contacto" className="relative px-6 py-28">
      <Reveal className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-10 text-center sm:p-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-violet-300 uppercase">
          Contacto
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          ¿Construimos algo juntos?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-zinc-400">
          Abierto a proyectos, colaboraciones y equipos que valoren tanto el
          código como la comunicación.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${CONTACT_LINKS.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-medium text-zinc-950 transition-transform hover:scale-105"
          >
            <Mail size={16} />
            {CONTACT_LINKS.email}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href={CONTACT_LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
          >
            <FaGithub size={16} /> GitHub
            <ArrowUpRight size={14} />
          </a>
          <a
            href={CONTACT_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
          >
            <FaLinkedin size={16} /> LinkedIn
            <ArrowUpRight size={14} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
