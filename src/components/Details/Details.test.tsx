import { render, screen } from "@testing-library/react";
import { IMeme } from "../../interfaces/interfaces";
import Details from "./Details";

describe("Given a Details component", () => {
  const fakeMeme: IMeme = {
    author: "jose luis",
    likes: 40,
    postLink: "i'm a link",
    title: "i'm a title",
    url: "https://static.eldiario.es/clip/cfad379c-f641-4a31-b0e9-0e35e2190146_twitter-aspect-ratio_default_0.jpg",
    subreddit: "im a subreddit",
    isFavorite: false,
  };
  describe("When it's instantiated with a fake meme", () => {
    test("Then it should show the image from the fake meme", () => {
      render(<Details meme={fakeMeme} />);
      const component = screen.getByRole("img", {
        name: fakeMeme.title,
      });

      expect((component as HTMLImageElement).src).toBe(fakeMeme.url);
      expect(component).toBeInTheDocument();
    });

    test("Then it should show the image from fakeMame with the alt text i'm a title", () => {
      render(<Details meme={fakeMeme} />);
      const component = screen.getByRole("img");

      expect((component as HTMLImageElement).alt).toBe(fakeMeme.title);
    });

    test("Then it should show a title info with the title name", () => {
      render(<Details meme={fakeMeme} />);
      const titleInfo = screen.queryByText(`Title: ${fakeMeme.title}`);

      expect(titleInfo).toHaveTextContent(fakeMeme.title);
      expect(titleInfo).toBeInTheDocument();
    });

    test("Then it should show a Author info with the author name", () => {
      render(<Details meme={fakeMeme} />);
      const authorInfo = screen.queryByText(`Author: ${fakeMeme.author}`);

      expect(authorInfo).toHaveTextContent(fakeMeme.author);
      expect(authorInfo).toBeInTheDocument();
    });

    test("Then it should show a Postlink info with the postlink text", () => {
      render(<Details meme={fakeMeme} />);
      const linkInfo = screen.queryByText(`Meme url: ${fakeMeme.postLink}`);

      expect(linkInfo).toHaveTextContent(fakeMeme.postLink);
      expect(linkInfo).toBeInTheDocument();
    });

    test("Then it should show a Likes info with the info text", () => {
      render(<Details meme={fakeMeme} />);
      const likesInfo = screen.queryByText(`Likes: ${fakeMeme.likes}`);

      expect(likesInfo).toHaveTextContent(`Likes: ${fakeMeme.likes}`);
      expect(likesInfo).toBeInTheDocument();
    });

    test("Then it should show a subreddit info with the subreddit text", () => {
      render(<Details meme={fakeMeme} />);
      const subreditInfo = screen.queryByText(
        `Subreddit: ${fakeMeme.subreddit}`
      );

      expect(subreditInfo).toHaveTextContent(
        `Subreddit: ${fakeMeme.subreddit}`
      );
      expect(subreditInfo).toBeInTheDocument();
    });
  });
});
