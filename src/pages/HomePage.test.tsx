import { createElement, forwardRef } from "react";
import { render, screen } from "@testing-library/react";
import { useReducedMotion } from "framer-motion";
import { afterEach, beforeEach, vi } from "vitest";
import { HomePage } from "./HomePage";

const motionCalls = vi.hoisted(
  () =>
    [] as Array<{
      animate?: unknown;
      initial?: unknown;
      transition?: unknown;
      variants?: unknown;
      whileHover?: unknown;
      whileInView?: unknown;
    }>,
);

vi.mock("framer-motion", async (importOriginal) => {
  const actual = await importOriginal<typeof import("framer-motion")>();

  return {
    ...actual,
    motion: new Proxy(actual.motion, {
      get(target, property, receiver) {
        const MotionComponent = Reflect.get(target, property, receiver);

        if (typeof property !== "string") {
          return MotionComponent;
        }

        return forwardRef<HTMLElement, Record<string, unknown>>(function MotionElement(props, ref) {
          const {
            animate,
            children,
            initial,
            transition,
            variants,
            viewport,
            whileHover,
            whileInView,
            ...domProps
          } = props;

          motionCalls.push({ animate, initial, transition, variants, whileHover, whileInView });

          return createElement(property, { ...domProps, ref }, children);
        });
      },
    }),
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
  motionCalls.splice(0);
  vi.unstubAllGlobals();
});

it("uses only static motion configuration when reduced motion is requested", () => {
  vi.mocked(useReducedMotion).mockReturnValue(true);

  render(<HomePage />);

  expect(screen.getByAltText("Pragati Puri")).toBeInTheDocument();
  expect(motionCalls).not.toHaveLength(0);
  expect(
    motionCalls.every((call) =>
      [call.animate, call.initial, call.variants, call.transition].every(
        (value) => value === false || value === undefined,
      ),
    ),
  ).toBe(true);
  expect(motionCalls.some((call) => call.whileHover || call.whileInView)).toBe(false);
});

it("features VitalByte and Cipher Events", () => {
  vi.mocked(useReducedMotion).mockReturnValue(true);

  render(<HomePage />);

  expect(screen.getByRole("heading", { level: 2, name: "VitalByte" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 2, name: "Cipher Events" })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { level: 2, name: "TaskZen" })).not.toBeInTheDocument();
});
