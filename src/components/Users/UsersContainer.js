import React, { useEffect } from "react";
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
import { getCurrentPage, getPageSize, getUsers } from "../../selectors/usersSelectors";

function UsersContainer(props) {
  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize);
  }, [])

  const changeCurrentPageHandler = (currentPage) => {
    props.setCurrentPage(currentPage);
    props.getUsers(props.currentPage, props.pageSize);
  };

  return (
    <>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <Users
          {...props}
          changeCurrentPage={changeCurrentPageHandler}
        />
      )}
    </>
  );
}


const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
    followingInProcess: state.usersPage.followingInProcess,
  };
};

const dispatchs = {
  follow: followTC,
  unfollow: unfollowTC,
  setUsers: setUsersAC,
  setTotalUsersCount: setTotalUsersCountAC,
  setCurrentPage: setCurrentPageAC,
  toggleFollowingInProcess: toggleFollowingInProcessAC,
  getUsers: getUsersThunkCreator,
};

export default connect(mapStateToProps, dispatchs)(UsersContainer);
