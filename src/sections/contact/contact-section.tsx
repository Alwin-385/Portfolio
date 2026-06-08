"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { m } from "motion/react";

import {
  contactCardReveal,
  contactContentItem,
  contactContentStagger,
} from "@/animations/contact-variants";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SocialIcon } from "@/components/navigation/social-icon";
import { contactInfo, contactIntro } from "@/data/contact";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

const socialActions = [
  {
    id: "github",
    label: "GitHub",
    href: contactInfo.github,
    icon: "github" as const,
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: contactInfo.linkedin,
    icon: "linkedin" as const,
    external: true,
  },
];

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionContainer
      id="contact"
      label="Contact"
      description={contactIntro.description}
      className="section-contact relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="contact-aurora-primary hero-aurora absolute -left-1/4 top-0 h-[520px] w-[520px] rounded-full bg-accent-blue/10 blur-3xl" />
        <div className="contact-aurora-secondary absolute -right-1/4 bottom-0 h-[460px] w-[460px] rounded-full bg-accent-purple/10 blur-3xl" />
        <div className="section-contact-grid absolute inset-0 opacity-60" />
      </div>

      <div className="relative flex w-full flex-col gap-10 md:gap-14">
        <SectionHeading
          index="08"
          eyebrow={contactIntro.eyebrow}
          title={contactIntro.title}
          description={contactIntro.description}
          titleId="contact-heading"
        />

        <m.div
          className="relative mx-auto w-full max-w-2xl"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={contactCardReveal}
        >
          <article
            className={cn(
              "relative w-full overflow-hidden rounded-[var(--radius-card-token)]",
              "border border-default bg-bg-elevated/80 shadow-elevation-xl backdrop-blur-md",
              "p-8 sm:p-10 md:p-12",
            )}
          >
            {/* Top accent line */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-blue/60 to-transparent"
              aria-hidden
            />
            {/* Bottom accent line */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-purple/40 to-transparent"
              aria-hidden
            />
            {/* Ambient inner glow */}
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,oklch(0.68_0.16_250/8%)_0%,transparent_70%)]"
              aria-hidden
            />

            <m.div
              className="relative flex w-full flex-col items-center gap-8 text-center"
              variants={contactContentStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Primary email CTA */}
              <m.div variants={contactContentItem} className="flex flex-col items-center gap-3">
                <m.a
                  href={contactInfo.emailHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Email ${contactInfo.owner}`}
                  className={cn(
                    "group inline-flex items-center gap-3 rounded-[var(--radius-button-token)]",
                    "border border-transparent gradient-accent px-7 py-4 text-white",
                    "text-base font-semibold shadow-elevation-lg",
                    "transition-all duration-300 hover:brightness-110 hover:shadow-glow-accent",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
                  )}
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                >
                  <Mail className="size-5" aria-hidden />
                  Send me an email
                  <ArrowUpRight className="size-4 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </m.a>
                <p className="text-sm text-muted-foreground">
                  <a
                    href={contactInfo.emailHref}
                    className="text-accent-blue transition-colors hover:text-accent-purple hover:underline underline-offset-4"
                  >
                    {contactInfo.email}
                  </a>
                </p>
              </m.div>

              {/* Divider */}
              <m.div
                variants={contactContentItem}
                className="flex w-full items-center gap-4"
              >
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-border-default" />
                <span className="text-label text-muted-foreground/60">or connect on</span>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-border-default" />
              </m.div>

              {/* Secondary social icons */}
              <m.div
                variants={contactContentItem}
                className="flex items-center gap-4"
              >
                {socialActions.map(({ id, label, href, icon }) => (
                  <m.a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={cn(
                      "touch-manipulation inline-flex flex-col items-center gap-1.5 rounded-[var(--radius-button-token)] px-5 py-3",
                      "border border-default bg-bg-secondary text-muted-foreground transition-all duration-200",
                      "hover:border-border-accent hover:bg-bg-elevated hover:text-foreground hover:shadow-elevation-sm",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
                    )}
                    whileHover={prefersReducedMotion ? undefined : { scale: 1.05, y: -2 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
                  >
                    <SocialIcon name={icon} className="size-5" />
                    <span className="text-label">{label}</span>
                  </m.a>
                ))}
              </m.div>

              {/* Closing note */}
              <m.p
                variants={contactContentItem}
                className="text-sm text-muted-foreground/70"
              >
                — {contactInfo.owner}
              </m.p>
            </m.div>
          </article>
        </m.div>
      </div>
    </SectionContainer>
  );
}
