import { GiConcentrationOrb } from "react-icons/gi";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

function Header({ isAuth, login }) {
	return (
    <header className={styles.header}>
      <GiConcentrationOrb className={styles.logo} />
      <span>Social App</span>
      <span className={styles.isAuth}>
        {isAuth ? login : <NavLink to={"/login"}>Login</NavLink>}
      </span>
    </header>
  );
}

export default Header;
