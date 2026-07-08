import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-xl border border-navy/10 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[16/9]">
        <Image src={project.image} alt={project.name} fill className="object-cover" />
        <span className="absolute left-4 top-4 rounded-md bg-teal px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-wide text-white">
          {project.status}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-base font-extrabold text-navy">{project.name}</h3>
        <p className="mt-2 text-xs font-bold text-muted">{project.location}</p>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-teal">{project.type}</p>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted">{project.summary}</p>
        <Link href={`/projects/${project.slug}`} className="mt-5 inline-flex text-sm font-black text-navy hover:text-teal">
          View Details →
        </Link>
      </div>
    </article>
  );
}
