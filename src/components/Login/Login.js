import LoginForm from "./LoginForm/LoginForm";
import styles from "./Login.module.css";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer"
import { Navigate } from "react-router-dom";
 

function Login({ login, isAuth, captchaUrl }) {
  if (isAuth) {
    return <Navigate to={"/profile"} />
  }

  return (
    <div className={styles.login}>
      <h1 className={styles.title}>Login</h1>
      <LoginForm login={login} captchaUrl={captchaUrl} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);
