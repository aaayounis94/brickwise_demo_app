<template>
  <div v-if="asset" class="asset">
    <h1>{{ asset.title }}</h1>
    <h4>{{ asset.address }}, {{ asset.location }}, {{ asset.postalCode }}</h4>
    <div class="assetData">
      <div class="metric">
        <p>Share Price</p>
        <h1>{{ asset.sharePrice }}</h1>
      </div>
      <div class="metric">
        <p>ROI</p>
        <h1>{{ asset.rentalReturn }}</h1>
      </div>
    </div>
    <div class="gallery">
      <div v-for="image in asset.images" :key="image.id">
        <img :src="image.src" />
      </div>
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
      if (this.asset.currentImage > 0) {
        this.asset.currentImage--;
      } else {
        this.asset.currentImage = 0;
      }
    },
    next() {
      if (this.asset.currentImage < this.asset.images.length - 1) {
        this.asset.currentImage++;
      } else {
        this.asset.currentImage = 0;
      }
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
