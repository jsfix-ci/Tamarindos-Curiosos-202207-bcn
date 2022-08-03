import { render, screen } from "@testing-library/react";
import MemeContextProvider from "./MemeContextProvider";

describe("Given a provider component", () => {
  describe("When it receives 'memeCard' as a div as a children prop", () => {
    test("Then it should show the div 'memeCard'", () => {
      const memeCardChildren = "memecard";

      render(
        <MemeContextProvider>
          <h1>memecard</h1>
        </MemeContextProvider>
      );

      const expectOutput = screen.getByRole("heading", {
        name: memeCardChildren,
      });

      expect(expectOutput).toBeInTheDocument();
    });
  });
});
