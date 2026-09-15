export const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const ROLE_WORDS = [
  "Desarrollador Full Stack",
  "Arquitecto de APIs",
  "DevOps & CI/CD",
  "Ingeniero de Datos",
  "QA & Automatización",
] as const;

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: { name: string; icon: string }[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Interfaces rápidas, accesibles y con animaciones cuidadas.",
    skills: [
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "React", icon: "SiReact" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Servicios y APIs robustas sobre distintos runtimes.",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Express", icon: "SiExpress" },
      { name: "Spring Boot", icon: "SiSpringboot" },
      { name: "Java", icon: "SiOpenjdk" },
    ],
  },
  {
    id: "databases",
    title: "Bases de datos",
    description: "Modelado, rendimiento y administración de datos relacionales.",
    skills: [
      { name: "MySQL", icon: "SiMysql" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "SQL Server", icon: "Database" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Infraestructura",
    description: "Co-administración de servidores Linux y pipelines de entrega continua.",
    skills: [
      { name: "Docker", icon: "SiDocker" },
      { name: "Jenkins", icon: "SiJenkins" },
      { name: "Linux", icon: "SiLinux" },
      { name: "CI/CD", icon: "GitBranch" },
    ],
  },
  {
    id: "testing",
    title: "Testing & Calidad",
    description: "Automatización de pruebas para asegurar releases confiables.",
    skills: [
      { name: "Selenium", icon: "SiSelenium" },
      { name: "Jest", icon: "SiJest" },
      { name: "Postman", icon: "SiPostman" },
    ],
  },
  {
    id: "soft-skills",
    title: "Habilidades blandas",
    description: "Lo técnico funciona mejor cuando el equipo también.",
    skills: [
      { name: "Trabajo en equipo", icon: "Users" },
      { name: "Comunicación", icon: "MessageCircle" },
      { name: "Resolución de problemas", icon: "Puzzle" },
      { name: "Adaptabilidad", icon: "Shuffle" },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  gradient: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Plataforma de gestión financiera",
    description:
      "Aplicación full stack con Next.js, con autenticación, panel de administración y reportes en tiempo real. Integración de Apis con Binance para ver precio en tiempo real del USDT",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    gradient: "from-violet-500/20 via-fuchsia-500/10 to-cyan-400/20",
    href: "https://nacho-finance.vercel.app/",
  },
  {
    title:
      "E-commerce con integración de pasarela de pagos con Wompi, Webhook y notificaciones por correo electrónico",
    description:
      "Backend en Node.js (Server sides) con autenticación, panel de administración y reportes en tiempo real. Integración de Apis con Wompi para pagos en línea.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Jenkins"],
    gradient: "from-cyan-400/20 via-sky-500/10 to-violet-500/20",
    href: "https://www.topwigs.co/",
  },
  {
    title:
      "E-commerce de productos tecnológicos con integración de pasarela de pagos con Epayco, Webhooks, Autenticación y panel de administración",
    description:
      "Aplicación full stack con Next.js, con autenticación, panel de administración y reportes en tiempo real. Integración de Apis con Epayco para pagos en línea.",
    tags: ["Next.js", "PostgreSQL", "Node.js", "Docker"],
    gradient: "from-emerald-400/20 via-teal-500/10 to-violet-500/20",
    href: "https://celuantioquia-project.vercel.app/",
  },
];

export type ExperienceItem = {
  role: string;
  place: string;
  period: string;
  description: string;
  stack: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Desarrollador Full Stack",
    place: "Proyecto / Empresa",
    period: "Actualidad",
    description:
      "Desarrollo de aplicaciones con Next.js y Spring Boot, diseño de esquemas en MySQL/PostgreSQL/SQL Server y co-administración de servidores Linux en producción.",
    stack: ["Next.js", "Spring Boot", "PostgreSQL", "Linux"],
  },
  {
    role: "Ingeniero de Automatización & CI/CD",
    place: "Proyecto / Empresa",
    period: "Periodo anterior",
    description:
      "Implementación de pipelines con Jenkins y Docker, y suites de pruebas automatizadas con Selenium para reducir regresiones antes de cada release.",
    stack: ["Jenkins", "Docker", "Selenium"],
  },
  {
    role: "Desarrollador Backend",
    place: "Proyecto / Empresa",
    period: "Periodo inicial",
    description:
      "Construcción de APIs en Node.js y trabajo en equipo con diseñadores y QA para entregar funcionalidades de extremo a extremo.",
    stack: ["Node.js", "MySQL", "Trabajo en equipo"],
  },
];

export const CONTACT_LINKS = {
  email: "cristiancamilomartinezs@gmail.com",
  github: "https://github.com/pcnacho15?tab=repositories",
  linkedin: "https://www.linkedin.com/in/cristian-martinez-41b7951a6/",
} as const;
