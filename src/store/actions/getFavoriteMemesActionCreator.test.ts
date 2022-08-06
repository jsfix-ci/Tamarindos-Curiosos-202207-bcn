import { IMeme } from "../../interfaces/interfaces";
import getFavoriteMemesActionCreator from "./getFavoriteMemesActionCreator";

describe("Given getFavoriteMemesActionCreator function", () => {
  describe("When called with a meme list", () => {
    test("Then it should return a 'getFavoriteMemes' type and the meme list payload", () => {
      const type = "getFavoriteMemes";
      const memesList: IMeme[] = [
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

      const favoriteMemesActionCreator =
        getFavoriteMemesActionCreator(memesList);

      expect(favoriteMemesActionCreator.type).toStrictEqual(type);
      expect(favoriteMemesActionCreator.payload).toEqual(memesList);
    });
  });
});
