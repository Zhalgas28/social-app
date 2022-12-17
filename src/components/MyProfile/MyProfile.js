import styles from "./Profile.module.css";
import Info from "./Info/Info"
import Posts from "./myPosts/Posts"


function Profile(props) {
	const { profile, posts, addNewPostText, status, updateStatus } = props;

  return (
    <div className={styles.profile}>
			<h1 className={styles.title}>Profile</h1>
      <Info profile={profile} status={status} updateStatus={updateStatus}/>
			<Posts posts={posts} addNewPostText={addNewPostText} profile={profile}/>
    </div>
  );
}

export default Profile;
