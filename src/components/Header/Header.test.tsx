import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When instantiated with currentpage 'mainPage'", () => {
    const currentPageMain = "mainPage";

    test("Then it should render an image", () => {
      render(
        <BrowserRouter>
          <Header currentPage={currentPageMain} />
        </BrowserRouter>
      );

      const image = screen.getByRole("img", {
        name: "Awesome meme generator logo, it's a frog",
      });

      expect(image).toBeInTheDocument();
    });

    test("Then it should render a title 'AWESOME MEME GENERATOR'", () => {
      render(
        <BrowserRouter>
          <Header currentPage={currentPageMain} />
        </BrowserRouter>
      );

      const title = screen.getByRole("heading", {
        name: "AWESOME MEME GENERATOR",
      });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When instantiated with currentpage 'favoritesPage'", () => {
    const currentPageFavorites = "favoritesPage";

    test("Then it should render a favorites text explanation", () => {
      const favoritesText =
        "Here you can find your selected favorite memes! Click delete to remove a meme from your list.";

      render(
        <BrowserRouter>
          <Header currentPage={currentPageFavorites} />
        </BrowserRouter>
      );
      const textElement = screen.getByText(favoritesText);

      expect(textElement.textContent).toBe(favoritesText);
    });
  });

  describe("When instantiated with currentpage 'detailsPage'", () => {
    const currentPageDetails = "detailsPage";

    test("Then it should render the heading 'MEME DETAILS'", () => {
      const pageDetailsHeadingFirst = "MEME";
      const pageDetailsHeadingSecond = "DETAILS";
      const pageDetailsFullText =
        pageDetailsHeadingFirst + pageDetailsHeadingSecond;

      render(
        <BrowserRouter>
          <Header currentPage={currentPageDetails} />
        </BrowserRouter>
      );

      const detailsPageFirst = screen.getByText(pageDetailsHeadingFirst);
      const detailsPageSecond = screen.getByText(pageDetailsHeadingSecond);

      expect(detailsPageFirst.textContent).toBe(pageDetailsHeadingFirst);
      expect(detailsPageSecond.textContent).toBe(pageDetailsFullText);
    });
  });

  describe("When instantiated with currentpage 'notFoundPage'", () => {
    const currentPageNotFound = "notFoundPage";

    test("Then it should render the text 'Page Not Found'", () => {
      const pageNotFoundText = "Page Not Found";

      render(
        <BrowserRouter>
          <Header currentPage={currentPageNotFound} />
        </BrowserRouter>
      );

      const pageNotFound = screen.getByText(pageNotFoundText);

      expect(pageNotFound.textContent).toBe(pageNotFoundText);
    });
  });
});
