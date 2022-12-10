import { connect } from "react-redux";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { addNewPostAC, setProfileAC } from "../../redux/profileReducer";
import MyProfile from "./MyProfile";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class MyProfileContainer extends React.Component {
  componentDidMount() {
    let userId = 2;
    usersAPI.getProfile(userId)
      .then((data) => this.props.setProfile(data));
  }
  render() {
    if (this.props.profile !== null) {
      return <MyProfile {...this.props} />;
    }
    return <Preloader />;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
  };
};

const dispatchs = {
  addNewPostText: addNewPostAC,
  setProfile: setProfileAC,
};

export default connect(
  mapStateToProps,
  dispatchs
)(withRouter(MyProfileContainer));

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
