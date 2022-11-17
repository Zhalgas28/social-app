import { useState } from 'react'
import { addNewMessageActionCreator } from "../../../../App";
import styles from "./MessagesForm.module.css";

function MessagesForm({ dispatch }) {
  const [messageText, setMessageText] = useState("");

  const formHandler = (event) => {
    event.preventDefault();
		messageText && dispatch(addNewMessageActionCreator(messageText))
		setMessageText("")
  };

  return (
    <form className={styles.form} onSubmit={formHandler}>
      <input
        type="text"
        name="post"
        placeholder="Enter new message"
        value={messageText}
				onChange={(e) => setMessageText(e.target.value)}
      />
      <button type="Submit">Submit</button>
    </form>
  );
}

export default MessagesForm;
