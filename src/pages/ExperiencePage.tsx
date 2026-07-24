import { experience, leadership, timeline } from "../data/profile";

export function ExperiencePage() {
  return (
    <main className="mx-auto min-h-[calc(100vh-8.5rem)] max-w-6xl px-4 py-20" id="main-content">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Experience</h1>
      <p className="mt-4 text-muted-foreground">
        Professional experience, leadership, and career milestones.
      </p>

      <section className="mt-12" aria-labelledby="professional-experience-heading">
        <h2
          className="text-2xl font-bold tracking-tight md:text-3xl"
          id="professional-experience-heading"
        >
          Professional Experience
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {experience.map((role) => (
            <article
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
              key={role.role}
            >
              <p className="font-mono text-sm text-primary">{role.period}</p>
              <h3 className="mt-3 font-display text-xl font-semibold">{role.role}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{role.organization}</p>
              <ul className="mt-5 grid gap-2 text-sm leading-6 text-muted-foreground">
                {role.bullets.map((bullet) => (
                  <li className="flex gap-2" key={bullet}>
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16" aria-labelledby="leadership-heading">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl" id="leadership-heading">
          Leadership
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {leadership.map((role) => (
            <article
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
              key={role.role}
            >
              <p className="font-mono text-sm text-primary">{role.period}</p>
              <h3 className="mt-3 font-display text-xl font-semibold">{role.role}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{role.organization}</p>
              <ul className="mt-5 grid gap-2 text-sm leading-6 text-muted-foreground">
                {role.bullets.map((bullet) => (
                  <li className="flex gap-2" key={bullet}>
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16" aria-labelledby="timeline-heading">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl" id="timeline-heading">
          Timeline
        </h2>
        <ol className="relative mt-6 grid gap-5 border-l border-border pl-8">
          {timeline.map((milestone) => (
            <li className="relative" key={`${milestone.date}-${milestone.title}`}>
              <span
                aria-hidden
                className="absolute -left-[2.3rem] top-2 h-3 w-3 rounded-full border-2 border-primary bg-card"
              />
              <article className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                <p className="font-mono text-xs font-semibold text-primary">{milestone.date}</p>
                <h3 className="mt-2 font-display text-lg font-semibold">{milestone.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                  {milestone.description}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
