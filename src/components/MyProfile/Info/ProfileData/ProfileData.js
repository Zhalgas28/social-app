import styles from "./ProfileData.module.css"

const ProfileData = ({profile, onClickEdit}) => {
    return (
        <div>
            <button onClick={onClickEdit} >Edit</button>
            <h2>{profile.fullName}</h2>
            <div>
                <b>Looking for a job: </b> {profile.lookingForAJob ? "Да" : "Нет"}
            </div>
            { profile.lookingForAJob &&
                <div>
                    <b>My skills: </b> {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me: </b> {profile.aboutMe}
            </div>
            <Contacts contacts={profile.contacts} />  
        </div>
    )
}

const Contacts = ({contacts}) => {
    return <div className={styles.contacts}>
        <b>Contacts: </b>
        {Object.keys(contacts).map((key) => {
            return <Contact key={key} name={key} value={contacts[key]} />
        })}
    </div>
}

const Contact = ({name, value}) => {
    return <div className={ styles.contact }>
        <b>{name}: </b> {value}
    </div>
}

export default ProfileData