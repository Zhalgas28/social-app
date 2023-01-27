import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Info.module.css";

const DEFAULT_AVATAR = "https://static.vecteezy.com/system/resources/previews/004/696/485/original/shadow-samurai-warrior-on-sunlight-vector.jpg"


function Info(props) {
    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const {
        register,
        handleSubmit
    } = useForm()

    const formHandler = (event) => {
        if (event.target.files[0]) {
            props.updatePhoto(event.target.files[0])
        }
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
                {!editMode ? (
                    <div onDoubleClick={() => setEditMode(true)}>
                        {status || "-------"}
                    </div>
                ) : (
                    <input
                        autoFocus={true}
                        value={status}
                        onBlur={() => {
                            props.updateStatus(status)
                            setEditMode(false);
                        }}
                        onChange={(event) => {setStatus(event.target.value)}}
                    />
                )}
            </div>
            <div className={styles.description}>
                <h2>{props.profile.fullName}</h2>
                <p>{props.profile.lookingForAJobDescription}</p>
            </div>
        </div>
    );
}

export default Info;