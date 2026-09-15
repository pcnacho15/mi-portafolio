import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiOpenjdk,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiJenkins,
  SiLinux,
  SiSelenium,
  SiJest,
  SiPostman,
} from "react-icons/si";
import {
  Database,
  GitBranch,
  Users,
  MessageCircle,
  Puzzle,
  Shuffle,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";

const ICONS: Record<string, IconType | LucideIcon> = {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiOpenjdk,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiJenkins,
  SiLinux,
  SiSelenium,
  SiJest,
  SiPostman,
  Database,
  GitBranch,
  Users,
  MessageCircle,
  Puzzle,
  Shuffle,
};

export function SkillIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name] ?? Database;
  return <Icon className={className} aria-hidden="true" />;
}
