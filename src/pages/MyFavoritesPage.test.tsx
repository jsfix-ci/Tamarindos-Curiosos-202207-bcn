import { BrowserRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import MyFavoritesPage from "./MyFavoritesPage";
describe("Given a MyFavoritesPage page", () => {
  describe("When its rendered on screen", () => {
    test("Then it should match the snapshoot", () => {
      const expectedMyFavoritesPage = TestRenderer.create(
        <BrowserRouter>
          <MyFavoritesPage />
        </BrowserRouter>
      );

      expect(expectedMyFavoritesPage).toMatchSnapshot();
    });
  });
});
