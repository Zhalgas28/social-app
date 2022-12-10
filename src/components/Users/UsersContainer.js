import React from "react";
import { connect } from "react-redux";
import {
  followAC,
  setUsersAC,
  unfollowAC,
  setTotalUsersCountAC,
  setCurrentPageAC,
  toggleIsFetchingAC,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setUsers(data.items);
        this.props.toggleIsFetching(false);
				this.props.setTotalUsersCount(40)
      });
  }

  changeCurrentPageHandler = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.toggleIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setUsers(data.items);
        this.props.toggleIsFetching(false);
      });
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
  };
};

const dispatchs = {
  follow: followAC,
  unfollow: unfollowAC,
  setUsers: setUsersAC,
  setTotalUsersCount: setTotalUsersCountAC,
  setCurrentPage: setCurrentPageAC,
  toggleIsFetching: toggleIsFetchingAC,
};

export default connect(mapStateToProps, dispatchs)(UsersContainer);
