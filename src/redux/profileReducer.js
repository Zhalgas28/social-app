import { v4 as uuidv4 } from "uuid";

export const addNewPostActionCreator = (text) => {
  return {
    type: "ADD-NEW-POST",
    text,
  };
};

const initialState = {
  posts: [],
};

export default function profileReducer(state = initialState, action) {
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
