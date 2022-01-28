<template>
  <div v-if="asset" class="asset">
    <div class="assetNav">
      <router-link :to="{ name: 'AssetPage' }">Details</router-link>
      <router-link :to="{ name: 'register' }">Register</router-link>
      <router-link :to="{ name: 'edit' }">Edit</router-link>
    </div>
    <router-view :asset="asset" />
  </div>
</template>

<script>
export default {
  props: ["id"],
  created() {
    this.$store.dispatch("fetchAsset", this.id);
  },
  computed: {
    asset() {
      return this.$store.state.asset;
    },
  },
};
</script>
<style scoped>
.asset {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.assetData {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 24px;
}
.metric {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
p {
  margin-bottom: 0px;
}
h1 {
  margin-top: 0px;
  margin-bottom: 0px;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 24px;
  width: 100%;
}
</style>
