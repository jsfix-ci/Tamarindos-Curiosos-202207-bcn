import { render, screen } from "@testing-library/react";
import CardList from "./CardList";

describe("Given a CardList component", () => {
  describe("When it is rendered on the screen", () => {
    test("Then it should show a list", () => {
      render(<CardList />);

      const cardList = screen.getByRole("list");

      expect(cardList).toBeInTheDocument();
    });
  });
});
