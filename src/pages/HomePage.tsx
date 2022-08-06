import CardList from "../components/CardList/CardList";
import Header from "../components/Header/Header";

const HomePage = (): JSX.Element => {
  return (
    <>
      <Header currentPage="mainPage" />
      <CardList currentPage="mainPage" />
    </>
  );
};

export default HomePage;
