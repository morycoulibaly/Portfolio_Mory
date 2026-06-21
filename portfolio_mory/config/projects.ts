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
    companyLogoImg: "/projects/yowl/logo.png",
    pagesInfoArr: [
      {
        title: "Présentation",
        description: "Page d'accueil du projet avec capture d'écrans et résumé rapide.",
        imgArr: ["/projects/yowl/home.png"],
      },
      {
        title: "Flux et profils",
        description: "Exemples fictifs de publications, profils utilisateurs et interactions.",
        imgArr: ["/projects/yowl/feed.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Texte factice : détails du projet YOWL à remplacer par l'auteur.",
        "Texte factice : fonctionnalités, objectifs et défis techniques seront décrits ici.",
      ],
      bullets: [
        "Point fictif : Authentification, profils, relations et notifications.",
        "Point fictif : Intégration d'API tierces pour enrichir le contenu.",
        "Point fictif : Mise en place d'un système de modération basique.",
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
    companyLogoImg: "/projects/showtime/logo.png",
    pagesInfoArr: [
      {
        title: "Recherche et réservation",
        description: "Pages de listing d'événements, sélection de places et paiement (exemple fictif).",
        imgArr: ["/projects/showtime/events.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Texte factice : description du workflow de réservation à éditer.",
        "Texte factice : architecture backend, webhooks et gestion des transactions à préciser.",
      ],
      bullets: [
        "Point fictif : gestion des sessions et des inventaires de billets.",
        "Point fictif : intégration de passerelles de paiement (placeholder).",
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
    companyLogoImg: "/projects/rotten-tomatoes/logo.png",
    pagesInfoArr: [
      {
        title: "Catalogue films",
        description: "Recherche, filtres et fiches détaillées utilisant l'API TMDB.",
        imgArr: ["/projects/rotten-tomatoes/list.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Texte factice : objectifs du projet Rotten Tomatoes à compléter.",
        "Texte factice : flux d'authentification, caching et gestion des quotas API à détailler.",
      ],
      bullets: [
        "Point fictif : intégration TMDB et mapping des données.",
        "Point fictif : système d'avis et notation utilisateur sécurisée.",
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
    companyLogoImg: "/projects/dashboard/logo.png",
    pagesInfoArr: [
      {
        title: "Accueil et présentation",
        description:
          "Page d'aperçu du dashboard avec KPI et graphiques (contenu fictif).",
        imgArr: ["/projects/dashboard/overview.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Texte factice : résumé du dashboard à modifier par l'auteur.",
        "Texte factice : sources de données, widgets et configurations seront ajoutés.",
      ],
      bullets: [
        "Point fictif : intégration de graphiques et tableaux de bord interactifs.",
        "Point fictif : filtres, export CSV et authentification.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
