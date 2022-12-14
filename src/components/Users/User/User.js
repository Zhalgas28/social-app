import { NavLink } from "react-router-dom";
import styles from "./User.module.css";

const DEFAULT_USER_IMG_URL =
  "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png";

function User(props) {
  const {
    user,
		follow,
		unfollow,
    followingInProcess,
  } = props;
  return (
    <div className={styles.user}>
      <div className={styles.user__body}>
        <div className={styles.user__info}>
          <div className={styles.user__image}>
            <img
              src={
                user.photos.small !== null
                  ? user.photos.small
                  : DEFAULT_USER_IMG_URL
              }
              alt="ava"
            />
          </div>
          <NavLink to={"/profile/" + user.id}>
            <div className={styles.user__username}>{user.name}</div>
          </NavLink>
        </div>
        <div className={styles.user__location}>
          {user.location?.country} {user.location?.city}
        </div>
      </div>
      <div className={styles.user__footer}>
        <div className={styles.user__status}>
          {user.status !== null ? user.status : "default status"}
        </div>
        {user.isFollowed ? (
          <button
            disabled={followingInProcess.some((id) => id === user.id)}
            type="button"
            className={styles.follow__btn}
            onClick={() => {
							unfollow(user)
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={followingInProcess.some((id) => id === user.id)}
            className={styles.follow__btn}
            onClick={() => {
							follow(user)
            }}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
}

export default User;
