import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/aaayounis94/brickwise_demo_app",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default {
  getAssets(perPage, page) {
    return apiClient.get("/assets?_limit" + perPage + "&page=" + page);
  },
  getAsset(id) {
    return apiClient.get("/assets/" + id);
  },
  nextPage() {},
  prevPage() {},
};
