import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "043039b2-d198-4cb9-b925-188c3e98d352",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((response) => response.data);
  },
  getProfile(userId) {
    return instance.get("profile/" + userId).then((response) => {
      return response.data;
    });
  },
};

export const followAPI = {
  follow(userId) {
    return instance.post("follow/" + userId).then((response) => response.data);
  },

  unfollow(userId) {
		return instance.delete("follow/" + userId).then((response) => response.data);
	},
};

export const authAPI = {
  getMyUserData() {
    return instance.get("auth/me").then((response) => {
      return response.data;
    });
  },
};
