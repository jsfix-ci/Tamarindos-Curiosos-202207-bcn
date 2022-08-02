import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Given a component footer", () => {
  describe("When it's instantiated", () => {
    test("Then it should show the text Tamarindos curiosos. inc", () => {
      const text = "Tamarindos curiosos. inc";

      render(<Footer />);
      const mainText = screen.queryByText(text);

      expect(mainText).toBeInTheDocument();
      expect(mainText).toHaveTextContent(text);
    });

    test("Then it should show an image", () => {
      render(<Footer />);
      const footerImg = screen.getByRole("img");

      expect(footerImg).toBeInTheDocument();
    });
  });
});
