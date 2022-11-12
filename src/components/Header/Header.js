import { GiConcentrationOrb } from "react-icons/gi";

import styles from "./Header.module.css";


function Header() {
  return (
    <header className={styles.header}>
      <GiConcentrationOrb className={styles.logo} />
			<span>Social App</span>
    </header>
  );
}

export default Header
