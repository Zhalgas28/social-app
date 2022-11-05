import styles from "./Profile.module.css";
import Info from "./Info"
import Posts from "./myPosts/Posts";

function Profile() {
  return (
    <div className={styles.profile}>
      <Info />
			<Posts />
    </div>
  );
}

export default Profile;
