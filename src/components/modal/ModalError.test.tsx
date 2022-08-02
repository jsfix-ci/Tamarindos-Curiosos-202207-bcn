import { render, screen } from "@testing-library/react";
import ModalError from "./ModalError";

describe("Given a modal component", () => {
  describe("When instantiated", () => {
    test("Then it should show a modal with an image and alt text 'Sad meme frog'", () => {
      const imageAltText = "Sad meme frog";

      render(<ModalError />);
      const modalImage = screen.getByRole("img");

      expect((modalImage as HTMLImageElement).alt).toEqual(imageAltText);
    });

    test("Then it should show a modal with the text 'Somenthing went wrong, I'm sad...'", () => {
      const errorText = "Somenthing went wrong, I'm sad...";

      render(<ModalError />);
      const modalText = screen.getByText(errorText);

      expect(modalText).toBeInTheDocument();
    });
  });
});
