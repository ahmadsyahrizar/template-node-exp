import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Card from "..";

describe("<Card />", () => {
  test("should render correctly with given props", () => {
    render(
      <MemoryRouter>
        <Card
          id={2}
          title="star wars"
          description="test cases description"
          category="Sci-Fi"
        />
      </MemoryRouter>
    );

    expect(screen.getByText(/star wars/i)).toBeInTheDocument();
  });

  test.skip("should click url and redirect to wanted page", async () => {
    render(
      <Card
        id={2}
        title="star wars"
        description="test cases description"
        category="Sci-Fi"
      />, {wrapper: MemoryRouter}
    );
    const event = userEvent.setup();

    expect(screen.getByText(/Card Link/i)).toBeInTheDocument();
    // await event.click(screen.getByRole("link", { name: "" }));
    await event.click(screen.getByText("Card Link"));

    // screen.debug();
    expect(screen.getByText(/test page/i)).toBeVisible();
  });
});
