import PostForm from "./PostFrom"
import styles from "./Posts.module.css"
import Post from './Post'


function Posts(props) {
	const { posts, addNewPost } = props;
	console.log(posts)
	return (
		<div className={styles.posts}>
			<h2>My Posts</h2>
			<PostForm addNewPost={addNewPost}/>
			{posts.map((post) => 
				<Post post={post} key={post.id}/>
			)}
		</div>
	)
}

export default Posts