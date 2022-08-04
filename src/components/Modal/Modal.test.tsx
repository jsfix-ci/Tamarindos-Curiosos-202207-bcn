import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("Given a modal component", () => {
  describe("When instantiated with type 'error'", () => {
    test("Then it should show a modal with an image and alt text 'Sad meme frog'", () => {
      const imageAltText = "Sad meme frog";

      render(<Modal type="error" />);
      const modalImage = screen.getByRole("img");

      expect((modalImage as HTMLImageElement).alt).toEqual(imageAltText);
    });

    test("Then it should show a modal with the text 'Somenthing went wrong, I'm sad...'", () => {
      const errorText = "Somenthing went wrong, I'm sad...";

      render(<Modal type="error" />);
      const modalText = screen.getByText(errorText);

      expect(modalText).toBeInTheDocument();
    });
  });

  describe("When instantiated with type 'success'", () => {
    test("Then it should show a modal with an image and alt text 'Sad meme frog'", () => {
      const imageAltText = "Happy meme frog";

      render(<Modal type="success" />);
      const modalImage = screen.getByRole("img");

      expect((modalImage as HTMLImageElement).alt).toEqual(imageAltText);
    });

    test("Then it should show a modal with the text 'Somenthing went wrong, I'm sad...'", () => {
      const errorText = "Success!!";

      render(<Modal type="success" />);
      const modalText = screen.getByText(errorText);

      expect(modalText).toBeInTheDocument();
    });
  });
});
