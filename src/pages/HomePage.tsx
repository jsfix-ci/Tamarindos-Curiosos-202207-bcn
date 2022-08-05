import CardList from "../components/CardList/CardList";
import Toaster from "../components/Toaster/Toaster";

const HomePage = (): JSX.Element => {
  return (
    <>
      <Toaster status="memeCreated" />
      <CardList />
    </>
  );
};

export default HomePage;
