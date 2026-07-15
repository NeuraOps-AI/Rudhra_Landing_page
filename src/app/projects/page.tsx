import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/home/ProjectCard";

const statuses = [
  ["ongoing", "Ongoing Projects"],
  ["upcoming", "Upcoming Projects"],
  ["completed", "Completed Projects"]
] as const;

export default function ProjectsPage() {
  return (
    <section className="section-pad">
      <div className="container-soft">
        <div className="max-w-3xl">
          <p className="eyebrow">Explore communities</p>
          <h1 className="mt-3 font-serif text-5xl font-semibold text-navy">
            Projects designed for real family life.
          </h1>
          <p className="mt-5 leading-8 text-muted">
            Browse Rudhra communities by their current stage and find the home that feels right
            for your family, timeline, and location needs.
          </p>
        </div>
        <div className="mt-12 grid gap-14">
          {statuses.map(([status, title]) => (
            <section key={status}>
              <h2 className="mb-6 font-serif text-3xl font-semibold text-navy">{title}</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((project) => project.status === status)
                  .map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
