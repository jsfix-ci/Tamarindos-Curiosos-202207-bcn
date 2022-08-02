import IMeme from "../../interfaces/interfaces";
import Card from "../Card/Card";
import CardListStyled from "./CardListStyled";

const fakeMemes: IMeme[] = [
  {
    author: "",
    likes: 3,
    title: "",
    url: "https://pd-beamliving-cd.beamliving.com/-/media/14-to-bl/2021-funny-memes-cats-1000x666px.jpg",
    postlink: "prueba",
  },
  {
    author: "",
    likes: 8,
    title: "",
    url: "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/canvas/2021/10/30/85f2cb5f-44f8-4f2f-a813-63e657e11acc_5065cac7.jpg?itok=gY-K9HdU&v=1635566576",
    postlink: "prueba3",
  },
];

const CardList = (): JSX.Element => {
  return (
    <CardListStyled>
      <ul className="meme-list">
        {fakeMemes.map((fakeMeme) => (
          <li>
            <Card meme={fakeMeme} />
          </li>
        ))}
      </ul>
    </CardListStyled>
  );
};

export default CardList;
