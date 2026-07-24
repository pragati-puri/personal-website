import { ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

const detailGroups = [
  { heading: "Core features", key: "coreFeatures" },
  { heading: "Technologies used", key: "technologies" },
  { heading: "Impact / outcome", key: "impact" },
] as const;

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-semibold">{project.name}</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.summary}</p>
        </div>
        <span className="shrink-0 rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
          {project.status}
        </span>
      </div>

      <div className="mt-6 grid gap-5">
        {detailGroups.map(({ heading, key }) => (
          <section key={key}>
            <h3 className="font-display text-sm font-semibold">{heading}</h3>
            <ul className="mt-2 grid gap-1.5 text-sm leading-6 text-muted-foreground">
              {project[key].map((detail) => (
                <li className="flex gap-2" key={detail}>
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {detail}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.links.map((link) => (
          <a
            className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-primary-soft hover:text-primary"
            href={link.href}
            key={link.href}
            rel="noreferrer"
            target="_blank"
          >
            {link.label}
            <ExternalLink aria-hidden className="h-4 w-4" />
          </a>
        ))}
      </div>
    </article>
  );
}
