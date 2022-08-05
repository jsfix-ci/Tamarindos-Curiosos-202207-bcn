import { render, renderHook, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import MemeContext from "../store/context/MemeContext";
import DetailsPage from "./DetailsPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "1" }),
}));

describe("Given a details page", () => {
  describe("When it is rendered", () => {
    test("Then it should show the details page on the screen", () => {
      const testMeme = {
        url: "http://www.test.com",
        title: "test",
        author: "Tamarindos",
        likes: 5,
        postLink: "www.test/postlink.com",
        subreddit: "subreddit",
        isFavorite: false,
        id: "1",
      };

      const expectedDetailsPage = TestRenderer.create(
        <BrowserRouter>
          <MemeContext.Provider
            value={{
              memes: [testMeme],
              dispatch: () => {},
              favoriteMemes: [],
              favoriteMemeDispatch: () => {},
            }}
          >
            <DetailsPage />
          </MemeContext.Provider>
        </BrowserRouter>
      );

      expect(expectedDetailsPage).toMatchSnapshot();
    });
  });
});
