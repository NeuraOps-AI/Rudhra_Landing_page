"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import type { ProjectStatus } from "@/types/project";
import { ProjectCard } from "@/components/home/ProjectCard";

const tabs: { label: string; value: ProjectStatus }[] = [
  { label: "Ongoing", value: "ongoing" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Completed", value: "completed" }
];

export function ProjectTabs() {
  const [active, setActive] = useState<ProjectStatus>("ongoing");
  const visible = projects.filter((project) => project.status === active).slice(0, 3);

  return (
    <section className="section-pad bg-white">
      <div className="container-soft">
        <div className="mb-8">
          <p className="eyebrow">Explore communities</p>
          <h2 className="heading-display mt-3 text-4xl md:text-5xl">
            Projects for every stage of your journey.
          </h2>
        </div>
        <div className="rounded-2xl border border-navy/10 bg-[linear-gradient(135deg,#FFFFFF_0%,#EEF5F8_100%)] p-3 shadow-[0_22px_60px_rgba(47,65,86,0.10)]">
          <div className="grid gap-5 lg:grid-cols-[15rem_minmax(0,1fr)]">
            <div className="rounded-2xl border border-white/80 bg-white/75 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur">
              <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.value}
                    type="button"
                    onClick={() => setActive(tab.value)}
                    className={`group relative overflow-hidden rounded-xl border px-5 py-4 text-left text-sm font-bold tracking-[-0.01em] transition duration-300 ${
                      active === tab.value
                        ? "border-navy bg-navy text-white shadow-[0_14px_30px_rgba(47,65,86,0.24)]"
                        : "border-navy/8 bg-beige/80 text-navy shadow-sm hover:border-teal/30 hover:bg-white hover:text-teal"
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-3 h-[calc(100%-1.5rem)] w-1 rounded-r-full transition ${
                        active === tab.value ? "bg-skyBlue" : "bg-transparent group-hover:bg-teal/35"
                      }`}
                    />
                    <span className="block whitespace-nowrap pl-2">
                      {tab.label} Projects
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {visible.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/projects" className="btn-primary inline-flex">View All Projects</Link>
        </div>
      </div>
    </section>
  );
}
