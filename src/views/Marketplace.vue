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
        v-if="hasNextPage"
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
import assetServices from "../services/assetServices.js";
import { watchEffect } from "vue";
/////lesson 1 Routing
/// we need to tell the component that we will pass it a parameter called page
export default {
  name: "Home",
  props: ["page"],
  components: {
    Asset,
  },
  data() {
    return {
      assets: null,
      totalEvents: 0,
    };
  },
  created() {
    // now when we change the page in the component the api should be called again
    watchEffect(() => {
      // this will clear out the events in tghe page
      this.assets = null;
      assetServices
        .getAssets(2, this.page)
        .then((response) => {
          console.log(response.data);
          this.assets = response.data;
          this.totalEvents = response.headers["x-total-count"];
          console.log(this.totalEvents);
        })
        .catch((err) => {
          console.log(err);
          this.$router.push({
            name: "NetworkError",
          });
        });
    });
  },
  computed: {
    hasNextPage() {
      var totalPages = Math.ceil(this.totalEvents / 2);
      return this.page < totalPages;
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
