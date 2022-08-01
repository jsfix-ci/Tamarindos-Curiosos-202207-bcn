import { render, screen } from "@testing-library/react";
import IMeme from "../../interfaces/interfaces";
import Details from "./Details";

describe("Given a Details component", () => {
  const fakeMeme: IMeme = {
    author: "jose luis",
    likes: 40,
    postlink: "i'm a link",
    title: "i'm a title",
    url: "https://static.eldiario.es/clip/cfad379c-f641-4a31-b0e9-0e35e2190146_twitter-aspect-ratio_default_0.jpg",
  };
  describe("When it's instantiated with a fake meme as props", () => {
    test("Then it should show an image", () => {
      render(<Details meme={fakeMeme} />);
      const component = screen.getByRole("img", {
        name: fakeMeme.title,
      });

      expect((component as HTMLImageElement).src).toBe(fakeMeme.url);
      expect(component).toBeInTheDocument();
    });

    test("Then it should have an image with the alt text i'm a title", () => {
      render(<Details meme={fakeMeme} />);
      const component = screen.getByRole("img");

      expect((component as HTMLImageElement).alt).toBe(fakeMeme.title);
    });

    test("Then it should show a title info with the title name", () => {
      const text = "Title: i'm a title";

      render(<Details meme={fakeMeme} />);
      const titleInfo = screen.queryByText(text);

      expect(titleInfo).toHaveTextContent(text);
      expect(titleInfo).toBeInTheDocument();
    });

    test("Then it should show a Author info with the author name", () => {
      const author = "Author: jose luis";

      render(<Details meme={fakeMeme} />);
      const authorInfo = screen.queryByText(author);

      expect(authorInfo).toHaveTextContent(author);
      expect(authorInfo).toBeInTheDocument();
    });

    test("Then it should show a Postlink info with the postlink text", () => {
      const link = "Meme url: i'm a link";

      render(<Details meme={fakeMeme} />);
      const linkInfo = screen.queryByText(link);

      expect(linkInfo).toHaveTextContent(fakeMeme.postlink);
      expect(linkInfo).toBeInTheDocument();
    });

    test("Then it should show a Likes info with the info text", () => {
      const likes = "Likes: 40";

      render(<Details meme={fakeMeme} />);
      const likesInfo = screen.queryByText(likes);

      expect(likesInfo).toHaveTextContent(`${fakeMeme.likes}`);
      expect(likesInfo).toBeInTheDocument();
    });
  });
});
