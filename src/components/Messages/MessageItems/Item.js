import styles from './Item.module.css'

function Item() {
  return (
    <div className={styles.item}>
      <div className={styles.ava}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRNSrWvHq8b_NIsDxvRtIBlBN2-rZwFxvCvw&usqp=CAU"
          alt="ava"
        />
      </div>
      <div className={styles.name}>Username</div>
      <p className={styles.message}>Some text </p>
    </div>
  );
}

export default Item
