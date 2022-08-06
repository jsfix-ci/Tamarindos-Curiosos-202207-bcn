import { render, screen } from "@testing-library/react";
import UIContext from "../../store/context/UIContext/UIContext";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it's instantiated with a loading state of true", () => {
    test("Then it should show a picture with a frog dancing", () => {
      render(
        <UIContext.Provider
          value={{
            isLoading: true,
            feedback: "error",

            dispatch: () => {},
          }}
        >
          <Loading />
        </UIContext.Provider>
      );

      const loadingImage = screen.getByRole("img", {
        name: "A frog dancing for the loading page.",
      });

      expect(loadingImage).toBeInTheDocument();
    });
    test("Then it should render a span with the text 'Give peepo a second...'", () => {
      render(
        <UIContext.Provider
          value={{
            isLoading: true,
            feedback: "error",
            dispatch: () => {},
          }}
        >
          <Loading />
        </UIContext.Provider>
      );

      const span = screen.getByText("Give peepo a second...");

      expect(span).toBeInTheDocument();
    });
  });
});
