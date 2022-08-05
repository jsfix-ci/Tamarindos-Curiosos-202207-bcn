import {
  CreateContainerStyled,
  CreateSpanStyled,
  DeleteContainerStyled,
  ImageStyled,
  SpanStyled,
} from "./ToasterStyled";

interface ToasterProps {
  status: "memeCreated" | "memeDeleted" | "none";
}

const Toaster = ({ status }: ToasterProps): JSX.Element => {
  return (
    <>
      {status === "memeDeleted" && (
        <DeleteContainerStyled>
          <ImageStyled src="img/toaster.png" alt="It's a happy frog" />
          <SpanStyled>Your meme has been removed succesfully!</SpanStyled>
        </DeleteContainerStyled>
      )}
      {status === "memeCreated" && (
        <CreateContainerStyled>
          <ImageStyled src="img/toaster.png" alt="It's a happy frog" />
          <CreateSpanStyled>
            Your meme has been created succesfully!
          </CreateSpanStyled>
        </CreateContainerStyled>
      )}
      {status === "none" && <></>}
    </>
  );
};
export default Toaster;
