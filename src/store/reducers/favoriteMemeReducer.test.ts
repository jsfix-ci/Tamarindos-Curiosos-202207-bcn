import { IMeme } from "../../interfaces/interfaces";
import { LikeMemeAction } from "../types/actions";
import favoriteMemeReducer from "./favoriteMemeReducer";

describe("Given a favoriteMemesReducer", () => {
  describe("When it's instantiated with the previous favorite memes and a likememeaction", () => {
    test("Then it should return the new favorite memes list", () => {
      const previousMemesArray: IMeme[] = [];
      const likeMemeAction: LikeMemeAction = {
        type: "likeMemes",
        payload: {
          author: "aa",
          id: "imanid",
          isFavorite: true,
          likes: 50,
          postLink: "wwww.postlink.es",
          subreddit: "www.subreddit.es",
          title: "titulito",
          url: "www.url.es",
        },
      };
      const expectedReturn: IMeme[] = [
        {
          author: "aa",
          id: "imanid",
          isFavorite: true,
          likes: 50,
          postLink: "wwww.postlink.es",
          subreddit: "www.subreddit.es",
          title: "titulito",
          url: "www.url.es",
        },
      ];

      const favoriteMemeReturn = favoriteMemeReducer(
        previousMemesArray,
        likeMemeAction
      );

      expect(favoriteMemeReturn).toEqual(expectedReturn);
    });
  });
});
