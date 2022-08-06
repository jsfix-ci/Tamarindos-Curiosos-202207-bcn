import { LikeMemeAction } from "../types/actions";

const likeMemeActionCreator = (id: string): LikeMemeAction => ({
  type: "likeMemes",
  payload: id,
});

export default likeMemeActionCreator;
