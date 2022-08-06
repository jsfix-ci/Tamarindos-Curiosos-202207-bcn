import { IMeme } from "../../interfaces/interfaces";
import generateMemeActionCreator from "./generateMemeActionCreator";

describe("Given a generateMemeActionCreator function", () => {
  describe("When it receives a meme object", () => {
    test("Then it should return a generateMemes action", () => {
      const testMeme: IMeme[] = [
        {
          author: "jose luis",
          likes: 40,
          postLink: "i'm a link",
          title: "i'm a title",
          url: "https://static.eldiario.es/clip/cfad379c-f641-4a31-b0e9-0e35e2190146_twitter-aspect-ratio_default_0.jpg",
          subreddit: "",
          isFavorite: false,
          id: "",
          isRendered: true,
        },
      ];
      const actionType = "generateMemes";

      const action = generateMemeActionCreator(testMeme);

      expect(action).toHaveProperty("type", actionType);
      expect(action).toHaveProperty("payload", testMeme);
    });
  });
});
