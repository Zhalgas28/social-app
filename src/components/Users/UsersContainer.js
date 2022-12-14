import React from "react";
import { connect } from "react-redux";
import {
  followTC,
  setUsersAC,
  unfollowTC,
  setTotalUsersCountAC,
  setCurrentPageAC,
	toggleFollowingInProcessAC,
	getUsersThunkCreator,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  changeCurrentPageHandler = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            {...this.props}
            changeCurrentPage={this.changeCurrentPageHandler}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
		followingInProcess: state.usersPage.followingInProcess
  };
};

const dispatchs = {
  follow: followTC,
  unfollow: unfollowTC,
  setUsers: setUsersAC,
  setTotalUsersCount: setTotalUsersCountAC,
  setCurrentPage: setCurrentPageAC,
	toggleFollowingInProcess: toggleFollowingInProcessAC,
	getUsers: getUsersThunkCreator
};

export default connect(mapStateToProps, dispatchs)(UsersContainer);
