import styles from "./Info.module.css";

const DEFAULT_AVATAR =
  "https://static.vecteezy.com/system/resources/previews/004/696/485/original/shadow-samurai-warrior-on-sunlight-vector.jpg";

function Info({ profile }) {
  const avatar = profile.photos.large || DEFAULT_AVATAR;
  return (
    <div className={styles.info}>
      <div className={styles.ava}>
        <img src={avatar} alt="ava"></img>
      </div>
      <div className={styles.description}>
        <h2>{profile.fullName}</h2>
        <p>{profile.lookingForAJobDescription}</p>
      </div>
    </div>
  );
}

export default Info;
