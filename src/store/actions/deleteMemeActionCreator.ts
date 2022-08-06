import { DeleteMemeAction } from "../types/actions";

const DeleteMemeActionCreator = (id: string): DeleteMemeAction => ({
  type: "deleteMeme",
  payload: "id",
});

export default DeleteMemeActionCreator;
