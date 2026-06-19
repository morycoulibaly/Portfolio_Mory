import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "formation-fullstack",
    position: "Developpeur Fullstack Junior",
    company: "Projets personnels et formation",
    location: "Abidjan, Cote d'Ivoire",
    startDate: new Date("2023-01-01"),
    endDate: "Present",
    description: [
      "Conception et developpement d'applications web fullstack avec React, Vue.js, Laravel, NestJS, Flask et MySQL.",
      "Creation d'interfaces responsives, integration d'APIs REST et gestion de bases de donnees relationnelles.",
      "Utilisation de Git et GitHub pour organiser le code, documenter les projets et suivre les versions.",
    ],
    achievements: [
      "Developpe plusieurs projets web complets avec frontend, backend et base de donnees.",
      "Mis en place des interfaces responsives adaptees mobile et desktop.",
      "Structure des APIs REST avec authentification, validation de donnees et operations CRUD.",
      "Publie les projets sur GitHub avec README, captures et instructions d'installation.",
    ],
    skills: [
      "React",
      "Vue.js",
      "Typescript",
      "Laravel",
      "Nest.js",
      "Flask",
      "MySQL",
      "Git",
    ],
    logo: "/logo.png",
  },
  {
    id: "projets-academiques",
    position: "Developpeur Web",
    company: "Projets academiques et pratiques",
    location: "Abidjan, Cote d'Ivoire",
    startDate: new Date("2022-01-01"),
    endDate: new Date("2023-12-01"),
    description: [
      "Realisation de sites web et applications CRUD pour renforcer les bases frontend et backend.",
      "Integration de formulaires, tableaux de bord, pages d'administration et connexions aux bases de donnees.",
      "Travail sur la lisibilite du code, l'organisation des composants et la separation des responsabilites.",
    ],
    achievements: [
      "Construit des interfaces propres en HTML, CSS, JavaScript, React et Vue.js.",
      "Developpe des modules backend avec Laravel et Flask.",
      "Pratique la modelisation MySQL pour des cas concrets comme utilisateurs, produits, commandes ou reservations.",
    ],
    skills: [
      "HTML 5",
      "CSS 3",
      "Javascript",
      "React",
      "Vue.js",
      "Laravel",
      "Flask",
      "MySQL",
    ],
    logo: "/logo.png",
  },
];
