import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

const pageMetadata = [
  [
    "/",
    "Pragati Puri - Software Developer",
    "Portfolio of Pragati Puri, AI software developer and Computing Science student.",
  ],
  ["/projects", "Projects | Pragati Puri", "Selected software and AI projects by Pragati Puri."],
  [
    "/experience",
    "Experience | Pragati Puri",
    "Professional experience and leadership by Pragati Puri.",
  ],
  ["/about", "About | Pragati Puri", "Education, skills, and background for Pragati Puri."],
] as const;

beforeEach(() => {
  document.head.innerHTML = "";
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      disconnect() {}
      observe() {}
      unobserve() {}
    },
  );
});

afterEach(() => {
  vi.unstubAllGlobals();
});

it("renders the Projects page at /projects", () => {
  render(
    <MemoryRouter initialEntries={["/projects"]}>
      <AppRoutes />
    </MemoryRouter>,
  );

  expect(screen.getByRole("heading", { name: /projects/i })).toBeInTheDocument();
});

describe("page metadata", () => {
  it.each(pageMetadata)("sets the title and description for %s", (path, title, description) => {
    render(
      <MemoryRouter initialEntries={[path]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    expect(document.title).toBe(title);
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      "content",
      description,
    );
  });
});
