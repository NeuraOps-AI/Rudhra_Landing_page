import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-xl border border-white/55 bg-[linear-gradient(145deg,rgba(238,231,226,0.96)_0%,rgba(226,216,210,0.98)_54%,rgba(186,205,214,0.92)_100%)] shadow-[0_18px_46px_rgba(47,65,86,0.22)] backdrop-blur transition hover:-translate-y-1 hover:border-white/80 hover:shadow-[0_26px_62px_rgba(47,65,86,0.28)]">
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
