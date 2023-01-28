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

  login(email, password, rememberMe) {
    return instance.post("auth/login", {
      email,
      password,
      rememberMe
    }).then(response => response.data)
  },

  logout() {
    return instance.delete("auth/login").then(response => response.data)
  }
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get("profile/" + userId).then((response) => {
      return response.data;
    });
  },

  updatePhoto(photo) {
    const formData = new FormData()
    formData.append("image", photo)
    return instance.put("profile/photo", formData, {
      headers: {
        "Content-type": "multipart/form-data"
      }
    }).then(response => {
      return response.data
    })
  },

  getStatus(userId) {
    return instance.get("profile/status/" + userId).then((response) => {
      return response.data
    })
  },

  updateStatus(status) {
    return instance.put("profile/status", {
      status
    }).then(response => response.data)
  },

  updateProfile(profile) {
    return instance.put("profile", profile).then(response => response.data)
  }
}