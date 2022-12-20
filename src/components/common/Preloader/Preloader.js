import loader from '../../../images/loader.svg'
import styles from './Preloader.module.css'


function Preloader() {
	return <div className={styles.preloader}>
		<img src={loader} alt="preloader"></img>
	</div>
}

export default Preloader