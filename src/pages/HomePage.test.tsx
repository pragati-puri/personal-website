import { render, screen } from "@testing-library/react";
import { useReducedMotion } from "framer-motion";
import { afterEach, beforeEach, vi } from "vitest";
import { HomePage } from "./HomePage";

vi.mock("framer-motion", async (importOriginal) => {
  const actual = await importOriginal<typeof import("framer-motion")>();

  return {
    ...actual,
    useReducedMotion: vi.fn(),
  };
});

beforeEach(() => {
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

it("renders a static portrait when reduced motion is requested", () => {
  vi.mocked(useReducedMotion).mockReturnValue(true);

  render(<HomePage />);

  expect(screen.getByAltText("Pragati Puri")).toBeInTheDocument();
});
