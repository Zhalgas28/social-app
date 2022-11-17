import styles from "./MessageItems.module.css";
import Item from "./Item/Item";
import MessagesForm from "./MessagesForm/MessagesForm";

function MessageItems(props) {
	const {state, dispatch} = props;

  return (
    <div className={styles.items}>
      {state.messages.map((message) => 
				<Item key={message.id} message={message}/>
			)}

			<MessagesForm dispatch={dispatch}/>
    </div>
  );
}

export default MessageItems;
