const initialState = {
  users: [],
  currentPage: 1,
  pageSize: 5,
  totalUsersCount: 0,
  isFetching: false,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "FOLLOW":
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
    case "UNFOLLOW":
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
    case "SET-USERS":
      return {
        ...state,
        users: action.users,
      };
    case "SET-TOTAL-USERS-COUNT":
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case "SET-CURRENT-PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case "TOGGLE-IS-FETCHING":
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
}

export function followAC(userId) {
  return {
    type: "FOLLOW",
    userId,
  };
}

export function unfollowAC(userId) {
  return {
    type: "UNFOLLOW",
    userId,
  };
}

export function setUsersAC(users) {
  return {
    type: "SET-USERS",
    users,
  };
}

export function setTotalUsersCountAC(count) {
  return {
    type: "SET-TOTAL-USERS-COUNT",
    totalUsersCount: count,
  };
}

export function setCurrentPageAC(currentPage) {
  return {
    type: "SET-CURRENT-PAGE",
    currentPage,
  };
}

export function toggleIsFetchingAC(isFetching) {
  return {
    type: "TOGGLE-IS-FETCHING",
    isFetching,
  };
}
