# 📁 Guide : Ajouter un projet dans ton portfolio

Le fichier à modifier est : `config/projects.ts`

---

## Structure d'un projet

Chaque projet dans le tableau `Projects` a cette forme :

```typescript
{
  id: "mon-projet",                        // identifiant unique (sans espaces, tirets OK)
  companyName: "Nom du projet",           // affiché comme titre
  type: "Personal",                        // "Personal" ou "Professional"
  category: ["Frontend", "Web Dev"],      // voir liste des catégories ci-dessous
  shortDescription: "Description courte", // ~1-2 lignes, visible sur la carte
  websiteLink: "https://...",             // optionnel — lien vers le site en ligne
  githubLink: "https://github.com/...",   // optionnel — lien GitHub
  techStack: ["React", "Laravel", "MySQL"], // voir liste des techs ci-dessous
  startDate: new Date("2025-01-01"),
  endDate: new Date("2025-03-01"),
  companyLogoImg: "/projects/mon-projet/logo.png", // chemin depuis /public
  pagesInfoArr: [
    {
      title: "Nom de la page/section",
      description: "Ce que montre cette capture",
      imgArr: ["/projects/mon-projet/screenshot1.png"],
    },
  ],
  descriptionDetails: {
    paragraphs: [
      "Premier paragraphe de description longue.",
      "Deuxième paragraphe.",
    ],
    bullets: [
      "Point clé 1",
      "Point clé 2",
      "Point clé 3",
    ],
  },
}
```

---

## ✅ Catégories disponibles (`category`)

```
"Full Stack" | "Frontend" | "Backend" | "UI/UX" | "Web Dev" | "Mobile Dev" | "3D Modeling"
```

## ✅ Technologies disponibles (`techStack`)

```
"React" | "Vue.js" | "Next.js" | "React Native"
"TypeScript" | "JavaScript" | "HTML 5" | "CSS 3" | "Tailwind CSS"
"Laravel" | "NestJS" | "Flask" | "FastAPI" | "Django" | "express.js" | "Node.js"
"MySQL" | "PostgreSQL" | "MongoDB" | "Redis" | "Firebase" | "Supabase"
"Git" | "Docker" | "Python" | "PHP" | "Figma" | "Framer Motion"
... et beaucoup d'autres (voir config/constants.ts)
```

---

## 📸 Ajouter des images

1. Crée un dossier dans `public/projects/mon-projet/`
2. Mets-y ton logo (`logo.png`) et tes captures d'écran (`screenshot1.png`, etc.)
3. Référence ces chemins dans `companyLogoImg` et `imgArr`

**Si tu n'as pas encore d'images**, tu peux mettre `/logo.png` comme valeur temporaire.

---

## 🧑‍💻 Exemple complet : App mobile React Native

```typescript
{
  id: "app-mobile-rn",
  companyName: "App Mobile React Native",
  type: "Personal",
  category: ["Mobile Dev", "Full Stack"],
  shortDescription:
    "Application mobile cross-platform développée avec React Native et une API NestJS.",
  githubLink: "https://github.com/morycoulibaly/app-mobile",
  techStack: ["React Native", "NestJS", "MySQL", "Typescript", "Git"],
  startDate: new Date("2025-06-01"),
  endDate: new Date("2025-08-01"),
  companyLogoImg: "/projects/app-mobile-rn/logo.png",
  pagesInfoArr: [
    {
      title: "Écran d'accueil",
      description: "Liste des éléments avec filtres et recherche.",
      imgArr: ["/projects/app-mobile-rn/home.png"],
    },
  ],
  descriptionDetails: {
    paragraphs: [
      "Application mobile développée avec React Native pour Android et iOS.",
      "L'API backend est construite avec NestJS et connectée à une base MySQL.",
    ],
    bullets: [
      "Authentification JWT côté mobile et backend",
      "Navigation fluide avec React Navigation",
      "API REST documentée et testée",
    ],
  },
},
```

---

## 💡 Ordre d'affichage

Les projets s'affichent dans l'ordre où ils apparaissent dans le tableau `Projects`.

La ligne tout en bas du fichier :
```typescript
export const featuredProjects = Projects.slice(0, 3);
```
contrôle quels projets sont mis en avant sur la page d'accueil (les 3 premiers).
Pour en mettre 4, change `3` en `4`.