import styles from "./Profile.module.css";
import Info from "./Info"
import Posts from "./myPosts/Posts";

function Profile(props) {
	const { store } = props;
	debugger;

  return (
    <div className={styles.profile}>
			<h1 className={styles.title}>Profile</h1>
      <Info />
			<Posts store={store}/>
    </div>
  );
}

export default Profile;
