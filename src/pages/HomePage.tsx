import { useContext } from "react";
import CardList from "../components/CardList/CardList";
import Header from "../components/Header/Header";
import Loading from "../components/Loading/Loading";
import UIContext from "../store/context/UIContext/UIContext";

const HomePage = (): JSX.Element => {
  const { isLoading } = useContext(UIContext);

  return (
    <>
      {isLoading ? <Loading /> : <></>}
      <Header currentPage="mainPage" />
      <CardList currentPage="mainPage" />
    </>
  );
};

export default HomePage;
