import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Hero } from "@/components/home/Hero";
import { HomeFinderCTA } from "@/components/home/HomeFinderCTA";
import { LifestyleShowcase } from "@/components/home/LifestyleShowcase";
import { ProjectTabs } from "@/components/home/ProjectTabs";
import { TrustMetrics } from "@/components/home/TrustMetrics";

const familyReasons = [
  {
    title: "Quality you can rely on",
    copy: "Materials, planning, and execution are treated as long-term commitments."
  },
  {
    title: "Clear and transparent",
    copy: "From first inquiry to possession, families get practical guidance and honest details."
  },
  {
    title: "Delivered with pride",
    copy: "Projects are shaped by a team committed to engineered integrity and customer trust."
  }
];

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <LifestyleShowcase />
      <FeaturedProjects />
      <ProjectTabs />
      <section id="why-rudhra" className="section-pad bg-beige">
        <div className="container-soft">
          <div className="rounded-2xl bg-white p-6 shadow-soft md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="eyebrow">Why families choose Rudhra</p>
                <h2 className="heading-display mt-3 text-4xl">
                  Built With Care. Backed By Trust.
                </h2>
                <div className="mt-5 h-1 w-14 rounded-full bg-teal" />
                <p className="mt-6 text-sm leading-7 text-muted">
                  Every project we deliver is a promise we keep.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {familyReasons.map((reason) => (
                  <div key={reason.title} className="border-l border-navy/15 pl-5">
                    <div className="mb-4 h-11 w-11 rounded-xl border border-navy/15 bg-mist" />
                    <h3 className="text-base font-extrabold text-navy">{reason.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{reason.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeFinderCTA />
    </>
  );
}
