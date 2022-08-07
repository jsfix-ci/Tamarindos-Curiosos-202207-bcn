import { IMeme } from "../../interfaces/interfaces";
import { DeleteMemeAction } from "../types/actions";

const DeleteMemeActionCreator = (meme: IMeme): DeleteMemeAction => ({
  type: "deleteMeme",
  payload: meme.id,
});

export default DeleteMemeActionCreator;
