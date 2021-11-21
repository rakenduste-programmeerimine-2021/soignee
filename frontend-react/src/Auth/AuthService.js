import axios from "axios";

const API_URL = "http://localhost:8081/api/auth/";

class AuthService {
  login(email, password) {
    return axios
    .post(API_URL + "login", {
      email,
      password
    })
    .then(response => {
      if (response.status === 200) {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
      } else {
        return response.status;
      }
      return response.data;
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();