import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/aaayounis94/brickwise_demo_app",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
///// lesson 1 Routing
// to make the pagination  work we nedd to pass the API call a limit per page and a query param equal to the current page
export default {
  getAssets(perPage, page) {
    return apiClient.get("/assets?_limit=" + perPage + "&_page=" + page);
  },
  getAsset(id) {
    return apiClient.get("/assets/" + id);
  },
};
