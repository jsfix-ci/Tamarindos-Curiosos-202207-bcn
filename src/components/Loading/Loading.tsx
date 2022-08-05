import { useContext } from "react";
import UIContext from "../../store/context/UIContext/UIContext";
import {
  ImageStyled,
  LoadingContainerStyled,
  SpanStyled,
} from "./LoadingStyled";

const Loading = (): JSX.Element => {
  const { ui } = useContext(UIContext);
  return (
    <>
      {ui.isLoading && (
        <LoadingContainerStyled className="loading-container">
          <ImageStyled
            src="img/Loading.gif"
            alt="A frog dancing for the loading page."
          />
          <SpanStyled>Give peepo a second...</SpanStyled>
        </LoadingContainerStyled>
      )}
    </>
  );
};
export default Loading;
