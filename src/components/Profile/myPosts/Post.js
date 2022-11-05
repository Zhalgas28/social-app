import styles from "./Post.module.css";

function Post() {
  return (
    <div className={styles.post}>
      <div className={styles.info}>
        <div className={styles.ava}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRNSrWvHq8b_NIsDxvRtIBlBN2-rZwFxvCvw&usqp=CAU" />
        </div>
        <div className={styles.name}>User</div>
      </div>
      <p className={styles.text}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.{" "}
      </p>
    </div>
  );
}

export default Post;
