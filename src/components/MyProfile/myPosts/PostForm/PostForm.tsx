import { FC } from "react";
import { useForm } from "react-hook-form";
import styles from "./PostForm.module.css";

type PropsType = {
  addNewPostText: (text: string) => void;
};

type FormValuesType = {
  newPostMessage: string
}

const PostForm: FC<PropsType> = ({ addNewPostText }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValuesType>();

  const formHandler = (values: FormValuesType) => {
    values.newPostMessage && addNewPostText(values.newPostMessage);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(formHandler)}>
      <input
        {...register("newPostMessage", { required: "This field is required" })}
        type="text"
        placeholder="Enter new post"
      />
      <button>Submit</button>
      <br />
      {errors.newPostMessage && (
        <span style={{ color: "red", fontSize: 20 }}>
          {errors.newPostMessage.message}
        </span>
      )}
    </form>
  );
};

export default PostForm;
