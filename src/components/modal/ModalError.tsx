import ModalErrorStyled from "./ModalErrorStyled";

const ModalError = (): JSX.Element => {
  return (
    <ModalErrorStyled className="modal-container">
      <div className="modal-container__popup">
        <img
          src="img/errorModal.png"
          alt="Sad meme frog"
          className="modal-container__image"
        />
        <span>Somenthing went wrong, I'm sad...</span>
      </div>
    </ModalErrorStyled>
  );
};

export default ModalError;
