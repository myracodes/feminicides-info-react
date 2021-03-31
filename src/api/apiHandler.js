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

  //Events
  allEvents() {
    return service
      .get("/api/dashboard/list/all-events")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  oneEvent(eventId) {
    return service
      .get(`/api/details-event/dashboard/${eventId}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  editEvent(eventId, eventInfo) {
    return service
      .patch(`/api/dashboard/edit-event/${eventId}`, eventInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteEvent(eventId) {
    return service
      .delete(`/api/dashboard/delete-event/${eventId}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  createEvent(body) {
    return service
      .post("/api/dashboard/new-event", body)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  //sign et log
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

  //Users

  getUsers() {
    return service
      .get("/api/dashboard/all-users")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // getOneUser(userID) {
  //   return service
  //     .get(`/api/dashboard/${userID}`)
  //     .then((res) => res.data)
  //     .catch(errorHandler);
  // },

  editUser(userID, userInfo) {
    return service
      .patch(`/api/dashboard/${userID}`, userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteUser(userID) {
    return service
      .delete(`/api/dashboard/${userID}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  //Regions

  allRegions() {
    return service
      .get("/api/dashboard/list/all-regions")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  oneRegion(regionId) {
    return service
      .get(`/api/dashboard/details-region/${regionId}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  editRegion(regionId, regionInfo) {
    return service
      .patch(`/api/dashboard/edit-region/${regionId}`, regionInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  //*Data et map*//

  //map
  mapAllEvents() {
    return service
      .get("/api/data/list/all-events")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  mapOneEvent(eventId) {
    return service
      .get(`/api/carte/detail/${eventId}`)
    /*   .then((res) => res.data)
      .catch(error => console.log(error)); */
  },

  mapRegions() {
    return service
      .get("/api/data/list/all-regions")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  //data
  dataAllEvents() {
    return service
      .get("/api/map/list/all-events")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  dataOneEvent(eventId) {
    return service
      .get(`/api/data/details/${eventId}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  dataRegions() {
    return service
      .get("/api/data/list/all-regions")
      .then((res) => res.data)
      .catch(errorHandler);
  }
};

export default apiHandler;
