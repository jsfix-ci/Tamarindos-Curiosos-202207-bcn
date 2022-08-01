interface FormProps {
  formType: string;
}

const Form = ({ formType }: FormProps): JSX.Element => {
  return (
    <form className="meme-form">
      <label className="meme-form__title">
        Title:
        <input type="text" />
      </label>
      {formType === "create" && (
        <label className="meme-form__url">
          Meme Url:
          <input type="text" />
        </label>
      )}
      <label className="meme-form__likes">
        Likes:
        <input type="text" />
      </label>
      <button className="meme-form__submit">Create</button>
    </form>
  );
};

export default Form;
