import PostForm from "./PostFrom"
import styles from "./Posts.module.css"
import Post from './Post'


function Posts() {
	return (
		<div className={styles.posts}>
			<h2>My Posts</h2>
			<PostForm />
			<Post />
			<Post />
			<Post />
			<Post />
		</div>
	)
}

export default Posts