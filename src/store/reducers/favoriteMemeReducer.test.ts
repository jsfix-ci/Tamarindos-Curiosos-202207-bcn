import { IMeme } from "../../interfaces/interfaces";
import { LikeMemeAction } from "../types/actions";
import favoriteMemeReducer from "./favoriteMemeReducer";

describe("Given a favoriteMemesReducer", () => {
  const previousMemesArray: IMeme[] = [];
  describe("When it's instantiated with the previous favorite memes and a likememeaction", () => {
    test("Then it should return the new favorite memes list", () => {
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

  describe("When its instantiated with a previous favorite meme and an unknown action", () => {
    test("Then it should return the previousFavoritesMemes list", () => {
      const unkownAction = {
        type: "HiBroHowIsItGoing",
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

      const favoriteMemeReducerReturn = favoriteMemeReducer(
        previousMemesArray,
        unkownAction
      );

      expect(favoriteMemeReducerReturn).toEqual(previousMemesArray);
    });
  });
});
