import styles from "./Profile.module.css";
import Info from "./Info/Info"
import Posts from "./myPosts/Posts"


function Profile(props) {
	const { profile, posts, addNewPostText } = props;
  return (
    <div className={styles.profile}>
			<h1 className={styles.title}>Profile</h1>
      <Info profile={profile}/>
			<Posts posts={posts} addNewPostText={addNewPostText} profile={profile}/>
    </div>
  );
}

export default Profile;
