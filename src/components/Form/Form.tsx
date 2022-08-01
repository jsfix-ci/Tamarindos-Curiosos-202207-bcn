import { FormStyled, LabelStyled, FormContainer } from "./FormStyled";

interface FormProps {
  formType: string;
}

const Form = ({ formType }: FormProps): JSX.Element => {
  return (
    <FormContainer className="form-container">
      <FormStyled className="new-meme">
        <LabelStyled htmlFor="title" className="new-meme__label">
          Title:
          <input id="title" type="text" className="new-meme__control" />
        </LabelStyled>
        {formType === "create" && (
          <LabelStyled htmlFor="url" className="new-meme__label">
            Meme Url:
            <input id="url" type="text" className="new-meme__control" />
          </LabelStyled>
        )}
        <LabelStyled htmlFor="likes" className="new-meme__label">
          Likes:
          <input id="likes" type="text" className="new-meme__control" />
        </LabelStyled>
        <button type="submit" className="new-meme__label">
          Create
        </button>
      </FormStyled>
    </FormContainer>
  );
};

export default Form;
