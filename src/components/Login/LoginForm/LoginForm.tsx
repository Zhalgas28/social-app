import { FC } from "react"
import styles from "./LoginForm.module.css";
import { useForm } from "react-hook-form";

type PropsType = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean | undefined,
    captcha: string | null,
    setError: any
  ) => void
  captchaUrl: string | null 
};

type InputsType = {
  email: string
  password: string
  remember: boolean
  captcha: null | string
  server: string
}

const LoginForm: FC<PropsType> = ({ login, captchaUrl }) => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<InputsType>();

  function onSubmit(v: any) {
    login(v.email, v.password, v.remember, v.captcha, setError);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        {...register("email", {
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please enter is valid email",
          },
          required: "Email is required",
        })}
        type="text"
        className={styles.input}
        placeholder="Email"
      />
      {errors.email && (
        <span style={{ color: "red" }}> {errors.email.message}</span>
      )}
      <input
        {...register("password", {
          required: "Password is required",
          minLength: 8,
        })}
        type="password"
        className={styles.input}
        placeholder="Password"
      />
      {errors?.password?.type === "minLength" && (
        <span style={{ color: "red" }}>
          The password must be longer than 8 characters
        </span>
      )}
      {errors.password && (
        <span style={{ color: "red" }}>{errors.password.message}</span>
      )}
      <label className={styles.label}>
        <input {...register("remember")} type="checkbox" />
        remember me
      </label>
      {errors.server && (
        <span style={{ color: "red", fontSize: 20 }}>
          {errors.server.message}
        </span>
      )}
      {captchaUrl && (
        <div>
          <b>Введите текст из картинки:</b>
          <div>
            <img src={captchaUrl} alt="captcha"></img>
          </div>
          <div>
            <input {...register("captcha")} />
          </div>
        </div>
      )}
      <button className={styles.button} onClick={() => clearErrors()}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;
