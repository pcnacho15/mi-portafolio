import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { PROJECTS } from "@/app/_lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Projects() {
  return (
    <section id="proyectos" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Proyectos"
          title="Trabajo reciente"
          description="Una muestra de cómo conecto frontend, backend, datos e infraestructura."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.1}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/3 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.35)]">
                <div
                  className={`h-36 w-full bg-linear-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-105`}
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-zinc-50">
                      {project.title}
                    </h3>
                    <div className="flex shrink-0 gap-2 text-zinc-400">
                      {project.repo ? (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Repositorio"
                          className="transition-colors hover:text-zinc-100"
                        >
                          <FaGithub size={18} />
                        </a>
                      ) : null}
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Ver proyecto"
                          className="transition-colors hover:text-zinc-100"
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      ) : null}
                    </div>
                  </div>
                  <p className="mt-3 flex-1 text-sm text-zinc-400">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/4 px-2.5 py-1 text-xs text-zinc-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
