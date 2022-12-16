import { v4 as uuidv4 } from "uuid";
import { usersAPI } from "../api/api";

const initialState = {
  posts: [],
  profile: null,
  isFetching: false,
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD-NEW-POST":
      const newPost = {
        id: uuidv4(),
        text: action.text,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case "SET-PROFILE":
      return {
        ...state,
        profile: action.profile,
      };

    default:
      return state;
  }
}

export const addNewPostAC = (text) => {
  return {
    type: "ADD-NEW-POST",
    text,
  };
};

export const setProfileAC = (profile) => {
  return {
    type: "SET-PROFILE",
    profile,
  };
};

export const getProfileTC = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((data) => {
    dispatch(setProfileAC(data));
  });
};
