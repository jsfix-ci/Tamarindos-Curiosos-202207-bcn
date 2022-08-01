import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When instantiated", () => {
    test("Then it should render an image child of a header container", () => {
      render(<Header />);

      const image = screen.getByRole("img", {
        name: "Awesome meme generator logo, it's a frog",
      });

      expect(image).toBeInTheDocument();
    });

    test("Then it should render an h1 child of a header container", () => {
      render(<Header />);

      const title = screen.getByRole("heading", {
        name: "AWESOME MEME GENERATOR",
      });

      expect(title).toBeInTheDocument();
    });

    test("Then it should render a p", () => {
      render(<Header />);

      const text = screen.getByText(
        "In your favourite pages you can unlike a meme, edit it and also create your own meme."
      );

      expect(text).toBeInTheDocument();
    });
  });
});
