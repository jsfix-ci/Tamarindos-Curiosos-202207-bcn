import CardList from "../components/CardList/CardList";
import Header from "../components/Header/Header";

const MyFavoritesPage = (): JSX.Element => {
  return (
    <>
      <Header currentPage="favoritesPage" />
      <CardList currentPage="favoritesPage" />
    </>
  );
};
export default MyFavoritesPage;
