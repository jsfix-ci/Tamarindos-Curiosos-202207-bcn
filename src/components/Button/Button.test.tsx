import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When instantiated and recieves 'hola soy un boton' as text", () => {
    test("Then it should render a button with the text inside", () => {
      const text = "hola soy un boton";
      const action = jest.fn();
      render(<Button actionOnClick={action} text={text} />);

      const button = screen.getByRole("button", {
        name: text,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
