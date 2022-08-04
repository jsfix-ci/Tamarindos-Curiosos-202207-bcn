import ModalStyled from "./ModalStyled";

interface ModalProps {
  type: string;
}

const Modal = ({ type }: ModalProps): JSX.Element => {
  return (
    <ModalStyled className="modal-container">
      {type === "error" && (
        <div className="modal-container__popup--error">
          <img
            src="img/errorModal.png"
            alt="Sad meme frog"
            className="modal-container__image"
          />
          <span>Somenthing went wrong, I'm sad...</span>
        </div>
      )}
      {type === "success" && (
        <div className="modal-container__popup--success">
          <img
            src="img/successModal.png"
            alt="Happy meme frog"
            className="modal-container__image"
          />
          <span>Success!!</span>
        </div>
      )}
    </ModalStyled>
  );
};

export default Modal;
