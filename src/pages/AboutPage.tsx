import portrait from "../assets/portrait.jpg";
import { education, skillGroups } from "../data/profile";

export function AboutPage() {
  return (
    <main className="mx-auto min-h-[calc(100vh-8.5rem)] max-w-6xl px-4 py-20" id="main-content">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">About</h1>
      <p className="mt-6 max-w-4xl text-lg leading-8 text-muted-foreground">
        I&apos;m a Computer Science Student at the University of Alberta. I am an emerging AI
        software developer interested in building thoughtful, expandable technology that solves real
        problems. Through my various experiences, I&apos;ve contributed to full-stack AI
        applications using TypeScript and Next.js, while my project work has strengthened my
        experience in mobile development, data-driven systems, and collaborative software delivery.
        Beyond development, I lead initiatives that support women in technology across Canada and
        bring a people-first perspective to the products I build.
      </p>
      <p className="mt-6 inline-flex rounded-xl border border-primary/30 bg-primary-soft px-5 py-3 text-base font-semibold text-primary shadow-[var(--shadow-soft)]">
        Open to internships across Canada.
      </p>
      <p className="mt-6 max-w-3xl text-muted-foreground">
        Fun fact: I love to coffee chat with people and know more about their journey. If you are
        someone who wants to have a quick chat, please do not hesitate to reach out to me ;)
      </p>

      <section
        className="mt-12 grid gap-8 md:grid-cols-5 md:items-start"
        aria-labelledby="education-heading"
      >
        <div className="relative md:col-span-2">
          <div
            className="absolute -inset-4 rounded-3xl bg-[var(--gradient-primary)] opacity-20 blur-2xl"
            aria-hidden
          />
          <img
            alt="Portrait of Pragati Puri"
            className="relative aspect-[4/5] w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-card)]"
            height={896}
            loading="lazy"
            src={portrait}
            width={768}
          />
        </div>

        <div className="md:col-span-3">
          <article className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <p className="font-mono text-sm text-primary">Education</p>
            <h2 className="mt-3 font-display text-2xl font-semibold" id="education-heading">
              {education.degree}
            </h2>
            <p className="mt-2 font-medium text-primary">{education.institution}</p>
            <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-medium text-foreground">Graduation</dt>
                <dd className="mt-1 text-muted-foreground">{education.expectedGraduation}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Location</dt>
                <dd className="mt-1 text-muted-foreground">{education.location}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-medium text-foreground">Scholarship</dt>
                <dd className="mt-1 text-muted-foreground">{education.scholarship}</dd>
              </div>
            </dl>
          </article>

          <a
            className="mt-6 inline-flex items-center rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            download="Pragati_Puri_Resume.pdf"
            href={`${import.meta.env.BASE_URL}resume.pdf`}
          >
            Download Resume
          </a>
        </div>
      </section>

      <section className="mt-16" aria-labelledby="skills-heading">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl" id="skills-heading">
          Technical Skills
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
              key={group.title}
            >
              <h3 className="font-display text-lg font-semibold">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={group.title}>
                {group.skills.map((skill) => (
                  <li
                    className="rounded-lg border border-border bg-surface px-3 py-1.5 font-mono text-xs font-medium text-foreground/80"
                    key={skill}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
