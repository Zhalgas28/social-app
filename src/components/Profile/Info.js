import styles from './Info.module.css'

function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.ava}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRNSrWvHq8b_NIsDxvRtIBlBN2-rZwFxvCvw&usqp=CAU"></img>
      </div>
      <div className={styles.description}>
        <h1>Username</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      </div>
    </div>
  );
}

export default Info