import { v4 as uuidv4 } from "uuid";



const initialState = {
  users: [],
};

export default function usersReducer(state = initialState, action) {
	switch (action.type) {
		case "FOLLOW":
			return {
				...state,
				users: state.users.map((u) => {
					if (action.userId === u.id) {
						return {
							...u, isFollowed: true
						}
					}
					return u
				})
			}
		case "UNFOLLOW":
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return {
							...u, isFollowed: false
						}
					}
					return u
				})
			}			
		case "SET-USERS":
			return {
				...state,
				users: action.users
			}	
		default:
			return state
	}
}

export function followAC(userId) {
	return {
		type: "FOLLOW",
		userId,
	}
}

export function unfollowAC(userId) {
	return {
		type: "UNFOLLOW",
		userId,
	}
}

export function setUsersAC(users) {
	return {
		type: "SET-USERS",
		users,
	}
}