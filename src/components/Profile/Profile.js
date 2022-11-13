import styles from "./Profile.module.css";
import Info from "./Info"
import Posts from "./myPosts/Posts";

function Profile(props) {
	const { state, addNewPost } = props;
	debugger;

  return (
    <div className={styles.profile}>
			<h1 className={styles.title}>Profile</h1>
      <Info />
			<Posts state={state} addNewPost={addNewPost}/>
    </div>
  );
}

export default Profile;
