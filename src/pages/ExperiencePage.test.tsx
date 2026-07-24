import { render, screen } from "@testing-library/react";
import { ExperiencePage } from "./ExperiencePage";

it("renders professional experience, leadership, and the timeline", () => {
  render(<ExperiencePage />);

  expect(screen.getByRole("heading", { level: 1, name: "Experience" })).toBeInTheDocument();
  expect(screen.getAllByText(/AI Software Developer Intern/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Vice President Finance/i).length).toBeGreaterThan(0);
  expect(screen.getByRole("heading", { level: 2, name: "Timeline" })).toBeInTheDocument();
});
