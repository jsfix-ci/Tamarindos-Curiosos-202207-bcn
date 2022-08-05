import { BrowserRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import HomePage from "./HomePage";

describe("Given an HomePage page", () => {
  describe("When its rendered on screen", () => {
    test("Then it should show the home page", () => {
      const expectedDetailsPage = TestRenderer.create(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      );
      expect(expectedDetailsPage).toMatchSnapshot();
    });
  });
});
