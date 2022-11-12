import PostForm from "./PostFrom";
import styles from "./Posts.module.css";
import Post from "./Post";

function Posts(props) {
  const { store } = props;
  return (
    <div className={styles.posts}>
      <h2>My Posts</h2>
      <PostForm addNewPost={store.addNewPost} />
      {store.getState().posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
