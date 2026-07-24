import { Download } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";
import portrait from "../assets/portrait.jpg";

const highlights = [
  { value: "10+", label: "Universities collaborated with" },
  { value: "1,000+", label: "Students supported" },
  { value: "$5,000", label: "International scholarship" },
];

type CareerHighlightProps = {
  value: string;
  label: string;
  reducedMotion: boolean;
};

function CareerHighlight({ value, label, reducedMotion }: CareerHighlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4, once: true });

  return (
    <motion.div
      ref={ref}
      animate={reducedMotion ? false : inView ? { opacity: 1, y: 0 } : {}}
      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <p className="font-display text-2xl font-bold text-primary">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
}

export function HomePage() {
  const reducedMotion = useReducedMotion() ?? false;
  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main aria-label="Home" id="main-content">
      <section className="relative overflow-hidden bg-[var(--gradient-hero)]">
        <motion.div
          animate={reducedMotion ? false : { backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle at 85% 20%, oklch(0.88 0.08 240 / 0.45), transparent 32%), radial-gradient(circle at 15% 85%, oklch(0.9 0.06 260 / 0.4), transparent 36%)",
            backgroundSize: "160% 160%",
          }}
          transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
        />
        <div className="relative mx-auto grid min-h-[calc(100vh-8.5rem)] max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            animate={reducedMotion ? false : "visible"}
            className="max-w-3xl"
            initial={reducedMotion ? false : "hidden"}
            transition={{ delayChildren: 0.1, staggerChildren: 0.1 }}
            variants={{ visible: { transition: { delayChildren: 0.1, staggerChildren: 0.1 } } }}
          >
            <motion.p
              className="font-mono text-sm text-primary"
              transition={{ duration: 0.45, ease: "easeOut" }}
              variants={heroVariants}
            >
              AI • Machine Learning • Software Development
            </motion.p>
            <motion.h1
              className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-6xl"
              transition={{ duration: 0.5, ease: "easeOut" }}
              variants={heroVariants}
            >
              Pragati Puri
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-muted-foreground md:text-xl"
              transition={{ duration: 0.5, ease: "easeOut" }}
              variants={heroVariants}
            >
              Computer Science student building technology that creates meaningful impact.
            </motion.p>
            <motion.div
              className="mt-8"
              transition={{ duration: 0.5, ease: "easeOut" }}
              variants={heroVariants}
            >
              <a
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
                download="Pragati_Puri_Resume.pdf"
                href={`${import.meta.env.BASE_URL}resume.pdf`}
              >
                <Download aria-hidden className="h-4 w-4" />
                Download resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            animate={reducedMotion ? false : { y: [0, -8, 0] }}
            className="relative mx-auto w-full max-w-sm"
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          >
            <div
              aria-hidden
              className="absolute -inset-5 rounded-[2.5rem] bg-[var(--gradient-primary)] opacity-20 blur-2xl"
            />
            <img
              alt="Pragati Puri"
              className="relative aspect-[4/5] w-full rounded-[2rem] border border-border object-cover shadow-[var(--shadow-card)]"
              height={896}
              src={portrait}
              width={768}
            />
          </motion.div>
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
            .map((project, index) => (
              <motion.div
                animate={reducedMotion ? false : undefined}
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                key={project.slug}
                transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
                viewport={{ amount: 0.25, once: true }}
                whileHover={reducedMotion ? undefined : { y: -4 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
          {highlights.map((highlight) => (
            <CareerHighlight key={highlight.label} reducedMotion={reducedMotion} {...highlight} />
          ))}
        </div>
      </section>
    </main>
  );
}
