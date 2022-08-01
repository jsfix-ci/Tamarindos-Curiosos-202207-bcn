import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Given a Card component", () => {
  describe("When it's instantiated and receives a meme picture", () => {
    test("Then it should show a picture", () => {
      const memePicture =
        "https://pd-beamliving-cd.beamliving.com/-/media/14-to-bl/2021-funny-memes-cats-1000x666px.jpg";

      render(<Card />);
      const meme = screen.getByRole("img");

      expect((meme as HTMLImageElement).src).toContain(memePicture);
    });
  });
});
