import { getMyUserData } from "./authReducer";

const SET_INIT: string = "SET-INIT"

type initialStateType = {
  initialized: boolean;
};

const initialState: initialStateType = {
  initialized: false,
};

export default function appReducer(
  state = initialState,
  action: any
): initialStateType {
  switch (action.type) {
    case SET_INIT:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
}

type setInitializedType =  {
  type: typeof SET_INIT
}

const setInitialized = (): setInitializedType => {
  return {
    type: SET_INIT,
  };
};

export const initializeApp = () => (dispatch: any) => {
  const promise = dispatch(getMyUserData());
  Promise.all([promise]).then(() => {
    dispatch(setInitialized());
  });
};
