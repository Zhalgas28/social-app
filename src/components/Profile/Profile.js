import styles from "./Profile.module.css";
import Info from "./Info/Info"
import Posts from "./myPosts/Posts"


function Profile(props) {
	const { posts, addNewPostText } = props;
  return (
    <div className={styles.profile}>
			<h1 className={styles.title}>Profile</h1>
      <Info />
			<Posts posts={posts} addNewPostText={addNewPostText} />
    </div>
  );
}

export default Profile;
