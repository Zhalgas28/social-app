import PostForm from "./PostForm/PostForm";
import styles from "./Posts.module.css";
import Post from "./Post/Post";
import React from "react";

function Posts(props) {  
    console.log("RENDER");
    return (
      <div className={styles.posts}>
        <h2>My Posts</h2>
        <PostForm addNewPostText={props.addNewPostText} />
        {props.posts.map((post) => (
          <Post post={post} key={post.id} profile={props.profile} />
        ))}
      </div>
    );
  
}

export default React.memo(Posts);
