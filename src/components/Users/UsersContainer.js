import React from "react"
import { connect } from "react-redux"
import { followAC, setUsersAC, unfollowAC, setTotalUsersCountAC, setCurrentPageAC } from '../../redux/usersReducer'
import Users from "./Users";


class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch(
      `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
    )
      .then((respone) => respone.json())
      .then((data) => {
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);;
      });
  }

	changeCurrentPageHandler(currentPage) {
		this.props.setCurrentPage(currentPage)
		fetch(
      `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`
    )
      .then((respone) => respone.json())
      .then((data) => {
        this.props.setUsers(data.items);
      });
	}

	render() {
		return <Users {...this.props}/>
	}
}


const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		currentPage: state.usersPage.currentPage,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		follow(userId) {
			dispatch(followAC(userId))
		},

		unfollow(userId) {
			dispatch(unfollowAC(userId))
		},

		setUsers(users) {
			dispatch(setUsersAC(users))
		},

		setTotalUsersCount(count) {
			dispatch(setTotalUsersCountAC(count))
		},

		setCurrentPage(currentPage) {
			dispatch(setCurrentPageAC(currentPage))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)