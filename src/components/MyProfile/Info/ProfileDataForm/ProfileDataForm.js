
import { useForm } from "react-hook-form"

const ProfileDataForm = ({ profile, setFormEditModeHandler, updateProfile}) => {
    const {
        register,
        handleSubmit,
        setError,
        formState: {errors}
    } = useForm({ defaultValues: profile })

    const onSubmit = (values) => {
        updateProfile(values, setError).then(() => {
            setFormEditModeHandler()
        }).catch(() => {
            console.log("error")
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            { errors.updateProfileError && <div>{errors.updateProfileError.message}</div> }
            <button>Save</button>
            <div>
                <b>Full Name: </b>
                <input {...register("fullName")} />
            </div>
            <div>
                <b>Looking for a job: </b> <input {...register("lookingForAJob")} type="checkbox" />
            </div>
            <div>
                <b>My skills: </b> <textarea {...register("lookingForAJobDescription")} />
            </div>

            <div>
                <b>About me: </b> <textarea  {...register("aboutMe")} />
            </div>
            <h1>Contacts:</h1>
            {Object.keys(profile.contacts).map((name, index) => {
                return <div key={index}>
                    <input placeholder={name} {...register("contacts." + name)} />
                </div>
            })}
        </form>
    )
}

export default ProfileDataForm