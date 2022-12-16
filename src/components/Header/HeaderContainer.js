import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setUserDataAC, setIsAuthAC, getMyUserData } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getMyUserData()
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
	getMyUserData
})(HeaderContainer);
