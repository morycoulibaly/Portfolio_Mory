export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "portfolio",
    contibutionDescription:
      "Personnalisation d'un portfolio Next.js oriente recruteur avec SEO, projets, competences et contact.",
    repoOwner: "morycoulibaly",
    link: "https://github.com/morycoulibaly/portfolio",
  },
  {
    repo: "dashboard-gestion",
    contibutionDescription:
      "Application fullstack de gestion avec frontend React, backend Laravel et base de donnees MySQL.",
    repoOwner: "morycoulibaly",
    link: "https://github.com/morycoulibaly/dashboard-gestion",
  },
  {
    repo: "api-services",
    contibutionDescription:
      "Prototype d'API REST structuree avec NestJS, Flask et MySQL pour renforcer les bases backend.",
    repoOwner: "morycoulibaly",
    link: "https://github.com/morycoulibaly/api-services",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
