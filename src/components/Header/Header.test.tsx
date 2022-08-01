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
  });
});
