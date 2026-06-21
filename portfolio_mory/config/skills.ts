import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "HTML 5",
    description: "Structure de pages web accessibles, propres et semantiques.",
    rating: 5,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Interfaces responsives, mises en page modernes et integration UI.",
    rating: 5,
    icon: Icons.css3,
  },
  {
    name: "Javascript",
    description:
      "Logique frontend, manipulation du DOM, appels API et interactions.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "Typescript",
    description:
      "Developpement plus robuste avec typage statique et composants maintenables.",
    rating: 4,
    icon: Icons.typescript,
  },
  {
    name: "React",
    description:
      "Creation d'interfaces dynamiques avec composants, hooks et etat local.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Vue.js",
    description:
      "Developpement d'interfaces progressives, reactives et maintenables.",
    rating: 5,
    icon: Icons.laptop,
  },
  {
    name: "React Native",
    description: "Applications mobiles cross-platform avec composants React.",
    rating: 3,
    icon: Icons.react,
  },
  {
    name: "Laravel",
    description:
      "Applications web PHP, APIs REST, authentification et architecture MVC.",
    rating: 4,
    icon: Icons.laptop,
  },
  {
    name: "Nest.js",
    description:
      "APIs backend modulaires avec TypeScript, services et controllers.",
    rating: 4,
    icon: Icons.nestjs,
  },
  {
    name: "Flask",
    description:
      "APIs Python legeres, routes REST et integration avec bases de donnees.",
    rating: 3,
    icon: Icons.laptop,
  },
  {
    name: "MySQL",
    description:
      "Modelisation relationnelle, requetes SQL et gestion de donnees applicatives.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "Git",
    description:
      "Versioning, branches, pull requests et collaboration sur GitHub.",
    rating: 4,
    icon: Icons.gitBranch,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
