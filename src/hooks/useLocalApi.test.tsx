import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { IMeme } from "../interfaces/interfaces";
import MemeContextProvider from "../store/context/MemeContextProvider";
import useLocalApi from "./useLocalApi";

interface WrapperProps {
  children: JSX.Element;
}

const Wrapper = ({ children }: WrapperProps) => (
  <MemeContextProvider>{children}</MemeContextProvider>
);

describe("Given a useLocalApi custom hook", () => {
  describe("When it is invoked with one meme", () => {
    test("Then it should update de MemeContextProvider data with on meme inside", async () => {
      const likedObject: IMeme = {
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

      const { result } = renderHook(useLocalApi, { wrapper: Wrapper });

      act(() => {
        result.current.likeAMeme(likedObject);
      });

      await waitFor(() => {
        expect(result.current.memes).toEqual(result.current.memes);
      });
    });
  });
});
