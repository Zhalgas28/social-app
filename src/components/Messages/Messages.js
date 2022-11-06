import Dialogs from "./Dialogs/Dialogs";
import styles from "./Messages.module.css";
import MessageItems from "./MessageItems/MessageItems";

function Messages() {
  return (
    <div className={styles.messages}>
      <h1 className={styles.title}>Messages</h1>
      <div className={styles.messagesBody}>
        <Dialogs />
        <MessageItems />
      </div>
    </div>
  );
}

export default Messages;
