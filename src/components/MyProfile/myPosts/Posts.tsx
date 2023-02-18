import { FC, memo } from "react";
import PostForm from "./PostForm/PostForm";
import styles from "./Posts.module.css";
import Post from "./Post/Post";

type PropsType = {
  posts: Array<any>
  profile: any
  addNewPostText: (text: string) => void
}

const Posts: FC<PropsType> = (props) => {  
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

export default memo(Posts);
