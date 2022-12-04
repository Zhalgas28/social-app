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

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.toggleIsFetching(true);
    fetch(
      `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
    )
      .then((respone) => respone.json())
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(14);
      });
  }

  changeCurrentPageHandler = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.toggleIsFetching(true);
    fetch(
      `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`
    )
      .then((respone) => respone.json())
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

const mapDispatchToProps = (dispatch) => {
  return {
    follow(userId) {
      dispatch(followAC(userId));
    },

    unfollow(userId) {
      dispatch(unfollowAC(userId));
    },

    setUsers(users) {
      dispatch(setUsersAC(users));
    },

    setTotalUsersCount(count) {
      dispatch(setTotalUsersCountAC(count));
    },

    setCurrentPage(currentPage) {
      dispatch(setCurrentPageAC(currentPage));
    },

    toggleIsFetching(isFetching) {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
