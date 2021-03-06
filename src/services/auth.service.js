import axios from "axios";

class AuthService {
  getUser() {
    return axios.get("users/me/");
  }

  register(data) {
    return axios.post("users/", data);
  }

  login(data) {
    return axios.post("jwt/create/", data);
  }

  refresh(data) {
    return axios.post("jwt/refresh/", data);
  }
}

export default new AuthService();
