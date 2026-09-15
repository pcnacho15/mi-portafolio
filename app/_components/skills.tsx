import { SKILL_CATEGORIES } from "@/app/_lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { SkillCard } from "./skill-card";

export function Skills() {
  return (
    <section id="habilidades" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Habilidades"
          title="Una caja de herramientas completa"
          description="Del frontend al servidor, de la base de datos al pipeline de despliegue."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, i) => (
            <Reveal key={category.id} delay={(i % 3) * 0.1}>
              <SkillCard category={category} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
