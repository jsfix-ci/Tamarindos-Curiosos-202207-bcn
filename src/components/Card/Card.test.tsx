import { render, screen } from "@testing-library/react";
import { IMeme } from "../../interfaces/interfaces";
import Card from "./Card";

describe("Given a Card component", () => {
  const fakeMeme: IMeme = {
    author: "",
    likes: 3,
    title: "a",
    url: "https://pd-beamliving-cd.beamliving.com/-/media/14-to-bl/2021-funny-memes-cats-1000x666px.jpg",
    postlink: "prueba",
  };
  describe("When it's instantiated and receives a meme picture", () => {
    test("Then it should show a picture", () => {
      render(<Card meme={fakeMeme} />);
      const meme = screen.getByRole("img");

      expect(meme).toBeInTheDocument();
    });
  });

  describe("When it receives a fake meme by props", () => {
    test("Then it should show an image with the fakeMeme url", () => {
      render(<Card meme={fakeMeme} />);
      const urlCard = screen.getByRole("img");

      expect((urlCard as HTMLImageElement).src).toBe(fakeMeme.url);
    });

    test("Then it should show an image with the fakeMeme title as alt text", () => {
      render(<Card meme={fakeMeme} />);
      const altCard = screen.getByRole("img");

      expect((altCard as HTMLImageElement).alt).toBe(fakeMeme.title);
    });

    test("Then it should show a text with the memeFake postlink content", () => {
      render(<Card meme={fakeMeme} />);
      const postLinkCard = screen.queryByText(fakeMeme.postlink);

      expect(postLinkCard).toHaveTextContent(fakeMeme.postlink);
    });
  });
});
