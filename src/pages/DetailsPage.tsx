import Details from "../components/Details/Details";
import { IMeme } from "../interfaces/interfaces";

const DetailsPage = (): JSX.Element => {
  const meme: IMeme = {
    title: "hola este coso funciona",
    author: "dios, si es verdad que funciona",
    url: "https://pbs.twimg.com/media/FZPh6S_UsAIez3_?format=jpg&name=medium",
    postLink: "no me puedo creer que este funcionando",
    likes: 99999999,
    subreddit: "LOLOLOLOLOLO",
  };
  return <Details meme={meme} />;
};

export default DetailsPage;
