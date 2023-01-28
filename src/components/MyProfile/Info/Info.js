import { useEffect } from "react";
import { useState } from "react";
import styles from "./Info.module.css";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";

const DEFAULT_AVATAR = "https://static.vecteezy.com/system/resources/previews/004/696/485/original/shadow-samurai-warrior-on-sunlight-vector.jpg"


function Info(props) {
    const [status, setStatus] = useState(props.status)
    const [statusEditMode, setStatusEditMode] = useState(false)
    const [formEditMode, setFormEditMode] = useState(false)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    const formHandler = (event) => {
        if (event.target.files[0]) {
            props.updatePhoto(event.target.files[0])
        }
    }

    const onClickEdit = () => {
        setFormEditMode(true)
    }

    const setFormEditModeHandler = () => {
        setFormEditMode(false)
    }

    return (
        <div className={styles.info}>
            <div className={styles.ava}>
                <img
                    src={props.profile.photos.large || DEFAULT_AVATAR}
                    alt="ava"
                ></img>
                <input className={styles.setAva}
                    type="file"
                    onChange={formHandler}
                />
                {!statusEditMode ? (
                    <div onDoubleClick={() => setStatusEditMode(true)}>
                        {status || "-------"}
                    </div>
                ) : (
                    <input
                        autoFocus={true}
                        value={status}
                        onBlur={() => {
                            props.updateStatus(status)
                            setStatusEditMode(false);
                        }}
                        onChange={(event) => { setStatus(event.target.value) }}
                    />
                )}
            </div>
            <div className={styles.description}>
                {formEditMode ? <ProfileDataForm profile={props.profile}
                    updateProfile={props.updateProfile} setFormEditModeHandler={setFormEditModeHandler} /> : <ProfileData profile={props.profile} onClickEdit={onClickEdit} />}
            </div>
        </div>
    );
}

export default Info;