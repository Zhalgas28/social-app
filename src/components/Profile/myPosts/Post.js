import styles from "./Post.module.css";

function Post({ post }) {
  return (
    <div className={styles.post}>
      <div className={styles.info}>
        <div className={styles.ava}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRNSrWvHq8b_NIsDxvRtIBlBN2-rZwFxvCvw&usqp=CAU"
            alt="ava"
          />
        </div>
        <div className={styles.name}>User</div>
      </div>
      <p className={styles.text}>{post.text}</p>
    </div>
  );
}

export default Post;
