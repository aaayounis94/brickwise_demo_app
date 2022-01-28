import { createStore } from "vuex";
import assetServices from "../services/assetServices.js";
export default createStore({
  state: {
    user: "Abdelhamid Younis",
    flashMessage: "",
    assets: [],
    asset: {},
  },
  mutations: {
    ADD_ASSET(state, asset) {
      this.state.asset.push(asset);
    },
    SET_ASSETS(state, assets) {
      state.assets = assets;
    },
    SET_ASSET(state, asset) {
      state.asset = asset;
    },
  },
  actions: {
    createAsset({ commit }, asset) {
      assetServices
        .postAsset(asset)
        .then(() => {
          // add this event to the vuex state
          commit("ADD_ASSET", asset);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchAssets({ commit }) {
      assetServices
        .getAssets()
        .then((response) => {
          commit("SET_ASSETS", response.data);
        })
        .catch(() => {
          return {
            name: "NetworkError",
          };
        });
    },
    fetchAsset({ commit }, id) {
      assetServices
        .getAsset(id)
        .then((response) => {
          commit("SET_ASSET", response.data);
        })
        .catch((error) => console.log(error));
    },
  },
  modules: {},
});
