import { v4 as uuidv4 } from "uuid";
import { profileAPI } from "../api/api";

const initialState = {
  posts: [],
  profile: null,
  isFetching: false,
  status: "",
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
    case "SET-STATUS":
      return {
        ...state,
        status: action.status,
      };
     case "UPDATE-PHOTO":
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      } 
    default:
      return state;
  }
}

export const updatePhotoAC = (photos) => {
  return {
    type: "UPDATE-PHOTO",
    photos,
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

export const setStatusAC = (status) => {
  return {
    type: "SET-STATUS",
    status,
  };
};

export const getProfileTC = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((data) => {
    dispatch(setProfileAC(data));
  });
};

export const getStatusTC = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((data) => {
    dispatch(setStatusAC(data));
  });
};

export const updateStatusTC = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
			dispatch(setStatusAC(status))
    }
  });
};

export const updatePhotoTC = (photo) => async (dispatch) => {
  const data = await profileAPI.updatePhoto(photo)
  if (data.resultCode === 0) {
    dispatch(updatePhotoAC(data.data.photos))
  }
}

export const updateProfileTC = (profile, setError) => (dispatch, getState) => {
  const id = getState().auth.id
  return profileAPI.updateProfile(profile).then((data) => {
    if (data.resultCode === 0) {
      dispatch(getProfileTC(id))
    } else {
      setError("updateProfileError", {message: data.messages[0]})
      return Promise.reject()
    }
  })
}