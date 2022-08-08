import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { IMeme } from "../interfaces/interfaces";
import MemeContextProvider from "../store/context/MemeContext/MemeContextProvider";

import useLocalApi from "./useLocalApi";

interface WrapperProps {
  children: JSX.Element;
}

const Wrapper = ({ children }: WrapperProps) => (
  <MemeContextProvider>{children}</MemeContextProvider>
);

describe("Given a useLocalApi custom hook", () => {
  describe("When it is invoked with the function 'likeAMeme'", () => {
    test("Then it should update de MemeContextProvider data with the liked meme inside", async () => {
      const likedMeme: IMeme = {
        url: "www.hola.es",
        title: "I'm the title",
        author: "Michael Jordan",
        postLink: "www.postlink.es",
        subreddit: "r/www.subreddit.es",
        likes: 25,
        isFavorite: false,
        id: "",
        isRendered: true,
      };

      const { result } = renderHook(() => useLocalApi(), { wrapper: Wrapper });

      act(() => {
        result.current.likeAMeme(likedMeme);
      });

      const { memes } = result.current;

      await waitFor(() => {
        expect(memes).toEqual([]);
      });
    });
  });

  describe("When it is invoked with the function getFavoriteMemes", () => {
    test("Then it should return the favorite memes", async () => {
      const { result } = renderHook(() => useLocalApi(), { wrapper: Wrapper });

      act(() => {
        result.current.getFavoriteMemes();
      });

      const { memes } = result.current;

      await waitFor(() => {
        expect(memes).toEqual([]);
      });
    });
  });

  describe("When it is invoked with the function 'deleteMeme'", () => {
    test("Then it should delete that meme from favorite meme list", async () => {
      const favoriteMemes: IMeme[] = [
        {
          url: "www.hola.es",
          title: "I'm the title",
          author: "Michael Jordan",
          postLink: "www.postlink.es",
          subreddit: "r/www.subreddit.es",
          likes: 25,
          isFavorite: true,
          id: "",
          isRendered: true,
        },
        {
          url: "www.thau.es",
          title: "I'm the Julius",
          author: "Michael Jackson",
          postLink: "www.scbrubles.es",
          subreddit: "r/www.subreddit.es",
          likes: 45,
          isFavorite: true,
          id: "",
          isRendered: true,
        },
      ];

      const { result } = renderHook(() => useLocalApi(), { wrapper: Wrapper });

      act(() => {
        result.current.deleteMeme(favoriteMemes[1]);
      });

      const { memes } = result.current;

      await waitFor(() => {
        expect(memes).toEqual([]);
      });
    });
  });
});
