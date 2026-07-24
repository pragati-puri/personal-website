import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "About", to: "/about" },
];

const pageMeta = {
  "/": [
    "Pragati Puri - Software Developer",
    "Portfolio of Pragati Puri, AI software developer and Computing Science student.",
  ],
  "/projects": ["Projects | Pragati Puri", "Selected software and AI projects by Pragati Puri."],
  "/experience": [
    "Experience | Pragati Puri",
    "Professional experience and leadership by Pragati Puri.",
  ],
  "/about": ["About | Pragati Puri", "Education, skills, and background for Pragati Puri."],
} as const;

function navLinkClassName(isActive: boolean) {
  return `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? "bg-primary-soft text-primary"
      : "text-muted-foreground hover:bg-primary-soft hover:text-primary"
  }`;
}

export function SiteLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const [title, description] = pageMeta[pathname as keyof typeof pageMeta] ?? pageMeta["/"];
    document.title = title;

    const descriptionMeta =
      document.querySelector<HTMLMetaElement>('meta[name="description"]') ??
      document.head.appendChild(document.createElement("meta"));
    descriptionMeta.name = "description";
    descriptionMeta.content = description;
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-background focus:px-4 focus:py-2 focus:shadow-[var(--shadow-soft)]"
        href="#main-content"
      >
        Skip to content
      </a>
      <header className="sticky inset-x-0 top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <NavLink className="flex items-center gap-2 font-display font-bold" to="/" end>
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--gradient-primary)] text-primary-foreground">
              PP
            </span>
            <span>Pragati Puri</span>
          </NavLink>

          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => (
                <li key={item.to}>
                  <NavLink
                    className={({ isActive }) => navLinkClassName(isActive)}
                    to={item.to}
                    end={item.to === "/"}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="rounded-lg p-2 hover:bg-primary-soft md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-border bg-background px-4 py-3 md:hidden"
            id="mobile-navigation"
          >
            <ul className="mx-auto grid max-w-6xl gap-1">
              {navigation.map((item) => (
                <li key={item.to}>
                  <NavLink
                    className={({ isActive }) => navLinkClassName(isActive)}
                    onClick={() => setIsMenuOpen(false)}
                    to={item.to}
                    end={item.to === "/"}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <Outlet />

      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-4 text-sm text-muted-foreground">
          © 2026 Pragati Puri
        </div>
      </footer>
    </div>
  );
}
