import { Code2, Layers, Sparkles } from "lucide-react";

import { AnimationWrapper } from "@/components/animation/animation-wrapper";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionContainer } from "@/components/layout/section-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
      <div
        className="pointer-events-none fixed inset-x-0 top-0 h-[480px] bg-[var(--gradient-glow)]"
        aria-hidden
      />

      <main id="main-content" className="relative flex flex-1 flex-col">
        <SectionContainer id="design-system" label="Design System">
          <AnimationWrapper preset="fadeInUp">
            <div className="flex flex-col gap-3xl">
              {/* Typography */}
              <header className="mx-auto max-w-3xl space-y-lg text-center">
                <LabelText>Phase 2 — Design System</LabelText>
                <HeroTitle>
                  <span className="gradient-accent-text">{siteConfig.name}</span>
                </HeroTitle>
                <BodyText className="text-muted-foreground">
                  {siteConfig.role} · {siteConfig.tagline}
                </BodyText>
                <DescriptionText className="mx-auto max-w-xl">
                  Premium visual language inspired by Linear, Apple, and Raycast.
                  Built for dark mode with fluid typography and design tokens.
                </DescriptionText>
              </header>

              {/* Buttons */}
              <div className="space-y-md">
                <SectionTitle>Buttons</SectionTitle>
                <div className="flex flex-wrap items-center gap-md">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="accent">Accent</Button>
                </div>
              </div>

              {/* Badges & Tags */}
              <div className="space-y-md">
                <SectionTitle>Badges & Tags</SectionTitle>
                <div className="flex flex-wrap items-center gap-md">
                  <Badge variant="tech">TypeScript</Badge>
                  <Badge variant="tech">Next.js</Badge>
                  <Badge variant="status" status="active">
                    Active
                  </Badge>
                  <Badge variant="status" status="beta">
                    Beta
                  </Badge>
                  <Tag accent="blue">React</Tag>
                  <Tag accent="purple">AI</Tag>
                  <Tag>Motion</Tag>
                </div>
              </div>

              {/* Cards */}
              <div className="space-y-lg">
                <SectionTitle>Cards</SectionTitle>

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

              {/* Typography scale preview */}
              <div className="space-y-md rounded-[var(--radius-card-token)] border border-default bg-bg-secondary p-xl">
                <SectionTitle as="h3">Typography Scale</SectionTitle>
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
              </div>
            </div>
          </AnimationWrapper>
        </SectionContainer>
      </main>
    </PageWrapper>
  );
}
