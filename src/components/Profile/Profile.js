import styles from "./Profile.module.css";
import Info from "./Info/Info"
import PostsContainer from "./myPosts/PostsContainer"


function Profile({ store }) {
  return (
    <div className={styles.profile}>
			<h1 className={styles.title}>Profile</h1>
      <Info />
			<PostsContainer store={store}/>
    </div>
  );
}

export default Profile;
