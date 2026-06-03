import { PageShell } from "@/components/layout/PageShell";
import { AnswerSummary } from "@/components/sections/AnswerSummary";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Platforms } from "@/components/sections/Platforms";
import { Preview } from "@/components/sections/Preview";
import { Showcase } from "@/components/sections/Showcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyCreators } from "@/components/sections/WhyCreators";
import { Workflow } from "@/components/sections/Workflow";

export function HomePage() {
  return (
    <PageShell>
      <main>
        <Hero />
        <AnswerSummary />
        <Showcase />
        <Platforms />
        <Features />
        <Workflow />
        <Preview />
        <WhyCreators />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
    </PageShell>
  );
}
