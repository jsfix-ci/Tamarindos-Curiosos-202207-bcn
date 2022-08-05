import { BrowserRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage page", () => {
  describe("When it's rendered in the screen", () => {
    test("Then it should show the NotFoundPage page", () => {
      const expectedNotFoundPage = TestRenderer.create(
        <BrowserRouter>
          <NotFoundPage />
        </BrowserRouter>
      );

      expect(expectedNotFoundPage).toMatchSnapshot();
    });
  });
});
