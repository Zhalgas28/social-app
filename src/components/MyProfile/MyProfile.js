import styles from "./Profile.module.css";
import Info from "./Info/Info"
import Posts from "./myPosts/Posts"
import React from "react";


class Profile extends React.Component {
  render() {
    return (
      <div className={styles.profile}>
        <h1 className={styles.title}>Profile</h1>
        <Info profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        <Posts posts={this.props.posts} addNewPostText={this.props.addNewPostText} profile={this.props.profile} />
      </div>
    );
  }
}

export default Profile;
