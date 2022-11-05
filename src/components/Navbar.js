import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a href=".">Profile</a>
        </li>
        <li>
          <a href=".">Messages</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
