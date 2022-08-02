import {
  ImageStyled,
  LoadingContainerStyled,
  SpanStyled,
} from "./LoadingStyled";

interface LoadingProps {
  isLoading: boolean;
}

const Loading = ({ isLoading }: LoadingProps): JSX.Element => {
  return (
    <>
      {isLoading && (
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
