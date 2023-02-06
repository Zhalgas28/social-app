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
  follow(userId: number) {
    return instance.post("follow/" + userId).then((response) => response.data);
  },

  unfollow(userId: number) {
    return instance
      .delete("follow/" + userId)
      .then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId: number | string) {
    return instance.get("profile/" + userId.toString()).then((response) => {
      return response.data;
    });
  },

  updatePhoto(photo: any) {
    const formData = new FormData();
    formData.append("image", photo);
    return instance
      .put("profile/photo", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        return response.data;
      });
  },

  getStatus(userId: number | string) {
    return instance.get("profile/status/" + userId.toString()).then((response) => {
      return response.data;
    });
  },

  updateStatus(status: string) {
    return instance
      .put("profile/status", {
        status,
      })
      .then((response) => response.data);
  },

  updateProfile(profile: any) {
    return instance.put("profile", profile).then((response) => response.data);
  },
};

export const securityAPI = {
  getCaptcha() {
    return instance.get("security/get-captcha-url").then((response) => {
      return response.data;
    });
  },
};

type getMyUserDataType = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: number
  messages: Array<string>
}

export const authAPI = {
  getMyUserData() {
    return instance.get<getMyUserDataType>("auth/me").then((response) => {
      return response.data
    });
  },

  login(
    email: string | null,
    password: string | null,
    rememberMe: boolean,
    captcha: string | null
  ) {
    return instance
      .post("auth/login", {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((response) => response.data);
  },

  logout() {
    return instance.delete("auth/login").then((response) => response.data);
  },
};

export enum resultCodeEnum {
  Success = 0,
  Error = 1,
  CaptchaError = 10,
}