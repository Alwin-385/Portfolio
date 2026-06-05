import { Code2, Layers, Sparkles } from "lucide-react";

import { AnimationWrapper } from "@/components/animation/animation-wrapper";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionContainer } from "@/components/layout/section-container";
import { HeroSection } from "@/sections/hero";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/project-card";
import { InfoCard, ShowcaseCard } from "@/components/ui/showcase-card";
import { Tag } from "@/components/ui/tag";
import {
  BodyText,
  DescriptionText,
  HeroTitle,
  LabelText,
  MetadataText,
  SectionTitle,
} from "@/components/ui/typography";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <PageWrapper>
      <main id="main-content" className="relative flex flex-1 flex-col">
        <HeroSection />

        {/* About */}
        <SectionContainer id="about" label="About">
          <AnimationWrapper preset="fadeInUp">
            <div className="mx-auto max-w-2xl space-y-md text-center">
              <SectionTitle>About</SectionTitle>
              <DescriptionText>
                Full-stack engineer focused on AI-powered web applications,
                scalable architectures, and premium user experiences. I build
                products that feel as polished as they perform.
              </DescriptionText>
            </div>
          </AnimationWrapper>
        </SectionContainer>

        {/* Projects */}
        <SectionContainer id="projects" label="Projects">
          <AnimationWrapper preset="fadeInUp">
            <div className="space-y-lg">
              <div className="mx-auto max-w-2xl space-y-md text-center">
                <SectionTitle>Projects</SectionTitle>
                <DescriptionText>
                  Selected work spanning AI platforms, real-time systems, and
                  design systems.
                </DescriptionText>
              </div>

              <ShowcaseCard
                label="Featured"
                title="AI-Powered Developer Experience"
                description="Showcase cards use gradient borders and ambient glow — designed for hero features and highlighted work."
                status="active"
              >
                <div className="flex flex-wrap gap-md">
                  <Button variant="accent" size="sm">
                    View Project
                  </Button>
                  <Button variant="secondary" size="sm">
                    Learn More
                  </Button>
                </div>
              </ShowcaseCard>

              <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Neural Dashboard"
                  description="Real-time analytics platform with AI-driven insights and predictive modeling for engineering teams."
                  metadata="2025"
                  tags={["Next.js", "Python", "OpenAI"]}
                />
                <ProjectCard
                  title="Sync Engine"
                  description="High-performance data synchronization service with sub-50ms latency across distributed nodes."
                  metadata="2024"
                  tags={["Rust", "WebSocket", "PostgreSQL"]}
                />
                <ProjectCard
                  title="Design System"
                  description="Component library and token architecture powering consistent UI across multiple product surfaces."
                  metadata="2024"
                  tags={["React", "Tailwind", "Figma"]}
                />
              </div>
            </div>
          </AnimationWrapper>
        </SectionContainer>

        {/* Skills */}
        <SectionContainer id="skills" label="Skills">
          <AnimationWrapper preset="fadeInUp">
            <div className="space-y-lg">
              <div className="mx-auto max-w-2xl space-y-md text-center">
                <SectionTitle>Skills</SectionTitle>
                <DescriptionText>
                  Technologies and domains I work with daily.
                </DescriptionText>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-md">
                <Badge variant="tech">TypeScript</Badge>
                <Badge variant="tech">Next.js</Badge>
                <Badge variant="tech">React</Badge>
                <Badge variant="tech">Node.js</Badge>
                <Badge variant="tech">Python</Badge>
                <Badge variant="tech">PostgreSQL</Badge>
                <Tag accent="blue">OpenAI</Tag>
                <Tag accent="purple">LangChain</Tag>
                <Tag>Motion</Tag>
              </div>

              <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
                <InfoCard
                  icon={<Code2 className="size-5" />}
                  title="Full-Stack"
                  description="End-to-end product development from database schema to polished UI."
                  metadata="Core"
                />
                <InfoCard
                  icon={<Sparkles className="size-5" />}
                  title="AI Integration"
                  description="LLM-powered features, RAG pipelines, and intelligent automation workflows."
                  metadata="Focus"
                />
                <InfoCard
                  icon={<Layers className="size-5" />}
                  title="System Design"
                  description="Scalable architectures with performance-first engineering principles."
                  metadata="Expertise"
                />
              </div>
            </div>
          </AnimationWrapper>
        </SectionContainer>

        {/* Experience */}
        <SectionContainer id="experience" label="Experience">
          <AnimationWrapper preset="fadeInUp">
            <div className="mx-auto max-w-2xl space-y-md text-center">
              <SectionTitle>Experience</SectionTitle>
              <DescriptionText>
                Professional experience section — detailed timeline arriving in a
                future phase.
              </DescriptionText>
              <Badge variant="status" status="coming-soon">
                Coming Soon
              </Badge>
            </div>
          </AnimationWrapper>
        </SectionContainer>

        {/* Resume */}
        <SectionContainer id="resume" label="Resume">
          <AnimationWrapper preset="fadeInUp">
            <div className="mx-auto max-w-2xl space-y-md text-center">
              <SectionTitle>Resume</SectionTitle>
              <DescriptionText>
                Download a PDF copy of my resume or view the interactive version.
              </DescriptionText>
              <Button variant="secondary" disabled>
                Download Resume
              </Button>
            </div>
          </AnimationWrapper>
        </SectionContainer>

        {/* Contact */}
        <SectionContainer id="contact" label="Contact">
          <AnimationWrapper preset="fadeInUp">
            <div className="mx-auto max-w-2xl space-y-md text-center">
              <SectionTitle>Contact</SectionTitle>
              <DescriptionText>
                Open to full-time roles, contract work, and interesting
                collaborations. Reach out via LinkedIn or GitHub.
              </DescriptionText>
              <div className="flex flex-wrap items-center justify-center gap-md">
                <a
                  href={siteConfig.author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "accent" })}
                >
                  LinkedIn
                </a>
                <a
                  href={siteConfig.author.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "secondary" })}
                >
                  GitHub
                </a>
              </div>
            </div>
          </AnimationWrapper>
        </SectionContainer>

        {/* Design system preview — dev reference */}
        <SectionContainer id="design-system" label="Design System">
          <AnimationWrapper preset="fadeInUp">
            <div className="space-y-md rounded-[var(--radius-card-token)] border border-default bg-bg-secondary p-ds-xl">
              <SectionTitle as="h3">Design System</SectionTitle>
              <DescriptionText>
                Typography, buttons, badges, and cards from Phase 2 — preserved
                as a living reference.
              </DescriptionText>
              <div className="grid gap-md sm:grid-cols-2">
                <div className="space-y-xs">
                  <MetadataText>Hero</MetadataText>
                  <HeroTitle as="p" className="text-hero">
                    Aa
                  </HeroTitle>
                </div>
                <div className="space-y-xs">
                  <MetadataText>Section Title</MetadataText>
                  <SectionTitle as="p">Section</SectionTitle>
                </div>
                <div className="space-y-xs">
                  <MetadataText>Body</MetadataText>
                  <BodyText>The quick brown fox jumps over the lazy dog.</BodyText>
                </div>
                <div className="space-y-xs">
                  <MetadataText>Label</MetadataText>
                  <LabelText>Design System</LabelText>
                </div>
              </div>
              <div className="flex flex-wrap gap-md pt-md">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>
          </AnimationWrapper>
        </SectionContainer>
      </main>
    </PageWrapper>
  );
}
