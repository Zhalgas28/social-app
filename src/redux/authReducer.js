import { authAPI } from "../api/api";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "SET-USER-DATA":
      const { id, email, login } = action.data;
      return {
        ...state,
        id,
        email,
        login,
      };
		case "SET-IS-AUTH":
			return {
				...state,
				isAuth: action.isAuth
			}
    default:
      return state;
  }
}

export function setUserDataAC(id, email, login) {
  return {
    type: "SET-USER-DATA",
    data: {
      id,
      email,
      login,
    },
  };
}

export function setIsAuthAC(isAuth) {
  return {
    type: "SET-IS-AUTH",
    isAuth,
  };
}

export const getMyUserData = () => (dispatch) => {
	authAPI.getMyUserData().then((data) => {
		if (data.resultCode === 0) {
			dispatch(setIsAuthAC(true));
			const { id, email, login } = data.data;
			dispatch(setUserDataAC(id, email, login));
		}
	});
}