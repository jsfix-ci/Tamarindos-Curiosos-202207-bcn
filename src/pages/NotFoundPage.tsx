import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";

const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <Header currentPage={"notFoundPage"} />
      <Modal type="error" />
    </>
  );
};
export default NotFoundPage;
