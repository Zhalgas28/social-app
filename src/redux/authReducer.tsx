import { authAPI, resultCodeEnum, securityAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";
const SET_IS_AUTH = "SET-IS-AUTH";
const GET_CAPTCHA_URL = "GET-CAPTCHA-URL";

type initialStateType = {
  id: null | number | string;
  email: null | string;
  login: null | string;
  isAuth: boolean;
  captchaUrl: null | string;
};

const initialState: initialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

export default function authReducer(
  state = initialState,
  action: any
): initialStateType {
  switch (action.type) {
    case SET_USER_DATA:
      const { id, email, login, isAuth } = action.data;
      return {
        ...state,
        id,
        email,
        login,
        isAuth,
      };
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.isAuth,
      };
    case GET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      };
    default:
      return state;
  }
}

export const actions = {
  getCaptchaUrlAC: (captchaUrl: string) => {
    return {
      type: GET_CAPTCHA_URL,
      captchaUrl,
    };
  },
  setUserDataAC: (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean | null
  ) => {
    return {
      type: SET_USER_DATA,
      data: {
        id,
        email,
        login,
        isAuth,
      },
    } as const;
  },
  setIsAuthAC: (isAuth: boolean) => {
    return {
      type: SET_IS_AUTH,
      isAuth,
    } as const;
  }
};


export const getMyUserData = () => (dispatch: any) => {
  return authAPI.getMyUserData().then((data) => {
    if (data.resultCode === resultCodeEnum.Success) {
      dispatch(actions.setIsAuthAC(true));
      const { id, email, login } = data.data;
      dispatch(actions.setUserDataAC(id, email, login, true));
    }
  });
};

export const login =
  (
    email: string,
    password: string,
    rememberMe = false,
    captcha: string | null,
    setError: any
  ) =>
  (dispatch: any) => {
    authAPI.login(email, password, rememberMe, captcha).then((data) => {
      debugger;
      if (data.resultCode === resultCodeEnum.Success) {
        dispatch(getMyUserData());
      } else if (data.resultCode === resultCodeEnum.CaptchaError) {
        setError("server", { type: "custom", message: data.messages[0] });
        dispatch(getCaptchaTC());
      } else {
        setError("server", { type: "custom", message: data.messages[0] });
      }
    });
  };

export const getCaptchaTC = () => (dispatch: any) => {
  securityAPI.getCaptcha().then((data) => {
    dispatch(actions.getCaptchaUrlAC(data.url));
  });
};

export const logout = () => (dispatch: any) => {
  authAPI.logout().then((data) => {
    dispatch(actions.setUserDataAC(null, null, null, false));
  });
};

