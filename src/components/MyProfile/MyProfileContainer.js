import { connect } from "react-redux";
import React from "react";
import withRouter from "../../hoc/withRouter";
import { addNewPostAC, getProfileTC, setProfileAC } from "../../redux/profileReducer";
import MyProfile from "./MyProfile";
import Preloader from "../common/Preloader/Preloader";
import { withRedirect } from "../../hoc/withRedirect";

class MyProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.userId;
    this.props.getProfile(userId)
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
		userId: state.auth.id
  };
};

const dispatchs = {
  addNewPostText: addNewPostAC,
  setProfile: setProfileAC,
	getProfile: getProfileTC
};

export default connect(
  mapStateToProps,
  dispatchs
)(withRouter(withRedirect(MyProfileContainer)));


