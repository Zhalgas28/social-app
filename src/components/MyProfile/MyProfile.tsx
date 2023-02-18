import { FC } from "react";
import styles from "./Profile.module.css";
import Info from "./Info/Info"
import Posts from "./myPosts/Posts"

type PropsType = {
  posts: Array<any>
  profile: any
  userId: number | string
  status: string
  addNewPostText: (text: string) => void,
  getProfile: (userId: number | string) => void,
  updateStatus: (status: string) => void,
  updatePhoto: (photo: any) => void,
  updateProfile: (profile: object, setError: any) => void,
}

const Profile: FC<PropsType> = (props) => {
  return (
    <div className={styles.profile}>
      <h1 className={styles.title}>Profile</h1>
      <Info profile={props.profile} updateProfile={props.updateProfile}
        status={props.status}
        updateStatus={props.updateStatus}
        updatePhoto={props.updatePhoto} />
      <Posts posts={props.posts}
        addNewPostText={props.addNewPostText}
        profile={props.profile} />
    </div>
  );
}

export default Profile;
