<template>
  <h1>Marketplace</h1>
  <div class="apartments">
    <Asset v-for="asset in assets" :key="asset._id" :asset="asset" />
  </div>
</template>

<script>
// @ is an alias to /src
import Asset from "@/components/Asset.vue";
import assetServices from "../services/assetServices.js";
export default {
  name: "Home",
  components: {
    Asset,
  },
  data() {
    return {
      assets: null,
    };
  },
  created() {
    assetServices
      .getAssets()
      .then((response) => {
        console.log(response.data);
        this.assets = response.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>
<style scoped>
.apartments {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 24px;
}
</style>
