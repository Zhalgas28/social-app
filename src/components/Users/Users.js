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
								page === props.currentPage && styles.currentPage
							}
							onClick={() => props.changeCurrentPageHandler(page)}
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
				/>
			))}
		</div>
	);
}

export default Users