import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

const apiHandler = {
  service,

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/api/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // getItems() {
  //   return service
  //     .get("/api/items")
  //     .then((res) => res.data)
  //     .catch(errorHandler);
  // },

  getUsers() {
    return service
      .get("/api/dashboard")
      .then(res => res.data)
      .catch(errorHandler);
  },

  getOneUser(userID) {
    return service
      .get(`/api/dashboard/${userID}`)
      .then(res => res.data)
      .catch(errorHandler);
  },

  editUser(userID) {
    return service
      .patch(`/api/dashboard/${userID}`)
      .then(res => res.data)
      .catch(errorHandler);
  },

  deleteUser(userID) {
    return service
      .delete(`/api/dashboard/${userID}`)
      .then(res => res.data)
      .catch(errorHandler);
  }

};

export default apiHandler;
