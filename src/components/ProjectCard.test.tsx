import { render, screen } from "@testing-library/react";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

it("renders project details and secure external links", () => {
  render(<ProjectCard project={projects[0]} />);

  expect(screen.getByText("Completed")).toBeInTheDocument();
  expect(screen.getByText("Core features")).toBeInTheDocument();
  expect(screen.getByText("Technologies used")).toBeInTheDocument();
  expect(screen.getByText("Impact / outcome")).toBeInTheDocument();

  const [projectLink] = screen.getAllByRole("link");
  expect(projectLink).toHaveAttribute("target", "_blank");
  expect(projectLink).toHaveAttribute("rel", "noreferrer");
});

it("does not display a project date", () => {
  render(<ProjectCard project={projects[2]} />);

  expect(screen.queryByText(/2025/)).not.toBeInTheDocument();
});

it("renders the Delulu Core GitHub action", () => {
  const deluluCore = projects.find((project) => project.slug === "delulu-core");

  expect(deluluCore).toBeDefined();
  render(<ProjectCard project={deluluCore!} />);

  expect(screen.getByRole("link", { name: /view on github/i })).toHaveAttribute(
    "href",
    "https://github.com/Debugging-Divas/Project",
  );
});
