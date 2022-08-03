import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When instantiated", () => {
    test("Then it should render an image", () => {
      render(
        <BrowserRouter>
          <Header currentPage="mainPage" />
        </BrowserRouter>
      );

      const image = screen.getByRole("img", {
        name: "Awesome meme generator logo, it's a frog",
      });

      expect(image).toBeInTheDocument();
    });

    test("Then it should render a title 'AWESOME MEME GENERATOR'", () => {
      render(
        <BrowserRouter>
          <Header currentPage="mainPage" />
        </BrowserRouter>
      );

      const title = screen.getByRole("heading", {
        name: "AWESOME MEME GENERATOR",
      });

      expect(title).toBeInTheDocument();
    });
  });
});
