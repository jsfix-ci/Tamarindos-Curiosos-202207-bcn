import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route } from "react-router-dom";
import Card from "../components/Card/Card";
import Details from "../components/Details/Details";
import MemeContext from "../store/context/MemeContext";
import MemeContextProvider from "../store/context/MemeContextProvider";
import DetailsPage from "./DetailsPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "18954" }),
}));

describe("Given a DeatailsPage component", () => {
  describe("When instantitated", () => {
    test("Then it should render the meme details", () => {
      const testMemeContext = {
        memes: [
          {
            url: "www.test.com",
            title: "test",
            author: "Tamarindos",
            likes: 5,
            postLink: "www.test/postlink.com",
            subreddit: "subreddit",
            isFavorite: false,
            id: "18954",
          },
        ],
        dispatch: () => {
          jest.fn();
        },
        favoriteMemes: [],
        favoriteMemeDispatch: () => {
          jest.fn();
        },
      };

      render(
        <BrowserRouter>
          <MemeContext.Provider
            value={{
              memes: testMemeContext.memes,
              dispatch: testMemeContext.dispatch,
              favoriteMemes: testMemeContext.favoriteMemes,
              favoriteMemeDispatch: testMemeContext.favoriteMemeDispatch,
            }}
          >
            <DetailsPage />
          </MemeContext.Provider>
        </BrowserRouter>
      );

      const detailsElement = screen.getByText(testMemeContext.memes[0].author);

      expect(detailsElement).toBeInTheDocument();
    });
  });
});
