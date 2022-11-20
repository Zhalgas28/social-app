import styles from "./MessageItems.module.css";
import Item from "./Item/Item";
import MessagesForm from "./MessagesForm/MessagesForm";

function MessageItems(props) {
	const {messages, addNewMessageText} = props;

  return (
    <div className={styles.items}>
      {messages.map((message) => 
				<Item key={message.id} message={message}/>
			)}

			<MessagesForm addNewMessageText={addNewMessageText}/>
    </div>
  );
}

export default MessageItems;
