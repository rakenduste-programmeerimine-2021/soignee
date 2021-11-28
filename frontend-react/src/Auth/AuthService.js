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
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("firstName", response.data.firstName);
          localStorage.setItem("lastName", response.data.lastName);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("role", response.data.role);
          localStorage.setItem("token", response.data.token);
        }
      } else {
        return response.status;
      }
      return response.data;
    });
  }

  logout() {
    localStorage.removeItem("id");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("token");

  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('token'));;
  }
}

export default new AuthService();