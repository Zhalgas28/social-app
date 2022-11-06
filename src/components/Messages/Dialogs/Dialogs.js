import styles from './Dialogs.module.css'

function Dialogs() {
	return (
		<div className={styles.dialogs}>
			<ul>
				<li><a className={styles.names} href='.'>John</a></li>
				<li><a className={styles.names} href='.'>Danny</a></li>
				<li><a className={styles.names} href='.'>Snow</a></li>
				<li><a className={styles.names} href='.'>Gennie</a></li>
			</ul>
		</div>
	)
}

export default Dialogs