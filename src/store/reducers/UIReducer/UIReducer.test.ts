import { UIState } from "../../../interfaces/interfaces";
import { ShowErrorAction } from "../../types/actions";
import UIReducer from "./UIReducer";

describe("Given a UI reducer function", () => {
  describe("When it is called with a 'showLoading' action and a 'false' previous state of loading", () => {
    test("Then it should change the state of loading to 'true'", () => {
      const previousUI: UIState = { isLoading: false, feedback: "error" };
      const newUI: UIState = { isLoading: true, feedback: "error" };
      const action = { type: "showLoading" };

      const UIReducerTest = UIReducer(previousUI, action);

      expect(UIReducerTest).toStrictEqual(newUI);
    });
  });

  describe("When it is called with a 'unknown' action and and a 'false' previous state of loading", () => {
    test("Then it should not change the state of loading", () => {
      const previousUI: UIState = { isLoading: false, feedback: "error" };
      const newUI: UIState = { isLoading: false, feedback: "error" };
      const action = { type: "ensaladilla-rusa" };

      const UIReducerTest = UIReducer(previousUI, action);

      expect(UIReducerTest).toStrictEqual(newUI);
    });
  });

  describe("When it's invoked with a showError action", () => {
    test("Then it should return the newUI with the feedback on error", () => {
      const previousUI: UIState = { isLoading: false, feedback: "succes" };
      const expectedNewUI: UIState = { feedback: "error", isLoading: false };
      const errorAction: ShowErrorAction = { type: "showError" };

      const UIReducerReturn = UIReducer(previousUI, errorAction);

      expect(UIReducerReturn).toStrictEqual(expectedNewUI);
    });
  });

  describe("When it's invoked with a showSucces action", () => {
    test("Then it should return the newUi with feedback on succes", () => {
      const previousUIerror: UIState = { isLoading: false, feedback: "error" };
      const expectedNewUIonSucces: UIState = {
        feedback: "succes",
        isLoading: false,
      };
      const succesAction: ShowErrorAction = { type: "showSucces" };

      const reducerReturn = UIReducer(previousUIerror, succesAction);

      expect(reducerReturn).toStrictEqual(expectedNewUIonSucces);
    });
  });
});
