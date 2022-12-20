import styles from "./LoginForm.module.css";
import { useForm } from "react-hook-form";

function LoginForm() {
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(values) {
    alert(JSON.stringify(values));
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        {...register("username")}
        type="text"
        className={styles.input}
        placeholder="Username"
      />
      <input
        {...register("email")}
        type="text"
        className={styles.input}
        placeholder="Email"
      />
      <input
        {...register("password")}
        type="password"
        className={styles.input}
        placeholder="Password"
      />
      <label className={styles.label}>
        <input {...register("remember")} type="checkbox" />
        remember me
      </label>
      <button className={styles.button}>Login</button>
    </form>
  );
}

export default LoginForm;
