import { IMeme } from "../../interfaces/interfaces";
import { ActionTest, LikeMemeAction } from "../types/actions";
import memesReducer from "./memesReducer";

describe("Given a meme reducer function", () => {
  describe("When it is called with a 'generateMemes' action and an empty list of memes", () => {
    test("Then it should generate a list with a list of new memes inside", () => {
      const previousMemes: IMeme[] = [];
      const newMemes: IMeme[] = [
        {
          author: "fernando",
          likes: 23,
          postLink: "isdicoders",
          subreddit: "muerte",
          title: "death factory",
          url: "http:muerteydestrucción",
          isFavorite: false,
          id: "",
        },
        {
          author: "nacho",
          likes: 28,
          postLink: "isdicoders2",
          subreddit: "pusky",
          title: "nachosConQueso",
          url: "http:mamorut",
          isFavorite: false,
          id: "",
        },
      ];
      const actionReceived = "generateMemes";

      const action: ActionTest = { type: actionReceived, payload: newMemes };

      const memesReducerTest = memesReducer(previousMemes, action);

      expect(memesReducerTest).toStrictEqual(newMemes);
    });
  });

  describe("When it is called with a 'unknown' action and an empty list of memes", () => {
    test("Then it should return an empty list of memes", () => {
      const previousMemes: IMeme[] = [];
      const newMemes: IMeme[] = [
        {
          author: "fernando",
          likes: 23,
          postLink: "isdicoders",
          subreddit: "muerte",
          title: "death factory",
          url: "http:muerteydestrucción",
          isFavorite: false,
          id: "",
        },
        {
          author: "nacho",
          likes: 28,
          postLink: "isdicoders2",
          subreddit: "pusky",
          title: "nachosConQueso",
          url: "http:mamorut",
          isFavorite: false,
          id: "",
        },
      ];
      const unKnownAction = { type: "croquetesdepollastre", payload: newMemes };

      const memesReducerTest = memesReducer(previousMemes, unKnownAction);

      expect(memesReducerTest).toStrictEqual(previousMemes);
    });
  });

  describe("When it's called with a likeMemes action and an empty list of favorites", () => {
    test("Then it should return a list of memes with one of them having the property isFavorite true", () => {
      const memeFavoritedAction: LikeMemeAction = {
        type: "likeMemes",
        payload: "4",
      };
      const previousMemesList = [
        {
          author: "fernando",
          likes: 23,
          postLink: "isdicoders",
          subreddit: "muerte",
          title: "death factory",
          url: "http:muerteydestrucción",
          isFavorite: false,
          id: "25",
        },
        {
          author: "nacho",
          likes: 28,
          postLink: "isdicoders2",
          subreddit: "pusky",
          title: "nachosConQueso",
          url: "http:mamorut",
          isFavorite: false,
          id: "4",
        },
      ];
      const expectedNewList = [
        {
          author: "fernando",
          likes: 23,
          postLink: "isdicoders",
          subreddit: "muerte",
          title: "death factory",
          url: "http:muerteydestrucción",
          isFavorite: false,
          id: "25",
        },
        {
          author: "nacho",
          likes: 28,
          postLink: "isdicoders2",
          subreddit: "pusky",
          title: "nachosConQueso",
          url: "http:mamorut",
          isFavorite: true,
          id: "4",
        },
      ];

      const reducersReturn = memesReducer(
        previousMemesList,
        memeFavoritedAction
      );

      expect(reducersReturn).toEqual(expectedNewList);
    });
  });
});
