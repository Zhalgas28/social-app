import { authAPI, securityAPI } from "../api/api";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
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
     case "GET-CAPTCHA-URL":
      return {
        ...state,
        captchaUrl: action.captchaUrl
      } 
    default:
      return state;
  }
}

function getCaptchaUrlAC(captchaUrl) {
  return {
    type: "GET-CAPTCHA-URL",
    captchaUrl,
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
	return authAPI.getMyUserData().then((data) => {
		if (data.resultCode === 0) {
			dispatch(setIsAuthAC(true));
			const { id, email, login } = data.data;
			dispatch(setUserDataAC(id, email, login, true));
		}
	});
}

export const login = (email, password, rememberMe = false, captcha = null, setError) => (dispatch) => {
  authAPI.login(email, password, rememberMe, captcha).then(data => {
    debugger
    if (data.resultCode === 0) {
      dispatch(getMyUserData())
    } else if (data.resultCode === 10) {
      setError("server", {type: "custom", message: data.messages[0]})
      dispatch(getCaptchaTC())
    } else {
      setError("server", {type: "custom", message: data.messages[0]})
    }
  })
}

export const getCaptchaTC = () => (dispatch) => {
  securityAPI.getCaptcha().then(data => {
    dispatch(getCaptchaUrlAC(data.url))
  })
}

export const logout = () => (dispatch) => {
  authAPI.logout().then(data => {
    dispatch(setUserDataAC(null, null, null, false))
  })
}