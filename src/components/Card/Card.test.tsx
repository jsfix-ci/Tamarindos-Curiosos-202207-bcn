import { render, screen } from "@testing-library/react";
import { IMeme } from "../../interfaces/interfaces";
import { BrowserRouter } from "react-router-dom";
import Card from "./Card";

describe("Given a Card component", () => {
  const fakeMeme: IMeme = {
    author: "",
    likes: 3,
    title: "a",
    url: "https://pd-beamliving-cd.beamliving.com/-/media/14-to-bl/2021-funny-memes-cats-1000x666px.jpg",
    postLink: "prueba",
    subreddit: "aaa",
    isFavorite: false,
  };
  describe("When it's instantiated and receives a meme picture", () => {
    test("Then it should show a picture", () => {
      render(
        <>
          <BrowserRouter>
            <Card meme={fakeMeme} />
          </BrowserRouter>
        </>
      );
      const meme = screen.getByRole("img");

      expect(meme).toBeInTheDocument();
    });
  });

  describe("When it receives a fake meme by props", () => {
    test("Then it should show an image with the fakeMeme url", () => {
      render(
        <>
          <BrowserRouter>
            <Card meme={fakeMeme} />
          </BrowserRouter>
        </>
      );
      const urlCard = screen.getByRole("img");

      expect((urlCard as HTMLImageElement).src).toBe(fakeMeme.url);
    });

    test("Then it should show an image with the fakeMeme title as alt text", () => {
      render(
        <>
          <BrowserRouter>
            <Card meme={fakeMeme} />
          </BrowserRouter>
        </>
      );
      const altCard = screen.getByRole("img");

      expect((altCard as HTMLImageElement).alt).toBe(fakeMeme.title);
    });
  });
});
