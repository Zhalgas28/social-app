import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setUserDataAC, setIsAuthAC } from "../../redux/authReducer";
import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.getMyUserData().then((data) => {
      if (data.resultCode === 0) {
        this.props.setIsAuth(true);
        const { id, email, login } = data.data;
        this.props.setUserData(id, email, login);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
export default connect(mapStateToProps, {
  setUserData: setUserDataAC,
  setIsAuth: setIsAuthAC,
})(HeaderContainer);
