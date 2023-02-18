import { FC } from "react"
import { useForm } from "react-hook-form"
import { useSearchParams } from "react-router-dom"
import { UsersFilterType } from "../../redux/usersReducer"
import { useEffect } from 'react'

type PropsType = {
    onFilterChanged: (filter: UsersFilterType) => void
    filter: UsersFilterType
    currentPage: number
}

type FormFieldsType = {
    term: string
    isFollowed: boolean | null
}

type searchParamsType = {
    term?: string
    page?: string
    friend?: string 
}

const UsersFilter: FC<PropsType> = (props) => {
    const {
        register,
        handleSubmit
    } = useForm<FormFieldsType>({
        defaultValues: props.filter
    })
    
    const [searchParams, setSearchParams] = useSearchParams()

    const onSubmit = (filter: FormFieldsType) => {
        props.onFilterChanged(filter)
    }

    useEffect(() => {
        const newParams: searchParamsType = {}
        if (props.filter.term) { 
            newParams.term = props.filter.term
        }

        if (typeof props.filter.isFollowed === "boolean") {
            newParams.friend = String(props.filter.isFollowed)
        }

        if (props.currentPage !== 1) {
            newParams.page = props.currentPage.toString() 
        }

        setSearchParams(newParams)
    }, [props.filter, props.currentPage])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("term")} />
            <select {...register("isFollowed")}>
                <option value="null" selected>All</option>
                <option value="true">Only followed</option>
                <option value="false">Only unfollowed</option>
            </select>
            <button>Find</button>
        </form>
    )
}

export default UsersFilter