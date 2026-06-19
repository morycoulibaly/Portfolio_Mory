import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "portfolio-mory-coulibaly",
    companyName: "Portfolio Fullstack",
    type: "Personal",
    category: ["Frontend", "Web Dev", "UI/UX"],
    shortDescription:
      "Portfolio professionnel developpe avec Next.js, TypeScript et Tailwind CSS pour presenter mes projets, competences et disponibilites.",
    websiteLink: "https://morycoulibaly.dev",
    githubLink: "https://github.com/morycoulibaly/portfolio",
    techStack: ["Next.js", "React", "Typescript", "Tailwind CSS", "Git"],
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-02-01"),
    companyLogoImg: "/projects/portfolio/logo.png",
    pagesInfoArr: [
      {
        title: "Accueil et presentation",
        description:
          "Hero section orientee recruteur avec titre clair, pitch court, liens vers CV et contact.",
        imgArr: ["/profile-img.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Ce portfolio a ete personnalise pour mettre en avant mon profil de developpeur Fullstack Junior base a Abidjan.",
        "L'objectif est de faciliter la lecture pour les recruteurs : competences visibles, projets concrets, CV accessible et contact rapide.",
      ],
      bullets: [
        "Personnalisation SEO complete pour le marche francophone et la Cote d'Ivoire.",
        "Mise en avant des competences frontend, backend, mobile et base de donnees.",
        "Structure responsive adaptee aux recruteurs consultant le site sur mobile ou desktop.",
      ],
    },
  },
  {
    id: "dashboard-gestion",
    companyName: "Dashboard de Gestion",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "Application fullstack de gestion avec authentification, tableaux de bord, operations CRUD et base de donnees MySQL.",
    githubLink: "https://github.com/morycoulibaly/dashboard-gestion",
    techStack: ["React", "Typescript", "Laravel", "MySQL", "Git"],
    startDate: new Date("2025-08-01"),
    endDate: new Date("2025-10-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Tableau de bord",
        description:
          "Interface d'administration pour suivre les donnees principales et gerer les entites.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Ce projet montre ma capacite a construire une application fullstack de bout en bout.",
        "Il combine une interface React avec un backend Laravel et une base de donnees MySQL.",
      ],
      bullets: [
        "Creation des modules CRUD pour gerer les donnees principales.",
        "Mise en place d'une architecture backend MVC avec Laravel.",
        "Integration frontend/backend via API REST.",
        "Utilisation de MySQL pour la persistance des donnees.",
      ],
    },
  },
  {
    id: "api-nestjs-flask",
    companyName: "API Services Fullstack",
    type: "Personal",
    category: ["Backend", "Full Stack", "Web Dev"],
    shortDescription:
      "Prototype backend comparant NestJS et Flask pour creer des APIs REST structurees, documentees et connectees a MySQL.",
    githubLink: "https://github.com/morycoulibaly/api-services",
    techStack: ["Nest.js", "Flask", "Typescript", "MySQL", "Git"],
    startDate: new Date("2025-11-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Architecture API",
        description:
          "Endpoints REST pour utilisateurs, ressources metier, validation et connexion base de donnees.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Ce projet met l'accent sur la partie backend et l'organisation d'APIs propres.",
        "Il m'a permis de renforcer mes bases sur NestJS, Flask, les routes REST et la communication avec MySQL.",
      ],
      bullets: [
        "Creation d'endpoints REST organises par ressources.",
        "Validation des donnees entrantes et gestion des erreurs.",
        "Connexion a une base MySQL avec operations de lecture et ecriture.",
        "Documentation du projet pour faciliter l'installation et la demonstration.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
