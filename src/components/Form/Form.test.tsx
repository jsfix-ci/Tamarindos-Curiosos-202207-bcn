import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a form component", () => {
  const formType = "create";
  const titleLabel = "Title:";
  const urlLabel = "Meme Url:";
  const likesLabel = "Likes:";

  describe("When instantiated with formType 'create'", () => {
    test("Then it should render a form with 3 input fields", () => {
      render(<Form formType={formType} />);

      const formTitle = screen.getByRole("textbox", { name: titleLabel });
      const formUrl = screen.getByRole("textbox", { name: urlLabel });
      const formLikes = screen.getByRole("textbox", { name: likesLabel });

      expect(formTitle && formUrl && formLikes).toBeInTheDocument();
    });
  });

  describe("when instatiated with formType 'edit'", () => {
    test("Then it should render a form with 2 input fields", () => {
      render(<Form formType={formType} />);

      const formTitle = screen.getByRole("textbox", { name: titleLabel });
      const formLikes = screen.getByRole("textbox", { name: likesLabel });

      expect(formTitle && formLikes).toBeInTheDocument();
    });
  });
});
