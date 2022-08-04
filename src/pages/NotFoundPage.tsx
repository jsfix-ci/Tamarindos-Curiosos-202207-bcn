import Header from "../components/Header/Header";
import ModalError from "../components/modal/ModalError";

const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <Header currentPage={"notFoundPage"} />
      <ModalError />
    </>
  );
};
export default NotFoundPage;
