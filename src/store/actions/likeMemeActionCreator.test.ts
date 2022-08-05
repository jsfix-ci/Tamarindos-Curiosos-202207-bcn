import likeMemeActionCreator from "./likeMemeActionCreator";
import { IMeme } from "../../interfaces/interfaces";

describe("Given a likeMemeActionCreator function", () => {
  describe("When it receives a meme object", () => {
    test("Then it should return a likeMemeAction", () => {
      const testMemeId = "asdf";

      const actionType = "likeMemes";

      const action = likeMemeActionCreator(testMemeId);

      expect(action).toHaveProperty("type", actionType);
      expect(action).toHaveProperty("payload", testMemeId);
    });
  });
});
