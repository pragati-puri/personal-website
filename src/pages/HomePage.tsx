export function HomePage() {
  return (
    <main aria-label="Home" className="bg-[var(--gradient-hero)]" id="main-content">
      <section className="mx-auto flex min-h-[calc(100vh-8.5rem)] max-w-6xl items-center px-4 py-20">
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
      </section>
    </main>
  );
}
