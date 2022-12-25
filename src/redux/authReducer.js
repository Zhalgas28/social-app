import { redirect, useNavigate } from "react-router-dom";
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
      const { id, email, login, isAuth } = action.data;
      return {
        ...state,
        id,
        email,
        login,
        isAuth
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

export function setUserDataAC(id, email, login, isAuth) {
  return {
    type: "SET-USER-DATA",
    data: {
      id,
      email,
      login,
      isAuth
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
			dispatch(setUserDataAC(id, email, login, true));
		}
	});
}

export const login = (email, password, rememberMe, setError) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then(data => {
    if (data.resultCode === 0) {
      dispatch(getMyUserData())
    } else {
      setError("server", {message: "Email or Password is incorrect"})
    }
  })
}

export const logout = () => (dispatch) => {
  authAPI.logout().then(data => {
    dispatch(setUserDataAC(null, null, null, false))
  })
}