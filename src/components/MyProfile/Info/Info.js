import styles from "./Info.module.css";

function Info({ profile }) {
  return (
    <div className={styles.info}>
      <div className={styles.ava}>
        <img src={profile.photos.large} alt="ava"></img>
      </div>
      <div className={styles.description}>
        <h2>{profile.fullName}</h2>
        <p>
          {profile.lookingForAJobDescription}
        </p>
      </div>
    </div>
  );
}

export default Info;
