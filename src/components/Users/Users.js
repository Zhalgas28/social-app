import React from "react";
import Paginator from "../common/Preloader/Paginator/Paginator";
import User from "./User/User"
import styles from "./Users.module.css"
import UsersFilter from "./UsersFilter";


function Users(props) {

	const onFilterChanged = (filter) => {
		props.getUsers(props.currentPage, props.pageSize, filter)
	}

	return (
		<div className={styles.users}>
			<UsersFilter onFilterChanged={onFilterChanged} filter={props.filter} currentPage={props.currentPage} /> 
			<Paginator 
				currentPage={props.currentPage}
				changeCurrentPage={props.changeCurrentPage}
				totalItemsCount={props.totalUsersCount}
				pageSize={props.pageSize}
			/>
			{props.users.map((u) => (
				<User
					user={u}
					follow={props.follow}
					unfollow={props.unfollow}
					key={u.id}
					followingInProcess={props.followingInProcess}
					toggleFollowingInProcess={props.toggleFollowingInProcess}
				/>
			))}
		</div>
	);
}

export default React.memo(Users);