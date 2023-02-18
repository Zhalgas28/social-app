import { connect } from "react-redux";
import { FC, useEffect } from "react";
import withRouter from "../../hoc/withRouter";
import { addNewPostAC, getProfileTC, getStatusTC, setProfileAC, updatePhotoTC, updateProfileTC, updateStatusTC } from "../../redux/profileReducer";
import MyProfile from "./MyProfile";
import Preloader from "../common/Preloader/Preloader";
import { withRedirect } from "../../hoc/withRedirect";
import { AppStateType } from "../../redux/redux-store";

type MapDispatchType = {
  addNewPostText: (text: string) => void,
  setProfile: (profile: any) => void,
	getProfile: (userId: number | string) => void,
	updateStatus: (status: string) => void,
	getStatus: (userId: number | string) => void,
  updatePhoto: (photo: any) => void,
  updateProfile: (profile: object, setError: any) => void,
}

type MapStateType = {
  posts: Array<any>
  profile: any
  userId: number | string
  status: string
}

type PropsType = MapStateType & MapDispatchType

const MyProfileContainer: FC<PropsType> = (props) => {
  useEffect(() => {
    let userId = props.userId;
    props.getProfile(userId)
		props.getStatus(userId)
  }, [])

  if (props.profile !== null) {
    return <MyProfile {...props} />;
  }
  return <Preloader />;
}

const mapStateToProps = (state: AppStateType) => {
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
	getStatus: getStatusTC,
  updatePhoto: updatePhotoTC,
  updateProfile: updateProfileTC,
};

export default connect(
  mapStateToProps,
  dispatchs
)(withRouter(withRedirect(MyProfileContainer)));


