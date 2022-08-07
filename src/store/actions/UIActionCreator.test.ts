import {
  ShowErrorAction,
  ShowLoadingAction,
  ShowSuccesAction,
} from "../types/actions";
import {
  LoadingUIActionCreator,
  ShowErrorActionCreator,
  ShowSuccesActionCreator,
} from "./UIActionCreators";

describe("Given a UIActionCreator", () => {
  describe("When instantiated with an showLoading action", () => {
    test("Then it should return an object with a type 'loading'", () => {
      const expectedLoadingAction: ShowLoadingAction = { type: "showLoading" };

      const action = LoadingUIActionCreator();

      expect(action).toEqual(expectedLoadingAction);
    });
  });

  describe("When it's instantiated with a showError action", () => {
    test("Then it should return an action with a type showError", () => {
      const expectedAction: ShowErrorAction = { type: "showError" };

      const errorAction = ShowErrorActionCreator();

      expect(errorAction).toEqual(expectedAction);
    });
  });

  describe("When it's instantiated with a showSucces action", () => {
    test("Then it should return an action with a type showSucces", () => {
      const expectedSuccesAction: ShowSuccesAction = { type: "showSucces" };

      const succesAction = ShowSuccesActionCreator();

      expect(succesAction).toEqual(expectedSuccesAction);
    });
  });
});
