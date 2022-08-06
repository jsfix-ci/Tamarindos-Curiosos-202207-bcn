import { LoadingUIActionCreator } from "./UIActionCreators";

describe("Given a showLoadingActionCreator", () => {
  describe("When instantiated", () => {
    test("Then it should return an object with a type 'loading'", () => {
      const expectedResult = { type: "showLoading" };

      const action = LoadingUIActionCreator();

      expect(action).toEqual(expectedResult);
    });
  });
});
