import { usersAPI, followAPI } from "../api/api";

const FOLLOW: string = "FOLLOW";
const UNFOLLOW: string = "UNFOLLOW";
const SET_USERS: string = "SET-USERS";
const SET_TOTAL_USERS_COUNT: string = "SET-TOTAL-USERS-COUNT";
const SET_CURRENT_PAGE: string = "SET-CURRENT-PAGE";
const TOGGLE_IS_FETCHING: string = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_IN_PROCESS: string = "TOGGLE-FOLLOWING-IN-PROCESS";
const SET_FILTER = "SET-FILTER";

export type UsersFilterType = {
  term: string;
  isFollowed: boolean | null;
};

type initialStateType = {
  users: Array<any>;
  currentPage: number;
  pageSize: number;
  totalUsersCount: number;
  isFetching: boolean;
  followingInProcess: Array<any>;
  filter: UsersFilterType;
};

const initialState: initialStateType = {
  users: [],
  currentPage: 1,
  pageSize: 5,
  totalUsersCount: 0,
  isFetching: false,
  followingInProcess: [],
  filter: {
    term: "",
    isFollowed: null,
  },
};

export default function usersReducer(state = initialState, action: any) {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (action.userId === u.id) {
            return {
              ...u,
              isFollowed: true,
            };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              isFollowed: false,
            };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_FOLLOWING_IN_PROCESS:
      if (action.isFetching) {
        return {
          ...state,
          followingInProcess: [...state.followingInProcess, action.userId],
        };
      }
      return {
        ...state,
        followingInProcess: state.followingInProcess.filter(
          (id) => id !== action.userId
        ),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}

export function setFilter(payload: UsersFilterType) {
  return {
    type: SET_FILTER,
    payload,
  };
}

export function followAC(userId: string | number) {
  return {
    type: FOLLOW,
    userId,
  };
}

export function unfollowAC(userId: string | number) {
  return {
    type: UNFOLLOW,
    userId,
  };
}

export function setUsersAC(users: object) {
  return {
    type: SET_USERS,
    users,
  };
}

export function setTotalUsersCountAC(count: number) {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: count,
  };
}

export function setCurrentPageAC(currentPage: number) {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
}

export function toggleIsFetchingAC(isFetching: boolean) {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
}

export function toggleFollowingInProcessAC(
  isFetching: boolean,
  userId: number | string
) {
  return {
    type: TOGGLE_FOLLOWING_IN_PROCESS,
    isFetching,
    userId,
  };
}

const DefaultUsersFilter = {
  term: "",
  isFollowed: null
}

export const getUsersThunkCreator =
  (
    currentPage: number,
    pageSize: number,
    filter: UsersFilterType = DefaultUsersFilter
  ) =>
  (dispatch: any) => {
    dispatch(toggleIsFetchingAC(true));
    usersAPI.getUsers(currentPage, pageSize, filter.term, filter.isFollowed).then((data) => {
      dispatch(setFilter(filter))
      dispatch(setUsersAC(data.items));
      dispatch(toggleIsFetchingAC(false));
      dispatch(setTotalUsersCountAC(data.totalCount));
    });
  };

export const followTC = (user: any) => (dispatch: any) => {
  dispatch(toggleFollowingInProcessAC(true, user.id));
  followAPI.follow(user.id).then((data) => {
    if (data.resultCode === 0) {
      dispatch(followAC(user.id));
      dispatch(toggleFollowingInProcessAC(false, user.id));
    }
  });
};

export const unfollowTC = (user: any) => (dispatch: any) => {
  dispatch(toggleFollowingInProcessAC(true, user.id));
  followAPI.unfollow(user.id).then((data) => {
    if (data.resultCode === 0) {
      dispatch(unfollowAC(user.id));
      dispatch(toggleFollowingInProcessAC(false, user.id));
    }
  });
};

