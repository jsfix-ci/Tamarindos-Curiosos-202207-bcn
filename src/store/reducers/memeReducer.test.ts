import { IMeme } from "../../interfaces/interfaces";
import { ActionTest, ActionTestDefault } from "../types/actions";
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
      const action: ActionTest = { type: "generateMemes", payload: newMemes };

      const memesReducerTest = memesReducer(previousMemes, action);

      expect(memesReducerTest).toStrictEqual(newMemes);
    });
  });

  describe("When it is called with a 'unknown' action and an empty list of memes", () => {
    test("Then it should show an empty list of memes", () => {
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
      const action: ActionTestDefault = { type: "unknown", payload: newMemes };

      const memesReducerTest = memesReducer(previousMemes, action);

      expect(memesReducerTest).toStrictEqual(previousMemes);
    });
  });
});
