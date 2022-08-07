import { useContext } from "react";
import CardList from "../components/CardList/CardList";
import Header from "../components/Header/Header";
import Loading from "../components/Loading/Loading";
import Modal from "../components/Modal/Modal";
import UIContext from "../store/context/UIContext/UIContext";

const HomePage = (): JSX.Element => {
  const { feedback, isLoading } = useContext(UIContext);

  return (
    <>
      {feedback.isOpen && feedback.modalType === "error" ? (
        <Modal type="error" />
      ) : (
        <></>
      )}
      {feedback.isOpen && feedback.modalType === "succes" ? (
        <Modal type="success" />
      ) : (
        <></>
      )}
      {isLoading ? <Loading /> : <></>}
      <Header currentPage="mainPage" />
      <CardList currentPage="mainPage" />
    </>
  );
};

export default HomePage;
