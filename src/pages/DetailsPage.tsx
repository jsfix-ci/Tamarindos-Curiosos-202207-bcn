import { useContext } from "react";
import { useParams } from "react-router-dom";
import Details from "../components/Details/Details";
import Header from "../components/Header/Header";
import MemeContext from "../store/context/MemeContext";

const DetailsPage = (): JSX.Element => {
  const { memes } = useContext(MemeContext);
  let { id } = useParams();
  const meme: any = memes.find((meme) => meme.id === id);

  return (
    <>
      <Header currentPage={"detailsPage"} />
      <Details meme={meme} />
    </>
  );
};

export default DetailsPage;
