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
          localStorage.setItem("id", JSON.stringify(response.data.id).slice(1,-1));
          localStorage.setItem("firstName", JSON.stringify(response.data.firstName).slice(1,-1));
          localStorage.setItem("lastName", JSON.stringify(response.data.lastName).slice(1,-1));
          localStorage.setItem("email", JSON.stringify(response.data.email).slice(1,-1));
          localStorage.setItem("role", JSON.stringify(response.data.role).slice(1,-1));
          localStorage.setItem("token", JSON.stringify(response.data.token).slice(1,-1));
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