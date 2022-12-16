import { connect } from "react-redux";
import React from "react";
import withRouter from "../../hoc/withRouter"
import { addNewPostAC, getProfileTC, setProfileAC } from "../../redux/profileReducer";
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    this.props.getProfile(userId)
  }
  render() {
    if (this.props.profile !== null) {
      return <Profile {...this.props} />;
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
	getProfile: getProfileTC
};

export default compose(
	withRouter,
	connect(mapStateToProps, dispatchs),
)(ProfileContainer)