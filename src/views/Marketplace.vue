<template>
  <div class="mp">
    <h1>Marketplace</h1>
    <div class="apartments">
      <Asset v-for="asset in assets" :key="asset._id" :asset="asset" />
      <!-- lesson 1 Routing -->
      <!-- now we give the router link a command to go to the router name specifying the query with a page -->
    </div>
    <div class="pagination">
      <router-link
        :to="{ name: 'Marketplace', query: { page: page - 1 } }"
        v-if="page != 1"
        id="page-prev"
      >
        prev page</router-link
      >
      <router-link
        :to="{ name: 'Marketplace', query: { page: page + 1 } }"
        id="page-next"
      >
        Next page</router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Asset from "@/components/Asset.vue";
/////lesson 1 Routing
/// we need to tell the component that we will pass it a parameter called page
export default {
  name: "Home",
  props: ["page"],
  components: {
    Asset,
  },
  created() {
    this.$store.dispatch("fetchAssets");
  },
  computed: {
    assets() {
      console.log(this.$store.state.assets);

      return this.$store.state.assets;
    },
  },
};
</script>
<style scoped>
.mp {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.apartments {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 24px;
}
.pagination {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  justify-content: space-between;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>
