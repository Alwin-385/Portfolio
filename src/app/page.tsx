import { AnimationWrapper } from "@/components/animation/animation-wrapper";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionContainer } from "@/components/layout/section-container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <PageWrapper>
      <main id="main-content" className="flex flex-1 flex-col">
        <SectionContainer id="foundation" label="Foundation">
          <AnimationWrapper preset="fadeInUp">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
              <div className="space-y-3">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Phase 1 — Foundation
                </p>
                <h1 className="font-heading text-3xl font-semibold tracking-tight xs:text-4xl md:text-5xl">
                  {siteConfig.name}
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  {siteConfig.role}
                </p>
                <p className="text-base text-muted-foreground">
                  {siteConfig.tagline}
                </p>
              </div>

              <Card className="w-full text-left">
                <CardHeader>
                  <CardTitle>Architecture Ready</CardTitle>
                  <CardDescription>
                    Production-grade foundation with Motion, Lenis, dark theme,
                    SEO, and reusable component systems. Portfolio sections
                    arrive in Phase 2.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3">
                  <Button>Primary Action</Button>
                  <Button variant="outline">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                </CardContent>
              </Card>
            </div>
          </AnimationWrapper>
        </SectionContainer>
      </main>
    </PageWrapper>
  );
}
