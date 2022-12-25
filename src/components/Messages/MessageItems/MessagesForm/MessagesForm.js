import { useForm } from "react-hook-form";
import styles from "./MessagesForm.module.css";

function MessagesForm({ addNewMessageText }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formHandler = (values) => {
    values.messageText && addNewMessageText(values.messageText);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(formHandler)}>
      <input
        {...register("messageText", { required: "This field is required" })}
        type="text"
        placeholder="Enter new message"
      />
      <button>Submit</button>
      {errors.messageText && (
        <span style={{ color: "red" }}>{errors.messageText.message}</span>
      )}
    </form>
  );
}

export default MessagesForm;
