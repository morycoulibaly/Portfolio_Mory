import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mory Coulibaly | Developpeur Fullstack Junior",
    short_name: "Mory Coulibaly",
    description:
      "Portfolio de Mory Coulibaly, developpeur Fullstack Junior base a Abidjan, Cote d'Ivoire.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/profile-img.jpg",
        sizes: "64x64",
        type: "image/jpeg",
      },
      {
        src: "/profile-img.jpg",
        sizes: "64x64",
        type: "image/jpeg",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "software engineering",
      "developer",
      "web development",
      "fullstack development",
    ],
    lang: "fr",
    dir: "ltr",
    scope: "/",
  };
}
