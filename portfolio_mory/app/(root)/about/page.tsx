import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: `${pagesConfig.about.metadata.title} | Portfolio Mory Coulibaly`,
  description: pagesConfig.about.metadata.description,
};

const paragraphs = [
  `Je m'appelle Mory Coulibaly, j'ai 20 ans et je suis passionné par l'informatique, le développement logiciel et les nouvelles technologies. Tout a commencé avec l'obtention de mon Baccalauréat, marquant la fin de mon cycle secondaire et amplifiant mon désir de bâtir une carrière dans le domaine de l'informatique et de la création de solutions technologiques.`,
  `Après le BAC, j'ai intégré PIGIER Côte d'Ivoire, où j'ai suivi une formation en informatique. Cette expérience m'a permis d'acquérir de solides bases en programmation, en architecture des ordinateurs, en analyse des systèmes informatiques, en mathématiques appliquées à l'informatique et en conception de solutions numériques. Au cours de cette période, j'ai développé ma rigueur, mon esprit d'analyse et ma capacité à aborder des problématiques techniques de manière structurée.`,
  `Animé par l'envie d'aller plus loin et de me spécialiser davantage dans le développement d'applications modernes, j'ai ensuite rejoint Epitech dans le cadre du programme Wecode, où je poursuis actuellement ma formation en tant que Développeur Full-Stack. Cette formation m'a permis de renforcer mes compétences pratiques à travers la réalisation de projets concrets et l'utilisation de technologies largement adoptées dans l'industrie du logiciel.`,
  `Aujourd'hui, je développe des applications web en utilisant des technologies telles que HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js** et différents systèmes de gestion de bases de données. J'accorde une attention particulière à la qualité du code, aux performances des applications et à l'expérience utilisateur. J'apprécie particulièrement la conception d'interfaces modernes, intuitives et accessibles, tout en veillant à construire des solutions robustes côté serveur.`,
  `Tout au long de mon parcours, j'ai participé à plusieurs projets académiques et personnels qui m'ont permis de mettre en pratique mes connaissances, de développer mon autonomie et de renforcer ma capacité à résoudre des problèmes complexes. Ces expériences m'ont appris à travailler méthodiquement, à collaborer avec d'autres développeurs et à transformer des besoins en solutions concrètes.`,
  `Au-delà du développement, je suis une personne curieuse et ambitieuse qui cherche constamment à apprendre. Je m'intéresse à l'évolution des technologies, aux innovations du secteur numérique et aux opportunités qu'elles offrent pour répondre aux défis de notre société. Cette curiosité m'a également conduit à participer à des événements liés à l'innovation et à l'entrepreneuriat technologique, où j'ai eu l'occasion d'échanger avec des professionnels et des acteurs de l'écosystème numérique`,
  `Aujourd'hui, mon objectif est de continuer à évoluer en tant que développeur, d'acquérir une expertise toujours plus solide et de contribuer à des projets innovants à fort impact. Je suis convaincu que la technologie est un puissant levier de transformation et je souhaite mettre mes compétences au service de solutions utiles, performantes et accessibles`,
];

export default function AboutPage() {
  return (
    <PageContainer
      title={pagesConfig.about.title}
      description={pagesConfig.about.description}
      headerAlign="center"
    >
      <div className="mx-auto flex max-w-[90rem] flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" delay={0.15} className="rounded-3xl border border-border bg-muted p-8 shadow-sm">
          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <AnimatedText
                key={index}
                as="p"
                delay={0.2 + index * 0.05}
                className="text-base leading-8 text-foreground/85"
              >
                {paragraph}
              </AnimatedText>
            ))}
            <AnimatedText as="p" delay={0.2 + paragraphs.length * 0.05} className="text-base leading-8 text-foreground/85 font-semibold">
              Chaque ligne de code que j'écris représente une opportunité d'apprendre, d'innover et de créer de la valeur. Bienvenue dans mon portfolio, où je partage mon parcours, mes projets et ma passion pour le développement logiciel. 🚀
            </AnimatedText>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection direction="up" delay={0.25} className="mt-12 mx-auto max-w-[90rem] rounded-3xl border border-border bg-background/80 p-8 shadow-lg px-4 sm:px-6 lg:px-8">
        <AnimatedText as="h3" className="font-heading text-2xl mb-4 text-center">
          Mon parcours en bref
        </AnimatedText>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-muted p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Cycle secondaire</p>
            <p className="mt-3 text-lg font-semibold">Baccalauréat</p>
            <p className="mt-2 text-foreground/80 leading-7">
              Fin de mon cycle secondaire
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-muted p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Première formation</p>
            <p className="mt-3 text-lg font-semibold">PIGIER Côte d'Ivoire</p>
            <p className="mt-2 text-foreground/80 leading-7">
              Acquisition de bases en programmation, architecture informatique, analyse des systèmes et conception de solutions numériques.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-muted p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Spécialisation</p>
            <p className="mt-3 text-lg font-semibold">Epitech / Wecode</p>
            <p className="mt-2 text-foreground/80 leading-7">
              Renforcement des compétences en développement moderne et réalisation de projets concrets en Full-Stack.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-muted p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Technologies</p>
            <p className="mt-3 text-lg font-semibold">HTML, CSS, JavaScript...</p>
            <p className="mt-2 text-foreground/80 leading-7">
              Focus sur la qualité du code, les performances, l'expérience utilisateur et la création d'interfaces modernes et accessibles.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </PageContainer>
  );
}
