import styles from "./Users.module.css";
import User from "./User/User";
import React from "react";


class Users extends React.Component {
  constructor(props) {
    super(props);
    fetch("https://social-network.samuraijs.com/api/1.0/users")
      .then((respone) => respone.json())
      .then((data) => {
        this.props.setUsers(data.items);
      });
  }

  render() {
    return (
      <div className={styles.users}>
        {this.props.users.map((u) => (
          <User
            user={u}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            key={u.id}
          />
        ))}
      </div>
    );
  }
}

export default Users;
