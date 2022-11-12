import { useState } from "react";
import styles from "./PostForm.module.css";

function PostForm({ addNewPost }) {
  const [inputText, setInputText] = useState("");

  const formHandler = (event) => {
    event.preventDefault();
    inputText && addNewPost(inputText);
    setInputText("");
  };
  return (
    <form className={styles.form} onSubmit={formHandler}>
      <input
        type="text"
        name="post"
        placeholder="Enter new post"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="Submit">Submit</button>
    </form>
  );
}

export default PostForm;
