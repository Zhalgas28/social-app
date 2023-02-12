import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { actions, logout } from "../../redux/authReducer";
import { AppStateType } from "../../redux/redux-store";

type StatePropsType = {
  isAuth: boolean;
  username: null | string;
};

type DispatchPropsType = {
  setUserData: (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean | null
  ) => void;
  setIsAuth: (isAuth: boolean) => void;
  logout: () => void;
};

type PropsType = StatePropsType & DispatchPropsType;

class HeaderContainer extends React.Component<PropsType> {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
    username: state.auth.login,
  };
};
export default connect(mapStateToProps, {
  setUserData: actions.setUserDataAC,
  setIsAuth: actions.setIsAuthAC,
  logout,
})(HeaderContainer);
