import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@morycoulibaly",
    icon: Icons.gitHub,
    link: "https://github.com/morycoulibaly",
  },
  {
    name: "LinkedIn",
    username: "Mory Coulibaly",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/fanzegue-mory-coulibaly-ab091b399",
  },
  {
    name: "Gmail",
    username: "mory.coulibaly",
    icon: Icons.gmail,
    link: "mailto:coulibalymory021@gmail.com",
  },
];
