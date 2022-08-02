import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a picture", () => {
      render(<Loading isLoading={true} />);

      const loadingImage = screen.getByRole("img", {
        name: "A frog dancing for the loading page.",
      });

      expect(loadingImage).toBeInTheDocument();
    });
    test("Then it should render a span with the text 'Give peepo a second...'", () => {
      const loading = true;
      render(<Loading isLoading={loading} />);

      const span = screen.getByText("Give peepo a second...");

      expect(span).toBeInTheDocument();
    });
  });
});
