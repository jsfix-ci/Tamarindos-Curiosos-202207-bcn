import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { IMeme } from "../interfaces/interfaces";
import MemeContextProvider from "../store/context/MemeContext/MemeContextProvider";
import UIContextProvider from "../store/context/UIContext/UIContextProvider";

import useApi from "./useAPI";

interface WrapperProps {
  children: JSX.Element;
}
const Wrapper = ({ children }: WrapperProps) => (
  <MemeContextProvider>{children}</MemeContextProvider>
);
const UIWrapper = ({ children }: WrapperProps) => (
  <UIContextProvider>{children}</UIContextProvider>
);

describe("Given a useAPi custom hook", () => {
  describe("When its invoked", () => {
    const emptyContextExpect: IMeme[] = [];

    const expectedObjectInResponse: IMeme[] = [
      {
        url: "www.hola.es",
        title: "I'm the title",
        author: "Michael Jordan",
        postLink: "www.postlink.es",
        subreddit: "r/www.subreddit.es",
        likes: 25,
        isFavorite: false,
        id: "",
        isRendered: true,
      },
    ];
    test("Then it should update de MemeContext data to 10 memes objects", async () => {
      const { result } = renderHook(useApi, { wrapper: Wrapper });

      expect(result.current.memes).toEqual(emptyContextExpect);

      act(() => {
        result.current.generateMemesAPI();
      });

      await waitFor(() => {
        expect(result.current.memes).toEqual(expectedObjectInResponse);
      });
    });
  });
});
