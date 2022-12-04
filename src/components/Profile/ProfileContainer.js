import { connect } from "react-redux";
import React from "react";
import { addNewPostAC, setProfileAC } from "../../redux/profileReducer";
import Profile from "./Profile";
import Preloader from '../common/Preloader/Preloader'

class ProfileContainer extends React.Component {
	componentDidMount() {
		fetch("https://social-network.samuraijs.com/api/1.0/profile/2")
			.then(response => response.json())
			.then(data => this.props.setProfile(data))
	}
	render() {
		if (this.props.profile !== null) {
			return <Profile {...this.props} />
		}
		return <Preloader />
	}
}

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
		profile: state.profilePage.profile
  };
};

const dispatchs = {
	addNewPostText: addNewPostAC,
	setProfile: setProfileAC
}

export default connect(mapStateToProps, dispatchs)(ProfileContainer);
