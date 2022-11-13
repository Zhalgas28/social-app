import PostForm from "./PostForm/PostForm";
import styles from "./Posts.module.css";
import Post from "./Post/Post";

function Posts(props) {
  const { state, dispatch } = props;
  return (
    <div className={styles.posts}>
      <h2>My Posts</h2>
      <PostForm dispatch={dispatch} />
      {state.posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
