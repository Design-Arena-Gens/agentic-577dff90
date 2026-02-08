import { HeroSection } from "@/components/HeroSection";
import { SectionHeading } from "@/components/SectionHeading";
import { LearningPathGrid } from "@/components/LearningPathGrid";
import { InsightQuiz } from "@/components/InsightQuiz";
import { PracticePlanner } from "@/components/PracticePlanner";
import { NeuroBiologyHighlights } from "@/components/NeuroBiologyHighlights";
import { CaseStudyDeck } from "@/components/CaseStudyDeck";
import { SpotlightGallery } from "@/components/SpotlightGallery";
import { ResourceStack } from "@/components/ResourceStack";
import { TimelineExplorer } from "@/components/TimelineExplorer";
import { WellnessToolkit } from "@/components/WellnessToolkit";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 pb-24 text-slate-950">
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-50" />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pt-16 sm:px-10 lg:px-16">
        <HeroSection />

        <section id="learning-paths" className="space-y-12">
          <SectionHeading
            eyebrow="Learning paths"
            title="Curated psychoeducation labs that stack theory, experimentation, and reflection."
            description="Move beyond memorization. Each path threads together immersive labs, reflective prompts, and downloadable canvases so you can practice psychology like a builder."
          />
          <LearningPathGrid />
        </section>

        <section className="grid gap-10 xl:grid-cols-[3fr_2fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Micro assessment"
              title="Check your instincts with a rapid insight quiz."
              description="Three scenario-based questions test how you translate psychological frameworks into applied decisions."
            />
            <InsightQuiz />
          </div>
          <PracticePlanner />
        </section>

        <section className="space-y-10">
          <SectionHeading
            eyebrow="Neuro foundations"
            title="Bridge neurobiology and practice."
            description="Understand the neural mechanisms powering learning, regulation, and connection—then pair them with actionable nudges."
          />
          <NeuroBiologyHighlights />
        </section>

        <section className="space-y-10">
          <SectionHeading
            eyebrow="Case immersion"
            title="Step into real-world psychological puzzles."
            description="Tackle multi-layered case studies blending cognitive, behavioral, and cultural insights. Each scenario includes practitioner-grade debriefs."
          />
          <CaseStudyDeck />
        </section>

        <section className="space-y-10">
          <SectionHeading
            eyebrow="Spotlight mentors"
            title="Learn from trailblazers who rewrote how we study the mind."
            description="Analyze their contributions and translate their breakthroughs into today’s contexts."
          />
          <SpotlightGallery />
        </section>

        <section className="grid gap-10 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Evolution"
              title="Track psychology’s pivotal moments."
              description="Navigate a century of paradigm shifts and see how each milestone reshaped research, therapy, and everyday learning."
            />
            <TimelineExplorer />
          </div>
          <div id="toolkit" className="space-y-8">
            <SectionHeading
              eyebrow="Daily toolkit"
              title="Anchor learning with restorative rituals."
              description="Use these guided routines to protect your nervous system while deepening practice."
            />
            <WellnessToolkit />
          </div>
        </section>

        <section className="space-y-10">
          <SectionHeading
            eyebrow="Resource library"
            title="Extend your learning with curated communities and media."
            description="Subscribe, listen, and collaborate with educators, therapists, and researchers pushing psychoeducation forward."
          />
          <ResourceStack />
        </section>

        <footer className="rounded-3xl border border-slate-900/10 bg-white/80 p-10 text-center shadow-lg shadow-slate-200/70">
          <h2 className="text-2xl font-semibold text-slate-900">
            Ready to architect your psychology mastery plan?
          </h2>
          <p className="mt-4 text-sm text-slate-600">
            Pair a learning path with an applied project. Share your prototypes
            with the community ritual every Friday to get feedback and new
            collaborators.
          </p>
        </footer>
      </main>
    </div>
  );
}
