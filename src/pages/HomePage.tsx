import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export function HomePage() {
  return (
    <main aria-label="Home" id="main-content">
      <section className="bg-[var(--gradient-hero)]">
        <div className="mx-auto flex min-h-[calc(100vh-8.5rem)] max-w-6xl items-center px-4 py-20">
          <div className="max-w-3xl">
            <p className="font-mono text-sm text-primary">
              AI • Machine Learning • Software Development
            </p>
            <h1 className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-6xl">
              Pragati Puri
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Computer Science student building technology that creates meaningful impact.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-sm text-primary">Selected work</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Featured projects
            </h2>
          </div>
          <a className="text-sm font-medium text-primary hover:underline" href="#/projects">
            Explore all projects
          </a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
        </div>
      </section>
    </main>
  );
}
