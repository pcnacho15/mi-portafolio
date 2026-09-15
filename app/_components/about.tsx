import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { Counter } from "./counter";

const STATS = [
  { value: 3, suffix: "+", label: "Años construyendo software" },
  { value: 15, suffix: "+", label: "Proyectos entregados" },
  { value: 6, suffix: "+", label: "Tecnologías dominadas" },
  { value: 100, suffix: "%", label: "Compromiso en equipo" },
];

export function About() {
  return (
    <section id="sobre-mi" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Sobre mí"
          title="Full stack de extremo a extremo"
          description="Apasionado por el aprendizaje"
        />

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal delay={0.1}>
            <p className="text-zinc-300">
              Soy desarrollador full stack, analista de bases de datos y analista de desarrollo, me muevo con comodidad en todo
              el ciclo de vida de una aplicación: diseño interfaces con{" "}
              <span className="text-zinc-100">Next.js y/o React.js</span>, construyo
              servicios con <span className="text-zinc-100">Node.js</span> y{" "}
              <span className="text-zinc-100">Spring Boot</span>, modelo y manejo de 
              datos en <span className="text-zinc-100">MySQL</span>,{" "}
              <span className="text-zinc-100">SQL Server</span> y{" "}
              <span className="text-zinc-100">PostgreSQL</span>, participo
              en la co-administración de servidores{" "}
              <span className="text-zinc-100">Linux</span> que sostienen
              todo en producción.
            </p>
            <p className="mt-4 text-zinc-300">
              Además, automatizo pruebas con{" "}
              <span className="text-zinc-100">Selenium</span> y construyo
              pipelines de <span className="text-zinc-100">CI/CD</span> con{" "}
              <span className="text-zinc-100">Docker</span> y{" "}
              <span className="text-zinc-100">Jenkins</span> aplicando integración continua sobre los proyecto. Fuera del código, creo que el mejor
              software se construye en equipo, comunico decisiones técnicas
              con claridad y me adapto rápido a nuevos contextos.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/3 p-6 text-center transition-colors hover:border-white/20"
                >
                  <div className="text-3xl font-semibold text-zinc-50 sm:text-4xl">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
