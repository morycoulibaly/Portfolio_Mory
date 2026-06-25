import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Accueil",
    description: "Portfolio professionnel de Mory Coulibaly.",
    metadata: {
      title: "Mory Coulibaly - Developpeur Fullstack Junior",
      description:
        "Portfolio de Mory Coulibaly, developpeur Fullstack Junior a Abidjan, specialise en React, Vue.js, Laravel, NestJS, Flask et MySQL.",
    },
  },
  about: {
    title: "A Propos",
    description:
      "Mon parcours, mes formations et ma vision en tant que developpeur Fullstack.",
    metadata: {
      title: "A Propos",
      description:
        "Decouvrez le parcours de Mory Coulibaly, developpeur Fullstack Junior passionne par le web, les meilleures pratiques et les solutions performantes.",
    },
  },
  skills: {
    title: "Competences",
    description:
      "Technologies frontend, backend, mobile et base de donnees que j'utilise pour construire des applications fiables.",
    metadata: {
      title: "Competences",
      description:
        "Competences de Mory Coulibaly en HTML, CSS, JavaScript, TypeScript, React, Vue.js, React Native, Laravel, NestJS, Flask, MySQL, Git et GitHub.",
    },
  },
  projects: {
    title: "Projets",
    description:
      "Selection de projets web et fullstack montrant ma capacite a concevoir, developper et livrer des applications concretes.",
    metadata: {
      title: "Projets",
      description:
        "Projets fullstack de Mory Coulibaly avec React, Vue.js, Laravel, NestJS, Flask, MySQL et TypeScript.",
    },
  },
  contact: {
    title: "Contact",
    description:
      "Disponible pour un stage, une alternance ou une opportunite junior en developpement Fullstack.",
    metadata: {
      title: "Contact",
      description:
        "Contacter Mory Coulibaly pour une opportunite de stage, alternance ou poste developpeur Fullstack Junior.",
    },
  },
  contributions: {
    title: "Contributions",
    description:
      "Contributions GitHub, apprentissage public et participation a des projets techniques.",
    metadata: {
      title: "Contributions",
      description:
        "Contributions open source et activite GitHub de Mory Coulibaly.",
    },
  },
  resume: {
    title: "CV",
    description: "CV de Mory Coulibaly.",
    metadata: {
      title: "CV",
      description: "CV de Mory Coulibaly, developpeur Fullstack Junior.",
    },
  },
  blogs: {
    title: "Articles",
    description:
      "Notes techniques sur le developpement web, les projets et l'apprentissage fullstack.",
    metadata: {
      title: "Articles",
      description:
        "Articles techniques de Mory Coulibaly sur le developpement web fullstack.",
    },
  },
  experience: {
    title: "Experience",
    description:
      "Parcours, formations, experiences pratiques et projets professionnels.",
    metadata: {
      title: "Experience",
      description:
        "Experience et parcours de Mory Coulibaly, developpeur Fullstack Junior base a Abidjan.",
    },
  },
};
