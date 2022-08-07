import { BrowserRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import MemeContextProvider from "../store/context/MemeContext/MemeContextProvider";
import HomePage from "./HomePage";
import UIContext from "../store/context/UIContext/UIContext";

describe("Given an HomePage page", () => {
  describe("When its rendered on screen", () => {
    test("Then it should show the home page", () => {
      const expectedHomePage = TestRenderer.create(
        <MemeContextProvider>
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </MemeContextProvider>
      );
      expect(expectedHomePage).toMatchSnapshot();
    });
  });

  describe("And UI context have the feedback Open and a succes message", () => {
    test("Then it should show the modal succes on screen", () => {
      const expectedHomePage = TestRenderer.create(
        <UIContext.Provider
          value={{
            feedback: { isOpen: true, modalType: "succes" },
            isLoading: false,
            dispatch: () => {},
          }}
        >
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </UIContext.Provider>
      );

      expect(expectedHomePage).toMatchSnapshot();
    });
  });

  describe("And UI context have feedback Open and an error message", () => {
    test("Then it should show the modal succes on screen", () => {
      const expectedHomePage = TestRenderer.create(
        <UIContext.Provider
          value={{
            feedback: { isOpen: true, modalType: "error" },
            isLoading: false,
            dispatch: () => {},
          }}
        >
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </UIContext.Provider>
      );

      expect(expectedHomePage).toMatchSnapshot();
    });
  });
});
