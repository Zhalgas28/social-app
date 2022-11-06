import styles from "./MessageItems.module.css";
import Item from "./Item";

function MessageItems() {
  return (
    <div className={styles.items}>
      <Item />
      <Item />
      <Item />
      <Item />

      <form className={styles.form}>
        <input type="text" name="post" placeholder="Enter new message" />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}

export default MessageItems;
