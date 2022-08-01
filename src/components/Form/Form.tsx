interface FormProps {
  formType: string;
}

const Form = ({ formType }: FormProps): JSX.Element => {
  return (
    <form className="new-meme">
      <label htmlFor="title" className="new-meme__label">
        Title:
        <input id="title" type="text" className="new-meme__control" />
      </label>

      {formType === "create" && (
        <label htmlFor="url" className="new-meme__label">
          Meme Url:
          <input id="url" type="text" className="new-meme__control" />
        </label>
      )}

      <label htmlFor="likes" className="new-meme__label">
        Likes:
        <input id="likes" type="text" className="new-meme__control" />
      </label>

      <button type="submit" className="new-meme__label">
        Create
      </button>
    </form>
  );
};

export default Form;
