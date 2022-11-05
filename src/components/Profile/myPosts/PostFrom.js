import styles from './PostForm.module.css'

function PostForm() {
	return (
		<form className={styles.form}> 
			<input type='text' name='post' placeholder='Enter new post' />
			<button type='Submit'>Submit</button>
		</form>
	)
}

export default PostForm