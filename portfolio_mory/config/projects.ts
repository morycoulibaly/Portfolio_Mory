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
    id: "yowl",
    companyName: "YOWL",
    type: "Personal",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "Réseau social Full-Stack permettant les interactions entre utilisateurs via une intégration d'API.",
    // websiteLink: "https://yowl.example.com",
    // githubLink: "https://github.com/your-username/yowl",
    techStack: ["Next.js", "Nest.js", "Typescript", "Tailwind CSS"],
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-12-01"),
    companyLogoImg: "/projects/portfolio/YOWL.png",
    pagesInfoArr: [
      {
        title: "YOWL - Accueil",
        description: "Page d'accueil du projet avec capture d'écrans et résumé rapide.",
        imgArr: ["/projects/portfolio/YOWL.png"],
      },
      {
        title: "YOWL",
        description: "Exemples fictifs de publications, profils utilisateurs et interactions.",
        imgArr: ["/projects/portfolio/YOWL.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Réseau social Full-Stack permettant les interactions entre utilisateurs via une architecture MVC moderne.",
        "Texte factice : fonctionnalités, objectifs et défis techniques seront décrits ici.",
      ],
      bullets: [
        "Authentification, profils, relations.",
        "Intégration d'API pour enrichir les interactions et le contenu.",
      ],
    },
  },
  {
    id: "showtime",
    companyName: "Showtime",
    type: "Personal",
    category: ["Full Stack", "Backend"],
    shortDescription:
      "Application de réservation de tickets pour événements développée avec une architecture backend robuste basée sur NestJS.",
    // websiteLink: "https://showtime.example.com",
    // githubLink: "https://github.com/your-username/showtime",
    techStack: ["Nest.js", "Typescript", "Next.js", "CSS 3"],
    startDate: new Date("2025-03-01"),
    endDate: new Date("2025-06-01"),
    companyLogoImg: "/projects/portfolio/showtime.png",
    pagesInfoArr: [
      {
        title: "Recherche et réservation",
        description: "Pages de listing d'événements, sélection de places et paiement (exemple fictif).",
        imgArr: ["/projects/portfolio/showtime.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Workflow de réservation à éditer.",
        "Gestion des événements, inventaire de billets et intégration de paiement à détailler.",
      ],
      bullets: [
        "Gestion des sessions et des inventaires de billets.",
      ],
    },
  },
  {
    id: "rotten-tomatoes",
    companyName: "Rotten Tomatoes",
    type: "Personal",
    category: ["Frontend", "Full Stack"],
    shortDescription:
      "Plateforme web de découverte de films intégrant l'API TMDB avec authentification sécurisée.",
    // websiteLink: "https://rotten-tomatoes.example.com",
    // githubLink: "https://github.com/your-username/rotten-tomatoes",
    techStack: ["Nest.js", "Typescript", "Next.js", "CSS 3"],
    startDate: new Date("2024-09-01"),
    endDate: new Date("2025-01-01"),
    companyLogoImg: "/projects/portfolio/Rotten_tomatoes.png",
    pagesInfoArr: [
      {
        title: "Catalogue films",
        description: "Recherche, filtres et fiches détaillées utilisant l'API TMDB.",
        imgArr: ["/projects/portfolio/catalogue.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Interface utilisateur pour la découverte de films avec intégration de l'API TMDB.",
        "Flux d'authentification, caching et gestion des quotas API",
      ],
      bullets: [
        "Intégration TMDB et mapping des données.",
        "Système d'avis et notation utilisateur sécurisée.",
      ],
    },
  },
  {
    id: "dashboard",
    companyName: "Dashboard",
    type: "Personal",
    category: ["Frontend", "Web Dev", "UI/UX"],
    shortDescription: "Dashboard web moderne permettant la visualisation de données.",
    // websiteLink: "https://dashboard.example.com",
    // githubLink: "https://github.com/your-username/dashboard",
    techStack: ["React", "Nest.js", "CSS 3"],
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-02-01"),
    companyLogoImg: "/projects/portfolio/dashboard.png",
    pagesInfoArr: [
      {
        title: "Accueil et présentation",
        description:
          "Page d'aperçu du dashboard avec KPI et graphiques (contenu fictif).",
        imgArr: ["/projects/portfolio/dashboard.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Résumé du dashboard ",
        "Sources de données, widgets et configurations seront ajoutés.",
      ],
      bullets: [
        "Intégration de graphiques et tableaux de bord interactifs.",
        "Filtres et authentification.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
