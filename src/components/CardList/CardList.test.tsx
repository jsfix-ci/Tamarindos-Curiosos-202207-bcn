import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { IMeme } from "../../interfaces/interfaces";
import MemeContext from "../../store/context/MemeContext";
import CardList from "./CardList";

describe("Given a CardList component", () => {
  describe("When it receives a list with two memes", () => {
    test("Then it should show two memes on the screen", () => {
      const newMemes: IMeme[] = [
        {
          author: "fernando",
          likes: 23,
          postLink: "isdicoders",
          subreddit: "muerte",
          title: "death factory",
          url: "http:www.muerteydestrucción/",
          isFavorite: false,
          id: "",
        },
        {
          author: "nacho",
          likes: 28,
          postLink: "isdicoders2",
          subreddit: "pusky",
          title: "nachosConQueso",
          url: "http:www.mamorut.es/",
          isFavorite: false,
          id: "",
        },
      ];
      const currentPage = "mainPage";

      render(
        <BrowserRouter>
          <MemeContext.Provider
            value={{
              memes: newMemes,
              dispatch: () => {
                jest.fn();
              },
            }}
          >
            <CardList currentPage={currentPage} />
          </MemeContext.Provider>
        </BrowserRouter>
      );

      const cardList = screen.getAllByRole("listitem");

      expect(cardList).toHaveLength(newMemes.length);
    });
  });
});
