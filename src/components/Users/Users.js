import React from "react";
import User from "./User/User"
import styles from "./Users.module.css"


function Users(props) {
	let pagesCount = Math.ceil(
		props.totalUsersCount / props.pageSize
	);

	const pages = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div className={styles.users}>
			<div className={styles.pagesNumbers}>
				{pages.map((page) => {
					return (
						<span
							key={page}
							className={
								page === props.currentPage ? styles.currentPage : undefined
							}
							onClick={() => props.changeCurrentPage(page)}
						>
							{page}
						</span>
					);
				})}
			</div>
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