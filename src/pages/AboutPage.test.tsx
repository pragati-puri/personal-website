import { render, screen } from "@testing-library/react";
import { AboutPage } from "./AboutPage";

it("renders the internship callout and unlinked coffee-chat note", () => {
  render(<AboutPage />);

  expect(screen.getByText("Open to internships across Canada.")).toBeInTheDocument();

  const coffeeChatNote = screen.getByText(
    "Fun fact: I love to coffee chat with people and know more about their journey. If you are someone who wants to have a quick chat, please do not hesitate to reach out to me ;)",
  );
  expect(coffeeChatNote.closest("a")).toBeNull();
});
