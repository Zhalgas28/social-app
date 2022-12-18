import { connect } from "react-redux";
import React from "react";
import withRouter from "../../hoc/withRouter";
import { addNewPostAC, getProfileTC, getStatusTC, setProfileAC, updateStatusTC } from "../../redux/profileReducer";
import MyProfile from "./MyProfile";
import Preloader from "../common/Preloader/Preloader";
import { withRedirect } from "../../hoc/withRedirect";

class MyProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.userId;
    this.props.getProfile(userId)
		this.props.getStatus(userId)
  }

	componentDidUpdate() {
		
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
		userId: state.auth.id,
		status: state.profilePage.status
  };
};

const dispatchs = {
  addNewPostText: addNewPostAC,
  setProfile: setProfileAC,
	getProfile: getProfileTC,
	updateStatus: updateStatusTC,
	getStatus: getStatusTC
};

export default connect(
  mapStateToProps,
  dispatchs
)(withRouter(withRedirect(MyProfileContainer)));


