import styles from "./Post.module.css";

function Post(props) {
	const { post, profile } = props;
  return (
    <div className={styles.post}>
      <div className={styles.info}>
        <div className={styles.ava}>
          <img
            src={profile.photos.small}
            alt="ava"
          />
        </div>
        <div className={styles.name}>{profile.fullName}</div>
      </div>
      <p className={styles.text}>{post.text}</p>
    </div>
  );
}

export default Post;
