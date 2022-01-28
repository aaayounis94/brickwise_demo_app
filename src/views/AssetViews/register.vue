<template>
  <h1>Add an asset</h1>

  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <h3>Name & describe your asset</h3>

      <label>Title</label>
      <input v-model="asset.title" type="text" placeholder="Title" />

      <label>Address</label>
      <input v-model="asset.address" type="text" placeholder="Address" />
      <label>Rental return</label>
      <input
        v-model="asset.rentalReturn"
        type="number"
        placeholder="Rental return"
      />
      <label>Share price</label>
      <input
        v-model="asset.sgarePrice"
        type="number"
        placeholder="Share price"
      />
      <label>Available Bricks</label>
      <input
        v-model="asset.availableBricks"
        type="number"
        placeholder="Available bricks"
      />
      <button class="register" @click="register">Register</button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      unsavedChanges: false,
      asset: {
        currentImage: 0,
        id: "",
        title: "",
        address: "",
        rentalReturn: null,
        sharePrice: null,
        bricks: 0,
        availableBricks: null,
        images: [
          {
            _id: "6154071d60d54163693e17a7",
            src: "https://cdn.brickwise.at/03feb2d6-b13a-4f1e-8794-158e2229c1ed.jpg",
          },
          {
            _id: "6154071d60d54101c73e17a8",
            src: "https://cdn.brickwise.at/2aa11982-2b74-4d06-950a-6a70aeafe907.jpg",
          },
          {
            _id: "6154071d60d54177273e17a9",
            src: "https://cdn.brickwise.at/85b7597c-837a-4500-baa5-249b31826266.jpg",
          },
          {
            _id: "6154071d60d541f9833e17aa",
            src: "https://cdn.brickwise.at/a817dfb0-b9c8-402b-b6a4-1c4880950a2f.jpg",
          },
        ],
      },
    };
  },
  beforeRouteLeave(routeTo, routeFrom, next) {
    if (this.unsavedChanges) {
      const answer = window.confirm(
        "Are you sure you want to leave, you have unsaved changes"
      );
      if (answer) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  },
  methods: {
    register() {
      this.asset.id = uuidv4();
      console.log("registered");
      this.$store.dispatch("createAsset", this.asset);
      this.$router.replace({
        name: "AssetPage",
        // we dont need to specify the iD it will get populated  by default
        params: { id: this.asset.id },
      });
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
