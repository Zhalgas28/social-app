import LoginForm from "./LoginForm/LoginForm";
import styles from "./Login.module.css";


function Login() {

  return (
    <div className={styles.login}>
      <h1 className={styles.title}>Login</h1>
      <LoginForm />
    </div>
  );
}

export default Login;
