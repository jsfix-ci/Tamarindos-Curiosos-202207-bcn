import showLoadinguiActionCreator from "./LoadingUIActionCreator";

describe("Given a showLoadingActionCreator", () => {
  describe("When instantiated", () => {
    test("Then it should return an object with a type 'loading'", () => {
      const expectedResult = { type: "showLoading" };

      const action = showLoadinguiActionCreator();

      expect(action).toEqual(expectedResult);
    });
  });
});
