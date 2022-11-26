import { addNewPostActionCreator } from "../../redux/profileReducer";
import Profile from "./Profile";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPostText(text) {
      dispatch(addNewPostActionCreator(text));
    },
  };
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
