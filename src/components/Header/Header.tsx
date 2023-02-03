import { FC } from "react";
import { GiConcentrationOrb } from "react-icons/gi";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

type PropsType = {
  isAuth: boolean
  username: string | null
  logout: () => void
}

const Header: FC<PropsType> = ({ isAuth, username, logout }) => {
	return (
    <header className={styles.header}>
      <GiConcentrationOrb className={styles.logo} />
      <span>Social App</span>
      <span className={styles.isAuth}>
        {isAuth 
        ? <span>
            <NavLink to={"/profile"}>{username}</NavLink>
            <button onClick={() => logout()} >Logout</button>
          </span> 
        : <NavLink to={"/login"}>Login</NavLink>}
      </span>
    </header>
  );
}

export default Header;
