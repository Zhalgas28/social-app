import { ThunkAction } from "redux-thunk";
import { profileAPI } from "../api/api";
import { AppStateType } from "./redux-store";

const ADD_NEW_POST = "ADD-NEW-POST"
const SET_PROFILE = "SET-PROFILE"
const SET_STATUS = "SET-STATUS"
const UPDATE_PHOTO = "UPDATE-PHOTO"

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

export default function profileReducer(state = initialState, action: ActionsTypes) {
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
  } as const;
};

export const addNewPostAC = (text: string) => {
  return {
    type: ADD_NEW_POST,
    text,
  } as const;
};

export const setProfileAC = (profile: any) => {
  return {
    type: SET_PROFILE,
    profile,
  } as const;
};

export const setStatusAC = (status: string) => {
  return {
    type: SET_STATUS,
    status,
  } as const;
};

export const getProfileTC = (userId: string | number): ThunkType => (dispatch) => {
  profileAPI.getProfile(userId).then((data) => {
    dispatch(setProfileAC(data))
  });
};

export const getStatusTC = (userId: string | number): ThunkType => (dispatch) => {
  profileAPI.getStatus(userId).then((data) => {
    dispatch(setStatusAC(data));
  });
};

export const updateStatusTC = (status: string): ThunkType => (dispatch) => {
  profileAPI.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setStatusAC(status));
    }
  });
};

export const updatePhotoTC = (photo: any): ThunkType => async (dispatch) => {
  const data = await profileAPI.updatePhoto(photo);
  if (data.resultCode === 0) {
    dispatch(updatePhotoAC(data.data.photos));
  }
};

export const updateProfileTC =
  (profile: object, setError: any): ThunkType => (dispatch, getState) => {
    const id = getState().auth.id
    return profileAPI.updateProfile(profile).then((data) => {
      if (data.resultCode === 0) {
        if (id !== null) {
          dispatch(getProfileTC(id))
        }
      } else {
        setError("updateProfileError", { message: data.messages[0] });
        return Promise.reject();
      }
    });
  };

type updatePhotoType = ReturnType<typeof updatePhotoAC>
type addNewPostType = ReturnType<typeof addNewPostAC>
type setProfileType = ReturnType<typeof setProfileAC>
type setStatusType = ReturnType<typeof setStatusAC>
type ActionsTypes = updatePhotoType | addNewPostType | setProfileType | setStatusType
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>