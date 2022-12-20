import { useForm } from 'react-hook-form';
import styles from "./MessagesForm.module.css";

function MessagesForm({ addNewMessageText }) {
	const { register, handleSubmit, reset } = useForm()

  const formHandler = (values) => {
		values.messageText && addNewMessageText(values.messageText)
		reset()
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(formHandler)}>
      <input
				{...register("messageText")}
        type="text"
        placeholder="Enter new message"
      />
      <button>Submit</button>
    </form>
  );
}

export default MessagesForm;
