import { siteConfig } from "@/data/site";
import { getEmailHref } from "@/lib/email-link";

export const contactIntro = {
  eyebrow: "Contact",
  title: "Let's Build Something Meaningful",
  description:
    "I'm always interested in discussing software engineering, AI-powered products, startup ideas, and exciting opportunities.",
};

const contactEmail = siteConfig.author.email ?? "alwinbaby385@gmail.com";

export const contactInfo = {
  email: contactEmail,
  emailHref: getEmailHref(contactEmail),
  github: siteConfig.author.github ?? "https://github.com/Alwin-385",
  linkedin:
    siteConfig.author.linkedin ??
    "https://www.linkedin.com/in/alwin-baby-a4a947297",
  owner: siteConfig.author.name,
} as const;

export const contactCta = {
  primary: "Get In Touch",
  secondaryGithub: "GitHub",
  secondaryLinkedin: "LinkedIn",
} as const;

export const contactChannels = [
  {
    id: "email",
    label: "Email",
    value: contactInfo.email,
    href: contactInfo.emailHref,
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: "Alwin-385",
    href: contactInfo.github,
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "alwin-baby",
    href: contactInfo.linkedin,
    external: true,
  },
] as const;
