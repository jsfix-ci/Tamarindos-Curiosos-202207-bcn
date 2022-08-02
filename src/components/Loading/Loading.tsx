interface LoadingProps {
  isLoading: boolean;
}

const Loading = ({ isLoading }: LoadingProps): JSX.Element => {
  return (
    <div className="loading-container">
      <img src="img/Loading.gif" alt="A frog dancing for the loading page." />
      <span>Give peepo a second...</span>
    </div>
  );
};
export default Loading;
