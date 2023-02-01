import { profileAPI } from "../api/api";

const ADD_NEW_POST: string = "ADD-NEW-POST"
const SET_PROFILE: string = "SET-PROFILE"
const SET_STATUS: string = "SET-STATUS"
const UPDATE_PHOTO: string = "UPDATE-PHOTO"

type initialStateType = {
  posts: Array<any>;
  profile: null | object;
  isFetching: boolean;
  status: string;
};

const initialState: initialStateType = {
  posts: [],
  profile: null,
  isFetching: false,
  status: "",
};

export default function profileReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_NEW_POST:
      const newPost = {
        text: action.text,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case UPDATE_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    default:
      return state;
  }
}

export const updatePhotoAC = (photos: any) => {
  return {
    type: UPDATE_PHOTO,
    photos,
  };
};

export const addNewPostAC = (text: string) => {
  return {
    type: ADD_NEW_POST,
    text,
  };
};

export const setProfileAC = (profile: any) => {
  return {
    type: SET_PROFILE,
    profile,
  };
};

export const setStatusAC = (status: string) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const getProfileTC = (userId: string | number) => (dispatch: any) => {
  profileAPI.getProfile(userId).then((data) => {
    dispatch(setProfileAC(data));
  });
};

export const getStatusTC = (userId: string | number) => (dispatch: any) => {
  profileAPI.getStatus(userId).then((data) => {
    dispatch(setStatusAC(data));
  });
};

export const updateStatusTC = (status: string) => (dispatch: any) => {
  profileAPI.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setStatusAC(status));
    }
  });
};

export const updatePhotoTC = (photo: any) => async (dispatch: any) => {
  const data = await profileAPI.updatePhoto(photo);
  if (data.resultCode === 0) {
    dispatch(updatePhotoAC(data.data.photos));
  }
};

export const updateProfileTC =
  (profile: object, setError: any) => (dispatch: any, getState: any) => {
    const id = getState().auth.id;
    return profileAPI.updateProfile(profile).then((data) => {
      if (data.resultCode === 0) {
        dispatch(getProfileTC(id));
      } else {
        setError("updateProfileError", { message: data.messages[0] });
        return Promise.reject();
      }
    });
  };
