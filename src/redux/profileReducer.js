import { v4 as uuidv4 } from "uuid";

export default function profileReducer(state, action) {
  switch (action.type) {
    case "ADD-NEW-POST":
      const newPost = {
        id: uuidv4(),
        text: action.text,
      };
      state.posts.push(newPost);
      return state;
    default:
      return state;
  }
}
