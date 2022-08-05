import CardList from "../components/CardList/CardList";
import Header from "../components/Header/Header";
import Toaster from "../components/Toaster/Toaster";

const HomePage = (): JSX.Element => {
  return (
    <>
      <Toaster status="memeCreated" />
      <Header currentPage={"mainPage"} />
      <CardList />
    </>
  );
};

export default HomePage;
