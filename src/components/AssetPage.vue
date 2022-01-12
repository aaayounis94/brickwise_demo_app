<template>
  <div v-if="asset">
    <h1>{{ asset.title }}</h1>
    <h4>{{ asset.address }}, {{ asset.location }}, {{ asset.postalCode }}</h4>
    <p>Share Price</p>
    <h1>{{ asset.sharePrice }}</h1>
    <p>ROI</p>
    <h1>{{ asset.rentalReturn }}</h1>
    <img v-bind:src="asset.images[asset.currentImage].src" alt="" />
    <div class="buttonGroup">
      <button class="prev" @click="prev" :disabled="asset.currentImage === 0">
        Prev
      </button>
      <button
        class="next"
        @click="next"
        :disabled="asset.currentImage === asset.images.length - 1"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import assetServices from "../services/assetServices.js";
export default {
  props: ["id"],
  data() {
    return {
      asset: null,
    };
  },
  // when the component is created fetsh the event data with ID
  created() {
    assetServices
      .getAsset(this.id)
      .then((response) => {
        console.log(response.data);
        this.asset = response.data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    prev() {
      if (this.$props.asset.currentImage > 0) {
        this.$props.asset.currentImage--;
      } else {
        this.$props.asset.currentImage = 0;
      }
    },
    next() {
      if (
        this.$props.asset.currentImage <
        this.$props.asset.images.length - 1
      ) {
        this.$props.asset.currentImage++;
      } else {
        this.$props.asset.currentImage = 0;
      }
    },
  },
};
</script>

<style scoped></style>
