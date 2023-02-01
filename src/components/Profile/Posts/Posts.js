import PostForm from "./PostForm/PostForm";
import styles from "./Posts.module.css";
import Post from "./Post/Post";

function Posts(props) {
  const { posts, addNewPostText, profile } = props;
  return (
    <div className={styles.posts}>
      <h2>Posts</h2>
      <PostForm addNewPostText={addNewPostText} />
      {posts.map((post, id) => (
        <Post post={post} key={id} profile={profile} />
      ))}
    </div>
  );
}

export default Posts;
