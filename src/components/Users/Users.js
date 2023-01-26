import React from "react";
import Paginator from "../common/Preloader/Paginator/Paginator";
import User from "./User/User"
import styles from "./Users.module.css"


function Users(props) {

	return (
		<div className={styles.users}>
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