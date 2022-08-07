import { BrowserRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import MemeContextProvider from "../store/context/MemeContext/MemeContextProvider";
import HomePage from "./HomePage";

describe("Given an HomePage page", () => {
  describe("When its rendered on screen", () => {
    test("Then it should show the home page", () => {
      const expectedDetailsPage = TestRenderer.create(
        <MemeContextProvider>
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </MemeContextProvider>
      );
      expect(expectedDetailsPage).toMatchSnapshot();
    });
  });
});
