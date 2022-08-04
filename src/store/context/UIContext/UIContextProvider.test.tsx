import { render, screen } from "@testing-library/react";
import UIContextProvider from "./UIContextProvider";

describe("Given a UI provider component", () => {
  describe("When it receives 'loading' as a header as a children prop", () => {
    test("Then it show the header 'loading'", () => {
      const loadingChildren = "loading";

      render(
        <UIContextProvider>
          <h1>loading</h1>
        </UIContextProvider>
      );

      const expectOutput = screen.getByRole("heading", {
        name: loadingChildren,
      });

      expect(expectOutput).toBeInTheDocument();
    });
  });
});
