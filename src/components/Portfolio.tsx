import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Mail, MapPin, GraduationCap, Brain, Users,
  Download, ArrowRight, ExternalLink, Code2, Sparkles, Trophy,
  Briefcase, Wrench, Smartphone, BarChart3, Calendar,
  Send, FileText, Menu, X,
} from "lucide-react";

function Github(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.95.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.9-.39s1.98.13 2.9.39c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z"/>
    </svg>
  );
}

function Linkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/>
    </svg>
  );
}
import heroImg from "@/assets/hero.jpg";
import portraitImg from "@/assets/portrait.jpg";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "leadership", label: "Leadership" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Leadership />
        <Skills />
        <Journey />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Scroll progress ---------- */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-primary"
    />
  );
}

/* ---------- Navbar ---------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
            scrolled ? "glass shadow-[var(--shadow-soft)]" : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 font-display font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--gradient-primary)] text-primary-foreground">
              PP
            </span>
            <span className="hidden sm:inline">Pragati Puri</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.03] lg:inline-flex"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="rounded-lg p-2 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="glass mt-2 rounded-2xl p-3 lg:hidden">
            <ul className="grid gap-1">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-primary-soft"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------- Section helpers ---------- */
function Section({
  id, eyebrow, title, subtitle, children, className = "",
}: {
  id: string; eyebrow?: string; title?: string; subtitle?: string;
  children: React.ReactNode; className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4">
        {(eyebrow || title) && (
          <FadeIn className="mb-12 max-w-2xl">
            {eyebrow && (
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-primary-soft px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                <Sparkles className="h-3 w-3" /> {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>
            )}
          </FadeIn>
        )}
        {children}
      </div>
    </section>
  );
}

function FadeIn({
  children, className = "", delay = 0, y = 24,
}: { children: React.ReactNode; className?: string; delay?: number; y?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <motion.div style={{ y, opacity }} className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for Summer 2026 internships
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
          >
            PRAGATI <span className="text-gradient">PURI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-lg font-medium text-foreground/80 md:text-xl"
          >
            Computer Science Student at the University of Alberta
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-1 font-mono text-sm text-primary"
          >
            AI • Machine Learning • Software Development
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg"
          >
            Building technology that creates meaningful impact through software and
            artificial intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Pragati_Puri_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-primary-soft"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground hover:text-primary">
              Contact Me <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 grid grid-cols-2 gap-3 text-sm sm:grid-cols-2"
          >
            {[
              { icon: MapPin, label: "Edmonton, Alberta" },
              { icon: GraduationCap, label: "University of Alberta" },
              { icon: Brain, label: "Amii Machine Learning Fellow" },
              { icon: Users, label: "Director, Women in Tech Council" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 rounded-xl border border-border bg-card/60 px-3 py-2 text-muted-foreground backdrop-blur">
                <b.icon className="h-4 w-4 shrink-0 text-primary" />
                <span className="truncate">{b.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Illustration */}
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-6 rounded-[40%] bg-[var(--gradient-primary)] opacity-20 blur-3xl" aria-hidden />
            <img
              src={heroImg}
              alt="Pragati Puri"
              width={1024}
              height={1024}
              className="relative z-10 h-full w-full rounded-[40%] object-cover"
            />

            {/* Floating icons */}
            <FloatingBadge className="left-2 top-10" delay={0}>
              <Code2 className="h-5 w-5 text-primary" />
              <span className="text-xs font-medium">Code</span>
            </FloatingBadge>
            <FloatingBadge className="right-4 top-24" delay={0.4}>
              <Brain className="h-5 w-5 text-primary" />
              <span className="text-xs font-medium">ML</span>
            </FloatingBadge>
            <FloatingBadge className="bottom-20 left-0" delay={0.8}>
              <BarChart3 className="h-5 w-5 text-primary" />
              <span className="text-xs font-medium">Data</span>
            </FloatingBadge>
            <FloatingBadge className="bottom-8 right-8" delay={1.2}>
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-xs font-medium">AI</span>
            </FloatingBadge>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function FloatingBadge({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 + delay }}
      className={`absolute z-20 ${className}`}
    >
      <div className="animate-float flex items-center gap-1.5 rounded-xl border border-border bg-card/90 px-3 py-2 shadow-[var(--shadow-card)] backdrop-blur" style={{ animationDelay: `${delay}s` }}>
        {children}
      </div>
    </motion.div>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <Section id="about" eyebrow="About" title="About Me">
      <div className="grid gap-10 md:grid-cols-5 md:items-start">
        <FadeIn className="md:col-span-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[var(--gradient-primary)] opacity-20 blur-2xl" aria-hidden />
            <img
              src={portraitImg}
              alt="Portrait of Pragati Puri"
              width={768}
              height={896}
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-card)]"
            />
          </div>
        </FadeIn>

        <div className="md:col-span-3">
          <FadeIn>
            <p className="text-lg leading-relaxed text-foreground/85">
              I am a Computing Science student at the University of Alberta with
              interests in machine learning, software engineering, and technology
              for social good. Through leadership positions, AI fellowships, and
              hands-on development projects, I enjoy building impactful solutions
              while continuously learning new technologies.
            </p>
          </FadeIn>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Brain, title: "Machine Learning", body: "Building AI systems to solve real-world problems." },
              { icon: Code2, title: "Software Development", body: "Developing scalable web and mobile applications." },
              { icon: Users, title: "Leadership", body: "Creating opportunities and communities in technology." },
            ].map((c, i) => (
              <FadeIn key={c.title} delay={0.1 * i}>
                <div className="group h-full rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]">
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-semibold">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Experience ---------- */
const EXPERIENCE = [
  {
    role: "Machine Learning Fellow",
    org: "Alberta Machine Intelligence Institute (Amii)",
    period: "May 2026 – Present",
    icon: Brain,
    points: [
      "Completing intensive AI/ML bootcamp with mentorship from industry experts",
      "Working on an AI for social good project in a multidisciplinary team",
      "Developing an AI/ML model addressing a real-world social good challenge",
    ],
  },
  {
    role: "Director of Women in Tech Council",
    org: "Computing Councils of Canada",
    period: "Oct 2025 – Present",
    icon: Users,
    points: [
      "Led national initiatives across Canadian universities, impacting 1,000+ students",
      "Promoted inclusion and support for women pursuing computing careers",
      "Organized and facilitated national-level events across 10+ universities",
    ],
  },
  {
    role: "Vice President Finance",
    org: "Undergraduate Association of Computing Science",
    period: "Oct 2025 – Present",
    icon: Briefcase,
    points: [
      "Managing real-to-real finances for a 1,200+ member student association",
      "Administering hosting and web-service accounts including DigitalOcean and NameCheap",
      "Ensuring timely payments and secure credential management",
    ],
  },
  {
    role: "Soar With Mentor Program Mentee",
    org: "Dell Technologies",
    period: "Oct 2025 – Mar 2026",
    icon: Briefcase,
    points: [
      "Earned Proven Professional GenAI Foundations Credential as Engagement Prize Winner",
      "Built professional and leadership skills with mentors and industry peers",
      "Served as Volunteer Judge encouraging problem-solving and teamwork among young women in STEM",
    ],
  },
];

function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience" className="bg-surface">
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-1/2" aria-hidden />
        <div className="space-y-8">
          {EXPERIENCE.map((e, i) => (
            <FadeIn key={e.role} delay={0.05 * i}>
              <div className={`relative grid gap-4 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                    <Calendar className="h-3 w-3" /> {e.period}
                  </div>
                </div>
                <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                    <h3 className="font-display text-lg font-semibold">{e.role}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{e.org}</p>
                    <ul className={`mt-4 space-y-1.5 text-sm text-muted-foreground ${i % 2 ? "md:[&>li]:justify-end" : ""}`}>
                      {e.points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute left-4 top-2 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border border-border bg-card text-primary shadow-sm md:left-1/2">
                  <e.icon className="h-4 w-4" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Projects ---------- */
const PROJECTS = [
  {
    title: "Android Event Management Application",
    tech: ["Java", "Android Studio", "Firebase"],
    desc: "Lottery-based event management app with real-time registration, waitlists, invitation workflows, organizer dashboard, and CSV exports. Built in a 6-person team following Figma mockups.",
    github: "https://github.com/CMPUT301W26cipher/cipher-events",
    demo: "https://github.com/CMPUT301W26cipher/cipher-events",
    icon: Smartphone,
  },
  {
    title: "TaskZen",
    tech: ["Python", "Streamlit", "SQLite", "Pandas", "Plotly"],
    desc: "Full-stack task organizer with analytics dashboards, task tracking, and data visualization. Built collaboratively at HackED 2025.",
    github: "https://github.com/Pragati-Puri/HackED_2025",
    demo: "https://github.com/Pragati-Puri/HackED_2025",
    icon: BarChart3,
  },
];

function Projects() {
  return (
    <Section id="projects" eyebrow="Work" title="Featured Projects" subtitle="Selected projects across mobile, AI, and full-stack development.">
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <FadeIn key={p.title} delay={0.05 * i}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--gradient-subtle)]">
                <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid h-20 w-20 place-items-center rounded-2xl bg-card shadow-[var(--shadow-glow)] transition-transform group-hover:scale-110">
                    <p.icon className="h-10 w-10 text-primary" />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md bg-primary-soft px-2 py-0.5 font-mono text-xs text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex gap-2">
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-3 py-2 text-xs font-semibold text-background transition-transform hover:scale-[1.03]">
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </a>
                  <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-semibold hover:bg-primary-soft">
                    <ExternalLink className="h-3.5 w-3.5" /> Demo
                  </a>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}

        {/* Coming soon */}
        <FadeIn delay={0.1} className="md:col-span-2">
          <article className="relative overflow-hidden rounded-2xl border border-dashed border-primary/40 bg-[var(--gradient-subtle)] p-8 md:p-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--gradient-primary)] opacity-15 blur-3xl" aria-hidden />
            <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-foreground" /> In Progress
                </div>
                <h3 className="font-display text-2xl font-bold md:text-3xl">
                  AI Nutrition Recommendation System
                </h3>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Developing an AI-powered system that combines nutritional guidelines
                  and health indicators to generate personalized nutrition recommendations.
                </p>
              </div>
              <div className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl bg-card shadow-[var(--shadow-glow)]">
                <Sparkles className="h-10 w-10 text-primary" />
              </div>
            </div>
          </article>
        </FadeIn>
      </div>
    </Section>
  );
}

/* ---------- Leadership / Stats ---------- */
function CountUp({ end, suffix = "", prefix = "", duration = 1.6 }: { end: number; suffix?: string; prefix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(end * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);
  const display = end % 1 === 0 ? Math.round(val).toString() : val.toFixed(1);
  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

function Leadership() {
  const stats = [
    { value: 10, suffix: "+", label: "Universities Collaborated With" },
    { value: 1000, suffix: "+", label: "Students Impacted" },
    { value: 5000, prefix: "$", label: "International Undergraduate Scholarship" },
    { value: 3.8, label: "Current GPA" },
  ];
  return (
    <Section id="leadership" eyebrow="Impact" title="Leadership & Impact" className="bg-surface">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={0.06 * i}>
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-soft opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
              <div className="relative">
                <Trophy className="h-5 w-5 text-primary" />
                <div className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
                  <CountUp end={s.value} suffix={s.suffix} prefix={s.prefix} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Skills ---------- */
const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: Code2,
    items: ["Python", "SQL", "SQLite", "PostgreSQL", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Data Science & AI",
    icon: Brain,
    items: ["Pandas", "NumPy", "Matplotlib", "Plotly"],
  },
  {
    title: "Development",
    icon: Smartphone,
    items: ["Android Studio", "Firebase", "Streamlit"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "GitHub Actions", "VS Code"],
  },
];

function Skills() {
  return (
    <Section id="skills" eyebrow="Stack" title="Technical Skills">
      <div className="grid gap-5 md:grid-cols-2">
        {SKILL_GROUPS.map((g, i) => (
          <FadeIn key={g.title} delay={0.05 * i}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/40">
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-border bg-surface px-3 py-1.5 font-mono text-xs font-medium text-foreground/80 transition-colors hover:border-primary/40 hover:bg-primary-soft hover:text-primary"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Journey ---------- */
const JOURNEY = [
  { year: "2025", title: "TaskZen", desc: "Built a full-stack task organizer at HackED 2025." },
  { year: "2025", title: "Dell Soar With Mentor Program", desc: "Earned Proven Professional GenAI Foundations Credential as an Engagement Prize Winner." },
  { year: "2025", title: "Vice President Finance", desc: "Managing finances and operations for UofA's 1,200+ member Computing Science student association." },
  { year: "2025", title: "Director, Women in Tech Council", desc: "Leading national initiatives for women in tech across 10+ Canadian universities." },
  { year: "2026", title: "Android Event Management App", desc: "Shipped a lottery-based event management platform built in a 6-person team." },
  { year: "2026", title: "Amii Machine Learning Fellowship", desc: "Joining the Amii ML Fellows cohort for intensive AI bootcamp and social good project." },
];

function Journey() {
  return (
    <Section id="journey" eyebrow="Timeline" title="My Journey" className="bg-surface">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-border" aria-hidden />
        <div className="space-y-6">
          {JOURNEY.map((j, i) => (
            <FadeIn key={j.title + i} delay={0.04 * i}>
              <div className="relative pl-12">
                <div className="absolute left-4 top-3 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-card" />
                <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:border-primary/40">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-primary-soft px-2 py-0.5 font-mono text-xs font-semibold text-primary">{j.year}</span>
                    <h3 className="font-display text-base font-semibold">{j.title}</h3>
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{j.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Resume ---------- */
function Resume() {
  return (
    <Section id="resume" eyebrow="Document" title="Resume" subtitle="Download or preview my full resume.">
      <FadeIn>
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
          <div className="grid gap-0 md:grid-cols-[1fr_1fr]">
            <div className="relative aspect-[3/4] bg-[var(--gradient-subtle)] md:aspect-auto">
              <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
              <div className="absolute inset-6 rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <div className="h-3 w-2/3 rounded bg-foreground/80" />
                <div className="mt-2 h-2 w-1/3 rounded bg-muted-foreground/40" />
                <div className="mt-6 space-y-2">
                  {[90, 80, 70, 85, 60, 75, 50, 65].map((w, i) => (
                    <div key={i} className="h-1.5 rounded bg-muted-foreground/20" style={{ width: `${w}%` }} />
                  ))}
                </div>
                <div className="mt-6 h-2 w-1/4 rounded bg-primary/60" />
                <div className="mt-3 space-y-2">
                  {[80, 70, 60].map((w, i) => (
                    <div key={i} className="h-1.5 rounded bg-muted-foreground/20" style={{ width: `${w}%` }} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 p-8 md:p-10">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                <FileText className="h-3.5 w-3.5" /> Latest version
              </div>
              <h3 className="font-display text-2xl font-bold md:text-3xl">Pragati Puri — Resume</h3>
              <p className="text-muted-foreground">
                Computer Science, University of Alberta. Experience across machine
                learning, software engineering, and tech leadership.
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <a
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  download="Pragati_Puri_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </a>
                <a
                  href="mailto:pragati.puri@ualberta.ca"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold hover:bg-primary-soft"
                >
                  <Mail className="h-4 w-4" /> Request via Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [sent, setSent] = useState(false);

  const cards = [
    { icon: Mail, label: "Email", value: "pragati.puri@ualberta.ca", href: "mailto:pragati.puri@ualberta.ca" },
    { icon: Linkedin, label: "LinkedIn", value: "/in/pragatipuri187", href: "https://www.linkedin.com/in/pragatipuri187/" },
    { icon: Github, label: "GitHub", value: "@pragati-puri", href: "https://github.com/pragati-puri" },
  ];

  return (
    <Section id="contact" eyebrow="Contact" title="Let's Connect" subtitle="Open to internships, collaborations, and a good conversation.">
      <div className="grid gap-3 md:grid-cols-3">
        {cards.map((c, i) => (
          <FadeIn key={c.label} delay={0.05 * i}>
            <a
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{c.label}</div>
                <div className="truncate text-sm font-semibold text-foreground">{c.value}</div>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const name = data.get("name");
            const email = data.get("email");
            const message = data.get("message");
            const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
            window.location.href = `mailto:pragati.puri@ualberta.ca?subject=${encodeURIComponent("Portfolio contact from " + name)}&body=${body}`;
            setSent(true);
          }}
          className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Name" name="name" required placeholder="Your name" />
            <Field label="Email" name="email" type="email" required placeholder="you@example.com" />
          </div>
          <div className="mt-4">
            <Field label="Message" name="message" required textarea placeholder="Tell me about the opportunity or what you're working on..." />
          </div>
          <div className="mt-6 flex items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">I usually reply within 1–2 days.</p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              {sent ? "Opening email..." : "Send Message"} <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </FadeIn>
    </Section>
  );
}

function Field({
  label, name, type = "text", required, placeholder, textarea,
}: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string; textarea?: boolean;
}) {
  const baseCls = "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} placeholder={placeholder} rows={5} className={baseCls} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={baseCls} />
      )}
    </label>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <div className="font-display text-lg font-bold">PRAGATI PURI</div>
          <p className="text-sm text-muted-foreground">Computer Science Student</p>
          <p className="mt-1 text-xs text-muted-foreground">© 2026 All Rights Reserved</p>
        </div>
        <div className="flex items-center gap-2">
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/pragatipuri187/", label: "LinkedIn" },
            { icon: Github, href: "https://github.com/pragati-puri", label: "GitHub" },
            { icon: Mail, href: "mailto:pragati.puri@ualberta.ca", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              aria-label={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary-soft hover:text-primary"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
