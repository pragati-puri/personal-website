import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppRoutes } from "./main";

it("renders the Projects page at /projects", () => {
  render(
    <MemoryRouter initialEntries={["/projects"]}>
      <AppRoutes />
    </MemoryRouter>,
  );

  expect(screen.getByRole("heading", { name: /projects/i })).toBeInTheDocument();
});
