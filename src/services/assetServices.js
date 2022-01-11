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
  getAssets() {
    return apiClient.get("/assets");
  },
  getAsset(id) {
    return apiClient.get("/assets/" + id);
  },
};
