import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/home/ProjectCard";

export function FeaturedProjects() {
  const featured = projects.filter((project) => project.status === "ongoing").slice(0, 3);

  return (
    <section className="pb-[clamp(3.5rem,7vw,6.5rem)] pt-4 sm:pt-4 lg:pt-4">
      <div className="container-soft">
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Our projects</p>
            <h2 className="heading-display mt-2 text-4xl md:text-5xl">
              Find A Home That Fits Your Dreams
            </h2>
          </div>
          <Link href="/projects" className="btn-secondary w-fit">View All Projects</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
