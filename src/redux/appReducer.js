import { getMyUserData } from "./authReducer"

const initialState = {
    initialized: false
}

export default function appReducer(state=initialState, action) {
    switch (action.type) {
        case "SET-INIT":
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

const setInitialized = () => {
    return {
        type: "SET-INIT"
    }
}

export const initializeApp = () => (dispatch) => {
    const promise = dispatch(getMyUserData())
    Promise.all([promise]).then(() => {
        dispatch(setInitialized())
    })
}

