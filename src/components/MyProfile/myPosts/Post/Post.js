import styles from "./Post.module.css";

const DEFAULT_AVATAR = "https://static.vecteezy.com/system/resources/previews/004/696/485/original/shadow-samurai-warrior-on-sunlight-vector.jpg"

function Post(props) {
	const { post, profile } = props;
  return (
    <div className={styles.post}>
      <div className={styles.info}>
        <div className={styles.ava}>
          <img
            src={profile.photos.small || DEFAULT_AVATAR}
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
