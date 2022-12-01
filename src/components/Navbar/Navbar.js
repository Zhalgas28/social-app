import styles from "./Navbar.module.css";
import { Link } from "react-router-dom"


function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/messages">Messages</Link>
        </li>
				<li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
