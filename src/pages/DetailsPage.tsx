import Details from "../components/Details/Details";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
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
  return (
    <>
      <Header />
      <Details meme={meme} />
      <Footer />
    </>
  );
};

export default DetailsPage;
