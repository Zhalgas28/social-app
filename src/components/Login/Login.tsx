import { FC } from "react"
import LoginForm from "./LoginForm/LoginForm";
import styles from "./Login.module.css";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";

type PropsType = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean | undefined,
    captcha: string | null,
    setError: any
  ) => void;
  isAuth: boolean;
  captchaUrl: string | null;
};

const Login: FC<PropsType> = ({ login, isAuth, captchaUrl }) => {
  if (isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div className={styles.login}>
      <h1 className={styles.title}>Login</h1>
      <LoginForm login={login} captchaUrl={captchaUrl} />
    </div>
  );
}

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
